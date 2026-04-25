import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X, ChevronLeft, ChevronRight, FileText, Monitor,
  Table as TableIcon, BookOpen, Target, Layers,
  Database, FileSpreadsheet, ExternalLink
} from 'lucide-react';

const AnalysisModal = ({ activeModule, setActiveModule, showSnackbar }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [viewMode, setViewMode] = useState('gallery'); // 'description', 'gallery', or 'dataset'

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.25 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 400, damping: 40 },
        opacity: { duration: 0.25 }
      }
    })
  };

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setImageIndex((prevIndex) => {
      const nextIndex = prevIndex + newDirection;
      const length = activeModule.images.length;
      if (nextIndex < 0) return length - 1;
      if (nextIndex >= length) return 0;
      return nextIndex;
    });
  };

  const handleLinkClick = (e, module) => {
    if (module.link === 'pending') {
      e.preventDefault();
      const msg = module.id === 'uber-datasets' ? "The Uber Analysis link is on the way! 🚗💨" :
        module.id === 'bank-loan' ? "Bank Loan analysis dashboard is being finalized! 🏦📈" :
          "Netflix Churn Prediction link is on the way! 🍿📉";
      showSnackbar(msg);
    }
  };

  if (!activeModule) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/95 backdrop-blur-3xl p-4 md:p-12"
        onClick={() => setActiveModule(null)}
      >
        {/* Navigation Arrows for Gallery */}
        {viewMode === 'gallery' && activeModule.images.length > 1 && (
          <>
            <motion.button
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full text-white/70 hover:text-white transition-all z-[1001]"
              onClick={(e) => { e.stopPropagation(); paginate(-1); }}
            >
              <ChevronLeft size={40} />
            </motion.button>
            <motion.button
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
              className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 p-3 bg-white/5 rounded-full text-white/70 hover:text-white transition-all z-[1001]"
              onClick={(e) => { e.stopPropagation(); paginate(1); }}
            >
              <ChevronRight size={40} />
            </motion.button>
          </>
        )}

        <button
          className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-[1001]"
          onClick={(e) => { e.stopPropagation(); setActiveModule(null); }}
        >
          <X size={40} strokeWidth={1} />
        </button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Navigation & Mode Switch - Square Transition */}
          <div className="absolute -top-9 right-0 flex items-center space-x-1 z-[1001] bg-[#161b22]/80 p-1 rounded-md border border-white/5 backdrop-blur-md shadow-2xl overflow-hidden">
            <button
              onClick={(e) => { e.stopPropagation(); setViewMode('description'); }}
              className="px-6 py-2 rounded-sm text-xs font-black uppercase tracking-tighter transition-all flex items-center gap-2 relative z-10"
              style={{
                color: viewMode === 'description' ? '#000000' : 'rgba(255,255,255,0.4)'
              }}
            >
              {viewMode === 'description' && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-sm shadow-lg"
                  style={{ backgroundColor: activeModule.themeColor }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <FileText size={14} /> Data Desc
              </span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setViewMode('gallery'); }}
              className="px-6 py-2 rounded-sm text-xs font-black uppercase tracking-tighter transition-all flex items-center gap-2 relative z-10"
              style={{
                color: viewMode === 'gallery' ? '#000000' : 'rgba(255,255,255,0.4)'
              }}
            >
              {viewMode === 'gallery' && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-sm shadow-lg"
                  style={{ backgroundColor: activeModule.themeColor }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <Monitor size={14} /> View Gallery
              </span>
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); setViewMode('dataset'); }}
              className="px-6 py-2 rounded-sm text-xs font-black uppercase tracking-tighter transition-all flex items-center gap-2 relative z-10"
              style={{
                color: viewMode === 'dataset' ? '#000000' : 'rgba(255,255,255,0.4)'
              }}
            >
              {viewMode === 'dataset' && (
                <motion.div
                  layoutId="activePill"
                  className="absolute inset-0 rounded-sm shadow-lg"
                  style={{ backgroundColor: activeModule.themeColor }}
                  transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <TableIcon size={14} /> Sample Dataset
              </span>
            </button>
          </div>
          <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-[#30363d] bg-[#0d1117] shadow-2xl">
            <AnimatePresence mode="wait">
              {viewMode === 'description' ? (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="w-full h-full p-8 md:p-12 overflow-auto custom-scrollbar bg-[#0d1117]"
                >
                  <div className="max-w-6xl mx-auto w-full">
                    {/* Standardized Header */}
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-6">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
                          <div className="text-5xl">{activeModule.logo}</div>
                        </div>
                        <div>
                          <h2 className="text-4xl font-black text-white tracking-tighter mb-2">{activeModule.title}</h2>
                          <p className="text-[#8b949e] text-sm font-medium uppercase tracking-[0.2em]">Project Overview & Insights</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {activeModule.stack.map(s => (
                          <span key={s} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest">{s}</span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                      <div className="space-y-8">
                        <section>
                          <h4 className="text-[#8b949e] uppercase text-[10px] font-black tracking-[0.2em] mb-4 flex items-center gap-2">
                            <BookOpen size={14} /> Project Overview
                          </h4>
                          <p className="text-xl text-[#c9d1d9] leading-relaxed font-light">
                            {activeModule.desc}
                          </p>
                        </section>

                        <section>
                          <h4 className="text-[#8b949e] uppercase text-[10px] font-black tracking-[0.2em] mb-4 flex items-center gap-2">
                            <Target size={14} /> Key Objective
                          </h4>
                          <p className="text-[#c9d1d9] leading-relaxed">
                            To derive actionable insights from the {activeModule.title.toLowerCase()} through advanced data visualization, statistical modeling, and pattern recognition techniques.
                          </p>
                        </section>
                      </div>

                      <div className="bg-[#161b22]/50 p-8 rounded-2xl border border-[#30363d] h-fit">
                        <h4 className="text-[#8b949e] uppercase text-[10px] font-black tracking-[0.2em] mb-6 flex items-center gap-2">
                          <Layers size={14} /> Dataset Schema
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeModule.sampleData.columns.slice(0, 15).map(col => (
                            <div key={col} className="px-3 py-2 bg-[#0d1117] rounded border border-[#30363d] text-[#c9d1d9] text-[10px] font-mono hover:border-[#f78166]/50 transition-colors">
                              {col}
                            </div>
                          ))}
                          {activeModule.sampleData.columns.length > 15 && (
                            <div className="px-3 py-2 bg-[#0d1117] rounded border border-[#30363d] text-white/30 text-[10px] font-mono">
                              +{activeModule.sampleData.columns.length - 15} more fields...
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : viewMode === 'gallery' ? (
                <div className="w-full h-full bg-[#0d1117] overflow-hidden group">
                  {/* Framed Image Container - Taking full space */}
                  <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
                    <motion.img
                      key={imageIndex}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      src={activeModule.images[imageIndex]}
                      alt={`${activeModule.title} ${imageIndex + 1}`}
                      className="w-full h-full object-contain pointer-events-none p-4"
                    />
                    
                    {/* Subtle Gradient Overlays for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
                  </div>
                </div>
              ) : (
                <motion.div
                  key="dataset"
                  initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="w-full h-full p-8 md:p-12 overflow-auto custom-scrollbar bg-[#0d1117]"
                >
                  <div className="max-w-6xl mx-auto w-full">
                    {/* Standardized Header */}
                    <div className="flex items-center justify-between mb-12">
                      <div className="flex items-center gap-6">
                        <div className="p-5 rounded-2xl bg-white/5 border border-white/10 shadow-2xl">
                          <Database size={48} style={{ color: activeModule.themeColor }} />
                        </div>
                        <div>
                          <h2 className="text-4xl font-black text-white tracking-tighter mb-2">{activeModule.title} Raw Data</h2>
                          <p className="text-[#8b949e] text-sm font-medium uppercase tracking-[0.2em]">Sample Dataset Preview</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {activeModule.stack.map(s => (
                          <span key={s} className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest">{s}</span>
                        ))}
                      </div>
                    </div>

                  <div className="overflow-x-auto rounded-xl border border-[#30363d] custom-scrollbar">
                    <table className="w-full text-left border-collapse min-w-[1200px]">
                      <thead>
                        <tr className="bg-[#161b22]">
                          {activeModule.sampleData.columns.map((col) => (
                            <th key={col} className="px-6 py-4 text-[11px] font-black uppercase tracking-wider text-[#8b949e] border-b border-[#30363d] whitespace-nowrap">
                              {col}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {activeModule.sampleData.rows.map((row, idx) => (
                          <tr key={idx} className="hover:bg-white/5 transition-colors border-b border-[#30363d]/50">
                            {row.map((cell, cidx) => (
                              <td key={cidx} className="px-6 py-4 text-sm font-mono text-[#c9d1d9] whitespace-nowrap">
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 p-6 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-black/50">
                        <FileSpreadsheet size={24} style={{ color: activeModule.themeColor }} />
                      </div>
                      <div>
                        <p className="text-white font-bold">Full Dataset Available</p>
                        <p className="text-[#8b949e] text-xs">Total records: {activeModule.id === 'bank-loan' ? '10,000+' : activeModule.id === 'netflix-churn' ? '5,000+' : activeModule.id === 'uber-datasets' ? '50,000+' : '8,500+'} entries</p>
                      </div>
                    </div>
                    <div className="text-xs font-mono text-white/20 italic">
                      Showing first 5 rows (Scroll right for all columns) →
                    </div>
                  </div>
                </div>
              </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Controls */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-8 flex flex-col items-center space-y-4 w-full"
          >
            {viewMode === 'gallery' && (
              <div className="flex space-x-3 mb-2">
                {activeModule.images.map((_, i) => (
                  <motion.div
                    key={i}
                    onClick={() => { setDirection(i > imageIndex ? 1 : -1); setImageIndex(i); }}
                    whileHover={{ scale: 1.3 }}
                    className="h-2 rounded-full transition-all cursor-pointer"
                    style={{
                      width: i === imageIndex ? '40px' : '8px',
                      backgroundColor: i === imageIndex ? activeModule.themeColor : 'rgba(255,255,255,0.2)'
                    }}
                  />
                ))}
              </div>
            )}

            <div className="flex items-center space-x-4">
              <div className="bg-[#161b22]/90 px-8 py-2.5 rounded-full border border-[#30363d] shadow-2xl backdrop-blur-xl">
                <span className="text-[#c9d1d9] text-base font-semibold tracking-wide flex items-center gap-4">
                  <span style={{ color: activeModule.themeColor }}>{activeModule.title}</span>
                  <span className="text-[#30363d]">|</span>
                  <span className="font-mono">{viewMode === 'gallery' ? `${imageIndex + 1} / ${activeModule.images.length}` : 'DATASET PREVIEW'}</span>
                </span>
              </div>

              <motion.a
                href={activeModule.link === 'pending' ? '#' : activeModule.link}
                target={activeModule.link === 'pending' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, filter: 'brightness(1.1)' }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => handleLinkClick(e, activeModule)}
                className="px-7 py-2.5 rounded-full font-black text-xs uppercase tracking-tighter flex items-center gap-2 shadow-lg transition-all border border-white/10"
                style={{
                  backgroundColor: activeModule.themeColor,
                  color: (activeModule.themeColor === '#ffffff' || activeModule.themeColor === '#ffcc00') ? '#000000' : '#ffffff'
                }}
              >
                View Project <ExternalLink size={14} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnalysisModal;
