import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  zIndex?: number;
}

export const ParallaxLayer = ({ children, speed = 0, className = "", zIndex = 0 }: ParallaxLayerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Simplified: only Y translation, no scale/opacity per layer
  // Reduces MotionValue subscriptions from 3 to 1 per layer
  const y = useTransform(scrollYProgress, [0, 1], [0, speed * 200]);

  // Static opacity for entrance only — no continuous updates
  const opacity = useMemo(() => {
    if (shouldReduceMotion) return 1;
    return undefined; // Let CSS handle it
  }, [shouldReduceMotion]);

  if (shouldReduceMotion || speed === 0) {
    return <div className={`relative ${className}`} style={{ zIndex }}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      style={{ 
        y, 
        zIndex,
        willChange: "transform",
        transform: "translateZ(0)", // Force GPU layer
      }}
      className={`relative ${className}`}
    >
      {children}
    </motion.div>
  );
};
