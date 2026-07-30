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

    shortDescription:
      "Scalable customer, technical, and operational support for growing software and technology businesses.",

    heroDescription:
      "Nodeus helps SaaS and technology companies create reliable customer experiences, strengthen technical operations, and scale support without sacrificing quality.",

    challenges: [
      "Managing growing customer volumes",
      "Providing fast and accurate technical support",
      "Improving onboarding and product adoption",
      "Supporting customers across multiple channels",
      "Scaling operations without increasing internal complexity",
    ],

    capabilities: [
      "Customer Support",
      "Technical Support",
      "Customer Success",
      "Customer Onboarding",
      "Software Renewal Support",
      "Data Operations",
    ],

    outcomes: [
      "Faster customer response times",
      "Improved product adoption",
      "More consistent customer experiences",
      "Scalable support operations",
    ],
  },


  {
    slug: "ecommerce-retail",

    title: "E-commerce & Retail",

    icon: ShoppingBag,

    shortDescription:
      "Responsive customer service and back-office operations for modern retail and e-commerce businesses.",

    heroDescription:
      "From order questions and returns to customer engagement and operational support, Nodeus helps e-commerce and retail companies deliver reliable experiences at every stage of the customer journey.",

    challenges: [
      "Handling high volumes of customer inquiries",
      "Managing order, delivery, and return questions",
      "Maintaining consistent support across channels",
      "Supporting seasonal demand spikes",
      "Reducing operational workload",
    ],

    capabilities: [
      "Customer Support",
      "Order Management Support",
      "Customer Retention",
      "Data Entry",
      "Back-Office Operations",
      "Live Chat Support",
    ],

    outcomes: [
      "Faster issue resolution",
      "Improved customer satisfaction",
      "More efficient order operations",
      "Better support during peak periods",
    ],
  },


  {
    slug: "real-estate",

    title: "Real Estate & Property Management",

    icon: Building2,

    shortDescription:
      "Reliable customer communication and operational support for real estate and property businesses.",

    heroDescription:
      "Nodeus supports real estate companies, property managers, and related businesses with responsive communication, lead handling, administrative support, and scalable operations.",

    challenges: [
      "Managing property and tenant inquiries",
      "Responding quickly to prospective customers",
      "Coordinating appointments and follow-ups",
      "Handling large volumes of property data",
      "Keeping operational workflows organized",
    ],

    capabilities: [
      "Lead Qualification",
      "Customer Support",
      "Appointment Scheduling",
      "Virtual Assistance",
      "Data Entry",
      "Back-Office Operations",
    ],

    outcomes: [
      "Faster lead response",
      "More organized operations",
      "Improved customer communication",
      "Reduced administrative workload",
    ],
  },


  {
    slug: "healthcare",

    title: "Healthcare & Healthtech",

    icon: HeartPulse,

    shortDescription:
      "Patient-focused support and scalable operational capabilities for healthcare and health technology organizations.",

    heroDescription:
      "Nodeus helps healthcare and healthtech organizations improve communication, support administrative workflows, and build dependable service operations around patient and customer needs.",

    challenges: [
      "Managing high volumes of patient inquiries",
      "Coordinating appointments and follow-ups",
      "Maintaining clear and consistent communication",
      "Supporting complex operational workflows",
      "Scaling service without reducing quality",
    ],

    capabilities: [
      "Customer Support",
      "Patient Communication Support",
      "Appointment Coordination",
      "Data Entry",
      "Administrative Support",
      "Technical Support",
    ],

    outcomes: [
      "More responsive communication",
      "Improved operational efficiency",
      "Better service consistency",
      "Scalable support capacity",
    ],
  },


  {
    slug: "fintech",

    title: "Fintech & Financial Services",

    icon: Landmark,

    shortDescription:
      "Customer and operational support designed for fast-moving financial technology and service businesses.",

    heroDescription:
      "Nodeus helps fintech and financial service organizations provide responsive customer support, strengthen operational workflows, and manage growing service demands with dedicated teams.",

    challenges: [
      "Managing sensitive and time-critical inquiries",
      "Supporting customers across multiple channels",
      "Maintaining accurate operational processes",
      "Handling growing service volumes",
      "Providing consistent customer experiences",
    ],

    capabilities: [
      "Customer Support",
      "Technical Support",
      "Customer Success",
      "Data Processing",
      "Back-Office Operations",
      "Customer Retention",
    ],

    outcomes: [
      "Faster customer assistance",
      "More consistent service delivery",
      "Improved operational accuracy",
      "Scalable support operations",
    ],
  },


  {
    slug: "automotive-logistics",

    title: "Automotive & Logistics",

    icon: Car,

    shortDescription:
      "Responsive support and operational coordination for automotive, transportation, and logistics businesses.",

    heroDescription:
      "Nodeus helps automotive and logistics organizations manage customer communication, service requests, operational data, and growing support requirements.",

    challenges: [
      "Managing service and delivery inquiries",
      "Coordinating multiple operational workflows",
      "Supporting customers in real time",
      "Handling large volumes of information",
      "Maintaining service consistency across regions",
    ],

    capabilities: [
      "Customer Support",
      "Technical Support",
      "Dispatch and Coordination Support",
      "Data Entry",
      "Back-Office Operations",
      "Customer Retention",
    ],

    outcomes: [
      "Improved response times",
      "More organized workflows",
      "Reduced operational workload",
      "Better customer communication",
    ],
  },


  {
    slug: "gaming-entertainment",

    title: "Gaming & Entertainment",

    icon: Gamepad2,

    shortDescription:
      "Always-on customer and community support for gaming and entertainment businesses.",

    heroDescription:
      "Nodeus helps gaming and entertainment companies provide responsive player support, manage customer interactions, and scale operations as communities grow.",

    challenges: [
      "Supporting large and active user communities",
      "Managing high volumes of player inquiries",
      "Providing support across multiple platforms",
      "Maintaining fast response times",
      "Supporting launches and demand spikes",
    ],

    capabilities: [
      "Player Support",
      "Customer Support",
      "Technical Support",
      "Community Support",
      "Content Moderation Support",
      "Data Operations",
    ],

    outcomes: [
      "Faster player assistance",
      "Improved community experiences",
      "Consistent multi-channel support",
      "Scalable service capacity",
    ],
  },


  {
    slug: "travel-hospitality",

    title: "Travel & Hospitality",

    icon: Plane,

    shortDescription:
      "Customer-focused support for travel, tourism, accommodation, and hospitality businesses.",

    heroDescription:
      "Nodeus helps travel and hospitality organizations provide responsive guest support, manage booking-related communication, and deliver dependable service throughout the customer journey.",

    challenges: [
      "Managing booking and reservation inquiries",
      "Supporting customers across time zones",
      "Handling changes and service requests",
      "Maintaining consistent guest communication",
      "Managing seasonal demand increases",
    ],

    capabilities: [
      "Customer Support",
      "Reservation Support",
      "Booking Assistance",
      "Customer Retention",
      "Live Chat Support",
      "Back-Office Operations",
    ],

    outcomes: [
      "Faster guest support",
      "Improved customer experiences",
      "Better service consistency",
      "Scalable seasonal operations",
    ],
  },


  {
    slug: "education-edtech",

    title: "Education & EdTech",

    icon: GraduationCap,

    shortDescription:
      "Scalable learner, customer, and operational support for education and technology-driven learning organizations.",

    heroDescription:
      "Nodeus helps education providers and EdTech companies support learners, improve platform experiences, and manage operational workloads with dedicated teams.",

    challenges: [
      "Supporting students and learners at scale",
      "Managing enrollment and onboarding questions",
      "Providing technical platform assistance",
      "Handling administrative workloads",
      "Maintaining consistent learner communication",
    ],

    capabilities: [
      "Learner Support",
      "Customer Support",
      "Technical Support",
      "Enrollment Assistance",
      "Data Entry",
      "Back-Office Operations",
    ],

    outcomes: [
      "More responsive learner support",
      "Improved onboarding experiences",
      "Reduced administrative workload",
      "Scalable education operations",
    ],
  },


  {
    slug: "media-social-platforms",

    title: "Media & Social Platforms",

    icon: Newspaper,

    shortDescription:
      "Scalable user support and operational services for media companies and digital platforms.",

    heroDescription:
      "Nodeus helps media businesses and social platforms manage user interactions, support growing communities, and maintain dependable operational processes.",

    challenges: [
      "Supporting large and diverse user bases",
      "Managing high volumes of user requests",
      "Maintaining consistent communication",
      "Supporting fast-moving digital platforms",
      "Scaling operations as audiences grow",
    ],

    capabilities: [
      "User Support",
      "Community Support",
      "Content Moderation Support",
      "Technical Support",
      "Data Operations",
      "Customer Retention",
    ],

    outcomes: [
      "Improved user experiences",
      "Faster response times",
      "More scalable operations",
      "Consistent platform support",
    ],
  },

];


export default industries;