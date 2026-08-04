import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  Lightbulb,
  Sparkles,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import AnimatedPage from "../../components/shared/AnimatedPage";

import insights from "../../data/insights/insightsData";

import caseStudies from "../../data/caseStudies/caseStudiesData";

import "../../styles/pages/resources.css";


function Resources() {


  /* =================================
     FEATURED CONTENT
  ================================== */

  const featuredInsight =

    insights[0];


  const featuredCaseStudy =

    caseStudies.find(

      (caseStudy) =>

        caseStudy.featured

    )

    ||

    caseStudies[0];


  return (

    <AnimatedPage>

      <main
        className="resources-page"
      >


        {/* =================================
            HERO
        ================================== */}

        <section
          className="resources-hero"
        >


          <div
            className="resources-hero-content"
          >


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

              KNOWLEDGE & PERSPECTIVE

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

              Ideas that support

              <span>

                better decisions.

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

              Explore practical insights,
              real-world case studies,
              and useful perspectives
              on customer experience,
              business operations,
              technology, and growth.

            </motion.p>


            <motion.div

              className="resources-hero-actions"

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


              <Link

                to="/resources/insights"

                className="resources-primary-button"

              >

                Explore insights

                <ArrowRight
                  size={18}
                />

              </Link>


              <Link

                to="/resources/case-studies"

                className="resources-secondary-button"

              >

                View case studies

                <ArrowUpRight
                  size={17}
                />

              </Link>


            </motion.div>


          </div>


          {/* HERO VISUAL */}

          <motion.div

            className="resources-hero-visual"

            initial={{

              opacity: 0,

              scale: 0.92,

            }}

            animate={{

              opacity: 1,

              scale: 1,

            }}

            transition={{

              duration: 0.7,

              delay: 0.15,

            }}

          >


            <div
              className="resources-visual-grid"
            />


            <div
              className="resources-visual-orb"
            />


            <div
              className="resources-visual-main-icon"
            >

              <Lightbulb
                size={48}
              />

            </div>


            <div
              className="resources-visual-card resources-visual-card-one"
            >

              <BookOpen
                size={21}
              />


              <div>

                <strong>

                  Insights

                </strong>


                <span>

                  Practical ideas

                </span>

              </div>


            </div>


            <div
              className="resources-visual-card resources-visual-card-two"
            >

              <BriefcaseBusiness
                size={21}
              />


              <div>

                <strong>

                  Case studies

                </strong>


                <span>

                  Real-world capability

                </span>

              </div>


            </div>


            <span>

              NODEUS RESOURCES

            </span>


          </motion.div>


        </section>


        {/* =================================
            RESOURCE TYPES
        ================================== */}

        <section
          className="resource-types-section"
        >


          <div
            className="resource-types-header"
          >


            <div>


              <span
                className="section-eyebrow"
              >

                EXPLORE RESOURCES

              </span>


              <h2>

                Knowledge designed

                <span>

                  to be useful.

                </span>

              </h2>


            </div>


            <p>

              Explore practical content
              created to help businesses
              understand challenges,
              evaluate opportunities,
              and build stronger
              capabilities.

            </p>


          </div>


          <div
            className="resource-types-grid"
          >


            <motion.article

              className="resource-type-card"

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

              }}

            >


              <div
                className="resource-type-icon"
              >

                <BookOpen
                  size={26}
                />

              </div>


              <span>

                INSIGHTS

              </span>


              <h3>

                Practical perspectives

                for better decisions.

              </h3>


              <p>

                Explore ideas and
                frameworks covering
                customer experience,
                operations, technology,
                automation, and growth.

              </p>


              <Link

                to="/resources/insights"

              >

                Explore insights

                <ArrowRight
                  size={17}
                />

              </Link>


            </motion.article>


            <motion.article

              className="resource-type-card"

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

                delay: 0.08,

              }}

            >


              <div
                className="resource-type-icon"
              >

                <BriefcaseBusiness
                  size={26}
                />

              </div>


              <span>

                CASE STUDIES

              </span>


              <h3>

                Real challenges.

                Real capability.

              </h3>


              <p>

                Discover examples of
                how people, processes,
                and technology can
                work together to
                support business goals.

              </p>


              <Link

                to="/resources/case-studies"

              >

                View case studies

                <ArrowRight
                  size={17}
                />

              </Link>


            </motion.article>


          </div>


        </section>


        {/* =================================
            FEATURED CONTENT
        ================================== */}

        <section
          className="resources-featured-section"
        >


          <div
            className="resources-featured-header"
          >


            <div>


              <span
                className="section-eyebrow"
              >

                FEATURED CONTENT

              </span>


              <h2>

                Start with

                <span>

                  what matters.

                </span>

              </h2>


            </div>


            <p>

              Explore selected
              perspectives and examples
              designed around common
              business priorities.

            </p>


          </div>


          <div
            className="resources-featured-grid"
          >


            {

              featuredInsight

              &&

              (

                <motion.article

                  className="resources-featured-card"

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

                    amount: 0.15,

                  }}

                  transition={{

                    duration: 0.6,

                  }}

                >


                  <div
                    className="resources-featured-card-top"
                  >


                    <div>

                      <BookOpen
                        size={24}
                      />

                    </div>


                    <span>

                      INSIGHT

                    </span>


                  </div>


                  <span
                    className="resources-featured-category"
                  >

                    {

                      featuredInsight.category

                    }

                  </span>


                  <h3>

                    {

                      featuredInsight.title

                    }

                  </h3>


                  <p>

                    {

                      featuredInsight.excerpt

                    }

                  </p>


                  <Link

                    to={

                      `/resources/insights/${

                        featuredInsight.slug

                      }`

                    }

                  >

                    Read insight

                    <ArrowRight
                      size={17}
                    />

                  </Link>


                </motion.article>

              )

            }


            {

              featuredCaseStudy

              &&

              (

                <motion.article

                  className="resources-featured-card"

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

                    amount: 0.15,

                  }}

                  transition={{

                    duration: 0.6,

                    delay: 0.08,

                  }}

                >


                  <div
                    className="resources-featured-card-top"
                  >


                    <div>

                      <BriefcaseBusiness
                        size={24}
                      />

                    </div>


                    <span>

                      CASE STUDY

                    </span>


                  </div>


                  <span
                    className="resources-featured-category"
                  >

                    {

                      featuredCaseStudy.category

                    }

                  </span>


                  <h3>

                    {

                      featuredCaseStudy.title

                    }

                  </h3>


                  <p>

                    {

                      featuredCaseStudy.excerpt

                    }

                  </p>


                  <Link

                    to={

                      `/resources/case-studies/${

                        featuredCaseStudy.slug

                      }`

                    }

                  >

                    View case study

                    <ArrowRight
                      size={17}
                    />

                  </Link>


                </motion.article>

              )

            }


          </div>


        </section>


        {/* =================================
            VALUE SECTION
        ================================== */}

        <section
          className="resources-value-section"
        >


          <div
            className="resources-value-content"
          >


            <span
              className="section-eyebrow"
            >

              BUILT AROUND PRACTICAL VALUE

            </span>


            <h2>

              Useful ideas.

              <span>

                Clear direction.

              </span>

            </h2>


            <p>

              Our resources focus on
              practical business
              challenges and the
              capabilities required
              to address them.

            </p>


          </div>


          <div
            className="resources-value-points"
          >


            <div>

              <CheckCircle2
                size={19}
              />


              <div>

                <strong>

                  Practical perspective

                </strong>


                <span>

                  Ideas connected to
                  real operational needs.

                </span>

              </div>


            </div>


            <div>

              <CheckCircle2
                size={19}
              />


              <div>

                <strong>

                  Clear frameworks

                </strong>


                <span>

                  Structured thinking
                  for complex decisions.

                </span>

              </div>


            </div>


            <div>

              <CheckCircle2
                size={19}
              />


              <div>

                <strong>

                  Business relevance

                </strong>


                <span>

                  Content designed
                  around meaningful goals.

                </span>

              </div>


            </div>


          </div>


        </section>


        {/* =================================
            CTA
        ================================== */}

        <section
          className="resources-cta"
        >


          <div>


            <span
              className="section-eyebrow"
            >

              READY TO EXPLORE?

            </span>


            <h2>

              Build the right

              <span>

                capability next.

              </span>

            </h2>


            <p>

              Explore our insights and
              case studies, or speak
              with our team about the
              people, processes, and
              technology that can
              support your goals.

            </p>


          </div>


          <Link

            to="/contact"

          >

            Start a conversation

            <ArrowUpRight
              size={18}
            />

          </Link>


        </section>


      </main>

    </AnimatedPage>

  );

}


export default Resources;