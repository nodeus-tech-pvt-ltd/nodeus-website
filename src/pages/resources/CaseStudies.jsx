import {
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Search,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import AnimatedPage from "../../components/shared/AnimatedPage";

import caseStudies from "../../data/caseStudies/caseStudiesData";

import "../../styles/pages/caseStudies.css";


/* =================================
   FILTER CATEGORIES
================================== */

const categories = [

  "All",

  "Customer Experience",

  "Business Operations",

  "Technology & AI",

  "Growth & Strategy",

];


function CaseStudies() {


  /* =================================
     FILTER STATE
  ================================== */

  const [

    activeCategory,

    setActiveCategory,

  ] = useState(

    "All"

  );


  const [

    searchQuery,

    setSearchQuery,

  ] = useState(

    ""

  );


  /* =================================
     FILTER CASE STUDIES
  ================================== */

  const filteredCaseStudies =

    useMemo(

      () => {

        const normalizedQuery =

          searchQuery
            .trim()
            .toLowerCase();


        return caseStudies.filter(

          (caseStudy) => {


            const matchesCategory =

              activeCategory ===
              "All"

              ||

              caseStudy.category ===
              activeCategory;


            const searchableContent =

              [

                caseStudy.title,

                caseStudy.excerpt,

                caseStudy.category,

                caseStudy.industry,

                caseStudy.client,

                caseStudy.challenge,

                caseStudy.solution,

                caseStudy.result,

              ]

                .filter(

                  Boolean

                )

                .join(

                  " "

                )

                .toLowerCase();


            const matchesSearch =

              normalizedQuery ===
              ""

              ||

              searchableContent.includes(

                normalizedQuery

              );


            return (

              matchesCategory

              &&

              matchesSearch

            );

          }

        );

      },

      [

        activeCategory,

        searchQuery,

      ]

    );


  /* =================================
     FEATURED CASE STUDY
  ================================== */

  const featuredCaseStudy =

    caseStudies.find(

      (caseStudy) =>

        caseStudy.featured

    );


  return (

    <AnimatedPage>

      <main
        className="case-studies-page"
      >


        {/* =================================
            HERO
        ================================== */}

        <section
          className="case-studies-hero"
        >


          <div
            className="case-studies-hero-content"
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

              REAL-WORLD CAPABILITIES

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

              Built around

              <br />

              <span>

                real business needs.

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

              Explore how Nodeus helps
              businesses strengthen
              customer experience,
              improve operations,
              apply technology, and
              build capabilities that
              support sustainable growth.

            </motion.p>


            <motion.div

              className="case-studies-hero-points"

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


              <span>

                <CheckCircle2
                  size={17}
                />

                Practical business outcomes

              </span>


              <span>

                <CheckCircle2
                  size={17}
                />

                Scalable operating models

              </span>


            </motion.div>


          </div>


          {/* HERO VISUAL */}

          <motion.div

            className="case-studies-hero-card"

            initial={{

              opacity: 0,

              x: 35,

            }}

            animate={{

              opacity: 1,

              x: 0,

            }}

            transition={{

              duration: 0.7,

              delay: 0.18,

            }}

          >


            <div
              className="case-studies-hero-icon"
            >

              <BriefcaseBusiness
                size={28}
              />

            </div>


            <span
              className="case-studies-card-label"
            >

              FROM CHALLENGE TO CAPABILITY

            </span>


            <h2>

              Better outcomes

              <br />

              begin with

              <br />

              better systems.

            </h2>


            <p>

              Explore practical examples
              of how people, processes,
              and technology can work
              together to support
              business goals.

            </p>


            <div
              className="case-studies-card-line"
            />


            <div
              className="case-studies-card-detail"
            >

              <Target
                size={19}
              />


              <div>

                <strong>

                  Explore the work

                </strong>


                <span>

                  Customer experience,
                  operations, technology,
                  and growth.

                </span>

              </div>


            </div>


          </motion.div>


        </section>


        {/* =================================
            FEATURED CASE STUDY
        ================================== */}

        {

          featuredCaseStudy

          &&

          (

            <section
              className="featured-case-study-section"
            >


              <div
                className="featured-case-study-header"
              >


                <div>

                  <span
                    className="section-eyebrow"
                  >

                    FEATURED CASE STUDY

                  </span>


                  <h2>

                    A closer look at

                    <span>

                      practical impact.

                    </span>

                  </h2>


                </div>


                <p>

                  Explore the challenge,
                  approach, and outcomes
                  behind a capability
                  designed around real
                  business requirements.

                </p>


              </div>


              <motion.article

                className="featured-case-study-card"

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

                  amount: 0.15,

                }}

                transition={{

                  duration: 0.65,

                }}

              >


                <div
                  className="featured-case-study-visual"
                >


                  <div
                    className="featured-case-study-grid"
                  />


                  <div
                    className="featured-case-study-orb"
                  />


                  <div
                    className="featured-case-study-icon"
                  >

                    <TrendingUp
                      size={43}
                    />

                  </div>


                  <span>

                    NODEUS CASE STUDY

                  </span>


                </div>


                <div
                  className="featured-case-study-content"
                >


                  <div
                    className="case-study-meta"
                  >


                    <span>

                      {

                        featuredCaseStudy.category

                      }

                    </span>


                    {

                      featuredCaseStudy.industry

                      &&

                      (

                        <span>

                          {

                            featuredCaseStudy.industry

                          }

                        </span>

                      )

                    }


                    {

                      featuredCaseStudy.readTime

                      &&

                      (

                        <span>

                          <Clock3
                            size={14}
                          />

                          {

                            featuredCaseStudy.readTime

                          }

                        </span>

                      )

                    }


                  </div>


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


                  <div
                    className="featured-case-study-result"
                  >


                    <Target
                      size={18}
                    />


                    <div>

                      <span>

                        BUSINESS IMPACT

                      </span>


                      <strong>

                        {

                          featuredCaseStudy.result

                          ||

                          "A stronger, more scalable operating capability."

                        }

                      </strong>


                    </div>


                  </div>


                  <Link

                    to={

                      `/resources/case-studies/${

                        featuredCaseStudy.slug

                      }`

                    }

                    className="featured-case-study-link"

                  >

                    View case study

                    <ArrowRight
                      size={18}
                    />

                  </Link>


                </div>


              </motion.article>


            </section>

          )

        }


        {/* =================================
            CASE STUDY LIBRARY
        ================================== */}

        <section
          className="case-study-library"
        >


          <div
            className="case-study-library-header"
          >


            <div>

              <span
                className="section-eyebrow"
              >

                EXPLORE THE WORK

              </span>


              <h2>

                Capabilities built

                <span>

                  for real challenges.

                </span>

              </h2>


            </div>


            <p>

              Browse examples across
              customer experience,
              business operations,
              technology, and growth.

            </p>


          </div>


          {/* =================================
              SEARCH + FILTERS
          ================================== */}

          <div
            className="case-study-controls"
          >


            <div
              className="case-study-search"
            >

              <Search
                size={18}
              />


              <input

                type="search"

                value={

                  searchQuery

                }

                onChange={

                  (event) =>

                    setSearchQuery(

                      event.target.value

                    )

                }

                placeholder={

                  "Search case studies..."

                }

                aria-label={

                  "Search case studies"

                }

              />


            </div>


            <div
              className="case-study-category-list"
            >


              {

                categories.map(

                  (category) => (

                    <button

                      type="button"

                      key={

                        category

                      }

                      className={`case-study-category-button ${

                        activeCategory ===

                        category

                          ? "active"

                          : ""

                      }`}

                      onClick={() =>

                        setActiveCategory(

                          category

                        )

                      }

                    >

                      {

                        category

                      }

                    </button>

                  )

                )

              }


            </div>


          </div>


          {/* =================================
              CASE STUDY GRID
          ================================== */}

          {

            filteredCaseStudies.length >

            0

              ? (

                <div
                  className="case-study-grid"
                >


                  {

                    filteredCaseStudies

                      .filter(

                        (caseStudy) =>

                          !caseStudy.featured

                      )

                      .map(

                        (

                          caseStudy,

                          index

                        ) => {


                          const Icon =

                            caseStudy.icon

                            ||

                            BriefcaseBusiness;


                          return (

                            <motion.article

                              key={

                                caseStudy.id

                              }

                              className="case-study-card"

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

                                amount: 0.12,

                              }}

                              transition={{

                                duration: 0.55,

                                delay:

                                  index *

                                  0.06,

                              }}

                            >


                              <div
                                className="case-study-card-visual"
                              >


                                <div
                                  className="case-study-card-icon"
                                >

                                  <Icon
                                    size={25}
                                  />

                                </div>


                                <span>

                                  {

                                    caseStudy.category

                                  }

                                </span>


                                <ArrowUpRight
                                  size={18}
                                />


                              </div>


                              <div
                                className="case-study-card-content"
                              >


                                <div
                                  className="case-study-card-meta"
                                >


                                  {

                                    caseStudy.industry

                                    &&

                                    (

                                      <span>

                                        {

                                          caseStudy.industry

                                        }

                                      </span>

                                    )

                                  }


                                  {

                                    caseStudy.readTime

                                    &&

                                    (

                                      <span>

                                        <Clock3
                                          size={13}
                                        />

                                        {

                                          caseStudy.readTime

                                        }

                                      </span>

                                    )

                                  }


                                </div>


                                <h3>

                                  {

                                    caseStudy.title

                                  }

                                </h3>


                                <p>

                                  {

                                    caseStudy.excerpt

                                  }

                                </p>


                                <div
                                  className="case-study-card-result"
                                >

                                  <Target
                                    size={16}
                                  />


                                  <span>

                                    {

                                      caseStudy.result

                                      ||

                                      "Designed around measurable business outcomes."

                                    }

                                  </span>


                                </div>


                                <Link

                                  to={

                                    `/resources/case-studies/${

                                      caseStudy.slug

                                    }`

                                  }

                                  className="case-study-card-link"

                                >

                                  View case study

                                  <ArrowRight
                                    size={16}
                                  />

                                </Link>


                              </div>


                            </motion.article>

                          );

                        }

                      )

                  }


                </div>

              )

              : (

                <div
                  className="case-studies-empty-state"
                >


                  <Search
                    size={29}
                  />


                  <h3>

                    No case studies found

                  </h3>


                  <p>

                    Try another topic
                    or search term.

                  </p>


                  <button

                    type="button"

                    onClick={() => {

                      setSearchQuery(

                        ""

                      );

                      setActiveCategory(

                        "All"

                      );

                    }}

                  >

                    Clear filters

                  </button>


                </div>

              )

          }


        </section>


        {/* =================================
            VALUE SECTION
        ================================== */}

        <section
          className="case-studies-value-section"
        >


          <div
            className="case-studies-value-content"
          >


            <span
              className="section-eyebrow"
            >

              DESIGNED FOR BUSINESS IMPACT

            </span>


            <h2>

              More than a service.

              <span>

                A stronger capability.

              </span>

            </h2>


            <p>

              Every engagement should
              connect people, processes,
              technology, and measurable
              outcomes. Our approach is
              designed to support
              long-term capability—not
              simply add capacity.

            </p>


            <div
              className="case-studies-value-points"
            >


              <span>

                <CheckCircle2
                  size={17}
                />

                Clear operational
                ownership

              </span>


              <span>

                <CheckCircle2
                  size={17}
                />

                Flexible and scalable
                support

              </span>


              <span>

                <CheckCircle2
                  size={17}
                />

                Measurable business
                outcomes

              </span>


            </div>


          </div>


          <div
            className="case-studies-value-grid"
          >


            <div>

              <strong>

                PEOPLE

              </strong>


              <span>

                Skilled teams aligned
                with business needs

              </span>

            </div>


            <div>

              <strong>

                PROCESS

              </strong>


              <span>

                Clear workflows and
                reliable operations

              </span>

            </div>


            <div>

              <strong>

                TECH

              </strong>


              <span>

                Tools and automation
                that support performance

              </span>

            </div>


            <div>

              <strong>

                IMPACT

              </strong>


              <span>

                Outcomes connected
                to business goals

              </span>

            </div>


          </div>


        </section>


        {/* =================================
            CTA
        ================================== */}

        <section
          className="case-studies-cta"
        >


          <div>


            <span
              className="section-eyebrow"
            >

              READY TO BUILD?

            </span>


            <h2>

              Let&apos;s build the

              <span>

                right capability.

              </span>

            </h2>


            <p>

              Tell us about your
              business goals, operational
              challenges, or growth
              plans. We&apos;ll explore
              the people, processes,
              and technology that can
              help you move forward.

            </p>


          </div>


          <Link

            to="/contact"

            className="case-studies-cta-button"

          >

            Let&apos;s talk

            <ArrowUpRight
              size={18}
            />

          </Link>


        </section>


      </main>

    </AnimatedPage>

  );

}


export default CaseStudies;