import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import nodeusLogo from "../assets/nodeus-logo.webp";

import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  Headphones,
  BriefcaseBusiness,
  TrendingUp,
  Code2,
  Bot,
  Calculator,
  Palette,
  Building2,
  ShoppingBag,
  HeartPulse,
  Landmark,
  Car,
  Gamepad2,
  Plane,
  GraduationCap,
  Newspaper,
} from "lucide-react";

const serviceCategories = [
  {
    slug: "customer-experience",
    title: "Customer Experience & Support",
    description: "Build stronger relationships with every interaction.",
    icon: Headphones,
    services: [
      "Customer Support",
      "Technical Support",
      "IT Help Desk Support",
      "Live Chat Support",
      "Email Support",
      "Phone / Call Support",
      "Social Media Support",
      "Omnichannel Support",
      "Customer Success",
      "Customer Retention",
      "Customer Experience Management",
      "Complaint Handling",
      "Escalation Management",
      "Community Management",
      "Risk Management",
      "Content Moderation",
    ],
  },

  {
    slug: "business-operations",
    title: "Business Operations & Back Office",
    description: "Reliable people and processes behind your operations.",
    icon: BriefcaseBusiness,
    services: [
      "Data Entry",
      "Data Processing",
      "Data Verification",
      "Data Cleansing",
      "Virtual Assistant Services",
      "Administrative Support",
      "Email Management",
      "Calendar Management",
      "Appointment Scheduling",
      "Order Processing",
      "Returns Processing",
      "Document Processing",
      "Document Management",
      "Invoice Processing",
      "Billing Support",
      "Transcription",
    ],
  },

  {
    slug: "sales-revenue",
    title: "Sales & Revenue Operations",
    description: "Turn opportunities into measurable business growth.",
    icon: TrendingUp,
    services: [
      "Lead Generation",
      "Lead Qualification",
      "Appointment Setting",
      "Outbound Calling",
      "Inbound Sales Support",
      "Inside Sales",
      "SDR Services",
      "Customer Onboarding",
      "Cross-Selling & Upselling",
    ],
  },

  {
    slug: "technology-it",
    title: "Technology & IT Services",
    description: "Extend your technical capabilities with dedicated teams.",
    icon: Code2,
    services: [
      "Web Development",
      "Website Maintenance",
      "Full-Stack Development",
      "Mobile App Development",
    ],
  },

  {
    slug: "ai-automation",
    title: "AI & Automation",
    description: "Use intelligent systems to improve efficiency and scale.",
    icon: Bot,
    services: [
      "AI Customer Support",
      "AI Chatbot Support",
    ],
  },

  {
    slug: "finance-accounting",
    title: "Finance & Accounting Operations",
    description: "Support your financial operations with precision.",
    icon: Calculator,
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
    slug: "marketing-creative",
    title: "Marketing & Creative Services",
    description: "Create, market, and grow your brand.",
    icon: Palette,
    services: [
      "Digital Marketing",
      "Graphic Design",
      "Video Editing",
      "Email Marketing",
      "Marketing Operations",
    ],
  },
];

