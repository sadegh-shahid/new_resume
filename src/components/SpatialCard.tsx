import { memo, useRef, useState, useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface SpatialCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
}

export const SpatialCard = memo(({ children, className = "", intensity = 12 }: SpatialCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Reduced stiffness for smoother mobile performance
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(y, [0, 1], [intensity * 0.6, -intensity * 0.6]), springConfig);
  const rotateY = useSpring(useTransform(x, [0, 1], [-intensity * 0.6, intensity * 0.6]), springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }, [isMobile, x, y]);

  // Mobile: no 3D tilt, just subtle scale on touch
  if (isMobile) {
    return (
      <motion.div
        ref={ref}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        className={`relative ${className}`}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); x.set(0.5); y.set(0.5); }}
      style={{
        rotateX: hovered ? rotateX : 0,
        rotateY: hovered ? rotateY : 0,
        transformStyle: "preserve-3d",
        perspective: 1000,
        willChange: hovered ? "transform" : "auto",
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
});
