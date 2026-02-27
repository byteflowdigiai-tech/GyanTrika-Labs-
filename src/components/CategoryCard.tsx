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
    >
      <Link
        to={href}
        className="group block p-6 rounded-[24px] bg-white border-[1px] border-slate-200 shadow-sm hover:shadow-[0_0_30px_rgba(21,114,212,0.35)] hover:border-[#1572d4]/60 transition-all duration-300 transform hover:-translate-y-1"
      >
        <div className="w-[56px] h-[56px] rounded-2xl bg-[#e6ecef]/80 flex items-center justify-center mb-6 overflow-hidden transition-colors duration-300 group-hover:bg-[#1572d4]/10">
          <Icon className="w-7 h-7 text-[#154673]" strokeWidth={2} />
        </div>
        <h3 className="font-display font-medium text-[22px] mb-3 text-[#154673] tracking-tight">
          {title}
        </h3>
        <p className="text-[17px] leading-relaxed text-[#567a99] line-clamp-2">
          {description}
        </p>
      </Link>
    </motion.div>
  );
}
