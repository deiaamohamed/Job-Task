import React, { useRef, useEffect, useState } from "react";
// Assuming you have a class utility function like 'cn' for Tailwind/clsx
// If not, replace cn(...) with a simple string or a utility you have.
// Example: import { cn } from "@/lib/utils";
const cn = (s1, s2) => `${s1} ${s2}`; // Placeholder for cn

// --- 1. Type and Interface Replacements (for context, these aren't used in JS) ---

/**
 * @typedef {{ r: number, g: number, b: number }} ColorRGB
 * @typedef {{
 * SIM_RESOLUTION: number, DYE_RESOLUTION: number, CAPTURE_RESOLUTION: number,
 * DENSITY_DISSIPATION: number, VELOCITY_DISSIPATION: number, PRESSURE: number,
 * PRESSURE_ITERATIONS: number, CURL: number, SPLAT_RADIUS: number,
 * SPLAT_FORCE: number, SHADING: boolean, COLOR_UPDATE_SPEED: number,
 * PAUSED: boolean, BACK_COLOR: ColorRGB, TRANSPARENT: boolean
 * }} FluidConfig
 * @typedef {{
 * id: number, texcoordX: number, texcoordY: number, prevTexcoordX: number,
 * prevTexcoordY: number, deltaX: number, deltaY: number, down: boolean,
 * moved: boolean, color: ColorRGB
 * }} Pointer
 * @typedef {{
 * texture: WebGLTexture, fbo: WebGLFramebuffer, width: number,
 * height: number, texelSizeX: number, texelSizeY: number, attach: (id: number) => number
 * }} FBO
 * @typedef {{
 * width: number, height: number, texelSizeX: number, texelSizeY: number,
 * read: FBO, write: FBO, swap: () => void
 * }} DoubleFBO
 * @typedef {{ program: WebGLProgram | null, uniforms: Record<string, WebGLUniformLocation | null> }} Program
 * @typedef {Program & { setKeywords: (keywords: string[]) => void }} Material
 */

// --- 2. Prop Definitions and Defaults ---

const defaultProps = {
  simResolution: 128,
  dyeResolution: 1440,
  captureResolution: 512,
  densityDissipation: 3.5,
  velocityDissipation: 2,
  pressure: 0.1,
  pressureIterations: 20,
  curl: 3,
  splatRadius: 0.2,
  splatForce: 6000,
  shading: true,
  colorUpdateSpeed: 10,
  backColor: { r: 0.5, g: 0, b: 0 },
  transparent: true,
  className: "",
};

function pointerPrototype() {
  return {
    id: -1,
    texcoordX: 0,
    texcoordY: 0,
    prevTexcoordX: 0,
    prevTexcoordY: 0,
    deltaX: 0,
    deltaY: 0,
    down: false,
    moved: false,
    color: { r: 0, g: 0, b: 0 },
  };
}

// --- 3. GLSL Shaders (Defined as constants outside for clean code) ---

const baseVertexShaderSource = `
    precision highp float;
    attribute vec2 aPosition;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform vec2 texelSize;

    void main () {
      vUv = aPosition * 0.5 + 0.5;
      vL = vUv - vec2(texelSize.x, 0.0);
      vR = vUv + vec2(texelSize.x, 0.0);
      vT = vUv + vec2(0.0, texelSize.y);
      vB = vUv - vec2(0.0, texelSize.y);
      gl_Position = vec4(aPosition, 0.0, 1.0);
    }
  `;

const copyShaderSource = `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    void main () {
      gl_FragColor = texture2D(uTexture, vUv);
    }
  `;

const clearShaderSource = `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    uniform sampler2D uTexture;
    uniform float value;
    void main () {
      gl_FragColor = value * texture2D(uTexture, vUv);
    }
  `;

const displayShaderSource = `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uTexture;
    uniform sampler2D uDithering;
    uniform vec2 ditherScale;
    uniform vec2 texelSize;
    vec3 linearToGamma (vec3 color) {
      color = max(color, vec3(0));
      return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
    }
    void main () {
      vec3 c = texture2D(uTexture, vUv).rgb;
      #ifdef SHADING
        vec3 lc = texture2D(uTexture, vL).rgb;
        vec3 rc = texture2D(uTexture, vR).rgb;
        vec3 tc = texture2D(uTexture, vT).rgb;
        vec3 bc = texture2D(uTexture, vB).rgb;
        float dx = length(rc) - length(lc);
        float dy = length(tc) - length(bc);
        vec3 n = normalize(vec3(dx, dy, length(texelSize)));
        vec3 l = vec3(0.0, 0.0, 1.0);
        float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
        c *= diffuse;
      #endif
      float a = max(c.r, max(c.g, c.b));
      gl_FragColor = vec4(c, a);
    }
  `;

const splatShaderSource = `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uTarget;
    uniform float aspectRatio;
    uniform vec3 color;
    uniform vec2 point;
    uniform float radius;
    void main () {
      vec2 p = vUv - point.xy;
      p.x *= aspectRatio;
      vec3 splat = exp(-dot(p, p) / radius) * color;
      vec3 base = texture2D(uTarget, vUv).xyz;
      gl_FragColor = vec4(base + splat, 1.0);
    }
  `;

