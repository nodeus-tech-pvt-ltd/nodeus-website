import { motion } from "framer-motion";
import {
  Search,
  Users,
  GraduationCap,
  Settings,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover",
    description:
      "We understand your business, goals, challenges, and the exact capabilities your operation needs.",
  },
  {
    number: "02",
    icon: Users,
    title: "Build",
    description:
      "We recruit and assemble the right people to create a dedicated team aligned with your requirements.",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Enable",
    description:
      "Your team receives the training, tools, processes, and knowledge needed to represent your business effectively.",
  },
  {
    number: "04",
    icon: Settings,
    title: "Manage",
    description:
      "We manage the day-to-day operation, monitor performance, maintain quality, and continuously improve processes.",
  },
  {
    number: "05",
    icon: TrendingUp,
    title: "Scale",
    description:
      "As your business grows, your dedicated operation can grow with you — without the complexity of building everything in-house.",
  },
];

function HowWeWork() {
  return (
    <section
      className="how-we-work-section"
      id="how-we-work"
    >
      <div className="how-we-work-header">
        <div>
          <span className="section-eyebrow">
            HOW WE WORK
          </span>

          <h2>
            From idea
            <br />
            <span>to operation.</span>
          </h2>
        </div>

        <p>
          We take care of the people, processes, and operations behind
          the work — so you can focus on growing your business.
        </p>
      </div>

      <div className="process-wrapper">

        {/* Animated process line */}
        <motion.div
          className="process-line"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
        />

        <div className="process-steps">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.article
                className="process-step"
                key={step.number}
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
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
              >
                <div className="process-node">

                  <span className="process-number">
                    {step.number}
                  </span>

                  <div className="process-icon">
                    <Icon size={24} />
                  </div>

                </div>

                <div className="process-content">

                  <div className="process-step-label">
                    STEP {step.number}
                  </div>

                  <h3>
                    {step.title}
                  </h3>

                  <p>
                    {step.description}
                  </p>

                </div>

                {index < steps.length - 1 && (
                  <ArrowRight
                    className="process-arrow"
                    size={20}
                  />
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HowWeWork;