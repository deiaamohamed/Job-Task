export default function Fluid(canvas) {
  const gl =
    canvas.getContext("webgl2") ||
    canvas.getContext("webgl", {
      premultipliedAlpha: false,
      alpha: true,
      antialias: true,
    });

  if (!gl) {
    console.error("WebGL not supported");
    return;
  }

  let pointer = {
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    moved: false,
  };

  // Trail history for smooth liquid effect
  const trailPoints = [];
  const maxTrailPoints = 60;

  // Vertex shader source
  const vertexShaderSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  // Fragment shader source for neon liquid trail
  const fragmentShaderSource = `
    precision mediump float;
    uniform vec2 u_resolution;
    uniform vec2 u_mouse;
    uniform vec2 u_prevMouse;
    uniform float u_time;
    uniform float u_fade;
    
    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;
      vec2 mouse = u_mouse / u_resolution;
      vec2 prevMouse = u_prevMouse / u_resolution;
      
      // Calculate distance from current and previous mouse positions
      float dist1 = distance(uv, mouse);
      float dist2 = distance(uv, prevMouse);
      
      // Create smooth trail with distance-based falloff
      float trail1 = smoothstep(0.12, 0.0, dist1);
      float trail2 = smoothstep(0.12, 0.0, dist2) * 0.8;
      float trail = max(trail1, trail2);
      
      // Connect trail between points for smooth liquid effect
      vec2 dir = normalize(prevMouse - mouse);
      vec2 toPoint = uv - mouse;
      float alongTrail = dot(toPoint, dir);
      float perpDist = length(toPoint - dir * alongTrail);
      
      if (alongTrail > 0.0 && alongTrail < distance(mouse, prevMouse)) {
        float trailWidth = 0.08;
        float trailFade = smoothstep(trailWidth, 0.0, perpDist) * smoothstep(0.0, 1.0, alongTrail / distance(mouse, prevMouse));
        trail = max(trail, trailFade * 0.9);
      }
      
      // Neon color scheme (cyan/magenta for LED effect)
      vec3 color1 = vec3(0.0, 1.0, 1.0); // Cyan
      vec3 color2 = vec3(1.0, 0.0, 1.0); // Magenta
      vec3 color3 = vec3(0.2, 0.6, 1.0); // Blue
      
      // Mix colors based on position and time for dynamic effect
      float colorMix = sin(u_time * 1.5 + uv.x * 8.0 + uv.y * 6.0) * 0.5 + 0.5;
      vec3 neonColor = mix(color1, color2, colorMix);
      neonColor = mix(neonColor, color3, sin(u_time * 1.2 + uv.y * 7.0) * 0.5 + 0.5);
      
      // Apply fade and intensity
      float alpha = trail * u_fade * 0.85;
      vec3 finalColor = neonColor * trail * u_fade;
      
      // Add outer glow effect
      float glow = smoothstep(0.18, 0.0, min(dist1, dist2)) * 0.25 * u_fade;
      finalColor += neonColor * glow;
      
      gl_FragColor = vec4(finalColor, alpha);
    }
  `;

  // Compile shader
  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compilation error:", gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  // Create shader program
  function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program linking error:", gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return null;
    }
    return program;
  }

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(
    gl,
    gl.FRAGMENT_SHADER,
    fragmentShaderSource
  );
  const program = createProgram(gl, vertexShader, fragmentShader);

  if (!program) {
    console.error("Failed to create shader program");
    return;
  }

  // Set up geometry (full screen quad)
  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  const positions = [-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

  // Get attribute and uniform locations
  const positionLocation = gl.getAttribLocation(program, "a_position");
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const mouseLocation = gl.getUniformLocation(program, "u_mouse");
  const prevMouseLocation = gl.getUniformLocation(program, "u_prevMouse");
  const timeLocation = gl.getUniformLocation(program, "u_time");
  const fadeLocation = gl.getUniformLocation(program, "u_fade");

  function resize() {
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    gl.viewport(0, 0, canvas.width, canvas.height);
  }

  resize();
  window.addEventListener("resize", resize);

  // Mouse tracking with trail points
  const handleMouseMove = (e) => {
    const rect = canvas.getBoundingClientRect();
    pointer.prevX = pointer.x;
    pointer.prevY = pointer.y;
    pointer.x = (e.clientX - rect.left) * (canvas.width / rect.width);
    pointer.y =
      canvas.height - (e.clientY - rect.top) * (canvas.height / rect.height);
    pointer.moved = true;

    // Add to trail history
    trailPoints.push({
      x: pointer.x,
      y: pointer.y,
      time: Date.now(),
    });

    // Keep only recent trail points
    if (trailPoints.length > maxTrailPoints) {
      trailPoints.shift();
    }
  };

  canvas.addEventListener("mousemove", handleMouseMove);

  // Fade out trails over time
  function updateTrails() {
    const now = Date.now();
    const fadeTime = 2500; // 2.5 seconds fade time

    for (let i = trailPoints.length - 1; i >= 0; i--) {
      const age = now - trailPoints[i].time;
      if (age > fadeTime) {
        trailPoints.splice(i, 1);
      }
    }
  }

  function render(currentTime) {
    // Convert to seconds
    const time = (currentTime || 0) * 0.001;

    // Update trail fade
    updateTrails();

    // Use additive blending for neon glow effect
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
    gl.blendEquation(gl.FUNC_ADD);

    // Clear with slight fade for trailing effect
    gl.clearColor(0, 0, 0, 0.03);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Use shader program
    gl.useProgram(program);

    // Set up geometry
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // Set uniforms
    gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
    gl.uniform1f(timeLocation, time);

    // Render trail points with fading
    if (trailPoints.length > 1) {
      for (let i = 1; i < trailPoints.length; i++) {
        const point = trailPoints[i];
        const prevPoint = trailPoints[i - 1];
        const age = Date.now() - point.time;
        const fade = Math.max(0, 1 - age / 2500); // Fade over 2.5 seconds

        gl.uniform2f(mouseLocation, point.x, point.y);
        gl.uniform2f(prevMouseLocation, prevPoint.x, prevPoint.y);
        gl.uniform1f(fadeLocation, fade);

        gl.drawArrays(gl.TRIANGLES, 0, 6);
      }
    }

    // Render current mouse position if moved
    if (pointer.moved && trailPoints.length > 0) {
      gl.uniform2f(mouseLocation, pointer.x, pointer.y);
      gl.uniform2f(
        prevMouseLocation,
        pointer.prevX || pointer.x,
        pointer.prevY || pointer.y
      );
      gl.uniform1f(fadeLocation, 1.0);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
      pointer.moved = false;
    }

    requestAnimationFrame(render);
  }

  render(0);

  // Cleanup function
  return () => {
    canvas.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("resize", resize);
  };
}
