/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Percent, Milestone, Eye, ShieldAlert } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      metric: "40%",
      label: "Faster TAT",
      desc: "Average reduction in case completion time across our network.",
      icon: <Percent className="w-5 h-5 text-[#fcaa33]/80 mb-2 mx-auto" />
    },
    {
      metric: "100%",
      label: "Field Quality",
      desc: "Hardware GPS-validated location and tamperproof photo logs.",
      icon: <Milestone className="w-5 h-5 text-[#fcaa33]/80 mb-2 mx-auto" />
    },
    {
      metric: 'Real-Time',
      label: "Instant Visibility",
      desc: "Real-time pipeline status transparency for client banks.",
      icon: <Eye className="w-5 h-5 text-[#fcaa33]/80 mb-2 mx-auto" />
    },
    {
      metric: "Zero",
      label: "Data Silos",
      desc: "Single secure ledger of record from HR to on-premise appraisals.",
      icon: <ShieldAlert className="w-5 h-5 text-[#fcaa33]/80 mb-2 mx-auto" />
    }
  ];

  return (
    <section className="py-16 md:py-20 text-white bg-gradient-to-br from-[#044c42] to-[#066054]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="text-center space-y-2 group"
            >
              {stat.icon}
              <div className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#fcaa33] drop-shadow-sm font-sans tracking-tight group-hover:scale-105 transition-transform duration-300">
                {stat.metric}
              </div>
              <div className="font-sans font-bold text-sm text-white/95">
                {stat.label}
              </div>
              <p className="font-sans text-xs text-white/70 max-w-xs mx-auto leading-relaxed">
                {stat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
