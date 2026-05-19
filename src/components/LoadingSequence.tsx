import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

interface LoadingSequenceProps {
  onComplete: () => void;
}

export const LoadingSequence = ({ onComplete }: LoadingSequenceProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Fast sequence: logo draws (0-600ms), name appears (400-800ms), exit (800ms)
    const nameTimer = setTimeout(() => setShowName(true), 400);
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300); // Exit animation duration
    }, 800);

    return () => {
      clearTimeout(nameTimer);
      clearTimeout(exitTimer);
    };
  }, [onComplete]);

  // Skip entirely for reduced motion
  if (typeof window !== "undefined" && 
      window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    onComplete();
    return null;
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#08090A] flex items-center justify-center overflow-hidden"
        >
          <div className="flex flex-col items-center">
            {/* Logo — draws in 600ms */}
            <motion.svg
              width="48"
              height="48"
              viewBox="0 0 40 40"
              fill="none"
              className="mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.path
                d="M12 10 L24 10 C28 10 30 13 28 16 L16 24 C12 27 14 30 18 30 L30 30"
                stroke="#C9A84C"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
              />
              <motion.circle
                cx="10"
                cy="30"
                r="3.5"
                fill="none"
                stroke="#2A9D8F"
                strokeWidth="2"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.6 }}
              />
            </motion.svg>

            {/* Name — types in after logo starts */}
            <AnimatePresence>
              {showName && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="flex flex-col items-center"
                >
                  <span className="text-[11px] font-light tracking-[0.35em] text-white/50 uppercase">
                    Sadegh Shahid
                  </span>

                  {/* Quick progress bar */}
                  <motion.div 
                    className="w-16 h-[1px] bg-white/10 rounded-full overflow-hidden mt-3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <motion.div
                      className="h-full bg-[#C9A84C]/40"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.3, delay: 0.5, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
