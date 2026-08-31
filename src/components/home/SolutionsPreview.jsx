// import { useState } from "react";

// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// import "../../styles/home/SolutionsPreview.css";

// import {
//   Headphones,
//   BriefcaseBusiness,
//   TrendingUp,
//   Code2,
//   Bot,
//   Calculator,
//   Palette,
//   ArrowUpRight,
//   ArrowLeft,
//   ArrowRight,
// } from "lucide-react";

// const solutions = [
//   {
//     // number: "01",
//     slug: "customer-experience",
//     icon: Headphones,
//     title: "Customer Experience & Support",
//     description:
//       "Build stronger customer relationships with dedicated teams handling support, success, retention, and every interaction across your customer journey.",
//     services: [
//       "Customer Support",
//       "Technical Support",
//       "Customer Success",
//       "Customer Retention",
//       "Omnichannel Support",
//     ],
//   },
//   {
//     // number: "02",
//     slug: "business-operations",
//     icon: BriefcaseBusiness,
//     title: "Business Operations & Back Office",
//     description:
//       "Extend your operations with reliable teams that handle essential processes and keep your business moving efficiently.",
//     services: [
//       "Data Entry",
//       "Data Processing",
//       "Virtual Assistant Services",
//       "Administrative Support",
//       "Document Processing",
//     ],
//   },
//   {
//     // number: "03",
//     slug: "sales-revenue",
//     icon: TrendingUp,
//     title: "Sales & Revenue Operations",
//     description:
//       "Create more opportunities and support your revenue engine with dedicated sales and business development teams.",
//     services: [
//       "Lead Generation",
//       "Lead Qualification",
//       "Appointment Setting",
//       "Outbound Calling",
//       "SDR Services",
//     ],
//   },
//   {
//     // number: "04",
//     slug: "technology-it",
//     icon: Code2,
//     title: "Technology & IT Services",
//     description:
//       "Extend your technical capabilities with skilled teams supporting your digital products, platforms, systems, and IT operations.",
//     services: [
//       "Web Development",
//       "Full-Stack Development",
//       "Mobile App Development",
//       "Website Maintenance",
//       "IT Help Desk Support",
//     ],
//   },
//   {
//     // number: "05",
//     slug: "ai-automation",
//     icon: Bot,
//     title: "AI & Automation",
//     description:
//       "Use intelligent systems and automation to improve efficiency, reduce repetitive work, and create better customer experiences.",
//     services: [
//       "AI Customer Support",
//       "AI Chatbot Support",
//       "Process Automation",
//       "Data Operations",
//       "AI-Assisted Workflows",
//     ],
//   },
//   {
//     // number: "06",
//     slug: "finance-accounting",
//     icon: Calculator,
//     title: "Finance & Accounting Operations",
//     description:
//       "Support your financial operations with reliable teams handling essential accounting and finance processes.",
//     services: [
//       "Bookkeeping Support",
//       "Accounts Payable",
//       "Accounts Receivable",
//       "Invoice Processing",
//       "Billing Support",
//     ],
//   },
//   {
//     // number: "07",
//     slug: "marketing-creative",
//     icon: Palette,
//     title: "Marketing & Creative Services",
//     description:
//       "Build your brand and grow your presence with creative and marketing support tailored to your business goals.",
//     services: [
//       "Digital Marketing",
//       "Graphic Design",
//       "Video Editing",
//       "Email Marketing",
//       "Marketing Operations",
//     ],
//   },
// ];

// function SolutionsPreview() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const activeSolution = solutions[activeIndex];
//   const Icon = activeSolution.icon;

//   const showNext = () => {
//     setDirection(1);

//     setActiveIndex((currentIndex) =>
//       currentIndex === solutions.length - 1
//         ? 0
//         : currentIndex + 1
//     );
//   };

//   const showPrevious = () => {
//     setDirection(-1);

//     setActiveIndex((currentIndex) =>
//       currentIndex === 0
//         ? solutions.length - 1
//         : currentIndex - 1
//     );
//   };

//   const slideVariants = {
//     enter: (direction) => ({
//       x: direction > 0 ? 80 : -80,
//       opacity: 0,
//     }),

//     center: {
//       x: 0,
//       opacity: 1,
//     },

//     exit: (direction) => ({
//       x: direction > 0 ? -80 : 80,
//       opacity: 0,
//     }),
//   };

//   return (
//     <section className="solutions-slider-section">
//       <div className="solutions-slider-container">

