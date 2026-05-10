import { useScroll, useVelocity, useSpring, useTransform } from "motion/react";

export const useScrollVelocity = (clampValue: number = 2) => {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(velocity, {
    stiffness: 150,
    damping: 15,
  });

  const skew = useTransform(smoothVelocity, (v) => {
    const skewVal = v * 0.0005;
    return Math.max(Math.min(skewVal, clampValue), -clampValue);
  });

  return skew;
};
