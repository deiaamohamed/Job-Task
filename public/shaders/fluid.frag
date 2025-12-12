precision highp float;

uniform float u_time;

float noise(vec2 p) {
    return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453123);
}

float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);

    return mix(a, b, u.x) +
           (c - a) * u.y * (1.0 - u.x) +
           (d - b) * u.x * u.y;
}

void main() {
    vec2 uv = gl_FragCoord.xy / 1920.0;

    float t = u_time * 0.25;

    float n = smoothNoise(uv * 4.0 + t);

    float wave = sin((uv.x + uv.y + t) * 4.0) * 0.1;

    float distortion = n * 0.15 + wave;

    vec3 color = vec3(0.4 + distortion, 0.1 + distortion, 0.8 + distortion);

    gl_FragColor = vec4(color, 0.25);  // alpha controls brightness
}
