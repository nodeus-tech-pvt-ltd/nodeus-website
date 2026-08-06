import {
  useMemo,
} from "react";

import {
  Link,
  useParams,
} from "react-router-dom";

import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Share2,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import AnimatedPage from "../../components/shared/AnimatedPage";

import "../../styles/pages/insightDetail.css";

import insights from "../../data/insights/insightsData";


function InsightDetail() {


  /* =================================
     GET ARTICLE SLUG
  ================================== */

  const {

    slug,

  } = useParams();


  /* =================================
     FIND ARTICLE
  ================================== */

  const article =

    useMemo(

      () => {

        return insights.find(

          (insight) =>

            insight.slug ===
            slug

        );

      },

      [

        slug,

      ]

    );


  /* =================================
     ARTICLE NOT FOUND
  ================================== */

  if (

    !article

  ) {

    return (

      <AnimatedPage>

        <main
          className="insight-not-found"
        >

          <div>

            <BookOpen
              size={38}
            />


            <span
              className="section-eyebrow"
            >

              INSIGHT NOT FOUND

            </span>


            <h1>

              We couldn&apos;t find

              <span>

                that insight.

              </span>

            </h1>


            <p>

              The article may have
              been moved, renamed,
              or may not be available
              yet.

            </p>


            <Link

              to="/resources/insights"

              className="insight-back-button"

            >

              <ArrowLeft
                size={17}
              />

              Back to insights

            </Link>

          </div>

        </main>

      </AnimatedPage>

    );

  }


  const Icon =

    article.icon;


  const relatedInsights =

    insights

      .filter(

        (insight) =>

          insight.id !==
          article.id

      )

      .slice(

        0,

        3

      );


  return (

    <AnimatedPage>

      <main
        className="insight-detail-page"
      >


        {/* =================================
            ARTICLE HERO
        ================================== */}

        <section
          className="insight-detail-hero"
        >


          <div
            className="insight-detail-hero-inner"
          >


            <Link

              to="/resources/insights"

              className="insight-breadcrumb"

            >

              <ArrowLeft
                size={16}
              />

              All insights

            </Link>


            <motion.div

              initial={{

                opacity: 0,

                y: 24,

              }}

              animate={{

                opacity: 1,

                y: 0,

              }}

              transition={{

                duration: 0.6,

              }}

            >


              <div
                className="insight-detail-meta"
              >

                <span>

                  {

                    article.category

                  }

                </span>


                <span>

                  <Clock3
                    size={14}
                  />

                  {

                    article.readTime

                  }

                </span>


                <span>

                  {

                    article.date

                  }

                </span>

              </div>


              <h1>

                {

                  article.title

                }

              </h1>


              <p>

                {

                  article.excerpt

                }

              </p>


            </motion.div>


            <motion.div

              className="insight-detail-hero-visual"

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
                className="detail-visual-grid"
              />


              <div
                className="detail-visual-orb"
              />


              <div
                className="detail-visual-icon"
              >

                <Icon
                  size={50}
                />

              </div>


              {/* <span>

                NODEUS INSIGHTS

              </span> */}


            </motion.div>


          </div>


        </section>


        {/* =================================
            ARTICLE CONTENT
        ================================== */}

        <section
          className="insight-article-section"
        >


          <article
            className="insight-article"
          >


            <p
              className="insight-article-introduction"
            >

              {

                article.introduction

              }

            </p>


            {

              article.sections.map(

                (

                  section,

                  index

                ) => (

                  <section

                    key={

                      section.heading

                    }

                    className="insight-article-section-block"

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


                      <h2>

                        {

                          section.heading

                        }

                      </h2>


                      {

                        section.paragraphs.map(

                          (

                            paragraph

                          ) => (

                            <p

                              key={

                                paragraph

                              }

                            >

                              {

                                paragraph

                              }

                            </p>

                          )

                        )

                      }


                    </div>


                  </section>

                )

              )

            }


            {/* KEY TAKEAWAYS */}

            <div
              className="insight-takeaways"
            >


              <div
                className="insight-takeaways-heading"
              >

                <div>

                  <Lightbulb
                    size={22}
                  />

                </div>


                <div>

                  <span>

                    KEY TAKEAWAYS

                  </span>


                  <h2>

                    What to remember

                  </h2>

                </div>


              </div>


              <div
                className="insight-takeaway-list"
              >

                {

                  article.takeaways.map(

                    (

                      takeaway

                    ) => (

                      <div

                        key={

                          takeaway

                        }

                      >

                        <CheckCircle2
                          size={18}
                        />


                        <span>

                          {

                            takeaway

                          }

                        </span>


                      </div>

                    )

                  )

                }


              </div>


            </div>


            {/* ARTICLE FOOTER */}

            <div
              className="insight-article-footer"
            >


              <div>

                <span>

                  SHARE THIS INSIGHT

                </span>


                <button

                  type="button"

                  aria-label={
                    "Share this insight"
                  }

                  onClick={

                    async () => {

                      if (

                        navigator.share

                      ) {

                        await navigator.share({

                          title:

                            article.title,

                          text:

                            article.excerpt,

                          url:

                            window.location.href,

                        });

                      }

                      else {

                        await navigator.clipboard.writeText(

                          window.location.href

                        );

                      }

                    }

                  }

                >

                  <Share2
                    size={17}
                  />

                  Share

                </button>


              </div>


              <Link

                to="/contact"

              >

                Discuss your requirements

                <ArrowUpRight
                  size={17}
                />

              </Link>


            </div>


          </article>


          {/* =================================
              ARTICLE SIDEBAR
          ================================== */}

          <aside
            className="insight-article-sidebar"
          >


            <div
              className="insight-sidebar-card"
            >


              <span>

                EXPLORE MORE

              </span>


              <h3>

                Build the right

                <br />

                capabilities.

              </h3>


              <p>

                Explore how the right
                people, processes,
                and technology can
                support your business
                goals.

              </p>


              <Link

                to="/contact"

              >

                Let&apos;s talk

                <ArrowUpRight
                  size={17}
                />

              </Link>


            </div>


            <div
              className="insight-sidebar-topics"
            >


              <span>

                EXPLORE BY TOPIC

              </span>


              <Link
                to="/resources/insights"
              >

                Customer experience

                <ArrowRight
                  size={15}
                />

              </Link>


              <Link
                to="/resources/insights"
              >

                Business operations

                <ArrowRight
                  size={15}
                />

              </Link>


              <Link
                to="/resources/insights"
              >

                Technology & AI

                <ArrowRight
                  size={15}
                />

              </Link>


              <Link
                to="/resources/insights"
              >

                Growth & strategy

                <ArrowRight
                  size={15}
                />

              </Link>


            </div>


          </aside>


        </section>


        {/* =================================
            RELATED INSIGHTS
        ================================== */}

        <section
          className="related-insights"
        >


          <div
            className="related-insights-header"
          >


            <div>

              <span
                className="section-eyebrow"
              >

                KEEP EXPLORING

              </span>


              <h2>

                More ideas for

                <span>

                  what&apos;s next.

                </span>

              </h2>


            </div>


            <Link

              to="/resources/insights"

            >

              View all insights

              <ArrowRight
                size={17}
              />

            </Link>


          </div>


          <div
            className="related-insights-grid"
          >


            {

              relatedInsights.map(

                (

                  related,

                  index

                ) => {


                  const RelatedIcon =

                    related.icon;


                  return (

                    <motion.article

                      key={

                        related.id

                      }

                      className="related-insight-card"

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

                        amount: 0.15,

                      }}

                      transition={{

                        duration: 0.55,

                        delay:

                          index *

                          0.08,

                      }}

                    >


                      <div
                        className="related-card-top"
                      >


                        <div>

                          <RelatedIcon
                            size={23}
                          />

                        </div>


                        <span>

                          {

                            related.category

                          }

                        </span>


                      </div>


                      <div
                        className="related-card-content"
                      >


                        <div
                          className="article-meta"
                        >

                          <span>

                            {

                              related.date

                            }

                          </span>


                          <span>

                            <Clock3
                              size={13}
                            />

                            {

                              related.readTime

                            }

                          </span>


                        </div>


                        <h3>

                          {

                            related.title

                          }

                        </h3>


                        <p>

                          {

                            related.excerpt

                          }

                        </p>


                        <Link

                          to={

                            `/resources/insights/${

                              related.slug

                            }`

                          }

                        >

                          Read insight

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


        </section>


        {/* =================================
            CTA
        ================================== */}

        <section
          className="insight-detail-cta"
        >


          <div>


            <span
              className="section-eyebrow"
            >

              READY TO BUILD?

            </span>


            <h2>

              Turn ideas into

              <span>

                real capability.

              </span>

            </h2>


            <p>

              Tell us what you&apos;re
              working toward, and
              let&apos;s explore the
              people, processes, and
              technology that can
              help you move forward.

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


export default InsightDetail;