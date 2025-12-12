import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const countries = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "India", flag: "🇮🇳" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "UAE", flag: "🇦🇪" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "Netherlands", flag: "🇳🇱" },
  { name: "France", flag: "🇫🇷" },
];

const testimonials = [
  {
    quote: "ClicknCut transformed our social media presence completely. Our engagement increased by 300%!",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    avatar: "SJ",
  },
  {
    quote: "The best marketing investment we've ever made. Professional, creative, and results-driven.",
    author: "Michael Chen",
    role: "Founder, GrowthHub",
    avatar: "MC",
  },
  {
    quote: "They understand small business needs perfectly. Highly recommend for any growing company!",
    author: "Priya Sharma",
    role: "Director, InnovateCo",
    avatar: "PS",
  },
];

const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl"
        animate={{ x: [0, 30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Global Presence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-soft border border-primary/10 text-primary text-sm font-medium mb-4">
            Global Reach
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Trusted <span className="text-gradient">Worldwide</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-12">
            We've helped businesses across the globe achieve their marketing goals.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.05 + 0.3 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 rounded-full bg-card border border-border shadow-sm flex items-center gap-2 cursor-pointer hover:border-primary/50 hover:shadow-md transition-all"
            >
              <span className="text-2xl">{country.flag}</span>
              <span className="text-sm font-medium">{country.name}</span>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.5 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group perspective-1000"
            >
              <div className="relative p-8 rounded-3xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow preserve-3d">
                {/* Quote Mark */}
                <div className="absolute -top-4 left-8 text-6xl text-primary/20 font-serif">
                  "
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 relative z-10">
                  {testimonial.quote}
                </p>

                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                    className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold"
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
