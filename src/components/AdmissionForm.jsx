import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Upload, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AdmissionForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    dob: '',
    previousSchool: '',
    className: '',
    phone: '',
    address: '',
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic for email submission would go here (e.g. EmailJS)
  };

  if (submitted) {
    return (
      <div className="glass-card p-12 rounded-[3rem] text-center">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-12 h-12" />
        </div>
        <h3 className="text-3xl font-bold mb-4">Application Submitted!</h3>
        <p className="text-gray-500 mb-8">Thank you for applying to GBELS Yar Muhammad Mangrio. Our team will review your application and contact you soon via phone or email.</p>
        <button 
          onClick={() => setSubmitted(false)}
          className="btn-premium bg-blue-600 text-white mx-auto"
        >
          Submit Another
        </button>
      </div>
    );
  }

  return (
    <section id="admissions" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Online <span className="text-blue-600">Admission</span> Form</h2>
            <p className="text-gray-500">Fast and easy admission process for the academic year 2026-27.</p>
          </div>

          <div className="glass-card p-8 md:p-12 rounded-[3rem] shadow-2xl border-t-8 border-t-blue-600">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12 relative">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -z-10 -translate-y-1/2" />
              <div 
                className="absolute top-1/2 left-0 h-1 bg-blue-600 -z-10 -translate-y-1/2 transition-all duration-500" 
                style={{ width: `${(step - 1) * 50}%` }}
              />
              {[1, 2, 3].map((s) => (
                <div 
                  key={s}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                    step >= s ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-400'
                  }`}
                >
                  {s}
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Student Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                          type="text" 
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Father's Name</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                          type="text" 
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all"
                          placeholder="Father's Full Name"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Birth Certificate (PDF/Image)</label>
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed border-gray-200 rounded-2xl bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mb-2" />
                        <span className="text-sm text-gray-500">Drag or click to upload</span>
                        <input type="file" className="hidden" />
                      </label>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Applying for Class</label>
                      <select required className="w-full px-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all">
                        <option>Class 1</option>
                        <option>Class 2</option>
                        <option>Class 3</option>
                        <option>Class 4</option>
                        <option>Class 5</option>
                        <option>Class 6</option>
                        <option>Class 7</option>
                        <option>Class 8</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Mobile Number</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input 
                          type="tel" 
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all"
                          placeholder="e.g. 03xx-xxxxxxx"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-6"
                  >
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700">Residential Address</label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                        <textarea 
                          rows="4"
                          required
                          className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all"
                          placeholder="Complete Address"
                        ></textarea>
                      </div>
                    </div>
                    <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                      <p className="text-blue-800 text-sm font-semibold">Declaration:</p>
                      <p className="text-blue-600 text-xs mt-2">I hereby declare that the information provided above is true to the best of my knowledge and I agree to abide by the school rules and regulations.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex justify-between mt-12">
                {step > 1 && (
                  <button 
                    type="button" 
                    onClick={prevStep}
                    className="btn-premium btn-secondary"
                  >
                    <ArrowLeft className="w-5 h-5" />
                    Previous
                  </button>
                )}
                <div className="ml-auto flex gap-4">
                  {step < 3 ? (
                    <button 
                      type="button" 
                      onClick={nextStep}
                      className="btn-premium bg-blue-600 text-white"
                    >
                      Next Step
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button 
                      type="submit" 
                      className="btn-premium bg-green-600 text-white"
                    >
                      Submit Application
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;
