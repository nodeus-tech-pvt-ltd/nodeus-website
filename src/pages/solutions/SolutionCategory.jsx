import { motion } from "framer-motion";
import "../../styles/pages/SolutionCategory.css";

import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import solutionsData from "../../data/solutions/solutionsData";
import AnimatedPage from "../../components/shared/AnimatedPage";

const createSlug = (service) => {
  return service
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
};

function SolutionCategory() {
  const { category } = useParams();

  const solution = solutionsData[category];

  if (!solution) {
    return (
      <main className="not-found-page">
        <h1>Solution not found</h1>

        <Link to="/solutions">
          Back to Solutions
        </Link>
      </main>
    );
  }

  const Icon = solution.icon;

  return (
    <AnimatedPage>
    <main className="solution-category-page">

      {/* HERO */}

      <section className="solution-category-hero">

        <Link
          to="/solutions"
          className="back-to-solutions"
        >
          <ArrowLeft size={17} />
          All Solutions
        </Link>

        <div className="solution-category-hero-content">

          <div>
            <span className="section-eyebrow">
              SOLUTION {solution.number}
            </span>

            <h1>
              {solution.title}
            </h1>

            <p>
              {solution.description}
            </p>

            <a
              href="#contact"
              className="category-cta"
            >
              Talk to our team
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="category-hero-icon">
            <Icon size={100} strokeWidth={1} />
          </div>

        </div>
      </section>

      {/* SERVICES */}

      <section className="category-services-section">

        <div className="category-section-heading">
          <span className="section-eyebrow">
            WHAT WE CAN HELP WITH
          </span>

          <h2>
            Capabilities for
            <br />
            <span>your operation.</span>
          </h2>
        </div>

        <div className="category-services-grid">

          {solution.services.map((service, index) => (
            <motion.a
                href={`/services/${createSlug(service)}`}
                className="category-service-card"
                key={service}
                initial={{
                    opacity: 0,
                    y: 25,
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
                    duration: 0.4,
                    delay: index * 0.05,
                }}
            >
              <CheckCircle2 size={20} />

              <h3>
                {service}
              </h3>

              <ArrowUpRight
                className="category-service-arrow"
                size={18}
              />
            </motion.a>
          ))}

        </div>
      </section>

      {/* CTA */}

      <section
        className="category-bottom-cta"
        id="contact"
      >
        <span className="section-eyebrow">
          LET'S BUILD TOGETHER
        </span>

        <h2>
          Need help building
          <br />
          <span>your operation?</span>
        </h2>

        <a
          href="mailto:hello@nodeus.tech"
          className="category-cta"
        >
          Start a conversation
          <ArrowUpRight size={18} />
        </a>
      </section>

    </main>
    </AnimatedPage>
  );
}

export default SolutionCategory;