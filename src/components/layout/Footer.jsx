import {
  ArrowUpRight,
} from "lucide-react";

import {
  Link,
} from "react-router-dom";

import nodeusLogo from "../../assets/white_logo.webp";


import "../../styles/layout/footer.css";


function Footer() {

  return (

    <footer
      className="site-footer"
    >


      {/* =================================
          MAIN FOOTER
      ================================== */}

      <div
        className="footer-main"
      >


        {/* =================================
            BRAND
        ================================== */}

        <div
          className="footer-brand"
        >


          <Link
            to="/"
            className="footer-logo"
            aria-label="Go to Nodeus homepage"
          >

            <img
              src={nodeusLogo}
              alt="Nodeus"
              className="footer-logo-image"
            />

          </Link>


          <p>

            Building the people,
            processes, and capabilities
            behind your business growth.

          </p>


          <Link
            to="/contact"
            className="footer-cta"
          >

            Start a conversation

            <ArrowUpRight
              size={17}
            />

          </Link>


          {/* =================================
              SOCIAL LINKS
          ================================== */}

          <div
            className="footer-socials"
          >


            {/* LINKEDIN */}

            {/* <a
              href="https://www.linkedin.com/company/nodeusofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Visit Nodeus on LinkedIn"
            > */}
            

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/company/nodeusofficial/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link footer-linkedin"
              aria-label="Visit Nodeus on LinkedIn"
            >

              

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5ZM.3 8.02h4.4V24H.3V8.02ZM7.45 8.02h4.22v2.18h.06c.59-1.11 2.03-2.28 4.18-2.28 4.47 0 5.3 2.94 5.3 6.77V24h-4.4v-8.18c0-1.95-.04-4.46-2.72-4.46-2.72 0-3.14 2.12-3.14 4.32V24h-4.4V8.02Z"
                />

              </svg>

            </a>


            {/* FACEBOOK */}

            {/* <a
              href="https://www.facebook.com/nodeus.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Visit Nodeus on Facebook"
            > */}

            {/* FACEBOOK */}

            <a
              href="https://www.facebook.com/nodeus.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link footer-facebook"
              aria-label="Visit Nodeus on Facebook"
            >

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <path
                  d="M13.5 24V13.1h3.65l.55-4.25H13.5V6.14c0-1.23.34-2.07 2.11-2.07h2.25V.27C17.47.22 16.14.1 14.6.1c-3.22 0-5.43 1.97-5.43 5.58v3.17H5.53v4.25h3.64V24h4.33Z"
                />

              </svg>

            </a>


            {/* INSTAGRAM */}

            {/* <a
              href="https://www.instagram.com/nodeus.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label="Visit Nodeus on Instagram"
            > */}

            {/* INSTAGRAM */}

            <a
              href="https://www.instagram.com/nodeus.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-link footer-instagram"
              aria-label="Visit Nodeus on Instagram"
            >



              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
              >

                <rect
                  x="2.5"
                  y="2.5"
                  width="19"
                  height="19"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4.2"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  className="footer-instagram-dot"
                />

              </svg>

            </a>


          </div>


        </div>


        {/* =================================
            EXPLORE
        ================================== */}

        <div
          className="footer-column"
        >

          <h4>

            Explore

          </h4>


          <Link
            to="/"
          >

            Home

          </Link>


          <Link
            to="/about"
          >

            About Nodeus

          </Link>


          <Link
            to="/about/how-we-work"
          >

            How We Work

          </Link>


          <Link
            to="/team"
          >

            Our Team

          </Link>


          <Link
            to="/careers"
          >

            Careers

          </Link>


          <Link
            to="/contact"
          >

            Contact

          </Link>


        </div>


        {/* =================================
            SOLUTIONS
        ================================== */}

        <div
          className="footer-column"
        >

          <h4>

            Solutions

          </h4>


          <Link
            to="/solutions"
          >

            All Solutions

          </Link>


          <Link
            to="/solutions/customer-experience"
          >

            Customer Experience

          </Link>


          <Link
            to="/solutions/business-operations"
          >

            Business Operations

          </Link>


          <Link
            to="/solutions/sales-revenue"
          >

            Sales & Revenue

          </Link>


          <Link
            to="/solutions/technology-it"
          >

            Technology & IT

          </Link>


          <Link
            to="/solutions/ai-automation"
          >

            AI & Automation

          </Link>


        </div>


        {/* =================================
            CONNECT
        ================================== */}

        <div
          className="footer-column"
        >

          <h4>

            Connect

          </h4>


          <a
            href="mailto:hello@nodeus.tech"
          >

            hello@nodeus.tech

          </a>


          <a
            href="mailto:careers@nodeus.tech"
          >

            careers@nodeus.tech

          </a>


          <span
            className="footer-location"
          >

            Islamabad, Pakistan

          </span>


          <Link
            to="/contact"
          >

            Start a project

          </Link>


        </div>


      </div>


      {/* =================================
          FOOTER BOTTOM
      ================================== */}

      <div className="footer-bottom">

  <span>
    © {new Date().getFullYear()} Nodeus. All rights reserved.
  </span>

</div>


    </footer>

  );

}


export default Footer;