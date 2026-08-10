import { motion } from "framer-motion";
import "../../styles/home/TrustStrip.css";
import {
  Users,
  Globe2,
  TrendingUp,
  Target,
} from "lucide-react";

const capabilities = [
  {
    icon: Users,
    // number: "01",
    title: "Dedicated Teams",
    text: "Build a team designed around your business needs.",
  },
  {
    icon: Globe2,
    // number: "02",
    title: "Global Delivery",
    text: "Access skilled talent and operational support across borders.",
  },
  {
    icon: TrendingUp,
    // number: "03",
    title: "Scalable Operations",
    text: "Grow your team and capabilities as your business evolves.",
  },
  {
    icon: Target,
    // number: "04",
    title: "Performance Focused",
    text: "Every process is built around measurable business outcomes.",
  },
];

function TrustStrip() {
  return (
    <section id="trust-strip" className="trust-strip">

      <div className="trust-grid">

        {/* LEFT SIDE */}

        <div className="trust-intro">

          <span className="section-eyebrow">
            THE NODEUS ADVANTAGE
          </span>

          <h2>
            Your goals.
            <br />
            <span>Our people.</span>
          </h2>

          <p>
            We help businesses build the people,
            processes, and capabilities needed to
            move forward.
          </p>

        </div>

        {/* RIGHT SIDE */}

        <div className="capabilities-grid">

          {capabilities.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.article
                key={item.number}
                className="capability-card"
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                <div className="capability-top">

                  <span>
                    {item.number}
                  </span>

                  <Icon />

                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </motion.article>
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default TrustStrip;