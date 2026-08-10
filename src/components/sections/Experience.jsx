import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle2, Award } from 'lucide-react';

const Experience = ({ experiences, education }) => {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-bg w-96 h-96 bg-purple-600/10 top-1/3 -left-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Career Journey"
          title="Experience & Professional"
          highlightTitle="Background"
          subtitle="My career trajectory as a Senior Full-Stack Engineer, leading teams and delivering software solutions."
        />

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('work')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none cursor-pointer ${
                activeTab === 'work'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>

            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 focus:outline-none cursor-pointer ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certifications</span>
            </button>
          </div>
        </div>

        {/* Timeline Items */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l border-slate-800 space-y-12">
          {activeTab === 'work' &&
            experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-indigo-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-indigo-600 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                {/* Experience Card */}
                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-indigo-400 mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      <span>{exp.period}</span>
                      {exp.location && (
                        <>
                          <span className="text-slate-600">•</span>
                          <MapPin className="w-3.5 h-3.5 text-purple-400" />
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  {exp.achievements && (
                    <div className="space-y-2 pt-2 border-t border-slate-800/60">
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                        Key Impact & Achievements:
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.achievements.map((ach, aIdx) => (
                          <li key={aIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  {exp.skills && (
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.skills.map((s, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] font-mono"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}

          {activeTab === 'education' &&
            education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center group-hover:scale-125 group-hover:bg-purple-600 transition-all duration-300">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>

                <div className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl border border-slate-800/80 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-purple-400 mt-1">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      {edu.badge && (
                        <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-mono font-semibold">
                          {edu.badge}
                        </span>
                      )}
                      <span className="text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
