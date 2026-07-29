import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import "../../styles/home/SolutionsPreview.css";

import {
  Headphones,
  BriefcaseBusiness,
  TrendingUp,
  Code2,
  Bot,
  Calculator,
  Palette,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    slug: "customer-experience",
    icon: Headphones,
    title: "Customer Experience & Support",
    description:
      "Build stronger customer relationships with dedicated teams handling support, success, retention, and every interaction across your customer journey.",
    services: [
      "Customer Support",
      "Technical Support",
      "Customer Success",
      "Customer Retention",
      "Omnichannel Support",
    ],
  },

  {
    number: "02",
    slug: "business-operations",
    icon: BriefcaseBusiness,
    title: "Business Operations & Back Office",
    description:
      "Extend your operations with reliable teams that handle essential processes and keep your business moving efficiently.",
    services: [
      "Data Entry",
      "Data Processing",
      "Virtual Assistant Services",
      "Administrative Support",
      "Document Processing",
    ],
  },

  {
    number: "03",
    slug: "sales-revenue",
    icon: TrendingUp,
    title: "Sales & Revenue Operations",
    description:
      "Create more opportunities and support your revenue engine with dedicated sales and business development teams.",
    services: [
      "Lead Generation",
      "Lead Qualification",
      "Appointment Setting",
      "Outbound Calling",
      "SDR Services",
    ],
  },

  {
    number: "04",
    slug: "technology-it",
    icon: Code2,
    title: "Technology & IT Services",
    description:
      "Extend your technical capabilities with skilled teams supporting your digital products, platforms, systems, and IT operations.",
    services: [
      "Web Development",
      "Full-Stack Development",
      "Mobile App Development",
      "Website Maintenance",
      "IT Help Desk Support",
    ],
  },

  {
    number: "05",
    slug: "ai-automation",
    icon: Bot,
    title: "AI & Automation",
    description:
      "Use intelligent systems and automation to improve efficiency, reduce repetitive work, and create better customer experiences.",
    services: [
      "AI Customer Support",
      "AI Chatbot Support",
      "Process Automation",
      "Data Operations",
      "AI-Assisted Workflows",
    ],
  },

  {
    number: "06",
    slug: "finance-accounting",
    icon: Calculator,
    title: "Finance & Accounting Operations",
    description:
      "Support your financial operations with reliable teams handling essential accounting and finance processes.",
    services: [
      "Bookkeeping Support",
      "Accounts Payable",
      "Accounts Receivable",
      "Invoice Processing",
      "Billing Support",
    ],
  },

  {
    number: "07",
    slug: "marketing-creative",
    icon: Palette,
    title: "Marketing & Creative Services",
    description:
      "Build your brand and grow your presence with creative and marketing support tailored to your business goals.",
    services: [
      "Digital Marketing",
      "Graphic Design",
      "Video Editing",
      "Email Marketing",
      "Marketing Operations",
    ],
  },
];

function SolutionsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeSolution = solutions[activeIndex];
  const Icon = activeSolution.icon;

  const showNext = () => {
    setDirection(1);

    setActiveIndex((currentIndex) =>
      currentIndex === solutions.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  const showPrevious = () => {
    setDirection(-1);

    setActiveIndex((currentIndex) =>
      currentIndex === 0
        ? solutions.length - 1
        : currentIndex - 1
    );
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section
      className="solutions-slider-section"
      id="solutions"
    >
      <div className="solutions-slider-container">

        {/* HEADER */}

        <div className="solutions-slider-header">

          <div>
            <span className="section-eyebrow">
              WHAT WE HELP YOU BUILD
            </span>

            <h2>
              The right people.
              <br />

              <span>
                The right capabilities.
              </span>
            </h2>
          </div>

          <p>
            From customer experience and business
            operations to technology, AI, finance,
            and creative services, we build dedicated
            capabilities around your business.
          </p>

        </div>


        {/* SLIDER */}

        <div className="solutions-slider-wrapper">

          <AnimatePresence
            mode="wait"
            custom={direction}
          >

            <motion.article
              key={activeSolution.slug}
              className="solution-slider-card"

              custom={direction}

              variants={slideVariants}

              initial="enter"

              animate="center"

              exit="exit"

              transition={{
                duration: 0.45,
                ease: "easeOut",
              }}
            >

              {/* CARD TOP */}

              <div className="solution-slider-top">

                <span className="solution-slider-number">
                  {activeSolution.number}
                </span>

                <div className="solution-slider-icon">
                  <Icon size={30} />
                </div>

              </div>


              {/* CARD CONTENT */}

              <div className="solution-slider-content">

                <h3>
                  {activeSolution.title}
                </h3>

                <p>
                  {activeSolution.description}
                </p>

                <div className="solution-slider-services">

                  {activeSolution.services.map(
                    (service) => (

                      <span key={service}>
                        {service}
                      </span>

                    )
                  )}

                </div>

                <Link
                  to={`/solutions/${activeSolution.slug}`}
                  className="solution-slider-link"
                >
                  Explore solution

                  <ArrowUpRight size={18} />
                </Link>

              </div>

            </motion.article>

          </AnimatePresence>


          {/* CONTROLS */}

          <div className="solution-slider-controls">

            <div className="solution-slider-counter">

              <strong>
                {activeSolution.number}
              </strong>

              <span>
                / {String(solutions.length).padStart(2, "0")}
              </span>

            </div>


            <div className="solution-slider-buttons">

              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous solution"
              >
                <ArrowLeft size={19} />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="Next solution"
              >
                <ArrowRight size={19} />
              </button>

            </div>

          </div>

        </div>


        {/* VIEW ALL */}

        <div className="solutions-slider-footer">

          <p>
            Explore all of our capabilities
            and find the right solution
            for your business.
          </p>

          <Link
            to="/solutions"
            className="all-solutions-link"
          >
            Explore all solutions

            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export default SolutionsPreview;