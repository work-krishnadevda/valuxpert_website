/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FolderPlus, MapPin, Edit3, ClipboardCheck, Send, ChevronDown, Check } from 'lucide-react';
import { WORKFLOW_STAGES } from '../data';

export default function WorkflowStepper() {
  const [activeStep, setActiveStep] = useState<string>("05");

  const getIcon = (iconName: string, isActive: boolean) => {
    const cls = `w-8 h-8 transition-colors ${isActive ? 'text-[#001732]' : 'text-white'}`;
    switch (iconName) {
      case "FolderPlus":
        return <FolderPlus className={cls} />;
      case "MapPin":
        return <MapPin className={cls} />;
      case "Edit3":
        return <Edit3 className={cls} />;
      case "CheckSquare":
        return <ClipboardCheck className={cls} />;
      case "CheckCircle":
        return <Send className={cls} />;
      default:
        return <FolderPlus className={cls} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden" id="workflow">
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative">
        <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#066054] tracking-tight text-center mb-4">
          Optimized Valuation Lifecycle
        </h2>
        <p className="font-sans text-sm text-gray-500 text-center max-w-xl mx-auto mb-16">
          Click on any segment in the flowchart flowchart below to understand how information streams securely from channel to channel.
        </p>

        {/* Timeline connector (hidden on mobile, absolute line on desktop) */}
        <div className="hidden lg:block absolute top-[148px] left-12 right-12 h-1 bg-gray-100 z-0" />

        {/* Stepper Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start relative z-10">
          {WORKFLOW_STAGES.map((stage) => {
            const isActive = activeStep === stage.id;
            const isHighlight = stage.id === "05"; // Replicates the orange styled '05' in original mockup
            return (
              <div
                key={stage.id}
                onClick={() => setActiveStep(stage.id)}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                {/* Outlined badge circle */}
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 shadow-lg hover:-translate-y-1.5 transition-all duration-300 ${
                    isActive
                      ? isHighlight
                        ? 'bg-[#fcaa33] ring-4 ring-[#fcaa33]/30 scale-105'
                        : 'bg-[#066054] ring-4 ring-[#066054]/30 scale-105'
                      : 'bg-[#001732] hover:bg-[#066054] text-white'
                  }`}
                >
                  {getIcon(stage.icon, isActive || (isHighlight && isActive))}
                </div>

                {/* Step Subtitle Info */}
                <h4 className={`font-sans font-bold text-sm tracking-tight transition-colors ${
                  isActive ? 'text-[#066054]' : 'text-gray-700'
                }`}>
                  {stage.title}
                </h4>
                <p className="font-sans text-xs text-gray-500 mt-1 leading-relaxed max-w-[150px]">
                  {stage.subtitle}
                </p>

                {/* Quick Arrow for active mobile feedback */}
                {isActive && (
                  <motion.div layoutId="arrow" className="mt-2 text-[#066054]">
                    <ChevronDown className="w-4 h-4 animate-bounce" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Description Box below timeline */}
        <div className="mt-12 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {WORKFLOW_STAGES.map((stage) => {
              if (stage.id !== activeStep) return null;
              return (
                <motion.div
                  key={stage.id}
                  initial={{ opacity: 0, scale: 0.98, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98, y: -10 }}
                  className="bg-[#f8f9fa] border border-[#c3c6cf]/40 p-6 md:p-8 rounded-2xl shadow-inner relative flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#066054]/10 text-[#066054] font-black font-sans flex items-center justify-center shrink-0">
                    {stage.id}
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-sans font-bold text-base md:text-lg text-[#001732]">
                      {stage.title} Automated Gateway Details
                    </h5>
                    <p className="font-sans text-sm text-gray-600 leading-relaxed">
                      {stage.description}
                    </p>
                    <div className="flex flex-wrap gap-4 pt-3 text-[11px] font-mono font-bold text-[#066054]">
                      <span className="flex items-center gap-1">✓ Automatic SLA calculation</span>
                      <span className="flex items-center gap-1">✓ Digital Cryptographic Audit Log</span>
                      <span className="flex items-center gap-1">✓ Secured Bank API Gateway Secure</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
