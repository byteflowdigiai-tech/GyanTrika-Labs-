import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import kvLogo from "@/assets/kv-logo.png";
import apsLogo from "@/assets/aps-logo.png";
import iitgLogo from "@/assets/iitg-logo.png";

export function CTASection() {
  const brands = [
    {
      name: "IIT Guwahati",
      logo: iitgLogo,
      url: "https://www.iitg.ac.in/"
    },
    {
      name: "Kendriya Vidyalaya",
      logo: kvLogo,
      url: "https://kvsangathan.nic.in/"
    },
    {
      name: "Army Public School",
      logo: apsLogo,
      url: "https://www.awesindia.com/"
    },
  ];

  // Duplicate brands for seamless scrolling
  const scrollBrands = [...brands, ...brands];

  return (
    <section className="py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">
            Ready to Start Your Innovation Journey?
          </h2>
          <p className="text-primary-foreground/80 mb-10 text-lg">
            Join hundreds of students who are building the future. Get access to courses, projects, and a community of innovators.
          </p>

          <div className="mb-12">
            <p className="text-primary-foreground/60 text-sm font-medium uppercase tracking-wider mb-8">
              Our Trusted Partners
            </p>
            <div className="relative group max-w-4xl mx-auto">
              {/* Horizontal Marquee Container */}
              <div className="flex overflow-hidden relative">
                <motion.div
                  className="flex items-center gap-24 md:gap-48 whitespace-nowrap py-4"
                  animate={{
                    x: ["0%", "-50%"]
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: 18,
                      ease: "linear",
                    },
                  }}
                >
                  {scrollBrands.map((brand, i) => (
                    <a
                      key={i}
                      href={brand.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 transition-all duration-300 hover:scale-110 block"
                    >
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="h-20 md:h-24 lg:h-28 w-auto object-contain drop-shadow-2xl"
                      />
                    </a>
                  ))}
                </motion.div>

                {/* Edge Gradient Fade for hiding the "duplicate" entrance */}
                <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-primary to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-primary to-transparent z-10" />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="gap-2">
              <Link to="/programs">
                Get Started Free <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="gap-2 border-white/20 text-white bg-white/10"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
