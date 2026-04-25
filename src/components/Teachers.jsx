import { Tv, MessageCircle, User, Globe, Send } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    { name: 'Muhammad Hanif Mangrio', subject: 'Head Master', image: null },
    { name: 'Ahmed Ali Sahito', subject: 'Science Specialist', image: null },
    { name: 'Sartaj Ahmed', subject: 'Math Expert', image: null },
    { name: 'Gul Hassan Mangrio', subject: 'Sindhi Language', image: null },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl font-bold mb-6">Our Highly Qualified <span className="text-blue-600">Teachers</span></h2>
          <p className="text-gray-500">The backbone of our institution, dedicated to enlightening the minds of our students.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {teachers.map((teacher, idx) => (
            <div key={idx} className="group glass-card rounded-[2.5rem] p-4 pt-10 text-center hover:bg-blue-600 transition-all duration-500">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 bg-blue-100 rounded-full group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center overflow-hidden border-2 border-transparent group-hover:border-white transition-all duration-500">
                  <User className="w-16 h-16 text-gray-400 group-hover:text-blue-600" />
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-white transition-colors">{teacher.name}</h4>
              <p className="text-gray-500 font-medium text-sm mb-8 group-hover:text-blue-100 transition-colors uppercase tracking-widest">{teacher.subject}</p>
              
              <div className="flex justify-center gap-3 bg-white/10 backdrop-blur-md p-4 rounded-3xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <a href="#" className="bg-white p-2 rounded-xl text-blue-600 hover:scale-110 transition-transform"><Globe className="w-5 h-5" /></a>
                <a href="#" className="bg-white p-2 rounded-xl text-green-600 hover:scale-110 transition-transform"><MessageCircle className="w-5 h-5" /></a>
                <a href="#" className="bg-white p-2 rounded-xl text-red-600 hover:scale-110 transition-transform"><Tv className="w-5 h-5" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
