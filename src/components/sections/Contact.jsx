import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../common/SectionHeader';
import { useContactForm } from '../../hooks/useContactForm';
import {
  Mail, MapPin, Send, Loader2, CheckCircle2, AlertCircle,
  Clock, MessageSquare, Info
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from '../common/Icons';

const Contact = ({ personalData }) => {
  const {
    formData,
    errors,
    isLoading,
    cooldown,
    status,
    handleChange,
    handleSubmit
  } = useContactForm();

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Glow Orbs */}
      <div className="glow-bg w-[500px] h-[500px] bg-indigo-600/15 bottom-10 -right-40 animate-pulse-glow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          badge="Get In Touch"
          title="Let's Build Something"
          highlightTitle="Extraordinary"
          subtitle="Have a new project in mind, an engineering role opening, or just want to connect? Drop a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Card */}
            <div className="glass-card p-8 rounded-3xl border border-slate-800/80 space-y-6">
              <h3 className="text-2xl font-bold text-white font-heading">
                Contact Information
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                I'm currently available for developer projects, full-stack learning collaborations, and technical growth opportunities.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase">Direct Email</span>
                    <a
                      href={`mailto:${personalData.email}`}
                      className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors"
                    >
                      {personalData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase">Location</span>
                    <span className="text-sm font-semibold text-slate-200">{personalData.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-slate-500 uppercase">Response Time</span>
                    <span className="text-sm font-semibold text-slate-200">Within 24 Hours</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-6 border-t border-slate-800/80 space-y-3">
                <span className="block text-xs font-mono text-slate-500 uppercase">Find Me Online:</span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                    aria-label="GitHub Profile"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                    aria-label="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={personalData.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-indigo-500/10 transition-all"
                    aria-label="Twitter Profile"
                  >
                    <TwitterIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: EmailJS Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-slate-800/80 relative"
          >
            <h3 className="text-2xl font-bold text-white font-heading mb-6 flex items-center gap-2">
              <MessageSquare className="w-6 h-6 text-indigo-400" />
              <span>Send Me a Message</span>
            </h3>

            {/* Success Status Banner */}
            {status.submitted && status.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mb-6 p-4 rounded-2xl border ${
                  status.isDemo
                    ? 'bg-amber-500/10 border-amber-500/30 text-amber-300'
                    : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                } flex items-start gap-3 text-xs sm:text-sm`}
              >
                {status.isDemo ? (
                  <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                )}
                <div>
                  <p className="font-semibold">{status.isDemo ? 'Demo Mode Notice' : 'Message Sent!'}</p>
                  <p className="mt-0.5">{status.message}</p>
                </div>
              </motion.div>
            )}

            {/* Error Status Banner */}
            {status.submitted && !status.success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-start gap-3 text-xs sm:text-sm"
              >
                <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Submission Issue</p>
                  <p className="mt-0.5">{status.message}</p>
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Anti-Bot Honeypot Field (Hidden from human users) */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name Input */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs font-mono font-medium text-slate-300">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    maxLength={100}
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isLoading || cooldown > 0}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-rose-500/80 focus:border-rose-400'
                        : 'border-slate-800 focus:border-indigo-500/80'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Email Address Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs font-mono font-medium text-slate-300">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    maxLength={100}
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isLoading || cooldown > 0}
                    placeholder="e.g. sarah@company.com"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-rose-500/80 focus:border-rose-400'
                        : 'border-slate-800 focus:border-indigo-500/80'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Input */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block text-xs font-mono font-medium text-slate-300">
                  Subject <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  maxLength={200}
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={isLoading || cooldown > 0}
                  placeholder="e.g. Project Inquiry"
                  className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors ${
                    errors.subject
                      ? 'border-rose-500/80 focus:border-rose-400'
                      : 'border-slate-800 focus:border-indigo-500/80'
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              {/* Message Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="message" className="block text-xs font-mono font-medium text-slate-300">
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <span className="text-[11px] font-mono text-slate-500">
                    {formData.message.length}/2000 chars
                  </span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  maxLength={2000}
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isLoading || cooldown > 0}
                  placeholder="Tell me about your project goals, timelines, and tech requirements..."
                  className={`w-full px-4 py-3.5 rounded-2xl bg-slate-900/90 border text-slate-100 placeholder-slate-500 text-sm focus:outline-none transition-colors resize-none ${
                    errors.message
                      ? 'border-rose-500/80 focus:border-rose-400'
                      : 'border-slate-800 focus:border-indigo-500/80'
                  }`}
                ></textarea>
                {errors.message && (
                  <p className="text-xs text-rose-400 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading || cooldown > 0}
                className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:to-pink-500 shadow-lg shadow-indigo-500/25 transition-all duration-200 focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : cooldown > 0 ? (
                  <>
                    <Clock className="w-4 h-4 text-amber-400 animate-pulse" />
                    <span>
                      Please wait{' '}
                      {cooldown > 60
                        ? `${Math.floor(cooldown / 60)}m ${cooldown % 60}s`
                        : `${cooldown}s`}{' '}
                      before resubmitting
                    </span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
