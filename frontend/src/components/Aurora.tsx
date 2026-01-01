// @ts-ignore
import { Renderer, Program, Mesh, Color, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';
import './Aurora.css';

const VERT = `#version 300 es
in vec2 position;
void main() { gl_Position = vec4(position, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
uniform float uTime;
uniform float uAmplitude;
uniform vec3 uColorStops[3];
uniform vec2 uResolution;
uniform float uBlend;
out vec4 fragColor;

vec3 permute(vec3 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i = floor(v + dot(v, C.yy));
  vec2 x0 = v - i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);
  m = m * m; m = m * m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x = a0.x * x0.x + h.x * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  float noise = snoise(vec2(uv.x * 2.0 + uTime * 0.05, uTime * 0.1)) * uAmplitude;
  
  float dist = abs(uv.y - 0.5 + noise * 0.2);
  float alpha = smoothstep(uBlend, 0.0, dist);

  vec3 col = mix(uColorStops[0], uColorStops[1], uv.x);
  col = mix(col, uColorStops[2], noise * 0.5 + 0.5);

  fragColor = vec4(col * alpha, alpha);
}
`;

export default function Aurora({ colorStops = ['#000814', '#1e3a8a', '#3b82f6'], amplitude = 1.0, blend = 0.5, speed = 1.0 }: any) {
  const ctnDom = useRef<HTMLDivElement>(null);
  const propsRef = useRef({ colorStops, amplitude, blend, speed });

  useEffect(() => {
    const ctn = ctnDom.current;
    if (!ctn) return;
    const renderer = new Renderer({ alpha: true, antialias: true });
    const gl = renderer.gl;
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      uniforms: {
        uTime: { value: 0 },
        uAmplitude: { value: amplitude },
        uColorStops: { value: colorStops.map(c => { const clr = new Color(c); return [clr.r, clr.g, clr.b]; }) },
        uResolution: { value: [ctn.offsetWidth, ctn.offsetHeight] },
        uBlend: { value: blend }
      }
    });

    const mesh = new Mesh(gl, { geometry, program });
    ctn.appendChild(gl.canvas);

    const resize = () => {
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      program.uniforms.uResolution.value = [ctn.offsetWidth, ctn.offsetHeight];
    };
    window.addEventListener('resize', resize);
    resize();

    let raf = 0;
    const update = (t: number) => {
      program.uniforms.uTime.value = t * 0.001 * speed;
      renderer.render({ scene: mesh });
      raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (gl.canvas.parentNode) ctn.removeChild(gl.canvas);
    };
  }, [amplitude, speed, blend]);

  return <div ref={ctnDom} className="aurora-container" />;
}