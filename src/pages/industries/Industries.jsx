import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

import industries from "../../data/industries/industriesData";
import AnimatedPage from "../../components/shared/AnimatedPage";

function Industries() {
  return (
    <AnimatedPage>
      <main className="industries-page">

        {/* HERO */}

        <section className="industries-page-hero">
          <span className="section-eyebrow">
            INDUSTRIES WE SUPPORT
          </span>

          <h1>
            Built around your industry.
            <br />
            <span>Designed around your goals.</span>
          </h1>

          <p>
            Every industry has different customers, workflows, challenges,
            and expectations. Nodeus builds dedicated teams and operational
            capabilities that adapt to the way your business works.
          </p>
        </section>


        {/* INDUSTRIES GRID */}

        <section className="industries-page-grid">

          {industries.map((industry) => {
            const Icon = industry.icon;

            return (
              <motion.article
                className="industry-page-card"
                key={industry.slug}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.55,
                }}
              >

                <div className="industry-page-card-top">

                  <div className="industry-page-icon">
                    <Icon size={25} />
                  </div>

                </div>

                <h2>
                  {industry.title}
                </h2>

                <p>
                  Dedicated people, processes, and operational support
                  designed around the needs of your industry.
                </p>

                <Link
                  to={`/industries/${industry.slug}`}
                  className="industry-page-link"
                >
                  Explore industry

                  <ArrowUpRight size={17} />
                </Link>

              </motion.article>
            );
          })}

        </section>

      </main>
    </AnimatedPage>
  );
}

export default Industries;