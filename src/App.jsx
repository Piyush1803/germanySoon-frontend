import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { useLocation } from "react-router-dom";
import GetStarted from "./pages/getStarted";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className="w-full">
      {!isHome && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/getstarted" element={<GetStarted />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
