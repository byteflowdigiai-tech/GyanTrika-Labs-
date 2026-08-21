import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Bot, Lightbulb, Box, Network, Terminal, Code2, Database, Braces, Book, Library, BookOpen, Plane, Layers, Wrench } from "lucide-react";
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
      animate={{ 
        y: [0, -15, 0], 
        rotateY: [rotateY, rotateY + 8, rotateY - 8, rotateY], 
        rotateX: [0, 8, -8, 0] 
      }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay }}
    >
      {/* 3D Depth / Back Plate to simulate physical thickness */}
      <div 
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B3CDE0] to-[#2B5C92]/30 border border-[#2B5C92]/40 opacity-70"
        style={{ transform: 'translateZ(-8px)' }}
      />
      {/* 3D Depth / Front Glass Layer */}
      <div 
        className="relative p-4 sm:p-5 rounded-xl border border-[#B3CDE0] bg-white dark:bg-card/80 backdrop-blur-md flex items-center justify-between shadow-[0_15px_35px_rgba(43,92,146,0.15),_inset_0_0_20px_rgba(255,255,255,0.9)]"
        style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
      >
        <div className="flex-1 min-w-0" style={{ transform: 'translateZ(25px)' }}>
          <h3 className="font-bold text-[#0C1446] dark:text-foreground text-[12px] sm:text-[14px] mb-2 tracking-wide drop-shadow-sm">{title}</h3>
          <ul className="space-y-1.5">
            {topics.map((t, i) => (
              <li key={i} className="text-[#2B5C92] dark:text-primary text-[11px] sm:text-[12px] flex items-center gap-1.5 font-medium drop-shadow-sm">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#B3CDE0] shadow-[0_0_5px_#B3CDE0]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-3 shrink-0" style={{ transform: 'translateZ(40px)' }}>
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#2B5C92] dark:text-primary" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 4px 6px rgba(43,92,146,0.2))' }} />
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
        <div className="absolute inset-y-0 left-0 w-full md:w-[75%] bg-gradient-to-r from-[#2B5C92]/60 via-[#B3CDE0]/30 to-transparent" />
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gradient-to-bl from-[#B3CDE0]/10 to-transparent" />
      </div>

      {/* Light Mode: Background robotic arm elements */}
      <motion.div
        className="absolute right-[-15%] sm:right-[-2%] top-[8%] sm:top-[5%] w-[80%] sm:w-[45%] opacity-[0.4] sm:opacity-[0.5] pointer-events-none select-none dark:hidden z-10 mix-blend-multiply"
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

      {/* Light Mode: Left side decorative books (Knowledge/Learning) */}
      <motion.div
        className="absolute left-[2%] bottom-[10%] w-[30%] opacity-[0.15] pointer-events-none select-none hidden lg:block dark:hidden"
        initial={{ y: 20, rotate: -5 }}
        animate={{
          y: [-10, 10, -10],
          rotate: [-5, 0, -5]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col gap-8 items-center opacity-40">
          <Library className="w-32 h-32 text-[#2B5C92] dark:text-primary/60" strokeWidth={1} />
          <div className="flex gap-12 -mt-4">
            <Book className="w-20 h-20 text-[#2B5C92] dark:text-primary/50 -rotate-12" strokeWidth={1} />
            <BookOpen className="w-24 h-24 text-[#2B5C92] dark:text-primary/50 rotate-12" strokeWidth={1} />
          </div>
        </div>
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
          title="3D PRINTING"
          topics={["CAD Design", "Prototyping", "Materials"]}
          icon={Layers}
          className="right-[22%] xl:right-[28%] top-[10%]"
          delay={0}
          rotateY={25}
        />
        <FloatingBranchCard
          title="IOT & EMBEDDED"
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
          title="AI & ROBOTICS"
          topics={["Machine Learning", "Computer Vision", "Automation"]}
          icon={Bot}
          className="right-[1%] xl:right-[5%] top-[18%]"
          delay={0.8}
          rotateY={-25}
        />
        <FloatingBranchCard
          title="COMPOSITE SKILLS"
          topics={["3D Printing", "Fabrication", "Design"]}
          icon={Box}
          className="right-[-2%] xl:right-[2%] top-[48%]"
          delay={2.2}
          rotateY={-30}
        />
        <FloatingBranchCard
          title="RAPID PROTOTYPING"
          topics={["Laser Cutting", "CNC Machining", "3D Modeling"]}
          icon={Wrench}
          className="right-[3%] xl:right-[8%] bottom-[8%]"
          delay={1.1}
          rotateY={-20}
        />

        {/* Decorative Glowing Nodes */}
        {[
          { top: '15%', left: '15%', i: 1 },
          { top: '25%', left: '45%', i: 2 },
          { top: '60%', left: '8%', i: 3 },
          { top: '75%', left: '40%', i: 4 },
          { top: '35%', left: '85%', i: 5 },
          { top: '65%', left: '75%', i: 6 },
          { top: '20%', left: '5%', i: 7 },
          { top: '50%', left: '15%', i: 8 },
        ].map((node) => (
          <motion.div
            key={node.i}
            className="absolute w-2 h-2 rounded-full bg-[#B3CDE0]/50"
            style={{ top: node.top, left: node.left }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: node.i * 0.4
            }}
          />
        ))}

        {/* Decorative Grid Circles */}
        {[
          { top: '10%', left: '20%', size: 40 },
          { top: '80%', left: '15%', size: 30 },
          { top: '40%', left: '80%', size: 25 },
          { top: '30%', left: '10%', size: 50 },
          { top: '60%', left: '20%', size: 20 },
        ].map((circle, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-[#B3CDE0]/30 dark:border-border"
            style={{
              top: circle.top,
              left: circle.left,
              width: circle.size,
              height: circle.size
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 pt-16 lg:pt-24 pb-12 pointer-events-none min-h-[85vh] flex flex-col justify-center">
        <div className="max-w-[750px] text-left pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-card border border-[#B3CDE0]/30 dark:border-border shadow-sm mb-8">
              <Cpu className="w-4 h-4 text-[#2B5C92] dark:text-primary" />
              <span className="text-sm font-medium text-[#2B5C92] dark:text-primary tracking-wide uppercase font-display">LAB OF IDEAS · Innovation Hub</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-3xl leading-[1.1] sm:text-4xl sm:leading-[1.1] md:text-[5.5rem] md:leading-[1.05] font-extrabold mb-8 tracking-tight text-[#0C1446] dark:text-foreground uppercase break-words"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            SHAPING <span className="md:whitespace-nowrap">FUTURE SKILLS.</span> <br />
            INSPIRING FUTURE <br />
            <span className="text-[#2B5C92] dark:text-primary">INNOVATORS.</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-[22px] text-[#2B5C92] dark:text-primary/90 max-w-[650px] mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We transform schools into innovation ecosystems. A next-generation digital platform with NEP 2020 aligned, industry-driven courses and future-ready lab infrastructure.
          </motion.p>

          {/* 2x2 Feature Grid - Matching Target Image Layout */}
          <motion.div 
            className="grid grid-cols-2 gap-x-2 sm:gap-x-8 gap-y-5 sm:gap-y-6 mb-12 max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-card shadow-sm border border-[#B3CDE0]/30 dark:border-border flex items-center justify-center shrink-0">
                <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B5C92] dark:text-primary" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] dark:text-foreground text-[14px] sm:text-[17px] leading-tight mb-0.5 sm:mb-0">15+ Projects</div>
                <div className="text-[#2B5C92] dark:text-primary/80 text-[12px] sm:text-[15px] font-medium leading-tight">Real-world building</div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-card shadow-sm border border-[#B3CDE0]/30 dark:border-border flex items-center justify-center shrink-0">
                <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B5C92] dark:text-primary" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] dark:text-foreground text-[14px] sm:text-[17px] leading-tight mb-0.5 sm:mb-0">8+ Courses</div>
                <div className="text-[#2B5C92] dark:text-primary/80 text-[12px] sm:text-[15px] font-medium leading-tight">Industry aligned</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-card shadow-sm border border-[#B3CDE0]/30 dark:border-border flex items-center justify-center shrink-0">
                <Cpu className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B5C92] dark:text-primary" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] dark:text-foreground text-[14px] sm:text-[17px] leading-tight mb-0.5 sm:mb-0">2000+ Students</div>
                <div className="text-[#2B5C92] dark:text-primary/80 text-[12px] sm:text-[15px] font-medium leading-tight">Active learners</div>
              </div>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white dark:bg-card shadow-sm border border-[#B3CDE0]/30 dark:border-border flex items-center justify-center shrink-0">
                <Box className="w-5 h-5 sm:w-6 sm:h-6 text-[#2B5C92] dark:text-primary" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] dark:text-foreground text-[14px] sm:text-[17px] leading-tight mb-0.5 sm:mb-0">5+ Labs</div>
                <div className="text-[#2B5C92] dark:text-primary/80 text-[12px] sm:text-[15px] font-medium leading-tight">Future-ready setup</div>
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
            <Button asChild size="lg" className="flex-1 sm:flex-none h-14 px-2 sm:px-8 text-[14px] sm:text-[17px] gap-2 bg-[#0C1446] hover:bg-[#2B5C92] text-white shadow-lg shadow-[#0C1446]/20 rounded-xl">
              <Link to="/lms" className="flex items-center justify-center">
                Start Learning <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none h-14 px-2 sm:px-8 text-[14px] sm:text-[17px] gap-2 border-2 border-[#B3CDE0]/50 text-[#0C1446] dark:text-foreground hover:bg-[#B3CDE0]/10 bg-white dark:bg-card/50 backdrop-blur-sm rounded-xl">
              <Link to="/technology-lab-setup" className="flex items-center justify-center">
                Explore Labs <Terminal className="w-4 h-4 sm:w-5 sm:h-5 ml-1" />
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
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2B5C92] dark:text-primary/70 mb-4">Explore Our Labs</p>
            <div className="flex gap-4 overflow-x-auto pb-5 scrollbar-hide snap-x snap-mandatory" style={{ perspective: 1000 }}>
              {[
                { title: "3D PRINTING", topics: ["CAD Design", "Prototyping", "Materials"], Icon: Layers, rotateY: 12, delay: 0 },
                { title: "IOT & EMBEDDED", topics: ["Sensors", "Microcontrollers", "Smart Devices"], Icon: Cpu, rotateY: -10, delay: 0.4 },
                { title: "AI & ROBOTICS", topics: ["Machine Learning", "Computer Vision", "Automation"], Icon: Bot, rotateY: 15, delay: 0.8 },
                { title: "COMPOSITE SKILLS", topics: ["3D Printing", "Fabrication", "Design"], Icon: Box, rotateY: -12, delay: 1.2 },
                { title: "RAPID PROTOTYPING", topics: ["Laser Cutting", "CNC Machining", "3D Modeling"], Icon: Wrench, rotateY: 10, delay: 1.6 },
                { title: "STEM", topics: ["Science & Math", "Tinkering", "Engineering"], Icon: Lightbulb, rotateY: -8, delay: 2.0 },
              ].map((card, i) => (
                <div key={i} className="shrink-0 snap-start" style={{ perspective: 1200 }}>
                  <motion.div
                    className="relative rounded-xl w-[190px]"
                    style={{ transformStyle: 'preserve-3d' }}
                    initial={{ y: 0, rotateY: card.rotateY, rotateX: 0 }}
                    animate={{
                      y: [0, -10, 0],
                      rotateY: [card.rotateY, card.rotateY + 8, card.rotateY - 8, card.rotateY],
                      rotateX: [0, 6, -6, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: card.delay }}
                  >
                    {/* 3D Back Plate */}
                    <div
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#B3CDE0] to-[#2B5C92]/30 border border-[#2B5C92]/40 opacity-70"
                      style={{ transform: 'translateZ(-8px)' }}
                    />
                    {/* 3D Front Glass Layer */}
                    <div
                      className="relative p-3.5 rounded-xl border border-[#B3CDE0] bg-white dark:bg-card/80 backdrop-blur-md flex items-center justify-between shadow-[0_15px_35px_rgba(43,92,146,0.15),_inset_0_0_20px_rgba(255,255,255,0.9)]"
                      style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
                    >
                      <div className="flex-1 min-w-0" style={{ transform: 'translateZ(25px)' }}>
                        <h3 className="font-bold text-[#0C1446] dark:text-foreground text-[11px] mb-2 tracking-wide drop-shadow-sm leading-tight">{card.title}</h3>
                        <ul className="space-y-1">
                          {card.topics.map((t, j) => (
                            <li key={j} className="text-[#2B5C92] dark:text-primary text-[10px] flex items-center gap-1.5 font-medium drop-shadow-sm">
                              <span className="w-1.5 h-1.5 rounded-sm bg-[#B3CDE0] shadow-[0_0_5px_#B3CDE0] shrink-0" />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="ml-2 shrink-0" style={{ transform: 'translateZ(40px)' }}>
                        <card.Icon className="w-8 h-8 text-[#2B5C92] dark:text-primary" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 4px 6px rgba(43,92,146,0.2))' }} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
