/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RefreshCw, 
  Clock, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  Send, 
  Calendar,
  Briefcase, 
  ShieldCheck, 
  Users, 
  MapPin, 
  LineChart, 
  PhoneCall, 
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
  XCircle,
  TrendingDown,
  Search
} from 'lucide-react';

interface TimelineStep {
  time: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface RoleWorkflow {
  id: string;
  tabLabel: string;
  description: string;
  headline: string;
  badge: string;
  beforeSla: string;
  afterSla: string;
  beforeType: string;
  afterType: string;
  beforeSteps: TimelineStep[];
  afterSteps: TimelineStep[];
}

export default function TimelineComparisonSection() {
  const [activeTab, setActiveTab] = useState<string>('overall');
  const [tableSearch, setTableSearch] = useState<string>('');

  const workflows: Record<string, RoleWorkflow> = {
    overall: {
      id: "overall",
      tabLabel: "Overall Operation",
      badge: "Full Enterprise View",
      description: "How case capture, field surveys, document tracking, analysis, and report distribution compare.",
      headline: "Same firm. Two entirely different days for your company.",
      beforeSla: "14 DAYS",
      beforeType: "MANUAL & FRAGMENTED",
      afterSla: "4 DAYS",
      afterType: "FULLY AUTOMATED",
      beforeSteps: [
        {
          time: "09:00",
          title: "Bank email arrives",
          desc: "Case details manually transcribed from PDFs to scattered local Excel sheets.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "10:30",
          title: "Manual registration",
          desc: "Coordinator checks locations on personal maps and updates manual notebooks.",
          icon: <Calendar className="w-4 h-4" />
        },
        {
          time: "12:00",
          title: "WhatsApp dispatch",
          desc: "Allocating case coordinates via copy-pasted details to field surveyor chats.",
          icon: <Send className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "Photos missing",
          desc: "Unclear photos logged, mixed up, or captured at incorrect geolocations.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "DAY 3",
          title: "Manual drafts typed",
          desc: "Technical writer types registry details and valuation parameters by hand.",
          icon: <Clock className="w-4 h-4" />
        },
        {
          time: "DAY 5",
          title: "Client status calls",
          desc: "Bankers issue persistent email escalations trying to trace delayed pipeline statuses.",
          icon: <PhoneCall className="w-4 h-4" />
        },
        {
          time: "DAY 14",
          title: "Delayed delivery",
          desc: "Final offline report delivered. SLA heavily breached with high operational costs.",
          icon: <AlertTriangle className="w-4 h-4" />
        }
      ],
      afterSteps: [
        {
          time: "09:00",
          title: "COO Case Creation",
          desc: "Case detail files come via bank email or API straight to the COO. COO reviews and creates the case file instantly in the system.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "10:30",
          title: "FE GPS Field Visit",
          desc: "Case routes directly to the Field Engineer (FE) mobile app, where geofenced physical site visits and watermark captures occur offline.",
          icon: <MapPin className="w-4 h-4" />
        },
        {
          time: "12:00",
          title: "SDM File Allocation",
          desc: "Senior Drafting Manager (SDM) audits on-field GPS data and distributes the file to the active regional Draft Maker (DM).",
          icon: <Users className="w-4 h-4" />
        },
        {
          time: "13:30",
          title: "DM Draft Compilation",
          desc: "The assigned Draft Maker (DM) computes build area math and creates the preliminary structured appraisal draft.",
          icon: <RefreshCw className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "RC QA & Report Build",
          desc: "Passed to the Report Checker (RC), who performs double-blind calculations audits and builds the final formatted report.",
          icon: <ShieldCheck className="w-4 h-4" />
        },
        {
          time: "16:30",
          title: "LCTO Legal Verification",
          desc: "The Local Chief Technical Officer (LCTO) reviews details and seals the case cryptographically to verify regulatory compliance.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "17:30",
          title: "Submit to Partner Bank",
          desc: "The certified high-reliability report dossier is submitted securely and transmitted instantly to the partner Bank portal.",
          icon: <Send className="w-4 h-4 text-[#fcaa33]" />
        }
      ]
    },
    case: {
      id: "case",
      tabLabel: "Case Management",
      badge: "Section 2 Workflows",
      description: "Moving from manual registers, verbal checking, and unlinked phone details into unified system routing.",
      headline: "Case processing made structured, fast, and digitally organized.",
      beforeSla: "Manual Entries",
      beforeType: "CHASING CHATS",
      afterSla: "SLA Tracker",
      afterType: "REAL-TIME ALIGNMENT",
      beforeSteps: [
        {
          time: "09:00",
          title: "Scattered receipt",
          desc: "Details received via chaotic WhatsApp briefs, bank PDF mails, or personal phone logs.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "11:00",
          title: "Registry copy-paste",
          desc: "Details typed manually into shared Excel registers (prone to duplicate entry).",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "12:30",
          title: "FE allocation logic",
          desc: "Sifting through paper logs to determine which FE covers the target district.",
          icon: <Clock className="w-4 h-4" />
        },
        {
          time: "14:30",
          title: "Missing parameters",
          desc: "Field Executive reports partial customer contact numbers or missing location guides.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "DAY 2",
          title: "Coordination grid",
          desc: "Repeatedly calling bankers and surveyors to align data mismatch questions.",
          icon: <PhoneCall className="w-4 h-4" />
        },
        {
          time: "DAY 5+",
          title: "Manual status tracing",
          desc: "Chasing status manually over phone calls whenever senior executives query delays.",
          icon: <Clock className="w-4 h-4" />
        }
      ],
      afterSteps: [
        {
          time: "09:00",
          title: "Direct system import",
          desc: "Inputs parsed, validated, and created instantly within the digital database.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "09:10",
          title: "Standard format log",
          desc: "ValuXpert enforces structured, clean dossiers, eliminating risk of data corruption.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "09:15",
          title: "Role-wise dispatch",
          desc: "Case auto-routed directly to the appropriate surveyor, reviewer, LCTO, or DM.",
          icon: <Briefcase className="w-4 h-4" />
        },
        {
          time: "11:00",
          title: "Scoped action tabs",
          desc: "Each assignee logins to see only their specific task dashboard and priority queues.",
          icon: <Layers className="w-4 h-4" />
        },
        {
          time: "14:00",
          title: "Asset linking",
          desc: "Site photos, document logs, signatures, and updates remain locked to the case thread.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "DAY 2",
          title: "Instant client view",
          desc: "Query statuses resolve instantly as the portal updates case states automatically.",
          icon: <LineChart className="w-4 h-4" />
        }
      ]
    },
    fe: {
      id: "fe",
      tabLabel: "Field Executive",
      badge: "Section 3 Surveyor App",
      description: "How surveyors escape confusing directions, mix-ups, and repetitive calls through structured on-field tools.",
      headline: "Geofenced, secure location reporting directly from the field.",
      beforeSla: "8 HOURS + REVISITS",
      beforeType: "DIARY & WHATSAPP",
      afterSla: "3 HOURS DONE",
      afterType: "GEOFENCED INSTANT SYNC",
      beforeSteps: [
        {
          time: "09:00",
          title: "Paper list check",
          desc: "Receives client lists printed on paper or forwarded on cluttered WhatsApp grids.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "10:00",
          title: "Manual phone saving",
          desc: "Surveyor manually saves customer numbers, names, and address targets onto personal notes.",
          icon: <Clock className="w-4 h-4" />
        },
        {
          time: "11:15",
          title: "Lost on location",
          desc: "FE drives around trying to hunt coordinate markers, calling client multiple times.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "13:30",
          title: "Personal camera capture",
          desc: "Property photos snapped on mobile and manually shared on WhatsApp groups.",
          icon: <Send className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "Messy measurements",
          desc: "Measurements tracked on sheets of notebooks, occasionally typed onto chat logs.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "DAY 2",
          title: "Resurvey requested",
          desc: "Office reports blurred images or wrong coordinate verification, forcing another trip.",
          icon: <AlertTriangle className="w-4 h-4" />
        }
      ],
      afterSteps: [
        {
          time: "09:05",
          title: "Mobile App access",
          desc: "Surveyor opens ValuXpert mobile view, seeing active routes on maps.",
          icon: <MapPin className="w-4 h-4" />
        },
        {
          time: "09:10",
          title: "Rich GPS data locks",
          desc: "One click brings up exact coordinates, property type, bank rules, and owner details.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "11:30",
          title: "In-App status updates",
          desc: "App registers active site visits, logging GPS watermarks in real time.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "12:30",
          title: "Secure data lock",
          desc: "On-site photos, metrics, and parameters logged with watermarks, preventing fraud.",
          icon: <UploadIcon className="w-4 h-4" />
        },
        {
          time: "14:00",
          title: "Zero confirmation calls",
          desc: "The office automatically checks images and notes directly in the client database.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "Fault auto-correction",
          desc: "Any gaps are flagged instantly while the FE is on site, avoiding revisits.",
          icon: <Sparkles className="w-4 h-4" />
        }
      ]
    },
    dm: {
      id: "dm",
      tabLabel: "District Manager",
      badge: "Section 4 Performance",
      description: "Moving from calling up multiple districts and team leads to real-time, proactive SLA and workload management.",
      headline: "Operational supervision shifts to proactive dashboard oversight.",
      beforeSla: "REACTIVE FIREFIGHTING",
      beforeType: "EXCEL SHEET HUNT",
      afterSla: "PROACTIVE HEALTH TRACK",
      afterType: "LIVE VISIBILITY",
      beforeSteps: [
        {
          time: "09:00",
          title: "Morning call roll",
          desc: "Calls multiple coordinators and surveyors to ask verbally about case progress.",
          icon: <PhoneCall className="w-4 h-4" />
        },
        {
          time: "11:00",
          title: "District audit tracking",
          desc: "Scrolling countless shared spreadsheets to check which cases are exceeding targets.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "13:00",
          title: "SLA delays hide out",
          desc: "Regional surveyors are struggling, but bottleneck files remain hidden without trace.",
          icon: <Clock className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "Reactive callbacks",
          desc: "Issues are only flagged after bank relationship partners escalate delays.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "DAY 2+",
          title: "Excel report compilation",
          desc: "DM spends afternoon copying logs into corporate presentations manually.",
          icon: <FileText className="w-4 h-4" />
        }
      ],
      afterSteps: [
        {
          time: "09:00",
          title: "SLA health check",
          desc: "DM views regional dashboard, tracking metrics over overall active files.",
          icon: <LineChart className="w-4 h-4" />
        },
        {
          time: "10:00",
          title: "Dynamic filtering",
          desc: "Sees instantly sorted tabs for pending, completed, delayed, and active routes.",
          icon: <Layers className="w-4 h-4" />
        },
        {
          time: "11:00",
          title: "Active surveyor tracking",
          desc: "Reviews task distribution per surveyor, allocating cases based on current workload.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "13:00",
          title: "Bottleneck alerting",
          desc: "System flags slow-moving cases, allowing DM to proactively assign extra help.",
          icon: <Sparkles className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "Automated daily logs",
          desc: "Management report generated instantly with certified accuracy metrics.",
          icon: <CheckCircle2 className="w-4 h-4" />
        }
      ]
    },
    rc: {
      id: "rc",
      tabLabel: "Relationship Coordinator",
      badge: "Section 5 Liaison",
      description: "How client communications improve by replacing multi-party phone calls and scattered folders with unified case logs.",
      headline: "Centralized tracking builds trust and delivers rapid client updates.",
      beforeSla: "30+ CALL DETOURS",
      beforeType: "FRAGMENTED MESSAGES",
      afterSla: "ONE-CLICK ANSWERS",
      afterType: "CENTRALIZED LOG DISPLAY",
      beforeSteps: [
        {
          time: "09:00",
          title: "Incoming client fire",
          desc: "Coordinating manually between banks, builders, case team, and surveyor group.",
          icon: <PhoneCall className="w-4 h-4" />
        },
        {
          time: "10:30",
          title: "Diary checking loop",
          desc: "Follow-up statuses and specific directions recorded manually across separate sheets.",
          icon: <Calendar className="w-4 h-4" />
        },
        {
          time: "12:00",
          title: "Search chat archives",
          desc: "Forced to scrub through long WhatsApp history to check why a report remains pending.",
          icon: <Send className="w-4 h-4" />
        },
        {
          time: "14:00",
          title: "Repeat call cycles",
          desc: "Calls three separate colleagues repeatedly just to answer a simple customer question.",
          icon: <PhoneCall className="w-4 h-4" />
        },
        {
          time: "DAY 3",
          title: "Stale update reports",
          desc: "Delivering delayed status updates to bankers because notes are outdated.",
          icon: <AlertTriangle className="w-4 h-4" />
        }
      ],
      afterSteps: [
        {
          time: "09:00",
          title: "One-click trace",
          desc: "RC types case details into search, finding immediate progress tracking metrics.",
          icon: <Search className="w-4 h-4" />
        },
        {
          time: "10:00",
          title: "Outstanding logs tab",
          desc: "Sees exact requirements missing (e.g. registry sheet draft, signature check).",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "11:30",
          title: "Rapid phone dispatch",
          desc: "Updates customer with confident, accurate metrics, earning stellar ratings.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "13:00",
          title: "Interactive notes lock",
          desc: "Comments, callbacks, and queries updated instantly to prevent team duplication.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "DAY 2",
          title: "Deep relationship focus",
          desc: "RC focuses on client growth or new firm onboarding instead of endless update chasing.",
          icon: <Sparkles className="w-4 h-4" />
        }
      ]
    },
    lcto: {
      id: "lcto",
      tabLabel: "LCTO Desk",
      badge: "Section 6 Auditing",
      description: "How the legal and technical compliance team ensures document validity and accurate reviews under secure trackers.",
      headline: "Error risks vanish when compliance steps are fully visible.",
      beforeSla: "MANUAL ROUTING DELAY",
      beforeType: "OUTDATED FILE CHECKS",
      afterSla: "IMMEDIATE REVIEWS",
      afterType: "VERSION LOCKING & INLINE TAGS",
      beforeSteps: [
        {
          time: "09:00",
          title: "Document inbox hunt",
          desc: "Legal files scattered across email attachments or shared chat groups.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "11:00",
          title: "Paper registry tracking",
          desc: "Keeps a separate, physical list of which files have missing regulatory deeds.",
          icon: <Calendar className="w-4 h-4" />
        },
        {
          time: "13:00",
          title: "Manual review queries",
          desc: "Notes down technical remarks offline or calls FE verbally to discuss land borders.",
          icon: <PhoneCall className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "Outdated version work",
          desc: "LCTO works on stale report draft because of lack of digital version control.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "DAY 3",
          title: "Stalled drafting",
          desc: "Final document generation is delayed as critical deeds sit in unread folders.",
          icon: <Clock className="w-4 h-4" />
        }
      ],
      afterSteps: [
        {
          time: "09:00",
          title: "Unified paperless log",
          desc: "All legal files, registry deeds, and customer declarations grouped on the case.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "10:00",
          title: "SLA outstanding tab",
          desc: "Instantly filters cases that are currently pending compliance or registry verification.",
          icon: <Layers className="w-4 h-4" />
        },
        {
          time: "11:30",
          title: "Inline technical tags",
          desc: "LCTO links technical observations and markers directly within the case record.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "13:00",
          title: "Automatic version lock",
          desc: "System locks document access, ensuring everyone reads the latest active revision.",
          icon: <ShieldCheck className="w-4 h-4" />
        },
        {
          time: "DAY 2",
          title: "One-click approval",
          desc: "Approved check files auto-route next to draft-generation desk, accelerating workflow.",
          icon: <Sparkles className="w-4 h-4" />
        }
      ]
    },
    hrms: {
      id: "hrms",
      tabLabel: "HRMS & Accounting",
      badge: "Section 7-8 Finance & HR",
      description: "Managing geofenced check-ins, automated mileage logs, and case-wise client invoice creation.",
      headline: "Connect on-field actions to automated payroll and instant billing.",
      beforeSla: "15 DAYS RECONCILIATION",
      beforeType: "LOOSE BILLS & REGISTERS",
      afterSla: "REAL-TIME SLIPS",
      afterType: "INTEGRATED FINANCIAL DASHBOARD",
      beforeSteps: [
        {
          time: "09:00",
          title: "Register attendance",
          desc: "Present/absent status logged on paper notebooks, emails, or biometric card dumps.",
          icon: <Calendar className="w-4 h-4" />
        },
        {
          time: "11:00",
          title: "WhatsApp leave claims",
          desc: "Team files leave requests verbally or via WhatsApp. HR struggles to trace balances.",
          icon: <AlertTriangle className="w-4 h-4" />
        },
        {
          time: "13:00",
          title: "Manual billing check",
          desc: "Accountant manually logs bank collection records from Excel lists.",
          icon: <FileText className="w-4 h-4" />
        },
        {
          time: "15:00",
          title: "Mismatched tracking",
          desc: "Attempts to calculate fuel mileage by comparing travel text pings.",
          icon: <Clock className="w-4 h-4" />
        },
        {
          time: "DAY 15",
          title: "Manual reconciliations",
          desc: "Prone to accounting errors and slow report compilation for monthly performance.",
          icon: <AlertTriangle className="w-4 h-4" />
        }
      ],
      afterSteps: [
        {
          time: "09:00",
          title: "Digital geolocated clock",
          desc: "Surveyor app captures active check-ins on-site, logging coordinate tags automatically.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "10:00",
          title: "Auto-synced leave ledger",
          desc: "HR Dashboard approves or holds leaves instantly, calculating live payroll metrics.",
          icon: <Users className="w-4 h-4" />
        },
        {
          time: "11:30",
          title: "Auto-invoicing",
          desc: "System links cases with billing codes, generating bank bills dynamically upon approval.",
          icon: <CheckCircle2 className="w-4 h-4" />
        },
        {
          time: "14:00",
          title: "Geotagged mileage track",
          desc: "ValuXpert maps travel tracks, calculating field expenses to prevent billing fraud.",
          icon: <MapPin className="w-4 h-4" />
        },
        {
          time: "DAY 2",
          title: "Interactive MIS charts",
          desc: "Management reviews live charts on regional revenues, branch expenses, and margins.",
          icon: <LineChart className="w-4 h-4" />
        }
      ]
    }
  };

  // Section 10 Table Data
  const comparisonRows = [
    { area: "Case Entry", before: "Manual entry in Excel/register", after: "Digital case creation", cat: "Operations" },
    { area: "Case Assignment", before: "WhatsApp/call based", after: "System-based assignment", cat: "Operations" },
    { area: "Case Status", before: "Manual follow-up", after: "Real-time tracking", cat: "Operations" },
    { area: "FE Site Updates", before: "Photos and messages on WhatsApp", after: "Case-wise upload and update", cat: "Field Work" },
    { area: "DM Monitoring", before: "Calls and manual reports", after: "Dashboard and live tracking", cat: "Management" },
    { area: "RC Coordination", before: "Scattered follow-ups", after: "Centralized case visibility", cat: "Liaison" },
    { area: "LCTO Legal Work", before: "Manual document tracking", after: "Case-wise structured tracking", cat: "Compliance" },
    { area: "HRMS & Roster", before: "Register/Excel/WhatsApp", after: "Digital attendance, leave, employee data", cat: "HR & Team" },
    { area: "Payroll Support", before: "Manual calculation", after: "HRMS data supported", cat: "HR & Team" },
    { area: "Accounting & Fees", before: "Excel and manual records", after: "Structured finance visibility", cat: "Finance" },
    { area: "Client Reports", before: "Manually prepared and typed", after: "Faster system-generated reporting", cat: "Operations" },
    { area: "Management Control", before: "Dependent on verbal team updates", after: "Live dashboard and analytics", cat: "Management" },
    { area: "Transparency", before: "Extremely low, parameters hidden", after: "Guaranteed high visibility", cat: "Quality" },
    { area: "Processing Speed", before: "Slow turn-around times (14+ Days)", after: "Fast automated turnaround (4 Days)", cat: "Quality" },
    { area: "Error SLA Risk", before: "High margin of human error", after: "Minimised and controlled", cat: "Quality" }
  ];

  const currentWorkflow = workflows[activeTab] || workflows.overall;

  // Filter comparison rows based on search input
  const filteredRows = comparisonRows.filter(row => 
    row.area.toLowerCase().includes(tableSearch.toLowerCase()) ||
    row.before.toLowerCase().includes(tableSearch.toLowerCase()) ||
    row.after.toLowerCase().includes(tableSearch.toLowerCase()) ||
    row.cat.toLowerCase().includes(tableSearch.toLowerCase())
  );

  return (
    <section className="py-24 md:py-32 bg-[#f8f9fa] border-b border-[#c3c6cf]/20" id="day-in-life">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-16">
        
        {/* Upper Tagline/Header Category Label */}
        <div className="space-y-4 mb-16 text-left">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-black tracking-[0.25em] text-[#03493e] uppercase block font-sans">
              A Day in the Life
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#fcaa33]" />
            <span className="text-xs font-mono font-bold text-gray-500">SLA Audit Breakdown</span>
          </div>
          
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold tracking-tight text-[#001732] leading-tight">
            Same firm. <span className="text-[#03493e]/70 font-black">Two different days.</span>
          </h2>
          
          <p className="text-gray-500 text-sm md:text-base font-sans leading-relaxed max-w-3xl">
            Valuation operations have been slow and manual for years. Click the tabs below to explore how upgrading to <span className="font-bold text-[#03493e]">ValuXpert</span> completely transforms a day in the life of every professional on your team.
          </p>
        </div>

        {/* 1. HORIZONTAL INTERACTIVE TABS LIST */}
        <div className="mb-12 border-b border-gray-200">
          <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide -mx-6 px-6 lg:mx-0 lg:px-0">
            {Object.values(workflows).map((flow) => {
              const isActive = activeTab === flow.id;
              return (
                <button
                  key={flow.id}
                  onClick={() => setActiveTab(flow.id)}
                  className={`px-5 py-4 font-sans text-xs sm:text-sm font-bold tracking-tight whitespace-nowrap border-b-2 transition-all transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive 
                      ? 'border-[#03493e] text-[#03493e] bg-[#03493e]/5 rounded-t-xl' 
                      : 'border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-100/50 rounded-t-xl'
                  }`}
                  id={`tab-trigger-${flow.id}`}
                >
                  <div className="flex items-center gap-2">
                    {flow.id === 'overall' && <Layers className="w-3.5 h-3.5" />}
                    {flow.id === 'case' && <Briefcase className="w-3.5 h-3.5" />}
                    {flow.id === 'fe' && <MapPin className="w-3.5 h-3.5" />}
                    {flow.id === 'dm' && <LineChart className="w-3.5 h-3.5" />}
                    {flow.id === 'rc' && <PhoneCall className="w-3.5 h-3.5" />}
                    {flow.id === 'lcto' && <ShieldCheck className="w-3.5 h-3.5" />}
                    {flow.id === 'hrms' && <Users className="w-3.5 h-3.5" />}
                    <span>{flow.tabLabel}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. TIMELINE GRAPHICS WORKFLOW DESK */}
        <div className="bg-white rounded-[32px] p-6 sm:p-10 md:p-12 border border-[#c3c6cf]/30 shadow-sm mb-16 relative overflow-hidden">
          
          {/* Subtle branding elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#03493e]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#fcaa33]/5 rounded-full blur-3xl pointer-events-none" />

          {/* Tab Information Header */}
          <div className="relative z-10 mb-12 sm:mb-14 pb-8 border-b border-gray-100 flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div className="space-y-1.5 text-left">
              <div className="flex items-center gap-2.5">
                <span className="px-3 py-1 bg-[#03493e]/10 text-[#03493e] text-[10px] sm:text-xs font-black tracking-widest uppercase rounded-full">
                  {currentWorkflow.badge}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-semibold text-gray-400">
                  <Sparkles className="w-3 h-3 text-[#fcaa33]" />
                  Dynamic Simulation
                </span>
              </div>
              <h3 className="font-sans text-xl md:text-2xl font-extrabold text-[#001732] tracking-tight">
                {currentWorkflow.headline}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 leading-relaxed max-w-3xl">
                {currentWorkflow.description}
              </p>
            </div>
          </div>

          <div className="space-y-16 lg:space-y-24 relative z-10">
            
            {/* =======================================================
                TIMELINE: BEFORE (Red / Manual Chaos)
               ======================================================= */}
            <div className="relative">
              {/* Header / Meta Line for BEFORE */}
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-red-100/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-sans font-bold text-xs sm:text-sm tracking-widest text-[#001732] uppercase">
                    BEFORE VALUXPERT
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 bg-red-100 text-red-800 rounded-md font-bold">
                    SLA Delay
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-gray-400 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <span className="text-red-500 font-extrabold flex items-center gap-1">
                    <TrendingDown className="w-3.5 h-3.5" />
                    {currentWorkflow.beforeSla}
                  </span>
                  <span className="text-gray-300">•</span>
                  <span className="text-red-600 font-bold text-[10px] bg-red-50 px-1.5 py-0.5 rounded border border-red-100 uppercase">
                    {currentWorkflow.beforeType}
                  </span>
                </div>
              </div>

              {/* Desktop Horizontal Line Structure */}
              <div className="hidden lg:block relative py-8">
                {/* Horizontal Connector Line in Background */}
                <div className="absolute top-[76px] left-8 right-8 h-1 bg-gradient-to-r from-red-100 via-red-200 to-red-100" />

                <div className={`grid ${currentWorkflow.beforeSteps.length === 5 ? 'lg:grid-cols-5' : currentWorkflow.beforeSteps.length === 6 ? 'lg:grid-cols-6' : 'lg:grid-cols-7'} gap-4 relative z-10`}>
                  {currentWorkflow.beforeSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Time Stamp label */}
                      <span className="font-mono text-xs font-bold text-red-500 mb-3 bg-red-50 px-2.5 py-1 rounded-md border border-red-100/50">
                        {step.time}
                      </span>

                      {/* Timeline Node Bullet */}
                      <div className="w-7 h-7 rounded-full bg-white border-[3px] border-red-400 group-hover:border-red-600 shadow-md flex items-center justify-center transition-all group-hover:scale-110 z-10 relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400 group-hover:bg-red-600 transition-colors" />
                      </div>

                      {/* Strikethrough Action text matches PDF manual checks concept */}
                      <div className="mt-4 px-2 relative text-center w-full">
                        <h4 className="font-sans font-bold text-[13px] text-gray-500 line-through decoration-red-400/80 decoration-[2.5px] leading-tight group-hover:text-gray-700 transition-colors">
                          {step.title}
                        </h4>
                        <p className="font-sans text-[11px] text-gray-400 mt-2 leading-relaxed max-w-[155px] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none absolute left-1/2 -translate-x-1/2 top-full bg-[#001732] text-white p-2.5 rounded-lg shadow-xl z-20 w-44 border border-white/15">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Vertical Timeline Stack */}
              <div className="lg:hidden pl-4 border-l-2 border-red-100 space-y-5 py-2">
                {currentWorkflow.beforeSteps.map((step, idx) => (
                  <div key={idx} className="relative flex gap-4 items-start group">
                    <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-2 border-red-400 shadow-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                    </div>
                    
                    <div className="flex-1 space-y-1 bg-red-50/20 p-3.5 rounded-xl border border-red-100/50 text-left">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
                          {step.time}
                        </span>
                      </div>
                      <h4 className="font-sans font-bold text-sm text-gray-500 line-through decoration-red-300 decoration-2">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs text-gray-500 leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* =======================================================
                TIMELINE: AFTER (Blue/Green / Automated Speed)
               ======================================================= */}
            <div className="relative">
              {/* Header / Meta Line for AFTER */}
              <div className="flex justify-between items-center mb-6 pb-2 border-b border-emerald-100">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                  <span className="font-sans font-bold text-xs sm:text-sm tracking-widest text-[#001732] uppercase">
                    AFTER WITH VALUXPERT
                  </span>
                  <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded-md font-bold">
                    SLA Perfected
                  </span>
                </div>
                <div className="font-mono text-[10px] sm:text-xs text-[#03493e] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <span className="font-black text-[#03493e] flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {currentWorkflow.afterSla}
                  </span>
                  <span className="text-emerald-300">•</span>
                  <span className="font-bold underline uppercase bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100">
                    {currentWorkflow.afterType}
                  </span>
                </div>
              </div>

              {/* Desktop Horizontal Line Structure */}
              <div className="hidden lg:block relative py-8">
                {/* Horizontal Connector Line in Background */}
                <div className="absolute top-[76px] left-8 right-8 h-1 bg-gradient-to-r from-emerald-100 via-emerald-200 to-emerald-100" />

                <div className={`grid ${currentWorkflow.afterSteps.length === 5 ? 'lg:grid-cols-5' : currentWorkflow.afterSteps.length === 6 ? 'lg:grid-cols-6' : 'lg:grid-cols-7'} gap-4 relative z-10`}>
                  {currentWorkflow.afterSteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex flex-col items-center text-center group"
                    >
                      {/* Time Stamp label */}
                      <span className="font-mono text-xs font-bold text-[#03493e] mb-3 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-100/50">
                        {step.time}
                      </span>

                      {/* Timeline Node Bullet - Glowing Green */}
                      <div className="w-7 h-7 rounded-full bg-white border-[3px] border-[#03493e] group-hover:border-[#02352d] shadow-md flex items-center justify-center transition-all group-hover:scale-110 z-10 relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#03493e] group-hover:bg-[#02352d] transition-colors animate-pulse" />
                      </div>

                      {/* Clean readable automated labels */}
                      <div className="mt-4 px-2 text-center w-full">
                        <h4 className="font-sans font-bold text-[13px] text-[#001732] leading-tight group-hover:text-[#03493e] transition-colors">
                          {step.title}
                        </h4>
                        <p className="font-sans text-[11px] text-gray-500 mt-1 leading-relaxed max-w-[155px] mx-auto">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Vertical Timeline Stack */}
              <div className="lg:hidden pl-4 border-l-2 border-emerald-200 space-y-5 py-2">
                {currentWorkflow.afterSteps.map((step, idx) => (
                  <div key={idx} className="relative flex gap-4 items-start group">
                    <div className="absolute -left-[25px] top-1 w-4 h-4 rounded-full bg-white border-2 border-emerald-500 shadow-sm flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                    </div>
                    
                    <div className="flex-1 space-y-1 bg-emerald-50/10 p-3.5 rounded-xl border border-emerald-100/50 text-left">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          {step.time}
                        </span>
                      </div>
                      <h4 className="font-sans font-bold text-sm text-[#001732]">
                        {step.title}
                      </h4>
                      <p className="font-sans text-xs text-gray-600 leading-normal">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>

        {/* =======================================================
            SPECIAL: GROUND-LEVEL WORKFLOW BLUEPRINT ROUTING (SOP)
           ======================================================= */}
        <div className="bg-gradient-to-br from-[#001732] to-[#012246] rounded-[32px] p-6 sm:p-10 border border-white/10 shadow-xl mb-16 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#fcaa33]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-[#066054]/15 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:items-center justify-between border-b border-white/10 pb-6 mb-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#fcaa33] bg-[#fcaa33]/15 px-3 py-1 rounded-full uppercase font-sans">
                Real-World Ground Operations Map
              </span>
              <h3 className="font-sans text-2xl md:text-3.5xl font-extrabold text-white tracking-tight">
                Operational Pipeline Blueprint (SOP)
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                See exactly how your ground workflow translates directly into ValuXpert's digital compliance routing steps.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 px-4 py-3 rounded-2xl max-w-md shrink-0">
              <span className="text-[10px] font-mono font-bold text-[#fcaa33]/80 uppercase block mb-1">Ground Narrative Captured:</span>
              <p className="text-white font-sans italic text-xs leading-relaxed font-medium">
                "Pehele case email through COO ke pass jata hai, COO case create krti hai. Then FE ke pass jata hai vahan se site visit hoti hai. Then SDM DM ko case allot karta hai. Phir DM draft create karta hai, RC physical metrics se report banata hai, then LCTO verification verify check karta hai, and final submission bank ko ho jati hai."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4 relative z-10">
            {/* Step 1: COO Intake */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#fcaa33] font-bold block mb-2">01 • COO INTAKE</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-indigo-500/10 text-indigo-300 rounded border border-indigo-500/15 inline-block mb-3">Admin / COO</span>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight mb-1">Email case creation</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">Assesses bank PDFs, verifies files, and creates formal systemic dossier.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-indigo-400">
                <span>"Case arrives, created"</span>
              </div>
            </div>

            {/* Step 2: FE Field Survey */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#fcaa33] font-bold block mb-2">02 • FIELD VISIT</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-amber-500/10 text-amber-300 rounded border border-amber-500/15 inline-block mb-3">Field Engineer</span>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight mb-1">Live physical survey</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">Launches geofenced check-ins & watermarks site photos instantly.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-amber-400">
                <span>"Vahan se field visit"</span>
              </div>
            </div>

            {/* Step 3: SDM Routing */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#fcaa33] font-bold block mb-2">03 • FILE ALLOCATION</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-pink-500/10 text-pink-300 rounded border border-pink-500/15 inline-block mb-3">Draft Lead / SDM</span>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight mb-1">SLA distribution</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">Senior Draft Maker (SDM) checks field data and assigns DM.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-pink-400">
                <span>"SDM DM ko allot"</span>
              </div>
            </div>

            {/* Step 4: DM Drafting */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#fcaa33] font-bold block mb-2">04 • DM COMPILATION</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-500/15 inline-block mb-3">Draft Maker</span>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight mb-1">Draft & calculations</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">Computes area dimensions & matches guidelines land prices.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-blue-400">
                <span>"DM draft create"</span>
              </div>
            </div>

            {/* Step 5: RC Documentation */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#fcaa33] font-bold block mb-2">05 • REPORT QC</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-teal-500/10 text-teal-300 rounded border border-teal-500/15 inline-block mb-3">Report Checker / RC</span>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight mb-1">Report generation</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">RC compiles data, validates compliance guidelines & runs QA.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-teal-400">
                <span>"RC report banata"</span>
              </div>
            </div>

            {/* Step 6: LCTO Sign-off */}
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#fcaa33] font-bold block mb-2">06 • LCTO INSPECT</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/15 inline-block mb-3">Technical Officer / LCTO</span>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight mb-1">Compliance review</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">LCTO verifies legal values and locks dossier cryptographically.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-[#066054]/30 flex items-center justify-between text-[10px] font-mono text-emerald-400">
                <span>"LCTO verify karta"</span>
              </div>
            </div>

            {/* Step 7: Bank Submission */}
            <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#fcaa33] font-bold block mb-2">07 • BANK SYNC</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 bg-[#fcaa33]/20 text-[#fcaa33] rounded border border-[#fcaa33]/30 inline-block mb-3">Partner Bank</span>
                <p className="text-white font-bold text-xs sm:text-sm tracking-tight mb-1">Secured API handshake</p>
                <p className="text-gray-400 text-[11px] leading-relaxed">Pushes sealed dossier directly to bank portals for credit decisions.</p>
              </div>
              <div className="mt-4 pt-3 border-t border-emerald-500/20 flex items-center justify-between text-[10px] font-mono text-[#fcaa33] font-bold">
                <span>"Submit to bank"</span>
              </div>
            </div>
          </div>
        </div>

        {/* =======================================================
            3. SECTION 10: BEFORE vs AFTER COMPARISON TABLE CARD
           ======================================================= */}
        <div className="space-y-6 text-left relative z-10" id="comparison-table">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#c3c6cf]/20 pb-6 mb-8">
            <div className="space-y-2">
              <span className="text-[10px] font-black tracking-[0.2em] text-[#03493e] bg-[#03493e]/5 px-3 py-1 rounded-full uppercase font-sans">
                Summary Ledger
              </span>
              <h3 className="font-sans text-2xl md:text-3.5xl font-extrabold text-[#001732] tracking-tight">
                Before vs After Comparison Table
              </h3>
              <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-xl">
                Direct side-by-side transition proof compiled from actual valuations firm transition metrics. Filter or search parameters instantly.
              </p>
            </div>
            
            {/* Search filter Input bar matching design specs */}
            <div className="relative w-full md:w-80 shrink-0">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search areas or keywords..."
                value={tableSearch}
                onChange={(e) => setTableSearch(e.target.value)}
                className="w-full bg-white pl-10 pr-4 py-2.5 text-xs text-[#001732] border border-[#c3c6cf]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#03493e]/10 focus:border-[#03493e] font-medium transition-all shadow-sm placeholder-gray-400"
              />
            </div>
          </div>

          {/* Fully Responsive Comparison Ledger Grid */}
          <div className="bg-white rounded-[24px] border border-[#c3c6cf]/30 shadow-sm overflow-hidden overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="bg-[#f8f9fa] border-b border-[#c3c6cf]/30">
                  <th className="py-4 px-6 text-xs font-black tracking-wider text-[#03493e] uppercase font-sans w-1/4">
                    Area of Inspection
                  </th>
                  <th className="py-4 px-6 text-xs font-black tracking-wider text-red-700 bg-red-50/30 uppercase font-sans w-3/8 border-r border-[#c3c6cf]/20">
                    Before ValuXpert
                  </th>
                  <th className="py-4 px-6 text-xs font-black tracking-wider text-emerald-800 bg-emerald-50/20 uppercase font-sans w-3/8">
                    After ValuXpert
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c3c6cf]/20 text-xs sm:text-sm">
                <AnimatePresence mode="popLayout">
                  {filteredRows.length > 0 ? (
                    filteredRows.map((row, idx) => (
                      <motion.tr 
                        key={row.area}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="hover:bg-gray-50/60 transition-colors"
                      >
                        <td className="py-4 px-6 font-bold text-[#001732]">
                          <div className="flex flex-col">
                            <span className="font-sans font-extrabold text-[#001732] text-sm">{row.area}</span>
                            <span className="text-[10px] text-gray-400 font-mono font-medium tracking-wider lowercase bg-gray-100 self-start px-2 py-0.5 rounded mt-1.5">
                              {row.cat}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-gray-500 font-sans border-r border-[#c3c6cf]/20 bg-red-50/[0.05]">
                          <div className="flex items-start gap-2.5">
                            <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                            <span className="font-sans text-gray-500 font-medium leading-relaxed">
                              {row.before}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-[#03493e] font-sans bg-emerald-50/[0.05]">
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="font-sans font-bold text-[#03493e] leading-relaxed">
                              {row.after}
                            </span>
                          </div>
                        </td>
                      </motion.tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={3} className="py-12 text-center font-sans text-gray-400 font-medium">
                        No row items matched your search query. Try another keyword.
                      </td>
                    </tr>
                  )}
                </AnimatePresence>
              </tbody>
            </table>
          </div>
        </div>

        {/* Floating Call-to-Action panel exactly matching brand cues */}
        <div className="mt-20 p-8 sm:p-10 bg-[#03493e]/5 rounded-[32px] border border-[#03493e]/10 flex flex-col md:flex-row justify-between items-center gap-6 text-left relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#03493e]/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h4 className="font-sans font-extrabold text-lg sm:text-xl text-[#001732] tracking-tight">
              Ready to recover leakages and secure operational compliance?
            </h4>
            <p className="font-sans text-xs sm:text-sm text-gray-500 max-w-3xl leading-relaxed">
              Every day spent logging diaries manually, matching JPEG images, and copy-pasting excel coordinates risks major SLA breaches. Secure your bank partnerships with a fully unified workflow.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-6 py-4.5 bg-[#03493e] hover:bg-[#02352d] text-white text-xs font-black tracking-widest uppercase rounded-xl shadow-md transition-all whitespace-nowrap z-10 hover:scale-105 cursor-pointer flex items-center gap-2"
          >
            <span>Request Demo Presentation</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

// Custom Minimalist Icons resolved locally for perfect compile safety
function UploadIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M12 18v-6" />
      <path d="m9 15 3-3 3 3" />
    </svg>
  );
}
