import React, { useState, useEffect } from 'react';
import {
  BarChart2, ExternalLink, Menu, Github, Search, Plus, 
  CircleDot, GitPullRequest, BookOpen, Inbox
} from 'lucide-react';
import { motion } from 'framer-motion';
import ContributionGraph from './ContributionGraph';
import AnalysisModal from './AnalysisModal';
import { useSnackbar } from '../context/SnackbarContext';
import { modules } from '../data/modulesData.jsx';

const MainContent = () => {
  const [activeModule, setActiveModule] = useState(null);
  const showSnackbar = useSnackbar();

  useEffect(() => {
    if (activeModule) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeModule]);

  return (
    <div className="pt-6 space-y-6 relative">
      {/* Main Analysis Section */}
      <div className="border border-[#30363d] rounded-md overflow-hidden bg-[#0d1117]">
        {/* Real GitHub Header Recreation */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#30363d] bg-[#010409]">
          <div className="flex items-center space-x-3">
            <button className="p-1 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
              <Menu size={20} />
            </button>
            <Github size={24} className="text-white" />
            <div className="flex items-center text-sm font-semibold whitespace-nowrap">
              <span className="text-[#7d8590] hover:underline cursor-pointer">Aman-kumar-git12</span>
              <span className="text-[#7d8590] mx-2">/</span>
              <span className="text-[#e6edf3] hover:underline cursor-pointer">Data_Analysis-1</span>
              <span className="ml-2 px-2 py-0.5 border border-[#30363d] rounded-full text-[12px] text-[#7d8590] font-medium">Public</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <div className="relative group">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#7d8590]">
                <Search size={14} />
              </div>
              <input
                type="text"
                placeholder="Type / to search"
                readOnly
                className="bg-[#0d1117] border border-[#30363d] rounded-md pl-9 pr-2 py-1.5 text-xs w-64 text-[#7d8590] focus:outline-none focus:border-[#1f6feb] transition-all cursor-pointer"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2 border border-[#30363d] rounded px-1.5 py-0.5 text-[10px] text-[#7d8590]">
                /
              </div>
            </div>

            <div className="flex items-center space-x-1 border-l border-[#30363d] pl-3">
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <Plus size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <CircleDot size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <GitPullRequest size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <BookOpen size={16} />
              </button>
              <button className="p-2 hover:bg-[#21262d] rounded-md transition-colors text-[#7d8590]">
                <Inbox size={16} />
              </button>
              <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#7ee787] to-[#aff5b4] ml-2 cursor-pointer border border-white/10" title="User Profile"></div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="flex items-center space-x-3">
            <h1 className="text-3xl font-semibold flex items-center gap-3 text-white">
              <span className="animate-pulse">📊</span> Data Visualisation Showcase
            </h1>
            <div className="flex items-center space-x-1 mt-1">
              <div className="bg-[#238636] text-white flex items-center px-2 py-0.5 rounded text-[10px] font-bold gap-1">
                Portfolio Active
              </div>
            </div>
          </div>

          <p className="text-[#c9d1d9] text-[16px] leading-relaxed max-w-3xl">
            Showcasing data-driven analytical projects built to uncover patterns, optimize decisions, and transform raw information into meaningful visual insights.
          </p>

          <div className="pt-8 border-t border-[#30363d] mt-8">
            <h2 className="text-2xl font-semibold flex items-center gap-3 mb-6 text-white">
              <BarChart2 size={22} className="text-[#8b949e]" /> Analysis Modules
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {modules.map((module) => (
                <motion.div
                  key={module.id}
                  whileHover={{
                    y: -8,
                    scale: 1.02,
                    borderColor: module.themeColor,
                    boxShadow: `0 20px 40px -20px ${module.glowColor}`
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveModule(module)}
                  className="border border-[#30363d] rounded-2xl p-7 cursor-pointer transition-all group relative overflow-hidden flex flex-col justify-between h-full"
                  style={{ backgroundColor: module.bgColor }}
                >
                  {/* Branded Header Accent */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-2"
                    style={{ backgroundColor: module.themeColor }}
                  />

                  {/* Floating Branded Watermark */}
                  <div
                    className="absolute -bottom-4 -right-4 text-7xl opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-500 transform group-hover:-rotate-12 group-hover:scale-110 pointer-events-none"
                    style={{ color: module.themeColor }}
                  >
                    {module.logo}
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-4 relative z-10">
                      <div className="flex items-center space-x-4">
                        <div
                          className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-lg"
                          style={{ backgroundColor: `${module.themeColor}20`, color: module.themeColor }}
                        >
                          {module.icon}
                        </div>
                        <span className="text-white font-bold text-xl group-hover:text-white transition-colors">{module.title}</span>
                      </div>
                    </div>

                    <p className="text-[15px] text-[#8b949e] leading-relaxed relative z-10 group-hover:text-[#c9d1d9] transition-colors mb-4 line-clamp-3 min-h-[4.5rem]">{module.desc}</p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-2 relative z-10 mb-6">
                      {module.stack.map(tech => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-[#161b22] border border-[#30363d] text-[10px] font-mono text-[#8b949e] group-hover:border-opacity-50 group-hover:text-[#c9d1d9]"
                          style={{ borderLeftColor: module.themeColor, borderLeftWidth: '2px' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-between relative z-10">
                    <div className="flex items-center space-x-2">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map(i => (
                          <div key={i} className="w-5 h-5 rounded-full border-2 border-[#161b22] bg-[#30363d] flex items-center justify-center overflow-hidden">
                            <div className="w-full h-full opacity-50" style={{ backgroundColor: module.themeColor }}></div>
                          </div>
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold text-[#8b949e] group-hover:text-white transition-colors">
                        Interactive Visuals
                      </span>
                    </div>
                    <motion.div
                      className="text-xs font-black uppercase tracking-widest flex items-center gap-2"
                      style={{ color: module.themeColor }}
                    >
                      Analyze <ExternalLink size={14} />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ContributionGraph />

      {/* Pop-out Modal */}
      <AnalysisModal 
        activeModule={activeModule} 
        setActiveModule={setActiveModule} 
        showSnackbar={showSnackbar} 
      />
    </div>
  );
};

export default MainContent;
