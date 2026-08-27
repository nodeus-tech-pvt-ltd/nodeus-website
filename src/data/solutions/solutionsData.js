// import {
//   Headphones,
//   BriefcaseBusiness,
//   TrendingUp,
//   Code2,
//   Bot,
//   Calculator,
//   Palette,
// } from "lucide-react";

// const solutionsData = {
//   "customer-experience": {
//     slug: "customer-experience",
//     // number: "01",
//     icon: Headphones,
//     title: "Customer Experience & Support",
//     shortTitle: "Customer Experience",
//     description:
//       "Build stronger customer relationships with dedicated teams handling support, success, retention, and every interaction across your customer journey.",

//     services: [
//       "Customer Support",
//       "Technical Support",
//       "IT Help Desk",
//       "Live Chat Support",
//       "Email Support",
//       "Phone Support",
//       "Social Media Support",
//       "Omnichannel Support",
//       "Customer Success",
//       "Customer Retention",
//       "Complaint Handling",
//       "Escalation Management",
//       "Content Moderation",
//     ],
//   },

//   "business-operations": {
//     slug: "business-operations",
//     // number: "02",
//     icon: BriefcaseBusiness,
//     title: "Business Operations & Back Office",
//     shortTitle: "Business Operations",
//     description:
//       "Extend your operations with reliable teams that handle essential processes and keep your business moving efficiently.",

//     services: [
//       "Data Entry",
//       "Data Processing",
//       "Data Verification",
//       "Data Cleansing",
//       "Virtual Assistant Services",
//       "Administrative Support",

//       "Email Management",
//       "Calendar Management",
//       "Appointment Scheduling",
//       "Order Processing",
//       "Returns Processing",
//       "Document Processing",
//       "Document Management",
//       "Invoice Processing",
//       "Billing Support",
//       "Transcription",
//     ],
//   },

//   "sales-revenue": {
//     slug: "sales-revenue",
//     // number: "03",
//     icon: TrendingUp,
//     title: "Sales & Revenue Operations",
//     shortTitle: "Sales & Revenue",
//     description:
//       "Create more opportunities and support your revenue engine with dedicated sales and business development teams.",

//     services: [
//       "Lead Generation",
//       "Lead Qualification",
//       "Appointment Setting",
//       "Outbound Calling",
//       "Inbound Sales Support",
//       "Inside Sales",
//       "SDR Services",
//       "Customer Onboarding",
//       "Cross-Selling & Upselling",
//     ],
//   },

//   "technology-it": {
//     slug: "technology-it",
//     // number: "04",
//     icon: Code2,
//     title: "Technology & IT Services",
//     shortTitle: "Technology & IT",
//     description:
//       "Extend your technical capabilities with skilled teams supporting your digital products, platforms, systems, and IT operations.",

//     services: [
//       "Web Development",
//       "Website Maintenance",
//       "Full-Stack Development",
//       "Mobile App Development",
//     ],
//   },

//   "ai-automation": {
//     slug: "ai-automation",
//     // number: "05",
//     icon: Bot,
//     title: "AI & Automation",
//     shortTitle: "AI & Automation",
//     description:
//       "Use intelligent systems and automation to improve efficiency, reduce repetitive work, and create better customer experiences.",

//     services: [
//       "AI Customer Support",
//       "AI Chatbot Support",
//       "Process Automation",
//       "AI-Assisted Workflows",
//       "Data Operations",
//     ],
//   },

//   "finance-accounting": {
//     slug: "finance-accounting",
//     // number: "06",
//     icon: Calculator,
//     title: "Finance & Accounting Operations",
//     shortTitle: "Finance & Accounting",
//     description:
//       "Support your financial operations with reliable teams handling essential accounting and finance processes.",

//     services: [
//       "Bookkeeping Support",
//       "Accounts Payable",
//       "Accounts Receivable",
//       "Invoice Processing",
//       "Billing Support",
//       "Collections Support",
//     ],
//   },

//   "marketing-creative": {
//     slug: "marketing-creative",
//     // number: "07",
//     icon: Palette,
//     title: "Marketing & Creative Services",
//     shortTitle: "Marketing & Creative",
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
// };

// export default solutionsData;



// ============================================================
// NODEUS — SOLUTIONS DATA
// Main Services / Solutions Cards
// ============================================================

import {
  Headphones,
  HeartHandshake,
  BriefcaseBusiness,
  Megaphone,
  Share2,
  ShoppingCart,
  BrainCircuit,
  Truck,
} from "lucide-react";

