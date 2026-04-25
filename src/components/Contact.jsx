import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white relative">
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/923000000000" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all animate-bounce"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in <span className="text-blue-600">Touch</span></h2>
            <p className="text-gray-500 text-lg mb-12">Have any questions or need more information? Feel free to reach out to us using the contact details or the form.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-tighter">Location</h4>
                  <p className="text-gray-500">Yar Muhammad Mangrio, Sindh, Pakistan</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-tighter">Phone</h4>
                  <p className="text-gray-500">+92 300 0000000 / +92 311 0000000</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1 uppercase tracking-tighter">Email</h4>
                  <p className="text-gray-500">info@gbelsyarmohammad.edu.pk</p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-[2rem] overflow-hidden shadow-lg border border-gray-100 h-64 relative">
              {/* Google Map Placeholder */}
              <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-gray-300 mx-auto mb-2" />
                  <p className="text-gray-400 font-medium">Google Maps Integration</p>
                </div>
              </div>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115132.86107244517!2d68.30!3d25.39!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDIzJzI0LjAiTiA2OMKwMTgnMDAuMCJF!5e0!3m2!1sen!2spk!4v1713800000000!5m2!1sen!2spk" 
                className="absolute inset-0 w-full h-full border-0 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="glass-card p-10 md:p-14 rounded-[3.5rem] shadow-2xl relative">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Full Name</label>
                <input 
                  type="text" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="Your Primary Email"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea 
                  rows="5"
                  className="w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button 
                className="w-full btn-premium bg-blue-600 text-white hover:bg-blue-700 py-5 text-lg"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
