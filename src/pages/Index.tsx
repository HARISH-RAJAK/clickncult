import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Section3D from "@/components/Section3D";

const Index = () => {
  return (
    <main className="relative overflow-x-hidden" style={{ perspective: "1200px" }}>
      <Navbar />
      
      <Section3D direction="up">
        <Hero />
      </Section3D>
      
      <Section3D direction="right">
        <Services />
      </Section3D>
      
      <Section3D direction="left">
        <About />
      </Section3D>
      
      <Section3D direction="up">
        <Stats />
      </Section3D>
      
      <Section3D direction="right">
        <Clients />
      </Section3D>
      
      <Section3D direction="left">
        <Contact />
      </Section3D>
      
      <Footer />
    </main>
  );
};

export default Index;
