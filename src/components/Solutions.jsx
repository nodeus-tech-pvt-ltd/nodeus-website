import { motion } from "framer-motion";
import {
  Headphones,
  BriefcaseBusiness,
  TrendingUp,
  Code2,
  Bot,
  Calculator,
  Palette,
  ArrowUpRight,
} from "lucide-react";

const solutions = [
  {
    number: "01",
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
      "Complaint Handling",
    ],
  },
  {
    number: "02",
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
      "Order Processing",
    ],
  },
  {
    number: "03",
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
      "Customer Onboarding",
    ],
  },
  {
    number: "04",
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
      "Technical Support",
    ],
  },
  {
    number: "05",
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
      "Collections Support",
    ],
  },
  {
    number: "07",
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

function Solutions() {
  return (
    <section className="solutions-section" id="solutions">
      <div className="solutions-header">
        <div>
          <span className="section-eyebrow">
            WHAT WE HELP YOU BUILD
          </span>

          <h2>
            The right people.
            <br />
            <span>The right capabilities.</span>
          </h2>
        </div>

        <p>
          From customer experience and business operations to technology,
          AI, finance, and creative services, we build dedicated teams
          around the way your business works.
        </p>
      </div>

      <div className="solutions-grid">
        {solutions.map((solution, index) => {
          const Icon = solution.icon;

          return (
            <motion.article
              className="solution-card"
              key={solution.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
            >
              <div className="solution-card-top">
                <span className="solution-number">
                  {solution.number}
                </span>

                <div className="solution-icon">
                  <Icon size={25} />
                </div>
              </div>

              <h3>{solution.title}</h3>

              <p className="solution-description">
                {solution.description}
              </p>

              <div className="solution-services">
                {solution.services.map((service) => (
                  <span key={service}>
                    {service}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="solution-link"
              >
                Explore solution
                <ArrowUpRight size={17} />
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default Solutions;