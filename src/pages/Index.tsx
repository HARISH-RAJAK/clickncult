import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { VideoReel } from "@/components/VideoReel";
import Companies from "@/components/Companies";

const Index = () => {
  return (
    <main className="relative overflow-x-hidden bg-transparent">
      <VideoReel />
      <Navbar />
      
      <Hero />
      
      <Services />
      
      <About />
      
      <Stats />
     
      
      <Contact />

      <Companies />
      
      <Footer />
    </main>
  );
};

export default Index;
