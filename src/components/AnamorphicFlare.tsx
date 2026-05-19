import { memo } from "react";
import { motion } from "motion/react";

interface AnamorphicFlareProps {
  className?: string;
}

export const AnamorphicFlare = memo(({ className = "" }: AnamorphicFlareProps) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} aria-hidden="true">
      {/* Primary horizontal streak — amber/gold */}
      <motion.div
        initial={{ opacity: 0, x: "-10%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        className="absolute top-[18%] left-0 w-[140%] h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.15) 20%, rgba(201,168,76,0.35) 45%, rgba(201,168,76,0.15) 70%, transparent 100%)",
          filter: "blur(3px)",
          transform: "rotate(-1deg)",
        }}
      />
      {/* Secondary thinner streak — teal shadow side */}
      <motion.div
        initial={{ opacity: 0, x: "10%" }}
        animate={{ opacity: 1, x: "0%" }}
        transition={{ duration: 2.2, ease: "easeOut", delay: 0.8 }}
        className="absolute top-[22%] left-0 w-[120%] h-[1px]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(46,107,102,0.2) 30%, rgba(46,107,102,0.1) 60%, transparent 100%)",
          filter: "blur(2px)",
          transform: "rotate(-0.5deg)",
        }}
      />
      {/* Vertical ghost flare — subtle bloom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 3, ease: "easeInOut", delay: 1.2 }}
        className="absolute top-[10%] right-[15%] w-[1px] h-[200px] md:h-[300px]"
        style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(201,168,76,0.08) 40%, rgba(201,168,76,0.15) 50%, rgba(201,168,76,0.08) 60%, transparent 100%)",
          filter: "blur(8px)",
        }}
      />
      {/* Bottom corner haze — like lens fog */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 4, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 left-0 w-[60%] h-[40%]"
        style={{
          background: "radial-gradient(ellipse at bottom left, rgba(201,168,76,0.04) 0%, transparent 70%)",
        }}
      />
    </div>
  );
});
