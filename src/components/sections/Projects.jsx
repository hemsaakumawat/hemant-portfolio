import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import ProjectModal from './ProjectModal';
import { ExternalLink, Eye, Sparkles } from 'lucide-react';
import { GithubIcon } from '../common/Icons';

const categories = ['All', 'Full Stack', 'Web Apps', 'AI & Web Apps'];

const Projects = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category.toLowerCase().includes(activeFilter.toLowerCase()) || activeFilter.toLowerCase().includes(p.category.toLowerCase()));

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-slate-950/30">
      {/* Background glow */}
      <div className="glow-bg w-[450px] h-[450px] bg-indigo-600/10 top-1/4 -right-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Featured Projects"
          title="Recent Work & Digital"
          highlightTitle="Products"
          subtitle="Explore selected full-stack web applications, SaaS dashboards, and modern UI engineering projects."
        />

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 focus:outline-none cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25 scale-105'
                    : 'bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass-card glass-card-hover rounded-3xl border border-slate-800/80 overflow-hidden flex flex-col justify-between group"
              >
                <div className="cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {/* Project Image Container */}
                  <div className="relative h-52 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80"></div>

                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-indigo-400 text-xs font-mono font-medium">
                        {project.category}
                      </span>
                    </div>

                    {/* Quick View Hover Overlay */}
                    <div className="absolute inset-0 bg-indigo-950/60 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="px-4 py-2.5 rounded-xl bg-indigo-600 text-white text-xs font-semibold flex items-center gap-2 shadow-lg hover:bg-indigo-500 transition-colors cursor-pointer"
                      >
                        <Eye className="w-4 h-4" />
                        <span>Quick View</span>
                      </button>
                    </div>
                  </div>

                  {/* Project Details Content */}
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-bold text-white font-heading group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm line-clamp-2 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.slice(0, 4).map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-300 text-[11px] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="px-2 py-1 rounded-lg bg-slate-800/50 text-slate-500 text-[11px] font-mono">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-800/60 mt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5 transition-colors focus:outline-none"
                  >
                    <span>View Details</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-colors"
                      aria-label="View Source Code"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 hover:bg-indigo-600 hover:text-white transition-all"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default Projects;
