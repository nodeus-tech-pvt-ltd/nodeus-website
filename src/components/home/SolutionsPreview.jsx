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
  HeartHandshake,
  Users,
  Database,
  BriefcaseBusiness,
  ShoppingCart,
  LifeBuoy,
  Truck,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";


// ============================================================
// SOLUTIONS
// ============================================================

const solutions = [
  {
    // number: "01",

    slug: "customer-service",

    icon: Headphones,

    title: "Customer Service",

    description:
      "Reliable customer service that keeps your customers supported and satisfied.",

    services: [
      "Customer Service",
      "Customer Support",
      "Phone Support",
      "Email Support",
      "Chat Support",
      "Customer Care",
      "Order & Account Support",
      "Ticket Management",
    ],
  },


  {
    // number: "02",

    slug: "customer-success-retention",

    icon: HeartHandshake,

    title: "Customer Success & Retention",

    description:
      "Proactively engage customers, improve satisfaction, and increase long-term retention.",

    services: [
      "Customer Onboarding",
      "Customer Success",
      "Customer Retention",
      "At-risk Management",
      "Renewals Support",
      "Account Management",
      "Complaint & Escalation Management",
    ],
  },


  {
    // number: "03",

    slug: "sales-support-lead-management",

    icon: Users,

    title: "Sales Support & Lead Management",

    description:
      "Extend your sales team with dedicated support for lead management and revenue-generating activities.",

    services: [
      "Lead Generation",
      "Lead Qualification",
      "Business Development",
      "Appointment Setting",
      "Prospect Research",
      "CRM Management",
      "Pipeline Management",
    ],
  },


  {
    // number: "04",

    slug: "back-office-operations",

    icon: Database,

    title: "Back-Office Operations",

    description:
      "Streamline your day-to-day operations with reliable outsourced back-office support.",

    services: [
      "Data Entry",
      "Data Processing",
      "Data Verification",
      "CRM Administration",
      "Database Management",
      "Document Processing",
      "Records Management",
      "Reporting & Data Management",
      "Quality Assurance",
    ],
  },


  {
    // number: "05",

    slug: "virtual-assistant-administrative-support",

    icon: BriefcaseBusiness,

    title: "Virtual Assistant & Administrative Support",

    description:
      "Dedicated remote professionals to handle your administrative workload.",

    services: [
      "Virtual Assistance",
      "Executive Assistance",
      "Email & Inbox Management",
      "Calendar Management",
      "Appointment Scheduling",
      "Meeting Coordination",
      "Online Research",
      "Document Preparation",
      "General Administrative Support",
    ],
  },


  {
    // number: "06",

    slug: "ecommerce-support",

    icon: ShoppingCart,

    title: "E-commerce Support",

    description:
      "Deliver seamless customer and operational support throughout the e-commerce journey.",

    services: [
      "E-commerce Customer Service",
      "Order Management",
      "Order Tracking",
      "Returns & Refunds",
      "Product Listing Management",
      "Product Catalog Management",
      "Payment & Billing Support",
      "Post-Purchase Support",
      "Shopify Support",
    ],
  },


  {
    // number: "07",

    slug: "helpdesk-technical-support",

    icon: LifeBuoy,

    title: "Helpdesk & Technical Support",

    description:
      "First-line support that resolves issues quickly and keeps customers productive.",

    services: [
      "Helpdesk Support",
      "Ticket Management",
      "First-Level Technical Support",
      "Troubleshooting",
      "Knowledge Base Support",
    ],
  },


  {
    // number: "08",

    slug: "transportation-fleet-operations",

    icon: Truck,

    title: "Transportation & Fleet Operations",

    description:
      "Professional transportation and fleet support covering dispatch, freight coordination, driver support, compliance, and day-to-day fleet operations.",

    services: [
      "Truck Dispatcher",
      "Freight Dispatcher",
      "Dispatch Coordinator",
      "Load Planner",
      "Track & Trace Specialist",
      "Driver Support Coordinator",
      "Logistics Coordinator",
      "Carrier Setup Specialist",
      "Safety & Compliance Specialist",
      "DOT Compliance Specialist",
      "Driver Qualification Specialist",
      "Fleet Safety Coordinator",
    ],
  },
];


// ============================================================
// COMPONENT
// ============================================================

