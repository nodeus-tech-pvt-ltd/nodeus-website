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
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Lightbulb,
  Share2,
  Target,
  TrendingUp,
} from "lucide-react";

import {
  motion,
} from "framer-motion";

import AnimatedPage from "../../components/shared/AnimatedPage";

import caseStudies from "../../data/caseStudies/caseStudiesData";

import "../../styles/pages/caseStudyDetail.css";


function CaseStudyDetail() {


  /* =================================
     GET CASE STUDY SLUG
  ================================== */

  const {

    slug,

  } = useParams();


  /* =================================
     FIND CASE STUDY
  ================================== */

  const caseStudy =

    useMemo(

      () =>

        caseStudies.find(

          (item) =>

            item.slug ===
            slug

        ),

      [

        slug,

      ]

    );


  /* =================================
     CASE STUDY NOT FOUND
  ================================== */

  if (

    !caseStudy

  ) {

    return (

      <AnimatedPage>

        <main
          className="case-study-not-found"
        >

          <div>


            <BriefcaseBusiness
              size={40}
            />


            <span
              className="section-eyebrow"
            >

              CASE STUDY NOT FOUND

            </span>


            <h1>

              We couldn&apos;t find

              <span>

                that case study.

              </span>

            </h1>


            <p>

              The case study may have
              been moved, renamed, or
              may not be available yet.

            </p>


            <Link

              to="/resources/case-studies"

              className="case-study-back-button"

            >

              <ArrowLeft
                size={17}
              />

              Back to case studies

            </Link>


          </div>

        </main>

      </AnimatedPage>

    );

  }


  /* =================================
     RELATED CASE STUDIES
  ================================== */

  const relatedCaseStudies =

    caseStudies

      .filter(

        (item) =>

          item.id !==
          caseStudy.id

      )

      .slice(

        0,

        3

      );


  const Icon =

    caseStudy.icon

    ||

    BriefcaseBusiness;


  /* =================================
     SHARE CASE STUDY
  ================================== */

  const handleShare =

    async () => {

      try {

        if (

          navigator.share

        ) {

          await navigator.share({

            title:

              caseStudy.title,

            text:

              caseStudy.excerpt,

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

      catch (

        error

      ) {

        console.log(

          "Share cancelled or unavailable:",

          error

        );

      }

    };


  return (

    <AnimatedPage>

      <main
        className="case-study-detail-page"
      >


        {/* =================================
            HERO
        ================================== */}

        <section
          className="case-study-detail-hero"
        >


          <div
            className="case-study-detail-hero-inner"
          >


            <Link

              to="/resources/case-studies"

              className="case-study-breadcrumb"

            >

              <ArrowLeft
                size={16}
              />

              All case studies

            </Link>


            <div
              className="case-study-detail-hero-grid"
            >


              <motion.div

                initial={{

                  opacity: 0,

                  y: 25,

                }}

                animate={{

                  opacity: 1,

                  y: 0,

                }}

                transition={{

                  duration: 0.65,

                }}

              >


                <div
                  className="case-study-detail-meta"
                >


                  <span>

                    {

                      caseStudy.category

                    }

                  </span>


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
                          size={14}
                        />

                        {

                          caseStudy.readTime

                        }

                      </span>

                    )

                  }


                </div>


                <h1>

                  {

                    caseStudy.title

                  }

                </h1>


                <p>

                  {

                    caseStudy.excerpt

                  }

                </p>


                <div
                  className="case-study-detail-hero-info"
                >


                  {

                    caseStudy.client

                    &&

                    (

                      <div>

                        <span>

                          CLIENT

                        </span>


                        <strong>

                          {

                            caseStudy.client

                          }

                        </strong>

                      </div>

                    )

                  }


                  {

                    caseStudy.industry

                    &&

                    (

                      <div>

                        <span>

                          INDUSTRY

                        </span>


                        <strong>

                          {

                            caseStudy.industry

                          }

                        </strong>

                      </div>

                    )

                  }


                </div>


              </motion.div>


              {/* HERO VISUAL */}

              <motion.div

                className="case-study-detail-visual"

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
                  className="case-study-detail-grid"
                />


                <div
                  className="case-study-detail-orb"
                />


                <div
                  className="case-study-detail-icon"
                >

                  <Icon
                    size={52}
                  />

                </div>


                <span>

                  NODEUS CASE STUDY

                </span>


              </motion.div>


            </div>


          </div>


        </section>


        {/* =================================
            OVERVIEW
        ================================== */}

        <section
          className="case-study-overview-section"
        >


          <div
            className="case-study-overview"
          >


            <span
              className="section-eyebrow"
            >

              CASE STUDY OVERVIEW

            </span>


            <h2>

              Building a stronger

              <span>

                business capability.

              </span>

            </h2>


            <p>

              {

                caseStudy.introduction

                ||

                caseStudy.excerpt

              }

            </p>


          </div>


          <div
            className="case-study-overview-result"
          >


            <Target
              size={24}
            />


            <span>

              BUSINESS IMPACT

            </span>


            <strong>

              {

                caseStudy.result

                ||

                "A stronger and more scalable operating capability."

              }

            </strong>


          </div>


        </section>


        {/* =================================
            CHALLENGE
        ================================== */}

        <section
          className="case-study-content-section"
        >


          <div
            className="case-study-content-label"
          >


            <span>

              01

            </span>


            <div>

              <Target
                size={22}
              />

              <strong>

                THE CHALLENGE

              </strong>

            </div>


          </div>


          <div
            className="case-study-content-body"
          >


            <h2>

              Understanding the

              <span>

                business challenge.</span>

            </h2>


            <p>

              {

                caseStudy.challenge

                ||

                "The business needed a more reliable and scalable way to support its operational goals while maintaining quality and visibility."

              }

            </p>


          </div>


        </section>


        {/* =================================
            SOLUTION
        ================================== */}

        <section
          className="case-study-content-section case-study-solution-section"
        >


          <div
            className="case-study-content-label"
          >


            <span>

              02

            </span>


            <div>

              <Lightbulb
                size={22}
              />

              <strong>

                THE APPROACH

              </strong>

            </div>


          </div>


          <div
            className="case-study-content-body"
          >


            <h2>

              Designing the

              <span>

                right capability.</span>

            </h2>


            <p>

              {

                caseStudy.solution

                ||

                "Nodeus developed a structured approach that aligned people, processes, and technology with the business requirements."

              }

            </p>


            {

              caseStudy.approach

              &&

              Array.isArray(

                caseStudy.approach

              )

              &&

              (

                <div
                  className="case-study-approach-list"
                >


                  {

                    caseStudy.approach.map(

                      (

                        item

                      ) => (

                        <div

                          key={

                            item

                          }

                        >

                          <CheckCircle2
                            size={18}
                          />


                          <span>

                            {

                              item

                            }

                          </span>


                        </div>

                      )

                    )

                  }


                </div>

              )

            }


          </div>


        </section>


        {/* =================================
            RESULTS
        ================================== */}

        <section
          className="case-study-results-section"
        >


          <div
            className="case-study-results-header"
          >


            <span
              className="section-eyebrow"
            >

              THE OUTCOME

            </span>


            <h2>

              Results connected

              <span>

                to business goals.</span>

            </h2>


            <p>

              The goal was not simply
              to add capacity. The
              capability was designed
              to improve reliability,
              support growth, and
              create stronger
              operational outcomes.

            </p>


          </div>


          <div
            className="case-study-results-grid"
          >


            <motion.div

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

              }}

              transition={{

                duration: 0.55,

              }}

            >


              <TrendingUp
                size={24}
              />


              <span>

                BUSINESS IMPACT

              </span>


              <strong>

                {

                  caseStudy.result

                  ||

                  "Improved operational capability"

                }

              </strong>


            </motion.div>


            <motion.div

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

              }}

              transition={{

                duration: 0.55,

                delay: 0.08,

              }}

            >


              <CheckCircle2
                size={24}
              />


              <span>

                OPERATIONAL VALUE

              </span>


              <strong>

                Clearer workflows and
                more reliable delivery

              </strong>


            </motion.div>


            <motion.div

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

              }}

              transition={{

                duration: 0.55,

                delay: 0.16,

              }}

            >


              <Target
                size={24}
              />


              <span>

                LONG-TERM CAPABILITY

              </span>


              <strong>

                A flexible model
                designed to support
                future growth

              </strong>


            </motion.div>


          </div>


        </section>


        {/* =================================
            ARTICLE FOOTER
        ================================== */}

        <section
          className="case-study-detail-footer"
        >


          <div>


            <span>

              SHARE THIS CASE STUDY

            </span>


            <button

              type="button"

              onClick={

                handleShare

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


        </section>


        {/* =================================
            RELATED CASE STUDIES
        ================================== */}

        <section
          className="related-case-studies"
        >


          <div
            className="related-case-studies-header"
          >


            <div>


              <span
                className="section-eyebrow"
              >

                KEEP EXPLORING

              </span>


              <h2>

                More examples of

                <span>

                  practical capability.</span>

              </h2>


            </div>


            <Link

              to="/resources/case-studies"

            >

              View all case studies

              <ArrowRight
                size={17}
              />

            </Link>


          </div>


          <div
            className="related-case-studies-grid"
          >


            {

              relatedCaseStudies.map(

                (

                  related,

                  index

                ) => {


                  const RelatedIcon =

                    related.icon

                    ||

                    BriefcaseBusiness;


                  return (

                    <motion.article

                      key={

                        related.id

                      }

                      className="related-case-study-card"

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

                      }}

                      transition={{

                        duration: 0.55,

                        delay:

                          index *

                          0.08,

                      }}

                    >


                      <div
                        className="related-case-study-icon"
                      >

                        <RelatedIcon
                          size={24}
                        />

                      </div>


                      <span>

                        {

                          related.category

                        }

                      </span>


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

                          `/resources/case-studies/${

                            related.slug

                          }`

                        }

                      >

                        View case study

                        <ArrowRight
                          size={16}
                        />

                      </Link>


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
          className="case-study-detail-cta"
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

                right capability.</span>

            </h2>


            <p>

              Tell us about your
              business goals and
              operational challenges.
              We&apos;ll explore the
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


export default CaseStudyDetail;