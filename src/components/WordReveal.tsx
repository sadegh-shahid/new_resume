import { motion } from "motion/react";

interface WordRevealProps {
  text: string;
  className?: string;
}

export const WordReveal = ({ text, className }: WordRevealProps) => {
  const words = text.split(" ");
  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden me-[0.25em] last:me-0">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: "100%", opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.04,
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};
