import React from "react";
import Header from "../components/Navbar";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Hero from "../components/sections/Hero";
import Testimonials from "../components/sections/Testimonials";
import Services from "../components/sections/Services";
import Footer from "../components/Footer";

const App: React.FC = () => (
  <div className="app-container">
    <Header />
    <Hero />
    <About />
    <Services />
    <Features />
    <Testimonials />
    <Footer />
  </div>
);

export default App;
