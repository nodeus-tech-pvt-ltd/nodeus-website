import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import solutionsData from "../../data/solutions/solutionsData";

function Solutions() {
  const solutions = Object.values(solutionsData);

  return (
    <main className="solutions-page">
      <section className="solutions-page-hero">
        <span className="section-eyebrow">
          OUR SOLUTIONS
        </span>

        <h1>
          Capabilities built
          <br />
          <span>around your business.</span>
        </h1>

        <p>
          From customer experience and business operations to technology,
          AI, finance, and creative services, we build dedicated capabilities
          around the way your business works.
        </p>
      </section>

      <section className="solutions-page-grid">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <motion.article
              className="solutions-page-card"
              key={solution.slug}
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
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="solutions-page-card-top">
                <span>
                  {solution.number}
                </span>

                <div className="solutions-page-icon">
                  <Icon size={25} />
                </div>
              </div>

              <h2>
                {solution.title}
              </h2>

              <p>
                {solution.description}
              </p>

              <div className="solutions-page-services">
                {solution.services.slice(0, 6).map((service) => (
                  <span key={service}>
                    {service}
                  </span>
                ))}
              </div>

              <Link
                to={`/solutions/${solution.slug}`}
                className="solution-link"
              >
                Explore solution
                <ArrowUpRight size={17} />
              </Link>
            </motion.article>
          );
        })}
      </section>
    </main>
  );
}

export default Solutions;