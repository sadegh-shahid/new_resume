import React, { useEffect, useRef, memo } from 'react';
import { MotionValue } from 'motion/react';

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
  noiseOffset: number;
}

interface CinematicParticlesProps {
  centerX?: number;
  centerY?: number;
  mouseX?: MotionValue<number>;
  mouseY?: MotionValue<number>;
  isRTL?: boolean;
}

// Simplified Simplex Noise 3D implementation
const grad3 = [
  [1, 1, 0], [-1, 1, 0], [1, -1, 0], [-1, -1, 0],
  [1, 0, 1], [-1, 0, 1], [1, 0, -1], [-1, 0, -1],
  [0, 1, 1], [0, -1, 1], [0, 1, -1], [0, -1, -1]
];

const p = new Uint8Array(512);
const permutation = Array.from({ length: 256 }, () => Math.floor(Math.random() * 256));
for (let i = 0; i < 512; i++) p[i] = permutation[i & 255];

const dot = (g: number[], x: number, y: number, z: number) => g[0] * x + g[1] * y + g[2] * z;

const noise3D = (xin: number, yin: number, zin: number) => {
  const F3 = 1.0 / 3.0;
  const s = (xin + yin + zin) * F3;
  const i = Math.floor(xin + s);
  const j = Math.floor(yin + s);
  const k = Math.floor(zin + s);
  const G3 = 1.0 / 6.0;
  const t = (i + j + k) * G3;
  const X0 = i - t;
  const Y0 = j - t;
  const Z0 = k - t;
  const x0 = xin - X0;
  const y0 = yin - Y0;
  const z0 = zin - Z0;

  let i1, j1, k1;
  let i2, j2, k2;

  if (x0 >= y0) {
    if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
    else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
    else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
  } else {
    if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
    else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
    else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
  }

  const x1 = x0 - i1 + G3;
  const y1 = y0 - j1 + G3;
  const z1 = z0 - k1 + G3;
  const x2 = x0 - i2 + 2.0 * G3;
  const y2 = y0 - j2 + 2.0 * G3;
  const z2 = z0 - k2 + 2.0 * G3;
  const x3 = x0 - 1.0 + 3.0 * G3;
  const y3 = y0 - 1.0 + 3.0 * G3;
  const z3 = z0 - 1.0 + 3.0 * G3;

  const ii = i & 255;
  const jj = j & 255;
  const kk = k & 255;

  const n0 = t3(x0, y0, z0, ii, jj, kk);
  const n1 = t3(x1, y1, z1, ii + i1, jj + j1, kk + k1);
  const n2 = t3(x2, y2, z2, ii + i2, jj + j2, kk + k2);
  const n3 = t3(x3, y3, z3, ii + 1, jj + 1, kk + 1);

  return 32.0 * (n0 + n1 + n2 + n3);
};

const t3 = (x: number, y: number, z: number, i: number, j: number, k: number) => {
  let t = 0.6 - x * x - y * y - z * z;
  if (t < 0) return 0;
  t *= t;
  return t * t * dot(grad3[p[i + p[j + p[k]]] % 12], x, y, z);
};

