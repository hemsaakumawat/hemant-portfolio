import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import About from '../sections/About';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-16 min-h-screen bg-[#090d16] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all text-xs font-semibold"
        >
          <ArrowLeft className="w-4 h-4 text-indigo-400" />
          <span>Back to Home</span>
        </Link>
      </div>

      <About
        personalData={PORTFOLIO_DATA.personal}
        highlights={PORTFOLIO_DATA.highlights}
      />
    </div>
  );
};

export default AboutPage;
