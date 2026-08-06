import {
  Link,
} from "react-router-dom";

import "../../styles/pages/careers.css";

import jobsData from "../../data/careers/jobsData";


/* =========================================
   BENEFITS DATA
========================================= */

const benefits = [

  {
    number:
      "01",

    title:
      "Meaningful work",

    description:
      "Contribute to customer and business operations that help organizations build dependable, scalable capabilities.",
  },


  {
    number:
      "02",

    title:
      "Continuous growth",

    description:
      "Develop your skills through practical experience, collaboration, feedback, and opportunities to take on new challenges.",
  },


  {
    number:
      "03",

    title:
      "A connected team",

    description:
      "Work alongside people who value communication, accountability, shared learning, and supporting one another.",
  },


  {
    number:
      "04",

    title:
      "Room to contribute",

    description:
      "Bring your ideas, take ownership of meaningful work, and help improve the way teams and operations perform.",
  },

];


/* =========================================
   VALUES DATA
========================================= */

const values = [

  {
    title:
      "Ownership",

    description:
      "We take responsibility for our work and stay focused on meaningful outcomes.",
  },


  {
    title:
      "Collaboration",

    description:
      "We work openly across teams and support one another in achieving shared goals.",
  },


  {
    title:
      "Growth",

    description:
      "We keep learning, improving, and building stronger capabilities over time.",
  },


  {
    title:
      "Reliability",

    description:
      "We value consistency, clear communication, and delivering work people can depend on.",
  },

];


/* =========================================
   CAREERS PAGE
========================================= */

