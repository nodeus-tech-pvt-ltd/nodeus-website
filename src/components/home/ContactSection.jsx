import { motion } from "framer-motion";
import "../../styles/home/ContactSection.css";
import {
  ArrowUpRight,
  Mail,
  MessageSquare,
  Building2,
} from "lucide-react";

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-content">
        <span className="section-eyebrow">LET'S WORK TOGETHER</span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Have a challenge?
          <br />
          <span>Let's build the right team for it.</span>
        </motion.h2>

        <p>
          Tell us what you're trying to achieve. We'll explore how the right
          people, processes, and capabilities can help you move forward.
        </p>

        <a href="mailto:hello@nodeus.tech" className="contact-email">
          hello@nodeus.tech
          <ArrowUpRight size={20} />
        </a>
      </div>

      <motion.div
        className="contact-form-wrapper"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Your name</label>
              <input
                id="name"
                type="text"
                placeholder="John Smith"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Work email</label>
              <input
                id="email"
                type="email"
                placeholder="john@company.com"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="company">Company</label>
            <div className="input-with-icon">
              <Building2 size={18} />
              <input
                id="company"
                type="text"
                placeholder="Your company name"
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="service">What can we help with?</label>

            <select id="service" defaultValue="">
              <option value="" disabled>
                Select a solution
              </option>
              <option value="customer-experience">
                Customer Experience
              </option>
              <option value="business-operations">
                Business Operations
              </option>
              <option value="technology">
                Technology & IT
              </option>
              <option value="data-ai">
                Data & AI
              </option>
              <option value="other">
                Something else
              </option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="message">Tell us about your challenge</label>

            <div className="textarea-with-icon">
              <MessageSquare size={18} />

              <textarea
                id="message"
                rows="5"
                placeholder="Tell us a little about what you need help with..."
              />
            </div>
          </div>

          <button type="submit" className="form-submit">
            Start a conversation
            <ArrowUpRight size={18} />
          </button>
        </form>
      </motion.div>
    </section>
  );
}

export default ContactSection;