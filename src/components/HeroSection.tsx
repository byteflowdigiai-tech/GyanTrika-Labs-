import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Bot, Lightbulb, Box, Network, Terminal, Code2, Database, Braces, Book, Library, BookOpen, Plane, Layers } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import roboticArm from "@/assets/robotic-arm.jpg";
import darkModeRobot from "@/assets/dark-mode-robot.jpg";
import { useEffect, useRef, useState } from "react";

const FloatingBranchCard = ({ title, topics, icon: Icon, className, delay, rotateY = 0 }: { title: string, topics: string[], icon: any /* eslint-disable-line @typescript-eslint/no-explicit-any */, className: string, delay: number, rotateY?: number }) => (
  <div className={`absolute pointer-events-auto z-30 hidden lg:block dark:hidden ${className}`} style={{ perspective: 1200 }}>
    <motion.div
      className="relative rounded-xl w-[220px] sm:w-[260px]"
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
        className="relative p-4 sm:p-5 rounded-xl border border-[#B3CDE0] bg-white/80 backdrop-blur-md flex items-center justify-between shadow-[0_15px_35px_rgba(43,92,146,0.15),_inset_0_0_20px_rgba(255,255,255,0.9)]"
        style={{ transform: 'translateZ(0px)', transformStyle: 'preserve-3d' }}
      >
        <div className="flex-1" style={{ transform: 'translateZ(25px)' }}>
          <h3 className="font-bold text-[#0C1446] text-[13px] sm:text-[15px] mb-2 tracking-wider drop-shadow-sm">{title}</h3>
          <ul className="space-y-1.5">
            {topics.map((t, i) => (
              <li key={i} className="text-[#2B5C92] text-[11px] sm:text-[12px] flex items-center gap-1.5 font-medium drop-shadow-sm">
                <span className="w-1.5 h-1.5 rounded-sm bg-[#B3CDE0] shadow-[0_0_5px_#B3CDE0]" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-3 shrink-0" style={{ transform: 'translateZ(40px)' }}>
          <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#2B5C92]" strokeWidth={1.5} style={{ filter: 'drop-shadow(0 4px 6px rgba(43,92,146,0.2))' }} />
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
        <Icon className="w-5 h-5 text-[#2B5C92]" />
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold text-[#0C1446] flex items-center justify-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-widest font-semibold text-[#2B5C92] mt-1">
        {label}
      </div>
    </div>
  );
};

export function HeroSection() {

  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#FFFFFF] circuit-pattern overflow-hidden">
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
          <Library className="w-32 h-32 text-[#2B5C92]/60" strokeWidth={1} />
          <div className="flex gap-12 -mt-4">
            <Book className="w-20 h-20 text-[#2B5C92]/50 -rotate-12" strokeWidth={1} />
            <BookOpen className="w-24 h-24 text-[#2B5C92]/50 rotate-12" strokeWidth={1} />
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
          title="ENTREPRENEURSHIP"
          topics={["Design Thinking", "Startups", "Innovation"]}
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
          title="DRONE & UAV"
          topics={["Flight Dynamics", "Aerial Mapping", "Piloting"]}
          icon={Plane}
          className="right-[-2%] xl:right-[2%] top-[48%]"
          delay={2.2}
          rotateY={-30}
        />
        <FloatingBranchCard
          title="CODING & DEV"
          topics={["Web Development", "App Creation", "Algorithms"]}
          icon={Code2}
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
            className="absolute rounded-full border border-[#B3CDE0]/30"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#B3CDE0]/30 shadow-sm mb-8">
              <Cpu className="w-4 h-4 text-[#2B5C92]" />
              <span className="text-sm font-medium text-[#2B5C92] tracking-wide uppercase font-display">LAB OF IDEAS · Innovation Hub</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-[5.5rem] font-extrabold mb-8 leading-[1.05] tracking-tight text-[#0C1446] uppercase"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            BUILD FUTURE <br />
            SKILLS WITH <br />
            <span className="text-[#2B5C92]">AI & ROBOTICS</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-[22px] text-[#2B5C92]/90 max-w-[650px] mb-12 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We transform schools into innovation ecosystems. A next-generation digital platform with NEP 2020 aligned, industry-driven courses and future-ready lab infrastructure.
          </motion.p>

          {/* 2x2 Feature Grid - Matching Target Image Layout */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 mb-12 max-w-[600px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[#B3CDE0]/30 flex items-center justify-center shrink-0">
                <Bot className="w-6 h-6 text-[#2B5C92]" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] text-[17px]">15+ Projects</div>
                <div className="text-[#2B5C92]/80 text-[15px] font-medium">Real-world building</div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[#B3CDE0]/30 flex items-center justify-center shrink-0">
                <Lightbulb className="w-6 h-6 text-[#2B5C92]" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] text-[17px]">8+ Courses</div>
                <div className="text-[#2B5C92]/80 text-[15px] font-medium">Industry aligned</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[#B3CDE0]/30 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-[#2B5C92]" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] text-[17px]">2000+ Students</div>
                <div className="text-[#2B5C92]/80 text-[15px] font-medium">Active learners</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-[#B3CDE0]/30 flex items-center justify-center shrink-0">
                <Box className="w-6 h-6 text-[#2B5C92]" />
              </div>
              <div>
                <div className="font-bold text-[#0C1446] text-[17px]">5+ Labs</div>
                <div className="text-[#2B5C92]/80 text-[15px] font-medium">Future-ready setup</div>
              </div>
            </div>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button asChild size="lg" className="h-14 px-8 text-[17px] gap-2 bg-[#0C1446] hover:bg-[#2B5C92] text-white shadow-lg shadow-[#0C1446]/20 rounded-xl">
              <Link to="/lms">
                Start Learning <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 text-[17px] gap-2 border-2 border-[#B3CDE0]/50 text-[#0C1446] hover:bg-[#B3CDE0]/10 bg-white/50 backdrop-blur-sm rounded-xl">
              <Link to="/technology-lab-setup">
                Explore Labs <Terminal className="w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
