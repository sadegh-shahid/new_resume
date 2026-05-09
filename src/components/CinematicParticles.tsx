import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
}

export const CinematicParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 30; // Fewer = more elegant

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;
      }
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (isInitial = false): Particle => {
      const size = Math.random() * 2.5 + 1; // Slightly larger
      const speedBase = Math.random() * 0.06 + 0.02; // Slower
      const speedY = -(speedBase * (2.5 / size)) * 0.35;
      const speedX = (Math.random() - 0.5) * 0.03 * (2.5 / size);

      const isAmber = Math.random() > 0.4;
      const color = isAmber ? '214, 199, 168' : '229, 229, 224'; // ivory + warm gray
      const opacity = Math.random() * (0.28 - 0.15) + 0.15; // More visible
      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.006;

      return {
        x: Math.random() * canvas.width,
        y: isInitial ? Math.random() * canvas.height : canvas.height + 30,
        size,
        speedY,
        speedX,
        rotation,
        rotationSpeed,
        opacity,
        color,
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, index) => {
        p.y += p.speedY;
        p.x += p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y < -30) particles[index] = createParticle(false);
        if (p.x < -30) p.x = canvas.width + 30;
        if (p.x > canvas.width + 30) p.x = -30;

        let currentOpacity = p.opacity;
        const fadeZone = 180;
        if (p.y < fadeZone) currentOpacity *= Math.max(0, p.y / fadeZone);
        else if (p.y > canvas.height - fadeZone) currentOpacity *= Math.max(0, (canvas.height - p.y) / fadeZone);

        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `rgba(${p.color}, ${Math.max(0, currentOpacity)})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(p.x, p.y, p.size * 2.5, p.size * 1.8, p.rotation, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};