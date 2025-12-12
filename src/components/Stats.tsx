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

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
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
    <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stats" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-soft" />
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
            className="inline-block px-4 py-2 rounded-full bg-card border border-border text-primary text-sm font-medium mb-4 shadow-sm"
          >
            Our Impact
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            Numbers That <span className="text-gradient">Speak</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
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
              <div className="relative p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow text-center overflow-hidden">
                {/* Gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}
                >
                  <stat.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Counter */}
                <Counter target={stat.number} suffix={stat.suffix} />

                {/* Label */}
                <h3 className="font-display text-xl font-bold mt-4 mb-2">
                  {stat.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {stat.description}
                </p>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-primary opacity-50" />
                <div className="absolute bottom-4 left-4 w-3 h-3 rounded-full bg-accent opacity-30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
