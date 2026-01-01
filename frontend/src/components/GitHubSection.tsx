import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitCommit, Users } from 'lucide-react';
export function GitHubSection() {
  return <section className="py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        scale: 0.95
      }} whileInView={{
        opacity: 1,
        scale: 1
      }} viewport={{
        once: true
      }} className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-900 to-slate-800 border border-slate-700/50 p-8 md:p-12">
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <Github size={32} className="text-white" />
                <h2 className="text-2xl font-bold text-white">
                  GitHub Contributions
                </h2>
              </div>
              <p className="text-slate-400 max-w-md mb-6">
                Active contributor to open source projects. Check out my code
                repositories and contribution graph.
              </p>
              <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700">
                <span>View Profile</span>
                <ExternalLinkIcon size={16} />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 w-full md:w-auto">
              <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex justify-center text-primary mb-2">
                  <GitCommit size={24} />
                </div>
                <div className="text-2xl font-bold text-white">1.2k</div>
                <div className="text-xs text-slate-500">Commits</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex justify-center text-yellow-500 mb-2">
                  <Star size={24} />
                </div>
                <div className="text-2xl font-bold text-white">350</div>
                <div className="text-xs text-slate-500">Stars</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex justify-center text-emerald-500 mb-2">
                  <Users size={24} />
                </div>
                <div className="text-2xl font-bold text-white">45</div>
                <div className="text-xs text-slate-500">Followers</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
}
function ExternalLinkIcon({
  size
}: {
  size: number;
}) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>;
}