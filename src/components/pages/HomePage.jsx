import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Code2, Sparkles, ArrowRight, User, Cpu, FolderGit2, Briefcase, Wrench, Mail, Send, Download
} from 'lucide-react';
import Hero from '../sections/Hero';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pageCards = [
    {
      title: "About Me",
      description: "Discover my background, learning journey, and passion for full-stack web development.",
      path: "/about",
      icon: User,
      badge: "Background",
      color: "from-blue-500/20 to-indigo-500/20",
      borderColor: "group-hover:border-blue-500/50"
    },
    {
      title: "Skills & Stack",
      description: "Explore the technologies I work with: HTML, CSS, JavaScript, React.js, Node.js, Express, SQL, MongoDB, & Supabase.",
      path: "/skills",
      icon: Cpu,
      badge: "Tech Stack",
      color: "from-cyan-500/20 to-blue-500/20",
      borderColor: "group-hover:border-cyan-500/50"
    },
    {
      title: "My Projects",
      description: "Check out web applications, full-stack projects, and interactive frontends I've built.",
      path: "/projects",
      icon: FolderGit2,
      badge: "Work Showcase",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-500/50"
    },
    {
      title: "Learning Journey",
      description: "View my educational background, personal development milestones, and core technical skills.",
      path: "/experience",
      icon: Briefcase,
      badge: "Timeline",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "group-hover:border-emerald-500/50"
    },
    {
      title: "Services Offered",
      description: "Frontend development, backend REST APIs, database integration, and WordPress site setup.",
      path: "/services",
      icon: Wrench,
      badge: "Capabilities",
      color: "from-amber-500/20 to-orange-500/20",
      borderColor: "group-hover:border-amber-500/50"
    },
    {
      title: "Contact Me",
      description: "Have a project idea, question, or collaboration proposal? Send me a message directly.",
      path: "/contact",
      icon: Mail,
      badge: "Get in Touch",
      color: "from-pink-500/20 to-rose-500/20",
      borderColor: "group-hover:border-pink-500/50"
    }
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Welcome Section */}
      <Hero
        personalData={PORTFOLIO_DATA.personal}
        stats={PORTFOLIO_DATA.stats}
      />

      {/* Overview Exploration Grid Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Explore Portfolio Pages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            Navigate My <span className="gradient-text">Developer Portfolio</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto mt-2">
            Click on any card below or use the navigation bar above to explore my skills, projects, learning journey, and contact page.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageCards.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <motion.div
                key={card.path}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  to={card.path}
                  className={`glass-card glass-card-hover p-6 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-5 h-full group ${card.borderColor} block`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${card.color} border border-slate-700/60 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-[11px] font-mono text-slate-400">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-indigo-400 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 group-hover:translate-x-1 transition-all">
                    <span>View {card.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Call To Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 rounded-3xl border border-slate-800/80 text-center relative overflow-hidden flex flex-col items-center justify-center space-y-6"
        >
          <div className="glow-bg w-96 h-96 bg-indigo-600/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-heading max-w-xl">
            Interested in Collaborating or Have Questions?
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-lg leading-relaxed">
            Feel free to send a direct message through the contact page or reach out via email.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </Link>

            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-semibold text-slate-300 bg-slate-800/80 hover:bg-slate-700 border border-slate-700 hover:text-white transition-all"
            >
              <Download className="w-4 h-4 text-pink-400" />
              <span>View Resume</span>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
