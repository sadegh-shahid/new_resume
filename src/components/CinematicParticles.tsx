import React, { useEffect, useRef, memo, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  size: number;
  speedY: number;
  phase: number;
  opacity: number;
  color: string;
}

// Lightweight sine-based drift instead of Simplex noise
const sinDrift = (t: number, phase: number, freq: number) => 
  Math.sin(t * freq + phase) * 0.5;

export const CinematicParticles: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const timeRef = useRef(0);
  const isMobile = useRef(false);

  const initParticles = useCallback((w: number, h: number) => {
    const count = isMobile.current ? 6 : 10; // 6 on mobile, 10 on desktop
    particlesRef.current = [];

    for (let i = 0; i < count; i++) {
      const isAmber = Math.random() > 0.7;
      const x = Math.random() * w;
      const y = Math.random() * h;
      particlesRef.current.push({
        x, y,
        baseX: x,
        baseY: y,
        size: Math.random() * 1.2 + 0.4,
        speedY: Math.random() * 0.02 + 0.008,
        phase: Math.random() * Math.PI * 2,
        opacity: Math.random() * 0.12 + 0.04,
        color: isAmber ? "201, 168, 76" : "212, 210, 205",
      });
    }
  }, []);

  useEffect(() => {
    // Detect mobile/low-power devices
    isMobile.current = window.matchMedia("(pointer: coarse)").matches || 
                       window.innerWidth < 768 ||
                       navigator.hardwareConcurrency <= 4;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    // Cap DPR on mobile to reduce GPU load
    const dpr = isMobile.current ? 1 : Math.min(window.devicePixelRatio, 2);

    let w = 0, h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
      initParticles(w, h);
    };

    const animate = (timestamp: number) => {
      // Throttle to ~30fps on mobile
      if (isMobile.current && timeRef.current && timestamp - timeRef.current < 33) {
        requestRef.current = requestAnimationFrame(animate);
        return;
      }
      timeRef.current = timestamp;

      const t = timestamp * 0.0005;
      ctx.clearRect(0, 0, w, h);

      particlesRef.current.forEach((pt) => {
        // Sine-based drift (CPU cost: ~10 ops vs 2000 for Simplex)
        const driftX = sinDrift(t, pt.phase, 0.3) * 0.3;
        const driftY = sinDrift(t, pt.phase + 1, 0.2) * 0.15;

        pt.x = pt.baseX + driftX * 20;
        pt.y -= pt.speedY;

        // Wrap around
        if (pt.y < -10) {
          pt.baseY = h + 10;
          pt.y = pt.baseY;
        }
        if (pt.x < -20) pt.baseX = w + 20;
        if (pt.x > w + 20) pt.baseX = -20;

        // Simple circle (no radial gradient = massive GPU savings)
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, pt.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${pt.color}, ${pt.opacity})`;
        ctx.fill();
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    // Debounced resize
    let resizeTimeout: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resize, 200);
    };

    window.addEventListener("resize", onResize);
    resize();
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(requestRef.current);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
});
