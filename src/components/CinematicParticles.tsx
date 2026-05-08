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
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 50; // 40-60 requested

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (isInitial = false): Particle => {
      const size = Math.random() * 2 + 0.5; // 0.5 to 2.5

      // "some particles larger and slower (foreground), some smaller and faster (background)"
      // Speed is inversely proportional to size
      const speedBase = Math.random() * 0.1 + 0.05;
      const speedY = -(speedBase * (2.5 / size)) * 0.5;
      const speedX = (Math.random() - 0.5) * 0.05 * (2.5 / size);

      const isAmber = Math.random() > 0.4;
      const color = isAmber ? '245, 158, 11' : '229, 229, 224';
      const opacity = Math.random() * (0.15 - 0.08) + 0.08;
      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.01;

      return {
        x: Math.random() * canvas.width,
        y: isInitial ? Math.random() * canvas.height : canvas.height + 20,
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

        // Reset particle if it goes off screen (top)
        if (p.y < -20) {
          particles[index] = createParticle(false);
        }

        // Wrap around horizontally gently
        if (p.x < -20) p.x = canvas.width + 20;
        if (p.x > canvas.width + 20) p.x = -20;

        // Fade in/out at edges for a softer look
        let currentOpacity = p.opacity;
        const fadeZone = 150;
        if (p.y < fadeZone) {
          currentOpacity *= Math.max(0, p.y / fadeZone);
        } else if (p.y > canvas.height - fadeZone) {
          currentOpacity *= Math.max(0, (canvas.height - p.y) / fadeZone);
        }

        ctx.beginPath();
        // Use ovals/circles as requested
        // Add a bit of "glow/softness" by using a radial gradient or just multiple draws
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
        gradient.addColorStop(0, `rgba(${p.color}, ${Math.max(0, currentOpacity)})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.ellipse(p.x, p.y, p.size * 2, p.size * 1.4, p.rotation, 0, Math.PI * 2);
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
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
