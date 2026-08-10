import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Standalone Page Components
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import SkillsPage from './components/pages/SkillsPage';
import ProjectsPage from './components/pages/ProjectsPage';
import ExperiencePage from './components/pages/ExperiencePage';
import ServicesPage from './components/pages/ServicesPage';
import ContactPage from './components/pages/ContactPage';
import ResumePage from './components/sections/ResumePage';

import { PORTFOLIO_DATA } from './data/portfolioData';

function LayoutWrapper({ children }) {
  return (
    <main className="min-h-screen bg-[#090d16] text-slate-100 selection:bg-indigo-500 selection:text-white">
      <Navbar personalData={PORTFOLIO_DATA.personal} />
      {children}
      <Footer personalData={PORTFOLIO_DATA.personal} />
    </main>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutWrapper><HomePage /></LayoutWrapper>} />
        <Route path="/about" element={<LayoutWrapper><AboutPage /></LayoutWrapper>} />
        <Route path="/skills" element={<LayoutWrapper><SkillsPage /></LayoutWrapper>} />
        <Route path="/projects" element={<LayoutWrapper><ProjectsPage /></LayoutWrapper>} />
        <Route path="/experience" element={<LayoutWrapper><ExperiencePage /></LayoutWrapper>} />
        <Route path="/services" element={<LayoutWrapper><ServicesPage /></LayoutWrapper>} />
        <Route path="/contact" element={<LayoutWrapper><ContactPage /></LayoutWrapper>} />
        <Route path="/resume" element={<LayoutWrapper><ResumePage /></LayoutWrapper>} />
        <Route path="*" element={<LayoutWrapper><HomePage /></LayoutWrapper>} />
      </Routes>
    </Router>
  );
}

export default App;