export const solutionsData = [
  {
    slug: "customer-services",

    title: "Customer Services",

    shortTitle: "Customer Services",

    category: "Customer Experience",

    icon: Headphones,

    description:
      "Deliver responsive, reliable, and personalized customer support through dedicated professionals who work as an extension of your team.",

    cardDescription:
      "Build a dependable customer support operation across chat, email, phone, social media, and other customer channels.",

    heroTag:
      "Customer Experience & Support",

    image: "/images/solutions/customer-services.jpg",

    accent: "customer-services",

    highlights: [
      "Dedicated Support Teams",
      "Omnichannel Support",
      "Customer Communication",
      "Complaint & Escalation Management",
    ],

    route: "/solutions/customer-services",
  },

  {
    slug: "customer-success",

    title: "Customer Success",

    shortTitle: "Customer Success",

    category: "Customer Experience",

    icon: HeartHandshake,

    description:
      "Help customers achieve more value from your products and services while strengthening relationships, engagement, retention, and long-term growth.",

    cardDescription:
      "Create proactive customer relationships designed to improve adoption, engagement, retention, and customer value.",

    heroTag:
      "Customer Growth & Retention",

    image: "/images/solutions/customer-success.jpg",

    accent: "customer-success",

    highlights: [
      "Customer Onboarding",
      "Account Management",
      "Customer Engagement",
      "Retention Support",
    ],

    route: "/solutions/customer-success",
  },

  {
    slug: "executive-assistant",

    title: "Executive Assistant",

    shortTitle: "Executive Assistant",

    category: "Business Operations",

    icon: BriefcaseBusiness,

    description:
      "Give executives and business leaders dependable operational support that keeps schedules, communication, research, and daily priorities organized.",

    cardDescription:
      "Delegate time-consuming administrative and operational responsibilities to a dedicated executive support professional.",

    heroTag:
      "Executive & Business Support",

    image: "/images/solutions/executive-assistant.jpg",

    accent: "executive-assistant",

    highlights: [
      "Calendar Management",
      "Inbox & Communication",
      "Research & Reporting",
      "Administrative Coordination",
    ],

    route: "/solutions/executive-assistant",
  },

  {
    slug: "marketing-assistant",

    title: "Marketing Assistant",

    shortTitle: "Marketing Assistant",

    category: "Marketing & Growth",

    icon: Megaphone,

    description:
      "Extend your marketing team with skilled support for research, content coordination, campaigns, reporting, and day-to-day marketing operations.",

    cardDescription:
      "Get reliable marketing support that helps your team execute campaigns, manage content, conduct research, and stay organized.",

    heroTag:
      "Marketing Operations & Growth",

    image: "/images/solutions/marketing-assistant.jpg",

    accent: "marketing-assistant",

    highlights: [
      "Marketing Research",
      "Content Coordination",
      "Campaign Support",
      "Marketing Reporting",
    ],

    route: "/solutions/marketing-assistant",
  },

  {
    slug: "social-media-manager",

    title: "Social Media Manager",

    shortTitle: "Social Media Manager",

    category: "Marketing & Creative",

    icon: Share2,

    description:
      "Build a consistent social media presence with dedicated support for content planning, publishing, community engagement, and performance monitoring.",

    cardDescription:
      "Manage your social presence with a dedicated specialist focused on consistency, engagement, content, and growth.",

    heroTag:
      "Social Media & Digital Presence",

    image: "/images/solutions/social-media-manager.jpg",

    accent: "social-media-manager",

    highlights: [
      "Social Media Management",
      "Content Planning",
      "Community Management",
      "Performance Monitoring",
    ],

    route: "/solutions/social-media-manager",
  },

  {
    slug: "ecommerce-support",

    title: "E-commerce Support",

    shortTitle: "E-commerce Support",

    category: "E-commerce Operations",

    icon: ShoppingCart,

    description:
      "Keep your online store running smoothly with dedicated support for customers, orders, products, marketplaces, and daily e-commerce operations.",

    cardDescription:
      "Streamline customer service and daily store operations across e-commerce platforms and marketplaces.",

    heroTag:
      "E-commerce Operations & Support",

    image: "/images/solutions/ecommerce-support.jpg",

    accent: "ecommerce-support",

    highlights: [
      "Order Management",
      "Customer Support",
      "Product Management",
      "Marketplace Support",
    ],

    route: "/solutions/ecommerce-support",
  },

  {
    slug: "ai-transformation",

    title: "AI Transformation",

    shortTitle: "AI Transformation",

    category: "Technology & AI",

    icon: BrainCircuit,

    description:
      "Identify practical opportunities to use artificial intelligence and automation to improve workflows, customer experiences, productivity, and business operations.",

    cardDescription:
      "Turn repetitive processes into smarter workflows with practical AI strategy, automation, integration, and implementation.",

    heroTag:
      "AI Strategy, Automation & Transformation",

    image: "/images/solutions/ai-transformation.jpg",

    accent: "ai-transformation",

    highlights: [
      "AI Strategy",
      "Workflow Automation",
      "AI Assistants",
      "Process Optimization",
    ],

    route: "/solutions/ai-transformation",
  },

  {
    slug: "truck-dispatching",

    title: "Truck Dispatching",

    shortTitle: "Truck Dispatching",

    category: "Transportation & Logistics",

    icon: Truck,

    description:
      "Support carriers and owner-operators with professional dispatch operations, freight coordination, driver communication, paperwork, and day-to-day logistics support.",

    cardDescription:
      "Professional truck dispatching support focused on freight coordination, driver communication, paperwork, and operational efficiency.",

    heroTag:
      "Transportation & Logistics",

    image: "/images/solutions/truck-dispatching.jpg",

    accent: "truck-dispatching",

    highlights: [
      "Freight & Load Coordination",
      "Driver Communication",
      "Rate & Documentation Support",
      "Dispatch Operations",
    ],

    route: "/solutions/truck-dispatching",
  },
];


// ============================================================
// Helper Functions
// ============================================================

export const getSolutionBySlug = (slug) => {
  return solutionsData.find((solution) => solution.slug === slug);
};

export const getSolutionSlugs = () => {
  return solutionsData.map((solution) => solution.slug);
};