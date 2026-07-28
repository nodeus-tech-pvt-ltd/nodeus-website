import { motion } from "framer-motion";

function AnimatedPage({ children }) {
  return (
    <motion.main
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: -25,
      }}
      transition={{
        duration: 0.45,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.main>
  );
}

export default AnimatedPage;