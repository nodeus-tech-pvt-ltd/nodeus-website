import {
  ArrowLeft,
  ArrowUpRight,
  Check,
} from "lucide-react";

import {
  Link,
  useParams,
} from "react-router-dom";

import industries from "../../data/industries/industriesData";

import AnimatedPage from "../../components/shared/AnimatedPage";

import "../../styles/pages/industryDetail.css";


function IndustryDetail() {

  const {
    industry: industrySlug,
  } = useParams();


  const industry =
    industries.find(
      (item) =>
        item.slug ===
        industrySlug
    );


  /* =====================================
     INDUSTRY NOT FOUND
  ===================================== */

  if (!industry) {

    return (

      <AnimatedPage>

        <main
          className={
            "industry-not-found"
          }
        >

          <span>

            404

          </span>


          <h1>

            Industry not found

          </h1>


          <p>

            The industry page you are
            looking for does not exist.

          </p>


          <Link
            to="/industries"
          >

            <ArrowLeft
              size={17}
            />

            Back to industries

          </Link>

        </main>

      </AnimatedPage>

    );

  }


  const Icon =
    industry.icon;


  return (

    <AnimatedPage>

      <main
        className={
          "industry-detail-page"
        }
      >


        {/* =============================
            HERO
        ============================== */}

        <section
          className={
            "industry-detail-hero"
          }
        >


          <Link

            to="/industries"

            className={
              "industry-back-link"
            }

          >

            <ArrowLeft
              size={17}
            />

            All industries

          </Link>


          <div
            className={
              "industry-detail-hero-grid"
            }
          >


            <div>


              <div
                className={
                  "industry-detail-icon"
                }
              >

                <Icon
                  size={32}
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

                Built for

                <br />

                <span>

                  {
                    industry.title
                  }

                </span>

              </h1>


              <p>

                {
                  industry.heroDescription
                }

              </p>


              <Link

                to="/contact"

                className={
                  "industry-hero-button"
                }

              >

                Talk to our team

                <ArrowUpRight
                  size={18}
                />

              </Link>

            </div>


            <div
              className={
                "industry-hero-panel"
              }
            >


              <span>

                HOW WE HELP

              </span>


              <h2>

                Dedicated capabilities

                <br />

                built around your

                <br />

                business.

              </h2>


              <p>

                Flexible teams, structured
                processes, and scalable
                operations designed to
                support your goals.

              </p>


              <div
                className={
                  "industry-panel-stat"
                }
              >

                <strong>

                  01

                </strong>


                <span>

                  Industry-focused
                  operations

                </span>

              </div>

            </div>

          </div>

        </section>


        {/* =============================
            CHALLENGES
        ============================== */}

        <section
          className={
            "industry-content-section"
          }
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

              Built to handle

              <br />

              <span>

                what matters most.

              </span>

            </h2>


            <p>

              We build operational
              capabilities around the
              challenges your teams and
              customers face every day.

            </p>

          </div>


          <div
            className={
              "industry-challenges-grid"
            }
          >

            {
              industry.challenges.map(
                (
                  challenge,
                  index
                ) => (

                  <article

                    key={
                      challenge
                    }

                    className={
                      "industry-challenge-card"
                    }

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


                    <h3>

                      {
                        challenge
                      }

                    </h3>

                  </article>

                )
              )
            }

          </div>

        </section>


        {/* =============================
            CAPABILITIES
        ============================== */}

        <section
          className={
            "industry-capabilities-section"
          }
        >


          <div
            className={
              "industry-capabilities-content"
            }
          >


            <span
              className={
                "section-eyebrow"
              }
            >

              OUR CAPABILITIES

            </span>


            <h2>

              The support your

              <br />

              <span>

                business needs.

              </span>

            </h2>


            <p>

              Combine the right people,
              processes, and expertise to
              build a support model that
              fits your business.

            </p>


            <Link

              to="/solutions"

              className={
                "industry-text-link"
              }

            >

              Explore all solutions

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
              industry.capabilities.map(
                (
                  capability,
                  index
                ) => (

                  <div

                    key={
                      capability
                    }

                    className={
                      "industry-capability-item"
                    }

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


                    <h3>

                      {
                        capability
                      }

                    </h3>


                    <Check
                      size={18}
                    />

                  </div>

                )
              )
            }

          </div>

        </section>


        {/* =============================
            OUTCOMES
        ============================== */}

        <section
          className={
            "industry-outcomes-section"
          }
        >


          <span
            className={
              "section-eyebrow"
            }
          >

            WHAT YOU CAN EXPECT

          </span>


          <h2>

            Better experiences.

            <br />

            <span>

              Stronger operations.

            </span>

          </h2>


          <div
            className={
              "industry-outcomes-grid"
            }
          >

            {
              industry.outcomes.map(
                (
                  outcome
                ) => (

                  <div

                    key={
                      outcome
                    }

                    className={
                      "industry-outcome-card"
                    }

                  >

                    <Check
                      size={19}
                    />


                    <p>

                      {
                        outcome
                      }

                    </p>

                  </div>

                )
              )
            }

          </div>

        </section>


        {/* =============================
            CTA
        ============================== */}

        <section
          className={
            "industry-detail-cta"
          }
        >


          <div>

            <span>

              READY TO SCALE?

            </span>


            <h2>

              Build a team around

              <br />

              your business.

            </h2>

          </div>


          <Link
            to="/contact"
          >

            Let’s talk

            <ArrowUpRight
              size={18}
            />

          </Link>

        </section>

      </main>

    </AnimatedPage>

  );

}


export default IndustryDetail;