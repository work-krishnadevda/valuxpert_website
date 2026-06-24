/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import PositioningSection from './components/PositioningSection';
import RoleTable from './components/RoleTable';
import WorkflowStepper from './components/WorkflowStepper';
import TimelineComparisonSection from './components/TimelineComparisonSection';
import FeatureEcosystem from './components/FeatureEcosystem';
import HrmsSection from './components/HrmsSection';
import FieldEngineeringSection from './components/FieldEngineeringSection';
import PricingSection from './components/PricingSection';
import StatsBanner from './components/StatsBanner';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import { Mail, Landmark, MessageSquare } from 'lucide-react';

export default function App() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [prefilledFeature, setPrefilledFeature] = useState<string | undefined>(undefined);

  const handleOpenDemo = (feature?: string) => {
    setPrefilledFeature(feature);
    setIsDemoOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex flex-col font-sans selection:bg-[#fcaa33] selection:text-[#001732] antialiased">
      {/* Dynamic Frosted Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* Modern Immersive Hero */}
        <Hero onOpenDemo={handleOpenDemo} />

        {/* Same Firm. Two Different Days Timeline Comparison */}
        <TimelineComparisonSection />

        {/* 4-Card Problem Grid & Warning Banner */}
        <ProblemSection />

        {/* Positioning Checkmarks & Quadrants Grid */}
        <PositioningSection />

        {/* Interactive Workspace Emulator & Role Structure */}
        <RoleTable />

        {/* Dynamic Curved Stepper Valuation Lifecycle */}
        <WorkflowStepper />

        {/* Ecosystem Multi-Grid Modules */}
        <FeatureEcosystem onOpenDemo={handleOpenDemo} />

        {/* HR Operations Grid (Muster, Time, Leave) */}
        <HrmsSection onOpenDemo={handleOpenDemo} />

        {/* Engineered for the Field Section */}
        <FieldEngineeringSection />

        {/* Scalable Business & Team Pricing Modules */}
        <PricingSection onOpenDemo={handleOpenDemo} />

        {/* High-Contrast Corporate Performance Metrics */}
        <StatsBanner />

        {/* Brand Testimonials Showcase Section */}
        <TestimonialsSection />

        {/* High-Fidelity & Fully Responsive Get in Touch Contact Panel */}
        <ContactSection onOpenDemo={handleOpenDemo} />
      </main>

      {/* Comprehensive Sitemap Footer */}
      <Footer />

      {/* Multi-Step Enterprise Lead Ingestion Module */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        initialFeature={prefilledFeature}
      />
    </div>
  );
}
