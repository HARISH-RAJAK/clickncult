import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Menu, X, Scissors, Instagram } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Stats", href: "#stats" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAboutInView, setIsAboutInView] = useState(false);
  
  const { scrollY } = useScroll();
  const navY = useTransform(scrollY, [0, 100], [0, -10]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navRotateX = useTransform(scrollY, [0, 100], [0, 2]);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [5, -5]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-5, 5]), { stiffness: 300, damping: 30 });

  useEffect(() => {
    const aboutSection = document.querySelector("#about");
    if (!aboutSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsAboutInView(entry.isIntersecting);
      },
      { threshold: 0.5 } 
    );

    observer.observe(aboutSection);

    return () => {
      observer.unobserve(aboutSection);
    };
  }, []);


  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0, rotateX: -15 }}
      animate={{ y: 0, opacity: 1, rotateX: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      style={{ 
        y: navY, 
        scale: navScale,
        rotateX: navRotateX,
        transformPerspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`fixed top-4 left-4 right-4 z-50 rounded-full transition-all duration-500 shadow-lg shadow-primary/5 border border-border ${isAboutInView ? 'bg-gradient-dark' : 'bg-gradient-hero'}`}>
      <motion.div 
        className="container mx-auto px-6 py-4"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      >
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="font-display text-3xl font-bold relative group"
            whileHover={{ scale: 1.05, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.span 
              className="relative inline-flex items-center gap-1"
              style={{ transform: "translateZ(20px)" }}
            >
              <span className="text-gradient ">Click</span>
              <motion.span 
                className="text-gradient mx-1"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                n
              </motion.span>
              <span className="text-gradient">Cult</span>
              <motion.div
                className="ml-1"
                animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Scissors className="w-6 h-6 text-accent" />
              </motion.div>
            </motion.span>
            <span 
              className="absolute inset-0 text-primary/20 blur-sm"
              style={{ transform: "translateZ(-10px) translateY(2px)" }}
            >
              Click n Cut
            </span>
          </motion.a>

          <div className="hidden font-body md:flex items-center gap-4 font-semibold text-base">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-2 hover:text-foreground transition-colors group ${isAboutInView ? 'text-white font-bold' : 'text-muted-foreground'}`}
                initial={{ opacity: 0, y: -20, rotateX: -30 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ 
                  scale: 1.1, 
                  rotateX: 10,
                  z: 20,
                }}
                style={{ transformStyle: "preserve-3d", transformPerspective: 500 }}
              >
                <span className="relative z-10">{link.name}</span>
                <motion.span 
                  className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity group-hover:backdrop-blur-sm"
                  style={{ transform: "translateZ(-5px)" }}
                />
                <motion.span 
                  className="absolute -bottom-0 left-2 right-2 h-0.5 bg-gradient-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ transform: "translateZ(5px)" }}
                />
              </motion.a>
            ))}
            
            <motion.a href="https://www.instagram.com/clickncult/" target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.8 }}
              whileHover={{ 
                scale: 1.2, 
                rotateY: 15,
                color: "hsl(var(--primary))",
              }}
              whileTap={{ scale: 0.9 }}
              className="p-2.5 bg-gradient-soft rounded-full text-foreground"
            >
              <Instagram size={22} />
            </motion.a>
            <motion.button
              initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: -10,
                boxShadow: "0 20px 40px -10px hsl(var(--primary) / 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-primary text-primary-foreground font-bold text-base rounded-full relative overflow-hidden group"
              style={{ transformStyle: "preserve-3d", transformPerspective: 500 }}
            >
              <span className="relative z-10">Get Started</span>
              <motion.span 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.button>
          </div>

          <motion.button
            className="md:hidden text-foreground p-2 rounded-xl bg-secondary"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1, rotateY: 15 }}
            whileTap={{ scale: 0.9 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              animate={{ rotateY: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </motion.button>
        </div>

        <motion.div
          initial={false}
          animate={{ 
            height: isOpen ? "auto" : 0, 
            opacity: isOpen ? 1 : 0,
            rotateX: isOpen ? 0 : -30,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="md:hidden overflow-hidden"
          style={{ transformOrigin: "top", transformPerspective: 1000 }}
        >
          <div className="py-4 flex flex-col gap-2 font-semibold text-base">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-xl transition-all"
                onClick={() => setIsOpen(false)}
                initial={{ x: -50, opacity: 0 }}
                animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10, scale: 1.02 }}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="flex items-center gap-4 mt-2">
              <motion.a href="https://www.instagram.com/clickncult/" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-gradient-soft rounded-xl text-foreground"
                whileHover={{ scale: 1.05, color: "hsl(var(--primary))" }}
                whileTap={{ scale: 0.95 }}
              >
                <Instagram size={24} />
              </motion.a>
              <motion.button 
                className="flex-1 px-6 py-3 bg-gradient-primary text-primary-foreground font-bold text-base rounded-xl"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
