import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const isTouch = useRef(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Lower stiffness = less CPU per frame
  const springConfig = { stiffness: 300, damping: 28 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device once
    isTouch.current = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch.current) return;

    const isDesktop = window.innerWidth >= 1024;
    if (!isDesktop) return;

    setIsVisible(true);
    document.body.style.cursor = "none";

    let rafId: number;
    let lastX = -100, lastY = -100;

    const moveCursor = (e: MouseEvent) => {
      // Throttle: only update if moved > 2px
      if (Math.abs(e.clientX - lastX) > 2 || Math.abs(e.clientY - lastY) > 2) {
        lastX = e.clientX;
        lastY = e.clientY;
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, [data-cursor="hover"]');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  // Don't render on touch devices at all
  if (!isVisible || isTouch.current) return null;

  return (
    <motion.div
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isHovering ? 40 : 12,
        height: isHovering ? 40 : 12,
        backgroundColor: isHovering ? "transparent" : "white",
        border: isHovering ? "1px solid white" : "0px solid white",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-difference"
    />
  );
};
