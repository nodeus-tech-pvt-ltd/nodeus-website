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
import SolutionCategory from "./pages/solutions/SolutionCategory";
import Industries from "./pages/industries/Industries";
import ServiceDetail from "./pages/Services/ServiceDetail";
import IndustryDetail from "./pages/industries/IndustryDetail";

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

        <Route
          path="/solutions/:category"
          element={<SolutionCategory />}
        />

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
          path="/services/:service"
          element={<ServiceDetail />}
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

      <BackToTop />


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