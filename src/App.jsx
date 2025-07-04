import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import SuccessPage from "./pages/SuccessPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <div className={`'mx-4 sm:mx-8 lg:mx-16'}`}>
      {!isHome && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
