import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

import "../../styles/home/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-grid"></div>

      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>

      <div className="hero-content">
        <motion.div
          className="hero-label"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Sparkles size={16} />
          <span>Managed teams. Measurable growth.</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          We build the teams
          <br />
          <span>behind your growth.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          From customer experience and business operations to technology and
          specialized support, Nodeus helps businesses scale with dedicated
          teams and managed outsourcing solutions.
        </motion.p>

        <motion.div
          className="hero-actions"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          <a href="#solutions" className="primary-button">
            Explore Solutions
            <ArrowUpRight size={18} />
          </a>

          <a href="#process" className="secondary-button">
            How We Work
          </a>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <ArrowDown size={18} />
        <span>Scroll to explore</span>
      </motion.div>

      <div className="hero-orbit">
        <div className="orbit orbit-one"></div>
        <div className="orbit orbit-two"></div>

        <div className="orbit-center">
          <span>N</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;