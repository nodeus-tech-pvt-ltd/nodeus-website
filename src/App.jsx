import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  AnimatePresence,
} from "framer-motion";

/* =========================
   PAGES
========================= */

import Home from "./pages/home/Home";
import Solutions from "./pages/solutions/Solutions";
// import SolutionCategory from "./pages/solutions/SolutionCategory";
import Industries from "./pages/industries/Industries";
import ServiceDetail from "./pages/solutions/ServiceDetail";;
// import ServiceDetail from "./pages/Services/ServiceDetail";
import IndustryDetail from "./pages/industries/IndustryDetail";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import Insights from "./pages/resources/Insights";
import InsightDetail from "./pages/resources/InsightDetail";
import CaseStudies from "./pages/resources/CaseStudies";
import CaseStudyDetail from "./pages/resources/CaseStudyDetail";
import Resources from "./pages/resources/Resources";
import Company from "./pages/about/Company";
import Team from "./pages/about/Team";
import HowWeWork from "./pages/about/HowWeWork";
import Careers from "./pages/about/Careers";
import JobDetails from "./pages/about/JobDetails";

/* =========================
   LAYOUT
========================= */

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

/* =========================
   SHARED COMPONENTS
========================= */

import ScrollToTop from "./components/shared/ScrollToTop";
import ScrollProgress from "./components/shared/ScrollProgress";
import BackToTop from "./components/shared/BackToTop";

/* =========================
   STYLES
========================= */

import "./App.css";


/* =========================
   ANIMATED ROUTES
========================= */

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes
        location={location}
        key={location.pathname}
      >
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/solutions"
          element={<Solutions />}
        />

        {/* <Route
          path="/solutions/:category"
          element={<SolutionCategory />}
        /> */}


        <Route
          path="/solutions/:slug"
          element={<ServiceDetail />}
        />


        {/* <Route
          path="/services/:service"
          element={<ServiceDetail />}
        /> */}

        <Route
          path="/industries"
          element={<Industries />}
        />

        <Route
          path="/industries/:industry"
          element={<IndustryDetail />}
        />

        {/* INDIVIDUAL SERVICE PAGES */}

        

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/resources/insights"
          element={<Insights />}
        />

        <Route
          path="/resources/insights/:slug"
          element={<InsightDetail />}
        />

        <Route
          path="/resources/case-studies"
          element={<CaseStudies />}
        />

        <Route
          path="/resources/case-studies/:slug"
          element={<CaseStudyDetail />}
        />

        <Route
          path="/resources"
          element={<Resources />}
        />

        <Route
          path="/about/company"
          element={<Company />}
        />

        <Route
          path="/about/team"
          element={<Team />}
        />

        <Route
          path="/about/how-we-work"
          element={<HowWeWork />}
        />

        <Route
          path="/careers"
          element={<Careers />}
        />

        <Route
          path="/careers/:slug"
          element={
            <JobDetails />
          }
        />
      </Routes>
    </AnimatePresence>
  );
}


/* =========================
   APP
========================= */

function App() {
  return (
    <>
      {/* PAGE UTILITIES */}

      <ScrollToTop />

      <ScrollProgress />

      {/* <BackToTop /> */}


      {/* GLOBAL NAVIGATION */}

      <Navbar />


      {/* PAGE CONTENT */}

      <AnimatedRoutes />


      {/* GLOBAL FOOTER */}

      <Footer />
    </>
  );
}

export default App;