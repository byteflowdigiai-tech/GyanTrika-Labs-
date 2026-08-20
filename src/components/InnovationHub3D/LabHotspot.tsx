import React from 'react';
import { Html } from '@react-three/drei';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LabHotspotProps {
  title: string;
  icon: React.ElementType;
  href: string;
  isHovered: boolean;
}

export default function LabHotspot({ title, icon: Icon, href, isHovered }: LabHotspotProps) {
  const navigate = useNavigate();

  return (
    <Html
      center
      position={[0, 3, 0]}
      zIndexRange={[100, 0]}
      className={`transition-all duration-500 pointer-events-auto ${
        isHovered ? 'scale-110 opacity-100' : 'scale-90 opacity-90'
      }`}
    >
      <div 
        onClick={(e) => { e.stopPropagation(); navigate(href); }}
        className={`
          group flex items-center bg-white/95 backdrop-blur-md rounded-full 
          shadow-[0_8px_30px_rgba(12,20,70,0.12)] border border-white 
          transition-all duration-300 p-1 pr-4 gap-3 cursor-pointer
          ${isHovered ? 'border-[#B3CDE0] shadow-[0_12px_40px_rgba(37,99,235,0.25)] -translate-y-1' : ''}
        `}
        style={{ minWidth: 'max-content' }}
      >
        <div className={`
          w-10 h-10 rounded-full flex items-center justify-center 
          text-[#2B5C92] transition-colors border border-[#B3CDE0]/50
          ${isHovered ? 'bg-[#B3CDE0]/30' : 'bg-[#FAFCFF]'}
        `}>
          <Icon className="w-5 h-5" strokeWidth={2} />
        </div>
        
        <span className="font-display font-semibold text-[#0C1446] text-[15px] whitespace-nowrap">
          {title}
        </span>
        
        <div className={`
          w-6 h-6 rounded-full flex items-center justify-center text-white ml-2 
          shadow-[0_0_10px_rgba(43,92,146,0.4)] transition-transform
          ${isHovered ? 'scale-110 bg-[#2B5C92]' : 'bg-[#B3CDE0]'}
        `}>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Html>
  );
}
