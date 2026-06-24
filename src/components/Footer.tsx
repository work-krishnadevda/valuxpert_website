/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Landmark, Globe, Mail, Info } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [infoMessage, setInfoMessage] = useState<string | null>(null);

  useEffect(() => {
    if (infoMessage) {
      const timer = setTimeout(() => setInfoMessage(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [infoMessage]);

  const handleLinkClick = (e: React.MouseEvent, msg: string) => {
    e.preventDefault();
    setInfoMessage(msg);
  };

  return (
    <footer className="w-full py-12 md:py-20 px-4 md:px-12 bg-[#044c42] text-white relative">
      {infoMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#fcaa33] text-[#001732] px-5 py-3 rounded-xl shadow-2xl border border-white/20 font-sans text-xs font-bold flex items-center gap-2 max-w-sm animate-bounce">
          <Info className="w-4 h-4 shrink-0" />
          <span>{infoMessage}</span>
        </div>
      )}

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        {/* Col 1: Brand details */}
        <div className="space-y-4">
          <div className="text-xl md:text-2xl font-black text-white flex items-center gap-2">
            <Landmark className="w-6 h-6 text-[#fcaa33]" />
            <span>ValuXpert</span>
          </div>
          <p className="text-xs sm:text-sm text-white/70 max-w-xs leading-relaxed font-sans">
            Empowering valuation professionals with industrial-grade, secure tools. Built by industry veterans.
          </p>
        </div>

        {/* Col 2: Solutions */}
        <div className="space-y-4">
          <h5 className="font-sans font-bold text-sm text-[#fcaa33] uppercase tracking-wider">
            Solutions
          </h5>
          <ul className="space-y-2.5 text-xs sm:text-sm text-white/75 font-sans">
            <li><a href="#features" className="hover:underline hover:text-white transition-colors">Valuation Workflow</a></li>
            <li><a href="#workflow" className="hover:underline hover:text-white transition-colors">Field Management</a></li>
            <li><a href="#hrms" className="hover:underline hover:text-white transition-colors">Enterprise HRMS</a></li>
            <li><a href="#features" className="hover:underline hover:text-white transition-colors">MIS Reporting & BI</a></li>
          </ul>
        </div>

        {/* Col 3: Company info */}
        <div className="space-y-4">
          <h5 className="font-sans font-bold text-sm text-[#fcaa33] uppercase tracking-wider">
            Company
          </h5>
          <ul className="space-y-2.5 text-xs sm:text-sm text-white/75 font-sans">
            <li><a href="#" onClick={(e) => handleLinkClick(e, "ValuXpert is built on premium cloud-secure standards.")} className="hover:underline hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" onClick={(e) => handleLinkClick(e, "For fast professional support, email: support@valuxpert.com")} className="hover:underline hover:text-white transition-colors">Support Portal</a></li>
            <li><a href="#" onClick={(e) => handleLinkClick(e, "We use simple local secure cookies to optimize application layout.")} className="hover:underline hover:text-white transition-colors">Cookie Policy</a></li>
            <li><a href="#" onClick={(e) => handleLinkClick(e, "Our Service level agreements guarantee 99.9% API uptime.")} className="hover:underline hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Col 4: Contact details */}
        <div className="space-y-4 font-sans">
          <h5 className="font-sans font-bold text-sm text-[#fcaa33] uppercase tracking-wider">
            Connect
          </h5>
          <p className="text-xs sm:text-sm text-white/75">
            Support: <a href="mailto:support@valuxpert.com" className="hover:underline text-white font-medium">support@valuxpert.com</a>
          </p>
          <div className="flex gap-4 pt-1 text-white/70">
            <a href="#" aria-label="Website" className="hover:text-white transition-colors">
              <Globe className="w-5 h-5" />
            </a>
            <a href="mailto:support@valuxpert.com" aria-label="Email" className="hover:text-white transition-colors">
              <Mail className="w-5 h-5" />
            </a>
            <a href="#" aria-label="Info" className="hover:text-white transition-colors">
              <Info className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-xs text-white/60 font-sans gap-4 text-center sm:text-left">
        <p>© {currentYear} ValuXpert Enterprise Systems. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" onClick={(e) => handleLinkClick(e, "Your data is secured in single-tenant Firestore silos.")} className="hover:text-white transition-all">Privacy Policy</a>
          <a href="#" onClick={(e) => handleLinkClick(e, "Standard secure contracts apply to our bank API endpoints.")} className="hover:text-white transition-all">SLA Terms</a>
        </div>
      </div>
    </footer>
  );
}
