import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 bg-primary origin-left z-[100] shadow-[0_0_10px_rgba(250,204,21,0.5)]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
