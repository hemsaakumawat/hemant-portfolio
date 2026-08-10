import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowUp, Code2, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

const Footer = ({ personalData }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#060911] border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      {/* Glow gradient backdrop */}
      <div className="glow-bg w-96 h-96 bg-indigo-600/10 top-0 left-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 p-[1px]">
                <div className="w-full h-full bg-[#0b0f19] rounded-[11px] flex items-center justify-center">
                  <Code2 className="w-4 h-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-xl font-bold text-white tracking-tight font-heading">
                {personalData.name.split(' ')[0]}
                <span className="gradient-text">.{personalData.name.split(' ')[1] || 'dev'}</span>
              </span>
            </div>

            <p className="text-slate-400 text-sm max-w-md leading-relaxed">
              {personalData.tagline}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={personalData.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="Twitter Profile"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="w-9 h-9 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                aria-label="Send Direct Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links & Status */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 font-heading">
              Explore
            </h3>
            <ul className="space-y-2.5">
              {navLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors focus:outline-none"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="flex items-center gap-1.5">
            © {new Date().getFullYear()} {personalData.name}. Crafted with{' '}
            <Heart className="w-3.5 h-3.5 text-pink-500 inline fill-pink-500" /> using React, Vite & Tailwind CSS.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-600/20 transition-all focus:outline-none group"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-indigo-400" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
