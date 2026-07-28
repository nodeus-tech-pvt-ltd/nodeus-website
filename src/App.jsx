import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import SolutionCategory from "./pages/SolutionCategory";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";

import "./App.css";

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
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />

      <ScrollProgress />

      <BackToTop />

      <Navbar />

      <AnimatedRoutes />

      <Footer />
    </>
  );
}

export default App;