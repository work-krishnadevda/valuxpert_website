/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Phone, MapPin, CheckCircle, ArrowRight } from 'lucide-react';

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialFeature?: string;
}

export default function DemoModal({ isOpen, onClose, initialFeature }: DemoModalProps) {
  const [fullName, setFullName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState(initialFeature ? `I am interested in knowing more about ${initialFeature}` : '');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !companyName || !email || !phone) {
      setErrorMsg('Please populate all required fields.');
      return;
    }
    setErrorMsg('');
    setIsSubmitting(true);
    
    // 1. Format the message for WhatsApp
    const whatsappMessage = `*New Demo Request*
*Name:* ${fullName}
*Company:* ${companyName}
*Email:* ${email}
*Phone:* ${phone}
*Message:* ${message}`;

    // 2. Create the WhatsApp URL with your specific number (91 + 8839763070)
    const whatsappUrl = `https://wa.me/918839763070?text=${encodeURIComponent(whatsappMessage)}`;

    // 3. Simulate processing, then open WhatsApp and show success screen
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 800);
  };

  const handleReset = () => {
    setFullName('');
    setCompanyName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
        {/* Backdrop glass overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#001732]/70 backdrop-blur-sm"
        />

        {/* Modal Main Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="relative w-full max-w-5xl bg-white rounded-[32px] shadow-2xl overflow-hidden z-10 border border-[#c3c6cf]/30 my-8"
        >
          {/* Close button top corner */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="p-6 sm:p-10 md:p-12 lg:p-14">
            {!submitted ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                
                {/* Left Side: Get in Touch and info list */}
                <div className="lg:col-span-5 space-y-8">
                  <div className="space-y-4">
                    <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-[#03493e] tracking-tight">
                      Get in Touch
                    </h2>
                    <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed">
                      Have questions about how ValuXpert can optimize your specific workflow? Our team of experts is ready to help.
                    </p>
                  </div>

                  {/* Contact Info Indicators */}
                  <div className="space-y-4">
                    {/* sales email */}
                    <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] border border-[#c3c6cf]/10 rounded-2xl hover:bg-emerald-50/30 transition-colors">
                      <div className="w-10 h-10 bg-[#03493e]/10 text-[#03493e] rounded-xl flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-bold text-sm sm:text-base text-gray-700">
info@valuxpert.in                      </span>
                    </div>

                    {/* sales phone */}
                    <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] border border-[#c3c6cf]/10 rounded-2xl hover:bg-emerald-50/30 transition-colors">
                      <div className="w-10 h-10 bg-[#03493e]/10 text-[#03493e] rounded-xl flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-bold text-sm sm:text-base text-gray-700">
                        +91 877 092 4535
                      </span>
                    </div>

                    {/* corporate location */}
                    <div className="flex items-center gap-4 p-4 bg-[#f8f9fa] border border-[#c3c6cf]/10 rounded-2xl hover:bg-emerald-50/30 transition-colors">
                      <div className="w-10 h-10 bg-[#03493e]/10 text-[#03493e] rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <span className="font-sans font-bold text-xs sm:text-sm text-gray-700 leading-tight">
                        A12 Takshila Parisar, 80 Feet Road,Ratlam, Madhya Pradesh 457001
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right Side: High-fidelity Styled Card Form */}
                <div className="lg:col-span-7">
                  <div className="bg-[#f8f9fa] border border-[#c3c6cf]/30 rounded-[32px] p-6 sm:p-8 md:p-10 shadow-sm relative">
                    
                    {errorMsg && (
                      <div className="mb-4 p-3 bg-red-50 text-red-800 text-xs rounded-xl border border-red-100 font-semibold">
                        {errorMsg}
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Name */}
                        <div className="space-y-1.5 text-left">
                          <label className="block text-xs font-bold text-[#03493e] tracking-wide uppercase">
                            Full Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full px-4 py-3 text-sm bg-white border border-[#c3c6cf]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#03493e]/20 focus:border-[#03493e] font-sans font-semibold text-gray-800 placeholder-gray-400 transition-all shadow-inner"
                          />
                        </div>

                        {/* Company */}
                        <div className="space-y-1.5 text-left">
                          <label className="block text-xs font-bold text-[#03493e] tracking-wide uppercase">
                            Company Name
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="Acme Valuations"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="w-full px-4 py-3 text-sm bg-white border border-[#c3c6cf]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#03493e]/20 focus:border-[#03493e] font-sans font-semibold text-gray-800 placeholder-gray-400 transition-all shadow-inner"
                          />
                        </div>

                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        
                        {/* Email */}
                        <div className="space-y-1.5 text-left">
                          <label className="block text-xs font-bold text-[#03493e] tracking-wide uppercase">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@company.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 text-sm bg-white border border-[#c3c6cf]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#03493e]/20 focus:border-[#03493e] font-sans font-semibold text-gray-800 placeholder-gray-400 transition-all shadow-inner"
                          />
                        </div>

                        {/* Phone */}
                        <div className="space-y-1.5 text-left">
                          <label className="block text-xs font-bold text-[#03493e] tracking-wide uppercase">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 99999 99999"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 text-sm bg-white border border-[#c3c6cf]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#03493e]/20 focus:border-[#03493e] font-sans font-semibold text-gray-800 placeholder-gray-400 transition-all shadow-inner"
                          />
                        </div>

                      </div>

                      {/* Message body */}
                      <div className="space-y-1.5 text-left">
                        <label className="block text-xs font-bold text-[#03493e] tracking-wide uppercase">
                          Message
                        </label>
                        <textarea
                          rows={4}
                          placeholder="How can we help you?"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 text-sm bg-white border border-[#c3c6cf]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#03493e]/20 focus:border-[#03493e] font-sans font-semibold text-gray-800 placeholder-gray-400 transition-all resize-none shadow-inner"
                        />
                      </div>

                      {/* Send Message Solid Button exactly matching design */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#03493e] hover:bg-[#02352d] text-white py-4 rounded-xl font-sans font-bold text-sm tracking-wider shadow-md hover:shadow-lg active:scale-[0.99] transition-all disabled:opacity-50 cursor-pointer text-center"
                        >
                          {isSubmitting ? "Processing Request..." : "Send Message"}
                        </button>
                      </div>

                    </form>
                  </div>
                </div>

              </div>
            ) : (
              /* High loyalty Success submission panel container with same structural bounds */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 max-w-xl mx-auto space-y-6"
              >
                <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-100 shadow-sm">
                  <CheckCircle className="w-10 h-10 stroke-[2.5]" />
                </div>
                
                <div className="space-y-3">
                  <h3 className="font-sans text-3xl font-extrabold text-[#03493e] tracking-tight">
                    Thank You, {fullName}!
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
                    Your request for a ValuXpert private demo and system presentation has been successfully received. An enterprise expert will reach out to you shortly.
                  </p>
                </div>

                <div className="p-4 bg-[#f8f9fa] border border-[#c3c6cf]/30 rounded-2xl text-left text-xs text-gray-500 font-mono space-y-1">
                  <div><span className="font-bold text-gray-700">Company Name:</span> {companyName}</div>
                  <div><span className="font-bold text-gray-700">Phone Code:</span> {phone}</div>
                  <div><span className="font-bold text-gray-700">Receipt Ref:</span> VLX-{Math.floor(100000 + Math.random() * 900000)}</div>
                </div>

                <button
                  onClick={handleReset}
                  className="px-8 py-3 bg-[#03493e] hover:bg-[#02352d] text-white rounded-xl font-sans font-extrabold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Return to Workspace
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}