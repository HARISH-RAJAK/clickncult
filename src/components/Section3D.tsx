import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Section3DProps {
  children: ReactNode;
  className?: string;
  direction?: "left" | "right" | "up" | "down";
}

const Section3D = ({ children, className = "", direction = "up" }: Section3DProps) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Smoother spring physics for gentle feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  // Softer 3D rotation based on scroll
  const rotateX = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    direction === "up" ? [8, 0, 0, -8] : direction === "down" ? [-8, 0, 0, 8] : [0, 0, 0, 0]
  );
  
  const rotateY = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    direction === "left" ? [8, 0, 0, -8] : direction === "right" ? [-8, 0, 0, 8] : [0, 0, 0, 0]
  );

  // Gentle scale effect
  const scale = useTransform(
    smoothProgress,
    [0, 0.2, 0.8, 1],
    [0.95, 1, 1, 0.95]
  );

  // Smooth opacity fade
  const opacity = useTransform(
    smoothProgress,
    [0, 0.1, 0.9, 1],
    [0.6, 1, 1, 0.6]
  );

  // Subtle Z-axis translation for depth
  const translateZ = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [-30, 0, 0, -30]
  );

  // Gentle Y-axis parallax
  const translateY = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [40, 0, -40]
  );

  return (
    <div ref={ref} className="perspective-container">
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          opacity,
          z: translateZ,
          y: translateY,
          transformStyle: "preserve-3d",
        }}
        className={`transform-gpu ${className}`}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Section3D;
