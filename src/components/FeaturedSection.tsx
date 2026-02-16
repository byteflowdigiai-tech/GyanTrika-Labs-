import { motion } from "framer-motion";
import { ArrowRight, Bot, Cpu, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Bot,
    title: "Robotics Projects",
    description: "Build autonomous robots, line followers, and advanced mechatronics systems.",
    href: "/projects/robotics",
  },
  {
    icon: Cpu,
    title: "IoT & AI Solutions",
    description: "Create smart devices and implement machine learning in real applications.",
    href: "/projects/iot",
  },
  {
    icon: Printer,
    title: "3D Design & Print",
    description: "Design custom parts and prototypes with professional 3D printing.",
    href: "/projects/3d",
  },
];

export function FeaturedSection() {
  return (
    <section className="py-20 bg-card">
      <div className="container">
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
                View Programs <ArrowRight className="w-4 h-4" />
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
