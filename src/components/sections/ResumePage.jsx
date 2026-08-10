import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ArrowLeft, Code, FileText, CheckCircle2, GraduationCap, Mail, MapPin } from 'lucide-react';
import { PORTFOLIO_DATA } from '../../data/portfolioData';

const ResumePage = () => {
  const { personal, skills, experience, education } = PORTFOLIO_DATA;

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-bg w-[500px] h-[500px] bg-indigo-600/15 top-10 -left-40 animate-pulse-glow"></div>
      <div className="glow-bg w-[400px] h-[400px] bg-purple-600/15 bottom-10 -right-40 animate-pulse-glow"></div>

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Navigation back button */}
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </Link>

          <a
            href={personal.resumeUrl}
            download="Hemant-Kumawat-Resume.pdf"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-md shadow-indigo-500/25 transition-all"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF Resume</span>
          </a>
        </div>

        {/* Resume Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-4"
        >
          <div className="flex flex-wrap items-start justify-between gap-4 border-b border-slate-800/80 pb-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
                {personal.name}
              </h1>
              <p className="text-indigo-400 font-semibold text-base mt-1">
                {personal.role}
              </p>
            </div>

            <div className="space-y-1.5 text-xs text-slate-400 font-mono">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personal.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-purple-400" />
                <span>{personal.location}</span>
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            {personal.bio}
          </p>
        </motion.div>

        {/* Technical Skills Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-4"
        >
          <h2 className="text-xl font-bold text-white font-heading flex items-center gap-2">
            <Code className="w-5 h-5 text-indigo-400" />
            <span>Technical Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-indigo-400">Frontend</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                HTML, CSS, JavaScript, React.js, EJS, WordPress
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-purple-400">Backend</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Node.js, Express.js
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800/80 space-y-2">
              <h3 className="text-xs font-mono font-semibold uppercase text-emerald-400">Databases & Services</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                SQL, MongoDB, Supabase
              </p>
            </div>
          </div>
        </motion.div>

        {/* Experience & Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6"
        >
          <h2 className="text-xl font-bold text-white font-heading flex items-center gap-2">
            <FileText className="w-5 h-5 text-purple-400" />
            <span>Learning Journey & Projects Experience</span>
          </h2>

          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="space-y-2 border-l-2 border-indigo-500/40 pl-4 py-1">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold text-white font-heading">{exp.role}</h3>
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-lg border border-indigo-500/20">
                    {exp.period}
                  </span>
                </div>
                <p className="text-xs font-semibold text-slate-400">{exp.company}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{exp.description}</p>
                <ul className="space-y-1 pt-1">
                  {exp.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-center gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-4"
        >
          <h2 className="text-xl font-bold text-white font-heading flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-emerald-400" />
            <span>Education</span>
          </h2>

          {education.map((edu, idx) => (
            <div key={idx} className="flex flex-wrap items-start justify-between gap-2">
              <div>
                <h3 className="text-base font-bold text-white font-heading">{edu.degree}</h3>
                <p className="text-xs text-indigo-400 font-semibold">{edu.institution}</p>
                <p className="text-xs text-slate-400 mt-1">{edu.description}</p>
              </div>
              <span className="text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-lg border border-slate-800">
                {edu.period}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Bottom Download Bar */}
        <div className="flex justify-center pt-4">
          <a
            href={personal.resumeUrl}
            download="Hemant-Kumawat-Resume.pdf"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all"
          >
            <Download className="w-5 h-5" />
            <span>Download Official Resume PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
