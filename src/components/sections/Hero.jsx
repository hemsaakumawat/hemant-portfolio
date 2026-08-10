import React from 'react';
import { motion } from 'framer-motion';
import { Download, Send, Sparkles, ArrowDown, Code, CheckCircle2, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../common/Icons';

const Hero = ({ personalData, stats }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow Orbs */}
      <div className="glow-bg w-[500px] h-[500px] bg-indigo-600/15 top-10 -left-40 animate-pulse-glow"></div>
      <div className="glow-bg w-[450px] h-[450px] bg-purple-600/15 top-1/3 -right-40 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{personalData.availability}</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <p className="text-indigo-400 font-mono text-sm sm:text-base font-medium">
                Hello world, I'm
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none font-heading">
                {personalData.name.split(' ')[0]} <span className="gradient-text">{personalData.name.split(' ')[1]}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-300">
                {personalData.role}
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-slate-400 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              {personalData.tagline}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Explore Projects</span>
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-slate-600 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </button>

              <a
                href={personalData.resumeUrl}
                download="Hemant-Kumawat-Resume.pdf"
                className="inline-flex items-center gap-2.5 px-5 py-3.5 rounded-2xl text-sm font-medium text-slate-300 hover:text-indigo-400 border border-transparent hover:border-indigo-500/30 hover:bg-indigo-500/10 transition-all duration-200"
              >
                <Download className="w-4 h-4 text-pink-400" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Icons Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/60 max-w-md mx-auto lg:mx-0"
            >
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalData.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalData.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                  aria-label="Twitter"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Floating Visual Graphic / Portrait Mockup */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-md aspect-square rounded-3xl p-[2px] overflow-hidden shadow-2xl shadow-indigo-500/25 group"
            >
              {/* Rotating RGB Light Border */}
              <div className="rgb-border-spin"></div>

              {/* Inner Content Card */}
              <div className="relative w-full h-full rounded-[22px] bg-[#0d1322] overflow-hidden flex flex-col justify-between p-6 z-10">
                
                {/* Code Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-slate-500">developer-profile.ts</span>
                </div>

                {/* Simulated Terminal / Code Preview */}
                <div className="py-4 space-y-3 font-mono text-xs text-slate-300 leading-relaxed">
                  <p className="text-purple-400">
                    <span className="text-indigo-400">const</span> developer = &#123;
                  </p>
                  <p className="pl-4 text-slate-300">
                    name: <span className="text-emerald-400">"{personalData.name}"</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    title: <span className="text-amber-300">"{personalData.role}"</span>,
                  </p>
                  <p className="pl-4 text-slate-300">
                    coreTech: [<span className="text-sky-400">"React"</span>, <span className="text-sky-400">"Node"</span>, <span className="text-sky-400">"Express"</span>, <span className="text-sky-400">"MongoDB"</span>],
                  </p>
                  <p className="pl-4 text-slate-300">
                    passion: <span className="text-pink-400">"Full-Stack Web Development & Growth"</span>
                  </p>
                  <p className="text-purple-400">&#125;;</p>

                  <div className="pt-2 flex items-center gap-2 text-indigo-400 text-[11px]">
                    <Code className="w-3.5 h-3.5 animate-pulse" />
                    <span>Compiling portfolio assets... Done [28ms]</span>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800/80">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                    <span className="text-xs font-semibold text-slate-200">React & Next.js</span>
                  </div>
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-xs font-semibold text-slate-200">Node & APIs</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        {/* Hero Quick Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 text-center space-y-1"
            >
              <p className="text-3xl sm:text-4xl font-extrabold gradient-text font-heading">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-medium text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