const industries = [
  {
    slug: "saas-technology",
    title: "SaaS & Technology",
    icon: Code2,
  },
  {
    slug: "ecommerce-retail",
    title: "E-commerce & Retail",
    icon: ShoppingBag,
  },
  {
    slug: "real-estate",
    title: "Real Estate & Property Management",
    icon: Building2,
  },
  {
    slug: "healthcare",
    title: "Healthcare & Healthtech",
    icon: HeartPulse,
  },
  {
    slug: "fintech",
    title: "Fintech & Financial Services",
    icon: Landmark,
  },
  {
    slug: "automotive-logistics",
    title: "Automotive & Logistics",
    icon: Car,
  },
  {
    slug: "gaming-entertainment",
    title: "Gaming & Entertainment",
    icon: Gamepad2,
  },
  {
    slug: "travel-hospitality",
    title: "Travel & Hospitality",
    icon: Plane,
  },
  {
    slug: "education-edtech",
    title: "Education & EdTech",
    icon: GraduationCap,
  },
  {
    slug: "media-social-platforms",
    title: "Media & Social Platforms",
    icon: Newspaper,
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const closeTimer = useRef(null);

  const openMenu = (menu) => {
    clearTimeout(closeTimer.current);
    setActiveMenu(menu);
  };

  const closeMenuWithDelay = () => {
    closeTimer.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const toggleMenu = (menu) => {
    clearTimeout(closeTimer.current);

    setActiveMenu((currentMenu) =>
      currentMenu === menu ? null : menu
    );
  };

  const closeMenu = () => {
    clearTimeout(closeTimer.current);
    setIsOpen(false);
    setActiveMenu(null);
  };

  return (
    <header
      className={`navbar ${
        activeMenu ? "navbar-menu-active" : ""
      }`}
    >
      {/* LOGO */}

      <Link
        to="/"
        className="logo"
        onClick={closeMenu}
      >
        <img
          src={nodeusLogo}
          alt="Nodeus"
          className="nodeus-logo"
        />
      </Link>

      <nav
        className={`nav-links ${
          isOpen ? "open" : ""
        }`}
      >

        {/* =========================
            SOLUTIONS
        ========================= */}

        <div
          className="nav-dropdown-wrapper"
          onMouseEnter={() => openMenu("solutions")}
          onMouseLeave={closeMenuWithDelay}
        >

          <div className="nav-dropdown-heading">

            {/* MAIN SOLUTIONS PAGE LINK */}

            <Link
              to="/solutions"
              className="nav-main-link"
              onClick={closeMenu}
            >
              Solutions
            </Link>

            {/* DROPDOWN TOGGLE */}

            <button
              className={`nav-dropdown-trigger ${
                activeMenu === "solutions"
                  ? "active"
                  : ""
              }`}
              onClick={() => toggleMenu("solutions")}
              aria-label="Open solutions menu"
            >
              <ChevronDown size={15} />
            </button>

          </div>

          <div
            className={`mega-menu solutions-menu ${
              activeMenu === "solutions"
                ? "show"
                : ""
            }`}
            onMouseEnter={() =>
              openMenu("solutions")
            }
            onMouseLeave={closeMenuWithDelay}
          >

            <div className="mega-menu-header">

              <div>
                <span className="mega-eyebrow">
                  WHAT WE DO
                </span>

                <h2>
                  Capabilities built
                  <br />
                  <span>
                    around your needs.
                  </span>
                </h2>
              </div>

              <p>
                From customer experience to technology
                and operations, Nodeus helps businesses
                build the capabilities they need to move
                forward.
              </p>

            </div>

            <div className="service-categories-grid">

              {serviceCategories.map((category) => {

                const Icon = category.icon;

                return (

                  <Link
                    to={`/solutions/${category.slug}`}
                    className="service-category-card"
                    key={category.title}
                    onClick={closeMenu}
                  >

                    <div className="service-category-top">

                      <div className="service-category-icon">
                        <Icon size={21} />
                      </div>

                      <ArrowUpRight size={18} />

                    </div>

                    <h3>
                      {category.title}
                    </h3>

                    <p>
                      {category.description}
                    </p>

                    <div className="service-list">

                      {category.services
                        .slice(0, 5)
                        .map((service) => (

                          <span
                            key={service}
                          >
                            {service}
                          </span>

                        ))}

                    </div>

                    {category.services.length > 5 && (

                      <div className="view-all-services">

                        View all services

                        <ArrowUpRight
                          size={15}
                        />

                      </div>

                    )}

                  </Link>

                );

              })}

            </div>

            <div className="mega-menu-bottom">

              <span>
                Need something specific?
              </span>

              <Link
                to="/contact"
                onClick={closeMenu}
              >
                Let's discuss your requirements

                <ArrowUpRight
                  size={17}
                />
              </Link>

            </div>

          </div>

        </div>


        {/* =========================
            INDUSTRIES
        ========================= */}

        <div
          className="nav-dropdown-wrapper"
          onMouseEnter={() =>
            openMenu("industries")
          }
          onMouseLeave={closeMenuWithDelay}
        >

          <div className="nav-dropdown-heading">

            {/* MAIN INDUSTRIES PAGE LINK */}

            <Link
              to="/industries"
              className="nav-main-link"
              onClick={closeMenu}
            >
              Industries
            </Link>

            {/* DROPDOWN TOGGLE */}

            <button
              className={`nav-dropdown-trigger ${
                activeMenu === "industries"
                  ? "active"
                  : ""
              }`}
              onClick={() =>
                toggleMenu("industries")
              }
              aria-label="Open industries menu"
            >
              <ChevronDown size={15} />
            </button>

          </div>

          <div
            className={`mega-menu industries-menu ${
              activeMenu === "industries"
                ? "show"
                : ""
            }`}
            onMouseEnter={() =>
              openMenu("industries")
            }
            onMouseLeave={closeMenuWithDelay}
          >

            <div className="mega-menu-header">

              <div>

                <span className="mega-eyebrow">
                  INDUSTRIES WE SUPPORT
                </span>

                <h2>
                  Experience across
                  <br />
                  <span>
                    different industries.
                  </span>
                </h2>

              </div>

              <p>
                Every industry has different challenges.
                Our teams adapt to your processes,
                customers, tools, and goals.
              </p>

            </div>

            <div className="industries-grid">

              {industries.map((industry) => {

                const Icon = industry.icon;

                return (

                  <Link
                    to={`/industries/${industry.slug}`}
                    className="industry-card"
                    key={industry.title}
                    onClick={closeMenu}
                  >

                    <div className="industry-icon">
                      <Icon size={22} />
                    </div>

                    <span>
                      {industry.title}
                    </span>

                    <ArrowUpRight
                      size={17}
                    />

                  </Link>

                );

              })}

            </div>

            <div className="mega-menu-bottom">

              <span>
                Don't see your industry?
              </span>

              <Link
                to="/contact"
                onClick={closeMenu}
              >
                Talk to our team

                <ArrowUpRight
                  size={17}
                />
              </Link>

            </div>

          </div>

        </div>


        {/* RESOURCES */}

        <Link
          to="/insights"
          onClick={closeMenu}
        >
          Resources
        </Link>


        {/* ABOUT */}

        <Link
          to="/about"
          onClick={closeMenu}
        >
          About
        </Link>


        {/* CONTACT */}

        <Link
          to="/contact"
          className="nav-contact"
          onClick={closeMenu}
        >
          Let's Talk

          <ArrowUpRight
            size={16}
          />

        </Link>

      </nav>


      {/* MOBILE MENU */}

      <button
        className="mobile-menu-button"
        onClick={() =>
          setIsOpen(!isOpen)
        }
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

    </header>
  );
}

export default Navbar;