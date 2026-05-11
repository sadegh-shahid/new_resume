import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";

interface LoadingSequenceProps {
  onComplete: () => void;
}

export const LoadingSequence = ({ onComplete }: LoadingSequenceProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Allow exit animation to finish
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onComplete();
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-void flex items-center justify-center overflow-hidden"
        >
          {/* Logo Drawing (0.0s - 0.8s) */}
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{
              scale: [1.2, 1.2, 1],
              opacity: [0, 1, 1],
              y: [0, 0, -20] // Move up slightly as it scales down
            }}
            transition={{
              duration: 1.4,
              times: [0, 0.4, 1],
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            <Logo isDrawing={true} className="w-24 h-24 mb-8" />

            {/* Hero text simulation (0.6s - 2.0s) */}
            <div className="flex flex-col items-center gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-4 w-64 bg-white/5 rounded-full overflow-hidden relative"
              >
                 <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ delay: 0.6, duration: 1.4, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-ivory)]/20 to-transparent"
                 />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="h-4 w-48 bg-white/5 rounded-full overflow-hidden relative"
              >
                <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-accent-ivory)]/20 to-transparent"
                 />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
