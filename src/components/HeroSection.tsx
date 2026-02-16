import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Cpu, Bot, Lightbulb, Box, Network, Terminal, Code2, Database, Braces, Book, Library, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import roboticArm from "@/assets/robotic-arm.jpg";
import darkModeRobot from "@/assets/dark-mode-robot.jpg";
import { useEffect, useRef } from "react";

const CounterItem = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => {
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
      <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div className="font-display text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70 flex items-center justify-center">
        <motion.span>{displayValue}</motion.span>
        <span>{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-widest font-semibold text-muted-foreground mt-1">
        {label}
      </div>
    </div>
  );
};

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-background circuit-pattern overflow-hidden">
      {/* Light Mode: Background robotic arm elements */}
      <motion.div
        className="absolute right-[-15%] sm:right-[-2%] top-[8%] sm:top-[5%] w-[80%] sm:w-[45%] opacity-[0.08] sm:opacity-[0.12] pointer-events-none select-none dark:hidden"
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
          className="w-full h-auto mix-blend-multiply"
        />
      </motion.div>

      {/* Light Mode: Left side decorative books (Knowledge/Learning) */}
      <motion.div
        className="absolute left-[2%] bottom-[10%] w-[30%] opacity-[0.1] pointer-events-none select-none hidden lg:block dark:hidden"
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
          <Library className="w-32 h-32 text-primary/50" strokeWidth={1} />
          <div className="flex gap-12 -mt-4">
            <Book className="w-20 h-20 text-primary/40 -rotate-12" strokeWidth={1} />
            <BookOpen className="w-24 h-24 text-primary/40 rotate-12" strokeWidth={1} />
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
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full -z-10" />
        </div>
      </motion.div>

      {/* Floating Decorative Elements inspired by Image 1 and to fill empty space */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Code Icon (Left Top) */}
        <motion.div
          className="absolute left-[5%] sm:left-[15%] top-[12%] sm:top-[15%] p-2 sm:p-3 rounded-lg sm:rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center shadow-lg"
          animate={{ y: [0, 20, 0], x: [0, 15, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Code2 className="w-6 h-6 text-primary/40" />
        </motion.div>

        {/* Floating Terminal Icon (Left Middle) */}
        <motion.div
          className="absolute left-[3%] sm:left-[8%] top-[35%] sm:top-[40%] p-2 sm:p-3 rounded-lg sm:rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.1, 1], y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Terminal className="w-7 h-7 text-primary/40" />
        </motion.div>

        {/* Floating Braces Icon (Left Bottom Area) */}
        <motion.div
          className="absolute left-[10%] sm:left-[20%] bottom-[30%] sm:bottom-[35%] p-2 sm:p-3 rounded-lg sm:rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center shadow-lg"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Braces className="w-6 h-6 text-primary/40" />
        </motion.div>

        {/* Floating Database Icon (Right Top Area) */}
        <motion.div
          className="absolute right-[25%] sm:right-[30%] top-[8%] sm:top-[10%] p-1.5 sm:p-2 rounded-md sm:rounded-lg border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center shadow-sm"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Database className="w-5 h-5 text-primary/30" />
        </motion.div>

        {/* Original Floating Icons */}
        {/* Floating Robot Icon (Right Side) */}
        <motion.div
          className="absolute right-[8%] sm:right-[12%] top-[18%] sm:top-[22%] p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center shadow-lg"
          animate={{ y: [0, -25, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Bot className="w-8 h-8 text-primary/60" />
        </motion.div>

        {/* Floating Box Icon (Bottom Right) */}
        <motion.div
          className="absolute right-[12%] sm:right-[18%] bottom-[15%] sm:bottom-[20%] p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center shadow-lg -rotate-12"
          animate={{ y: [0, 20, 0], rotate: [-12, -4, -12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <Box className="w-8 h-8 text-primary/60" />
        </motion.div>

        {/* Floating Network Icon (Bottom Left) */}
        <motion.div
          className="absolute left-[8%] sm:left-[12%] bottom-[20%] sm:bottom-[25%] p-2 sm:p-3 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center shadow-lg"
          animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Network className="w-8 h-8 text-primary/60" />
        </motion.div>

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
            className="absolute w-2 h-2 rounded-full bg-primary/30"
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
            className="absolute rounded-full border border-primary/10"
            style={{
              top: circle.top,
              left: circle.left,
              width: circle.size,
              height: circle.size
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 pt-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 mb-8 backdrop-blur-sm">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground/80 tracking-wide uppercase font-display">LAB OF IDEAS · Robotics & AI Innovation Hub</span>
            </div>
          </motion.div>

          <motion.h1
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] tracking-tight text-primary"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Build the Future with{" "}
            <span className="text-gradient">Robotics & AI</span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-foreground/90 max-w-3xl mx-auto mb-10 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Best Robotics & AI Training Institute in Guwahati, Assam — Hands-on learning in Robotics, AI, IoT, PCB Design & 3D Printing for kids and students.
          </motion.p>

          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
              <Button asChild size="lg" className="h-14 px-8 text-lg gap-2 glow-effect">
                <Link to="/lms">
                  Start Learning <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-2">
                <Link to="/projects/robotics">Explore Projects</Link>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground font-medium bg-secondary/30 px-4 py-2 rounded-full border border-border/50">
              Trusted by 250+ students | 15+ real-world projects
            </p>
          </motion.div>

          {/* Stats Section with Counting Effect */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 pt-12 border-t border-primary/10"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {[
              { icon: Bot, value: "15+", label: "Projects" },
              { icon: Lightbulb, value: "8+", label: "Courses" },
              { icon: Cpu, value: "250+", label: "Students" },
            ].map((stat, i) => (
              <CounterItem
                key={i}
                icon={stat.icon}
                value={stat.value}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
