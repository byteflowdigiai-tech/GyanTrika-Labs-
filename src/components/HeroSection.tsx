import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Bot, Lightbulb, Box, Layers, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import roboticArm from "@/assets/robotic-arm.jpg";
import darkModeRobot from "@/assets/clean-dark-mode-robot.png";
import { useEffect, useRef, useState } from "react";

const FloatingBranchCard = ({ title, topics, icon: Icon, className, delay, rotateY = 0 }: { title: string, topics: string[], icon: any /* eslint-disable-line @typescript-eslint/no-explicit-any */, className: string, delay: number, rotateY?: number }) => (
  <div className={`absolute pointer-events-auto z-30 hidden lg:block ${className}`} style={{ perspective: 1200 }}>
    <motion.div
      className="relative rounded-xl w-[240px] sm:w-[280px]"
      style={{ transformStyle: 'preserve-3d' }}
      initial={{ y: 0, rotateY, rotateX: 0 }}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <div className="relative p-4 sm:p-5 rounded-xl border border-border bg-card/95 backdrop-blur-md flex items-center justify-between shadow-[0_12px_32px_-12px_rgba(12,20,70,0.25)]">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground text-[13px] sm:text-[14px] mb-2 tracking-normal">{title}</h3>
          <ul className="space-y-1.5">
            {topics.map((t, i) => (
              <li key={i} className="text-muted-foreground text-[11px] sm:text-[12px] flex items-center gap-1.5">
                <span className="w-1 h-1 rounded-full bg-secondary dark:bg-primary" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-3 shrink-0 w-11 h-11 rounded-lg bg-primary/[0.06] dark:bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-secondary dark:text-primary" strokeWidth={1.75} />
        </div>
      </div>
    </motion.div>
  </div>
);

const CounterItem = ({ icon: Icon, value, label }: { icon: any /* eslint-disable-line @typescript-eslint/no-explicit-any */, value: string, label: string }) => {
  const numericValue = parseInt(value);
  const suffix = value.replace(/[0-9]/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const springValue = useSpring(0, {
    damping: 30,
    stiffness: 100,
    duration: 2
  });

  const displayValue = useTransform(springValue, (current) => Math.round(current));

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, numericValue, springValue]);

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="w-10 h-10 rounded-full bg-[#B3CDE0]/20 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-[#2B5C92] dark:text-primary" />
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold text-[#0C1446] dark:text-foreground flex items-center justify-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-widest font-semibold text-[#2B5C92] dark:text-primary mt-1">
        {label}
      </div>
    </div>
  );
};

export function HeroSection() {

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FFFFFF] dark:bg-background circuit-pattern overflow-hidden">
      {/* Starry Night Premium Atmosphere - Exact match to Image 2 */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-[#2B5C92]/[0.08] via-[#B3CDE0]/10 to-transparent dark:from-[#2B5C92]/40 dark:via-[#2B5C92]/10" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#B3CDE0]/10 to-transparent" />
      </div>

      {/* Light Mode: Background robotic arm elements */}
      <motion.div
        className="absolute right-[-15%] sm:right-[-2%] top-[8%] sm:top-[5%] w-[80%] sm:w-[45%] opacity-[0.12] sm:opacity-[0.5] pointer-events-none select-none dark:hidden z-10 mix-blend-multiply"
        initial={{ rotate: -10, y: 0 }}
        animate={{
          rotate: [-10, 5, -10],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <img
          src={roboticArm}
          alt=""
          className="w-full h-auto"
        />
      </motion.div>


      {/* Dark Mode: Background robot element */}
      <motion.div
        className="absolute -right-[10%] top-[10%] sm:top-auto sm:bottom-[-5%] sm:right-[-5%] w-[110%] sm:w-[60%] opacity-[0.25] sm:opacity-[0.25] pointer-events-none select-none hidden dark:block"
        initial={{ y: 20, x: 20 }}
        animate={{
          y: [-10, 20, -10],
          x: [10, -10, 10],
          rotate: [-2, 2, -2]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="relative">
          <img
            src={darkModeRobot}
            alt="AI Robot"
            className="w-full h-auto object-contain mask-radial-fade"
          />
          {/* Subtle glow behind the robot */}
          <div className="absolute inset-0 bg-[#B3CDE0]/20 blur-[100px] rounded-full -z-10" />
        </div>
      </motion.div>

      {/* Floating Decorative Elements inspired by Image 1 and to fill empty space */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
        {/* Branch Cards - Left side of the robotic arm */}
        <FloatingBranchCard
          title="3D Printing"
          topics={["CAD Design", "Prototyping", "Materials"]}
          icon={Layers}
          className="right-[22%] xl:right-[28%] top-[10%]"
          delay={0}
          rotateY={25}
        />
        <FloatingBranchCard
          title="IoT & Embedded"
          topics={["Sensors", "Microcontrollers", "Smart Devices"]}
          icon={Cpu}
          className="right-[25%] xl:right-[32%] top-[40%]"
          delay={1.5}
          rotateY={30}
        />
        <FloatingBranchCard
          title="STEM"
          topics={["Science & Math", "Tinkering", "Engineering"]}
          icon={Lightbulb}
          className="right-[20%] xl:right-[26%] bottom-[12%]"
          delay={2.8}
          rotateY={20}
        />

        {/* Branch Cards - Right side of the robotic arm */}
        <FloatingBranchCard
          title="AI & Robotics"
          topics={["Machine Learning", "Computer Vision", "Automation"]}
          icon={Bot}
          className="right-[1%] xl:right-[5%] top-[18%]"
          delay={0.8}
          rotateY={-25}
        />
        <FloatingBranchCard
          title="Composite Skills"
          topics={["3D Printing", "Fabrication", "Design"]}
          icon={Box}
          className="right-[-2%] xl:right-[2%] top-[48%]"
          delay={2.2}
          rotateY={-30}
        />
        <FloatingBranchCard
          title="Rapid Prototyping"
          topics={["Laser Cutting", "CNC Machining", "3D Modeling"]}
          icon={Wrench}
          className="right-[3%] xl:right-[8%] bottom-[8%]"
          delay={1.1}
          rotateY={-20}
        />
      </div>

      <div className="container relative z-10 pt-16 lg:pt-24 pb-12 pointer-events-none min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-[750px] text-left pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card border border-border shadow-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[13px] font-medium text-muted-foreground">Lab of Ideas · Innovation Hub</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-4xl leading-[1.1] sm:text-5xl sm:leading-[1.08] lg:text-[4rem] lg:leading-[1.05] font-bold mb-6 tracking-tight text-foreground break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Shaping future skills. <br className="hidden sm:block" />
            Inspiring future <span className="text-secondary dark:text-primary">innovators.</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We transform schools into innovation ecosystems. A next-generation digital platform with NEP 2020 aligned, industry-driven courses and future-ready lab infrastructure.
          </motion.p>

          {/* 2x2 Feature Grid - Matching Target Image Layout */}
          <motion.div 
            className="grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-5 mb-10 max-w-[560px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 text-secondary dark:text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-[14px] sm:text-[16px] leading-tight mb-0.5">15+ Projects</div>
                <div className="text-muted-foreground text-[12px] sm:text-[14px] leading-tight">Real-world building</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 text-secondary dark:text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-[14px] sm:text-[16px] leading-tight mb-0.5">8+ Courses</div>
                <div className="text-muted-foreground text-[12px] sm:text-[14px] leading-tight">Industry aligned</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 text-secondary dark:text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-[14px] sm:text-[16px] leading-tight mb-0.5">2000+ Students</div>
                <div className="text-muted-foreground text-[12px] sm:text-[14px] leading-tight">Active learners</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-card border border-border flex items-center justify-center shrink-0">
                <Box className="w-5 h-5 text-secondary dark:text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground text-[14px] sm:text-[16px] leading-tight mb-0.5">5+ Labs</div>
                <div className="text-muted-foreground text-[12px] sm:text-[14px] leading-tight">Future-ready setup</div>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-row gap-3 sm:gap-4 sm:w-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="flex-1 sm:flex-none h-12 px-3 sm:px-7 text-[14px] sm:text-[15px] font-semibold gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm rounded-lg">
              <Link to="/lms" className="flex items-center justify-center">
                Start Learning <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none h-12 px-3 sm:px-7 text-[14px] sm:text-[15px] font-semibold gap-2 border border-border text-foreground hover:bg-muted bg-card rounded-lg">
              <Link to="/technology-lab-setup" className="flex items-center justify-center">
                Explore Labs
              </Link>
            </Button>
          </motion.div>
          {/* Mobile-only: Horizontal scrollable 3D branch cards */}
          <motion.div
            className="lg:hidden mt-10 -mx-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="text-sm font-semibold text-foreground mb-3">Explore our labs</p>
            <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
              {[
                { title: "3D Printing", topics: ["CAD Design", "Prototyping", "Materials"], Icon: Layers },
                { title: "IoT & Embedded", topics: ["Sensors", "Microcontrollers", "Smart Devices"], Icon: Cpu },
                { title: "AI & Robotics", topics: ["Machine Learning", "Computer Vision", "Automation"], Icon: Bot },
                { title: "Composite Skills", topics: ["3D Printing", "Fabrication", "Design"], Icon: Box },
                { title: "Rapid Prototyping", topics: ["Laser Cutting", "CNC Machining", "3D Modeling"], Icon: Wrench },
                { title: "STEM", topics: ["Science & Math", "Tinkering", "Engineering"], Icon: Lightbulb },
              ].map((card, i) => (
                <div key={i} className="shrink-0 snap-start w-[190px] p-3.5 rounded-xl border border-border bg-card flex items-center justify-between shadow-sm">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground text-[12px] mb-2 leading-tight tracking-normal">{card.title}</h3>
                    <ul className="space-y-1">
                      {card.topics.map((t, j) => (
                        <li key={j} className="text-muted-foreground text-[11px] flex items-center gap-1.5">
                          <span className="w-1 h-1 rounded-full bg-secondary dark:bg-primary shrink-0" />
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <card.Icon className="ml-2 w-6 h-6 shrink-0 text-secondary dark:text-primary" strokeWidth={1.75} />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
