import {
  useMemo,
  useState,
} from "react";

import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Search,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import {
  motion,
} from "framer-motion";

import AnimatedPage from "../../components/shared/AnimatedPage";

import "../../styles/pages/insights.css";

import insights from "../../data/insights/insightsData";

/* =================================
   CATEGORIES
================================= */

const categories = [

  "All",

  "Customer Experience",

  "Business Operations",

  "Technology & AI",

  "Growth & Strategy",

];


/* =================================
   INSIGHTS DATA
================================= */

// const insights = [

//   {

//     id: 1,

//     category:
//       "Customer Experience",

//     title:
//       "How to Build a Customer Support Team That Scales With Your Business",

//     excerpt:
//       "Learn how to design a flexible support operation that protects customer experience while adapting to changing demand.",

//     readTime:
//       "7 min read",

//     date:
//       "Coming soon",

//     icon:
//       BookOpen,

//     featured:
//       true,

//     slug:
//       "building-a-scalable-customer-support-team",

//   },


//   {

//     id: 2,

//     category:
//       "Business Operations",

//     title:
//       "Which Business Processes Should You Outsource First?",

//     excerpt:
//       "A practical framework for identifying repetitive, time-consuming processes that can be supported by an external team.",

//     readTime:
//       "6 min read",

//     date:
//       "Coming soon",

//     icon:
//       TrendingUp,

//     slug:
//       "which-business-processes-to-outsource",

//   },


//   {

//     id: 3,

//     category:
//       "Technology & AI",

//     title:
//       "AI Customer Support: Where Automation Creates Real Value",

//     excerpt:
//       "Explore where AI can improve response times and consistency while keeping human expertise available when it matters.",

//     readTime:
//       "8 min read",

//     date:
//       "Coming soon",

//     icon:
//       Sparkles,

//     slug:
//       "ai-customer-support-automation",

//   },


//   {

//     id: 4,

//     category:
//       "Growth & Strategy",

//     title:
//       "How Flexible Teams Help Businesses Scale More Efficiently",

//     excerpt:
//       "Discover how adaptable team structures can help companies respond to growth without building unnecessary operational overhead.",

//     readTime:
//       "5 min read",

//     date:
//       "Coming soon",

//     icon:
//       Lightbulb,

//     slug:
//       "how-flexible-teams-support-growth",

//   },


//   {

//     id: 5,

//     category:
//       "Customer Experience",

//     title:
//       "Five Customer Experience Metrics Every Growing Company Should Track",

//     excerpt:
//       "Understand the metrics that reveal how customers experience your support, service quality, and overall business.",

//     readTime:
//       "6 min read",

//     date:
//       "Coming soon",

//     icon:
//       CheckCircle2,

//     slug:
//       "customer-experience-metrics-to-track",

//   },


//   {

//     id: 6,

//     category:
//       "Business Operations",

//     title:
//       "Building Reliable Back-Office Operations for Long-Term Growth",

//     excerpt:
//       "Learn how clear workflows, documentation, and operational support create a stronger foundation for scale.",

//     readTime:
//       "7 min read",

//     date:
//       "Coming soon",

//     icon:
//       BookOpen,

//     slug:
//       "building-reliable-back-office-operations",

//   },

// ];