//         {/* HEADER */}
//         <div className="solutions-slider-header">
//           <div>
//             <span className="section-eyebrow">
//               WHAT WE HELP YOU BUILD
//             </span>

//             <h2>
//               The right people.
//               <br />
//               <span>The right capabilities.</span>
//             </h2>
//           </div>

//           <p>
//             From customer experience and business operations to
//             technology, AI, finance, and creative services, we build
//             dedicated capabilities around your business.
//           </p>
//         </div>

//         {/* SLIDER */}
//         <div className="solutions-slider-wrapper">

//           <AnimatePresence
//             mode="wait"
//             custom={direction}
//           >
//             <motion.div
//               key={activeSolution.slug}
//               className="solution-slider-motion"
//               custom={direction}
//               variants={slideVariants}
//               initial="enter"
//               animate="center"
//               exit="exit"
//               transition={{
//                 duration: 0.45,
//                 ease: "easeOut",
//               }}
//             >
//               {/* ENTIRE CARD IS CLICKABLE */}
//               <Link
//                 to={`/solutions/${activeSolution.slug}`}
//                 className="solution-slider-card-link"
//                 aria-label={`Explore ${activeSolution.title}`}
//               >
//                 <article className="solution-slider-card">

//                   {/* LEFT SIDE */}
//                   <div className="solution-slider-left">

//                     <span className="solution-slider-number">
//                       {activeSolution.number}
//                     </span>

//                     <div className="solution-slider-content">

//                       <h3>
//                         {activeSolution.title}
//                       </h3>

//                       <p>
//                         {activeSolution.description}
//                       </p>

//                       <div className="solution-slider-services">
//                         {activeSolution.services.map((service) => (
//                           <span key={service}>
//                             {service}
//                           </span>
//                         ))}
//                       </div>

//                       <span className="solution-slider-link">
//                         Explore solution
//                         <ArrowUpRight size={18} />
//                       </span>

//                     </div>
//                   </div>

//                   {/* RIGHT SIDE ICON */}
//                   <div className="solution-slider-right">
//                     <div className="solution-slider-icon">
//                       <Icon size={34} strokeWidth={1.7} />
//                     </div>

//                     <span className="solution-slider-arrow">
//                       <ArrowUpRight size={24} />
//                     </span>
//                   </div>

//                 </article>
//               </Link>
//             </motion.div>
//           </AnimatePresence>

//           {/* CONTROLS */}
//           <div className="solution-slider-controls">

//             <div className="solution-slider-counter">
//               <strong>
//                 {String(activeIndex + 1).padStart(2, "0")}
//               </strong>

//               <span>
//                 / {String(solutions.length).padStart(2, "0")}
//               </span>
//             </div>

//             <div className="solution-slider-buttons">

//               <button
//                 type="button"
//                 onClick={showPrevious}
//                 aria-label="Previous solution"
//               >
//                 <ArrowLeft size={19} />
//               </button>

//               <button
//                 type="button"
//                 onClick={showNext}
//                 aria-label="Next solution"
//               >
//                 <ArrowRight size={19} />
//               </button>

//             </div>

//           </div>
//         </div>

//         {/* FOOTER */}
//         <div className="solutions-slider-footer">

//           <p>
//             Explore all of our capabilities and find the right
//             solution for your business.
//           </p>

//           <Link
//             to="/solutions"
//             className="all-solutions-link"
//           >
//             Explore all solutions
//             <ArrowUpRight size={18} />
//           </Link>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default SolutionsPreview;



import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

import "../../styles/home/SolutionsPreview.css";

