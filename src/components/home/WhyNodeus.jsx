import { motion } from "framer-motion";
import "../../styles/home/WhyNodeus.css";
import { Link } from "react-router-dom";

import {
  Handshake,
  UserRoundCheck,
  Settings2,
  Expand,
  BarChart3,
  WalletCards,
  ArrowUpRight,
} from "lucide-react";

const advantages = [
  {
    number: "01",
    icon: Handshake,
    title: "A true extension of your team",
    text: "We work as an extension of your organization, aligned with your goals, processes, and standards.",
  },
  {
    number: "02",
    icon: UserRoundCheck,
    title: "People chosen for your needs",
    text: "We help build teams around the skills, experience, and capabilities your operation requires.",
  },
  {
    number: "03",
    icon: Settings2,
    title: "Managed operations",
    text: "We take care of the day-to-day people and operational management so you can focus on your core business.",
  },
  {
    number: "04",
    icon: Expand,
    title: "Built to scale",
    text: "Start with the capabilities you need today and expand your operation as your business grows.",
  },
  {
    number: "05",
    icon: BarChart3,
    title: "Performance visibility",
    text: "Clear processes, quality standards, and performance tracking help keep your operation moving forward.",
  },
  {
    number: "06",
    icon: WalletCards,
    title: "Operational efficiency",
    text: "Access dedicated capabilities without the complexity of building and managing every function internally.",
  },
];

function WhyNodeus() {
  return (
    <section
      className="why-nodeus-section"
      id="why-nodeus"
    >
      <div className="why-nodeus-layout">

        {/* LEFT CONTENT */}
        <div className="why-nodeus-heading">
          <span className="section-eyebrow">
            WHY NODEUS
          </span>

          <h2>
            More than
            <br />
            <span>outsourcing.</span>
          </h2>

          <p>
            The right partner does more than complete tasks. They understand
            your business, take ownership, and grow with you.
          </p>

          {/* <a
            href="#contact"
            className="why-nodeus-link"
          >
            Let's build something together
            <ArrowUpRight size={18} />
          </a> */}

          <Link
            to="/contact"
            className="why-nodeus-link"
          >
            Let's build something together
          </Link>

          <div className="why-nodeus-statement">
            {/* <span>01</span> */}

            <p>
              Your goals.
              <br />
              Our capabilities.
              <br />
              <strong>One operation.</strong>
            </p>
          </div>
        </div>

        {/* RIGHT ADVANTAGES */}
        <div className="advantages-grid">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;

            return (
              <motion.article
                className="advantage-card"
                key={advantage.title}
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
                  duration: 0.6,
                  delay: index * 0.08,
                }}
              >
                <div className="advantage-card-top">
                  <span className="advantage-number">
                    {advantage.number}
                  </span>

                  <div className="advantage-icon">
                    <Icon size={22} />
                  </div>
                </div>

                <h3>
                  {advantage.title}
                </h3>

                <p>
                  {advantage.text}
                </p>

                <div className="advantage-arrow">
                  <ArrowUpRight size={18} />
                </div>
              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyNodeus;