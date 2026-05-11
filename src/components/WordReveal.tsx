import { motion, useReducedMotion } from "motion/react";

interface WordRevealProps {
  text: string;
  className?: string;
}

export const WordReveal = ({ text, className }: WordRevealProps) => {
  const words = text.split(" ");
  const prefersReduced = useReducedMotion();

  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden me-[0.25em] last:me-0">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: prefersReduced ? 0 : "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.05,
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
};
