/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

interface PricingSectionProps {
  onOpenDemo: (tierName?: string) => void;
}

export default function PricingSection({ onOpenDemo }: PricingSectionProps) {
  const plans = [
    {
      id: "starter",
      name: "Starter",
      description: "Perfect for boutique agencies",
      highlight: "Custom",
      features: [
        "Up to 50 Cases/mo",
        "5 Field User Accounts",
        "Standard MIS Reports"
      ],
      buttonText: "Choose Starter",
      isPopular: false
    },
    {
      id: "professional",
      name: "Professional",
      description: "For growing valuation firms",
      highlight: "Quote",
      features: [
        "Unlimited Cases",
        "Full HRMS Integration",
        "GPS Live Tracking",
        "Advanced Bank Formats"
      ],
      buttonText: "Choose Professional",
      isPopular: true
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "Multi-city & Multi-company",
      highlight: "Volume",
      features: [
        "Multi-City Setup",
        "Custom API Access",
        "Dedicated Success Manager"
      ],
      buttonText: "Contact Sales",
      isPopular: false
    }
  ];

  return (
    <section className="py-24 bg-[#f8f9fa] border-b border-[#c3c6cf]/20" id="pricing">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-[#03493e] tracking-tight">
            Scale Your Business, Not Your Costs
          </h2>
          <p className="font-sans text-sm md:text-base text-gray-500 font-medium leading-relaxed">
            Simple, transparent pricing for teams of all sizes.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch pt-6 max-w-6xl mx-auto">
          {plans.map((plan, idx) => {
            const delay = idx * 0.1;
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay, ease: "easeOut" }}
                className={`relative bg-white rounded-[32px] p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'border-2 border-[#03493e] shadow-xl md:scale-[1.03] z-10'
                    : 'border border-[#c3c6cf]/30 shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Ribbon/Badge */}
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#03493e] text-white text-[11px] font-extrabold uppercase tracking-widest px-5 py-2 rounded-full shadow-md z-20">
                    Most Popular
                  </div>
                )}

                {/* Plan Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-sans text-xl font-bold text-[#03493e]">
                      {plan.name}
                    </h3>
                    <p className="font-sans text-xs text-gray-400 font-semibold mt-1">
                      {plan.description}
                    </p>
                  </div>

                  {/* Pricing Big Stylized Display Word */}
                  <div className="py-2">
                    <span className="font-sans text-4xl sm:text-5xl font-extrabold tracking-tight text-[#03493e]">
                      {plan.highlight}
                    </span>
                  </div>

                  {/* Checklist */}
                  <ul className="space-y-4 pt-2">
                    {plan.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full flex items-center justify-center bg-emerald-50 shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-[#03493e] stroke-[3]" />
                        </div>
                        <span className="font-sans text-sm text-gray-600 font-semibold">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Plan Cta Button */}
                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onOpenDemo(`${plan.name} Tier`)}
                    className={`w-full py-3.5 rounded-xl font-sans font-extrabold text-sm tracking-wide transition-all duration-200 cursor-pointer text-center ${
                      plan.isPopular
                        ? 'bg-[#03493e] hover:bg-[#02352d] text-white shadow-md hover:shadow-lg active:scale-[0.98]'
                        : 'border border-[#03493e] text-[#03493e] hover:bg-[#03493e]/5 active:scale-[0.98]'
                    }`}
                  >
                    {plan.buttonText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
