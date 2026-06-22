import React from 'react';
import Navbar from './Navbar.js';
import Hero from './Hero.js';
import Features from './Features.js';
import Footer from './Footer.js';

export default function App() {
  return (
    <div style={{ background: "#333333", minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif", color: "#fff" }}>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}