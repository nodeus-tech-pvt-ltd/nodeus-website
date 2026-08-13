import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import nodeusLogo from "../../assets/blue-icon.png";

import "../../styles/home/Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background Grid */}
      <div className="hero-grid"></div>

      {/* Glows */}
      <div className="hero-glow hero-glow-one"></div>
      <div className="hero-glow hero-glow-two"></div>


      {/* =========================================
          HERO CONTENT
      ========================================= */}

      <div className="hero-content">

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.15,
          }}
        >
          We build the teams
          <br />
          <span>behind your growth.</span>
        </motion.h1>


        <motion.p
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
        >
          From customer experience and business operations to technology
          and specialized support, Nodeus helps businesses scale with
          dedicated teams and managed outsourcing solutions.
        </motion.p>


        {/* =========================================
            ACTIONS
        ========================================= */}

        <motion.div
          className="hero-actions"
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
        >

          <Link
            to="/solutions"
            className="primary-button"
          >
            Explore Solutions

            <ArrowUpRight size={18} />
          </Link>


          <Link
            to="/about/how-we-work"
            className="secondary-button"
          >
            How We Work
          </Link>

        </motion.div>


        {/* =========================================
            SCROLL TO EXPLORE

            Now part of the normal content flow.
            This prevents huge empty space when
            zooming or changing screen sizes.
        ========================================= */}

        <motion.button
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
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={18} />

          <span>
            Scroll to explore
          </span>
        </motion.button>

      </div>


      {/* =========================================
          ORBIT
      ========================================= */}

      <div className="hero-orbit">

        <div className="orbit orbit-one"></div>

        <div className="orbit orbit-two"></div>

        <div className="orbit-center">

          <img
            src={nodeusLogo}
            alt="Nodeus"
            className="orbit-logo"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;