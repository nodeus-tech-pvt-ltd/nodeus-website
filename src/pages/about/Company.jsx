import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  HeartHandshake,
  Layers3,
  Target,
  Users,
  Zap,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import "../../styles/pages/company.css";


const values = [

  {
    icon: HeartHandshake,

    // number: "01",

    title: "Partnership",

    description:
      "We work as an extension of our clients’ teams, building relationships based on trust, transparency, and shared goals.",
  },

  {
    icon: Target,

    // number: "02",

    title: "Ownership",

    description:
      "We take responsibility for the work we deliver and stay focused on creating meaningful, measurable value.",
  },

  {
    icon: Zap,

    // number: "03",

    title: "Adaptability",

    description:
      "Every business is different. We adapt our people, processes, and capabilities to fit changing needs.",
  },

  {
    icon: Users,

    // number: "04",

    title: "People First",

    description:
      "Strong capabilities begin with strong people. We invest in collaboration, learning, and long-term growth.",
  },

];


const capabilities = [

  "Customer experience and support",

  "Business operations and back-office services",

  "Sales and revenue operations",

  "Technology and IT services",

  "AI and automation support",

  "Finance, accounting, and creative services",

];


function Company() {

  return (

    <main className="company-page">


      {/* =================================
          COMPANY HERO
      ================================== */}

      <section className="company-hero">

        <div className="company-hero-glow company-hero-glow-one" />

        <div className="company-hero-glow company-hero-glow-two" />


        <div className="company-container">


          <div className="company-hero-content">


            <span className="company-eyebrow">

              ABOUT NODEUS

            </span>


            <h1>

              Building capabilities.

              <span>

                Creating stronger teams.

              </span>

            </h1>


            <p className="company-hero-description">

              Nodeus helps businesses build reliable,
              scalable capabilities through people,
              technology, and operational expertise.

            </p>


            <div className="company-hero-actions">

              <Link
                to="/contact"
                className="company-primary-button"
              >

                Start a conversation

                <ArrowUpRight
                  size={18}
                />

              </Link>


              <a
                href="#our-purpose"
                className="company-secondary-button"
              >

                Explore our purpose

                <ArrowRight
                  size={17}
                />

              </a>

            </div>


          </div>


          <div className="company-hero-panel">


            <div className="company-panel-top">

              <span>

                THE NODEUS APPROACH

              </span>


              <Compass
                size={23}
              />

            </div>


            <div className="company-panel-line" />


            <p>

              We combine the right people,
              practical processes, and adaptable
              technology to help businesses build
              capabilities that can grow with them.

            </p>


            <div className="company-panel-tags">

              <span>

                People

              </span>


              <span>

                Process

              </span>


              <span>

                Technology

              </span>

            </div>


          </div>


        </div>

      </section>


      {/* =================================
          INTRODUCTION
      ================================== */}

      <section
        className="company-introduction"
        id="our-purpose"
      >

        <div className="company-container">


          <div className="company-section-heading">


            <span className="company-eyebrow">

              WHO WE ARE

            </span>


            <h2>

              More than a service provider.

              <span>

                A capability partner.

              </span>

            </h2>


          </div>


          <div className="company-introduction-content">


            <div className="company-introduction-copy">

              <p className="company-large-text">

                Businesses need more than additional
                capacity. They need dependable teams,
                clear processes, and capabilities that
                can adapt as their needs evolve.

              </p>


              <p>

                Nodeus works with businesses to build
                and support the operational capabilities
                behind great customer experiences,
                efficient workflows, sustainable growth,
                and long-term success.

              </p>


              <p>

                Our approach brings together skilled
                people, structured operations, and
                practical technology to create support
                models that align with each business.

              </p>


            </div>


            <div className="company-introduction-card">


              <div className="company-introduction-icon">

                <Layers3
                  size={24}
                />

              </div>


              <h3>

                Built around your business

              </h3>


              <p>

                We shape teams, workflows, and
                operational support around your
                goals instead of forcing every
                business into the same model.

              </p>


            </div>


          </div>


        </div>

      </section>


      {/* =================================
          MISSION AND VISION
      ================================== */}

      <section className="company-purpose">

        <div className="company-container">


          <div className="company-purpose-grid">


            <article className="company-purpose-card">


              <div className="company-purpose-icon">

                <Target
                  size={25}
                />

              </div>


              <span>

                OUR MISSION

              </span>


              <h2>

                Help businesses build
                reliable and scalable
                capabilities.

              </h2>


              <p>

                We aim to help organizations
                strengthen their teams and
                operations through adaptable
                support built around real
                business needs.

              </p>


            </article>


            <article className="company-purpose-card company-vision-card">


              <div className="company-purpose-icon">

                <Compass
                  size={25}
                />

              </div>


              <span>

                OUR VISION

              </span>


              <h2>

                Be a trusted global
                partner for sustainable
                operational growth.

              </h2>


              <p>

                We envision a future where
                businesses can access the
                people, expertise, and
                capabilities they need to
                grow with confidence.

              </p>


            </article>


          </div>


        </div>

      </section>


      {/* =================================
          CAPABILITIES
      ================================== */}

      <section className="company-capabilities">

        <div className="company-container">


          <div className="company-capabilities-layout">


            <div className="company-capabilities-heading">


              <span className="company-eyebrow">

                WHAT WE BUILD

              </span>


              <h2>

                Connected capabilities

                <span>

                  built to scale.

                </span>

              </h2>


              <p>

                Our capabilities can support
                different parts of a business
                while working together as one
                connected operational ecosystem.

              </p>


              <Link
                to="/solutions"
                className="company-text-link"
              >

                Explore our solutions

                <ArrowUpRight
                  size={17}
                />

              </Link>


            </div>


            <div className="company-capabilities-list">


              {
                capabilities.map(
                  (
                    capability,
                    index
                  ) => (

                    <div
                      className="company-capability-item"
                      key={capability}
                    >


                      <span className="company-capability-number">

                        {
                          String(
                            index + 1
                          ).padStart(
                            2,
                            "0"
                          )
                        }

                      </span>


                      <span className="company-capability-name">

                        {
                          capability
                        }

                      </span>


                      <Check
                        size={18}
                      />


                    </div>

                  )
                )
              }


            </div>


          </div>


        </div>

      </section>


      {/* =================================
          VALUES
      ================================== */}

      <section className="company-values">

        <div className="company-container">


          <div className="company-values-header">


            <div>


              <span className="company-eyebrow">

                OUR VALUES

              </span>


              <h2>

                The principles behind

                <span>

                  how we work.

                </span>

              </h2>


            </div>


            <p>

              Our values influence how we
              collaborate, make decisions,
              support our clients, and grow
              as a team.

            </p>


          </div>


          <div className="company-values-grid">


            {
              values.map(
                (value) => {

                  const Icon =
                    value.icon;


                  return (

                    <article
                      className="company-value-card"
                      key={value.title}
                    >


                      <div className="company-value-top">


                        <div className="company-value-icon">

                          <Icon
                            size={22}
                          />

                        </div>


                        <span>

                          {
                            value.number
                          }

                        </span>


                      </div>


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

                  );

                }
              )
            }


          </div>


        </div>

      </section>


      {/* =================================
          CTA
      ================================== */}

      <section className="company-cta">

        <div className="company-container">


          <div className="company-cta-box">


            <div>


              <span className="company-eyebrow">

                LET’S BUILD TOGETHER

              </span>


              <h2>

                Ready to build what’s next?

              </h2>


              <p>

                Tell us about your business,
                your goals, and the capabilities
                you want to build.

              </p>


            </div>


            <Link
              to="/contact"
              className="company-primary-button"
            >

              Let’s talk

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


export default Company;