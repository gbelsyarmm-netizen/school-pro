import React, { useState } from 'react';
import { Search, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ResultSearch = () => {
  const [rollNo, setRollNo] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!rollNo) return;
    
    setLoading(true);
    setResult(null);
    setError(null);

    // Mock searching delay
    setTimeout(() => {
      if (rollNo === '12345') {
        setResult({
          name: 'Muhammad Kashif',
          fatherName: 'Allah Dino',
          class: '8th',
          marks: '845/850',
          grade: 'A+',
          status: 'Pass'
        });
      } else {
        setError('Roll number not found. Please check and try again.');
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto glass-card rounded-[3rem] p-10 shadow-xl border-t-8 border-t-blue-600">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold mb-4">Check Online <span className="text-blue-600">Result</span></h3>
            <p className="text-gray-500">Enter your official roll number to view your annual exam result.</p>
          </div>

          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input 
                  type="text" 
                  value={rollNo}
                  onChange={(e) => setRollNo(e.target.value)}
                  placeholder="Enter Roll Number (e.g. 12345)"
                  className="w-full pl-12 pr-4 py-4 bg-white border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                />
              </div>
              <button 
                disabled={loading}
                className="btn-premium bg-blue-600 text-white min-w-[140px] disabled:opacity-50"
              >
                {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Search'}
              </button>
            </div>
          </form>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-white rounded-3xl p-8 border border-green-100 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 bg-green-500 text-white px-6 py-2 rounded-bl-3xl font-bold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  {result.status}
                </div>
                
                <div className="grid md:grid-cols-2 gap-y-4 gap-x-8">
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Student Name</p>
                    <p className="text-lg font-bold text-gray-900">{result.name}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Father's Name</p>
                    <p className="text-lg font-bold text-gray-900">{result.fatherName}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Class</p>
                    <p className="text-lg font-bold text-gray-900">{result.class}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Total Marks</p>
                    <p className="text-lg font-bold text-blue-600">{result.marks}</p>
                  </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-50 flex justify-between items-center">
                  <p className="text-sm font-medium text-gray-500">Grade Obtained:</p>
                  <span className="text-4xl font-extrabold text-blue-600">{result.grade}</span>
                </div>
              </motion.div>
            )}

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-50 text-red-600 p-6 rounded-2xl flex items-center gap-4"
              >
                <AlertCircle className="w-6 h-6" />
                <p className="font-semibold">{error}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ResultSearch;
