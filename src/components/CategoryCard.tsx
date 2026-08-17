import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  delay?: number;
}

export function CategoryCard({ title, description, icon: Icon, href, delay = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link
        to={href}
        className="group flex flex-col h-full p-8 rounded-3xl bg-white/95 backdrop-blur-sm border border-[#E2E8F0]/50 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(43,92,146,0.12)] hover:-translate-y-1 transition-all duration-300"
      >
        <div className="w-14 h-14 rounded-2xl bg-[#EEF2FF] flex items-center justify-center mb-6 overflow-hidden transition-colors duration-300 group-hover:bg-[#E0E7FF]">
          <Icon className="w-6 h-6 text-[#2563EB]" strokeWidth={2} />
        </div>
        <h3 className="font-display font-black text-[20px] uppercase mb-3 text-[#0C1446] tracking-wide group-hover:text-[#2563EB] transition-colors">
          {title}
        </h3>
        <div className="w-8 h-[3px] bg-[#2563EB] rounded-full mb-4 opacity-80" />
        <p className="text-[15px] leading-relaxed text-[#64748B]">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}
