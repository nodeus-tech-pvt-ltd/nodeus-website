import { ArrowUpRight } from "lucide-react";
import nodeusLogo from "../assets/nodeus-logo-white.png";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-main">

        <div className="footer-brand">

          <a href="/" className="footer-logo">
            <img
              src={nodeusLogo}
              alt="Nodeus"
              className="footer-logo-image"
            />
          </a>

          <p>
            Building the people, processes, and capabilities behind your
            business growth.
          </p>

          <a href="#contact" className="footer-cta">
            Start a conversation
            <ArrowUpRight size={17} />
          </a>

        </div>

        <div className="footer-column">
          <h4>Explore</h4>

          <a href="#solutions">Solutions</a>
          <a href="#how-we-work">How We Work</a>
          <a href="#why-nodeus">Why Nodeus</a>
          <a href="#case-studies">Case Studies</a>
        </div>

        <div className="footer-column">
          <h4>Solutions</h4>

          <a href="#solutions">Customer Experience</a>
          <a href="#solutions">Business Operations</a>
          <a href="#solutions">Technology & IT</a>
          <a href="#solutions">Data & AI</a>
        </div>

        <div className="footer-column">
          <h4>Connect</h4>

          <a href="mailto:hello@nodeus.tech">
            hello@nodeus.tech
          </a>
        </div>

      </div>

      <div className="footer-bottom">

        <span>
          © {new Date().getFullYear()} Nodeus. All rights reserved.
        </span>

        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;