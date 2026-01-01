// import React, { useEffect, useRef } from 'react';

// // Particle ki definition
// interface Particle {
//   x: number;
//   y: number;
//   vx: number; // Velocity X
//   vy: number; // Velocity Y
//   radius: number;
//   color: string;
//   opacity: number;
//   life: number;
//   maxLife: number;
// }

// export function MouseGlow() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   const animationFrameId = useRef<number | null>(null);
//   const mouse = useRef<{ x: number; y: number; px: number; py: number }>({ x: 0, y: 0, px: 0, py: 0 }); // Current and previous mouse positions
//   const particles = useRef<Particle[]>([]);
//   const lastEmit = useRef<number>(0);
//   const emitInterval = 10; // Milliseconds between emitting particles

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     const handleMouseMove = (e: MouseEvent) => {
//       mouse.current.px = mouse.current.x;
//       mouse.current.py = mouse.current.y;
//       mouse.current.x = e.clientX;
//       mouse.current.y = e.clientY;
//     };

//     const emitParticles = (x: number, y: number, vx: number, vy: number) => {
//       const now = Date.now();
//       if (now - lastEmit.current < emitInterval) return; // Control particle density
//       lastEmit.current = now;

//       const speed = Math.sqrt(vx * vx + vy * vy);
//       const density = Math.min(3, speed / 5); // Emit more particles if mouse moves faster

//       for (let i = 0; i < density; i++) {
//         particles.current.push({
//           x: x + (Math.random() - 0.5) * 10, // Slight random offset
//           y: y + (Math.random() - 0.5) * 10,
//           vx: vx * 0.1 + (Math.random() - 0.5) * 0.5, // Follow mouse direction, but with some randomness
//           vy: vy * 0.1 + (Math.random() - 0.5) * 0.5,
//           radius: Math.random() * 2 + 1, // Small particles
//           color: Math.random() > 0.5 ? '#00f2ff' : '#64748b', // Neon Cyan or Smoky Grey
//           opacity: 1,
//           life: 0,
//           maxLife: Math.random() * 60 + 40, // Particles live for 40-100 frames
//         });
//       }
//     };

//     const updateParticles = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Create a background blur/glow for the smoky effect
//       ctx.fillStyle = 'rgba(15, 23, 42, 0.05)'; // Very subtle dark overlay
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       const mouseVx = mouse.current.x - mouse.current.px;
//       const mouseVy = mouse.current.y - mouse.current.py;
//       emitParticles(mouse.current.x, mouse.current.y, mouseVx, mouseVy);

//       for (let i = particles.current.length - 1; i >= 0; i--) {
//         const p = particles.current[i];
//         p.x += p.vx;
//         p.y += p.vy;
//         p.life++;
//         p.opacity = Math.max(0, 1 - p.life / p.maxLife); // Fade out over time

//         // Gravity/Drag effect
//         p.vx *= 0.98;
//         p.vy *= 0.98;

//         if (p.life >= p.maxLife) {
//           particles.current.splice(i, 1);
//         } else {
//           ctx.beginPath();
//           ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
//           ctx.fillStyle = p.color;
//           ctx.globalAlpha = p.opacity; // Apply particle's fading opacity
//           ctx.shadowBlur = 15; // Strong glow for neon
//           ctx.shadowColor = p.color; // Glow color same as particle color
//           ctx.fill();
//         }
//       }
//       ctx.globalAlpha = 1; // Reset global alpha

//       animationFrameId.current = requestAnimationFrame(updateParticles);
//     };

//     // Event Listeners
//     window.addEventListener('resize', resizeCanvas);
//     window.addEventListener('mousemove', handleMouseMove);

//     // Initial setup
//     resizeCanvas();
//     animationFrameId.current = requestAnimationFrame(updateParticles);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', resizeCanvas);
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (animationFrameId.current) {
//         cancelAnimationFrame(animationFrameId.current);
//       }
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       className="pointer-events-none fixed inset-0 z-50"
//     />
//   );
// }