function SolutionsPreview() {

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [direction, setDirection] =
    useState(1);


  const activeSolution =
    solutions[activeIndex];


  const Icon =
    activeSolution.icon;


  // ==========================================================
  // NEXT SOLUTION
  // ==========================================================

  const showNext = () => {

    setDirection(1);

    setActiveIndex(
      (currentIndex) =>
        currentIndex === solutions.length - 1
          ? 0
          : currentIndex + 1
    );

  };


  // ==========================================================
  // PREVIOUS SOLUTION
  // ==========================================================

  const showPrevious = () => {

    setDirection(-1);

    setActiveIndex(
      (currentIndex) =>
        currentIndex === 0
          ? solutions.length - 1
          : currentIndex - 1
    );

  };


  // ==========================================================
  // SLIDE ANIMATION
  // ==========================================================

  const slideVariants = {

    enter: (direction) => ({

      x:
        direction > 0
          ? 80
          : -80,

      opacity: 0,

    }),


    center: {

      x: 0,

      opacity: 1,

    },


    exit: (direction) => ({

      x:
        direction > 0
          ? -80
          : 80,

      opacity: 0,

    }),

  };


  return (

    <section
      className="solutions-slider-section"
    >

      <div
        className="solutions-slider-container"
      >


        {/* ==================================================
            HEADER
        =================================================== */}

        <div
          className="solutions-slider-header"
        >

          <div>

            <span
              className="section-eyebrow"
            >

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

            From customer service and
            customer success to sales,
            back-office operations,
            e-commerce, technical
            support, and transportation
            operations, we build dedicated
            capabilities around your business.

          </p>

        </div>


        {/* ==================================================
            SLIDER
        =================================================== */}

        <div
          className="solutions-slider-wrapper"
        >


          <AnimatePresence
            mode="wait"
            custom={direction}
          >

            <motion.div

              key={
                activeSolution.slug
              }

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


              {/* ============================================
                  ENTIRE CARD IS CLICKABLE
              ============================================= */}

              <Link

                to={
                  `/solutions/${activeSolution.slug}`
                }

                className="solution-slider-card-link"

                aria-label={
                  `Explore ${activeSolution.title}`
                }

              >

                <article
                  className="solution-slider-card"
                >


                  {/* ========================================
                      LEFT SIDE
                  ========================================= */}

                  <div
                    className="solution-slider-left"
                  >


                    {/* NUMBER */}

                    <span
                      className="solution-slider-number"
                    >

                      {
                        activeSolution.number
                      }

                    </span>


                    {/* CONTENT */}

                    <div
                      className="solution-slider-content"
                    >


                      {/* TITLE */}

                      <h3>

                        {
                          activeSolution.title
                        }

                      </h3>


                      {/* DESCRIPTION */}

                      <p>

                        {
                          activeSolution.description
                        }

                      </p>


                      {/* SERVICES */}

                      <div
                        className="solution-slider-services"
                      >

                        {
                          activeSolution.services.map(
                            (service) => (

                              <span
                                key={service}
                              >

                                {
                                  service
                                }

                              </span>

                            )
                          )
                        }

                      </div>


                      {/* EXPLORE LINK */}

                      <span
                        className="solution-slider-link"
                      >

                        Explore solution

                        <ArrowUpRight
                          size={18}
                        />

                      </span>

                    </div>

                  </div>


                  {/* ========================================
                      RIGHT SIDE ICON
                  ========================================= */}

                  <div
                    className="solution-slider-right"
                  >

                    <div
                      className="solution-slider-icon"
                    >

                      <Icon
                        size={34}
                        strokeWidth={1.7}
                      />

                    </div>

                  </div>

                </article>

              </Link>

            </motion.div>

          </AnimatePresence>


          {/* =================================================
              CONTROLS
          ================================================== */}

          <div
            className="solution-slider-controls"
          >


            {/* COUNTER */}

            <div
              className="solution-slider-counter"
            >

              <strong>

                {
                  String(
                    activeIndex + 1
                  ).padStart(2, "0")
                }

              </strong>


              <span>

                /
                {" "}
                {
                  String(
                    solutions.length
                  ).padStart(2, "0")
                }

              </span>

            </div>


            {/* BUTTONS */}

            <div
              className="solution-slider-buttons"
            >

              <button

                type="button"

                onClick={
                  showPrevious
                }

                aria-label="Previous solution"

              >

                <ArrowLeft
                  size={19}
                />

              </button>


              <button

                type="button"

                onClick={
                  showNext
                }

                aria-label="Next solution"

              >

                <ArrowRight
                  size={19}
                />

              </button>

            </div>

          </div>

        </div>


        {/* ==================================================
            FOOTER
        =================================================== */}

        <div
          className="solutions-slider-footer"
        >

          <p>

            Explore our services and find
            the right capabilities to support
            and scale your business.

          </p>


          <Link

            to="/solutions"

            className="all-solutions-link"

          >

            Explore all solutions

            <ArrowUpRight
              size={18}
            />

          </Link>

        </div>

      </div>

    </section>

  );

}


export default SolutionsPreview;