const advectionShaderSource = `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    uniform sampler2D uVelocity;
    uniform sampler2D uSource;
    uniform vec2 texelSize;
    uniform vec2 dyeTexelSize;
    uniform float dt;
    uniform float dissipation;
    vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
      vec2 st = uv / tsize - 0.5;
      vec2 iuv = floor(st);
      vec2 fuv = fract(st);
      vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
      vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
      vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
      vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);
      return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
    }
    void main () {
      #ifdef MANUAL_FILTERING
        vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
        vec4 result = bilerp(uSource, coord, dyeTexelSize);
      #else
        vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
        vec4 result = texture2D(uSource, coord);
      #endif
      float decay = 1.0 + dissipation * dt;
      gl_FragColor = result / decay;
    }
  `;

const divergenceShaderSource = `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).x;
      float R = texture2D(uVelocity, vR).x;
      float T = texture2D(uVelocity, vT).y;
      float B = texture2D(uVelocity, vB).y;
      vec2 C = texture2D(uVelocity, vUv).xy;
      if (vL.x < 0.0) { L = -C.x; }
      if (vR.x > 1.0) { R = -C.x; }
      if (vT.y > 1.0) { T = -C.y; }
      if (vB.y < 0.0) { B = -C.y; }
      float div = 0.5 * (R - L + T - B);
      gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
    }
  `;

const curlShaderSource = `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uVelocity, vL).y;
      float R = texture2D(uVelocity, vR).y;
      float T = texture2D(uVelocity, vT).x;
      float B = texture2D(uVelocity, vB).x;
      float vorticity = R - L - T + B;
      gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
    }
  `;

const vorticityShaderSource = `
    precision highp float;
    precision highp sampler2D;
    varying vec2 vUv;
    varying vec2 vL;
    varying vec2 vR;
    varying vec2 vT;
    varying vec2 vB;
    uniform sampler2D uVelocity;
    uniform sampler2D uCurl;
    uniform float curl;
    uniform float dt;
    void main () {
      float L = texture2D(uCurl, vL).x;
      float R = texture2D(uCurl, vR).x;
      float T = texture2D(uCurl, vT).x;
      float B = texture2D(uCurl, vB).x;
      float C = texture2D(uCurl, vUv).x;
      vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
      force /= length(force) + 0.0001;
      force *= curl * C;
      force.y *= -1.0;
      vec2 velocity = texture2D(uVelocity, vUv).xy;
      velocity += force * dt;
      velocity = min(max(velocity, -1000.0), 1000.0);
      gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
  `;

const pressureShaderSource = `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uDivergence;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      float C = texture2D(uPressure, vUv).x;
      float divergence = texture2D(uDivergence, vUv).x;
      float pressure = (L + R + B + T - divergence) * 0.25;
      gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
    }
  `;

const gradientSubtractShaderSource = `
    precision mediump float;
    precision mediump sampler2D;
    varying highp vec2 vUv;
    varying highp vec2 vL;
    varying highp vec2 vR;
    varying highp vec2 vT;
    varying highp vec2 vB;
    uniform sampler2D uPressure;
    uniform sampler2D uVelocity;
    void main () {
      float L = texture2D(uPressure, vL).x;
      float R = texture2D(uPressure, vR).x;
      float T = texture2D(uPressure, vT).x;
      float B = texture2D(uPressure, vB).x;
      vec2 velocity = texture2D(uVelocity, vUv).xy;
      velocity.xy -= vec2(R - L, T - B);
      gl_FragColor = vec4(velocity, 0.0, 1.0);
    }
  `;

// --- 4. React Component ---

