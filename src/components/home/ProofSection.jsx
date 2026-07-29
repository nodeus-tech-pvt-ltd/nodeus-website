import { motion } from "framer-motion";
import { ArrowUpRight, Quote, CheckCircle2 } from "lucide-react";
import "../../styles/home/ProofSection.css";

const testimonials = [
  {
    quote:
      "Nodeus became an extension of our team. Their people understood our processes, adapted quickly, and helped us maintain a consistent customer experience.",
    name: "Client Name",
    role: "Client Role",
    company: "Company Name",
  },
  {
    quote:
      "The flexibility and ownership from the Nodeus team made it easier for us to scale our operations while staying focused on our core business.",
    name: "Client Name",
    role: "Client Role",
    company: "Company Name",
  },
];

const caseStudies = [
  {
    category: "Customer Experience",
    title: "Building a dedicated support operation",
    description:
      "A growing business needed a reliable team to manage customer interactions and support its expanding operations.",
    outcomes: [
      "Dedicated team structure",
      "Defined processes and quality standards",
      "Ongoing performance management",
    ],
  },
  {
    category: "Business Operations",
    title: "Extending operational capacity",
    description:
      "A business partnered with Nodeus to build additional operational capabilities without expanding its internal management complexity.",
    outcomes: [
      "Dedicated operational resources",
      "Structured workflows",
      "Scalable team model",
    ],
  },
];

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

      <div className="testimonials-wrapper">
        <div className="testimonial-heading">
          <Quote size={38} />

          <h3>
            Don't just take
            <br />
            our word for it.
          </h3>
        </div>

        <div className="testimonials-list">
          {testimonials.map((testimonial, index) => (
            <motion.article
              className="testimonial-card"
              key={index}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
            >
              <p className="testimonial-quote">
                “{testimonial.quote}”
              </p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.charAt(0)}
                </div>

                <div>
                  <strong>{testimonial.name}</strong>
                  <span>
                    {testimonial.role} · {testimonial.company}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div className="case-studies-header">
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
        {caseStudies.map((caseStudy, index) => (
          <motion.article
            className="case-study-card"
            key={caseStudy.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.12,
            }}
          >
            <span className="case-study-category">
              {caseStudy.category}
            </span>

            <h4>{caseStudy.title}</h4>

            <p>{caseStudy.description}</p>

            <div className="case-study-outcomes">
              {caseStudy.outcomes.map((outcome) => (
                <div key={outcome}>
                  <CheckCircle2 size={17} />
                  <span>{outcome}</span>
                </div>
              ))}
            </div>

            <a href="#contact" className="case-study-link">
              View case study
              <ArrowUpRight size={17} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default ProofSection;