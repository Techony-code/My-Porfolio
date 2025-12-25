import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import FrontendProjects from "./pages/FrontendProjects";
import BlockchainProjects from "./pages/BlockchainProjects";
import useTheme from "./hooks/useTheme";
import Footer from "./sections/Footer";

function App() {
  useTheme();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#052e16] via-[#064e3b] to-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/frontend" element={<FrontendProjects />} />
        <Route path="/projects/blockchain" element={<BlockchainProjects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;