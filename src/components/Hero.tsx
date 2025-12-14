import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden rounded-3xl m-4 shadow-lg"
    >
      {/* Soft Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.12), transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(210 89% 79% / 0.1), transparent 70%)",
          }}
          animate={{
            scale: [1.1, 1, 1.1],
            x: [0, -20, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(217 91% 60% / 0.05), transparent 60%)",
          }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Soft Elements */}
        <motion.div
          className="absolute top-24 right-[15%] w-20 h-20"
          animate={{ 
            y: [-10, 10, -10],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-3xl bg-gradient-primary opacity-20 blur-sm" />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-[12%] w-16 h-16"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, -8, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-2xl bg-gradient-accent opacity-25 blur-sm" />
        </motion.div>

        <motion.div
          className="absolute top-[35%] left-[6%] w-10 h-10"
          animate={{ y: [-20, 20, -20], x: [-5, 5, -5] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-full h-full rounded-full border-2 border-primary/30" />
        </motion.div>

        <motion.div
          className="absolute top-[25%] right-[8%]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Star className="w-6 h-6 text-accent fill-accent/30" />
        </motion.div>

        <motion.div
          className="absolute bottom-[25%] right-[20%]"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-5 h-5 text-primary/50" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-soft border border-primary/10 mb-8 shadow-soft"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-gradient-primary"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-primary">
              360° Marketing Solutions
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 text-foreground"
          >
            <span className="text-gradient">We Help</span>{" "}
            <span className="text-gradient">Small Business</span>
            <br />
            <motion.span
              className="inline-block"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-gradient-growth">Grow</span> <span className="text-gradient-accent">Big</span>
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            From content creation to social media management, we bring your business 
            online and make it shine. Trusted by clients across the globe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-2xl flex items-center gap-2 shadow-soft glow-pulse"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="group px-8 py-4 bg-card border border-border rounded-2xl flex items-center gap-3 text-foreground shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300"
            >
              <span className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center shadow-sm">
                <Play className="w-4 h-4 fill-current text-accent-foreground" />
              </span>
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2"
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1], y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-gradient-primary"
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