const FluidCursorEffect = (userProps) => {
  const props = { ...defaultProps, ...userProps };

  // Refs for the canvas and for holding mutable, non-reactive GL state
  const canvasRef = useRef(null);
  const glStateRef = useRef({
    gl: null,
    ext: null,
    // Configuration that can be updated from props
    config: {
      ...defaultProps,
      BACK_COLOR: props.backColor, // Ensure objects are copied
      PAUSED: false,
    },
    // Simulation state
    pointers: [pointerPrototype()],
    lastUpdateTime: Date.now(),
    colorUpdateTimer: 0.0,
    animationFrameId: null,
    // FBOs and Programs (will be initialized in useEffect)
    dye: null,
    velocity: null,
    divergence: null,
    curl: null,
    pressure: null,
    copyProgram: null,
    clearProgram: null,
    splatProgram: null,
    advectionProgram: null,
    divergenceProgram: null,
    curlProgram: null,
    vorticityProgram: null,
    pressureProgram: null,
    gradienSubtractProgram: null,
    displayMaterial: null,
  });

  // Effect to handle initial setup, WebGL logic, and cleanup (similar to onMounted)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // A reference to the mutable state for easy access in inner functions
    const state = glStateRef.current;
    const config = state.config;
    const pointers = state.pointers;

    // --- 5. WebGL Utility Functions (Same as original, using 'gl' from closure) ---

    function hashCode(s) {
      if (!s.length) return 0;
      let hash = 0;
      for (let i = 0; i < s.length; i++) {
        hash = (hash << 5) - hash + s.charCodeAt(i);
        hash |= 0;
      }
      return hash;
    }

    function addKeywords(source, keywords) {
      if (!keywords) return source;
      let keywordsString = "";
      for (const keyword of keywords) {
        keywordsString += `#define ${keyword}\n`;
      }
      return keywordsString + source;
    }

    function compileShader(type, source, keywords = null) {
      const shaderSource = addKeywords(source, keywords);
      const shader = state.gl.createShader(type);
      if (!shader) return null;
      state.gl.shaderSource(shader, shaderSource);
      state.gl.compileShader(shader);
      // Omitted error checking for brevity in conversion, assume success or handle externally
      return shader;
    }

    function createProgram(vertexShader, fragmentShader) {
      if (!vertexShader || !fragmentShader) return null;
      const program = state.gl.createProgram();
      if (!program) return null;
      state.gl.attachShader(program, vertexShader);
      state.gl.attachShader(program, fragmentShader);
      state.gl.linkProgram(program);
      // Omitted error checking
      return program;
    }

    function getUniforms(program) {
      const uniforms = {};
      const uniformCount = state.gl.getProgramParameter(
        program,
        state.gl.ACTIVE_UNIFORMS
      );
      for (let i = 0; i < uniformCount; i++) {
        const uniformInfo = state.gl.getActiveUniform(program, i);
        if (uniformInfo) {
          uniforms[uniformInfo.name] = state.gl.getUniformLocation(
            program,
            uniformInfo.name
          );
        }
      }
      return uniforms;
    }

    // --- 6. WebGL Classes (Program and Material) ---

    class Program {
      constructor(vertexShader, fragmentShader) {
        this.program = createProgram(vertexShader, fragmentShader);
        this.uniforms = this.program ? getUniforms(this.program) : {};
      }

      bind() {
        if (this.program) state.gl.useProgram(this.program);
      }
    }

    class Material extends Program {
      constructor(vertexShader, fragmentShaderSource) {
        // Dummy call to super, will set program/uniforms in setKeywords
        super(null, null);
        this.vertexShader = vertexShader;
        this.fragmentShaderSource = fragmentShaderSource;
        this.programs = {};
        this.activeProgram = null;
        this.uniforms = {};
      }

      setKeywords(keywords) {
        let hash = 0;
        for (const kw of keywords) {
          hash += hashCode(kw);
        }
        let program = this.programs[hash];
        if (program == null) {
          const fragmentShader = compileShader(
            state.gl.FRAGMENT_SHADER,
            this.fragmentShaderSource,
            keywords
          );
          program = createProgram(this.vertexShader, fragmentShader);
          this.programs[hash] = program;
        }
        if (program === this.activeProgram) return;
        if (program) {
          this.uniforms = getUniforms(program);
        }
        this.activeProgram = program;
        this.program = program; // Update base class program ref
      }

      bind() {
        if (this.activeProgram) {
          state.gl.useProgram(this.activeProgram);
        }
      }
    }

    // --- 7. FBO Helpers ---

    function getSupportedFormat(gl, internalFormat, format, type) {
      const supportRenderTextureFormat = (gl, internalFormat, format, type) => {
        const texture = gl.createTexture();
        if (!texture) return false;
        gl.bindTexture(gl.TEXTURE_2D, texture);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          internalFormat,
          4,
          4,
          0,
          format,
          type,
          null
        );
        const fbo = gl.createFramebuffer();
        if (!fbo) return false;
        gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
        gl.framebufferTexture2D(
          gl.FRAMEBUFFER,
          gl.COLOR_ATTACHMENT0,
          gl.TEXTURE_2D,
          texture,
          0
        );
        const status = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
        return status === gl.FRAMEBUFFER_COMPLETE;
      };

      if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
        if ("drawBuffers" in gl) {
          const gl2 = gl;
          switch (internalFormat) {
            case gl2.R16F:
              return getSupportedFormat(gl2, gl2.RG16F, gl2.RG, type);
            case gl2.RG16F:
              return getSupportedFormat(gl2, gl2.RGBA16F, gl2.RGBA, type);
            default:
              return null;
          }
        }
        return null;
      }
      return { internalFormat, format };
    }

    function getWebGLContext(canvas) {
      const params = {
        alpha: true,
        depth: false,
        stencil: false,
        antialias: false,
        preserveDrawingBuffer: false,
      };

      let gl = canvas.getContext("webgl2", params);
      if (!gl) {
        gl =
          canvas.getContext("webgl", params) ||
          canvas.getContext("experimental-webgl", params);
      }
      if (!gl) {
        throw new Error("Unable to initialize WebGL.");
      }

      const isWebGL2 = "drawBuffers" in gl;
      let supportLinearFiltering = false;
      let halfFloat = null;

      if (isWebGL2) {
        gl.getExtension("EXT_color_buffer_float");
        supportLinearFiltering = !!gl.getExtension("OES_texture_float_linear");
      } else {
        halfFloat = gl.getExtension("OES_texture_half_float");
        supportLinearFiltering = !!gl.getExtension(
          "OES_texture_half_float_linear"
        );
      }

      gl.clearColor(0, 0, 0, 1);

      const halfFloatTexType = isWebGL2
        ? gl.HALF_FLOAT
        : (halfFloat && halfFloat.HALF_FLOAT_OES) || 0;

      let formatRGBA, formatRG, formatR;

      if (isWebGL2) {
        formatRGBA = getSupportedFormat(
          gl,
          gl.RGBA16F,
          gl.RGBA,
          halfFloatTexType
        );
        formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
      } else {
        formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
        formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
      }

      return {
        gl,
        ext: {
          formatRGBA,
          formatRG,
          formatR,
          halfFloatTexType,
          supportLinearFiltering,
        },
      };
    }

    const { gl, ext } = getWebGLContext(canvas);
    state.gl = gl;
    state.ext = ext;

    if (!ext.supportLinearFiltering) {
      config.DYE_RESOLUTION = 256;
      config.SHADING = false;
    }

    function createFBO(w, h, internalFormat, format, type, param) {
      gl.activeTexture(gl.TEXTURE0);
      const texture = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        internalFormat,
        w,
        h,
        0,
        format,
        type,
        null
      );
      const fbo = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0
      );
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      const texelSizeX = 1 / w;
      const texelSizeY = 1 / h;
      return {
        texture,
        fbo,
        width: w,
        height: h,
        texelSizeX,
        texelSizeY,
        attach(id) {
          gl.activeTexture(gl.TEXTURE0 + id);
          gl.bindTexture(gl.TEXTURE_2D, texture);
          return id;
        },
      };
    }

    function createDoubleFBO(w, h, internalFormat, format, type, param) {
      const fbo1 = createFBO(w, h, internalFormat, format, type, param);
      const fbo2 = createFBO(w, h, internalFormat, format, type, param);
      return {
        width: w,
        height: h,
        texelSizeX: fbo1.texelSizeX,
        texelSizeY: fbo1.texelSizeY,
        read: fbo1,
        write: fbo2,
        swap() {
          const tmp = this.read;
          this.read = this.write;
          this.write = tmp;
        },
      };
    }

    function resizeFBO(target, w, h, internalFormat, format, type, param) {
      const newFBO = createFBO(w, h, internalFormat, format, type, param);
      state.copyProgram.bind();
      if (state.copyProgram.uniforms.uTexture)
        gl.uniform1i(state.copyProgram.uniforms.uTexture, target.attach(0));
      blit(newFBO, false);
      return newFBO;
    }

    function resizeDoubleFBO(
      target,
      w,
      h,
      internalFormat,
      format,
      type,
      param
    ) {
      if (target.width === w && target.height === h) return target;
      target.read = resizeFBO(
        target.read,
        w,
        h,
        internalFormat,
        format,
        type,
        param
      );
      target.write = createFBO(w, h, internalFormat, format, type, param);
      target.width = w;
      target.height = h;
      target.texelSizeX = 1 / w;
      target.texelSizeY = 1 / h;
      return target;
    }

    function getResolution(resolution) {
      const w = gl.drawingBufferWidth;
      const h = gl.drawingBufferHeight;
      const aspectRatio = w / h;
      const aspect = aspectRatio < 1 ? 1 / aspectRatio : aspectRatio;
      const min = Math.round(resolution);
      const max = Math.round(resolution * aspect);
      if (w > h) {
        return { width: max, height: min };
      }
      return { width: min, height: max };
    }

    function scaleByPixelRatio(input) {
      const pixelRatio = window.devicePixelRatio || 1;
      return Math.floor(input * pixelRatio);
    }

    function HSVtoRGB(h, s, v) {
      let r = 0;
      let g = 0;
      let b = 0;
      const i = Math.floor(h * 6);
      const f = h * 6 - i;
      const p = v * (1 - s);
      const q = v * (1 - f * s);
      const t = v * (1 - (1 - f) * s);
      switch (i % 6) {
        case 0:
          r = v;
          g = t;
          b = p;
          break;
        case 1:
          r = q;
          g = v;
          b = p;
          break;
        case 2:
          r = p;
          g = v;
          b = t;
          break;
        case 3:
          r = p;
          g = q;
          b = v;
          break;
        case 4:
          r = t;
          g = p;
          b = v;
          break;
        case 5:
          r = v;
          g = p;
          b = q;
          break;
      }
      return { r, g, b };
    }

    function generateColor() {
      const c = HSVtoRGB(Math.random(), 1.0, 1.0);
      c.r *= 0.15;
      c.g *= 0.15;
      c.b *= 0.15;
      return c;
    }

    function wrap(value, min, max) {
      const range = max - min;
      if (range === 0) return min;
      return ((value - min) % range) + min;
    }

    // --- 8. Core WebGL Setup/Loop/Interaction ---

    const blit = (() => {
      const buffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]),
        gl.STATIC_DRAW
      );
      const elemBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, elemBuffer);
      gl.bufferData(
        gl.ELEMENT_ARRAY_BUFFER,
        new Uint16Array([0, 1, 2, 0, 2, 3]),
        gl.STATIC_DRAW
      );
      gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(0);

      return (target, doClear = false) => {
        if (!gl) return;
        if (!target) {
          gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
          gl.bindFramebuffer(gl.FRAMEBUFFER, null);
        } else {
          gl.viewport(0, 0, target.width, target.height);
          gl.bindFramebuffer(gl.FRAMEBUFFER, target.fbo);
        }
        if (doClear) {
          gl.clearColor(0, 0, 0, 1);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
      };
    })();

    const baseVertexShader = compileShader(
      gl.VERTEX_SHADER,
      baseVertexShaderSource
    );
    const copyShader = compileShader(gl.FRAGMENT_SHADER, copyShaderSource);
    const clearShader = compileShader(gl.FRAGMENT_SHADER, clearShaderSource);
    const advectionShader = compileShader(
      gl.FRAGMENT_SHADER,
      advectionShaderSource,
      ext.supportLinearFiltering ? null : ["MANUAL_FILTERING"]
    );
    const divergenceShader = compileShader(
      gl.FRAGMENT_SHADER,
      divergenceShaderSource
    );
    const curlShader = compileShader(gl.FRAGMENT_SHADER, curlShaderSource);
    const splatShader = compileShader(gl.FRAGMENT_SHADER, splatShaderSource);
    const vorticityShader = compileShader(
      gl.FRAGMENT_SHADER,
      vorticityShaderSource
    );
    const pressureShader = compileShader(
      gl.FRAGMENT_SHADER,
      pressureShaderSource
    );
    const gradientSubtractShader = compileShader(
      gl.FRAGMENT_SHADER,
      gradientSubtractShaderSource
    );

    state.copyProgram = new Program(baseVertexShader, copyShader);
    state.clearProgram = new Program(baseVertexShader, clearShader);
    state.splatProgram = new Program(baseVertexShader, splatShader);
    state.advectionProgram = new Program(baseVertexShader, advectionShader);
    state.divergenceProgram = new Program(baseVertexShader, divergenceShader);
    state.curlProgram = new Program(baseVertexShader, curlShader);
    state.vorticityProgram = new Program(baseVertexShader, vorticityShader);
    state.pressureProgram = new Program(baseVertexShader, pressureShader);
    state.gradienSubtractProgram = new Program(
      baseVertexShader,
      gradientSubtractShader
    );
    state.displayMaterial = new Material(baseVertexShader, displayShaderSource);

    function updateKeywords() {
      const displayKeywords = [];
      if (config.SHADING) displayKeywords.push("SHADING");
      state.displayMaterial.setKeywords(displayKeywords);
    }

    function initFramebuffers() {
      const simRes = getResolution(config.SIM_RESOLUTION);
      const dyeRes = getResolution(config.DYE_RESOLUTION);

      const texType = ext.halfFloatTexType;
      const rgba = ext.formatRGBA;
      const rg = ext.formatRG;
      const r = ext.formatR;
      const filtering = ext.supportLinearFiltering ? gl.LINEAR : gl.NEAREST;
      gl.disable(gl.BLEND);

      // Initialize or resize dye
      state.dye = state.dye
        ? resizeDoubleFBO(
            state.dye,
            dyeRes.width,
            dyeRes.height,
            rgba.internalFormat,
            rgba.format,
            texType,
            filtering
          )
        : createDoubleFBO(
            dyeRes.width,
            dyeRes.height,
            rgba.internalFormat,
            rgba.format,
            texType,
            filtering
          );

      // Initialize or resize velocity
      state.velocity = state.velocity
        ? resizeDoubleFBO(
            state.velocity,
            simRes.width,
            simRes.height,
            rg.internalFormat,
            rg.format,
            texType,
            filtering
          )
        : createDoubleFBO(
            simRes.width,
            simRes.height,
            rg.internalFormat,
            rg.format,
            texType,
            filtering
          );

      // Initialize or resize divergence, curl, pressure
      state.divergence = createFBO(
        simRes.width,
        simRes.height,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
      state.curl = createFBO(
        simRes.width,
        simRes.height,
        r.internalFormat,
        r.format,
        texType,
        gl.NEAREST
      );
      state.pressure = state.pressure
        ? resizeDoubleFBO(
            state.pressure,
            simRes.width,
            simRes.height,
            r.internalFormat,
            r.format,
            texType,
            gl.NEAREST
          )
        : createDoubleFBO(
            simRes.width,
            simRes.height,
            r.internalFormat,
            r.format,
            texType,
            gl.NEAREST
          );
    }

    function step(dt) {
      gl.disable(gl.BLEND);

      // Curl
      state.curlProgram.bind();
      gl.uniform2f(
        state.curlProgram.uniforms.texelSize,
        state.velocity.texelSizeX,
        state.velocity.texelSizeY
      );
      gl.uniform1i(
        state.curlProgram.uniforms.uVelocity,
        state.velocity.read.attach(0)
      );
      blit(state.curl);

      // Vorticity
      state.vorticityProgram.bind();
      gl.uniform2f(
        state.vorticityProgram.uniforms.texelSize,
        state.velocity.texelSizeX,
        state.velocity.texelSizeY
      );
      gl.uniform1i(
        state.vorticityProgram.uniforms.uVelocity,
        state.velocity.read.attach(0)
      );
      gl.uniform1i(state.vorticityProgram.uniforms.uCurl, state.curl.attach(1));
      gl.uniform1f(state.vorticityProgram.uniforms.curl, config.CURL);
      gl.uniform1f(state.vorticityProgram.uniforms.dt, dt);
      blit(state.velocity.write);
      state.velocity.swap();

      // Divergence
      state.divergenceProgram.bind();
      gl.uniform2f(
        state.divergenceProgram.uniforms.texelSize,
        state.velocity.texelSizeX,
        state.velocity.texelSizeY
      );
      gl.uniform1i(
        state.divergenceProgram.uniforms.uVelocity,
        state.velocity.read.attach(0)
      );
      blit(state.divergence);

      // Clear pressure
      state.clearProgram.bind();
      gl.uniform1i(
        state.clearProgram.uniforms.uTexture,
        state.pressure.read.attach(0)
      );
      gl.uniform1f(state.clearProgram.uniforms.value, config.PRESSURE);
      blit(state.pressure.write);
      state.pressure.swap();

      // Pressure Iterations
      state.pressureProgram.bind();
      gl.uniform2f(
        state.pressureProgram.uniforms.texelSize,
        state.velocity.texelSizeX,
        state.velocity.texelSizeY
      );
      gl.uniform1i(
        state.pressureProgram.uniforms.uDivergence,
        state.divergence.attach(0)
      );
      for (let i = 0; i < config.PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(
          state.pressureProgram.uniforms.uPressure,
          state.pressure.read.attach(1)
        );
        blit(state.pressure.write);
        state.pressure.swap();
      }

      // Gradient Subtract
      state.gradienSubtractProgram.bind();
      gl.uniform2f(
        state.gradienSubtractProgram.uniforms.texelSize,
        state.velocity.texelSizeX,
        state.velocity.texelSizeY
      );
      gl.uniform1i(
        state.gradienSubtractProgram.uniforms.uPressure,
        state.pressure.read.attach(0)
      );
      gl.uniform1i(
        state.gradienSubtractProgram.uniforms.uVelocity,
        state.velocity.read.attach(1)
      );
      blit(state.velocity.write);
      state.velocity.swap();

      // Advection - velocity
      state.advectionProgram.bind();
      gl.uniform2f(
        state.advectionProgram.uniforms.texelSize,
        state.velocity.texelSizeX,
        state.velocity.texelSizeY
      );
      if (!ext.supportLinearFiltering) {
        gl.uniform2f(
          state.advectionProgram.uniforms.dyeTexelSize,
          state.velocity.texelSizeX,
          state.velocity.texelSizeY
        );
      }
      const velocityId = state.velocity.read.attach(0);
      gl.uniform1i(state.advectionProgram.uniforms.uVelocity, velocityId);
      gl.uniform1i(state.advectionProgram.uniforms.uSource, velocityId);
      gl.uniform1f(state.advectionProgram.uniforms.dt, dt);
      gl.uniform1f(
        state.advectionProgram.uniforms.dissipation,
        config.VELOCITY_DISSIPATION
      );
      blit(state.velocity.write);
      state.velocity.swap();

      // Advection - dye
      if (!ext.supportLinearFiltering) {
        gl.uniform2f(
          state.advectionProgram.uniforms.dyeTexelSize,
          state.dye.texelSizeX,
          state.dye.texelSizeY
        );
      }
      gl.uniform1i(
        state.advectionProgram.uniforms.uVelocity,
        state.velocity.read.attach(0)
      );
      gl.uniform1i(
        state.advectionProgram.uniforms.uSource,
        state.dye.read.attach(1)
      );
      gl.uniform1f(
        state.advectionProgram.uniforms.dissipation,
        config.DENSITY_DISSIPATION
      );
      blit(state.dye.write);
      state.dye.swap();
    }

    function render(target) {
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.enable(gl.BLEND);
      drawDisplay(target);
    }

    function drawDisplay(target) {
      const width = target ? target.width : gl.drawingBufferWidth;
      const height = target ? target.height : gl.drawingBufferHeight;
      state.displayMaterial.bind();
      if (config.SHADING) {
        gl.uniform2f(
          state.displayMaterial.uniforms.texelSize,
          1 / width,
          1 / height
        );
      }
      gl.uniform1i(
        state.displayMaterial.uniforms.uTexture,
        state.dye.read.attach(0)
      );
      blit(target, false);
    }

    function correctRadius(radius) {
      const aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) radius *= aspectRatio;
      return radius;
    }

    function splat(x, y, dx, dy, color) {
      // Splat velocity
      state.splatProgram.bind();
      gl.uniform1i(
        state.splatProgram.uniforms.uTarget,
        state.velocity.read.attach(0)
      );
      gl.uniform1f(
        state.splatProgram.uniforms.aspectRatio,
        canvas.width / canvas.height
      );
      gl.uniform2f(state.splatProgram.uniforms.point, x, y);
      gl.uniform3f(state.splatProgram.uniforms.color, dx, dy, 0);
      gl.uniform1f(
        state.splatProgram.uniforms.radius,
        correctRadius(config.SPLAT_RADIUS / 100)
      );
      blit(state.velocity.write);
      state.velocity.swap();

      // Splat dye
      gl.uniform1i(
        state.splatProgram.uniforms.uTarget,
        state.dye.read.attach(0)
      );
      gl.uniform3f(
        state.splatProgram.uniforms.color,
        color.r,
        color.g,
        color.b
      );
      blit(state.dye.write);
      state.dye.swap();
    }

    function splatPointer(pointer) {
      const dx = pointer.deltaX * config.SPLAT_FORCE;
      const dy = pointer.deltaY * config.SPLAT_FORCE;
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, pointer.color);
    }

    function clickSplat(pointer) {
      const color = generateColor();
      color.r *= 10;
      color.g *= 10;
      color.b *= 10;
      const dx = 10 * (Math.random() - 0.5);
      const dy = 30 * (Math.random() - 0.5);
      splat(pointer.texcoordX, pointer.texcoordY, dx, dy, color);
    }

    function correctDeltaX(delta) {
      const aspectRatio = canvas.width / canvas.height;
      if (aspectRatio < 1) delta *= aspectRatio;
      return delta;
    }

    function correctDeltaY(delta) {
      const aspectRatio = canvas.width / canvas.height;
      if (aspectRatio > 1) delta /= aspectRatio;
      return delta;
    }

    function updatePointerDownData(pointer, id, posX, posY) {
      pointer.id = id;
      pointer.down = true;
      pointer.moved = false;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1 - posY / canvas.height;
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.deltaX = 0;
      pointer.deltaY = 0;
      pointer.color = generateColor();
    }

    function updatePointerMoveData(pointer, posX, posY, color) {
      pointer.prevTexcoordX = pointer.texcoordX;
      pointer.prevTexcoordY = pointer.texcoordY;
      pointer.texcoordX = posX / canvas.width;
      pointer.texcoordY = 1 - posY / canvas.height;
      pointer.deltaX = correctDeltaX(pointer.texcoordX - pointer.prevTexcoordX);
      pointer.deltaY = correctDeltaY(pointer.texcoordY - pointer.prevTexcoordY);
      pointer.moved =
        Math.abs(pointer.deltaX) > 0 || Math.abs(pointer.deltaY) > 0;
      pointer.color = color;
    }

    function updatePointerUpData(pointer) {
      pointer.down = false;
    }

    function calcDeltaTime() {
      const now = Date.now();
      let dt = (now - state.lastUpdateTime) / 1000;
      dt = Math.min(dt, 0.016666);
      state.lastUpdateTime = now;
      return dt;
    }

    function resizeCanvas() {
      const width = scaleByPixelRatio(canvas.clientWidth);
      const height = scaleByPixelRatio(canvas.clientHeight);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
      }
      return false;
    }

    function updateColors(dt) {
      state.colorUpdateTimer += dt * config.COLOR_UPDATE_SPEED;
      if (state.colorUpdateTimer >= 1) {
        state.colorUpdateTimer = wrap(state.colorUpdateTimer, 0, 1);
        pointers.forEach((p) => {
          p.color = generateColor();
        });
      }
    }

    function applyInputs() {
      for (const p of pointers) {
        if (p.moved) {
          p.moved = false;
          splatPointer(p);
        }
      }
    }

    function updateFrame() {
      const dt = calcDeltaTime();
      if (resizeCanvas()) initFramebuffers();
      updateColors(dt);
      applyInputs();
      step(dt);
      render(null);
      state.animationFrameId = requestAnimationFrame(updateFrame);
    }

    // --- Initial setup ---
    updateKeywords();
    initFramebuffers();

    // --- Event Listeners ---

    // Mouse Down
    const onMouseDown = (e) => {
      const pointer = pointers[0];
      const posX = scaleByPixelRatio(e.clientX);
      const posY = scaleByPixelRatio(e.clientY);
      updatePointerDownData(pointer, -1, posX, posY);
      clickSplat(pointer);
    };

    // Mouse Move (First Move handler starts the loop, then is removed)
    const handleFirstMouseMove = (e) => {
      const pointer = pointers[0];
      const posX = scaleByPixelRatio(e.clientX);
      const posY = scaleByPixelRatio(e.clientY);
      const color = generateColor();
      state.animationFrameId = requestAnimationFrame(updateFrame); // Start loop
      updatePointerMoveData(pointer, posX, posY, color);
      document.body.removeEventListener("mousemove", handleFirstMouseMove);
    };
    document.body.addEventListener("mousemove", handleFirstMouseMove); // Attach initial handler

    // Mouse Move (Standard handler after first move)
    const onMouseMove = (e) => {
      const pointer = pointers[0];
      const posX = scaleByPixelRatio(e.clientX);
      const posY = scaleByPixelRatio(e.clientY);
      const color = pointer.color;
      updatePointerMoveData(pointer, posX, posY, color);
    };
    window.addEventListener("mousemove", onMouseMove);

    // Touch Start (First Touch handler starts the loop, then is removed)
    const handleFirstTouchStart = (e) => {
      const touches = e.targetTouches;
      const pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        const posX = scaleByPixelRatio(touches[i].clientX);
        const posY = scaleByPixelRatio(touches[i].clientY);
        state.animationFrameId = requestAnimationFrame(updateFrame); // Start loop
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
      }
      document.body.removeEventListener("touchstart", handleFirstTouchStart);
    };
    document.body.addEventListener("touchstart", handleFirstTouchStart);

    // Touch Start (Standard handler)
    const onTouchStart = (e) => {
      const touches = e.targetTouches;
      const pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        const posX = scaleByPixelRatio(touches[i].clientX);
        const posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerDownData(pointer, touches[i].identifier, posX, posY);
      }
    };
    window.addEventListener("touchstart", onTouchStart, false);

    // Touch Move
    const onTouchMove = (e) => {
      const touches = e.targetTouches;
      const pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        const posX = scaleByPixelRatio(touches[i].clientX);
        const posY = scaleByPixelRatio(touches[i].clientY);
        updatePointerMoveData(pointer, posX, posY, pointer.color);
      }
    };
    window.addEventListener("touchmove", onTouchMove, false);

    // Touch End
    const onTouchEnd = (e) => {
      const touches = e.changedTouches;
      const pointer = pointers[0];
      for (let i = 0; i < touches.length; i++) {
        updatePointerUpData(pointer);
      }
    };
    window.addEventListener("touchend", onTouchEnd);

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("resize", initFramebuffers); // Re-init FBOs on window resize

    // --- Cleanup function (runs on component unmount) ---
    return () => {
      cancelAnimationFrame(state.animationFrameId);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      document.body.removeEventListener("mousemove", handleFirstMouseMove);
      window.removeEventListener("touchstart", onTouchStart);
      document.body.removeEventListener("touchstart", handleFirstTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", initFramebuffers);
    };
  }, []); // Empty dependency array: runs only on mount/unmount

  // --- 9. React Effects for Prop Updates (Replacing Vue Watchers) ---

  // Watch: simResolution and dyeResolution
  useEffect(() => {
    const state = glStateRef.current;
    state.config.SIM_RESOLUTION = props.simResolution;
    state.config.DYE_RESOLUTION = props.dyeResolution;
    // Re-initialize Framebuffers with new resolutions
    if (state.gl) {
      // Re-call initFramebuffers which is available in the closure
      // We must define this function outside of the first useEffect or use a stable ref to call it.
      // For simplicity, we assume we need to trigger a full re-initialization since GL state is complex.
      // In a cleaner refactor, initFramebuffers would be a stable function.
      // Since it's deeply nested, re-running the main useEffect is not an option.
      // We need to define initFramebuffers as a helper that is stable or available.
      // For this direct conversion, we will just force a window resize event which triggers initFramebuffers.
      window.dispatchEvent(new Event("resize"));
    }
  }, [props.simResolution, props.dyeResolution]);

  // Watch: shading
  useEffect(() => {
    const state = glStateRef.current;
    state.config.SHADING = props.shading;
    // Update keywords, which is defined in the initial useEffect's scope
    if (state.gl) {
      // This is the hardest part of the conversion. Since updateKeywords is deep inside
      // the first useEffect, it's not directly callable. For simplicity in this direct
      // conversion, we'll re-implement the necessary logic here, assuming Program/Material
      // classes are stable (which they are in the ref).

      const displayKeywords = [];
      if (props.shading) displayKeywords.push("SHADING");
      if (state.displayMaterial) {
        state.displayMaterial.setKeywords(displayKeywords);
      }
    }
  }, [props.shading]);

  // Watch: other single value props
  useEffect(() => {
    glStateRef.current.config.DENSITY_DISSIPATION = props.densityDissipation;
    glStateRef.current.config.VELOCITY_DISSIPATION = props.velocityDissipation;
    glStateRef.current.config.PRESSURE = props.pressure;
    glStateRef.current.config.PRESSURE_ITERATIONS = props.pressureIterations;
    glStateRef.current.config.CURL = props.curl;
    glStateRef.current.config.SPLAT_RADIUS = props.splatRadius;
    glStateRef.current.config.SPLAT_FORCE = props.splatForce;
    glStateRef.current.config.COLOR_UPDATE_SPEED = props.colorUpdateSpeed;
  }, [
    props.densityDissipation,
    props.velocityDissipation,
    props.pressure,
    props.pressureIterations,
    props.curl,
    props.splatRadius,
    props.splatForce,
    props.colorUpdateSpeed,
  ]);

  // --- 10. Render JSX ---
  return (
    <div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-0 size-full",
        props.className
      )}
      style={{ isolation: "isolate" }} // Ensure the canvas is below the hero content
    >
      <canvas id="fluid" ref={canvasRef} className="block h-screen w-screen" />
    </div>
  );
};

export default FluidCursorEffect;
