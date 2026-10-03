import React, { Suspense, lazy } from 'react';
import { motion } from "framer-motion";
import { ErrorBoundary } from "./ErrorBoundary";

const InnovationHub3D = lazy(() => import('./InnovationHub3D'));

export function CategoriesSection() {
  return (
    <section className="relative py-24 bg-[#FFFFFF] dark:bg-background overflow-hidden z-0">
      {/* Premium Flowing Wave Background */}
      <div className="absolute inset-0 pointer-events-none z-[-1] bg-[#FAFCFF] dark:bg-background overflow-hidden">
        {/* Soft radial glows for ambient lighting */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#1E3A8A]/[0.04] blur-[120px] rounded-full" />

        {/* Faint tech grid pattern in the background */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />
      </div>

      <div className="container relative max-w-[1400px]">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-secondary dark:text-primary font-semibold text-sm mb-3">Our Innovation Hub</span>
          
          <h2 className="font-display text-3xl md:text-[2.75rem] md:leading-tight font-bold mb-4 tracking-tight text-foreground">
            Explore our <span className="text-secondary dark:text-primary">innovation hub</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-[17px] leading-relaxed">
            Step into our advanced labs and innovation spaces designed for hands-on learning, research, and real-world problem solving.
          </p>
        </motion.div>

        {/* 3D WebGL Canvas Container */}
        <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[2/1] rounded-2xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(12,20,70,0.2)] border border-border bg-[#FAFCFF] dark:bg-slate-900 ring-1 ring-black/5 dark:ring-white/5">
          <ErrorBoundary fallback={
            <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
              <p className="text-muted-foreground">The interactive campus view couldn't load. Please refresh the page to try again.</p>
            </div>
          }>
          <Suspense fallback={
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#2563EB] mb-4"></div>
              <p className="text-[#2B5C92] dark:text-blue-300 font-semibold animate-pulse">Loading 3D Campus...</p>
            </div>
          }>
            <InnovationHub3D />
          </Suspense>
          </ErrorBoundary>
        </div>
      </div>
    </section>
  );
}
