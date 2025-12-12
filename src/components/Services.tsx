import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Camera,
  Share2,
  TrendingUp,
  Users,
  Globe,
  Zap,
  Megaphone,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Camera,
    title: "Content Creation",
    description: "Stunning visuals and compelling copy that capture attention and drive engagement.",
    gradient: "from-primary to-purple-400",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic planning and daily management across all major platforms.",
    gradient: "from-accent to-pink-500",
  },
  {
    icon: TrendingUp,
    title: "Content Boosting",
    description: "Amplify your reach with targeted paid campaigns and viral strategies.",
    gradient: "from-emerald-400 to-teal-500",
  },
  {
    icon: Globe,
    title: "Online Presence",
    description: "Establish and grow your digital footprint with comprehensive web solutions.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Foster loyal communities that become brand advocates.",
    gradient: "from-amber-400 to-orange-500",
  },
  {
    icon: Megaphone,
    title: "Brand Marketing",
    description: "Create memorable brand experiences that resonate with your audience.",
    gradient: "from-rose-500 to-pink-600",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decisions with comprehensive performance tracking.",
    gradient: "from-primary to-indigo-600",
  },
  {
    icon: Zap,
    title: "Quick Launch",
    description: "Get your business online fast with our rapid deployment strategies.",
    gradient: "from-yellow-400 to-amber-500",
  },
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -8, 
        transition: { duration: 0.3 }
      }}
      className="group relative min-w-[300px] md:min-w-[350px]"
    >
      <div className="relative p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
        {/* Gradient Overlay on Hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        />
        
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}
        >
          <service.icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Content */}
        <h3 className="font-display text-xl font-bold mb-3 group-hover:text-gradient transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* Hover Arrow */}
        <motion.div
          className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ x: -10 }}
          whileHover={{ x: 0 }}
        >
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
            <span className="text-white">→</span>
          </div>
        </motion.div>

        {/* Corner Decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
          <div className={`absolute -top-10 -right-10 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-20 rotate-45`} />
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for different rows
  const x1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const x2 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={containerRef}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <motion.div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-accent/5 blur-3xl"
        animate={{ x: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div ref={headerRef} className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-soft border border-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6"
          >
            360° Marketing <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Everything you need to take your business to the next level.
            We handle it all, so you can focus on what you do best.
          </motion.p>
        </div>

        {/* Parallax Scrolling Services - Row 1 */}
        <motion.div 
          style={{ x: x1 }}
          className="flex gap-6 mb-6 -ml-20"
        >
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </motion.div>

        {/* Parallax Scrolling Services - Row 2 (opposite direction) */}
        <motion.div 
          style={{ x: x2 }}
          className="flex gap-6 -mr-20"
        >
          {services.slice(4, 8).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 4} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
