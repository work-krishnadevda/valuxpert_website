/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Database, MapPinOff, EyeOff, UserMinus, Flame } from 'lucide-react';
import { PROBLEM_CARDS } from '../data';

export default function ProblemSection() {
  // Mapping titles to icons
  const getIcon = (title: string) => {
    switch (title) {
      case "Scattered Case Data":
        return <Database className="w-6 h-6 text-[#066054]" />;
      case "Inconsistent Field Visits":
        return <MapPinOff className="w-6 h-6 text-[#066054]" />;
      case "No Real-Time Visibility":
        return <EyeOff className="w-6 h-6 text-[#066054]" />;
      case "Disconnected HR & Muster":
        return <UserMinus className="w-6 h-6 text-[#066054]" />;
      default:
        return <Database className="w-6 h-6 text-[#066054]" />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] border-b border-[#c3c6cf]/20">
      <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
        <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#066054] tracking-tight mb-12">
          Why Valuation Companies Choose ValuXpert
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEM_CARDS.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.08 }}
              className="bg-white p-6 rounded-xl border border-[#c3c6cf]/30 text-left hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-[#066054]/10 text-[#066054] flex items-center justify-center mb-4 font-semibold">
                {getIcon(card.title)}
              </div>
              <h3 className="font-sans text-lg font-bold mb-2 text-[#066054] tracking-tight">
                {card.title}
              </h3>
              <p className="font-sans text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Floating warning ribbon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-[#044c42] to-[#066054] text-white py-4 px-6 rounded-xl font-sans text-sm font-semibold inline-flex items-center gap-2.5 shadow-lg max-w-2xl border border-white/10"
        >
          <Flame className="w-4 h-4 text-[#fcaa33] shrink-0 animate-pulse" />
          <span>
            Operational leakage costs valuation companies time, money, and client trust every single day.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