import {
  Headphones,
  UserCheck,
  BriefcaseBusiness,
  Megaphone,
  Share2,
  ShoppingCart,
  Bot,
  Truck,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

const solutions = [
  {
    // number: "01",
    slug: "customer-services",
    icon: Headphones,
    title: "Customer Services",
    description:
      "Deliver exceptional customer experiences with dedicated teams handling inquiries, support requests, and day-to-day customer interactions.",
    services: [
      "Customer Support",
      "Inbound Support",
      "Email Support",
      "Live Chat Support",
      "Omnichannel Support",
    ],
  },
  {
    // number: "02",
    slug: "customer-success",
    icon: UserCheck,
    title: "Customer Success",
    description:
      "Build lasting customer relationships with dedicated teams focused on engagement, retention, satisfaction, and long-term customer value.",
    services: [
      "Customer Onboarding",
      "Customer Engagement",
      "Retention Support",
      "Account Management",
      "Customer Experience",
    ],
  },
  {
    // number: "03",
    slug: "executive-assistant",
    icon: BriefcaseBusiness,
    title: "Executive Assistant",
    description:
      "Give your executives more time to focus on strategic priorities with reliable support for schedules, communication, research, and daily operations.",
    services: [
      "Calendar Management",
      "Email Management",
      "Meeting Coordination",
      "Research & Reporting",
      "Administrative Support",
    ],
  },
  {
    // number: "04",
    slug: "marketing-assistant",
    icon: Megaphone,
    title: "Marketing Assistant",
    description:
      "Extend your marketing team with skilled professionals who support campaigns, content, research, coordination, and everyday marketing operations.",
    services: [
      "Marketing Coordination",
      "Content Support",
      "Market Research",
      "Campaign Support",
      "Marketing Operations",
    ],
  },
  {
    // number: "05",
    slug: "social-media-manager",
    icon: Share2,
    title: "Social Media Manager",
    description:
      "Strengthen your digital presence with dedicated social media support covering content, community engagement, publishing, and performance monitoring.",
    services: [
      "Content Management",
      "Social Media Posting",
      "Community Management",
      "Content Scheduling",
      "Social Media Analytics",
    ],
  },
  {
    // number: "06",
    slug: "ecommerce-support",
    icon: ShoppingCart,
    title: "E-commerce Support",
    description:
      "Keep your online store running smoothly with dedicated teams supporting customers, orders, product operations, and day-to-day e-commerce workflows.",
    services: [
      "Order Management",
      "Customer Support",
      "Product Management",
      "Returns & Refunds",
      "E-commerce Operations",
    ],
  },
  {
    // number: "07",
    slug: "ai-transformation",
    icon: Bot,
    title: "AI Transformation",
    description:
      "Transform your business with practical AI solutions that automate repetitive work, improve workflows, and create smarter customer and operational experiences.",
    services: [
      "AI Automation",
      "AI Chatbots",
      "Workflow Automation",
      "AI Integration",
      "Process Optimization",
    ],
  },
  {
    // number: "08",
    slug: "truck-dispatching",
    icon: Truck,
    title: "Truck Dispatching",
    description:
      "Keep your fleet moving with professional dispatch support covering load coordination, driver communication, route planning, and carrier operations.",
    services: [
      "Load Booking",
      "Driver Communication",
      "Route Coordination",
      "Rate Negotiation",
      "Dispatch Operations",
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
    <section className="solutions-slider-section">
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
              <span>The right capabilities.</span>
            </h2>
          </div>

          <p>
            From customer services and executive support to
            marketing, e-commerce, AI transformation, and
            transportation operations, we build dedicated
            capabilities around your business.
          </p>
        </div>

        {/* SLIDER */}
        <div className="solutions-slider-wrapper">

          <AnimatePresence
            mode="wait"
            custom={direction}
          >
            <motion.div
              key={activeSolution.slug}
              className="solution-slider-motion"
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
              {/* ENTIRE CARD IS CLICKABLE */}
              <Link
                to={`/solutions/${activeSolution.slug}`}
                className="solution-slider-card-link"
                aria-label={`Explore ${activeSolution.title}`}
              >
                <article className="solution-slider-card">

                  {/* LEFT SIDE */}
                  <div className="solution-slider-left">

                    <span className="solution-slider-number">
                      {activeSolution.number}
                    </span>

                    <div className="solution-slider-content">

                      <h3>
                        {activeSolution.title}
                      </h3>

                      <p>
                        {activeSolution.description}
                      </p>

                      <div className="solution-slider-services">
                        {activeSolution.services.map((service) => (
                          <span key={service}>
                            {service}
                          </span>
                        ))}
                      </div>

                      <span className="solution-slider-link">
                        Explore solution
                        <ArrowUpRight size={18} />
                      </span>

                    </div>
                  </div>

                  {/* RIGHT SIDE ICON */}
                  <div className="solution-slider-right">
                    <div className="solution-slider-icon">
                      <Icon size={34} strokeWidth={1.7} />
                    </div>

                    {/* <span className="solution-slider-arrow">
                      <ArrowUpRight size={24} />
                    </span> */}
                  </div>

                </article>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* CONTROLS */}
          <div className="solution-slider-controls">

            <div className="solution-slider-counter">
              <strong>
                {String(activeIndex + 1).padStart(2, "0")}
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

        {/* FOOTER */}
        <div className="solutions-slider-footer">

          <p>
            Explore our services and find the right capabilities
            to support and scale your business.
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