/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Compass, CloudOff, Zap, Shield, Camera, UploadCloud, CheckCircle, Menu, User } from 'lucide-react';

export default function FieldEngineeringSection() {
  const [isUploading, setIsUploading] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);
  const [gpsLogged, setGpsLogged] = useState(true);

  // Simulated coordinate triggers
  const [lat, setLat] = useState("24.5204");
  const [lng, setLng] = useState("54.3712");

  const handleUploadEvidence = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setPhotoUploaded(true);
    }, 1200);
  };

  const handleReset = () => {
    setPhotoUploaded(false);
    // Randomize slightly to make it feel dynamically computed
    setLat((24.5200 + Math.random() * 0.0100).toFixed(4));
    setLng((54.3700 + Math.random() * 0.0100).toFixed(4));
  };

  return (
    <section className="py-20 bg-white border-b border-[#c3c6cf]/20 overflow-hidden" id="field-tools">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Responsive Smartphone Simulator Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            
            {/* Soft Ambient Shadow Light behind Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-[550px] bg-[#03493e]/5 rounded-[44px] blur-3xl pointer-events-none" />

            {/* SmartPhone Outside Border */}
            <div className="relative w-full max-w-[325px] h-[580px] bg-white rounded-[44px] p-3 shadow-[0_24px_50px_rgba(0,23,50,0.12)] border-[8px] border-[#001732]">
              
              {/* Dynamic Camera Notch / Ear Speaker Bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#001732] rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-white/20 rounded-full" />
              </div>

              {/* Inside Screen Content Canvas */}
              <div className="w-full h-full rounded-[34px] bg-[#03493e] px-4 py-6 flex flex-col justify-between relative overflow-hidden text-white font-sans">
                
                {/* Header within Phone Canvas */}
                <div className="flex justify-between items-center pt-2">
                  <Menu className="w-5 h-5 text-white/85 cursor-pointer" />
                  <span className="font-mono text-xs font-black tracking-widest text-[#fcaa33]">Case #9822</span>
                  <User className="w-5 h-5 text-white/85" />
                </div>

                {/* GPS Status Indicator Screen Card */}
                <div className="bg-black/30 border border-white/10 rounded-xl p-3.5 space-y-1 mt-4">
                  <div className="flex justify-between items-center text-[10px] text-white/60 font-mono tracking-wide">
                    <span>GPS STATUS AVAILABLE</span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-xs text-white/50 font-mono">Current Location</div>
                  <div className="text-sm font-bold font-mono tracking-tight text-[#fcaa33]">
                    {lat}° N, {lng}° E
                  </div>
                </div>

                {/* Main Dynamic Upload Area Section */}
                <div className="flex-1 my-6 border-2 border-dashed border-white/20 rounded-2xl flex flex-col items-center justify-center p-4 bg-black/10 relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!photoUploaded && !isUploading ? (
                      <motion.div
                        key="idle-state"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-center space-y-3 flex flex-col items-center"
                      >
                        <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-white/70">
                          <Camera className="w-6 h-6 text-[#fcaa33]" />
                        </div>
                        <span className="text-xs text-white/60 tracking-wide font-semibold block">
                          No site photographs <br /> synchronized yet.
                        </span>
                      </motion.div>
                    ) : isUploading ? (
                      <motion.div
                        key="uploading-state"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center space-y-3 flex flex-col items-center"
                      >
                        <UploadCloud className="w-10 h-10 text-[#fcaa33] animate-bounce" />
                        <span className="text-xs text-white/80 font-mono">Compressing Image & Verification Signatures...</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="success-state"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 flex flex-col justify-between"
                      >
                        {/* Simulated high-quality modern physical visual layout */}
                        <img
                          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=300&q=80"
                          alt="Synchronized evidence upload"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-3 flex flex-col justify-end">
                          <div className="flex items-center gap-1 bg-emerald-500/95 text-white text-[10px] font-bold px-2 py-0.5 rounded-md self-start">
                            <CheckCircle className="w-3.5 h-3.5" /> SECURED ON LEDGER
                          </div>
                          <span className="text-[10px] font-mono text-white/70 block mt-1">Watermarked check-in verified.</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Interactive Dynamic Core Button */}
                <div className="space-y-2">
                  {!photoUploaded ? (
                    <button
                      onClick={handleUploadEvidence}
                      disabled={isUploading}
                      className="w-full bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] py-3 rounded-xl font-sans text-xs font-extrabold shadow-md tracking-wider transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer disabled:opacity-50"
                    >
                      {isUploading ? "Uploading..." : "Upload Evidence"}
                    </button>
                  ) : (
                    <button
                      onClick={handleReset}
                      className="w-full bg-[#03493e] border border-white/30 text-white hover:bg-white/10 py-3 rounded-xl font-sans text-xs font-extrabold tracking-wider transition-all cursor-pointer"
                    >
                      Reset Simulator
                    </button>
                  )}
                  <span className="text-[9px] font-mono text-center block text-white/50 uppercase tracking-widest">
                    Hardware Sandbox Enabled
                  </span>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: Descriptions & Typography paired exactly with Mock Image parameters */}
          <div className="lg:col-span-7 space-y-8 flex flex-col justify-center">
            
            <div className="space-y-4">
              <h2 className="font-sans text-3xl md:text-[40px] leading-tight font-extrabold text-[#03493e] tracking-tight">
                Engineered for the Field
              </h2>
              <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed max-w-xl">
                Give your field engineers the tools they need to succeed, even in the most remote locations.
              </p>
            </div>

            {/* List of 3 dynamic feature rows, responsive layout block */}
            <div className="space-y-4 max-w-2xl">
              
              {/* Feature Box 1 */}
              <div className="flex items-start gap-4 p-5 bg-[#f8f9fa] border border-[#c3c6cf]/30 rounded-2xl hover:border-[#03493e]/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 bg-[#03493e]/10 text-[#03493e] rounded-xl flex items-center justify-center shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm sm:text-base text-[#001732]">
                    Real-Time GPS Validation
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Geofenced check-ins ensure site visits are conducted exactly where requested.
                  </p>
                </div>
              </div>

              {/* Feature Box 2 */}
              <div className="flex items-start gap-4 p-5 bg-[#f8f9fa] border border-[#c3c6cf]/30 rounded-2xl hover:border-[#03493e]/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 bg-[#03493e]/10 text-[#03493e] rounded-xl flex items-center justify-center shrink-0">
                  <CloudOff className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm sm:text-base text-[#001732]">
                    Offline First Mode
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Capture data and photos in basements or remote areas. Auto-sync when back in range.
                  </p>
                </div>
              </div>

              {/* Feature Box 3 */}
              <div className="flex items-start gap-4 p-5 bg-[#f8f9fa] border border-[#c3c6cf]/30 rounded-2xl hover:border-[#03493e]/40 hover:-translate-y-0.5 transition-all duration-200">
                <div className="w-10 h-10 bg-[#03493e]/10 text-[#03493e] rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-sans font-bold text-sm sm:text-base text-[#001732]">
                    Instant Photo Uploads
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed">
                    Optimized image compression for lightning-fast uploads directly to the case draft.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
