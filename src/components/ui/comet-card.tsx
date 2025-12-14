"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export const CometCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [rect, setRect] = useState<DOMRect | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const ySpring = useSpring(y, { stiffness: 300, damping: 20 });

  const transform = useMotionTemplate`perspective(1000px) rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!rect) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = rect;

    const mouseX = clientX - left;
    const mouseY = clientY - top;

    const rotateX = (mouseY / height - 0.5) * -25;
    const rotateY = (mouseX / width - 0.5) * 25;

    x.set(rotateX);
    y.set(rotateY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (ref.current) {
      setRect(ref.current.getBoundingClientRect());
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: "preserve-3d", transform }}
      className="relative"
    >
      {children}
    </motion.div>
  );
};
