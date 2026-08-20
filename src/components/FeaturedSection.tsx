import { motion } from "framer-motion";
import { Bot, CircuitBoard, Lightbulb, Rocket, Layers, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Lightbulb,
    title: "Atal Tinkering Lab",
    description: "Complete Atal Tinkering Lab setup as per NITI AAYOG specifications.",
    href: "/technology-lab-setup/stem-tinkering",
  },
  {
    icon: Bot,
    title: "Ai , STEM & Robotics Lab",
    description: "Advanced facility for designing autonomous systems and robotic arms.",
    href: "/technology-lab-setup/ai-robotics",
  },
  {
    icon: CircuitBoard,
    title: "Embedded Systems & Electronics Lab",
    description: "Deep dive into circuit design, microcontrollers, and IoT connectivity.",
    href: "/technology-lab-setup/embedded-electronics",
  },
  {
    icon: Rocket,
    title: "Astronomy Lab",
    description: "Explore the cosmos with varied telescopes and space science equipment.",
    href: "/technology-lab-setup/astronomy",
  },
  {
    icon: Layers,
    title: "Composite Skills Lab",
    description: "Multidisciplinary hub integrating 3D printing, carpentry, and fabrication.",
    href: "/technology-lab-setup/composite-skills",
  },
];

export function FeaturedSection() {
  return (
    <section className="relative py-24 bg-[#FAFCFF] dark:bg-background overflow-hidden z-0">
      {/* Premium Flowing Wave Background (Left Side Only) */}
      <div className="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
        {/* Soft radial glow for ambient lighting */}
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-[#3B82F6]/10 blur-[100px] rounded-full" />

        {/* Faint tech grid pattern in the background */}
        <div 
          className="absolute inset-0 opacity-[0.04]" 
          style={{ backgroundImage: 'radial-gradient(#1E3A8A 1px, transparent 1px)', backgroundSize: '24px 24px' }} 
        />

        {/* Flowing Wave Lines (Left Side - Originating exactly from Top Left) */}
        <svg className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id="wave-grad-lines-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E3A8A" stopOpacity="0.8" />
              <stop offset="40%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#93C5FD" stopOpacity="0" />
            </linearGradient>
          </defs>
          <g stroke="url(#wave-grad-lines-left)" strokeWidth="0.1" fill="none" className="opacity-80 animate-pulse-glow" style={{ transformOrigin: 'top left' }}>
            {Array.from({ length: 80 }).map((_, i) => {
              const endY = i * 1.25;
              const cp1y = endY * 0.2 + (i * 0.75);
              const cp2y = endY * 0.6 + (i * 0.75);
              return (
                <path
                  key={i}
                  d={`M 0 0 C 40 ${cp1y}, 60 ${cp2y}, 100 ${endY}`}
                />
              );
            })}
          </g>
        </svg>

        {/* Tiny star-like sparkles (Left side only) */}
        <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-blue-300 rounded-full shadow-[0_0_8px_1px_rgba(147,197,253,0.8)]" />
        <div className="absolute bottom-[30%] left-[8%] w-1.5 h-1.5 bg-blue-200 rounded-full shadow-[0_0_12px_2px_rgba(191,219,254,0.6)] opacity-70" />
      </div>

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Hands-On Learning for the <span className="text-gradient">Future Innovators</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              At GyanTrika Labs, we believe in learning by doing. Our curriculum combines theoretical knowledge with practical projects, ensuring students gain real-world skills that matter in today's tech-driven world.
            </p>
            <Button asChild className="gap-2">
              <Link to="/programs">
                View Our courses <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <div className="space-y-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={feature.href}
                  className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold mb-1 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
