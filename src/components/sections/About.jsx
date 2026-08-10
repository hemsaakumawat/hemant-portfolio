import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Code2, Zap, Layout, Server, MapPin, Mail, Calendar, CheckCircle2, Download } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Zap: Zap,
  Layout: Layout,
  Server: Server
};

const About = ({ personalData, highlights }) => {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="About Me"
          title="Architecting Modern Web"
          highlightTitle="Solutions"
          subtitle="A peek into my background, engineering philosophy, and passion for building seamless software."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white font-heading flex items-center gap-3">
                <span>Engineering with Purpose & Precision</span>
              </h3>
              <p className="text-slate-300 text-base leading-relaxed">
                {personalData.bio}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                Over the past 6+ years, I've collaborated with early-stage startups and enterprise engineering teams to transform ambitious ideas into production-ready web platforms. I prioritize code maintainability, end-user accessibility, and performance optimization from day one.
              </p>
            </div>

            {/* Quick Details List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-500 uppercase">Location</span>
                  <span className="text-sm font-semibold text-slate-200">{personalData.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-slate-500 uppercase">Email</span>
                  <span className="text-sm font-semibold text-slate-200">{personalData.email}</span>
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={personalData.resumeUrl}
                download="Hemant-Kumawat-Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-500/20"
              >
                <Download className="w-4 h-4" />
                <span>Download Curriculum Vitae</span>
              </a>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {highlights.map((item, idx) => {
              const IconComponent = iconMap[item.icon] || Code2;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card glass-card-hover p-6 rounded-2xl border border-slate-800/80 space-y-3"
                >
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-white font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
