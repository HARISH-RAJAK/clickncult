import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "We're ClicknCult, Your Growth Partner",
    description:
      "ClicknCult is a full-service 360° marketing agency dedicated to helping small businesses achieve big results. From content creation to social media management, we handle every aspect of your digital presence.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="group w-full h-full cursor-pointer flex-col items-stretch rounded-2xl border border-border/10 bg-card p-4 transition-all duration-300 hover:bg-card/80 hover:shadow-2xl">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img
              src="/img/about1.png"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              alt="linear board demo"
            />
          </div>
        </div>
      </div>
    ),
  
  },
  {
    title: "Our Core Features",
    description:
      "We provide a comprehensive suite of services to elevate your brand. Our team is dedicated to crafting bespoke solutions that drive engagement and growth.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="group w-full h-full cursor-pointer flex-col items-stretch rounded-2xl border border-border/10 bg-card p-4 transition-all duration-300 hover:bg-card/80 hover:shadow-2xl">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img
              src="/img/about2.png"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              alt="linear board demo"
            />
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Proven Results, Global Reach",
    description:
      "With over 5+ years of experience and a portfolio of global clients, we deliver results that matter. We are committed to your success and growth in the digital landscape.",
    content: 
      <div className="h-full w-full flex items-center justify-center">
        <div className="group w-full h-full cursor-pointer flex-col items-stretch rounded-2xl border border-border/10 bg-card p-4 transition-all duration-300 hover:bg-card/80 hover:shadow-2xl">
          <div className="relative w-full h-full overflow-hidden rounded-lg">
            <img
              src="/img/about3.png"
              className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:scale-105"
              alt="linear board demo"
            />
          </div>
        </div>
      </div>
    ,
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      document.body.classList.add('theme-about');
    } else {
      document.body.classList.remove('theme-about');
    }
  }, [isInView]);

  return (
    <section className='bg-gradient-to-b bg-gradient-hero dark:bg-transparent rounded-3xl m-4 shadow-lg' id="about" ref={ref}>
      <StickyScroll content={content} />
    </section>
  );
};

export default About;
