import React from 'react';
import { Target, Eye, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6 font-semibold text-sm">
              <BookOpen className="w-4 h-4" />
              About Our School
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Dedicated to Excellence in <span className="text-blue-600">Education</span>
            </h2>
            
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed mb-10">
              <p className="font-medium text-gray-800" lang="ur">
                يار محمد منگريو گورنمينٽ بوائز ايليمينٽري اسڪول هڪ قديم ۽ معتبر ادارو آهي جيڪو ٻارن کي معياري تعليم فراهم ڪري رهيو آهي. اسان جو مقصد هر ٻار کي بهترين تعليمي ماحول فراهم ڪرڻ آهي.
              </p>
              <p>
                GBELS Yar Muhammad Mangrio has been a cornerstone of our community, providing a nurturing environment where students can achieve their full potential. Our dedicated faculty ensures that every student receives personalized attention and a comprehensive curriculum.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-blue-600">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h4>
                <p className="text-gray-600 text-sm">To provide holistic and quality education, fostering critical thinking and moral values in our future leaders.</p>
              </div>
              <div className="glass-card p-6 rounded-2xl border-l-4 border-l-green-600">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h4>
                <p className="text-gray-600 text-sm">To create an empowered and literate society by making education accessible and engaging for every child.</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="/gallery1.png" 
                alt="Classroom Activity" 
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-xl z-20 max-w-[200px] hidden md:block">
              <p className="text-4xl font-bold text-blue-600 mb-1">50+</p>
              <p className="text-sm font-semibold text-gray-800">Years of Educational Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
