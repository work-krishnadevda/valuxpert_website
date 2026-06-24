/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldAlert } from 'lucide-react';

export default function PositioningSection() {
  const points = [
    "One-click Case Creation & Allocation",
    "Guided Field Visit & Smart Data Capture",
    "Automated Drafting, Checking & Approval",
    "Integrated HRMS & Muster Roll Management",
    "Bank-Specific Calculation Engine"
  ];

  const segments = [
    { title: "Valuation Agencies", desc: "For government or private certified individual appraiser bureaus." },
    { title: "Due Diligence Firms", desc: "For comprehensive title checks, legal clearances, and asset vetting teams." },
    { title: "Bank/NBFC Vendors", desc: "For empaneled property technical surveyors reporting directly to banks." },
    { title: "Multi-City Teams", desc: "For large firms operating state-level geofenced and distributed structures." }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Copy & Benefits */}
        <div className="lg:col-span-6 space-y-6">
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#066054] tracking-tight leading-tight">
            Built for Every Stage of the Asset Lifecycle
          </h2>
          <p className="text-gray-600 font-sans text-sm md:text-base leading-relaxed">
            Stop relying on loosely connected spreadsheets and legacy message chains. ValuXpert combines compliance, field logistics, local database intelligence, and financial ledgers.
          </p>
          <ul className="space-y-3.5">
            {points.map((point, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3 font-sans text-sm sm:text-base font-semibold text-[#001732]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#fcaa33] shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Side: Quadrant segments */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {segments.map((seg, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#f8f9fa] p-6 rounded-xl border border-[#c3c6cf]/30 hover:border-[#066054]/50 hover:shadow-md transition-all duration-300"
            >
              <h4 className="font-sans font-bold text-base text-[#066054] tracking-tight mb-1.5">
                {seg.title}
              </h4>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                {seg.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
