import {
  ArrowUpRight,
  Check,
  ChevronRight,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import industries from "../../data/industries/industriesData";

import AnimatedPage from "../../components/shared/AnimatedPage";

import "../../styles/pages/industryDetail.css";


function IndustryDetail() {

  const {
    industry,
  } = useParams();


  const industryData =
    industries.find(
      (item) =>
        item.slug === industry
    );


  if (!industryData) {

    return (

      <AnimatedPage>

        <main
          className="industry-not-found"
        >

          <span>
            INDUSTRY NOT FOUND
          </span>

          <h1>
            This industry page
            does not exist.
          </h1>

          <Link
            to="/industries"
          >

            Back to industries

            <ArrowUpRight
              size={18}
            />

          </Link>

        </main>

      </AnimatedPage>

    );

  }


  const Icon =
    industryData.icon;


  const challenges =
    industryData.challenges ||
    [];


  const capabilities =
    industryData.capabilities ||
    [];


  const outcomes =
    industryData.outcomes ||
    [];


  return (

    <AnimatedPage>

      <main
        className="industry-detail-page"
      >


        {/* =============================
            HERO
        ============================== */}

        <section
          className="industry-detail-hero"
        >

          <div
            className="industry-detail-hero-glow"
          />


          <div
            className="industry-detail-container"
          >


            <motion.div

              className={
                "industry-detail-hero-content"
              }

              initial={{
                opacity: 0,
                y: 35,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.65,
              }}

            >


              <Link

                to="/industries"

                className={
                  "industry-breadcrumb"
                }

              >

                Industries

                <ChevronRight
                  size={15}
                />

                <span>

                  {
                    industryData.title
                  }

                </span>

              </Link>


              <div
                className={
                  "industry-detail-icon"
                }
              >

                <Icon
                  size={30}
                />

              </div>


              <span
                className={
                  "section-eyebrow"
                }
              >

                INDUSTRY SOLUTIONS

              </span>


              <h1>

                {
                  industryData.heroTitle ||
                  `Operations built for ${industryData.title}.`
                }

              </h1>


              <p>

                {
                  industryData.heroDescription ||
                  `Nodeus builds flexible teams and operational capabilities that help ${industryData.title} businesses deliver better customer experiences and scale efficiently.`
                }

              </p>


              <div
                className={
                  "industry-detail-actions"
                }
              >

                <Link

                  to="/contact"

                  className={
                    "industry-primary-button"
                  }

                >

                  Talk to our team

                  <ArrowUpRight
                    size={18}
                  />

                </Link>


                <Link

                  to="/solutions"

                  className={
                    "industry-secondary-button"
                  }

                >

                  Explore solutions

                </Link>

              </div>


            </motion.div>


            <motion.div

              className={
                "industry-detail-hero-panel"
              }

              initial={{
                opacity: 0,
                x: 40,
              }}

              animate={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.15,
              }}

            >


              <span>

                BUILT TO SUPPORT

              </span>


              <h2>

                Flexible teams.

                <br />

                <strong>

                  Better operations.

                </strong>

              </h2>


              <div
                className={
                  "industry-support-list"
                }
              >

                <div>

                  <Check
                    size={17}
                  />

                  Dedicated specialists

                </div>


                <div>

                  <Check
                    size={17}
                  />

                  Scalable team capacity

                </div>


                <div>

                  <Check
                    size={17}
                  />

                  Industry-aligned workflows

                </div>


                <div>

                  <Check
                    size={17}
                  />

                  Clear performance reporting

                </div>

              </div>


            </motion.div>


          </div>

        </section>


        {/* =============================
            CHALLENGES
        ============================== */}

        <section
          className="industry-challenges-section"
        >

          <div
            className="industry-detail-container"
          >


            <div
              className={
                "industry-section-heading"
              }
            >

              <span
                className={
                  "section-eyebrow"
                }
              >

                INDUSTRY CHALLENGES

              </span>


              <h2>

                The operational challenges

                <br />

                <span>

                  your team should not
                  have to solve alone.

                </span>

              </h2>


              <p>

                Growing businesses need
                reliable operational
                support without adding
                unnecessary complexity.

              </p>

            </div>


            <div
              className={
                "industry-challenges-grid"
              }
            >

              {

                challenges.map(
                  (
                    challenge,
                    index
                  ) => (

                    <motion.article

                      key={
                        challenge
                      }

                      className={
                        "industry-challenge-card"
                      }

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
                        duration: 0.5,
                        delay:
                          index * 0.07,
                      }}

                    >


                      {/* <span>

                        {
                          String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )
                        }

                      </span> */}


                      <h3>

                        {
                          challenge
                        }

                      </h3>


                    </motion.article>

                  )
                )

              }

            </div>


          </div>

        </section>


        {/* =============================
            CAPABILITIES
        ============================== */}

        <section
          className="industry-capabilities-section"
        >

          <div
            className={
              "industry-detail-container"
            }
          >


            <div
              className={
                "industry-capabilities-layout"
              }
            >


              <div
                className={
                  "industry-capabilities-intro"
                }
              >

                <span
                  className={
                    "section-eyebrow"
                  }
                >

                  HOW NODEUS HELPS

                </span>


                <h2>

                  Capabilities designed

                  <br />

                  <span>

                    around your business.

                  </span>

                </h2>


                <p>

                  We combine people,
                  processes, technology,
                  and performance
                  management to build
                  support that fits your
                  operations.

                </p>


                <Link

                  to="/solutions"

                  className={
                    "industry-text-link"
                  }

                >

                  View all solutions

                  <ArrowUpRight
                    size={17}
                  />

                </Link>


              </div>


              <div
                className={
                  "industry-capabilities-list"
                }
              >

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

                        className={
                          "industry-capability-item"
                        }

                        initial={{
                          opacity: 0,
                          x: 25,
                        }}

                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 0.5,
                          delay:
                            index * 0.08,
                        }}

                      >


                        <span>

                          {
                            String(
                              index + 1
                            ).padStart(
                              2,
                              "0"
                            )
                          }

                        </span>


                        <div>

                          <h3>

                            {
                              capability
                            }

                          </h3>


                          <p>

                            Dedicated
                            operational
                            support built
                            around your
                            workflows and
                            customer needs.

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


            </div>


          </div>

        </section>


        {/* =============================
            OPERATING MODEL
        ============================== */}

        {/* <section
          className="industry-workflow-section"
        >

          <div
            className={
              "industry-detail-container"
            }
          >


            <div
              className={
                "industry-workflow-heading"
              }
            >

                <span
                  className={
                    "section-eyebrow"
                  }
                >

                  HOW WE WORK

                </span>


                <h2>

                  A clear path from

                  <span>

                    challenge to scale.

                  </span>

                </h2>

            </div>


            <div
              className={
                "industry-workflow"
              }
            >


              <div>

                <span>
                  01
                </span>

                <h3>
                  Discover
                </h3>

                <p>

                  We learn about your
                  customers, workflows,
                  goals, and operational
                  requirements.

                </p>

              </div>


              <div>

                <span>
                  02
                </span>

                <h3>
                  Build
                </h3>

                <p>

                  We design the team,
                  processes, tools, and
                  reporting structure.

                </p>

              </div>


              <div>

                <span>
                  03
                </span>

                <h3>
                  Enable
                </h3>

                <p>

                  Your dedicated team
                  is trained and
                  integrated into your
                  operations.

                </p>

              </div>


              <div>

                <span>
                  04
                </span>

                <h3>
                  Scale
                </h3>

                <p>

                  We continuously
                  improve performance
                  and expand capacity
                  as your needs grow.

                </p>

              </div>


            </div>


          </div>

        </section> */}


        {/* =============================
            OUTCOMES
        ============================== */}

        <section
          className="industry-outcomes-section"
        >

          <div
            className={
              "industry-detail-container"
            }
          >


            <div
              className={
                "industry-outcomes-panel"
              }
            >


              <div>

                <span
                  className={
                    "section-eyebrow"
                  }
                >

                  WHAT YOU CAN EXPECT

                </span>


                <h2>

                  More focus.

                  <br />

                  <span>

                    Stronger operations.

                  </span>

                </h2>


                <p>

                  Nodeus helps your
                  internal teams focus
                  on strategic growth
                  while dedicated
                  operational teams
                  manage critical
                  day-to-day work.

                </p>

              </div>


              <div
                className={
                  "industry-outcomes-grid"
                }
              >

                {

                  outcomes.map(
                    (
                      outcome
                    ) => (

                      <div
                        key={
                          outcome
                        }
                      >

                        <Check
                          size={18}
                        />

                        <span>

                          {
                            outcome
                          }

                        </span>

                      </div>

                    )
                  )

                }

              </div>


            </div>


          </div>

        </section>


        {/* =============================
            CTA
        ============================== */}

        <section
          className="industry-detail-cta"
        >

          <div
            className={
              "industry-detail-container"
            }
          >


            <div>

              <span>

                READY TO BUILD?

              </span>


              <h2>

                Let’s build the right

                <br />

                <strong>

                  team for your industry.

                </strong>

              </h2>

            </div>


            <Link

              to="/contact"

            >

              Start a conversation

              <ArrowUpRight
                size={19}
              />

            </Link>


          </div>

        </section>


      </main>

    </AnimatedPage>

  );

}


export default IndustryDetail;




