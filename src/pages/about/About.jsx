import { motion } from "framer-motion";

import {
  ArrowUpRight,
  CheckCircle2,
  Globe2,
  Layers3,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  UsersRound,
} from "lucide-react";

import AnimatedPage from "../../components/shared/AnimatedPage";

import "../../styles/pages/about.css";


function About() {

  const values = [

    {
      icon: UsersRound,

      number: "01",

      title: "People-first partnerships",

      description:
        "We build collaborative relationships around your goals, your customers, and the way your business works.",

    },

    {
      icon: Layers3,

      number: "02",

      title: "Process with purpose",

      description:
        "Clear workflows, measurable standards, and practical systems help teams operate consistently and efficiently.",

    },

    {
      icon: Lightbulb,

      number: "03",

      title: "Flexible by design",

      description:
        "Our delivery models adapt as your priorities change, giving you the freedom to grow without unnecessary complexity.",

    },

    {
      icon: ShieldCheck,

      number: "04",

      title: "Accountability that scales",

      description:
        "We focus on visibility, quality, and continuous improvement so performance remains clear as operations expand.",

    },

  ];


  const capabilities = [

    "Customer experience and support",

    "Business operations and back-office services",

    "Sales and revenue operations",

    "Technology and IT services",

    "AI, automation, and digital capabilities",

    "Finance, accounting, marketing, and creative support",

  ];


  const process = [

    {
      number: "01",

      title: "Understand",

      description:
        "We learn about your business, goals, workflows, challenges, and the outcomes that matter most.",

    },

    {
      number: "02",

      title: "Build",

      description:
        "We shape the right team structure, service model, processes, and delivery approach around your needs.",

    },

    {
      number: "03",

      title: "Enable",

      description:
        "We prepare people, tools, knowledge, and workflows for a confident and well-supported launch.",

    },

    {
      number: "04",

      title: "Manage",

      description:
        "We provide operational oversight, quality support, reporting, and continuous performance management.",

    },

    {
      number: "05",

      title: "Scale",

      description:
        "We help your capabilities evolve as demand changes and new opportunities emerge.",

    },

  ];


  return (

    <AnimatedPage>

      <main className="about-page">


        {/* =================================
            HERO
        ================================== */}

        <section className="about-hero">

          <div className="about-hero-content">

            <motion.span
              className="section-eyebrow"

              initial={{
                opacity: 0,
                y: 18,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
              }}
            >

              ABOUT NODEUS

            </motion.span>


            <motion.h1

              initial={{
                opacity: 0,
                y: 28,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.65,
                delay: 0.08,
              }}
            >

              The people and capabilities

              <br />

              behind your

              <span>

                growth.

              </span>

            </motion.h1>


            <motion.p

              initial={{
                opacity: 0,
                y: 22,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.16,
              }}
            >

              Nodeus helps businesses build
              dependable teams, strengthen
              operations, and access the
              capabilities they need to grow.
              We bring together people,
              processes, technology, and
              operational support in one
              flexible delivery model.

            </motion.p>


            <motion.div
              className="about-hero-actions"

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: 0.24,
              }}
            >

              <a
                href="/contact"
                className="about-primary-button"
              >

                Start a conversation

                <ArrowUpRight
                  size={18}
                />

              </a>


              <a
                href="/solutions"
                className="about-secondary-button"
              >

                Explore solutions

              </a>

            </motion.div>

          </div>


          {/* HERO VISUAL */}

          <motion.div
            className="about-hero-visual"

            initial={{
              opacity: 0,
              x: 35,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.75,
              delay: 0.16,
            }}
          >

            <div className="about-visual-glow" />


            <div className="about-visual-card about-visual-card-main">

              <div className="about-visual-icon">

                <UsersRound
                  size={27}
                />

              </div>


              <span>

                BUILT AROUND YOUR BUSINESS

              </span>


              <h2>

                The right people.

                <br />

                The right model.

              </h2>


              <p>

                Dedicated capabilities
                designed around your
                priorities, workflows,
                and growth plans.

              </p>

            </div>


            <div className="about-floating-card about-floating-card-top">

              <Globe2
                size={20}
              />

              <div>

                <strong>

                  Global capability

                </strong>

                <span>

                  Flexible delivery

                </span>

              </div>

            </div>


            <div className="about-floating-card about-floating-card-bottom">

              <Target
                size={20}
              />

              <div>

                <strong>

                  Measurable outcomes

                </strong>

                <span>

                  Built for performance

                </span>

              </div>

            </div>

          </motion.div>

        </section>


        {/* =================================
            WHO WE ARE
        ================================== */}

        <section className="about-introduction">

          <motion.div
            className="about-introduction-label"

            initial={{
              opacity: 0,
              y: 25,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.6,
            }}
          >

            <span className="section-eyebrow">

              WHO WE ARE

            </span>


            <div className="about-introduction-icon">

              <Sparkles
                size={24}
              />

            </div>

          </motion.div>


          <motion.div
            className="about-introduction-content"

            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.65,
              delay: 0.08,
            }}
          >

            <h2>

              More than outsourced support.

              <span>

                A capability partner.

              </span>

            </h2>


            <p>

              Businesses need more than
              additional headcount. They
              need capable people, clear
              processes, dependable
              management, and the
              flexibility to respond to
              change.

            </p>


            <p>

              That is where Nodeus comes
              in. We help organizations
              extend their capabilities
              through managed teams and
              specialized services that
              align with their goals and
              become stronger over time.

            </p>

          </motion.div>

        </section>


        {/* =================================
            CAPABILITIES
        ================================== */}

        <section className="about-capabilities">

          <div className="about-section-heading">

            <span className="section-eyebrow">

              WHAT WE HELP BUSINESSES BUILD

            </span>


            <h2>

              Capabilities that connect

              <span>

                across your business.

              </span>

            </h2>


            <p>

              From customer-facing teams
              to operational, technical,
              and growth-focused support,
              our services can work
              independently or together.

            </p>

          </div>


          <div className="about-capabilities-grid">

            {

              capabilities.map(

                (
                  capability,
                  index
                ) => (

                  <motion.div

                    key={
                      capability
                    }

                    className="about-capability-item"

                    initial={{
                      opacity: 0,
                      y: 24,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}

                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.06,
                    }}
                  >

                    <CheckCircle2
                      size={19}
                    />


                    <span>

                      {
                        capability
                      }

                    </span>

                  </motion.div>

                )

              )

            }

          </div>

        </section>


        {/* =================================
            VALUES
        ================================== */}

        <section className="about-values">

          <div className="about-section-heading about-values-heading">

            <span className="section-eyebrow">

              WHAT GUIDES US

            </span>


            <h2>

              Built on principles that

              <span>

                make partnerships work.

              </span>

            </h2>


            <p>

              Our approach combines
              practical execution with
              long-term thinking, helping
              businesses build
              capabilities they can rely
              on.

            </p>

          </div>


          <div className="about-values-grid">

            {

              values.map(

                (
                  value,
                  index
                ) => {

                  const Icon =
                    value.icon;


                  return (

                    <motion.article

                      key={
                        value.title
                      }

                      className="about-value-card"

                      initial={{
                        opacity: 0,
                        y: 28,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      viewport={{
                        once: true,
                        amount: 0.15,
                      }}

                      transition={{
                        duration: 0.55,
                        delay:
                          index * 0.07,
                      }}
                    >

                      <div className="about-value-top">

                        <div className="about-value-icon">

                          <Icon
                            size={22}
                          />

                        </div>


                        <span>

                          {
                            value.number
                          }

                        </span>

                      </div>


                      <h3>

                        {
                          value.title
                        }

                      </h3>


                      <p>

                        {
                          value.description
                        }

                      </p>

                    </motion.article>

                  );

                }

              )

            }

          </div>

        </section>


        {/* =================================
            PROCESS
        ================================== */}

        <section className="about-process">

          <div className="about-process-intro">

            <span className="section-eyebrow">

              HOW WE WORK

            </span>


            <h2>

              A structured path

              <span>

                from need to scale.

              </span>

            </h2>


            <p>

              Every engagement starts with
              understanding your business.
              From there, we build and
              manage the capabilities
              needed to support lasting
              growth.

            </p>

          </div>


          <div className="about-process-list">

            {

              process.map(

                (
                  step,
                  index
                ) => (

                  <motion.div

                    key={
                      step.number
                    }

                    className="about-process-item"

                    initial={{
                      opacity: 0,
                      x: 28,
                    }}

                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}

                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}

                    transition={{
                      duration: 0.55,
                      delay:
                        index * 0.06,
                    }}
                  >

                    <span className="about-process-number">

                      {
                        step.number
                      }

                    </span>


                    <div>

                      <h3>

                        {
                          step.title
                        }

                      </h3>


                      <p>

                        {
                          step.description
                        }

                      </p>

                    </div>


                    <ArrowUpRight
                      size={19}
                    />

                  </motion.div>

                )

              )

            }

          </div>

        </section>


        {/* =================================
            FINAL CTA
        ================================== */}

        <section className="about-cta">

          <div className="about-cta-glow" />


          <motion.div

            initial={{
              opacity: 0,
              y: 28,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
              amount: 0.2,
            }}

            transition={{
              duration: 0.65,
            }}
          >

            <span className="section-eyebrow">

              LET&apos;S BUILD WHAT&apos;S NEXT

            </span>


            <h2>

              Build the right team.

              <br />

              <span>

                Grow with confidence.

              </span>

            </h2>


            <p>

              Tell us where you want to
              go. We&apos;ll help you explore
              the people, processes, and
              capabilities that can move
              your business forward.

            </p>


            <a
              href="/contact"
              className="about-primary-button"
            >

              Talk to our team

              <ArrowUpRight
                size={18}
              />

            </a>

          </motion.div>

        </section>

      </main>

    </AnimatedPage>

  );

}


export default About;