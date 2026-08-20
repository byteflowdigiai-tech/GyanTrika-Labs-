import React, { Suspense, lazy } from 'react';
import { motion } from "framer-motion";

const InnovationHub3D = lazy(() => import('./InnovationHub3D'));

export function CategoriesSection() {
  return (
    <section className="relative py-24 bg-[#FFFFFF] dark:bg-background overflow-hidden z-0">
      {/* Premium Flowing Wave Background */}
      <div className="absolute inset-0 pointer-events-none z-[-1] bg-[#FAFCFF] dark:bg-background overflow-hidden">
        {/* Soft radial glows for ambient lighting */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#1E3A8A]/10 blur-[120px] rounded-full" />

        {/* Faint tech grid pattern in the background */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />

        {/* Flowing Wave Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad-lines-right" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="url(#wave-grad-lines-right)" strokeWidth="0.1" fill="none" className="opacity-80 animate-pulse-glow" style={{ transformOrigin: 'bottom right' }}>
            {Array.from({ length: 80 }).map((_, i) => {
              const endY = 100 - i * 1.25;
              const cp1y = 100 - (100 - endY) * 0.2 - (i * 0.75);
              const cp2y = 100 - (100 - endY) * 0.6 - (i * 0.75);
              return (
                <path
                  key={i}
                  d={`M 100 100 C 60 ${cp1y}, 40 ${cp2y}, 0 ${endY}`}
                />
              );
            })}
          </g>
        </svg>

        {/* Tiny star-like sparkles */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-blue-300 rounded-full shadow-[0_0_8px_1px_rgba(147,197,253,0.8)]" />
        <div className="absolute top-[45%] right-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_10px_2px_rgba(96,165,250,0.8)]" />
        <div className="absolute bottom-[30%] left-[8%] w-1.5 h-1.5 bg-blue-200 rounded-full shadow-[0_0_12px_2px_rgba(191,219,254,0.6)] opacity-70" />
      </div>

      <div className="container relative max-w-[1400px]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="text-[#2563EB] font-bold text-xs tracking-[0.2em] uppercase">Our Innovation Hub</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          </div>
          
          <h2 className="font-display text-4xl md:text-[3rem] font-black mb-4 tracking-wide text-[#0C1446] dark:text-foreground">
            Explore Our <span className="text-[#2563EB]">Innovation Hub</span>
          </h2>
          <p className="text-[#64748B] dark:text-muted-foreground max-w-2xl mx-auto text-[17px]">
            Step into our advanced labs and innovation spaces designed for hands-on learning, research, and real-world problem solving.
          </p>
        </motion.div>

        {/* 3D WebGL Canvas Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(12,20,70,0.1)] border border-blue-100/50 dark:border-blue-900/30 bg-[#FAFCFF] dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/5">
          <Suspense fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mb-4"></div>
              <p className="text-[#2B5C92] dark:text-blue-300 font-semibold animate-pulse">Loading 3D Campus...</p>
            </div>
          }>
            <InnovationHub3D />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
