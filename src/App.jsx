import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NoticeBoard from './components/NoticeBoard';
import Stats from './components/Stats';
import About from './components/About';
import Gallery from './components/Gallery';
import VideoSection from './components/VideoSection';
import Downloads from './components/Downloads';
import Teachers from './components/Teachers';
import PositionHolders from './components/PositionHolders';
import IslamicSection from './components/IslamicSection';
import AdmissionForm from './components/AdmissionForm';
import ResultSearch from './components/ResultSearch';
import Contact from './components/Contact';
import VisitorCounter from './components/VisitorCounter';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-600/20">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 bg-blue-600 origin-[0%] z-[100]"
        style={{ scaleX }}
      />
      <Navbar />

      
      <main>
        {/* Sections ordered for best UX */}
        <Hero />
        <NoticeBoard />
        <Stats />
        <About />
        <IslamicSection />
        <Gallery />
        <VideoSection />
        <div className="bg-slate-50">
          <PositionHolders />
          <Teachers />
        </div>
        <Downloads />
        <AdmissionForm />
        <ResultSearch />
        <Contact />
        <VisitorCounter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
