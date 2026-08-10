import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import {
  Code, FileCode, FileCode2, Palette, Globe, Sparkles, Layers, Cpu,
  Server, Terminal, Database, Network, Share2, Cloud, GitBranch,
  Box, CloudRain, Zap, CheckSquare, Send
} from 'lucide-react';
import { FigmaIcon } from '../common/Icons';

const iconMap = {
  Code, FileCode, FileCode2, Palette, Globe, Sparkles, Layers, Cpu,
  Server, Terminal, Database, Network, Share2, Cloud, GitBranch,
  Box, CloudRain, Zap, Figma: FigmaIcon, CheckSquare, Send
};

const Skills = ({ skillData }) => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillData.items
    : skillData.items.filter(item => item.category === activeTab);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="glow-bg w-96 h-96 bg-purple-600/10 bottom-0 left-1/4"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Skills & Tech Stack"
          title="Technologies I Build With"
          highlightTitle="Daily"
          subtitle="A comprehensive overview of my technical stack, frameworks, and modern web development tools."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {skillData.categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => {
              const IconComponent = iconMap[skill.icon] || Code;
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card glass-card-hover p-5 rounded-2xl border border-slate-800/80 flex flex-col justify-between space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-11 h-11 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center text-indigo-400`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white font-heading">
                      {skill.name}
                    </h3>
                    <p className="text-[11px] text-slate-400 capitalize font-mono mt-0.5">
                      {skill.category}
                    </p>
                  </div>

                  {/* Level Progress Bar */}
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color || 'from-indigo-500 to-purple-500'} rounded-full`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
