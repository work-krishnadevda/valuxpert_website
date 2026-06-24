/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Building2, Compass, ShieldCheck, Quote } from 'lucide-react';

export interface Testimonial {
  id: string;
  companyName: string;
  quote: string;
  author: string;
  role: string;
  icon: React.ReactNode;
}

export default function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: "t1",
      companyName: "Apex Valuations",
      quote: "ValuXpert has completely eliminated our TAT bottlenecks. The automated bank-specific templates are a game changer.",
      author: "Amit S.",
      role: "Director (Empanelled with HDFC Bank)",
      icon: <Building2 className="w-5 h-5 text-[#066054]" />
    },
    {
      id: "t2",
      companyName: "Precision Appraisals",
      quote: "The GPS field tracking and integrated HRMS mean I finally have a real-time view of my entire field force across five cities.",
      author: "Rajesh K.",
      role: "Operations Head",
      icon: <Compass className="w-5 h-5 text-[#066054]" />
    },
    {
      id: "t3",
      companyName: "Urban Realty Experts",
      quote: "Security and audit trails are critical for our bank audits. ValuXpert provides the enterprise-grade compliance we need to stay empanelled.",
      author: "Sneha M.",
      role: "Technical Head",
      icon: <ShieldCheck className="w-5 h-5 text-[#066054]" />
    }
  ];

  return (
    <section className="py-20 bg-[#f8f9fa] border-b border-[#c3c6cf]/20" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-[#001732] tracking-tight">
            Trusted by Leading Bank Vendors
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-500 leading-relaxed">
            See how ValuXpert is transforming operations for empanelled valuation partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: "easeOut" }}
              className="bg-white p-8 rounded-2xl border border-[#c3c6cf]/30 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-all group duration-300"
            >
              {/* Quote Mark background accent */}
              <div className="absolute top-6 right-8 text-gray-100 opacity-60 pointer-events-none group-hover:text-green-50/70 transition-colors">
                <Quote className="w-10 h-10 transform scale-x-[-1]" />
              </div>

              <div className="space-y-6">
                {/* Header branding */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#066054]/10 flex items-center justify-center shrink-0">
                    {testimonial.icon}
                  </div>
                  <h4 className="font-sans font-bold text-base text-[#001732]">
                    {testimonial.companyName}
                  </h4>
                </div>

                {/* Testimonial Quote body */}
                <p className="font-sans text-sm md:text-base text-gray-600 leading-relaxed italic relative z-10">
                  - {testimonial.quote} -
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 mt-6 border-t border-gray-100">
                <div className="font-sans font-bold text-sm text-[#001732]">
                  {testimonial.author}
                </div>
                <div className="font-sans text-xs text-gray-400 mt-0.5">
                  {testimonial.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
