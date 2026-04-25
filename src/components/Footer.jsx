import { GraduationCap, Tv, ArrowUp, Globe, Send, User as UserIcon } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-gray-400 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-blue-600 p-2 rounded-xl text-white">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h2 className="text-white text-xl font-bold">GBELS<br /><span className="text-sm font-medium text-blue-400">Yar Muhammad Mangrio</span></h2>
            </div>
            <p className="mb-8 leading-relaxed text-sm">
              Providing quality education since decades. We are committed to nurturing the potential of every student through innovative learning and strong values.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Globe className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Send className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"><Tv className="w-5 h-5" /></a>
              <a href="#" className="bg-white/5 p-3 rounded-full hover:bg-blue-600 hover:text-white transition-all"><UserIcon className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Our Gallery</a></li>
              <li><a href="#admissions" className="hover:text-blue-400 transition-colors">Admissions</a></li>
              <li><a href="#downloads" className="hover:text-blue-400 transition-colors">Downloads</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">School Life</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-blue-400 transition-colors">News & Notices</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Sports & Games</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Student Activities</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Exam Schedules</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Position Holders</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-sm mb-6">Subscribe to our newsletter for latest updates and news.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address"
                className="w-full bg-white/5 border border-white/10 px-6 py-4 rounded-2xl outline-none focus:border-blue-600 transition-colors"
              />
              <button className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2026 GBELS Yar Muhammad Mangrio. All Rights Reserved.</p>
          <div className="flex gap-8 text-sm">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms of Service</a>
          </div>
          <button 
            onClick={scrollToTop}
            className="bg-blue-600 text-white p-3 rounded-2xl hover:scale-110 active:scale-95 transition-all shadow-xl shadow-blue-600/30"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
