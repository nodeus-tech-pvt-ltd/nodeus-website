import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import nodeusLogo from "../../assets/nodeus-logo.webp";
import solutionsData from "../../data/solutions/solutionsData";
import industries from "../../data/industries/industriesData";


import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";

const serviceCategories = Object.values(solutionsData);

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