import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Search,
  Settings,
  Users,
  BarChart3,
  TrendingUp,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import "../../styles/pages/howWeWork.css";


const processSteps = [

  {
    number:
      "01",

    title:
      "Discover",

    description:
      "We begin by understanding your business, customers, existing workflows, goals, and operational challenges.",

    icon:
      Search,

    points: [
      "Understand your business goals",
      "Review current workflows",
      "Identify operational opportunities",
    ],
  },


  {
    number:
      "02",

    title:
      "Build",

    description:
      "We design the right team structure, processes, tools, and service framework around your requirements.",

    icon:
      Settings,

    points: [
      "Define the right team structure",
      "Create clear operating processes",
      "Build a tailored service model",
    ],
  },


  {
    number:
      "03",

    title:
      "Enable",

    description:
      "We prepare teams with focused onboarding, training, documentation, and the knowledge required to perform effectively.",

    icon:
      Users,

    points: [
      "Recruit and onboard talent",
      "Deliver role-specific training",
      "Prepare tools and documentation",
    ],
  },


  {
    number:
      "04",

    title:
      "Manage",

    description:
      "We manage daily operations through clear communication, quality assurance, performance tracking, and accountability.",

    icon:
      BarChart3,

    points: [
      "Monitor service performance",
      "Maintain quality standards",
      "Provide clear reporting",
    ],
  },


  {
    number:
      "05",

    title:
      "Scale",

    description:
      "As your needs evolve, we help expand capacity, improve processes, and build capabilities that support sustainable growth.",

    icon:
      TrendingUp,

    points: [
      "Adapt to changing demand",
      "Expand teams and capabilities",
      "Continuously improve operations",
    ],
  },

];


const principles = [

  {
    number:
      "01",

    title:
      "Clear communication",

    description:
      "We create dependable communication channels, shared visibility, and clear expectations across teams.",
  },


  {
    number:
      "02",

    title:
      "Ownership",

    description:
      "Our teams take responsibility for their work, follow through on commitments, and remain focused on meaningful outcomes.",
  },


  {
    number:
      "03",

    title:
      "Quality and consistency",

    description:
      "Defined processes, performance standards, and regular quality reviews help create reliable service delivery.",
  },


  {
    number:
      "04",

    title:
      "Continuous improvement",

    description:
      "We use feedback, operational insights, and performance data to improve how teams work over time.",
  },

];


