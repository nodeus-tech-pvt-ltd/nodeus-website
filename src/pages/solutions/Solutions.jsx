import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../../styles/pages/solutions.css";
import solutionsData from "../../data/solutions/solutionsData";

function Solutions() {
  const solutions = Object.values(solutionsData);

  return (
    <main className="solutions-page">

      {/* =========================================
          HERO
      ========================================= */}

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


      {/* =========================================
          SOLUTIONS GRID
      ========================================= */}

      <section className="solutions-page-grid">

        {solutions.map((solution, index) => {

          const Icon = solution.icon;

          return (

            <motion.div
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

              <Link
                to={`/solutions/${solution.slug}`}
                className="solutions-page-card"
              >

                {/* =================================
                    CARD TOP
                ================================= */}

                <div className="solutions-page-card-top">

                  <span>
                    {solution.number}
                  </span>

                  <div className="solutions-page-icon">
                    <Icon size={25} />
                  </div>

                </div>


                {/* =================================
                    CARD CONTENT
                ================================= */}

                <h2>
                  {solution.title}
                </h2>

                <p>
                  {solution.description}
                </p>


                {/* =================================
                    SERVICE TAGS
                ================================= */}

                <div className="solutions-page-services">

                  {solution.services
                    .slice(0, 6)
                    .map((service) => (

                      <span key={service}>
                        {service}
                      </span>

                    ))}

                </div>


                {/* =================================
                    EXPLORE LINK
                ================================= */}

                <span className="solution-link">

                  Explore solution

                  <ArrowUpRight size={17} />

                </span>

              </Link>

            </motion.div>

          );

        })}

      </section>

    </main>
  );
}

export default Solutions;