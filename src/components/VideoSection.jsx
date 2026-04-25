import React from 'react';
import { Play, Tv } from 'lucide-react';

const VideoSection = () => {
  const videos = [
    { id: 'dQw4w9WgXcQ', title: 'Educational Activities', description: 'Glimpse of daily classroom learning.' },
    { id: 'dQw4w9WgXcQ', title: 'Sindhi Alphabets', description: 'Fun way to learn Sindhi for kids.' },
    { id: 'dQw4w9WgXcQ', title: 'Independence Day', description: 'Highlights of 14 August celebrations.' }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full mb-4 font-semibold text-sm">
              <Tv className="w-4 h-4" />
              Video Gallery
            </div>
            <h2 className="text-4xl font-bold mb-4">Learn Through <span className="text-blue-400">Visuals</span></h2>
            <p className="text-gray-400">Watch our latest activities and educational content directly from our YouTube channel.</p>
          </div>
          <a href="#" className="btn-premium bg-blue-600 text-white hover:bg-blue-700">
            Visit Channel
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={idx} className="group">
              <div className="relative aspect-video rounded-3xl overflow-hidden mb-6 shadow-2xl">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-blue-600 p-4 rounded-full shadow-xl shadow-blue-500/40">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-bold">
                  YouTube
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors uppercase tracking-tight">{video.title}</h4>
              <p className="text-gray-400 text-sm">{video.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
