import { motion } from "framer-motion";
import {
  GraduationCap,
  ShoppingBag,
  FileText,

  BookOpen,
  Code,
  Trophy
} from "lucide-react";
import { CategoryCard } from "./CategoryCard";

const categories = [
  {
    title: "Learning Management",
    description: "Interactive courses on Robotics, AI, IoT and more with hands-on projects.",
    icon: GraduationCap,
    href: "/lms",
  },
  {
    title: "Shop Kits & Bots",
    description: "Quality robotics kits, components, and pre-built bots for your projects.",
    icon: ShoppingBag,
    href: "/shop/kits",
  },
  {
    title: "Technical Blogs",
    description: "Insights, tutorials, and latest trends in technology and innovation.",
    icon: FileText,
    href: "/blogs",
  },

  {
    title: "E-Books Library",
    description: "Comprehensive resources and reference materials for self-learning.",
    icon: BookOpen,
    href: "/books",
  },
  {
    title: "Programs",
    description: "Structured learning programs and certification courses.",
    icon: Code,
    href: "/programs",
  },

  {
    title: "Events & Challenges",
    description: "Competitions, hackathons, and events to showcase your skills.",
    icon: Trophy,
    href: "/events",
  },
];

export function CategoriesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Explore Our <span className="text-gradient">Ecosystem</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to learn, build, and innovate in the world of robotics and emerging technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, i) => (
            <CategoryCard
              key={category.title}
              {...category}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
