import React, { useState } from 'react';
import { Image as ImageIcon, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Events', '14 August', 'Teachers Activities', 'Position Holders'];

  const images = [
    { id: 1, src: '/gallery1.png', category: 'Events', title: 'Science Fair 2025' },
    { id: 2, src: '/gallery2.png', category: '14 August', title: 'Independence Day' },
    { id: 3, src: '/hero.png', category: 'Teachers Activities', title: 'Staff Meeting' },
    { id: 4, src: '/gallery1.png', category: 'Position Holders', title: 'Prize Distribution' },
    { id: 5, src: '/gallery2.png', category: 'Events', title: 'Annual Sports' },
    { id: 6, src: '/hero.png', category: '14 August', title: 'Flag Hoisting' },
  ];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
            <ImageIcon className="w-4 h-4" />
            Our Moments
          </div>
          <h2 className="text-4xl font-bold mb-6">Explore Our <span className="text-blue-600">Gallery</span></h2>
          <p className="text-gray-500">A glimpse into the vibrant life and achievements at GBELS Yar Muhammad Mangrio.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredImages.map((img) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-2xl aspect-[4/3] shadow-lg"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <p className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-1">{img.category}</p>
                  <h4 className="text-white text-lg font-bold">{img.title}</h4>
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full">
                    <ZoomIn className="text-white w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-6"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white bg-white/10 p-2 rounded-full hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={selectedImage.src}
                className="max-w-full max-h-full rounded-xl"
              />
              <div className="absolute bottom-10 text-center">
                <h3 className="text-white text-2xl font-bold">{selectedImage.title}</h3>
                <p className="text-blue-400 font-semibold">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
