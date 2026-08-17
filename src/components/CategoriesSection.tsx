import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";

const labMarkers = [
  { title: "AI Lab", href: "/technology-lab-setup/ai-robotics", top: "30%", left: "20%" },
  { title: "Robotics Lab", href: "/technology-lab-setup/ai-robotics", top: "20%", left: "45%" },
  { title: "Drone Lab", href: "/technology-lab-setup/stem-tinkering", top: "25%", left: "75%" },
  { title: "Elearning Lab", href: "/technology-lab-setup/embedded-electronics", top: "65%", left: "30%" },
  { title: "Innovation Hub", href: "/technology-lab-setup/composite-skills", top: "70%", left: "75%" },
];

export function CategoriesSection() {
  return (
    <section className="relative py-24 bg-[#FFFFFF] overflow-hidden z-0">
      {/* Premium Flowing Wave Background - Matches Ecosystem Target Image Exactly */}
      <div className="absolute inset-0 pointer-events-none z-[-1] bg-[#FAFCFF] overflow-hidden">
        {/* Soft radial glows for ambient lighting */}
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-[#1E3A8A]/10 blur-[120px] rounded-full" />

        {/* Faint tech grid pattern in the background */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />



        {/* Flowing Wave Lines (Right Side - Originating exactly from Bottom Right) */}
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

      <div className="container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="text-[#2563EB] font-bold text-xs tracking-[0.2em] uppercase">Our Ecosystem</span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
          </div>
          
          <h2 className="font-display text-4xl md:text-[3rem] font-black uppercase mb-4 tracking-wide text-[#0C1446]">
            EXPLORE OUR <span className="text-[#2563EB]">ECOSYSTEM</span>
          </h2>
          <p className="text-[#64748B] max-w-2xl mx-auto text-[17px]">
            Everything you need to learn, build, and innovate in the world of robotics and emerging technologies.
          </p>
        </motion.div>

        <div className="relative w-full max-w-[1200px] mx-auto aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-blue-100/50 bg-white/50 backdrop-blur-sm">
          <img 
            src="/images/isometric_tech_labs.png" 
            alt="3D Technology Lab Complex" 
            className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
          />
          
          {labMarkers.map((marker, i) => (
            <motion.div
              key={marker.title}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 + 0.3 }}
              viewport={{ once: true }}
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ top: marker.top, left: marker.left }}
            >
              <Link to={marker.href} className="group relative flex items-center gap-2">
                <div className="bg-[#0C1446]/90 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(12,20,70,0.4)] whitespace-nowrap group-hover:-translate-y-1 transition-all duration-300">
                  <span className="font-display font-bold text-white text-sm tracking-wide">{marker.title}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white shadow-[0_0_15px_rgba(59,130,246,0.8)] group-hover:scale-110 group-hover:bg-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,1)] transition-all duration-300">
                  <Plus className="w-5 h-5" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
