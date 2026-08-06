import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
  ArrowLeft,
  ArrowUpRight,
} from "lucide-react";

import AnimatedPage from "../../components/shared/AnimatedPage";

import { servicesData } from "../../data/services/servicesData";

import "../../styles/services/ServiceDetail.css";


function ServiceDetail() {
  const { service } = useParams();

  const serviceData = servicesData[service];


  /* =========================================
     SERVICE NOT FOUND
  ========================================= */

  if (!serviceData) {
    return (
      <AnimatedPage>
        <main className="service-not-found">

          <h1>
            Service not found
          </h1>

          <p>
            The service you are looking for does not exist.
          </p>

          <Link to="/solutions">
            Back to Solutions
          </Link>

        </main>
      </AnimatedPage>
    );
  }


  return (
    <AnimatedPage>

      <main className="service-detail-page">


        {/* =====================================
            SERVICE HERO
        ====================================== */}

        <section className="service-detail-hero">

          <div className="service-detail-container">

            <Link
              to="/solutions"
              className="service-back-link"
            >
              <ArrowLeft size={18} />

              Back to Solutions
            </Link>


            {/* <span className="service-detail-eyebrow">
              {serviceData.category}
            </span> */}


            <h1>
              {serviceData.title}
            </h1>


            <p>
              {serviceData.description}
            </p>


            <Link
              to={serviceData.ctaLink}
              className="service-primary-button"
            >
              Talk to Our Team

              <ArrowUpRight size={18} />
            </Link>

          </div>

        </section>


        {/* =====================================
            SERVICE OVERVIEW
        ====================================== */}

        <section className="service-overview">

          <div className="service-detail-container">

            <div className="service-overview-grid">


              {/* OVERVIEW HEADING */}

              <div>

                <span className="section-eyebrow">
                  SERVICE OVERVIEW
                </span>


                <h2>
                  {serviceData.overviewTitle}
                </h2>

              </div>


              {/* OVERVIEW CONTENT */}

              <div>

                <p>
                  {serviceData.overview}
                </p>

              </div>

            </div>

          </div>

        </section>



        {/* =====================================
                SERVICE CAPABILITIES
            ===================================== */}

            <section className="service-capabilities">

            <div className="service-detail-container">

                <div className="service-capabilities-header">

                <div>

                    <span className="section-eyebrow">
                    WHAT WE CAN HELP WITH
                    </span>

                    <h2>
                    {serviceData.capabilitiesTitle}
                    </h2>

                </div>

                <p>
                    {serviceData.capabilitiesText}
                </p>

                </div>


                <div className="service-capabilities-grid">

                {serviceData.capabilities.map(
                    (capability, index) => (

                    <motion.article
                        className="service-capability-card"
                        key={capability.title}

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
                            amount: 0.2,
                        }}

                        transition={{
                            duration: 0.55,
                            delay: index * 0.07,
                        }}
                    >

                        <span className="service-capability-number">
                        {String(index + 1).padStart(2, "0")}
                        </span>

                        <h3>
                        {capability.title}
                        </h3>

                        <p>
                        {capability.text}
                        </p>

                        <ArrowUpRight
                        size={20}
                        className="service-capability-arrow"
                        />

                    </motion.article>

                    )
                )}

                </div>

            </div>

            </section>


        {/* =====================================
            BENEFITS
        ====================================== */}

        <section className="service-benefits">

          <div className="service-detail-container">


            <span className="section-eyebrow">
              THE NODEUS ADVANTAGE
            </span>


            <h2>
              Built for performance.
              <span> Designed to scale.</span>
            </h2>


            <div className="service-benefits-grid">

              {serviceData.benefits.map(
                (benefit) => {

                  const Icon = benefit.icon;


                  return (

                    <article
                      className="service-benefit-card"
                      key={benefit.title}
                    >

                      <Icon size={22} />


                      <h3>
                        {benefit.title}
                      </h3>


                      <p>
                        {benefit.text}
                      </p>

                    </article>

                  );

                }
              )}

            </div>

          </div>

        </section>


        {/* =====================================
            FINAL CTA
        ====================================== */}

        <section className="service-detail-cta">

          <div className="service-detail-container">


            <span className="section-eyebrow">
              LET'S BUILD
            </span>


            <h2>
              {serviceData.ctaTitle}
            </h2>


            <p className="service-cta-text">
              {serviceData.ctaText}
            </p>


            <Link
              to={serviceData.ctaLink}
              className="service-primary-button"
            >

              Start a Conversation

              <ArrowUpRight size={18} />

            </Link>

          </div>

        </section>


      </main>

    </AnimatedPage>
  );
}


export default ServiceDetail;