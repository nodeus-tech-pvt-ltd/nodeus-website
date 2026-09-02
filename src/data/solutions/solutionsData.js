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
  ShoppingCart,
  LifeBuoy,
  Truck,
  Users,
  Database,
} from "lucide-react";

import customerServicesImage from "../../assets/solutions/customer-service.png";
import customerSuccessImage from "../../assets/solutions/customer-success.png";
import salesSupportImage from "../../assets/solutions/sales-support.png";
import backOfficeOperationsImage from "../../assets/solutions/back-office-operations.png";
import virtualAssistantImage from "../../assets/solutions/executive-assistant.png";
import ecommerceSupportImage from "../../assets/solutions/e-commerce-support.png";
import helpdeskTechnicalSupportImage from "../../assets/solutions/helpdesk-technical-support.png";
import transportationFleetOperationsImage from "../../assets/solutions/truck-dispatching.png";

export const solutionsData = [
  {
    slug: "customer-service",

    title: "Customer Service",

    shortTitle: "Customer Service",

    category: "Customer Experience",

    icon: Headphones,

    description:
      "Reliable customer service that keeps your customers supported and satisfied.",

    cardDescription:
      "Provide responsive, reliable, and professional customer support across every major customer communication channel.",

    heroTag:
      "Customer Experience & Support",

    image: customerServicesImage,

    accent: "customer-service",

    highlights: [
      "Customer Service",
      "Customer Support",
      "Phone Support",
      "Email Support",
      "Chat Support",
      "Customer Care",
      "Order & Account Support",
      "Ticket Management",
    ],

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

    route: "/solutions/customer-service",
  },

  {
    slug: "customer-success-retention",

    title: "Customer Success & Retention",

    shortTitle: "Customer Success",

    category: "Customer Experience",

    icon: HeartHandshake,

    description:
      "Proactively engage customers, improve satisfaction, and increase long-term retention.",

    cardDescription:
      "Build stronger customer relationships through proactive engagement, account support, retention strategies, and ongoing customer success management.",

    heroTag:
      "Customer Growth & Retention",

    image: customerSuccessImage,

    accent: "customer-success-retention",

    highlights: [
      "Customer Onboarding",
      "Customer Success",
      "Customer Retention",
      "At-risk Management",
      "Renewals Support",
      "Account Management",
      "Complaint & Escalation Management",
    ],

    services: [
      "Customer Onboarding",
      "Customer Success",
      "Customer Retention",
      "At-risk Management",
      "Renewals Support",
      "Account Management",
      "Complaint & Escalation Management",
    ],

    route: "/solutions/customer-success-retention",
  },

  {
    slug: "sales-support-lead-management",

    title: "Sales Support & Lead Management",

    shortTitle: "Sales Support",

    category: "Sales & Business Development",

    icon: Users,

    description:
      "Extend your sales team with dedicated support for lead management and revenue-generating activities.",

    cardDescription:
      "Strengthen your sales operation with dedicated professionals handling lead generation, qualification, prospect research, CRM management, and pipeline support.",

    heroTag:
      "Sales Support & Lead Management",

    image: salesSupportImage,

    accent: "sales-support-lead-management",

    highlights: [
      "Lead Generation",
      "Lead Qualification",
      "Business Development",
      "Appointment Setting",
      "Prospect Research",
      "CRM Management",
      "Pipeline Management",
    ],

    services: [
      "Lead Generation",
      "Lead Qualification",
      "Business Development",
      "Appointment Setting",
      "Prospect Research",
      "CRM Management",
      "Pipeline Management",
    ],

    route: "/solutions/sales-support-lead-management",
  },

  {
    slug: "back-office-operations",

    title: "Back-Office Operations",

    shortTitle: "Back-Office Operations",

    category: "Business Operations",

    icon: Database,

    description:
      "Streamline your day-to-day operations with reliable outsourced back-office support.",

    cardDescription:
      "Improve operational efficiency with dependable support for data, documents, records, CRM administration, reporting, and quality assurance.",

    heroTag:
      "Business Operations & Back-Office Support",

    image: backOfficeOperationsImage,

    accent: "back-office-operations",

    highlights: [
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

    route: "/solutions/back-office-operations",
  },

  {
    slug: "virtual-assistant-administrative-support",

    title: "Virtual Assistant & Administrative Support",

    shortTitle: "Virtual Assistant",

    category: "Business Operations",

    icon: BriefcaseBusiness,

    description:
      "Dedicated remote professionals to handle your administrative workload.",

    cardDescription:
      "Delegate administrative responsibilities to dedicated remote professionals who help manage schedules, communication, research, documents, and everyday business tasks.",

    heroTag:
      "Virtual Assistance & Administrative Support",

    image: virtualAssistantImage,

    accent: "virtual-assistant-administrative-support",

    highlights: [
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

    route: "/solutions/virtual-assistant-administrative-support",
  },

  {
    slug: "ecommerce-support",

    title: "E-commerce Support",

    shortTitle: "E-commerce Support",

    category: "E-commerce Operations",

    icon: ShoppingCart,

    description:
      "Deliver seamless customer and operational support throughout the e-commerce journey.",

    cardDescription:
      "Support your online store with dedicated professionals handling customers, orders, returns, product information, billing, and post-purchase operations.",

    heroTag:
      "E-commerce Operations & Support",

    image: ecommerceSupportImage,

    accent: "ecommerce-support",

    highlights: [
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

    route: "/solutions/ecommerce-support",
  },

  {
    slug: "helpdesk-technical-support",

    title: "Helpdesk & Technical Support",

    shortTitle: "Helpdesk & Technical Support",

    category: "Technology & IT Support",

    icon: LifeBuoy,

    description:
      "First-line support that resolves issues quickly and keeps customers productive.",

    cardDescription:
      "Provide dependable first-line technical assistance, troubleshooting, ticket handling, and knowledge-base support to keep users productive.",

    heroTag:
      "Helpdesk & Technical Support",

    image: helpdeskTechnicalSupportImage,

    accent: "helpdesk-technical-support",

    highlights: [
      "Helpdesk Support",
      "Ticket Management",
      "First-Level Technical Support",
      "Troubleshooting",
      "Knowledge Base Support",
    ],

    services: [
      "Helpdesk Support",
      "Ticket Management",
      "First-Level Technical Support",
      "Troubleshooting",
      "Knowledge Base Support",
    ],

    route: "/solutions/helpdesk-technical-support",
  },

  {
    slug: "transportation-fleet-operations",

    title: "Transportation & Fleet Operations",

    shortTitle: "Transportation & Fleet Operations",

    category: "Transportation & Logistics",

    icon: Truck,

    description:
      "Professional transportation and fleet support covering dispatch, freight coordination, driver support, compliance, and day-to-day fleet operations.",

    cardDescription:
      "Extend your transportation operation with experienced professionals supporting dispatch, freight, drivers, carriers, safety, compliance, and fleet operations.",

    heroTag:
      "Transportation & Fleet Operations",

    image: transportationFleetOperationsImage,

    accent: "transportation-fleet-operations",

    highlights: [
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

    route: "/solutions/transportation-fleet-operations",
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