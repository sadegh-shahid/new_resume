import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "motion/react";

export const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 500, damping: 28 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    setIsVisible(true);
    document.body.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a, button, [role="button"], input, textarea, [data-cursor="hover"]')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.style.cursor = "auto";
    };
  }, [mouseX, mouseY]);

  if (!isVisible) return null;

  return (
    <motion.div
      ref={cursorRef}
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
      transition={{ type: "spring", stiffness: 250, damping: 20, mass: 0.5 }}
      className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full mix-blend-difference"
    />
  );
};
