import React from 'react';
import { ChevronRight, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="School Building"
          className="w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-900/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span className="text-white text-xs font-semibold tracking-wider uppercase">Admission Open for 2026</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
            Welcome to <br />
            <span className="text-blue-400">GBELS</span> Yar Muhammad Mangrio
          </h1>
          
          <p className="text-xl text-blue-50/90 mb-10 max-w-2xl leading-relaxed">
            Nurturing young minds with quality education, modern facilities, and a commitment to a brighter future. Empowering the next generation of leaders.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <a href="#admissions" className="btn-premium bg-white text-blue-900 hover:bg-blue-50 group">
              Get Admission 
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="btn-premium border border-white/30 text-white hover:bg-white/10 group backdrop-blur-sm">
              <Play className="w-5 h-5 fill-current" />
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>

      {/* Stats Quick View (Floating) */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-full max-w-4xl px-6 hidden lg:block"
      >
        <div className="glass-premium rounded-[2.5rem] p-8 grid grid-cols-4 gap-8">
          <div className="text-center group">
            <p className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">213</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-tighter">Total Students</p>
          </div>
          <div className="text-center border-l border-gray-100 group">
            <p className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">148</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-tighter">Boys</p>
          </div>
          <div className="text-center border-l border-gray-100 group">
            <p className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">65</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-tighter">Girls</p>
          </div>
          <div className="text-center border-l border-gray-100 group">
            <p className="text-3xl font-bold text-blue-600 group-hover:scale-110 transition-transform">15+</p>
            <p className="text-sm font-medium text-gray-500 uppercase tracking-tighter">Expert Teachers</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
