/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, RefreshCw, BarChart3, Users } from 'lucide-react';

interface HeroProps {
  onOpenDemo: (feature?: string) => void;
}

export default function Hero({ onOpenDemo }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 text-white overflow-hidden bg-[#03493e]">
      {/* Absolute subtle glowing ambient lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fcaa33]/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#fcaa33]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Expanded & Responsive Container */}
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* Left Text Block */}
          <div className="lg:col-span-6 space-y-8">
            <motion.h1
              variants={itemVariants}
              className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-[54px] lg:leading-[1.15] tracking-tight text-white"
            >
              The Operating System for <br /> Modern <span className="text-[#fcaa33]">Valuation</span> <br /> Companies
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-sans text-sm sm:text-base md:text-lg text-white/90 max-w-xl leading-relaxed"
            >
              Eliminate operational leakage. Manage cases, optimize field visits, and unify your HRMS under one high-reliability professional platform.
            </motion.p>

            {/* Action buttons exactly styled as per the mockup */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => onOpenDemo()}
                className="bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] px-7 py-3.5 rounded-lg font-sans font-bold text-sm tracking-wide shadow-md transition-all duration-200 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Request a Demo
              </button>
              <button
                onClick={() => onOpenDemo("Automatic Drafting Calculation Sheet")}
                className="border border-white/20 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-sans font-bold text-sm transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                Watch How It Works
              </button>
            </motion.div>

            {/* Premium, custom tags wrapped matching the screenshot style */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 pt-6 max-w-xl"
            >
              <div className="flex items-center gap-2.5 bg-black/35 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm hover:bg-black/45 transition-colors cursor-default">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90 tracking-wide font-sans">Role-Based Access</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/35 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm hover:bg-black/45 transition-colors cursor-default">
                <RefreshCw className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90 tracking-wide font-sans">End-to-End Workflow</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/35 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm hover:bg-black/45 transition-colors cursor-default">
                <BarChart3 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90 tracking-wide font-sans">Real-Time MIS</span>
              </div>
              <div className="flex items-center gap-2.5 bg-black/35 border border-white/10 px-4 py-2.5 rounded-full backdrop-blur-sm hover:bg-black/45 transition-colors cursor-default">
                <Users className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-xs font-semibold text-white/90 tracking-wide font-sans">Integrated HRMS</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Custom white framed monitor matching the viewport mockup perfectly */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-6 relative mt-10 lg:mt-0"
          >
            {/* Absolute ambient backlight */}
            <div className="absolute -inset-6 bg-[#fcaa33]/8 blur-3xl rounded-full" />
            
            {/* Thick white frame/border container with custom deep gradient base */}
            <div className="relative border-[10px] border-white/95 rounded-[36px] p-6 lg:p-8 bg-gradient-to-tr from-[#02332a] to-[#054035] shadow-2xl flex items-center justify-center transition-transform duration-500 hover:scale-[1.01] overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNmKaDm0_WaeaChOVxKhozum7ePqxfGH61u3zJKS-gOcYk69E96V9--q6bUcBIKRPMiJhAFFAlYm7IVFqP6N-vX0X-fIyDUjKhnwsNtuRKJJchz_Wmwwyoa1Yk1RWh1BxrGTSD8C6tig6UfFHIKbqVyXrGxDs3PCf9f0vk9EoQlq8MDga52ImMV5QIc0hJ8OB15MNsV5-ObZ69VXq55S8XmUbpLL9MzMAFXP4z0SpcsRHeGHPrV0FYLK2iJaztnWJjg4I25ngYHmU"
                referrerPolicy="no-referrer"
                alt="ValuXpert Real-Time Software Analytics Interface"
                className="w-full h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
