import React from 'react';
import { Book, Heart, Feather } from 'lucide-react';

const IslamicSection = () => {
  return (
    <section className="py-24 bg-blue-900 overflow-hidden relative">
      {/* Arabic Calligraphy Style Background (Placeholder logic) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <span className="text-[300px] font-bold text-white select-none whitespace-nowrap" dir="rtl">قرآن</span>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/10 text-blue-200 px-4 py-2 rounded-full mb-4 font-semibold text-sm backdrop-blur-md">
            Values & Wisdom
          </div>
          <h2 className="text-4xl font-bold text-white uppercase tracking-tighter">Islamic & Educational <span className="text-blue-400">Wisdom</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Quranic Verse */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[3rem] text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center mx-auto mb-8 font-bold text-2xl">
              <Book className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-6 leading-relaxed" dir="rtl">وَ قُلْ رَّبِّ زِدْنِیْ عِلْمًا</h3>
            <p className="text-blue-200 text-lg mb-4">"Aye Mere Rab! Mere Ilam Mein Izafa Farma."</p>
            <p className="text-white/40 text-sm uppercase tracking-widest">Surah Taha: 114</p>
          </div>

          {/* Hadith */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[3rem] text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed" dir="rtl">طلب العلم فريضة على كل مسلم</h3>
            <p className="text-blue-200 text-lg mb-4">"Ilam Hasil Karna Har Musalman Par Farz Hai."</p>
            <p className="text-white/40 text-sm uppercase tracking-widest">Al-Hadith</p>
          </div>

          {/* Sindhi Poetry */}
          <div className="bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[3rem] text-center hover:bg-white/10 transition-colors">
            <div className="w-16 h-16 bg-amber-500/20 text-amber-400 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Feather className="w-8 h-8" />
            </div>
            <p className="text-2xl font-bold text-white mb-4 leading-relaxed" dir="rtl">سائين سدائين ڪرين مٿي سنڌ سڪار</p>
            <p className="text-blue-200 text-lg mb-4">"O Lord! May You always keep Sindh prosperous!"</p>
            <p className="text-white/40 text-sm uppercase tracking-widest">Shah Abdul Latif Bhittai</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IslamicSection;
