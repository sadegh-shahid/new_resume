import { motion } from "motion/react";

interface LogoProps {
  className?: string;
  isDrawing?: boolean;
}

export const Logo = ({ className = "w-8 h-8", isDrawing = false }: LogoProps) => {
  return (
    <motion.a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="relative flex items-center justify-center cursor-pointer select-none group"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <svg
        width="32"
        height="32"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Sadegh Shahid"
      >
        {/* 
          SAUL BASS-INSPIRED GEOMETRIC S
          Reduced to 3 points + 1 accent
          Upper diagonal → curve → lower diagonal
          The dot is the "start point" — represents the origin of the design process
        */}
        <motion.path
          d="M12 10 L24 10 C28 10 30 13 28 16 L16 24 C12 27 14 30 18 30 L30 30"
          stroke="#C9A84C"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: isDrawing ? [0, 1] : 1, 
            opacity: 1 
          }}
          transition={{ 
            duration: isDrawing ? 1.0 : 0, 
            ease: "easeInOut",
            delay: isDrawing ? 0.2 : 0
          }}
          whileHover={{
            strokeWidth: 4,
            transition: { duration: 0.3 }
          }}
        />

        {/* Origin dot — represents the starting point of creation */}
        <motion.circle
          cx="10"
          cy="30"
          r="3.5"
          fill="none"
          stroke="#2A9D8F"
          strokeWidth="2"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3, delay: isDrawing ? 1.0 : 0.4 }}
          whileHover={{
            scale: 1.4,
            fill: "#2A9D8F",
            transition: { duration: 0.3 }
          }}
        />
      </svg>
    </motion.a>
  );
};
