import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Frontend from "../pages/Projects/Frontend";
import Blockchain from "../pages/Projects/Blockchain";
import AllProjects from "../pages/Projects/AllProjects";

const AppRoutes = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/projects/frontend" element={<Frontend />} />
        <Route path="/projects/blockchain" element={<Blockchain />} />
        <Route path="/projects/all" element={<AllProjects />} />
      </Routes>
    </Layout>
  );
};

export default AppRoutes;