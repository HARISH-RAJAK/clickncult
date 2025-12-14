
import React from 'react';
import { motion } from 'framer-motion';

// USER-ADJUSTABLE: Higher value means slower animation speed.
const scrollSpeed =40;

// To add your own logos, simply add a new object to the array with a name and a logo URL.
const logos1 = [
  { name: "Amazon", logo: "/img/amazon.png" },
  { name: "Havmor", logo: "/img/havmor.png" },
  { name: "Jio", logo: "/img/jio.png" },
  { name: "KFC", logo: "/img/kfc.png" },
  { name: "OPPO", logo: "/img/oppo.png" },
  { name: "Mintra", logo: "/img/mintra.png" },
];
const logos2 = [
    { name: "Amazon", logo: "/img/amazon.png" },
    { name: "Havmor", logo: "/img/havmor.png" },
    { name: "Jio", logo: "/img/jio.png" },
    { name: "KFC", logo: "/img/kfc.png" },
    { name: "OPPO", logo: "/img/oppo.png" },
    { name: "Mintra", logo: "/img/mintra.png" },
];
const logos3 = [
    { name: "Amazon", logo: "/img/amazon.png" },
    { name: "Havmor", logo: "/img/havmor.png" },
    { name: "Jio", logo: "/img/jio.png" },
    { name: "KFC", logo: "/img/kfc.png" },
    { name: "OPPO", logo: "/img/oppo.png" },
    { name: "Amazon", logo: "/img/amazon.png" },
];

const LogoRow = ({ logos, direction, speed }) => {
  const extendedLogos = [...logos, ...logos, ...logos, ...logos];

  const marqueeAnimation = {
    animate: {
        x: direction === 'left' ? [0, -2000] : [-2000, 0],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        },
      },
  };

  return (
    <div className="w-full overflow-x-hidden">
      <motion.div
        className="flex"
        variants={marqueeAnimation}
        animate="animate"
      >
        {extendedLogos.map((company, index) => (
          <div key={index} className="flex-shrink-0 w-80 mx-6 flex flex-col items-center justify-center">
            <img src={company.logo} alt={company.name} className="h-24 mb-4" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const Companies = () => {
  return (
    <div className="py-24 sm:py-32 bg-gradient-hero">
      <div className="mx-auto max-w-full px-0">
        <h2 className="text-center text-lg font-semibold leading-8 text-foreground">
          Trusted by the most innovative teams
        </h2>
        <div className="mt-12 space-y-10">
          <LogoRow logos={logos1} direction="right" speed={scrollSpeed} />
          <LogoRow logos={logos2} direction="left" speed={scrollSpeed} />
          <LogoRow logos={logos3} direction="right" speed={scrollSpeed} />
        </div>
      </div>
    </div>
  );
};

export default Companies;
