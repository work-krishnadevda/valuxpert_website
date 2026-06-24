/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { IdCard, Timer, CalendarOff, Receipt, Users2 } from 'lucide-react';

interface HrmsSectionProps {
  onOpenDemo: (feature?: string) => void;
}

export default function HrmsSection({ onOpenDemo }: HrmsSectionProps) {
  const hrmsList = [
    {
      title: "Staff Management",
      desc: "Assign surveyor teams to geographical wards based on real-time case density filters.",
      icon: <Users2 className="w-6 h-6 text-[#066054]" />
    },
    {
      title: "Attendance System",
      desc: "Dynamic GPS coordinate and facial validation matches active surveyors' login times directly.",
      icon: <Timer className="w-6 h-6 text-[#066054]" />
    },
    {
      title: "Leave Management",
      desc: "Instant request nodes automatically warn coordinators of delayed TAT pipeline vulnerabilities before approval.",
      icon: <CalendarOff className="w-6 h-6 text-[#066054]" />
    },
    {
      title: "Payroll & Muster",
      desc: "Generate monthly legal compliance slips integrating automatically with GPS travel mile ledger.",
      icon: <Receipt className="w-6 h-6 text-[#066054]" />
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white" id="hrms">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="max-w-xl mb-12">
          <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#066054] tracking-tight mb-2">
            Unified HR Operations
          </h2>
          <p className="font-sans text-sm sm:text-base text-gray-500 leading-relaxed">
            Valuation isn't just about property; it's about people. Manage your distributed workforce, geofence check-ins, and mileage payroll with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hrmsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onOpenDemo("Employee Attendance & HR Roster Roll")}
              className="bg-[#f8f9fa] p-6 rounded-xl border border-[#c3c6cf]/25 flex flex-col items-center text-center hover:shadow-md hover:border-[#066054]/30 transition-all cursor-pointer group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#066054]/10 text-[#066054] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {item.icon}
              </div>
              <h4 className="font-sans font-bold text-sm sm:text-base text-[#066054] mb-2 tracking-tight">
                {item.title}
              </h4>
              <p className="font-sans text-xs text-gray-500 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
