import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
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
import { CometCard } from "@/components/ui/comet-card";

const services = [
  {
    icon: Camera,
    title: "Content Creation",
    description: "Stunning visuals and compelling copy that capture attention.",
    gradient: "from-primary to-purple-400",
    image: "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Strategic planning and daily management across all major platforms.",
    gradient: "from-accent to-pink-500",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: TrendingUp,
    title: "Content Boosting",
    description: "Amplify your reach with targeted paid campaigns and viral strategies.",
    gradient: "from-emerald-400 to-teal-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Globe,
    title: "Online Presence",
    description: "Establish and grow your digital footprint with web solutions.",
    gradient: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Users,
    title: "Community Building",
    description: "Foster loyal communities that become brand advocates.",
    gradient: "from-amber-400 to-orange-500",
    image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Megaphone,
    title: "Brand Marketing",
    description: "Create memorable brand experiences that resonate with your audience.",
    gradient: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Data-driven decisions with comprehensive performance tracking.",
    gradient: "from-primary to-indigo-600",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    icon: Zap,
    title: "Quick Launch",
    description: "Get your business online fast with our rapid deployment strategies.",
    gradient: "from-yellow-400 to-amber-500",
    image: "https://images.unsplash.com/photo-1549419495-451a9e3e521b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      className="flex-shrink-0"
    >
      <CometCard>
        <div className="group w-80 cursor-pointer flex-col items-stretch rounded-2xl border border-border/10 bg-card p-4 transition-all duration-300 hover:bg-card/80 hover:shadow-2xl">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
            <img
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              alt={service.title}
              src={service.image}
            />
            <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-40 group-hover:opacity-30 transition-opacity duration-300`} />
          </div>
          <div className="mt-4">
            <h3 className="font-display text-xl font-bold text-card-foreground">
              {service.title}
            </h3>
            <p className="mt-2 text-muted-foreground">
              {service.description}
            </p>
          </div>
           <div className="mt-4 flex items-center justify-between">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                  <service.icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-semibold text-primary group-hover:underline">Learn More →</span>
           </div>
        </div>
      </CometCard>
    </motion.div>
  );
};


const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { amount: 0.5 });

  useEffect(() => {
    if (inView) {
      document.documentElement.classList.add("dark-gradient");
    } else {
      document.documentElement.classList.remove("dark-gradient");
    }
    return () => document.documentElement.classList.remove("dark-gradient");
  }, [inView]);

  return (
    <section id="services" className="py-32 relative overflow-hidden rounded-3xl m-4 shadow-lg" ref={containerRef}>
      <div className="absolute inset-0 bg-gradient-hero dark:bg-transparent" />
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
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-2 rounded-full bg-gradient-soft dark:bg-card border border-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl font-bold mb-6 text-foreground"
          >
            360° Marketing <span className="text-gradient">Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Everything you need to take your business to the next level.
            We handle it all, so you can focus on what you do best.
          </motion.p>
        </div>
      </div>

      <div className="relative z-10">
        <div className="flex gap-8 mb-8 overflow-x-auto no-scrollbar px-6 md:px-20">
          {services.slice(0, 4).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="flex gap-8 overflow-x-auto no-scrollbar px-6 md:px-20">
          {services.slice(4, 8).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 4} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
