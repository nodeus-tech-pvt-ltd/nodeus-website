import { motion } from "framer-motion";
import { ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";


import { Link } from "react-router-dom";
import caseStudies from "../../data/caseStudies/caseStudiesData";

import "../../styles/home/ProofSection.css";

const testimonials = [
  {
    quote:
      "Nodeus became an extension of our team. Their people understood our processes, adapted quickly, and helped us maintain a consistent customer experience.",
    name: "Sarah Mitchell",
    role: "VP Customer Experience",
    company: "Global SaaS",
  },
  {
    quote:
      "The flexibility and ownership from the Nodeus team made it easier for us to scale our operations while staying focused on our core business.",
    name: "Daniel Brooks",
    role: "Operations Director",
    company: "Commerce Inc.",
  },
  {
    quote:
      "Our response times improved significantly after partnering with Nodeus. Their team integrated seamlessly with our internal processes.",
    name: "Emma Wilson",
    role: "Customer Success Manager",
    company: "CloudTech",
  },
  {
    quote:
      "Nodeus helped us expand internationally without increasing operational complexity. Communication has been excellent from day one.",
    name: "Michael Carter",
    role: "Head of Operations",
    company: "FinEdge",
  },
  {
    quote:
      "Their specialists quickly adapted to our workflows and consistently delivered outstanding customer experiences.",
    name: "Olivia Bennett",
    role: "Support Lead",
    company: "RetailOne",
  },
  {
    quote:
      "Working with Nodeus allowed our internal team to focus on product innovation while they handled customer support flawlessly.",
    name: "James Foster",
    role: "Founder",
    company: "GrowthLab",
  },
  {
    quote:
      "Quality assurance and reporting exceeded our expectations. The transparency throughout the engagement was outstanding.",
    name: "Sophia Harris",
    role: "Operations Manager",
    company: "BrightScale",
  },
  {
    quote:
      "Nodeus built a dedicated team that felt like an in-house department. Their commitment to quality has been exceptional.",
    name: "Ethan Roberts",
    role: "CEO",
    company: "NextWave",
  },
  {
    quote:
      "From onboarding to daily operations, everything was structured, efficient, and professionally managed.",
    name: "Grace Cooper",
    role: "Business Director",
    company: "Prime Digital",
  },
  {
    quote:
      "Their scalable support model helped us grow faster while maintaining excellent service quality across every channel.",
    name: "Noah Adams",
    role: "Head of Customer Operations",
    company: "Future Commerce",
  },
];

const featuredCaseStudies = caseStudies
  .filter((study) => study.featured)
  .slice(0, 2);

function ProofSection() {
  return (
    <section className="proof-section" id="case-studies">
      <div className="proof-header">
        <div>
          <span className="section-eyebrow">PROOF IN PARTNERSHIP</span>

          <h2>
            Built for your
            <br />
            <span>success.</span>
          </h2>
        </div>

        <p>
          The best measure of our work is the success of the businesses and
          teams we support.
        </p>
      </div>

      <section className="testimonials-wrapper">

    <div className="testimonial-top">

        <div>

            <span className="section-eyebrow">
                CLIENT TESTIMONIALS
            </span>

            <h3>
                Trusted by teams
                <br />
                <span>that expect more.</span>
            </h3>

        </div>

        <p>
            Every partnership is built on transparency,
            consistency and measurable results.
            Here are a few examples of how organizations
            describe working with Nodeus.
        </p>

    </div>

    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={24}
      slidesPerView={1}
      loop
      grabCursor
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
      className="testimonials-slider"
    >

        {testimonials.map((testimonial, index) => (

            <SwiperSlide key={index}>

                <motion.article
                    className="testimonial-card"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: .45,
                        delay: index * .05,
                    }}
                >

                    <div className="testimonial-stars">
                        ★★★★★
                    </div>

                    <p className="testimonial-quote">
                        "{testimonial.quote}"
                    </p>

                    <div className="testimonial-author">

                        <div className="author-avatar">
                            {testimonial.name.charAt(0)}
                        </div>

                        <div>

                            <strong>
                                {testimonial.name}
                            </strong>

                            <span>
                                {testimonial.role}
                            </span>

                            <small>
                                {testimonial.company}
                            </small>

                        </div>

                    </div>

                </motion.article>

            </SwiperSlide>

        ))}

    </Swiper>

</section>

      {/* <div className="case-studies-header">
        <div>
          <span className="section-eyebrow">CASE STUDIES</span>

          <h3>
            Real challenges.
            <br />
            <span>Real solutions.</span>
          </h3>
        </div>

        <a href="#contact" className="text-link">
          Discuss your challenge
          <ArrowUpRight size={18} />
        </a>
      </div>

      <div className="case-studies-grid">
        {featuredCaseStudies.map((caseStudy, index) => (
          <motion.article
            className="featured-home-case-study"
            key={caseStudy.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
          >
            <div className="home-case-top">

              <span className="home-case-category">
                {caseStudy.category}
              </span>

              <span className="home-case-readtime">
                {caseStudy.readTime}
              </span>

            </div>

            <h4>{caseStudy.title}</h4>

            <p>{caseStudy.excerpt}</p>

            <div className="home-case-meta">

              {caseStudy.industry && (
                <span>{caseStudy.industry}</span>
              )}

              {caseStudy.client && (
                <span>{caseStudy.client}</span>
              )}

            </div>

            <div className="home-case-result">

              <CheckCircle2 size={18} />

              <span>{caseStudy.result}</span>

            </div>

            <Link
              to={`/resources/case-studies/${caseStudy.slug}`}
              className="home-case-link"
            >
              Read Case Study

              <ArrowUpRight size={18} />
            </Link>

          </motion.article>
        ))}
      </div> */}
    </section>
  );
}

export default ProofSection;