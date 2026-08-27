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

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Globe2,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { solutionsData } from "../../data/solutionsData";
import "./Solutions.css";


// ============================================================
// ANIMATION SETTINGS
// ============================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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
                <ArrowDownIcon />
              </a>
            </motion.div>

          </motion.div>


          {/* Hero visual */}

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

              <div className="solutions-center-icon">
                <Sparkles size={30} />
              </div>

              <strong>NODEUS</strong>

              <span>
                People + Process + Technology
              </span>

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

        <div className="solutions-hero-bottom">
          <span>Explore our capabilities</span>

          <a href="#solutions-list">
            <ChevronDown size={18} />
          </a>
        </div>

      </section>


      {/* =====================================================
          INTRO / POSITIONING
      ===================================================== */}

      <section className="solutions-intro">

        <div className="solutions-container">

          <motion.div
            className="solutions-intro-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              <span>01</span>
              WHAT WE DO
            </motion.div>

            <motion.div
              className="solutions-intro-content"
              variants={fadeUp}
            >
              <h2>
                Specialized support for the work
                <span> that moves your business forward.</span>
              </h2>

              <p>
                Every business has different priorities, customers, systems,
                and challenges. That's why we don't believe in one-size-fits-all
                outsourcing.
              </p>

              <p>
                Nodeus combines skilled professionals, structured processes,
                and modern technology to create solutions that fit your
                operation — not the other way around.
              </p>
            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section
        className="solutions-services"
        id="solutions-list"
      >

        <div className="solutions-container">

          <motion.div
            className="solutions-heading-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              <span>02</span>
              OUR SOLUTIONS
            </motion.div>

            <motion.div
              className="solutions-heading-content"
              variants={fadeUp}
            >
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


          <motion.div
            className="solutions-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >

            {solutionsData.map((solution, index) => {

              const Icon = solution.icon;

              return (
                <motion.article
                  className={`solution-card solution-card-${index + 1}`}
                  key={solution.slug}
                  variants={fadeUp}
                >

                  <Link
                    to={solution.route}
                    className="solution-card-link"
                  >

                    {/* Image */}

                    <div className="solution-card-image">

                      {solution.image ? (
                        <img
                          src={solution.image}
                          alt={solution.title}
                          loading="lazy"
                        />
                      ) : (
                        <div className="solution-card-image-placeholder" />
                      )}

                      <div className="solution-card-image-overlay" />

                      <span className="solution-card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="solution-card-arrow">
                        <ArrowUpRight size={20} />
                      </span>

                    </div>


                    {/* Content */}

                    <div className="solution-card-content">

                      <div className="solution-card-top">

                        <div className="solution-card-icon">
                          <Icon size={22} strokeWidth={1.7} />
                        </div>

                        <span className="solution-card-category">
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


                      <div className="solution-card-highlights">

                        {solution.highlights
                          ?.slice(0, 4)
                          .map((highlight) => (
                            <span key={highlight}>
                              <CheckCircle2 size={14} />
                              {highlight}
                            </span>
                          ))}

                      </div>


                      <div className="solution-card-footer">

                        <span>
                          Explore solution
                        </span>

                        <ArrowRight size={17} />

                      </div>

                    </div>

                  </Link>

                </motion.article>
              );
            })}

          </motion.div>

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
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-why-heading"
              variants={fadeUp}
            >

              <div className="solutions-section-label light">
                <span>03</span>
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
                number="01"
                title="Dedicated Teams"
                text="Work with professionals aligned with your processes, customers, tools, and business requirements."
              />

              <WhyFeature
                number="02"
                title="Flexible Operations"
                text="Scale support and operational capacity around changing business needs and customer demand."
              />

              <WhyFeature
                number="03"
                title="Technology Enabled"
                text="Combine people and technology to create smarter, more efficient, and connected workflows."
              />

              <WhyFeature
                number="04"
                title="Built for Long-Term Growth"
                text="Create operational foundations that can evolve as your business grows and priorities change."
              />

            </motion.div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          PLATFORMS + TOOLS
      ===================================================== */}

      <section className="solutions-platforms">

        <div className="solutions-container">

          <motion.div
            className="solutions-platforms-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              <span>04</span>
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
            viewport={{ once: true, amount: 0.2 }}
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
          SECURITY / COMPLIANCE
      ===================================================== */}

      <section className="solutions-trust">

        <div className="solutions-container">

          <motion.div
            className="solutions-trust-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              <span>05</span>
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
            viewport={{ once: true, amount: 0.1 }}
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
          HOW IT WORKS
      ===================================================== */}

      <section className="solutions-process">

        <div className="solutions-container">

          <motion.div
            className="solutions-process-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              <span>06</span>
              HOW IT WORKS
            </motion.div>

            <motion.h2 variants={fadeUp}>
              How to work
              <span> with Nodeus.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              We make getting started simple. Tell us where you need support,
              and we'll work with you to create an operating model that fits.
            </motion.p>

          </motion.div>


          <motion.div
            className="solutions-process-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <ProcessStep
              number="01"
              title="Tell Us What You Need"
              text="Share your goals, challenges, workflows, and the areas where you need additional capacity."
            />

            <ProcessStep
              number="02"
              title="Design Your Solution"
              text="We understand your operation and recommend a support model aligned with your business."
            />

            <ProcessStep
              number="03"
              title="Build Your Team"
              text="We identify the right people, processes, tools, and workflows for your requirements."
            />

            <ProcessStep
              number="04"
              title="Launch & Optimize"
              text="Your team gets to work while we continue improving the operation around your goals."
            />

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SEO CONTENT
      ===================================================== */}

      <section className="solutions-seo">

        <div className="solutions-container">

          <motion.div
            className="solutions-seo-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >

            <motion.div
              className="solutions-section-label"
              variants={fadeUp}
            >
              <span>07</span>
              BUSINESS SOLUTIONS
            </motion.div>

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

            <div className="solutions-final-icon">
              <Sparkles size={24} />
            </div>

            <span className="solutions-final-eyebrow">
              LET'S BUILD SOMETHING BETTER
            </span>

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
// SMALL COMPONENTS
// ============================================================

const ArrowDownIcon = () => {
  return (
    <span className="solutions-arrow-down">
      <ArrowRight size={16} />
    </span>
  );
};


// ============================================================
// WHY NODEUS FEATURE
// ============================================================

const WhyFeature = ({
  number,
  title,
  text,
}) => {
  return (
    <motion.div
      className="solutions-why-feature"
      variants={fadeUp}
    >

      <span className="why-feature-number">
        {number}
      </span>

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


// ============================================================
// PROCESS STEP
// ============================================================

const ProcessStep = ({
  number,
  title,
  text,
}) => {
  return (
    <motion.div
      className="solutions-process-step"
      variants={fadeUp}
    >

      <div className="process-step-top">

        <span className="process-step-number">
          {number}
        </span>

        <ArrowUpRight size={19} />

      </div>

      <h3>{title}</h3>

      <p>{text}</p>

    </motion.div>
  );
};


export default Solutions;