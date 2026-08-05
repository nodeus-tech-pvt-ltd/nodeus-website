import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  Link,
  useLocation,
} from "react-router-dom";

import {
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  ChevronDown,
  FileText,
  Lightbulb,
  Megaphone,
  Menu,
  Users,
  X,
} from "lucide-react";

import nodeusLogo from "../../assets/nodeus-logo.webp";

import solutionsData from "../../data/solutions/solutionsData";
import industries from "../../data/industries/industriesData";

import "../../styles/layout/navbar.css";


const serviceCategories =
  Object.values(solutionsData);


function Navbar() {

  const [isOpen, setIsOpen] =
    useState(false);

  const [activeMenu, setActiveMenu] =
    useState(null);

  const closeTimer =
    useRef(null);

  const location =
    useLocation();


  /* =====================================
     CLOSE MENU WHEN PAGE CHANGES
  ===================================== */

  useEffect(() => {

    clearTimeout(
      closeTimer.current
    );

    setIsOpen(false);

    setActiveMenu(null);

  }, [location.pathname]);


  /* =====================================
        MOBILE MENU SCROLL
      ===================================== */

  useEffect(() => {

    return () => {

      document.body.style.overflow =
         "";

    };

  }, []);


  /* =====================================
     DESKTOP DROPDOWN
  ===================================== */

  const openMenu = (menu) => {

    if (
      window.innerWidth <= 760
    ) {
      return;
    }

    clearTimeout(
      closeTimer.current
    );

    setActiveMenu(menu);

  };


  const closeMenuWithDelay = () => {

    if (
      window.innerWidth <= 760
    ) {
      return;
    }

    closeTimer.current =
      setTimeout(() => {

        setActiveMenu(null);

      }, 180);

  };


  /* =====================================
     MOBILE DROPDOWN
  ===================================== */

  const toggleMenu = (menu) => {

    clearTimeout(
      closeTimer.current
    );

    setActiveMenu(
      (currentMenu) =>

        currentMenu === menu
          ? null
          : menu
    );

  };


  /* =====================================
     CLOSE NAVIGATION
  ===================================== */

  const closeMenu = () => {

    clearTimeout(
      closeTimer.current
    );

    setIsOpen(false);

    setActiveMenu(null);

  };


  /* =====================================
     HOME LOGO
  ===================================== */

  const handleLogoClick = () => {

    closeMenu();

    if (
      location.pathname === "/"
    ) {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }

  };


  return (

    <header
      className={`navbar ${
        isOpen
          ? "navbar-mobile-open"
          : ""
      } ${
        activeMenu
          ? "navbar-menu-active"
          : ""
      }`}
    >


      {/* =================================
          LOGO
      ================================== */}

      <Link
        to="/"
        className="logo"
        onClick={handleLogoClick}
        aria-label="Nodeus home"
      >

        <img
          src={nodeusLogo}
          alt="Nodeus"
          className="nodeus-logo"
        />

      </Link>


      {/* =================================
          MAIN NAVIGATION
      ================================== */}

      <nav
        className={`nav-links ${
          isOpen
            ? "open"
            : ""
        }`}
        aria-label="Main navigation"
      >


        {/* HOME */}

        <Link
          to="/"
          className="mobile-home-link"
          onClick={closeMenu}
        >

          Home

        </Link>


        {/* ===============================
            SOLUTIONS
        ================================ */}

        <div
          className="nav-dropdown-wrapper"
          onMouseEnter={() =>
            openMenu("solutions")
          }
          onMouseLeave={
            closeMenuWithDelay
          }
        >

          <div
            className="nav-dropdown-heading"
          >

            <Link
              to="/solutions"
              className="nav-main-link"
              onClick={closeMenu}
            >

              Solutions

            </Link>


            <button
              type="button"

              className={`nav-dropdown-trigger ${
                activeMenu ===
                "solutions"
                  ? "active"
                  : ""
              }`}

              onClick={() =>
                toggleMenu(
                  "solutions"
                )
              }

              aria-label={
                activeMenu ===
                "solutions"

                  ? "Close solutions menu"

                  : "Open solutions menu"
              }

              aria-expanded={
                activeMenu ===
                "solutions"
              }
            >

              <ChevronDown
                size={16}
              />

            </button>

          </div>


          <div
            className={`mega-menu solutions-menu ${
              activeMenu ===
              "solutions"

                ? "show"

                : ""
            }`}
          >


            <div
              className="mega-menu-header"
            >

              <div>

                <span
                  className="mega-eyebrow"
                >

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

                From customer experience
                to technology, AI, and
                business operations,
                Nodeus helps companies
                build scalable
                capabilities.

              </p>

            </div>


            <div
              className="service-categories-grid"
            >

              {serviceCategories.map(
                (category) => {

                  const Icon =
                    category.icon;


                  return (

                    <Link

                      to={
                        `/solutions/${category.slug}`
                      }

                      className={
                        "service-category-card"
                      }

                      key={
                        category.slug
                      }

                      onClick={
                        closeMenu
                      }
                    >


                      <div
                        className={
                          "service-category-top"
                        }
                      >

                        <div
                          className={
                            "service-category-icon"
                          }
                        >

                          <Icon
                            size={21}
                          />

                        </div>


                        <ArrowUpRight
                          size={17}
                        />

                      </div>


                      <h3>

                        {
                          category.title
                        }

                      </h3>


                      <p>

                        {
                          category.description
                        }

                      </p>


                      <div
                        className={
                          "service-list"
                        }
                      >

                        {
                          category.services
                            .slice(
                              0,
                              4
                            )
                            .map(
                              (
                                service
                              ) => (

                                <span
                                  key={
                                    service
                                  }
                                >

                                  {
                                    service
                                  }

                                </span>

                              )
                            )
                        }

                      </div>


                      <div
                        className={
                          "view-all-services"
                        }
                      >

                        Explore
                        solutions

                        <ArrowUpRight
                          size={14}
                        />

                      </div>

                    </Link>

                  );

                }
              )}

            </div>


            <div
              className="mega-menu-bottom"
            >

              <span>

                Need something
                specific?

              </span>


              <Link
                to="/contact"
                onClick={
                  closeMenu
                }
              >

                Let’s discuss
                your requirements

                <ArrowUpRight
                  size={17}
                />

              </Link>

            </div>

          </div>

        </div>


        {/* ===============================
            INDUSTRIES
        ================================ */}

        <div
          className="nav-dropdown-wrapper"
          onMouseEnter={() =>
            openMenu(
              "industries"
            )
          }
          onMouseLeave={
            closeMenuWithDelay
          }
        >

          <div
            className="nav-dropdown-heading"
          >

            <Link
              to="/industries"
              className="nav-main-link"
              onClick={
                closeMenu
              }
            >

              Industries

            </Link>


            <button
              type="button"

              className={`nav-dropdown-trigger ${
                activeMenu ===
                "industries"

                  ? "active"

                  : ""
              }`}

              onClick={() =>
                toggleMenu(
                  "industries"
                )
              }

              aria-label={
                activeMenu ===
                "industries"

                  ? "Close industries menu"

                  : "Open industries menu"
              }

              aria-expanded={
                activeMenu ===
                "industries"
              }
            >

              <ChevronDown
                size={16}
              />

            </button>

          </div>


          <div
            className={`mega-menu industries-menu ${
              activeMenu ===
              "industries"

                ? "show"

                : ""
            }`}
          >


            <div
              className="mega-menu-header"
            >

              <div>

                <span
                  className="mega-eyebrow"
                >

                  INDUSTRIES

                </span>


                <h2>

                  Built for
                  businesses

                  <br />

                  <span>

                    across industries.

                  </span>

                </h2>

              </div>


              <p>

                Our teams adapt to
                your customers,
                workflows, tools,
                compliance needs,
                and business goals.

              </p>

            </div>


            <div
              className="industries-grid"
            >

              {industries.map(
                (industry) => {

                  const Icon =
                    industry.icon;


                  return (

                    <Link

                      to={
                        `/industries/${industry.slug}`
                      }

                      className={
                        "industry-card"
                      }

                      key={
                        industry.slug
                      }

                      onClick={
                        closeMenu
                      }
                    >

                      <div
                        className={
                          "industry-icon"
                        }
                      >

                        <Icon
                          size={21}
                        />

                      </div>


                      <span>

                        {
                          industry.title
                        }

                      </span>


                      <ArrowUpRight
                        size={16}
                      />

                    </Link>

                  );

                }
              )}

            </div>


            <div
              className="mega-menu-bottom"
            >

              <span>

                Don’t see your
                industry?

              </span>


              <Link
                to="/contact"
                onClick={
                  closeMenu
                }
              >

                Talk to our team

                <ArrowUpRight
                  size={17}
                />

              </Link>

            </div>

          </div>

        </div>


        {/* ===============================
          RESOURCES
      ================================ */}

      <div
        className="nav-dropdown-wrapper"
        onMouseEnter={() =>
          openMenu("resources")
        }
        onMouseLeave={
          closeMenuWithDelay
        }
      >

        <div
          className="nav-dropdown-heading"
        >

          <Link
            to="/resources"
            className="nav-main-link"
            onClick={
              closeMenu
            }
          >

            Resources

          </Link>


          <button
            type="button"

            className={`nav-dropdown-trigger ${
              activeMenu ===
              "resources"
                ? "active"
                : ""
            }`}

            onClick={() =>
              toggleMenu(
                "resources"
              )
            }

            aria-label={
              activeMenu ===
              "resources"

                ? "Close resources menu"

                : "Open resources menu"
            }

            aria-expanded={
              activeMenu ===
              "resources"
            }
          >

            <ChevronDown
              size={16}
            />

          </button>

        </div>


        <div
          className={`mega-menu resources-menu ${
            activeMenu ===
            "resources"

              ? "show"

              : ""
          }`}
        >


          {/* HEADER */}

          <div
            className="mega-menu-header"
          >

            <div>

              <span
                className="mega-eyebrow"
              >

                KNOWLEDGE & INSIGHTS

              </span>


              <h2>

                Practical ideas

                <br />

                <span>

                  for growing teams.

                </span>

              </h2>

            </div>


            <p>

              Explore insights, real-world
              examples, practical guides,
              and updates designed to help
              businesses build stronger
              teams and scalable operations.

            </p>

          </div>


          {/* RESOURCE CARDS */}

          <div
            className="resources-grid"
          >


            {/* INSIGHTS */}

            <Link
              to="/resources/insights"
              className="resource-card"
              onClick={
                closeMenu
              }
            >

              <div
                className="resource-card-icon"
              >

                <BookOpen
                  size={22}
                />

              </div>


              <div>

                <h3>

                  Insights & Blogs

                </h3>


                <p>

                  Articles about
                  outsourcing, customer
                  experience, technology,
                  AI, and business growth.

                </p>

              </div>


              <ArrowUpRight
                size={18}
              />

            </Link>


            {/* CASE STUDIES */}

            <Link
              to="/resources/case-studies"
              className="resource-card"
              onClick={
                closeMenu
              }
            >

              <div
                className="resource-card-icon"
              >

                <BriefcaseBusiness
                  size={22}
                />

              </div>


              <div>

                <h3>

                  Case Studies

                </h3>


                <p>

                  See how teams,
                  processes, and
                  operational support
                  create measurable value.

                </p>

              </div>


              <ArrowUpRight
                size={18}
              />

            </Link>


            {/* GUIDES

            <Link
              to="/resources/guides"
              className="resource-card"
              onClick={
                closeMenu
              }
            >

              <div
                className="resource-card-icon"
              >

                <FileText
                  size={22}
                />

              </div>


              <div>

                <h3>

                  Guides & Playbooks

                </h3>


                <p>

                  Practical frameworks
                  and step-by-step
                  resources for building
                  scalable capabilities.

                </p>

              </div>


              <ArrowUpRight
                size={18}
              />

            </Link> */}


            {/* COMPANY UPDATES

            <Link
              to="/resources/company-updates"
              className="resource-card"
              onClick={
                closeMenu
              }
            >

              <div
                className="resource-card-icon"
              >

                <Megaphone
                  size={22}
                />

              </div>


              <div>

                <h3>

                  Company Updates

                </h3>


                <p>

                  News, announcements,
                  new capabilities, and
                  updates from Nodeus.

                </p>

              </div>


              <ArrowUpRight
                size={18}
              />

            </Link> */}

          </div>


          {/* BOTTOM */}

          <div
            className="mega-menu-bottom"
          >

            <span>

              Looking for a specific
              topic?

            </span>


            <Link
              to="/contact"
              onClick={
                closeMenu
              }
            >

              Talk to our team

              <ArrowUpRight
                size={17}
              />

            </Link>

          </div>

        </div>

      </div>


        {/* ===============================
                ABOUT
            ================================ */}

            <div
              className="nav-dropdown-wrapper about-dropdown-wrapper"
              onMouseEnter={() =>
                openMenu("about")
              }
              onMouseLeave={
                closeMenuWithDelay
              }
            >

              <div
                className="nav-dropdown-heading"
              >

                {/* ABOUT IS NOT CLICKABLE */}

                <button
                  type="button"

                  className={`nav-main-link nav-about-trigger ${
                    activeMenu === "about"
                      ? "active"
                      : ""
                  }`}

                  onClick={() =>
                    toggleMenu("about")
                  }

                  aria-expanded={
                    activeMenu === "about"
                  }
                >

                  About

                  <ChevronDown
                    size={16}
                  />

                </button>

              </div>


              {/* ABOUT DROPDOWN */}

              <div
                className={`mega-menu about-menu ${
                  activeMenu === "about"
                    ? "show"
                    : ""
                }`}
              >


                {/* HEADER */}

                <div
                  className="mega-menu-header"
                >

                  <div>

                    <span
                      className="mega-eyebrow"
                    >

                      ABOUT NODEUS

                    </span>


                    <h2>

                      The people and

                      <br />

                      <span>

                        purpose behind Nodeus.

                      </span>

                    </h2>

                  </div>


                  <p>

                    Learn about our company,
                    our approach, the people
                    behind our capabilities,
                    and the values that guide
                    how we work.

                  </p>

                </div>


                {/* ABOUT LINKS */}

                <div
                  className="about-menu-grid"
                >


                  {/* OUR COMPANY */}

                  <Link
                    to="/about/company"
                    className="about-menu-card"
                    onClick={
                      closeMenu
                    }
                  >

                    <div
                      className="about-menu-icon"
                    >

                      <BriefcaseBusiness
                        size={22}
                      />

                    </div>


                    <div>

                      <h3>

                        Our Company

                      </h3>


                      <p>

                        Learn about Nodeus,
                        our mission, and the
                        capabilities we build.

                      </p>

                    </div>


                    <ArrowUpRight
                      size={18}
                    />

                  </Link>


                  {/* OUR TEAM */}

                  <Link
                    to="/about/team"
                    className="about-menu-card"
                    onClick={
                      closeMenu
                    }
                  >

                    <div
                      className="about-menu-icon"
                    >

                      <Users
                        size={22}
                      />

                    </div>


                    <div>

                      <h3>

                        Our Team

                      </h3>


                      <p>

                        Meet the people and
                        leadership behind
                        Nodeus.

                      </p>

                    </div>


                    <ArrowUpRight
                      size={18}
                    />

                  </Link>


                  {/* HOW WE WORK */}

                  <Link
                    to="/about/how-we-work"
                    className="about-menu-card"
                    onClick={
                      closeMenu
                    }
                  >

                    <div
                      className="about-menu-icon"
                    >

                      <Lightbulb
                        size={22}
                      />

                    </div>


                    <div>

                      <h3>

                        How We Work

                      </h3>


                      <p>

                        Explore our approach
                        to building reliable
                        and scalable teams.

                      </p>

                    </div>


                    <ArrowUpRight
                      size={18}
                    />

                  </Link>


                  {/* CAREERS */}

                  <Link
                    to="/careers"
                    className="about-menu-card"
                    onClick={
                      closeMenu
                    }
                  >

                    <div
                      className="about-menu-icon"
                    >

                      <BriefcaseBusiness
                        size={22}
                      />

                    </div>


                    <div>

                      <h3>

                        Careers

                      </h3>


                      <p>

                        Explore opportunities
                        to grow and build
                        with Nodeus.

                      </p>

                    </div>


                    <ArrowUpRight
                      size={18}
                    />

                  </Link>


                </div>


                {/* BOTTOM */}

                <div
                  className="mega-menu-bottom"
                >

                  <span>

                    Want to work with Nodeus?

                  </span>


                  <Link
                    to="/contact"
                    onClick={
                      closeMenu
                    }
                  >

                    Start a conversation

                    <ArrowUpRight
                      size={17}
                    />

                  </Link>

                </div>

              </div>

            </div>


        {/* CONTACT */}

        <Link
          to="/contact"
          className="nav-contact"
          onClick={
            closeMenu
          }
        >

          Let’s Talk

          <ArrowUpRight
            size={16}
          />

        </Link>

      </nav>


      {/* =================================
          MOBILE MENU BUTTON
      ================================== */}

      <button

        type="button"

        className={
          "mobile-menu-button"
        }

        onClick={() => {

        setIsOpen(
          (current) => {

            const nextState =
              !current;

            if (
              !nextState
            ) {

              setActiveMenu(
                null
              );

            }

            return nextState;

          }
        );

      }}

        aria-label={
          isOpen

            ? "Close navigation"

            : "Open navigation"
        }

        aria-expanded={
          isOpen
        }
      >

        {

          isOpen

            ? (
              <X
                size={22}
              />
            )

            : (
              <Menu
                size={22}
              />
            )

        }

      </button>

    </header>

  );

}


export default Navbar;