import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

const PositionHolders = () => {
  const students = [
    { name: 'M. Kashif', class: '8th', marks: '845/850', pos: '1st', color: 'bg-amber-100', text: 'text-amber-600', icon: Trophy },
    { name: 'Sajid Ali', class: '8th', marks: '812/850', pos: '2nd', color: 'bg-slate-100', text: 'text-slate-600', icon: Award },
    { name: 'Irshad Ahmed', class: '5th', marks: '585/600', pos: '1st', color: 'bg-orange-100', text: 'text-orange-600', icon: Star },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Our Academic <span className="text-blue-600">Stars</span></h2>
          <p className="text-gray-500">Celebrating excellence and hard work of our top performing students.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {students.map((student, idx) => (
            <div key={idx} className="glass-card rounded-3xl p-8 relative overflow-hidden group">
              {/* Badge */}
              <div className={`absolute top-0 right-0 ${student.color} ${student.text} px-8 py-2 rounded-bl-3xl font-extrabold uppercase tracking-widest text-sm`}>
                {student.pos} Position
              </div>

              <div className={`w-20 h-20 ${student.color} ${student.text} rounded-2xl flex items-center justify-center mb-8`}>
                <student.icon className="w-10 h-10" />
              </div>

              <h4 className="text-2xl font-bold text-gray-900 mb-2">{student.name}</h4>
              <p className="text-blue-600 font-semibold mb-6">Class {student.class}</p>

              <div className="bg-gray-50 rounded-2xl p-4 flex justify-between items-center">
                <span className="text-gray-500 text-sm">Obtained Marks</span>
                <span className="text-gray-900 font-bold">{student.marks}</span>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-green-600 font-bold text-sm">
                <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
                PASSED WITH DISTINCTION
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionHolders;
