import { motion } from "framer-motion";

interface BlobFaceProps {
  lookX?: number;
  lookY?: number;
  isSmiling?: boolean;
}

export function BlobFace({ lookX = 0, lookY = 0, isSmiling = true }: BlobFaceProps) {
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      animate={{ x: lookX, y: lookY }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
    >
      <div className="relative w-32 h-16 flex justify-between items-center px-4">
        {/* Left Eye */}
        <div className="w-4 h-4 bg-black rounded-full" />
        
        {/* Mouth */}
        <div className="absolute left-1/2 -translate-x-1/2 top-4">
          {isSmiling ? (
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M 5 5 Q 20 20 35 5" stroke="black" strokeWidth="4" strokeLinecap="round" fill="none" />
            </svg>
          ) : (
            <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="5" r="4" fill="black" />
            </svg>
          )}
        </div>

        {/* Right Eye */}
        <div className="w-4 h-4 bg-black rounded-full" />
      </div>
    </motion.div>
  );
}