function Insights() {


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
     FEATURED ARTICLE
  ================================== */

  const featuredInsight =

    insights.find(

      (article) =>

        article.featured

    );


  /* =================================
     FILTER INSIGHTS
  ================================== */

  const filteredInsights =

    useMemo(

      () => {

        const normalizedQuery =

          searchQuery

            .trim()

            .toLowerCase();


        return insights.filter(

          (article) => {


            const matchesCategory =

              activeCategory === "All"

              ||

              article.category ===
              activeCategory;


            const searchableContent =

              [

                article.title,

                article.excerpt,

                article.category,

              ]

                .join(" ")

                .toLowerCase();


            const matchesSearch =

              normalizedQuery === ""

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
     NON-FEATURED ARTICLES
  ================================== */

  const regularInsights =

    filteredInsights.filter(

      (article) =>

        !article.featured

    );


  return (

    <AnimatedPage>

      <main
        className="insights-page"
      >


        {/* =================================
            HERO
        ================================== */}

        <section
          className="insights-hero"
        >


          <div
            className="insights-hero-content"
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

              IDEAS FOR BETTER OPERATIONS

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

              Insights for building

              <br />

              <span>

                what&apos;s next.

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

              Explore practical ideas,
              operational strategies,
              and technology perspectives
              designed to help businesses
              build stronger teams and
              scale with confidence.

            </motion.p>


            <motion.div

              className="insights-hero-points"

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

                Practical business insights

              </span>


              <span>

                <CheckCircle2
                  size={17}
                />

                Built for growing teams

              </span>


            </motion.div>


          </div>


          {/* HERO CARD */}

          <motion.div

            className="insights-hero-card"

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
              className="insights-hero-card-icon"
            >

              <Lightbulb
                size={27}
              />

            </div>


            <span
              className="insights-card-label"
            >

              THE NODEUS PERSPECTIVE

            </span>


            <h2>

              Better decisions

              <br />

              start with

              <br />

              better insight.

            </h2>


            <p>

              Clear thinking,
              practical frameworks,
              and ideas that help
              businesses build
              stronger capabilities.

            </p>


            <div
              className="insights-card-line"
            />


            <div
              className="insights-card-detail"
            >

              <BookOpen
                size={18}
              />


              <div>

                <strong>

                  Explore by topic

                </strong>


                <span>

                  Customer experience,
                  operations, technology,
                  and sustainable growth.

                </span>

              </div>


            </div>


          </motion.div>


        </section>


        {/* =================================
            FEATURED INSIGHT
        ================================== */}

        {

          featuredInsight

          &&

          (

            <section
              className="featured-insight-section"
            >


              <div
                className="featured-insight-header"
              >


                <div>

                  <span
                    className="section-eyebrow"
                  >

                    FEATURED INSIGHT

                  </span>


                  <h2>

                    Start with the

                    <span>

                      big picture.

                    </span>

                  </h2>


                </div>


                <p>

                  A practical perspective
                  on building support
                  capabilities that grow
                  with your business.

                </p>


              </div>


              <motion.article

                className="featured-insight-card"

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
                  className="featured-insight-visual"
                >


                  <div
                    className="featured-visual-grid"
                  />


                  <div
                    className="featured-visual-orb"
                  />


                  <div
                    className="featured-visual-icon"
                  >

                    <BookOpen
                      size={42}
                    />

                  </div>


                  <span>

                    NODEUS INSIGHTS

                  </span>


                </div>


                <div
                  className="featured-insight-content"
                >


                  <div
                    className="article-meta"
                  >


                    <span>

                      {

                        featuredInsight.category

                      }

                    </span>


                    <span>

                      <Clock3
                        size={14}
                      />

                      {

                        featuredInsight.readTime

                      }

                    </span>


                  </div>


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

                    className="featured-insight-link"

                  >

                    Read the insight

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
            INSIGHT LIBRARY
        ================================== */}

        <section
          className="insight-library"
        >


          <div
            className="insight-library-header"
          >


            <div>

              <span
                className="section-eyebrow"
              >

                EXPLORE THE LIBRARY

              </span>


              <h2>

                Ideas for the

                <span>

                  work ahead.

                </span>

              </h2>


            </div>


            <p>

              Browse perspectives
              across customer experience,
              business operations,
              technology, and growth.

            </p>


          </div>


          {/* SEARCH */}

          <div
            className="insight-controls"
          >


            <div
              className="insight-search"
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

                  "Search insights..."

                }

                aria-label={

                  "Search insights"

                }

              />


            </div>


            {/* CATEGORY FILTERS */}

            <div
              className="insight-category-list"
            >

              {

                categories.map(

                  (category) => (

                    <button

                      type="button"

                      key={

                        category

                      }

                      className={`insight-category-button ${

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


          {/* ARTICLE GRID */}

          {

            regularInsights.length > 0

              ? (

                <div
                  className="insight-grid"
                >


                  {

                    regularInsights.map(

                      (

                        article,

                        index

                      ) => {


                        const Icon =

                          article.icon;


                        return (

                          <motion.article

                            key={

                              article.id

                            }

                            className="insight-card"

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

                                index * 0.06,

                            }}

                          >


                            <div
                              className="insight-card-visual"
                            >


                              <div
                                className="insight-card-icon"
                              >

                                <Icon
                                  size={25}
                                />

                              </div>


                              <span>

                                {

                                  article.category

                                }

                              </span>


                              <ArrowUpRight
                                size={18}
                              />


                            </div>


                            <div
                              className="insight-card-content"
                            >


                              <div
                                className="article-meta"
                              >


                                <span>

                                  {

                                    article.date

                                  }

                                </span>


                                <span>

                                  <Clock3
                                    size={13}
                                  />

                                  {

                                    article.readTime

                                  }

                                </span>


                              </div>


                              <h3>

                                {

                                  article.title

                                }

                              </h3>


                              <p>

                                {

                                  article.excerpt

                                }

                              </p>


                              <Link

                                to={

                                  `/resources/insights/${

                                    article.slug

                                  }`

                                }

                                className="insight-card-link"

                              >

                                Read more

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
                  className="insights-empty-state"
                >

                  <Search
                    size={28}
                  />


                  <h3>

                    No insights found

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

        {/* <section
          className="insights-value-section"
        >


          <div
            className="insights-value-content"
          >


            <span
              className="section-eyebrow"
            >

              BUILT FOR PRACTICAL PROGRESS

            </span>


            <h2>

              Ideas you can

              <span>

                put into action.

              </span>

            </h2>


            <p>

              Our insights focus on
              practical decisions,
              repeatable processes,
              and scalable ways of
              working—not theory
              without application.

            </p>


            <div
              className="insights-value-points"
            >


              <span>

                <CheckCircle2
                  size={17}
                />

                Clear operational
                frameworks

              </span>


              <span>

                <CheckCircle2
                  size={17}
                />

                Practical growth
                perspectives

              </span>


              <span>

                <CheckCircle2
                  size={17}
                />

                Technology with
                business context

              </span>


            </div>


          </div>


          <div
            className="insights-value-stat-grid"
          >


            <div>

              <strong>

                CX

              </strong>


              <span>

                Customer experience

              </span>

            </div>


            <div>

              <strong>

                OPS

              </strong>


              <span>

                Business operations

              </span>

            </div>


            <div>

              <strong>

                AI

              </strong>


              <span>

                Technology and
                automation

              </span>

            </div>


            <div>

              <strong>

                GROW

              </strong>


              <span>

                Sustainable scale

              </span>

            </div>


          </div>


        </section> */}


        {/* =================================
            CTA
        ================================== */}

        <section
          className="insights-cta"
        >


          <div>

            {/* <span
              className="section-eyebrow"
            >

              READY TO MOVE FORWARD?

            </span> */}


            <h2>

              Turn insight into

              <span>

                capability.

              </span>

            </h2>


            <p>

              Tell us what you&apos;re
              working toward, and
              let&apos;s explore the
              people, processes, and
              technology that can
              help you get there.

            </p>


          </div>


          <Link

            to="/contact"

            className="insights-cta-button"

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


export default Insights;