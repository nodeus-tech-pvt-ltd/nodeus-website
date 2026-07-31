import {
  Code2,
  ShoppingBag,
  Building2,
  HeartPulse,
  Landmark,
  Car,
  Gamepad2,
  Plane,
  GraduationCap,
  Newspaper,
} from "lucide-react";


const industries = [

  {
    slug: "saas-technology",

    title: "SaaS & Technology",

    icon: Code2,

    heroTitle:
      "Scale your SaaS operations without slowing innovation.",

    heroDescription:
      "Nodeus helps SaaS and technology companies build flexible customer support, technical operations, and back-office teams that grow alongside their products and customers.",

    challenges: [
      "Managing growing customer support volumes",
      "Delivering fast and accurate technical assistance",
      "Improving onboarding and product adoption",
      "Reducing customer churn and support friction",
    ],

    capabilities: [
      "Customer Support Operations",
      "Technical Support Teams",
      "Customer Success Support",
      "SaaS Onboarding Assistance",
      "Customer Retention Operations",
      "Data and Back-Office Support",
    ],

    outcomes: [
      "Faster customer response times",
      "More consistent customer experiences",
      "Scalable support capacity",
      "Greater focus on product innovation",
    ],
  },


  {
    slug: "ecommerce-retail",

    title: "E-commerce & Retail",

    icon: ShoppingBag,

    heroTitle:
      "Deliver better shopping experiences at every stage.",

    heroDescription:
      "Nodeus supports e-commerce and retail businesses with responsive customer service, order operations, customer retention, and scalable teams built around changing demand.",

    challenges: [
      "Managing high volumes of customer inquiries",
      "Handling order, delivery, and return requests",
      "Maintaining support quality during peak seasons",
      "Creating consistent experiences across channels",
    ],

    capabilities: [
      "E-commerce Customer Support",
      "Order Management Support",
      "Returns and Refund Assistance",
      "Customer Retention Operations",
      "Marketplace Support",
      "Product and Catalog Data Management",
    ],

    outcomes: [
      "Improved customer satisfaction",
      "Faster order-related support",
      "Scalable seasonal capacity",
      "More efficient retail operations",
    ],
  },


  {
    slug: "real-estate",

    title: "Real Estate & Property Management",

    icon: Building2,

    heroTitle:
      "Keep properties, prospects, and operations moving.",

    heroDescription:
      "Nodeus helps real estate and property management businesses manage customer communication, lead coordination, administrative work, and day-to-day operational support.",

    challenges: [
      "Responding quickly to property inquiries",
      "Managing leads across multiple channels",
      "Coordinating tenants, owners, and vendors",
      "Keeping property information organized",
    ],

    capabilities: [
      "Real Estate Lead Support",
      "Tenant and Resident Support",
      "Property Management Assistance",
      "Appointment Scheduling",
      "Administrative Operations",
      "Data Entry and CRM Management",
    ],

    outcomes: [
      "Faster lead response",
      "Better tenant communication",
      "More organized operations",
      "Greater focus on property growth",
    ],
  },


  {
    slug: "healthcare",

    title: "Healthcare & Healthtech",

    icon: HeartPulse,

    heroTitle:
      "Reliable support for better healthcare experiences.",

    heroDescription:
      "Nodeus provides scalable operational and customer support for healthcare and healthtech organizations while adapting to their workflows, service standards, and compliance requirements.",

    challenges: [
      "Managing sensitive customer and patient communication",
      "Handling appointment and service inquiries",
      "Maintaining consistent support quality",
      "Scaling operations without increasing complexity",
    ],

    capabilities: [
      "Healthcare Customer Support",
      "Appointment Coordination",
      "Patient Service Assistance",
      "Healthcare Administrative Support",
      "Healthtech Technical Support",
      "Data and Back-Office Operations",
    ],

    outcomes: [
      "More responsive service experiences",
      "Improved operational efficiency",
      "Consistent customer communication",
      "Scalable support capacity",
    ],
  },


  {
    slug: "fintech",

    title: "Fintech & Financial Services",

    icon: Landmark,

    heroTitle:
      "Build trusted customer experiences at scale.",

    heroDescription:
      "Nodeus supports fintech and financial service businesses with customer operations, technical assistance, data processes, and scalable teams designed around reliability and trust.",

    challenges: [
      "Managing time-sensitive customer requests",
      "Maintaining accurate and consistent communication",
      "Supporting complex financial products",
      "Scaling service operations while protecting quality",
    ],

    capabilities: [
      "Financial Customer Support",
      "Fintech Technical Support",
      "Account and Service Assistance",
      "Customer Retention Operations",
      "Data Processing Support",
      "Back-Office Operations",
    ],

    outcomes: [
      "More reliable customer support",
      "Faster issue resolution",
      "Consistent service quality",
      "Improved operational scalability",
    ],
  },


  {
    slug: "automotive-logistics",

    title: "Automotive & Logistics",

    icon: Car,

    heroTitle:
      "Keep customers, vehicles, and operations connected.",

    heroDescription:
      "Nodeus helps automotive and logistics companies manage customer communication, service coordination, operational workflows, and support across fast-moving environments.",

    challenges: [
      "Managing high volumes of service requests",
      "Coordinating deliveries and operational updates",
      "Providing accurate status information",
      "Supporting customers across multiple channels",
    ],

    capabilities: [
      "Customer Service Operations",
      "Delivery and Shipment Support",
      "Service Appointment Coordination",
      "Technical Support",
      "Data and Administrative Operations",
      "Customer Retention Support",
    ],

    outcomes: [
      "Faster customer updates",
      "Better service coordination",
      "More efficient operations",
      "Improved customer confidence",
    ],
  },


  {
    slug: "gaming-entertainment",

    title: "Gaming & Entertainment",

    icon: Gamepad2,

    heroTitle:
      "Create better player and audience experiences.",

    heroDescription:
      "Nodeus helps gaming and entertainment companies deliver responsive community support, player assistance, content operations, and scalable customer experiences.",

    challenges: [
      "Supporting large and active user communities",
      "Managing technical and account-related issues",
      "Maintaining fast response times during launches",
      "Delivering consistent experiences across regions",
    ],

    capabilities: [
      "Player and Community Support",
      "Technical Assistance",
      "Account and Subscription Support",
      "Content Moderation Support",
      "Customer Retention Operations",
      "Data and Back-Office Services",
    ],

    outcomes: [
      "Better player experiences",
      "Faster issue resolution",
      "Scalable launch support",
      "Stronger customer engagement",
    ],
  },


  {
    slug: "travel-hospitality",

    title: "Travel & Hospitality",

    icon: Plane,

    heroTitle:
      "Support every journey from booking to return.",

    heroDescription:
      "Nodeus helps travel and hospitality businesses deliver responsive guest support, booking assistance, service coordination, and customer care across every stage of the journey.",

    challenges: [
      "Managing booking and reservation inquiries",
      "Handling time-sensitive travel changes",
      "Supporting customers across different channels",
      "Maintaining service quality during peak demand",
    ],

    capabilities: [
      "Travel Customer Support",
      "Booking and Reservation Assistance",
      "Guest Service Operations",
      "Travel Change and Cancellation Support",
      "Customer Retention Services",
      "Back-Office Administration",
    ],

    outcomes: [
      "More responsive guest support",
      "Improved booking experiences",
      "Scalable seasonal operations",
      "Higher customer satisfaction",
    ],
  },


  {
    slug: "education-edtech",

    title: "Education & EdTech",

    icon: GraduationCap,

    heroTitle:
      "Support better learning experiences at scale.",

    heroDescription:
      "Nodeus helps education and EdTech organizations manage learner support, platform assistance, administrative operations, and scalable service teams.",

    challenges: [
      "Supporting learners across multiple channels",
      "Managing enrollment and account inquiries",
      "Providing reliable platform assistance",
      "Scaling support during enrollment periods",
    ],

    capabilities: [
      "Student and Learner Support",
      "EdTech Technical Assistance",
      "Enrollment Support",
      "Customer Success Operations",
      "Education Administration",
      "Data and Back-Office Support",
    ],

    outcomes: [
      "Better learner experiences",
      "Faster support resolution",
      "More efficient administration",
      "Scalable education operations",
    ],
  },


  {
    slug: "media-social-platforms",

    title: "Media & Social Platforms",

    icon: Newspaper,

    heroTitle:
      "Build safer, stronger, and more responsive communities.",

    heroDescription:
      "Nodeus helps media companies and social platforms manage user support, community operations, content workflows, and scalable digital experiences.",

    challenges: [
      "Managing large volumes of user communication",
      "Supporting active digital communities",
      "Handling account and platform issues",
      "Maintaining consistent service across channels",
    ],

    capabilities: [
      "User and Creator Support",
      "Community Operations",
      "Platform Technical Support",
      "Content Moderation Support",
      "Account and Subscription Assistance",
      "Data and Back-Office Operations",
    ],

    outcomes: [
      "More responsive user support",
      "Stronger community experiences",
      "Scalable platform operations",
      "Improved service consistency",
    ],
  },

];


export default industries;