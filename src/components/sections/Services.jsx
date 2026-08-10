import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { Code, Layout, Zap, Server, CheckCircle2, ArrowRight } from 'lucide-react';

const iconMap = {
  Code,
  Layout,
  Zap,
  Server
};

const Services = ({ services }) => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Services Offered"
          title="How I Can Help Your"
          highlightTitle="Business Grow"
          subtitle="Specialized software engineering services designed to bring your vision to market fast with high quality."
        />

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover p-8 rounded-3xl border border-slate-800/80 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-pink-400 transition-all duration-300">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-indigo-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
                  <ul className="space-y-2.5 pt-2 border-t border-slate-800/60">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Link */}
                <div className="pt-4 border-t border-slate-800/80">
                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400 hover:text-indigo-300 group-hover:translate-x-1 transition-all focus:outline-none cursor-pointer"
                  >
                    <span>Request Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
