import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-32 relative overflow-hidden rounded-3xl m-4 shadow-lg" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <motion.div
        className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl"
        animate={{ y: [0, 50, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl"
        animate={{ y: [0, -30, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-block px-4 py-2 rounded-full bg-gradient-soft border border-primary/10 text-primary text-sm font-medium mb-4"
            >
              Get In Touch
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-5xl font-bold mb-6"
            >
              Let's <span className="text-gradient">Grow</span> Your
              <br />
              Business Together
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-10 leading-relaxed"
            >
              Ready to take your business to the next level? Get in touch with us
              today and let's discuss how we can help you achieve your marketing goals.
            </motion.p>

            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: "hello@clickncut.com" },
                { icon: Phone, label: "Phone", value: "+1 (555) 123-4567" },
                { icon: MapPin, label: "Location", value: "Global Operations" },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group cursor-pointer"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {item.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="perspective-1000"
          >
            <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-border shadow-lg preserve-3d">
              <h3 className="font-display text-2xl font-bold mb-8">
                Send Us a Message
              </h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div whileFocus={{ scale: 1.02 }}>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </motion.div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="How can we help?"
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 shadow-soft glow-pulse"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-gradient-primary opacity-20 rotate-45" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
