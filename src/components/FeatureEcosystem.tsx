/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, MapPin, Users, Landmark, FileText, Building, ArrowUpRight } from 'lucide-react';
import { ECO_SYSTEM_FEATURES } from '../data';

interface FeatureEcosystemProps {
  onOpenDemo: (feature?: string) => void;
}

export default function FeatureEcosystem({ onOpenDemo }: FeatureEcosystemProps) {
  const getIcon = (iconName: string) => {
    const cls = "w-6 h-6 text-[#066054]";
    switch (iconName) {
      case "BarChart3":
        return <BarChart3 className={cls} />;
      case "MapPin":
        return <MapPin className={cls} />;
      case "Users":
        return <Users className={cls} />;
      case "Landmark":
        return <Landmark className={cls} />;
      case "ShieldAlert":
        return <FileText className={cls} />;
      case "Building":
        return <Building className={cls} />;
      default:
        return <BarChart3 className={cls} />;
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa]" id="features">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <h2 className="font-sans text-2xl md:text-3xl font-extrabold text-[#066054] tracking-tight mb-12">
          Feature Ecosystem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ECO_SYSTEM_FEATURES.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: idx * 0.05 }}
              onClick={() => onOpenDemo(feature.title)}
              className="bg-white p-6 rounded-xl border border-[#c3c6cf]/35 hover:-translate-y-1 hover:border-[#066054] hover:shadow-lg transition-all duration-300 cursor-pointer relative group"
            >
              <div className="w-12 h-12 rounded-lg bg-[#066054]/10 text-[#066054] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#066054]/20">
                {getIcon(feature.icon)}
              </div>
              
              <h4 className="font-sans text-base font-bold text-[#066054] mb-2 tracking-tight flex items-center gap-1.5">
                {feature.title}
                <ArrowUpRight className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 group-hover:text-[#066054] transition-all" />
              </h4>
              
              <p className="font-sans text-xs sm:text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="absolute bottom-4 right-4 text-[10px] font-mono text-[#066054] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Demo Workspace →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
