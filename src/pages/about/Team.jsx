import {
  ArrowRight,
  ArrowUpRight,
  Users,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import teamData from "../../data/team/teamData";

import "../../styles/pages/team.css";


function Team() {

  return (

    <main
      className="team-page"
    >


      {/* =================================
          HERO
      ================================== */}

      <section
        className="team-hero"
      >

        <div
          className="team-hero-glow"
        />


        <div
          className="team-container"
        >


          <div
            className="team-hero-content"
          >


            <div
              className="team-hero-label"
            >

              <Users
                size={15}
              />

              <span>

                OUR TEAM

              </span>

            </div>


            <h1>

              The people

              <br />

              <span>

                behind Nodeus.

              </span>

            </h1>


            <p>

              Our team brings together
              operational expertise,
              customer-focused thinking,
              and a shared commitment to
              building reliable and
              scalable capabilities.

            </p>


            <div
              className="team-hero-actions"
            >

              <a
                href="#team-directory"
                className="team-primary-button"
              >

                Meet the team

                <ArrowRight
                  size={17}
                />

              </a>


              <Link
                to="/careers"
                className="team-secondary-button"
              >

                Join Nodeus

                <ArrowUpRight
                  size={16}
                />

              </Link>

            </div>


          </div>


          {/* TEAM STATISTICS */}

          {/* <div
            className="team-hero-stats"
          >


            <div
              className="team-stat-card"
            >

              <strong>

                {
                  teamData.length
                }

              </strong>

              <span>

                Team members

              </span>

            </div>


            <div
              className="team-stat-card"
            >

              <strong>

                5+

              </strong>

              <span>

                Specialized teams

              </span>

            </div>


            <div
              className="team-stat-card"
            >

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

      </section>


      {/* =================================
          TEAM INTRODUCTION
      ================================== */}

      <section
        className="team-introduction"
      >

        <div
          className="team-container"
        >


          <div
            className="team-introduction-grid"
          >


            <div
              className="team-section-heading"
            >

              <span>

                OUR PEOPLE

              </span>


              <h2>

                Different expertise.

                <br />

                <strong>

                  One connected team.

                </strong>

              </h2>


            </div>


            <div
              className="team-introduction-content"
            >

              <p>

                At Nodeus, strong outcomes
                begin with strong people.
                Our teams work across
                customer support,
                customer success,
                operations, and
                specialized service
                environments.

              </p>


              <p>

                We combine practical
                experience, clear
                communication, and a
                collaborative approach
                to help businesses build
                dependable and scalable
                operations.

              </p>


            </div>


          </div>


        </div>

      </section>


      {/* =================================
          TEAM DIRECTORY
      ================================== */}

      <section
        id="team-directory"
        className="team-directory"
      >

        <div
          className="team-container"
        >


          <div
            className="team-directory-header"
          >


            <div>

              <span
                className="team-section-eyebrow"
              >

                TEAM DIRECTORY

              </span>


              <h2>

                Meet the people

                <span>

                  building Nodeus.

                </span>

              </h2>


            </div>


            <p>

              A team of experienced
              professionals working
              together to deliver
              dependable customer and
              business operations.

            </p>


          </div>


          <div
            className="team-grid"
          >


            {

              teamData.map(

                (member) => (

                  <article
                    className="team-card"
                    key={
                      member.id
                    }
                  >


                    <div
                      className="team-card-image"
                    >


                      <img
                        src={
                          member.image
                        }

                        alt={
                          member.name
                        }

                        loading="lazy"
                      />


                      <div
                        className="team-card-image-overlay"
                      />


                      <a
                        href={
                          member.linkedin
                        }

                        target="_blank"

                        rel="noopener noreferrer"

                        className="team-linkedin-button"

                        aria-label={
                          `Visit ${member.name}'s LinkedIn profile`
                        }
                      >

                        <span
                            aria-hidden="true"
                        >
                            in
                        </span>

                      </a>


                    </div>


                    <div
                      className="team-card-content"
                    >


                      {/* <span
                        className="team-department"
                      >

                        {
                          member.department
                        }

                      </span> */}


                      <h3>

                        {
                          member.name
                        }

                      </h3>


                      <p>

                        {
                          member.position
                        }

                      </p>


                    </div>


                  </article>

                )

              )

            }


          </div>


        </div>

      </section>


      {/* =================================
          CULTURE
      ================================== */}

      <section
        className="team-culture"
      >

        <div
          className="team-container"
        >


          <div
            className="team-culture-card"
          >


            <div
              className="team-culture-content"
            >


              <span>

                HOW WE WORK

              </span>


              <h2>

                Built on trust,

                <br />

                <strong>

                  strengthened by teamwork.

                </strong>

              </h2>


              <p>

                We believe reliable
                operations are created
                through ownership, open
                communication,
                continuous learning, and
                people who support one
                another.

              </p>


              <Link
                to="/about/how-we-work"
                className="team-culture-link"
              >

                Explore how we work

                <ArrowUpRight
                  size={17}
                />

              </Link>


            </div>


            <div
              className="team-culture-values"
            >


              <div>

                <span>

                  01

                </span>


                <h3>

                  Ownership

                </h3>


                <p>

                  Taking responsibility
                  for meaningful
                  outcomes.

                </p>


              </div>


              <div>

                <span>

                  02

                </span>


                <h3>

                  Collaboration

                </h3>


                <p>

                  Working together
                  across teams and
                  capabilities.

                </p>


              </div>


              <div>

                <span>

                  03

                </span>


                <h3>

                  Growth

                </h3>


                <p>

                  Learning continuously
                  and improving how we
                  work.

                </p>


              </div>


            </div>


          </div>


        </div>

      </section>


      {/* =================================
          CAREERS CTA
      ================================== */}

      <section
        className="team-careers"
      >

        <div
          className="team-container"
        >


          <div
            className="team-careers-card"
          >


            <div>


              <span>

                BUILD WITH US

              </span>


              <h2>

                Interested in joining

                <br />

                <strong>

                  the Nodeus team?

                </strong>

              </h2>


              <p>

                Explore opportunities
                to grow, contribute,
                and build meaningful
                capabilities with us.

              </p>


            </div>


            <Link
              to="/careers"
              className="team-careers-button"
            >

              Explore careers

              <ArrowUpRight
                size={18}
              />

            </Link>


          </div>


        </div>

      </section>


    </main>

  );

}


export default Team;