import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import MyProjects from "../components/MyProjects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingButton from "../components/FloatingButton";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutMe />
        <Skills />
        <MyProjects />
        <Contact />
      </main>
      <Footer />
      <FloatingButton />
    </>
  );
};

export default HomePage;
