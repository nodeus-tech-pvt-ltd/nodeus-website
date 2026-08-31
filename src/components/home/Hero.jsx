
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";

import blueIcon from "../../assets/blue-icon.png";
import "../../styles/home/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-background">
        <div className="hero-grid" />
        <div className="hero-light hero-light-one" />
        <div className="hero-light hero-light-two" />
      </div>


      {/* Main Container */}
      <div className="hero-container">

        {/* =========================================
            LEFT CONTENT
        ========================================= */}

        <div className="hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow-dot" />
            Managed Teams. Measurable Growth.
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            We build the teams
            <br />
            <span>behind your growth.</span>
          </motion.h1>


          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Build stronger operations with dedicated teams across
            customer experience, business operations, technology,
            and specialized support.
          </motion.p>


          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >

            <Link
              to="/solutions"
              className="hero-primary"
            >
              Explore Solutions
              <ArrowUpRight size={17} />
            </Link>


            <Link
              to="/about/how-we-work"
              className="hero-secondary"
            >
              How We Work
            </Link>

          </motion.div>


          {/* <motion.button
            type="button"
            className="hero-scroll"
            onClick={() => {
              document
                .getElementById("trust-strip")
                ?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
            }}
          >
            <span className="scroll-line" />
            <span>Scroll to explore</span>
            <ArrowDown size={15} />
          </motion.button> */}

        </div>


        {/* =========================================
            ANIMATED VISUAL
        ========================================= */}

        <motion.div
          className="hero-visual"
          initial={{
            opacity: 0,
            scale: 0.94,
            x: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <div className="visual-glow" />


          {/* =========================================
              CENTER LOGO / CORE
          ========================================= */}

          <div className="visual-core">

            <div className="core-inner">

              <img
                src={blueIcon}
                alt="Nodeus"
                className="core-logo"
              />

            </div>

          </div>


          {/* =========================================
              ORBIT 1
          ========================================= */}

          <motion.div
            className="visual-orbit visual-orbit-one"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="orbit-node orbit-node-one" />
          </motion.div>


          {/* =========================================
              ORBIT 2
          ========================================= */}

          <motion.div
            className="visual-orbit visual-orbit-two"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="orbit-node orbit-node-two" />
          </motion.div>


          {/* =========================================
              ORBIT 3
          ========================================= */}

          <motion.div
            className="visual-orbit visual-orbit-three"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="orbit-node orbit-node-three" />
          </motion.div>


          {/* =========================================
              FLOATING DATA CARDS
          ========================================= */}

          {/* <motion.div
            className="visual-card visual-card-one"
            animate={{
              y: [-6, 6, -6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="card-dot" />
            <span>Customer Experience</span>
          </motion.div>


          <motion.div
            className="visual-card visual-card-two"
            animate={{
              y: [6, -6, 6],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="card-dot" />
            <span>Business Operations</span>
          </motion.div> */}


          {/* <motion.div
            className="visual-card visual-card-three"
            animate={{
              y: [-5, 5, -5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="card-dot" />
            <span>Technology</span>
          </motion.div> */}


          {/* =========================================
              SMALL FLOATING PARTICLES
          ========================================= */}

          <span className="visual-particle particle-one" />
          <span className="visual-particle particle-two" />
          <span className="visual-particle particle-three" />
          <span className="visual-particle particle-four" />

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;

