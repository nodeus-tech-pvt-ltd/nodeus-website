// import { Link, useParams } from "react-router-dom";

// import {
//   ArrowLeft,
//   ArrowUpRight,
// } from "lucide-react";

// import AnimatedPage from "../../components/shared/AnimatedPage";

// import { servicesData } from "../../data/services/servicesData";

// import "../../styles/services/ServiceDetail.css";


// function ServiceDetail() {
//   const { service } = useParams();

//   const serviceData = servicesData[service];


//   /* =========================================
//      SERVICE NOT FOUND
//   ========================================= */

//   if (!serviceData) {
//     return (
//       <AnimatedPage>
//         <main className="service-not-found">

//           <h1>
//             Service not found
//           </h1>

//           <p>
//             The service you are looking for does not exist.
//           </p>

//           <Link to="/solutions">
//             Back to Solutions
//           </Link>

//         </main>
//       </AnimatedPage>
//     );
//   }


//   return (
//     <AnimatedPage>

//       <main className="service-detail-page">


//         {/* =====================================
//             SERVICE HERO
//         ====================================== */}

//         <section className="service-detail-hero">

//           <div className="service-detail-container">

//             <Link
//               to="/solutions"
//               className="service-back-link"
//             >
//               <ArrowLeft size={18} />

//               Back to Solutions
//             </Link>


//             <span className="service-detail-eyebrow">
//               {serviceData.category}
//             </span>


//             <h1>
//               {serviceData.title}
//             </h1>


//             <p>
//               {serviceData.description}
//             </p>


//             <Link
//               to={serviceData.ctaLink}
//               className="service-primary-button"
//             >
//               Talk to Our Team

//               <ArrowUpRight size={18} />
//             </Link>

//           </div>

//         </section>


//         {/* =====================================
//             SERVICE OVERVIEW
//         ====================================== */}

//         <section className="service-overview">

//           <div className="service-detail-container">

//             <div className="service-overview-grid">


//               {/* OVERVIEW HEADING */}

//               <div>

//                 {/* <span className="section-eyebrow">
//                   SERVICE OVERVIEW
//                 </span> */}


//                 <h2>
//                   {serviceData.overviewTitle}
//                 </h2>

//               </div>


//               {/* OVERVIEW CONTENT */}

//               <div>

//                 <p>
//                   {serviceData.overview}
//                 </p>

//               </div>

//             </div>

//           </div>

//         </section>


//         {/* =====================================
//             BENEFITS
//         ====================================== */}

//         <section className="service-benefits">

//           <div className="service-detail-container">


//             <span className="section-eyebrow">
//               THE NODEUS ADVANTAGE
//             </span>


//             <h2>
//               Built for performance.
//               <span> Designed to scale.</span>
//             </h2>


//             <div className="service-benefits-grid">

//               {serviceData.benefits.map(
//                 (benefit) => {

//                   const Icon = benefit.icon;


//                   return (

//                     <article
//                       className="service-benefit-card"
//                       key={benefit.title}
//                     >

//                       <Icon size={22} />


//                       <h3>
//                         {benefit.title}
//                       </h3>


//                       <p>
//                         {benefit.text}
//                       </p>

//                     </article>

//                   );

//                 }
//               )}

//             </div>

//           </div>

//         </section>


//         {/* =====================================
//             FINAL CTA
//         ====================================== */}

//         <section className="service-detail-cta">

//           <div className="service-detail-container">


//             <span className="section-eyebrow">
//               LET'S BUILD
//             </span>


//             <h2>
//               {serviceData.ctaTitle}
//             </h2>


//             <p className="service-cta-text">
//               {serviceData.ctaText}
//             </p>


//             <Link
//               to={serviceData.ctaLink}
//               className="service-primary-button"
//             >

//               Start a Conversation

//               <ArrowUpRight size={18} />

//             </Link>

//           </div>

//         </section>


//       </main>

//     </AnimatedPage>
//   );
// }


// export default ServiceDetail;


import { useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
  Check,
  ChevronDown,
  CircleCheck,
  Layers3,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { getServiceBySlug } from "../../data/services/servicesData";

import "../../styles/services/ServiceDetail.css";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = getServiceBySlug(slug);

  const [openFaq, setOpenFaq] = useState(null);

  if (!service) {
    return (
      <main className="service-not-found">
        <div className="service-not-found-glow" />

        <div className="service-not-found-inner">
          <span className="service-section-label">
            Service unavailable
          </span>

          <h1>
            This service
            <br />
            <span>isn't available.</span>
          </h1>

          <p>
            The service you're looking for may have been moved
            or is no longer available.
          </p>

          <Link
            to="/solutions"
            className="service-button service-button-primary"
          >
            Explore Solutions
          </Link>
        </div>
      </main>
    );
  }

  const HeroIcon = service.heroIcon;

  return (
    <main className="service-page">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="service-hero">

        <div className="service-hero-grid" />

        <div className="service-hero-glow service-hero-glow-one" />
        <div className="service-hero-glow service-hero-glow-two" />

        <div className="service-container">

          <div className="service-hero-layout">

            {/* ================= LEFT ================= */}

            <div className="service-hero-content">

              <div className="service-eyebrow">
                <span className="service-eyebrow-dot" />

                <span>
                  {service.hero?.eyebrow ||
                    service.category ||
                    "NODEUS SERVICES"}
                </span>
              </div>


              <h1 className="service-hero-title">
                {service.hero?.title || service.title}
              </h1>


              <p className="service-hero-description">
                {service.hero?.description ||
                  service.description}
              </p>


              <div className="service-hero-actions">

                <Link
                  to="/contact"
                  className="service-button service-button-primary"
                >
                  {service.hero?.primaryButton ||
                    "Talk to Our Team"}
                </Link>


                <Link
                  to="#capabilities"
                  className="service-button service-button-secondary"
                >
                  {service.hero?.secondaryButton ||
                    "Explore the Service"}
                </Link>

              </div>


              <div className="service-hero-trust">

                <div>
                  <CircleCheck size={15} />
                  <span>Dedicated support</span>
                </div>

                <div>
                  <CircleCheck size={15} />
                  <span>Flexible operations</span>
                </div>

                <div>
                  <CircleCheck size={15} />
                  <span>Built around you</span>
                </div>

              </div>

            </div>


            {/* ================= RIGHT ================= */}

            <div className="service-hero-visual">

              <div className="service-visual-ring service-ring-one" />
              <div className="service-visual-ring service-ring-two" />
              <div className="service-visual-ring service-ring-three" />


              <div className="service-visual-center">

                <div className="service-visual-icon">

                  {HeroIcon && (
                    <HeroIcon
                      size={32}
                      strokeWidth={1.5}
                    />
                  )}

                </div>


                <strong>
                  {service.title}
                </strong>


                {/* <span>
                  People • Process • Performance
                </span> */}

              </div>


              {/* <div className="service-visual-card service-visual-card-one">

                <span className="service-visual-card-dot" />

                <div>
                  <strong>Dedicated Team</strong>

                  <span>
                    Built around your workflow
                  </span>
                </div>

              </div>


              <div className="service-visual-card service-visual-card-two">

                <span className="service-visual-card-dot" />

                <div>
                  <strong>Flexible Operations</strong>

                  <span>
                    Designed to scale with you
                  </span>
                </div>

              </div>


              <div className="service-visual-card service-visual-card-three">

                <span className="service-visual-card-dot" />

                <div>
                  <strong>Performance Focused</strong>

                  <span>
                    Aligned with your goals
                  </span>
                </div>

              </div> */}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      {service.overview && (
        <section className="service-overview">

          <div className="service-container">

            <div className="service-overview-grid">

              <div className="service-section-intro">

                <span className="service-section-label">
                  Overview
                </span>

                <h2>
                  {service.overview.title}
                </h2>

              </div>


              <div className="service-overview-content">

                <p className="service-overview-lead">
                  {service.overview.text}
                </p>


                {service.overview.points?.length > 0 && (
                  <div className="service-overview-points">

                    {service.overview.points.map(
                      (point, index) => (
                        <div
                          className="service-overview-point"
                          key={`${point}-${index}`}
                        >

                          <span className="service-check">
                            <Check size={14} />
                          </span>

                          <span>
                            {point}
                          </span>

                        </div>
                      )
                    )}

                  </div>
                )}

              </div>

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          CAPABILITIES
      ====================================================== */}

      {service.capabilities?.length > 0 && (
        <section
          className="service-capabilities"
          id="capabilities"
        >

          <div className="service-container">

            <div className="service-section-heading">

              <div>

                <span className="service-section-label">
                  Capabilities
                </span>

                <h2>
                  {service.capabilitiesTitle ||
                    "What we can help you with"}
                </h2>

              </div>


              {service.capabilitiesText && (
                <p className="service-section-description">
                  {service.capabilitiesText}
                </p>
              )}

            </div>


            <div className="service-capability-list">

              {service.capabilities.map(
                (capability, index) => {

                  const CapabilityIcon =
                    capability.icon || Layers3;

                  return (
                    <article
                      className="service-capability"
                      key={`${capability.title}-${index}`}
                    >

                      <div className="service-capability-icon">

                        <CapabilityIcon
                          size={21}
                          strokeWidth={1.5}
                        />

                      </div>


                      <div className="service-capability-content">

                        <h3>
                          {capability.title}
                        </h3>

                        <p>
                          {capability.text}
                        </p>

                      </div>


                      <div className="service-capability-check">
                        <Check size={16} />
                      </div>

                    </article>
                  );
                }
              )}

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          PLATFORMS / TOOLS
      ====================================================== */}

      {(service.platforms?.length > 0 ||
        service.tools?.length > 0) && (
        <section className="service-stack">

          <div className="service-container">

            <div className="service-stack-heading">

              <span className="service-section-label">
                Our ecosystem
              </span>

              <h2>
                Built to work with
                <span> your existing setup.</span>
              </h2>

              <p>
                We work within the tools, platforms, and
                workflows your business already relies on,
                while helping you improve how everything
                operates together.
              </p>

            </div>


            <div className="service-stack-groups">

              {/* ================= PLATFORMS ================= */}

              {service.platforms?.length > 0 && (
                <div className="service-stack-group">

                  <div className="service-stack-group-header">

                    <div className="service-stack-group-icon">
                      <Layers3 size={19} />
                    </div>

                    <div>
                      <span>PLATFORMS</span>

                      <h3>
                        Your existing ecosystem
                      </h3>
                    </div>

                  </div>


                  <div className="service-marquee">

                    <div className="service-marquee-track">

                      {[...service.platforms, ...service.platforms].map(
                        (platform, index) => (
                          <span
                            className="service-tool-pill"
                            key={`platform-${platform}-${index}`}
                          >
                            <i />
                            {platform}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </div>
              )}


              {/* ================= TOOLS ================= */}

              {service.tools?.length > 0 && (
                <div className="service-stack-group">

                  <div className="service-stack-group-header">

                    <div className="service-stack-group-icon">
                      <Sparkles size={19} />
                    </div>

                    <div>
                      <span>CAPABILITIES</span>

                      <h3>
                        Operational support
                      </h3>
                    </div>

                  </div>


                  <div className="service-marquee">

                    <div className="service-marquee-track">

                      {[...service.tools, ...service.tools].map(
                        (tool, index) => (
                          <span
                            className="service-tool-pill"
                            key={`tool-${tool}-${index}`}
                          >
                            <i />
                            {tool}
                          </span>
                        )
                      )}

                    </div>

                  </div>

                </div>
              )}

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          BENEFITS
      ====================================================== */}

      {service.benefits?.length > 0 && (
        <section className="service-benefits">

          <div className="service-container">

            <div className="service-benefits-header">

              <span className="service-section-label">
                Why Nodeus
              </span>

              <h2>
                Built around your
                <span> business.</span>
              </h2>

              <p>
                Our approach combines capable people,
                dependable processes, and measurable
                performance to create support that actually
                moves your business forward.
              </p>

            </div>


            <div className="service-benefit-grid">

              {service.benefits.map(
                (benefit, index) => {

                  const BenefitIcon =
                    benefit.icon || ShieldCheck;

                  return (
                    <article
                      className="service-benefit-card"
                      key={`${benefit.title}-${index}`}
                    >

                      <div className="service-benefit-icon">

                        <BenefitIcon
                          size={22}
                          strokeWidth={1.5}
                        />

                      </div>


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
      )}


      {/* =====================================================
          HOW WE WORK
      ====================================================== */}

      {service.process?.length > 0 && (
        <section className="service-process">

          <div className="service-container">

            <div className="service-process-header">

              <span className="service-section-label">
                How we work
              </span>

              <h2>
                A clear path from
                <br />
                <span>requirements to results.</span>
              </h2>

            </div>


            <div className="service-process-list">

              {service.process.map(
                (step, index) => (
                  <div
                    className="service-process-item"
                    key={`${step.title}-${index}`}
                  >

                    <div className="service-process-marker">
                      <span />
                    </div>


                    <div className="service-process-copy">

                      <h3>
                        {step.title}
                      </h3>

                      <p>
                        {step.text}
                      </p>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          FAQ
      ====================================================== */}

      {service.faqs?.length > 0 && (
        <section className="service-faq">

          <div className="service-container">

            <div className="service-faq-layout">

              <div className="service-faq-intro">

                <span className="service-section-label">
                  FAQ
                </span>

                <h2>
                  Questions about
                  <span> {service.title}?</span>
                </h2>

                <p>
                  Everything you need to know before
                  getting started.
                </p>

              </div>


              <div className="service-faq-list">

                {service.faqs.map(
                  (faq, index) => {

                    const isOpen =
                      openFaq === index;

                    return (
                      <div
                        className={`service-faq-item ${
                          isOpen ? "is-open" : ""
                        }`}
                        key={`${faq.question}-${index}`}
                      >

                        <button
                          type="button"
                          className="service-faq-trigger"
                          onClick={() =>
                            setOpenFaq(
                              isOpen ? null : index
                            )
                          }
                          aria-expanded={isOpen}
                        >

                          <span className="service-faq-question">
                            {faq.question}
                          </span>

                          <span className="service-faq-plus">
                            <ChevronDown size={18} />
                          </span>

                        </button>


                        <div className="service-faq-answer">

                          <div>

                            <p>
                              {faq.answer}
                            </p>

                          </div>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>

          </div>
        </section>
      )}


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      {service.cta && (
        <section className="service-final">

          <div className="service-final-grid" />

          <div className="service-final-glow" />

          <div className="service-container">

            <div className="service-final-inner">

              <span className="service-section-label">
                Let's work together
              </span>

              <h2>
                {service.cta.title}
              </h2>


              <p>
                {service.cta.text}
              </p>


              <Link
                to="/contact"
                className="service-button service-button-primary service-final-button"
              >
                {service.cta.button ||
                  "Talk to Nodeus"}
              </Link>

            </div>

          </div>

        </section>
      )}

    </main>
  );
};

export default ServiceDetail;