// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";
// import { Link } from "react-router-dom";

// import "../../styles/pages/solutions.css";
// import solutionsData from "../../data/solutions/solutionsData";

// function Solutions() {
//   const solutions = Object.values(solutionsData);

//   return (
//     <main className="solutions-page">

//       {/* =========================================
//           HERO
//       ========================================= */}

//       <section className="solutions-page-hero">

//         <span className="section-eyebrow">
//           OUR SOLUTIONS
//         </span>

//         <h1>
//           Capabilities built
//           <br />
//           <span>around your business.</span>
//         </h1>

//         <p>
//           From customer experience and business operations to technology,
//           AI, finance, and creative services, we build dedicated capabilities
//           around the way your business works.
//         </p>

//       </section>


//       {/* =========================================
//           SOLUTIONS GRID
//       ========================================= */}

//       <section className="solutions-page-grid">

//         {solutions.map((solution, index) => {

//           const Icon = solution.icon;

//           return (

//             <motion.div
//               key={solution.slug}

//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}

//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}

//               viewport={{
//                 once: true,
//                 amount: 0.2,
//               }}

//               transition={{
//                 duration: 0.6,
//                 delay: index * 0.08,
//               }}
//             >

//               <Link
//                 to={`/solutions/${solution.slug}`}
//                 className="solutions-page-card"
//               >

//                 {/* =================================
//                     CARD TOP
//                 ================================= */}

//                 <div className="solutions-page-card-top">

//                   <span>
//                     {solution.number}
//                   </span>

//                   <div className="solutions-page-icon">
//                     <Icon size={25} />
//                   </div>

//                 </div>


//                 {/* =================================
//                     CARD CONTENT
//                 ================================= */}

//                 <h2>
//                   {solution.title}
//                 </h2>

//                 <p>
//                   {solution.description}
//                 </p>


//                 {/* =================================
//                     SERVICE TAGS
//                 ================================= */}

//                 <div className="solutions-page-services">

//                   {solution.services
//                     .slice(0, 6)
//                     .map((service) => (

//                       <span key={service}>
//                         {service}
//                       </span>

//                     ))}

//                 </div>


//                 {/* =================================
//                     EXPLORE LINK
//                 ================================= */}

//                 <span className="solution-link">

//                   Explore solution

//                   <ArrowUpRight size={17} />

//                 </span>

//               </Link>

//             </motion.div>

//           );

//         })}

//       </section>

//     </main>
//   );
// }

// export default Solutions;


import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Globe2,
  ShieldCheck,
  Zap,
} from "lucide-react";

import { solutionsData } from "../../data/solutions/solutionsData";
import "../../styles/pages/solutions.css";

import nodeusWhiteLogo from "../../assets/white.png";


// ============================================================
// ANIMATIONS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};


// ============================================================
// MAIN COMPONENT
// ============================================================

