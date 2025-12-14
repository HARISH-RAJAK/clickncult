import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Globe, Users, Award, Rocket } from "lucide-react";

const stats = [
  {
    icon: Globe,
    number: 25,
    suffix: "+",
    label: "Countries",
    description: "Global presence",
    gradient: "from-primary to-cyan-400",
  },
  {
    icon: Users,
    number: 500,
    suffix: "+",
    label: "Happy Clients",
    description: "Satisfied businesses",
    gradient: "from-accent to-pink-500",
  },
  {
    icon: Rocket,
    number: 1200,
    suffix: "+",
    label: "Projects",
    description: "Successfully delivered",
    gradient: "from-emerald-400 to-primary",
  },
  {
    icon: Award,
    number: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Client satisfaction",
    gradient: "from-violet-500 to-purple-600",
  },
];

const Counter = ({ target, suffix, isHovered }: { target: number; suffix: string; isHovered?: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, target, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (value) => setCount(Math.round(value)),
      });
      return () => controls.stop();
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className={`font-display text-5xl md:text-6xl font-bold transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-gradient'}`}>
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section 
      id="stats" 
      className="py-32 relative overflow-hidden rounded-3xl m-4 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-orange-100 to-blue-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      
      <motion.div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className={`inline-block px-4 py-2 rounded-full border text-sm font-medium mb-4 shadow-sm transition-all duration-300 ${isHovered ? 'bg-white/30 border-white/50 text-slate-700' : 'bg-card border-border text-primary'}`}
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className={`font-display text-4xl md:text-6xl font-bold mb-6 transition-colors duration-300 ${isHovered ? 'text-slate-800' : 'text-white'}`}>
            Numbers That <span className={`transition-colors duration-300 ${isHovered ? 'text-blue-600' : 'text-gradient'}`}>Speak</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className={`text-lg max-w-2xl mx-auto transition-colors duration-300 ${isHovered ? 'text-slate-600 font-medium' : 'text-muted-foreground'}`}
          >
            Trusted by businesses worldwide, we've helped hundreds of companies
            achieve their marketing goals and grow their online presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className={`relative p-8 rounded-3xl border shadow-sm hover:shadow-lg transition-all duration-300 text-center overflow-hidden ${isHovered ? 'bg-white/50 border-white/60' : 'bg-card border-border'}`}>
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                <Counter target={stat.number} suffix={stat.suffix} isHovered={isHovered} />

                <h3 className={`font-display text-xl font-bold mt-4 mb-2 transition-colors duration-300 ${isHovered ? 'text-slate-800' : 'text-foreground'}`}>
                  {stat.label}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${isHovered ? 'text-slate-600 font-medium' : 'text-muted-foreground'}`}>
                  {stat.description}
                </p>
                
                <div className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-colors duration-300 ${isHovered ? 'bg-slate-500/50' : 'bg-primary opacity-50'}`} />
                <div className={`absolute bottom-4 left-4 w-3 h-3 rounded-full transition-colors duration-300 ${isHovered ? 'bg-slate-500/30' : 'bg-accent opacity-30'}`} />

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
