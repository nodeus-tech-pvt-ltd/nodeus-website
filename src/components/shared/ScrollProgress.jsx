import { motion, useScroll } from "framer-motion";
import "../../styles/shared/ScrollProgress.css";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="scroll-progress"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: "0%",
      }}
    />
  );
}

export default ScrollProgress;