const Solutions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSolutions = solutionsData.length;

  // ----------------------------------------------------------
  // DRAG / SWIPE REFERENCES
  // ----------------------------------------------------------

  const pointerStartX = useRef(0);
  const pointerCurrentX = useRef(0);
  const isPointerDown = useRef(false);
  const isDragging = useRef(false);


  // ----------------------------------------------------------
  // SLIDER NAVIGATION
  // ----------------------------------------------------------

  const nextSlide = () => {
    setActiveIndex((current) =>
      current === totalSolutions - 1 ? 0 : current + 1
    );
  };

  const previousSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? totalSolutions - 1 : current - 1
    );
  };


  // ----------------------------------------------------------
  // POINTER / MOUSE / TOUCH DRAG START
  // ----------------------------------------------------------

  const handlePointerDown = (event) => {
    // Only react to the primary pointer
    if (event.isPrimary === false) return;

    isPointerDown.current = true;
    isDragging.current = false;

    pointerStartX.current = event.clientX;
    pointerCurrentX.current = event.clientX;
  };


  // ----------------------------------------------------------
  // POINTER / MOUSE / TOUCH DRAG MOVE
  // ----------------------------------------------------------

  const handlePointerMove = (event) => {
    if (!isPointerDown.current) return;

    if (event.isPrimary === false) return;

    pointerCurrentX.current = event.clientX;

    const distance =
      pointerCurrentX.current - pointerStartX.current;

    // Once the pointer has moved enough, consider it a drag.
    if (Math.abs(distance) > 8) {
      isDragging.current = true;
    }
  };


  // ----------------------------------------------------------
  // POINTER / MOUSE / TOUCH DRAG END
  // ----------------------------------------------------------

  const handlePointerUp = () => {
    if (!isPointerDown.current) return;

    const distance =
      pointerCurrentX.current - pointerStartX.current;

    isPointerDown.current = false;

    const swipeThreshold = 60;

    // Dragged right → previous slide
    if (distance > swipeThreshold) {
      previousSlide();
    }

    // Dragged left → next slide
    else if (distance < -swipeThreshold) {
      nextSlide();
    }

    // Reset after processing
    setTimeout(() => {
      isDragging.current = false;
    }, 0);
  };


  // ----------------------------------------------------------
  // POINTER CANCEL
  // ----------------------------------------------------------

  const handlePointerCancel = () => {
    isPointerDown.current = false;
    isDragging.current = false;
  };


  // ----------------------------------------------------------
  // PREVENT CLICK AFTER DRAG
  // ----------------------------------------------------------

  const handleCarouselClick = (event) => {
    if (isDragging.current) {
      event.preventDefault();
      event.stopPropagation();

      isDragging.current = false;
    }
  };


  // ----------------------------------------------------------
  // KEYBOARD NAVIGATION
  // ----------------------------------------------------------

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        nextSlide();
      }

      if (event.key === "ArrowLeft") {
        previousSlide();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [totalSolutions]);


  // ----------------------------------------------------------
  // GET CARD POSITION
  // ----------------------------------------------------------

  const getRelativePosition = (index) => {
    let difference = index - activeIndex;

    if (difference > totalSolutions / 2) {
      difference -= totalSolutions;
    }

    if (difference < -totalSolutions / 2) {
      difference += totalSolutions;
    }

    return difference;
  };


  return (
    <main className="solutions-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="solutions-hero">

        <div className="solutions-hero-grid" />

        <div className="solutions-hero-glow solutions-hero-glow-one" />
        <div className="solutions-hero-glow solutions-hero-glow-two" />

        <div className="solutions-container">

          <motion.div
            className="solutions-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-eyebrow"
              variants={fadeUp}
            >
              <span className="solutions-eyebrow-dot" />
              SOLUTIONS BUILT FOR BUSINESS
            </motion.div>


            <motion.h1 variants={fadeUp}>
              The right people,
              <span> powered by the right solutions.</span>
            </motion.h1>


            <motion.p
              className="solutions-hero-description"
              variants={fadeUp}
            >
              From customer experience and business operations to marketing,
              e-commerce, AI, and logistics, Nodeus provides specialized
              teams and technology-enabled solutions designed around the way
              your business works.
            </motion.p>


            <motion.div
              className="solutions-hero-actions"
              variants={fadeUp}
            >

              <Link
                to="/contact"
                className="solutions-btn solutions-btn-primary"
              >
                Talk to Our Team
                <ArrowUpRight size={18} />
              </Link>


              <a
                href="#solutions-list"
                className="solutions-btn solutions-btn-secondary"
              >
                Explore Solutions

                <span className="solutions-arrow-down">
                  <ArrowRight size={16} />
                </span>
              </a>

            </motion.div>

          </motion.div>


          {/* =================================================
              HERO VISUAL
          ================================================= */}

          <motion.div
            className="solutions-hero-visual"
            initial={{
              opacity: 0,
              scale: 0.94,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <div className="solutions-orbit orbit-one" />
            <div className="solutions-orbit orbit-two" />
            <div className="solutions-orbit orbit-three" />

            <div className="solutions-hero-center">

              <div className="solutions-center-logo">
                <img
                  src={nodeusWhiteLogo}
                  alt="Nodeus"
                />
              </div>

            </div>


            <div className="solutions-floating-card floating-card-one">

              <span className="floating-card-icon">
                <Zap size={16} />
              </span>

              <div>
                <strong>Built to Scale</strong>
                <small>Flexible support models</small>
              </div>

            </div>


            <div className="solutions-floating-card floating-card-two">

              <span className="floating-card-icon">
                <Globe2 size={16} />
              </span>

              <div>
                <strong>Global Support</strong>
                <small>Teams that work with you</small>
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS SLIDER
      ===================================================== */}

      <section
        className="solutions-services"
        id="solutions-list"
      >

        <div className="solutions-container">

          {/* -----------------------------------------------
              SECTION HEADER
          ------------------------------------------------ */}

          <motion.div
            className="solutions-heading-row"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-heading-content"
              variants={fadeUp}
            >

              <div className="solutions-section-label">
                OUR SOLUTIONS
              </div>

              <h2>
                One partner.
                <span> Multiple ways to grow.</span>
              </h2>

              <p>
                Explore the specialized solutions we provide to help
                businesses improve customer experiences, increase
                productivity, and build more scalable operations.
              </p>

            </motion.div>

          </motion.div>


          {/* =================================================
              UNIQUE SOLUTION CAROUSEL
          ================================================= */}

          <div className="solutions-carousel">

            <div
              className="solutions-carousel-stage"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerCancel}
              onPointerLeave={(event) => {
                // Only release for mouse.
                // Touch pointers should remain controlled by
                // pointerup/pointercancel.
                if (event.pointerType === "mouse") {
                  handlePointerUp();
                }
              }}
              onClick={handleCarouselClick}
            >

              {solutionsData.map((solution, index) => {

                const relativePosition =
                  getRelativePosition(index);

                const isActive =
                  relativePosition === 0;


                /*
                 * Only render cards that are close to the active
                 * card. This prevents the carousel from becoming
                 * visually cluttered.
                 */

                if (Math.abs(relativePosition) > 2) {
                  return null;
                }


                return (
                  <motion.article
                    key={solution.slug}
                    className={`solution-slide ${
                      isActive
                        ? "solution-slide-active"
                        : "solution-slide-side"
                    }`}
                    animate={{
                      x: relativePosition * 58 + "%",
                      scale:
                        relativePosition === 0
                          ? 1
                          : Math.abs(relativePosition) === 1
                            ? 0.84
                            : 0.72,
                      rotateY:
                        relativePosition === 0
                          ? 0
                          : relativePosition > 0
                            ? -10
                            : 10,
                      rotateZ:
                        relativePosition === 0
                          ? 0
                          : relativePosition > 0
                            ? 1
                            : -1,
                      opacity:
                        relativePosition === 0
                          ? 1
                          : Math.abs(relativePosition) === 1
                            ? 0.42
                            : 0.16,
                      zIndex:
                        20 - Math.abs(relativePosition),
                    }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >

                    <Link
                      to={solution.route}
                      className="solution-slide-link"
                      draggable="false"
                    >

                      {/* -----------------------------------
                          IMAGE
                      ----------------------------------- */}

                      {solution.image && (
                        <div className="solution-slide-image">

                          <img
                            src={solution.image}
                            alt={solution.title}
                            loading="lazy"
                            draggable="false"
                            onError={(event) => {
                              event.currentTarget.parentElement.style.display =
                                "none";
                            }}
                          />

                          <div className="solution-slide-image-overlay" />

                          <span className="solution-slide-number">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="solution-slide-open">
                            <ArrowUpRight size={19} />
                          </span>

                        </div>
                      )}


                      {/* -----------------------------------
                          CONTENT
                      ----------------------------------- */}

                      <div className="solution-slide-content">

                        <div className="solution-slide-top">

                          <div className="solution-slide-icon">

                            {solution.icon &&
                              React.createElement(
                                solution.icon,
                                {
                                  size: 20,
                                  strokeWidth: 1.7,
                                }
                              )}

                          </div>


                          <span className="solution-slide-category">
                            {solution.category}
                          </span>

                        </div>


                        <h3>
                          {solution.title}
                        </h3>


                        <p>
                          {solution.cardDescription ||
                            solution.description}
                        </p>


                        {solution.highlights?.length > 0 && (

                          <div className="solution-slide-highlights">

                            {solution.highlights
                              .slice(0, 4)
                              .map((highlight) => (

                                <span key={highlight}>

                                  <CheckCircle2 size={14} />

                                  {highlight}

                                </span>

                              ))}

                          </div>

                        )}


                        <div className="solution-slide-footer">

                          <span>
                            Explore solution
                          </span>

                          <span className="solution-slide-footer-arrow">
                            <ArrowRight size={17} />
                          </span>

                        </div>

                      </div>

                    </Link>

                  </motion.article>
                );
              })}

            </div>


            {/* =================================================
                SLIDER CONTROLS
            ================================================= */}

            <div className="solutions-carousel-controls">

              <button
                type="button"
                className="solutions-carousel-arrow"
                onClick={previousSlide}
                aria-label="Previous solution"
              >
                <ChevronLeft size={20} />
              </button>


              <div className="solutions-carousel-dots">

                {solutionsData.map((solution, index) => (

                  <button
                    key={solution.slug}
                    type="button"
                    className={`solutions-carousel-dot ${
                      index === activeIndex
                        ? "active"
                        : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to ${solution.title}`}
                  />

                ))}

              </div>


              <button
                type="button"
                className="solutions-carousel-arrow"
                onClick={nextSlide}
                aria-label="Next solution"
              >
                <ChevronRight size={20} />
              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY NODEUS
      ===================================================== */}

      <section className="solutions-why">

        <div className="solutions-container">

          <motion.div
            className="solutions-why-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-why-heading"
              variants={fadeUp}
            >

              <div className="solutions-section-label light">
                WHY NODEUS
              </div>

              <h2>
                Built around your
                <span> business.</span>
              </h2>

              <p>
                We don't simply add people to your operation. We build
                structured support around your goals, workflows, systems,
                customers, and expectations.
              </p>

              <Link
                to="/contact"
                className="solutions-text-link"
              >
                Build your team with Nodeus
                <ArrowRight size={17} />
              </Link>

            </motion.div>


            <motion.div
              className="solutions-why-features"
              variants={staggerContainer}
            >

              <WhyFeature
                title="Dedicated Teams"
                text="Work with professionals aligned with your processes, customers, tools, and business requirements."
              />

              <WhyFeature
                title="Flexible Operations"
                text="Scale support and operational capacity around changing business needs and customer demand."
              />

              <WhyFeature
                title="Technology Enabled"
                text="Combine people and technology to create smarter, more efficient, and connected workflows."
              />

              <WhyFeature
                title="Built for Long-Term Growth"
                text="Create operational foundations that can evolve as your business grows and priorities change."
              />

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PLATFORMS
      ===================================================== */}

      <section className="solutions-platforms">

        <div className="solutions-container">

          <motion.div
            className="solutions-platforms-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              PLATFORMS & TOOLS
            </motion.div>


            <motion.h2 variants={fadeUp}>
              Work with the tools
              <span> your business already uses.</span>
            </motion.h2>


            <motion.p variants={fadeUp}>
              Our teams can work within the platforms and systems that power
              your business, helping you extend your capabilities without
              rebuilding your technology stack.
            </motion.p>

          </motion.div>


          <motion.div
            className="solutions-tools-cloud"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            {[
              "Salesforce",
              "HubSpot",
              "Shopify",
              "Zendesk",
              "Microsoft 365",
              "Google Workspace",
              "Slack",
              "Intercom",
              "Amazon",
              "Meta",
              "Canva",
              "Notion",
              "Asana",
              "Monday.com",
              "OpenAI",
              "Google Gemini",
              "Anthropic Claude",
              "Zapier",
            ].map((tool) => (

              <motion.div
                className="solutions-tool-pill"
                key={tool}
                variants={fadeUp}
              >
                <span className="tool-pill-dot" />
                {tool}
              </motion.div>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          TRUST
      ===================================================== */}

      <section className="solutions-trust">

        <div className="solutions-container">

          <motion.div
            className="solutions-trust-header"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              TRUST & SECURITY
            </motion.div>


            <motion.div
              className="solutions-trust-title"
              variants={fadeUp}
            >

              <h2>
                Security and privacy
                <span> matter from day one.</span>
              </h2>

              <p>
                We understand that your customers, data, systems, and
                business information require responsible handling and
                structured processes.
              </p>

            </motion.div>

          </motion.div>


          <motion.div
            className="solutions-compliance-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
            variants={staggerContainer}
          >

            <ComplianceCard
              title="27001:2013"
              description="Certified Information Security Management"
            />

            <ComplianceCard
              title="HIPAA Compliant"
              description="Patient Rights Under HIPAA are Protected"
            />

            <ComplianceCard
              title="AICPA SOC 2"
              description="Fully Compliant"
            />

            <ComplianceCard
              title="California Consumer Privacy"
              description="Fully Compliant"
            />

            <ComplianceCard
              title="GDPR"
              description="2018 General Data Protection Regulation"
            />

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SEO
      ===================================================== */}

      <section className="solutions-seo">

        <div className="solutions-container">

          <motion.div
            className="solutions-seo-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-seo-content"
              variants={fadeUp}
            >

              <h2>
                Outsourcing solutions designed
                <span> around real business needs.</span>
              </h2>

              <p>
                Businesses today need more than additional headcount. They
                need reliable people, efficient processes, modern technology,
                and the flexibility to adapt. Nodeus provides specialized
                business outsourcing and support solutions across customer
                service, customer success, executive support, marketing,
                social media, e-commerce, AI transformation, and
                transportation operations.
              </p>

              <p>
                Whether you're looking to improve customer experience,
                increase operational efficiency, expand your marketing
                capabilities, automate repetitive work, or strengthen
                logistics operations, our teams can become an extension of
                your organization.
              </p>

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="solutions-final-cta">

        <div className="solutions-final-glow" />

        <div className="solutions-container">

          <motion.div
            className="solutions-final-content"
            initial={{
              opacity: 0,
              y: 35,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            <h2>
              Your next stage of growth
              <span> starts with the right support.</span>
            </h2>

            <p>
              Tell us what you're trying to accomplish. We'll help you
              identify the people, processes, and technology needed to move
              forward.
            </p>

            <Link
              to="/contact"
              className="solutions-btn solutions-btn-primary"
            >
              Start a Conversation
              <ArrowUpRight size={18} />
            </Link>

          </motion.div>

        </div>

      </section>

    </main>
  );
};


// ============================================================
// WHY FEATURE
// ============================================================

const WhyFeature = ({
  title,
  text,
}) => {
  return (
    <motion.div
      className="solutions-why-feature"
      variants={fadeUp}
    >

      <div className="why-feature-marker">
        <CheckCircle2 size={17} />
      </div>

      <div>

        <h3>{title}</h3>

        <p>{text}</p>

      </div>

    </motion.div>
  );
};


// ============================================================
// COMPLIANCE CARD
// ============================================================

const ComplianceCard = ({
  title,
  description,
}) => {
  return (
    <motion.div
      className="solutions-compliance-card"
      variants={fadeUp}
    >

      <div className="compliance-icon">
        <ShieldCheck size={20} />
      </div>

      <div>
        <strong>{title}</strong>
        <span>{description}</span>
      </div>

    </motion.div>
  );
};


export default Solutions;


