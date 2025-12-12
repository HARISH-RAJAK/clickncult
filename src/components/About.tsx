import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Rocket, Target, Award } from "lucide-react";

const features = [
  "Custom Marketing Strategies",
  "24/7 Social Media Monitoring",
  "Content Calendar Planning",
  "Performance Analytics",
  "Brand Identity Development",
  "Multi-platform Management",
];

const About = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-accent/10 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - 3D Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            <motion.div
              style={{ rotateY: rotate }}
              className="relative preserve-3d"
            >
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden bg-card border border-border p-8 shadow-lg">
                <div className="aspect-square relative">
                  {/* Animated Grid */}
                  <div className="absolute inset-0 grid grid-cols-3 gap-4">
                    {[Rocket, Target, Award].map((Icon, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
                        whileHover={{ scale: 1.1, rotateY: 15 }}
                        className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center"
                      >
                        <Icon className="w-12 h-12 text-primary" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Center Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="text-center"
                    >
                      <span className="font-display text-8xl font-bold text-gradient">
                        360°
                      </span>
                      <p className="text-muted-foreground mt-2">Complete Solutions</p>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 px-6 py-3 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-lg"
              >
                5+ Years Experience
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 px-6 py-3 rounded-xl bg-gradient-accent text-accent-foreground font-semibold shadow-lg"
              >
                Global Clients
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <div ref={ref}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-gradient-soft border border-primary/10 text-primary text-sm font-medium mb-4"
            >
              About Us
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              We're <span className="text-gradient">ClicknCut</span>
              <br />
              Your Growth Partner
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
            >
              ClicknCut is a full-service 360° marketing agency dedicated to helping 
              small businesses achieve big results. From content creation to social 
              media management, we handle every aspect of your digital presence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-2xl shadow-soft"
            >
              Learn More About Us
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