function HowWeWork() {

  return (

    <main
      className="how-we-work-page"
    >


      {/* =================================
          HERO
      ================================== */}

      <section
        className="hww-hero"
      >

        <div
          className="hww-hero-glow hww-hero-glow-one"
        />


        <div
          className="hww-hero-glow hww-hero-glow-two"
        />


        <div
          className="hww-container"
        >


          <div
            className="hww-hero-content"
          >


            <div
              className="hww-eyebrow"
            >

              <span />

              HOW WE WORK

            </div>


            <h1>

              A structured approach

              <br />

              built around

              <span>

                your business.

              </span>

            </h1>


            <p>

              We combine operational
              expertise, adaptable teams,
              and clear processes to build
              dependable capabilities that
              support your business today
              and scale with you tomorrow.

            </p>


            <div
              className="hww-hero-actions"
            >

              <a
                href="#our-process"
                className="hww-primary-button"
              >

                Explore our process

                <ArrowRight
                  size={17}
                />

              </a>


              <Link
                to="/contact"
                className="hww-secondary-button"
              >

                Talk to our team

                <ArrowUpRight
                  size={16}
                />

              </Link>

            </div>


          </div>


          <div
            className="hww-hero-side"
          >


            <div
              className="hww-hero-side-top"
            >

              <span>

                THE NODEUS APPROACH

              </span>


              <strong>

                From understanding
                your needs to building
                scalable operations.

              </strong>

            </div>


            <div
              className="hww-hero-mini-steps"
            >

              <span>

                Discover

              </span>

              <i />

              <span>

                Build

              </span>

              <i />

              <span>

                Enable

              </span>

              <i />

              <span>

                Manage

              </span>

              <i />

              <span>

                Scale

              </span>

            </div>


          </div>


        </div>

      </section>


      {/* =================================
          INTRODUCTION
      ================================== */}

      <section
        className="hww-introduction"
      >

        <div
          className="hww-container"
        >


          <div
            className="hww-introduction-grid"
          >


            <div
              className="hww-section-heading"
            >

              <span>

                BUILT FOR ALIGNMENT

              </span>


              <h2>

                We do not believe in

                <strong>

                  one-size-fits-all operations.

                </strong>

              </h2>


            </div>


            <div
              className="hww-introduction-copy"
            >

              <p>

                Every business has
                different customers,
                systems, priorities, and
                ways of working. Our
                approach begins with
                understanding those
                details before building
                the right operational
                model.

              </p>


              <p>

                We work as an extension
                of your team, creating
                clear processes and
                practical capabilities
                that remain aligned with
                your goals as your
                business evolves.

              </p>


            </div>


          </div>


        </div>

      </section>


      {/* =================================
          PROCESS
      ================================== */}

      <section
        id="our-process"
        className="hww-process"
      >

        <div
          className="hww-container"
        >


          <div
            className="hww-process-header"
          >


            <div>

              <span
                className="hww-section-eyebrow"
              >

                OUR PROCESS

              </span>


              <h2>

                Five stages.

                <span>

                  One connected approach.

                </span>

              </h2>

            </div>


            <p>

              Our process creates a
              clear path from initial
              discovery to reliable
              operations and long-term
              growth.

            </p>


          </div>


          <div
            className="hww-process-list"
          >


            {
              processSteps.map(

                (step) => {

                  const Icon =
                    step.icon;


                  return (

                    <article
                      className="hww-process-card"
                      key={
                        step.number
                      }
                    >


                      <div
                        className="hww-process-card-top"
                      >


                        <span
                          className="hww-process-number"
                        >

                          {
                            step.number
                          }

                        </span>


                        <div
                          className="hww-process-icon"
                        >

                          <Icon
                            size={21}
                          />

                        </div>


                      </div>


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


                      <ul>

                        {
                          step.points.map(

                            (point) => (

                              <li
                                key={
                                  point
                                }
                              >

                                <Check
                                  size={15}
                                />

                                <span>

                                  {
                                    point
                                  }

                                </span>

                              </li>

                            )

                          )
                        }

                      </ul>


                    </article>

                  );

                }

              )
            }


          </div>


        </div>

      </section>


      {/* =================================
          PRINCIPLES
      ================================== */}

      <section
        className="hww-principles"
      >

        <div
          className="hww-container"
        >


          <div
            className="hww-principles-layout"
          >


            <div
              className="hww-principles-intro"
            >

              <span
                className="hww-section-eyebrow"
              >

                HOW WE OPERATE

              </span>


              <h2>

                Principles that keep

                <span>

                  work moving forward.

                </span>

              </h2>


              <p>

                Our operating principles
                shape how we communicate,
                manage teams, maintain
                quality, and build
                long-term partnerships.

              </p>


              <Link
                to="/about"
                className="hww-text-link"
              >

                Learn more about Nodeus

                <ArrowRight
                  size={17}
                />

              </Link>


            </div>


            <div
              className="hww-principles-grid"
            >


              {
                principles.map(

                  (principle) => (

                    <article
                      className="hww-principle-card"
                      key={
                        principle.number
                      }
                    >


                      <span>

                        {
                          principle.number
                        }

                      </span>


                      <h3>

                        {
                          principle.title
                        }

                      </h3>


                      <p>

                        {
                          principle.description
                        }

                      </p>


                    </article>

                  )

                )
              }


            </div>


          </div>


        </div>

      </section>


      {/* =================================
          COLLABORATION
      ================================== */}

      <section
        className="hww-collaboration"
      >

        <div
          className="hww-container"
        >


          <div
            className="hww-collaboration-card"
          >


            <div
              className="hww-collaboration-content"
            >

              <span>

                WORKING AS ONE TEAM

              </span>


              <h2>

                An extension of your

                <strong>

                  business, not a separate team.

                </strong>

              </h2>


              <p>

                We build strong working
                relationships through
                shared goals, transparent
                communication, and clear
                accountability. Your
                priorities guide the way
                our teams operate.

              </p>


            </div>


            <div
              className="hww-collaboration-points"
            >


              <div>

                <span>

                  01

                </span>

                <h3>

                  Shared visibility

                </h3>

                <p>

                  Clear reporting and
                  communication keep
                  everyone aligned.

                </p>

              </div>


              <div>

                <span>

                  02

                </span>

                <h3>

                  Flexible support

                </h3>

                <p>

                  Teams and processes
                  adapt as your business
                  requirements change.

                </p>

              </div>


              <div>

                <span>

                  03

                </span>

                <h3>

                  Long-term focus

                </h3>

                <p>

                  We build capabilities
                  designed to support
                  sustainable growth.

                </p>

              </div>


            </div>


          </div>


        </div>

      </section>


      {/* =================================
          CTA
      ================================== */}

      <section
        className="hww-cta"
      >

        <div
          className="hww-container"
        >


          <div
            className="hww-cta-card"
          >


            <div>

              <span>

                LET'S BUILD TOGETHER

              </span>


              <h2>

                Ready to build a better

                <strong>

                  operation?

                </strong>

              </h2>


              <p>

                Tell us about your
                business, your goals,
                and the capabilities
                you want to build.

              </p>

            </div>


            <Link
              to="/contact"
              className="hww-cta-button"
            >

              Start a conversation

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


export default HowWeWork;