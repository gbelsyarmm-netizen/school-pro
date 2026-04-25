import React from 'react';
import { Globe } from 'lucide-react';

const VisitorCounter = () => {
  return (
    <section className="py-12 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
              <Globe className="w-6 h-6 animate-pulse" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 tracking-tight">
              🌐 Our Visitors from Around the World
            </h3>
          </div>
          
          <h4 className="text-lg font-bold text-blue-600" lang="ur" dir="rtl">
            🌍 دنیا بھر سے ہماری ویب سائٹ وزٹ کرنے والے مہمان
          </h4>
        </div>

        {/* Flag Counter Widget Placeholder */}
        <div className="flex justify-center p-6 glass-card rounded-3xl inline-block mx-auto hover:scale-105 transition-transform duration-500 shadow-sm border border-gray-100">
          <a href="https://info.flagcounter.com/YArM">
            <img 
              src="https://s11.flagcounter.com/count2/YArM/bg_FFFFFF/txt_000000/border_CCCCCC/columns_4/maxflags_12/viewers_0/labels_1/pageviews_1/flags_0/percent_0/" 
              alt="Flag Counter" 
              border="0"
              className="max-w-full h-auto"
            />
          </a>
        </div>
        
        <p className="mt-6 text-xs text-gray-400 uppercase tracking-widest font-bold">
          Live Visitor Tracking
        </p>
      </div>
    </section>
  );
};

export default VisitorCounter;