function Careers() {

  return (

    <main
      className="careers-page"
    >


      {/* =================================
          HERO
      ================================== */}

      <section
        className="careers-hero"
      >

        <div
          className="careers-hero-orb careers-hero-orb-one"
        />


        <div
          className="careers-hero-orb careers-hero-orb-two"
        />


        <div
          className="careers-container"
        >


          <div
            className="careers-hero-content"
          >


            <div
              className="careers-eyebrow"
            >

              CAREERS AT NODEUS

            </div>


            <h1>

              Build your future.

              <span>

                Build what matters.

              </span>

            </h1>


            <p>

              Join a team that combines
              customer-focused thinking,
              operational expertise, and
              a shared commitment to
              building reliable and
              scalable capabilities.

            </p>


            <div
              className="careers-hero-actions"
            >

              <a
                href="#open-roles"
                className="careers-primary-button"
              >

                View open roles

                <span>

                  ↘

                </span>

              </a>


              <a
                href="#general-application"
                className="careers-secondary-button"
              >

                Send your CV

              </a>

            </div>


          </div>


          {/* =================================
              HERO PANEL
          ================================== */}

          <div
            className="careers-hero-panel"
          >


            <div
              className="careers-panel-top"
            >

              <span>

                WHY NODEUS

              </span>


              <span>

                01 — 04

              </span>

            </div>


            <div
              className="careers-panel-main"
            >

              <strong>

                People are at the
                center of everything
                we build.

              </strong>


              <p>

                We create an environment
                where people can learn,
                contribute, collaborate,
                and grow through
                meaningful work.

              </p>

            </div>


            {/* <div
              className="careers-panel-bottom"
            >

              <div>

                <strong>

                  12+

                </strong>


                <span>

                  Team members

                </span>

              </div>


              <div>

                <strong>

                  4

                </strong>


                <span>

                  Core values

                </span>

              </div>


              <div>

                <strong>

                  1

                </strong>


                <span>

                  Shared mission

                </span>

              </div>

            </div>

 */}
          </div>


        </div>

      </section>


      {/* =================================
          INTRODUCTION
      ================================== */}

      <section
        className="careers-intro"
      >

        {/* <div
          className="careers-container"
        > */}


          {/* <div
            className="careers-intro-heading"
          >

            <span>

              GROW WITH US

            </span>


            <h2>

              A career is more than

              <strong>

                a job title.

              </strong>

            </h2>

          </div>


          <div
            className="careers-intro-copy"
          >

            <p>

              At Nodeus, we believe
              strong operations begin
              with capable people who
              are trusted to take
              ownership and encouraged
              to keep growing.

            </p>


            <p>

              We bring together people
              with different strengths
              and perspectives to create
              dependable experiences for
              our clients, their
              customers, and their
              businesses.

            </p>

          </div>
 */}

        {/* </div> */}

      </section>


      {/* =================================
          BENEFITS
      ================================== */}

      {/* <section
        className="careers-benefits"
      >

        <div
          className="careers-container"
        >


          <div
            className="careers-section-header"
          >

            <div>

              <span>

                WHAT YOU CAN EXPECT

              </span>


              <h2>

                More than a place

                <strong>

                  to work.

                </strong>

              </h2>

            </div>


            <p>

              We are building a work
              environment designed
              around trust, development,
              collaboration, and
              meaningful contribution.

            </p>

          </div>


          <div
            className="careers-benefits-grid"
          >

            {

              benefits.map(

                (benefit) => (

                  <article
                    className="careers-benefit-card"
                    key={
                      benefit.number
                    }
                  >


                    <span
                      className="careers-benefit-number"
                    >

                      {
                        benefit.number
                      }

                    </span>


                    <h3>

                      {
                        benefit.title
                      }

                    </h3>


                    <p>

                      {
                        benefit.description
                      }

                    </p>


                    <span
                      className="careers-benefit-arrow"
                    >

                      ↗

                    </span>


                  </article>

                )

              )

            }

          </div>


        </div>

      </section> */}


      {/* =================================
          CULTURE
      ================================== */}

      {/* <section
        className="careers-culture"
      >

        <div
          className="careers-container"
        >


          <div
            className="careers-culture-card"
          >


            <div
              className="careers-culture-content"
            >

              <span>

                OUR CULTURE

              </span>


              <h2>

                Built on trust.

                <strong>

                  Strengthened by people.

                </strong>

              </h2>


              <p>

                Our culture is shaped
                by how we work together:
                communicating clearly,
                taking responsibility,
                supporting growth, and
                staying focused on
                dependable outcomes.

              </p>


              <Link
                to="/about/how-we-work"
                className="careers-text-link"
              >

                Explore how we work

                <span>

                  ↗

                </span>

              </Link>


            </div>


            <div
              className="careers-values-grid"
            >

              {

                values.map(

                  (
                    value,
                    index
                  ) => (

                    <article
                      className="careers-value-card"
                      key={
                        value.title
                      }
                    >


                      <span>

                        0{
                          index + 1
                        }

                      </span>


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


                    </article>

                  )

                )

              }

            </div>


          </div>


        </div>

      </section> */}


      {/* =================================
          OPEN ROLES
      ================================== */}

      <section
        id="open-roles"
        className="careers-openings"
      >

        <div
          className="careers-container"
        >


          <div
            className="careers-openings-header"
          >

            <div>

              <span>

                OPEN OPPORTUNITIES

              </span>


              <h2>

                Find your next

                <strong>

                  opportunity.

                </strong>

              </h2>

            </div>


            <p>

              Explore current
              opportunities and discover
              where your experience and
              strengths can contribute
              to the Nodeus team.

            </p>

          </div>


          <div
            className="careers-openings-list"
          >

            {

              jobsData.map(

                (job) => (

                  <article
                    className="careers-opening"
                    key={
                      job.id
                    }
                  >


                    <div
                      className="careers-opening-main"
                    >

                      <span>

                        {
                          job.department
                        }

                      </span>


                      <h3>

                        {
                          job.title
                        }

                      </h3>

                    </div>


                    <div
                      className="careers-opening-meta"
                    >

                      <span>

                        {
                          job.location
                        }

                      </span>


                      <span>

                        {
                          job.type
                        }

                      </span>

                    </div>


                    <Link
                      to={
                        `/careers/${job.slug}`
                      }

                      className="careers-apply-button"
                    >

                      View role

                      <span>

                        ↗

                      </span>

                    </Link>


                  </article>

                )

              )

            }

          </div>


        </div>

      </section>


      {/* =================================
          GENERAL APPLICATION
      ================================== */}

      <section
        id="general-application"
        className="careers-application"
      >

        <div
          className="careers-container"
        >


          <div
            className="careers-application-card"
          >


            <div
              className="careers-application-content"
            >

              <span>

                BUILD WITH US

              </span>


              <h2>

                Do not see the right

                <strong>

                  role for you?

                </strong>

              </h2>


              <p>

                We are always interested
                in meeting motivated
                people who can bring
                valuable skills,
                experience, and new
                perspectives to Nodeus.

              </p>

            </div>


            <div
              className="careers-application-action"
            >

              <a
                href="mailto:careers@nodeus.tech"
                className="careers-application-button"
              >

                Send your CV

                <span>

                  ↗

                </span>

              </a>


              <small>

                careers@nodeus.tech

              </small>

            </div>


          </div>


        </div>

      </section>


    </main>

  );

}


export default Careers;