import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import SolutionCategory from "./pages/SolutionCategory";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

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

      <Footer />

    </BrowserRouter>
  );
}

export default App;