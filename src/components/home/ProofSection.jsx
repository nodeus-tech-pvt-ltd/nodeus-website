import { motion } from "framer-motion";
import { Quote } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "../../styles/home/ProofSection.css";


/* =================================
   TESTIMONIALS
================================= */

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


function ProofSection() {
  return (
    <section className="proof-section">

      {/* =================================
          SECTION HEADER
      ================================= */}

      <div className="proof-header">

        <div>

          <span className="section-eyebrow">
            PROOF IN PARTNERSHIP
          </span>

          <h2>
            Built for your
            <br />
            <span>success.</span>
          </h2>

        </div>

        <p>
          The best measure of our work is the success of the businesses
          and teams we support.
        </p>

      </div>


      {/* =================================
          TESTIMONIALS
      ================================= */}

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
            Every partnership is built on transparency, consistency
            and measurable results.
          </p>

        </div>


        <Swiper
          modules={[Autoplay, Pagination]}
          className="testimonials-slider"
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          grabCursor={true}
          speed={700}
          autoplay={{
            delay: 4000,
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
        >

          {testimonials.map((testimonial) => (

            <SwiperSlide key={testimonial.name}>

              <motion.article
                className="testimonial-card"

                initial={{
                  opacity: 0,
                  y: 20,
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
                  duration: 0.45,
                }}
              >

                {/* Rating */}

                <div className="testimonial-stars">
                  ★★★★★
                </div>


                {/* Quote Icon */}

                <div className="testimonial-quote-icon">
                  <Quote size={19} />
                </div>


                {/* Quote */}

                <p className="testimonial-quote">
                  “{testimonial.quote}”
                </p>


                {/* Author */}

                <div className="testimonial-author">

                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>

                  <div className="testimonial-author-info">

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

    </section>
  );
}


export default ProofSection;