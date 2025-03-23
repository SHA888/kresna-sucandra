
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Technology from "@/components/Technology";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <div className="space-y-12"> {/* Added a container with reduced spacing */}
        <About />
        <Experience />
        <Projects />
        <Publications />
        <Technology />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
