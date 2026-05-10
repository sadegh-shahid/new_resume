import { motion } from 'motion/react';

interface LogoProps {
  isDrawing?: boolean;
  className?: string;
}

export const Logo = ({ isDrawing = false, className = "w-8 h-8" }: LogoProps) => {
  return (
    <motion.div
      className="relative flex items-center justify-center cursor-pointer select-none"
      whileHover={isDrawing ? undefined : "hover"}
      initial="initial"
      animate="animate"
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Sadegh Shahid Logo"
      >
        {/* Letter S (Shahid) - Secondary, background */}
        <motion.path
          d="M26 13C26 10.7909 24.2091 9 22 9H18C15.7909 9 14 10.7909 14 13V17C14 19.2091 15.7909 21 18 21H22C24.2091 21 26 22.7909 26 25V29C26 31.2091 24.2091 33 22 33H18C15.7909 33 14 31.2091 14 29"
          stroke="#F3F1EB"
          strokeOpacity={isDrawing ? 1 : 0.6}
          strokeWidth={isDrawing ? "2" : "3"}
          strokeLinecap="round"
          fill="none"
          variants={{
            initial: isDrawing ? { pathLength: 0, opacity: 0, x: 1, y: 1 } : { x: 1, y: 1 },
            animate: isDrawing ? {
              pathLength: 1,
              opacity: 1,
              fill: "rgba(214,199,168,0.02)",
              transition: {
                pathLength: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.8 },
                fill: { delay: 0.8, duration: 0.4 }
              }
            } : undefined,
            hover: { x: 3, y: 2 }
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        />

        {/* Letter S (Sadegh) - Primary, foreground */}
        <motion.path
          d="M24 11C24 8.79086 22.2091 7 20 7H16C13.7909 7 12 8.79086 12 11V15C12 17.2091 13.7909 19 16 19H20C22.2091 19 24 20.7909 24 23V27C24 29.2091 22.2091 31 20 31H16C13.7909 31 12 29.2091 12 27"
          stroke="#D6C7A8"
          strokeWidth={isDrawing ? "2" : "3"}
          strokeLinecap="round"
          fill="none"
          variants={{
            initial: isDrawing ? { pathLength: 0, opacity: 0, x: -1, y: -1 } : { x: -1, y: -1 },
            animate: isDrawing ? {
              pathLength: 1,
              opacity: 1,
              fill: "rgba(214,199,168,0.05)",
              transition: {
                pathLength: { duration: 0.8, ease: "easeInOut" },
                opacity: { duration: 0.8 },
                fill: { delay: 0.8, duration: 0.4 }
              }
            } : undefined,
            hover: { x: -3, y: -2 }
          }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
        />
      </svg>
    </motion.div>
  );
};