export const CinematicParticles: React.FC<CinematicParticlesProps> = memo(({
  centerX,
  centerY,
  mouseX,
  mouseY,
  isRTL = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 25;

    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const newWidth = parent.clientWidth;
      const newHeight = parent.clientHeight;

      // Only re-init if dimensions actually changed meaningfully
      if (Math.abs(canvas.width - newWidth) > 10 || Math.abs(canvas.height - newHeight) > 10 || !hasInitialized.current) {
        canvas.width = newWidth;
        canvas.height = newHeight;

        if (!hasInitialized.current) {
          initParticles();
          hasInitialized.current = true;
        }
      }
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle(true));
      }
    };

    const createParticle = (isInitial = false): Particle => {
      const size = Math.random() * 2 + 1; // 1-3px
      const speedBase = Math.random() * 0.04 + 0.02; // glacial (0.02-0.06)

      const isAmber = Math.random() > 0.6; // 60% ivory, 40% amber
      const color = isAmber ? '214, 199, 168' : '229, 229, 224';
      const opacity = Math.random() * (0.28 - 0.12) + 0.12;
      const rotation = Math.random() * Math.PI * 2;
      const rotationSpeed = (Math.random() - 0.5) * 0.005;

      return {
        x: Math.random() * canvas.width,
        y: isInitial ? Math.random() * canvas.height : canvas.height + 30,
        size,
        speedY: speedBase,
        speedX: speedBase * 0.5,
        rotation,
        rotationSpeed,
        opacity,
        color,
        noiseOffset: Math.random() * 1000
      };
    };

    const animate = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Use logical center if not provided, otherwise use provided (and handle RTL if relative)
      // Actually, let's make it relative if it's < 1
      const relX = centerX !== undefined ? (centerX > 1 ? centerX / canvas.width : centerX) : 0.5;
      const relY = centerY !== undefined ? (centerY > 1 ? centerY / canvas.height : centerY) : 0.5;

      const effectiveCenterX = (isRTL ? (1 - relX) : relX) * canvas.width;
      const effectiveCenterY = relY * canvas.height;

      // Bias based on mouse
      const mx = mouseX?.get() ?? 0.5;
      const my = mouseY?.get() ?? 0.5;
      const biasX = (mx - 0.5) * 0.1;
      const biasY = (my - 0.5) * 0.1;

      particles.forEach((p, index) => {
        // Organic drift using Simplex Noise 3D
        const t = time * 0.0005;
        const driftX = noise3D(p.x * 0.003 + biasX, p.y * 0.003, t + p.noiseOffset);
        const driftY = noise3D(p.y * 0.003 + biasY, p.x * 0.003, t + p.noiseOffset + 100);

        p.x += driftX * p.speedX;
        p.y -= (p.speedY + driftY * 0.1); // Predominantly upwards
        p.rotation += p.rotationSpeed;

        // Wrap around
        if (p.y < -50) {
          particles[index] = createParticle(false);
        } else if (p.y > canvas.height + 50) {
          p.y = -50;
        }
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;

        // Lens Interaction
        const dx = p.x - effectiveCenterX;
        const dy = p.y - effectiveCenterY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let displayOpacity = p.opacity;
        let displaySize = p.size;

        if (dist < 200) {
          displayOpacity *= 1.4; // +40%
          displaySize *= 1.2;    // +20%
        }

        // Asymmetrical Fade Zones
        const topFade = 180;
        const bottomFade = 300;
        if (p.y < topFade) {
          displayOpacity *= Math.max(0, p.y / topFade);
        } else if (p.y > canvas.height - bottomFade) {
          displayOpacity *= Math.max(0, (canvas.height - p.y) / bottomFade);
        }

        // Draw connections
        let connections = 0;
        for (let j = index + 1; j < particles.length; j++) {
          if (connections >= 3) break;
          const p2 = particles[j];
          const d2x = p.x - p2.x;
          const d2y = p.y - p2.y;
          const dist2 = Math.sqrt(d2x * d2x + d2y * d2y);
          if (dist2 < 60) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(214, 199, 168, ${0.03 * (1 - dist2 / 60)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
            connections++;
          }
        }

        // Draw Particle (Ellipse)
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, displaySize * 3);
        gradient.addColorStop(0, `rgba(${p.color}, ${Math.max(0, displayOpacity)})`);
        gradient.addColorStop(1, `rgba(${p.color}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.ellipse(0, 0, displaySize * 2.5, displaySize * 1.8, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const debouncedResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 250);
    };

    window.addEventListener('resize', debouncedResize);
    resizeCanvas();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(requestRef.current);
    };
  }, [centerX, centerY, mouseX, mouseY, isRTL]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0, willChange: 'transform' }}
    />
  );
});