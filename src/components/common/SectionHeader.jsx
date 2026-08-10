import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ badge, title, highlightTitle, subtitle, centered = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? 'text-center' : 'text-left'}`}
    >
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-wider mb-4 ${centered ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
        {title}{' '}
        {highlightTitle && (
          <span className="gradient-text">{highlightTitle}</span>
        )}
      </h2>

      {subtitle && (
        <p className={`text-slate-400 text-base md:text-lg max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
