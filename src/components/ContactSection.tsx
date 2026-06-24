/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface ContactSectionProps {
  onOpenDemo?: (feature?: string) => void;
}

export default function ContactSection({ onOpenDemo }: ContactSectionProps) {
  return (
    <section className="relative overflow-hidden w-full bg-gradient-to-r from-[#03493e] via-[#03493e] to-[#fcaa33] py-24 px-6 text-center" id="contact">
      {/* Absolute overlay for subtle color depth matching the reference image */}
      <div className="absolute inset-0 bg-[#000000]/5 mix-blend-multiply pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto space-y-7">
        
        {/* Exact reproduction of screenshot title: medium-bold, elegant tracking, premium matte slate finish */}
        <h2 className="font-sans text-3xl sm:text-4.5xl md:text-5.5xl font-semibold text-slate-100 tracking-tight leading-tight select-none">
          Ready to Eliminate Operational Leakage?
        </h2>
        
        {/* Exact reproduction of screenshot subtitle */}
        <p className="font-sans text-xs sm:text-sm md:text-base text-white/85 font-normal tracking-wide leading-relaxed max-w-2xl mx-auto">
          Join the leading valuation agencies that trust ValuXpert to power their professional ecosystem.
        </p>
        
        {/* Centered side-by-side custom buttons matching exact button geometry */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          
          {/* Amber-filled button, slight hover dim */}
          <button
            type="button"
            onClick={() => onOpenDemo ? onOpenDemo("Eliminate Operational Leakage") : undefined}
            className="w-full sm:w-auto px-9 py-3 bg-[#fcaa33] hover:bg-[#efa12b] text-[#001732] font-sans font-medium text-[13px] sm:text-sm tracking-wide rounded-lg transition-all duration-200 cursor-pointer shadow-md active:scale-98 text-center"
            id="contact-btn-request-demo"
          >
            Request a Demo
          </button>
          
          {/* Bordered button on dark teal background, subtle border, white/90 text */}
          <button
            type="button"
            onClick={() => onOpenDemo ? onOpenDemo("Enterprise Business Pricing Plan") : undefined}
            className="w-full sm:w-auto px-9 py-3 border border-white/20 hover:border-white/40 text-white font-sans font-medium text-[13px] sm:text-sm tracking-wide rounded-lg transition-all duration-200 bg-[#023a31]/40 hover:bg-[#023a31]/60 cursor-pointer active:scale-98 text-center"
            id="contact-btn-contact-sales"
          >
            Contact Sales
          </button>
          
        </div>
        
      </div>
    </section>
  );
}

