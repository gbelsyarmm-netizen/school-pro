import React from 'react';
import { FileText, Download, FileCheck, FileSpreadsheet } from 'lucide-react';

const Downloads = () => {
  const documents = [
    { title: 'Admission Form', type: 'PDF', size: '1.2 MB', icon: FileText, color: 'text-blue-600', bg: 'bg-blue-100' },
    { title: 'Leaving Certificate Request', type: 'PDF', size: '800 KB', icon: FileCheck, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Annual Result Sheet', type: 'XLSX', size: '2.5 MB', icon: FileSpreadsheet, color: 'text-amber-600', bg: 'bg-amber-100' },
  ];

  return (
    <section id="downloads" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4">Important <span className="text-blue-600">Resources</span></h2>
            <p className="text-gray-500">Download all necessary forms, certificates, and results directly from here. No need to visit school for every form.</p>
          </div>
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-3xl flex items-center gap-6">
            <div className="bg-blue-600 p-4 rounded-2xl text-white">
              <Download className="w-8 h-8" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-lg">One-Click Download</p>
              <p className="text-sm text-gray-500">Secure and official documents</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc, idx) => (
            <div key={idx} className="glass-card p-8 rounded-3xl group hover:border-blue-200 transition-all duration-300">
              <div className={`${doc.bg} ${doc.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                <doc.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{doc.title}</h4>
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                <span className="font-bold text-blue-600 uppercase">{doc.type}</span>
                <span>•</span>
                <span>{doc.size}</span>
              </div>
              <button className="w-full flex items-center justify-center gap-2 bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition-colors group">
                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                Download Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Downloads;
