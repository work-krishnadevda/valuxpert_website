/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  Check,
  Lock,
  ChevronRight,
  TrendingUp,
  Camera,
  Activity,
  Award,
  Users,
  Database,
  Send,
  RefreshCw,
  Layers,
  Cpu,
  Building,
  Eye,
  FileText,
  CheckCircle2,
  MapPin,
  HelpCircle,
  FileCheck2,
  History,
  LockKeyhole,
  CheckSquare,
  Network,
  GitCommit,
  Sparkles,
  Coins
} from 'lucide-react';
import { INITIAL_CASES, INITIAL_STAFF } from '../data';
import { ValuationCase, StaffMember } from '../types';

export default function RoleTable() {
  const [selectedRole, setSelectedRole] = useState<string>('Admin');
  
  // Real-time reactive states for our workspace emulator
  const [cases, setCases] = useState<ValuationCase[]>(INITIAL_CASES);
  const [staff, setStaff] = useState<StaffMember[]>(INITIAL_STAFF);

  // States for Admin role
  const [adminLogs, setAdminLogs] = useState<string[]>([
    '🔒 Connection secure. Initializing isolation container security protocols...',
    '🛡️ Active Tenant DB schemas verified: 4 partner banks isolated.'
  ]);
  const [adminRotated, setAdminRotated] = useState(false);

  // States for COO Role
  const [cooBank, setCooBank] = useState<string>('Axis Bank');
  const [cooProperty, setCooProperty] = useState<string>('Lodha World Crest Apartment');
  const [cooLocation, setCooLocation] = useState<string>('Senapati Bapat Marg, Lower Parel');
  const [cooLogs, setCooLogs] = useState<string[]>([
    'System standby. Awaiting incoming bank transmission...',
    'Integrations secured with partner banks via HTTPS.'
  ]);
  const [cooSuccess, setCooSuccess] = useState(false);

  // States for Field Engineer role
  const [engineerCheckedIn, setEngineerCheckedIn] = useState(false);
  const [photoUploaded, setPhotoUploaded] = useState(false);

  // States for Draft Manager role
  const [builtUpArea, setBuiltUpArea] = useState<number>(2400);
  const [landRate, setLandRate] = useState<number>(31000);
  const [depreciation, setDepreciation] = useState<number>(10);
  const [draftGenerated, setDraftGenerated] = useState(false);

  // States for Report Checker role
  const [checkerValidated, setCheckerValidated] = useState<Record<string, boolean>>({
    mathVerify: false,
    gpsVerify: false,
    documentVerify: false,
  });
  const [checkerStatus, setCheckerStatus] = useState<'pending' | 'verified'>('pending');

  // States for LCTO role
  const [lctoLogs, setLctoLogs] = useState<string[]>([
    '📡 GNSS audit stream connected. Listening for survey coordinate logs...',
    '🗺️ Ready for municipal offset compliance checks.'
  ]);
  const [lctoAudited, setLctoAudited] = useState(false);

  // States for Approval Authority approval check
  const [lctoApproved, setLctoApproved] = useState<Record<string, boolean>>({
    'VX-2026-104': false,
  });
  const [showSeals, setShowSeals] = useState(false);

  // States for Bank Partner role
  const [apiLogs, setApiLogs] = useState<string[]>([]);
  const [apiStatus, setApiStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const roles = [
    {
      id: 'Admin',
      title: 'Admin',
      resp: 'System configuration, multi-tenant database isolation, security policies, and workspace control.',
      access: 'Super Admin Portal',
      color: 'bg-slate-50 border-slate-200 text-slate-700'
    },
    {
      id: 'COO',
      title: 'COO',
      resp: 'Case Ingestion, Bank PDF OCR processing, regional assignment, and CRM dispatch routing.',
      access: 'Operations Control Tower',
      color: 'bg-indigo-50 border-indigo-200 text-indigo-700'
    },
    {
      id: 'Field Engineer',
      title: 'Field Engineer',
      resp: 'On-site physical validation, geofenced GPS validation, and photo captures.',
      access: 'Mobile Action Module',
      color: 'bg-amber-50 border-amber-200 text-amber-700'
    },
    {
      id: 'Draft Manager',
      title: 'Draft Manager',
      resp: 'Computes guidelines rate, building dimension calculations & layout drafting.',
      access: 'Drafting Calculation Suite',
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    {
      id: 'Report Checker',
      title: 'Report Checker',
      resp: 'Double-blind math calculations QC, historical boundary checks & audits.',
      access: 'QA Validation Desk',
      color: 'bg-purple-50 border-purple-200 text-purple-700'
    },
    {
      id: 'LCTO',
      title: 'LCTO',
      resp: 'Performs local technical checks, audits on-field GPS metrics, and coordinates checking.',
      access: 'LCTO Audit Panel',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-700'
    },
    {
      id: 'Approval Authority',
      title: 'Approval Authority',
      resp: 'Seals final appraisal dossier, affixes cryptographically secured signature.',
      access: 'Cryptographic HSM Sign',
      color: 'bg-green-50 border-green-200 text-green-700'
    },
    {
      id: 'Bank Partner',
      title: 'Bank Partner',
      resp: 'Instant auto-submission API handshakes, bank portal syncing & loan indexing.',
      access: 'Secure Submissions Portal',
      color: 'bg-teal-50 border-teal-200 text-teal-700'
    },
    {
      id: 'HR & Accountant',
      title: 'HR & Accountant',
      resp: 'Staff attendance muster, GPS petrol mileage logs, travel claims & payroll.',
      access: 'HRMS Operations Ledger',
      color: 'bg-rose-50 border-rose-200 text-rose-700'
    }
  ];

  // Helper calculations for draft manager
  const calcaulatedRawVal = builtUpArea * landRate;
  const calculatedDepreciatedVal = Math.round(calcaulatedRawVal * (1 - depreciation / 100));

  const toggleAttendance = (staffId: string) => {
    setStaff(prev =>
      prev.map(s => {
        if (s.id === staffId) {
          const nextStatus = s.attendanceStatus === 'Present' ? 'Absent' : s.attendanceStatus === 'Absent' ? 'On Leave' : 'Present';
          return { ...s, attendanceStatus: nextStatus };
        }
        return s;
      })
    );
  };

  const executeAdminRotate = () => {
    setAdminLogs([
      '🔄 Initiating zero-trust cryptographic rotating process...',
      '🔑 Generating new ephemeral public/private HSM keypair...',
      '🐳 Applying AES-256 cipher encryption over DB tenant partition vectors...',
      '✅ Tenant database isolation tunnels successfully re-keyed!',
      '🔐 Master key rotated safely. Security compliance logs recorded on decentralized ledger.'
    ]);
    setAdminRotated(true);
  };

  const handleLctoApprove = (caseId: string) => {
    const nextApprovedState = !lctoApproved[caseId];
    setLctoApproved(prev => ({
      ...prev,
      [caseId]: nextApprovedState
    }));
    if (nextApprovedState) {
      setShowSeals(true);
    }

    setCases(prev => prev.map(c => {
      if (c.id === caseId) {
        return {
          ...c,
          status: nextApprovedState ? 'delivered' : 'qa_review',
          remarks: nextApprovedState ? 'Completed and Delivered to Banking credit API portal.' : 'Pending LCTO check-off.'
        };
      }
      return c;
    }));
  };

  const executeCooParse = () => {
    setCooLogs([
      '📥 Inbound email detected from axes_bms@bankops.in...',
      '🔍 Scanning PDF parameters with Optical Character Recognition (OCR)...',
      `📍 Extracted Subject: Axis Bank appraisal allocation for ${cooProperty}`,
      `📐 Extracted Address parameters: ${cooLocation}`,
      '⚡ Mapping local town planning micro-geohash indices...',
      '✅ Validation successful. New case file generated.',
      '📟 Dispatched real-time alert to live Field Engineer mobile terminal!'
    ]);
    setCooSuccess(true);

    const newCaseId = `VX-2026-${100 + cases.length + 1}`;
    const newCaseItem: ValuationCase = {
      id: newCaseId,
      propertyTitle: cooProperty,
      propertyAddress: `${cooLocation}, Mumbai`,
      clientBank: cooBank,
      assignedEngineer: 'Rajesh Kumar',
      status: 'allocated',
      marketValueEstimate: 58000000,
      latitude: 19.0028,
      longitude: 72.8281,
      riskScore: 'Low',
      remarks: 'Inbound email parsed by COO. Automatically scheduled and assigned to Rajesh Kumar.',
      createdAt: new Date().toISOString().split('T')[0],
      photos: []
    };

    setCases(prev => [newCaseItem, ...prev]);
  };

  const executeLctoAudit = () => {
    setLctoLogs([
      '🔍 Accessing Municipal Survey limits databases for Pune district...',
      '📍 Plotting surveyed coordinates (18.5590 N, 73.7797 E) on GIS offset layer...',
      '📏 Offset check: 4.2m setback matches municipal building codes.',
      '🤖 Blind LiDAR cross-check vs DM calculations: verified variance < 0.2%',
      '✅ LCTO compliance coordinates check passed. Final appraisal dossier approved for signing!'
    ]);
    setLctoAudited(true);
  };

  const executeBankSync = () => {
    setApiStatus('sending');
    setApiLogs([
      '⚡ Initializing mutual SSL/TLS handshake with Axis secure core server...',
      '🔐 Verifying HSM cryptographic seal signature with AES-256 validation key...',
      '📤 Sending payload: POST /v1/appraisal/dossier-submit',
      '   { case_uuid: "VX-2026-104", certified_value: 38000000 }',
      '⏳ Awaiting API response from bank main gateway...'
    ]);

    setTimeout(() => {
      setApiLogs(prev => [
        ...prev,
        '📥 Response Code 200: SUCCESS',
        '✅ Axis Bank server accepted asset report dossier!',
        '🔗 Assigned Bank Reference Token ID: AXIS-VAL-88219A'
      ]);
      setApiStatus('success');
    }, 1500);
  };

  const pipelineNodes = [
    { id: 'Admin', stepNum: 'SYS', role: 'Admin', title: 'Admin Controls', icon: LockKeyhole, highlight: 'border-slate-400 text-slate-400 bg-slate-950/40 text-left' },
    { id: 'COO', stepNum: '01', role: 'COO', title: 'Intake Ingestion', icon: Layers, highlight: 'border-indigo-400 text-indigo-400 bg-indigo-950/40 text-left' },
    { id: 'Field Engineer', stepNum: '02', role: 'Field Engineer', title: 'On-Field GPS Survey', icon: Smartphone, highlight: 'border-amber-400 text-amber-400 bg-amber-950/40 text-left' },
    { id: 'Draft Manager', stepNum: '03', role: 'Draft Manager', title: 'Calculations Draft', icon: Building, highlight: 'border-blue-400 text-blue-400 bg-blue-950/40 text-left' },
    { id: 'Report Checker', stepNum: '04', role: 'Report Checker', title: 'Checker QA Audit', icon: CheckSquare, highlight: 'border-purple-400 text-purple-400 bg-purple-950/40 text-left' },
    { id: 'LCTO', stepNum: '05', role: 'LCTO', title: 'LCTO Verification', icon: Eye, highlight: 'border-emerald-400 text-emerald-400 bg-emerald-950/40 text-left' },
    { id: 'Approval Authority', stepNum: '06', role: 'Approval Authority', title: 'HSM Cryptographic Sign', icon: CheckCircle2, highlight: 'border-green-400 text-green-400 bg-green-950/40 text-left' },
    { id: 'Bank Partner', stepNum: '07', role: 'Bank Partner', title: 'Bank Active Submission', icon: Send, highlight: 'border-teal-400 text-teal-400 bg-teal-950/40 text-left' },
    { id: 'HR & Accountant', stepNum: 'MUST', role: 'HR & Accountant', title: 'Claims & Muster', icon: Users, highlight: 'border-rose-400 text-rose-400 bg-rose-950/40 text-left' }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] border-b border-[#c3c6cf]/20" id="role-workspace">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-black tracking-widest uppercase text-[#066054] bg-[#066054]/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Real Operations Emulator
          </span>
          <h2 className="font-sans text-2xl md:text-3.5xl font-extrabold text-[#001732] tracking-tight">
            Precision Role-Based Infrastructure
          </h2>
          <p className="font-sans text-xs sm:text-sm text-gray-500 mt-3 leading-relaxed">
            ValuXpert enforces distinct, cryptographic authorization boundaries conforming to standard operating procedures. Click check-points or table rows to test real workspace duties.
          </p>
        </div>

        {/* Roles Table */}
        <div className="overflow-hidden rounded-2xl border border-[#066054]/20 shadow-md bg-white mb-10">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-[#001732] text-white">
                <tr>
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider font-sans text-white/90">Role Name</th>
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider font-sans text-white/90">Primary Responsibility</th>
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider font-sans text-white/90">Core Access Token</th>
                  <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider font-sans text-white/90 text-right">Interactive Emulation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#c3c6cf]/25">
                {roles.map((role) => {
                  const isSelected = selectedRole === role.id;
                  return (
                    <tr
                      key={role.id}
                      id={`row-${role.id.replace(/\s+/g, '-')}`}
                      onClick={() => setSelectedRole(role.id)}
                      className={`cursor-pointer transition-all duration-200 hover:bg-[#066054]/5 ${
                        isSelected ? 'bg-[#066054]/10 font-medium' : 'bg-white'
                      }`}
                    >
                      <td className="p-4 sm:p-5 text-sm font-bold text-[#066054] font-sans">
                        <div className="flex items-center gap-2.5">
                          <div className={`w-3 h-3 rounded-full shrink-0 transition-all ${isSelected ? 'bg-[#fcaa33] scale-125 ring-4 ring-[#fcaa33]/30' : 'bg-[#066054]/30'}`} />
                          <span>{role.title}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-5 text-xs sm:text-sm text-gray-600 font-sans leading-relaxed">{role.resp}</td>
                      <td className="p-4 sm:p-5">
                        <span className={`inline-block text-[11px] font-mono font-black uppercase px-2.5 py-1 rounded-full ${isSelected ? 'bg-[#001732] text-white' : 'bg-gray-100 text-gray-600'}`}>
                          {role.access}
                        </span>
                      </td>
                      <td className="p-4 sm:p-5 text-right">
                        <button
                          type="button"
                          id={`btn-${role.id.replace(/\s+/g, '-')}`}
                          className={`text-xs font-bold px-3.5 py-1.5 rounded-xl transition-all ${
                            isSelected 
                              ? 'bg-[#066054] text-white ring-2 ring-[#066054]/30' 
                              : 'bg-gray-100 text-[#001732] hover:bg-gray-200'
                          }`}
                        >
                          {isSelected ? 'Active Workspace' : 'Click to Test'}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Dynamic 3D Blueprint Map Element */}
        <div className="relative mb-6 rounded-2xl bg-[#001124] p-5 sm:p-7 border border-white/10 shadow-2xl overflow-hidden">
          {/* Subtle tech grid background pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:32px_32px] opacity-15 pointer-events-none" />
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#066054]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-80 h-80 bg-blue-900/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/5 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 bg-[#fcaa33]/10 rounded-lg">
                <Network className="w-5 h-5 text-[#fcaa33] animate-pulse" />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#fcaa33] font-black block">
                  Interactive Operational Pipeline Map
                </span>
                <span className="text-[9px] font-mono text-gray-400">
                  Standard Operating Procedure (SOP) Path
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-green-400 bg-green-500/10 px-2.5 py-1 rounded border border-green-500/20 flex items-center gap-1.5 font-bold">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" />
                Live Flow Highlighting
              </span>
            </div>
          </div>

          <p className="text-gray-300 text-xs leading-relaxed max-w-3xl mb-8 relative z-10">
            The flowchart represents the sequential compliance pipeline of ValuXpert. Data flows in a single secure trajectory from configuration to banking credit dispatch. Select any node below to test operations on the workspace.
          </p>

          {/* Connected Flowchart Layout with SVG arrows on Desktop & custom path highlight */}
          <div className="relative z-10 mb-2">
            {/* Horizontal Line Generator for Desktop view */}
            <div className="hidden lg:block absolute top-[44px] left-8 right-8 h-[2px] bg-white/5 pointer-events-none">
              <motion.div 
                className="h-full bg-gradient-to-r from-slate-500 via-[#fcaa33] to-rose-400"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5 }}
                style={{ originX: 0 }}
              />
            </div>

            {/* Nodes Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-9 gap-4 sm:gap-3 lg:gap-2 relative">
              {pipelineNodes.map((node, index) => {
                const isActive = selectedRole === node.id;
                const IconComponent = node.icon;
                
                // Determine step state
                const selectedIndex = pipelineNodes.findIndex(n => n.id === selectedRole);
                const isCompleted = index < selectedIndex;
                const isUpcoming = index > selectedIndex;

                let stateColor = "border-white/10 bg-white/5 text-gray-400";
                let badgeColor = "bg-white/10 text-white/80";
                if (isActive) {
                  stateColor = "border-[#fcaa33] bg-[#001e3d] text-white shadow-lg shadow-[#fcaa33]/10 ring-1 ring-[#fcaa33]/30 scale-[1.04]";
                  badgeColor = "bg-[#fcaa33] text-[#001732] font-black";
                } else if (isCompleted) {
                  stateColor = "border-green-500/40 bg-green-500/5 text-green-300";
                  badgeColor = "bg-green-500/20 text-green-300";
                }

                // Node specific responsibilities defined in tooltips for better user UX
                const nodeDescription = roles.find(r => r.id === node.id)?.resp || "";

                return (
                  <div key={node.id} className="relative group">
                    <div
                      onClick={() => setSelectedRole(node.id)}
                      className={`relative p-3.5 rounded-2xl border cursor-pointer transition-all duration-300 flex flex-col justify-between min-h-[142px] ${stateColor}`}
                    >
                      {/* Connector Line overlay for tablet */}
                      {index < pipelineNodes.length - 1 && (
                        <div className="hidden sm:block lg:hidden absolute -right-2 top-1/2 -translate-y-1/2 w-2 h-[2px] bg-white/10 z-0" />
                      )}

                      {/* Top Node Header */}
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-1">
                          <span className={`text-[8px] font-bold px-1.5 py-0.5 rounded font-mono ${badgeColor}`}>
                            {node.stepNum}
                          </span>
                        </div>
                        {isActive && (
                          <div className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400"></span>
                          </div>
                        )}
                        {isCompleted && !isActive && (
                          <Check className="w-3.5 h-3.5 text-green-400" />
                        )}
                      </div>

                      {/* Icon + Title */}
                      <div className="my-3 flex items-center gap-2">
                        <div className={`p-1.5 rounded-lg shrink-0 ${isActive ? 'bg-[#fcaa33]/15 text-[#fcaa33]' : isCompleted ? 'bg-green-500/15 text-green-400' : 'bg-white/5 text-white/50'}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <h4 className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight leading-tight group-hover:text-[#fcaa33] transition-colors">
                          {node.title}
                        </h4>
                      </div>

                      {/* Mini Caption */}
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[9px] text-gray-400 font-mono">
                        <span>{isActive ? 'ACTIVE WORK' : isCompleted ? 'PASSED ✓' : 'QUEUED'}</span>
                        <span className="text-[8px] opacity-40 group-hover:opacity-100 transition-opacity">SOP</span>
                      </div>
                    </div>

                    {/* Popover Tooltip for Responsibilities */}
                    <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-52 p-2.5 bg-[#001732] border border-white/15 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pointer-events-none">
                      <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[5px] border-[5px] border-transparent border-t-[#001732]" />
                      <p className="text-[9px] font-mono text-[#fcaa33] font-bold uppercase mb-1">{node.role} Role Duty</p>
                      <p className="text-[10px] text-white/80 leading-normal font-sans">{nodeDescription}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Workspace Emulator Frame */}
        <div id="emulator-box" className="bg-[#001732] rounded-3xl p-5 md:p-8 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#066054]/5 rounded-full blur-[120px] pointer-events-none" />

          {/* Device Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b border-white/10 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-[#fcaa33]" />
                <span className="text-xs font-mono font-bold uppercase text-[#fcaa33] tracking-widest">
                  ValuXpert Multi-Terminal Sandbox
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-black text-white mt-1">
                Active Desk: <span className="text-[#fcaa33]">{selectedRole}</span>
              </h3>
            </div>
            <span className="text-xs font-mono bg-white/10 text-white/70 px-3 py-1 rounded-full flex items-center gap-1.5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-[#fcaa33] animate-pulse" />
              LIVE CRYPTO TUNNEL SECURED (PORT 3000)
            </span>
          </div>

          <div className="min-h-[300px]">
            <AnimatePresence mode="wait">
              {selectedRole === 'Admin' && (
                <motion.div
                  key="admin"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Database Config Panel */}
                    <div className="lg:col-span-5 bg-black/40 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <LockKeyhole className="w-4 h-4 text-[#fcaa33]" />
                          <h4 className="text-xs font-mono uppercase text-white/80 font-bold">Multi-Tenant Partition Security</h4>
                        </div>

                        {/* Interactive database partition visual */}
                        <div className="relative h-28 bg-[#000814] border border-white/5 rounded-xl overflow-hidden flex items-center justify-center p-2">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#066054/10_0%,transparent_70%)] opacity-30" />
                          <svg className="w-full h-full" viewBox="0 0 200 100">
                            {/* Central secure core ring */}
                            <circle cx="100" cy="50" r="14" className="fill-slate-950 stroke-[#fcaa33] stroke-2" />
                            <motion.circle 
                              cx="100" cy="50" r="18" 
                              className="fill-transparent stroke-[#fcaa33]/30" 
                              strokeDasharray="4 2"
                              animate={{ rotate: 360 }}
                              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                            />
                            {/* Key icon path */}
                            <path d="M97,48 h6 v4 h-6 z M100,52 v4 h2 v1 h-2 v1 h-1 z" className="fill-[#fcaa33]" />

                            {/* Connected server partitions */}
                            {[
                              { x: 35, y: 25, label: "AXIS" },
                              { x: 35, y: 75, label: "HDFC" },
                              { x: 165, y: 25, label: "ICICI" },
                              { x: 165, y: 75, label: "SBI" }
                            ].map((node, nidx) => (
                              <g key={node.label}>
                                <line 
                                  x1="100" y1="50" x2={node.x} y2={node.y} 
                                  className={`stroke-2 transition-colors duration-500 ${adminRotated ? 'stroke-green-400' : 'stroke-white/10'}`} 
                                  strokeDasharray={adminRotated ? "3 3" : "0"}
                                />
                                {adminRotated && (
                                  <motion.circle 
                                    cx={node.x} cy={node.y} r="2.5" 
                                    className="fill-green-400"
                                    animate={{ x: [100, node.x], y: [50, node.y] }}
                                    transition={{ repeat: Infinity, duration: 1.5, delay: nidx * 0.3 }}
                                  />
                                )}
                                <rect x={node.x - 18} y={node.y - 10} width="36" height="20" rx="4" className="fill-[#001732] stroke-white/20" />
                                <text x={node.x} y={node.y + 3} className="fill-white font-mono font-black text-[7px]" textAnchor="middle">{node.label}</text>
                              </g>
                            ))}
                          </svg>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-2">
                            <div className="flex justify-between text-[11px]">
                              <span className="text-gray-400">Database Status:</span>
                              <span className="text-green-400 font-mono font-bold">HEALTHY (ONLINE)</span>
                            </div>
                            <div className="flex justify-between text-[11px]">
                              <span className="text-gray-400">Isolated Tenant Partitions:</span>
                              <span className="text-white font-mono font-bold">4 Bank Portals Active</span>
                            </div>
                            <div className="flex justify-between text-[11px]">
                              <span className="text-gray-400">Zero-Trust Ciphers:</span>
                              <span className="text-white font-mono font-bold">AES-256 Enabled</span>
                            </div>
                            <div className="flex justify-between text-[11px]">
                              <span className="text-gray-400">Active SQL Connection Pool:</span>
                              <span className="text-[#fcaa33] font-mono font-bold">42/50 Connections</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={executeAdminRotate}
                        className="w-full py-3 mt-6 bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] font-black font-sans rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        Rotate Ephemeral Security Keys
                      </button>
                    </div>

                    {/* Admin Terminal Logs Output */}
                    <div className="lg:col-span-7 bg-black/80 border border-white/15 p-4 rounded-2xl min-h-[250px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                          <span className="text-[10px] font-mono text-gray-400 font-bold">Super Admin Security Terminal</span>
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fcaa33] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fcaa33]"></span>
                          </span>
                        </div>
                        <div className="space-y-1.5 font-mono text-xs max-h-[190px] overflow-y-auto">
                          {adminLogs.map((log, index) => (
                            <p key={index} className={log.startsWith('✅') || log.startsWith('🔐') || log.startsWith('🛡️') ? 'text-green-400' : 'text-gray-300'}>
                              {log}
                            </p>
                          ))}
                        </div>
                      </div>

                      {adminRotated && (
                        <div className="mt-4 p-2.5 bg-[#fcaa33]/10 border border-[#fcaa33]/20 text-[#fcaa33] text-[10px] sm:text-xs rounded-lg text-center font-sans font-bold">
                          ✓ MASTER SECURITY ROTATION INITIATED: Ephemeral database credentials and isolation tunnels secure.
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedRole === 'COO' && (
                <motion.div
                  key="coo"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Parse Control Panel */}
                    <div className="lg:col-span-5 bg-black/40 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#fcaa33]" />
                          <h4 className="text-xs font-mono uppercase text-white/80 font-bold">Mail Ingestion OCR Config</h4>
                        </div>

                        {/* Interactive OCR Document Analyzer Diagram */}
                        <div className="relative h-28 bg-[#010814] border border-white/10 rounded-xl overflow-hidden flex flex-col justify-between p-2.5">
                          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#fcaa33]/5 to-transparent pointer-events-none" />
                          
                          {/* Animated scan bar */}
                          <motion.div 
                            className="absolute left-0 right-0 h-[2px] bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.7)] z-10"
                            animate={{ top: ["12%", "88%", "12%"] }}
                            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                          />

                          {/* Mock PDF structure elements */}
                          <div className="space-y-1 relative z-0 opacity-80">
                            <div className="flex justify-between items-center text-[7px] font-mono text-gray-400">
                              <span>AXIS_REQUISITION_MUSTER.pdf</span>
                              <span>99.2% OCR Conf</span>
                            </div>
                            <div className="h-1.5 bg-white/5 rounded w-4/5" />
                            <div className="h-1.5 bg-white/5 rounded w-2/3" />
                            
                            <div className="grid grid-cols-3 gap-1.5 mt-2">
                              <div className={`p-1 border rounded text-[7px] font-mono text-center transition-colors ${cooSuccess ? 'border-green-500 bg-green-500/10 text-green-300' : 'border-white/5 bg-white/5 text-gray-500'}`}>
                                <span className="block text-[5px] opacity-60">PARTNER</span>
                                {cooBank.split(' ')[0]}
                              </div>
                              <div className={`p-1 border rounded text-[7px] font-mono text-center transition-colors ${cooSuccess ? 'border-green-500 bg-green-500/10 text-green-300' : 'border-white/5 bg-white/5 text-gray-500'}`}>
                                <span className="block text-[5px] opacity-60">PROP REF</span>
                                {cooProperty.length > 8 ? cooProperty.substring(0, 7) + '..' : cooProperty}
                              </div>
                              <div className={`p-1 border rounded text-[7px] font-mono text-center transition-colors ${cooSuccess ? 'border-green-500 bg-green-500/10 text-green-300' : 'border-white/5 bg-white/5 text-gray-500'}`}>
                                <span className="block text-[5px] opacity-60">GPS MAP</span>
                                {cooLocation.substring(0, 9)}
                              </div>
                            </div>
                          </div>

                          <div className="flex justify-between items-center text-[7px] font-mono border-t border-white/5 pt-1.5">
                            <span className="text-gray-400">OCR Parser Status:</span>
                            <span className={cooSuccess ? "text-green-400 font-bold" : "text-cyan-400"}>
                              {cooSuccess ? "EXTRACT_SUCCESS" : "AWAITING_INGESTION_MAIL"}
                            </span>
                          </div>
                        </div>
                        
                        <div className="space-y-3">
                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Partner Bank</label>
                            <select 
                              value={cooBank} 
                              onChange={(e) => setCooBank(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 text-xs text-white p-2.5 rounded-xl outline-none"
                            >
                              <option className="bg-[#001732] text-white" value="Axis Bank">Axis Bank</option>
                              <option className="bg-[#001732] text-white" value="HDFC Bank">HDFC Bank</option>
                              <option className="bg-[#001732] text-white" value="ICICI Bank">ICICI Bank</option>
                              <option className="bg-[#001732] text-white" value="State Bank of India">State Bank of India</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Target Property</label>
                            <input 
                              type="text" 
                              value={cooProperty} 
                              onChange={(e) => setCooProperty(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 text-xs text-white p-2.5 rounded-xl outline-none font-sans"
                              placeholder="Property Name"
                            />
                          </div>

                          <div>
                            <label className="block text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-1">Extracted Landmark Coordinates</label>
                            <input 
                              type="text" 
                              value={cooLocation} 
                              onChange={(e) => setCooLocation(e.target.value)}
                              className="w-full bg-white/5 border border-white/10 text-xs text-white p-2.5 rounded-xl outline-none font-sans"
                            />
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={executeCooParse}
                        className="w-full py-3 mt-6 bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] font-black font-sans rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        Launch Mock Email Intake & Parse
                      </button>
                    </div>

                    {/* Parser Terminal Logs Output */}
                    <div className="lg:col-span-7 bg-black/80 border border-white/15 p-4 rounded-2xl min-h-[250px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                          <span className="text-[10px] font-mono text-gray-400 font-bold">Inbound OCR Engine Terminal</span>
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
                          </span>
                        </div>
                        <div className="space-y-1.5 font-mono text-xs max-h-[190px] overflow-y-auto">
                          {cooLogs.map((log, index) => (
                            <p key={index} className={log.startsWith('✅') || log.startsWith('📟') ? 'text-green-400' : 'text-gray-300'}>
                              {log}
                            </p>
                          ))}
                        </div>
                      </div>

                      {cooSuccess && (
                        <div className="mt-4 p-2.5 bg-green-500/10 border border-green-500/20 text-green-300 text-[10px] sm:text-xs rounded-lg text-center font-sans">
                          <strong>Live Pipeline Splicing Action:</strong> Dispatched task file straight to Rajesh Kumar (Field Engineer)! Added to the Appraisal queue.
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedRole === 'Field Engineer' && (
                <motion.div
                  key="engineer"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                >
                  {/* Mock mobile screen layout */}
                  <div className="lg:col-span-5 bg-black/40 border border-white/15 min-h-[420px] rounded-[36px] p-4 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-10" />
                    <div className="text-center pt-5">
                      <span className="text-[9px] font-mono text-[#fcaa33]">LOCATING VIA TATA INS-GNSS • PING: 18ms</span>
                    </div>

                    {/* Integrated dynamic radar or stamped surveyor photo */}
                    <div className="my-3 h-44 relative rounded-xl overflow-hidden bg-[#000c18] border border-white/10 flex flex-col justify-center items-center">
                      {photoUploaded ? (
                        <div className="absolute inset-0 z-0">
                          <img 
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop" 
                            alt="Bandra Duplex site capture" 
                            className="w-full h-full object-cover opacity-60"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
                          <div className="absolute bottom-1.5 left-1.5 right-1.5 p-1.5 bg-black/85 rounded border border-green-500/25 text-[7px] font-mono text-green-400 space-y-0.5">
                            <p className="font-bold text-white">✓ HARDWARE PHOTO WATERMARK SECURED</p>
                            <p>GPS COORDS: 19.05963° N | 72.82255° E</p>
                            <p>STAMP HASH: SHA256_0x55B099D204E677F</p>
                          </div>
                        </div>
                      ) : engineerCheckedIn ? (
                        <div className="text-center space-y-2">
                          <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border border-green-400/20 animate-ping" />
                            <div className="absolute inset-2 rounded-full border border-green-400/40 animate-pulse" />
                            <div className="w-10 h-10 rounded-full bg-green-500/10 border border-green-400 flex items-center justify-center">
                              <MapPin className="w-5 h-5 text-green-400" />
                            </div>
                          </div>
                          <p className="text-[9px] font-mono text-green-400 font-bold">GEOFENCE MATCHED ✓</p>
                          <p className="text-[8px] text-gray-400">Aim camera shutter at property boundary</p>
                        </div>
                      ) : (
                        <div className="text-center space-y-2 p-3">
                          <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border border-[#fcaa33]/20 animate-pulse" />
                            <div className="w-8 h-8 rounded-full bg-[#fcaa33]/5 border border-[#fcaa33]/30 flex items-center justify-center">
                              <Smartphone className="w-4 h-4 text-[#fcaa33]" />
                            </div>
                          </div>
                          <p className="text-[9px] font-mono text-gray-400">AWAITING SATELLITE GPS LOCK</p>
                          <p className="text-[8px] text-gray-500">Must arrive inside 50m of dispatch geofence</p>
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-[9px] bg-[#fcaa33]/20 border border-[#fcaa33]/30 text-[#fcaa33] font-semibold px-2 py-0.5 rounded">
                        PENDING SITE INSPECTION
                      </span>
                      <h4 className="text-white font-bold text-xs leading-tight">VX-2026-102: Bandra Beach Duplex</h4>
                      <p className="text-white/60 text-[11px]">Assigned Field Executive (FE): Rajesh Kumar</p>

                      <div className="bg-white/5 border border-white/10 p-2 rounded-lg text-[9px] space-y-0.5 font-mono text-white/80">
                        <span className="block text-[#fcaa33]">LATITUDE  : 19.05963 N</span>
                        <span className="block text-[#fcaa33]">LONGITUDE : 72.82255 E</span>
                        <span className="block text-gray-400">ELEVATION LEVEL CHECK COMPLETED VIA LIDAR</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {!engineerCheckedIn ? (
                        <button
                          onClick={() => setEngineerCheckedIn(true)}
                          className="w-full bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] py-2.5 rounded-xl text-xs font-bold font-sans transition-transform active:scale-95 cursor-pointer"
                        >
                          Perform GPS Geofence Verification
                        </button>
                      ) : (
                        <div className="space-y-2">
                          <div className="bg-green-500/20 text-green-400 border border-green-500/30 py-1.5 px-3 rounded-lg text-[10px] flex items-center gap-1.5 justify-center font-bold">
                            <Check className="w-3.5 h-3.5" /> GEOFENCE COMPLIANCE CHECK PASSED
                          </div>
                          {!photoUploaded ? (
                            <button
                              onClick={() => setPhotoUploaded(true)}
                              className="w-full bg-[#066054] hover:bg-[#044c42] text-white py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                            >
                              <Camera className="w-3.5 h-3.5 text-[#fcaa33]" />
                              Trigger Watermark Site Capture
                            </button>
                          ) : (
                            <div className="bg-[#066054]/30 text-green-300 border border-[#066054]/40 py-1.5 rounded-lg text-center text-[10px] font-bold">
                              ✓ WATERMARKED SURVEY LOCKED & ENCRYPTED
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Informational specs */}
                  <div className="lg:col-span-7 space-y-4 flex flex-col justify-center">
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-3">
                      <div className="flex items-center gap-2">
                        <Award className="w-5 h-5 text-[#fcaa33]" />
                        <h4 className="text-white text-sm font-bold">Anti-Fraud Tamper Safeguard</h4>
                      </div>
                      <p className="text-white/70 text-xs leading-relaxed">
                         ValuXpert enforces a strict hardware-level photogrammetry lock. Device album uploads are disabled completely inside the FE App. The site photo is stamped on the fly with geographic indices directly fetched from hardware gps sensors, blocking mock image tampering.
                      </p>
                    </div>

                    {photoUploaded && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-xl text-xs"
                      >
                        <strong>SOP Pipeline State:</strong> Bandra Beach site photo saved. Physical inspection metrics synced with server database. The case file has now progressed to <strong>Draft Manager (DM) Calculations Draft</strong>!
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )}

              {selectedRole === 'Draft Manager' && (
                <motion.div
                  key="draft-manager"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6"
                >
                  <div className="lg:col-span-6 bg-white/5 border border-white/15 p-5 rounded-2xl space-y-5">
                    <h4 className="text-xs font-mono text-[#fcaa33] uppercase font-black">
                      Valuation Multiplier Computation Sheet
                    </h4>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-xs text-white/75 mb-1.5">
                          <span>BUILT AREA (SQ. FT) :</span>
                          <span className="font-bold text-white font-mono">{builtUpArea} sq ft</span>
                        </div>
                        <input
                          type="range"
                          min="500"
                          max="8000"
                          step="100"
                          value={builtUpArea}
                          onChange={(e) => setBuiltUpArea(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fcaa33]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-white/75 mb-1.5">
                          <span>GUIDELINER LAND RATE (₹ PER SQ. FT) :</span>
                          <span className="font-bold text-white font-mono">₹{landRate.toLocaleString()}</span>
                        </div>
                        <input
                          type="range"
                          min="5000"
                          max="100000"
                          step="1000"
                          value={landRate}
                          onChange={(e) => setLandRate(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fcaa33]"
                        />
                      </div>

                      <div>
                        <div className="flex justify-between text-xs text-white/75 mb-1.5">
                          <span>DEPRECIATION FACTOR (% YEARS IN USE) :</span>
                          <span className="font-bold text-white font-mono">{depreciation}%</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max="60"
                          step="5"
                          value={depreciation}
                          onChange={(e) => setDepreciation(Number(e.target.value))}
                          className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[#fcaa33]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-6 bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] text-gray-400 font-mono block">BANK FORM COMPLIANCE SCHEMA</span>
                      <h4 className="text-white font-bold text-sm mt-1">AXIS Bank Land & Area Appraisal Calculations</h4>
                    </div>

                    {/* Interactive CAD Architectural Blueprint */}
                    {(() => {
                      const scaleFactor = Math.max(0.4, Math.min(1.0, builtUpArea / 8000));
                      return (
                        <div className="relative h-28 bg-[#000a14] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center my-3 p-1 text-[8px] font-mono">
                          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:12px_12px] opacity-10 pointer-events-none" />
                          <svg className="w-full h-full" viewBox="0 0 200 100">
                            {/* CAD outline layout */}
                            <motion.rect 
                              x={100 - (scaleFactor * 76) / 2} 
                              y={50 - (scaleFactor * 42) / 2} 
                              width={scaleFactor * 76} 
                              height={scaleFactor * 42} 
                              className="fill-cyan-500/10 stroke-cyan-400 stroke-2"
                              animate={{ width: scaleFactor * 76, height: scaleFactor * 42, x: 100 - (scaleFactor * 76) / 2, y: 50 - (scaleFactor * 42) / 2 }}
                            />
                            <circle cx="100" cy="50" r="2.5" className="fill-[#fcaa33]" />
                            <g>
                              <text 
                                x="100" 
                                y={50 - (scaleFactor * 42) / 2 - 4} 
                                className="fill-cyan-300 font-bold text-[6px]" 
                                textAnchor="middle"
                              >
                                Width: {Math.round(Math.sqrt(builtUpArea) * 1.25)} ft
                              </text>
                              <text 
                                x={100 + (scaleFactor * 76) / 2 + 5} 
                                y="52" 
                                className="fill-cyan-300 font-bold text-[6px]" 
                                textAnchor="start"
                              >
                                Depth: {Math.round(Math.sqrt(builtUpArea) * 0.8)} ft
                              </text>
                            </g>
                            <text x="8" y="93" className="fill-white/30 text-[4.5px]">CAD LAYOUT V2 • SCALE 1:200</text>
                          </svg>
                        </div>
                      );
                    })()}

                    <div className="space-y-2.5 my-4">
                      <div className="flex justify-between text-xs border-b border-white/5 pb-2 text-white/60">
                        <span>Original Asset Appraisal Cost:</span>
                        <span className="font-mono text-white">₹{calcaulatedRawVal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-xs border-b border-white/5 pb-2 text-[#fcaa33]/80">
                        <span>Applicable Depreciation Deduction ({depreciation}%):</span>
                        <span className="font-mono text-[#fcaa33]">-₹{(calcaulatedRawVal * (depreciation / 100)).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm pt-2 text-green-400 font-bold">
                        <span>ESTIMATED LIQUIDATION VALUE:</span>
                        <span className="font-mono text-lg font-black text-green-400">
                          ₹{calculatedDepreciatedVal.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    {draftGenerated && (
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-2.5 mb-3.5 bg-[#fcaa33]/15 border border-[#fcaa33]/30 text-[#fcaa33] text-xs font-bold rounded-lg text-center"
                      >
                        ✓ XML Report generated successfully for ₹{calculatedDepreciatedVal.toLocaleString()}
                      </motion.div>
                    )}

                    <button
                      type="button"
                      onClick={() => setDraftGenerated(!draftGenerated)}
                      className={`w-full py-2.5 rounded-lg text-xs font-bold shadow transition-colors cursor-pointer ${
                        draftGenerated 
                          ? 'bg-[#fcaa33] text-[#001732] hover:bg-[#ef9f27]' 
                          : 'bg-[#066054] text-white hover:bg-[#044c42]'
                      }`}
                    >
                      {draftGenerated ? '✓ Reset Computation' : 'Lock Valuation Data & Generate Draft XML Report'}
                    </button>
                  </div>
                </motion.div>
              )}

              {selectedRole === 'Report Checker' && (
                <motion.div
                  key="report-checker"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Checklist panel */}
                    <div className="lg:col-span-6 bg-white/5 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-4">
                          <CheckSquare className="w-4 h-4 text-[#fcaa33]" />
                          <h4 className="text-xs font-mono uppercase text-white font-bold">Double-Blind Verification Audit</h4>
                        </div>
                        <p className="text-gray-300 text-xs mb-4">
                          Report Checkers (RC) double-check calculated assets coordinates and land rates to comply with banking strictures.
                        </p>

                        <div className="space-y-3">
                          <label className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                            <input 
                              type="checkbox"
                              checked={checkerValidated.mathVerify}
                              onChange={(e) => setCheckerValidated(prev => ({ ...prev, mathVerify: e.target.checked }))}
                              className="accent-[#fcaa33] h-4 w-4 shrink-0"
                            />
                            <div className="text-xs text-white">
                              <p className="font-bold">Calculations QC</p>
                              <p className="text-white/40 text-[10px]">Verify built-up calculations matches DM's layout blueprint.</p>
                            </div>
                          </label>

                          <label className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                            <input 
                              type="checkbox"
                              checked={checkerValidated.gpsVerify}
                              onChange={(e) => setCheckerValidated(prev => ({ ...prev, gpsVerify: e.target.checked }))}
                              className="accent-[#fcaa33] h-4 w-4 shrink-0"
                            />
                            <div className="text-xs text-white">
                              <p className="font-bold">GPS Coordinate Matching</p>
                              <p className="text-white/40 text-[10px]">Cross reference photo EXIF waterstamp latitude limits.</p>
                            </div>
                          </label>

                          <label className="flex items-center gap-3 bg-white/5 p-3 rounded-xl border border-white/5 cursor-pointer hover:bg-white/10 transition-colors">
                            <input 
                              type="checkbox"
                              checked={checkerValidated.documentVerify}
                              onChange={(e) => setCheckerValidated(prev => ({ ...prev, documentVerify: e.target.checked }))}
                              className="accent-[#fcaa33] h-4 w-4 shrink-0"
                            />
                            <div className="text-xs text-white">
                              <p className="font-bold">Registry Verification Check</p>
                              <p className="text-white/40 text-[10px]">Confirm boundary registries index with layout plans.</p>
                            </div>
                          </label>
                        </div>
                      </div>

                      {checkerValidated.mathVerify && checkerValidated.gpsVerify && checkerValidated.documentVerify && (
                        <button
                          onClick={() => setCheckerStatus('verified')}
                          className="w-full py-2.5 mt-5 bg-[#066054] hover:bg-[#044c42] text-white text-xs font-bold rounded-xl transition-all cursor-pointer"
                        >
                          {checkerStatus === 'verified' ? '✓ Verification Saved' : 'Mark Verification Complete & Pass to LCTO'}
                        </button>
                      )}
                    </div>

                    {/* Operational desk details */}
                    <div className="lg:col-span-6 bg-black/40 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                      <div className="space-y-4">
                        <span className="text-[10px] font-mono text-gray-400 block uppercase font-bold text-[#fcaa33]">Audit Comparator Dashboard</span>
                        <h4 className="text-sm font-bold text-white">VX-2026-104: Beverly Hills Twin Villas</h4>
                        
                        {/* Interactive math QC comparative block */}
                        <div className="grid grid-cols-2 gap-3 text-[9px] font-mono">
                          <div className={`p-2.5 rounded-xl border ${checkerValidated.mathVerify ? 'border-green-500/30 bg-green-500/5' : 'border-white/10 bg-white/5'} transition-colors duration-300`}>
                            <p className="text-[#fcaa33] font-bold border-b border-white/5 pb-1 mb-1">DRAFT MANAGER VAL</p>
                            <p>BUILT AREA: 3,120 SF</p>
                            <p>RATE: ₹12,180/SF</p>
                            <p className="text-white font-bold mt-1">TOTAL: ₹3.80 Cr</p>
                          </div>
                          <div className={`p-2.5 rounded-xl border ${checkerValidated.mathVerify ? 'border-green-500 bg-green-500/10' : 'border-white/10 bg-white/5'} transition-colors duration-300`}>
                            <p className="text-green-400 font-bold border-b border-white/5 pb-1 mb-1 flex items-center justify-between">
                              <span>QA AUDITOR QC</span>
                              {checkerValidated.mathVerify && <span className="text-green-400">MATCH ✓</span>}
                            </p>
                            <p>BUILT AREA: 3,120 SF</p>
                            <p>RATE: ₹12,180/SF</p>
                            <p className="text-white font-bold mt-1">QC TOTAL: ₹3.80 Cr</p>
                          </div>
                        </div>

                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 text-xs text-white/80 space-y-2">
                          <p className="flex justify-between border-b border-white/5 pb-1">
                            <span>Report Checker Account:</span>
                            <span className="text-white font-bold">Auditor Desk 04</span>
                          </p>
                          <p className="flex justify-between border-b border-white/5 pb-1">
                            <span>Physical Photo Stamped GPS:</span>
                            <span className="text-[#fcaa33] font-bold">18.5590 N | 73.7797 E</span>
                          </p>
                          <p className="flex justify-between border-b border-white/5 pb-1">
                            <span>Calculated Area Size:</span>
                            <span className="text-green-300 font-bold">3,120 Sq Ft</span>
                          </p>
                        </div>
                      </div>

                      {checkerStatus === 'verified' && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="mt-6 p-4 bg-green-500/15 border border-green-500/20 text-green-300 text-xs rounded-xl"
                        >
                          <strong>RC QA Completed:</strong> Calculations validated. Safe parameters cleared. File dossier flagged OK and queued inside LCTO technical seal chamber.
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedRole === 'LCTO' && (
                <motion.div
                  key="lcto"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Compliance Check Panel */}
                    <div className="lg:col-span-5 bg-black/40 border border-white/10 p-5 rounded-2xl flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4 text-[#fcaa33]" />
                          <h4 className="text-xs font-mono uppercase text-white/80 font-bold">Local technical coordinates audit</h4>
                        </div>

                        {/* Interactive GIS Boundary Plot visual */}
                        <div className="relative h-28 bg-[#000810] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center p-2 font-mono">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#10b981/10_0%,transparent_70%)] opacity-20 pointer-events-none" />
                          <svg className="w-full h-full" viewBox="0 0 200 100">
                            {/* Grid boundaries */}
                            <line x1="10" y1="50" x2="190" y2="50" className="stroke-white/10 stroke" />
                            <line x1="100" y1="10" x2="100" y2="90" className="stroke-white/10 stroke" />
                            
                            {/* Municipal setback boundaries */}
                            <rect x="50" y="25" width="100" height="50" className="fill-none stroke-white/20 stroke-dasharray-[2_2]" />
                            {/* Actual compliance boundaries plotted */}
                            <motion.rect 
                              x="54" y="29" width="92" height="42" 
                              className={`fill-none stroke-2 transition-colors duration-500 ${lctoAudited ? 'stroke-emerald-400' : 'stroke-amber-400/50'}`}
                            />
                            
                            <circle cx="100" cy="50" r="3" className="fill-red-500 animate-pulse" />
                            
                            <text x="100" y="20" className="fill-white/40 text-[5px]" textAnchor="middle">MUNICIPAL ROAD BOUNDARY</text>
                            
                            {lctoAudited && (
                              <g>
                                <text x="100" y="85" className="fill-emerald-400 font-bold text-[6px]" textAnchor="middle">
                                  ✓ SETBACK: 4.2M COMPLIANT (RULE: 4.0M)
                                </text>
                              </g>
                            )}
                          </svg>
                        </div>
                        
                        <div className="space-y-3">
                          <div className="bg-white/5 p-3 rounded-xl border border-white/5 space-y-1">
                            <p className="text-[11px] text-[#fcaa33] font-mono"><strong>GIS TARGET ADDR:</strong> Baner Enclave, Pune</p>
                            <p className="text-[11px] text-white/70"><strong>SURVEY BOUNDS:</strong> 18.5590 N | 73.7797 E</p>
                            <p className="text-[11px] text-white/70"><strong>MUNICIPAL OFFSET RULE:</strong> 4.0m minimum setback</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={executeLctoAudit}
                        className="w-full py-3 mt-6 bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732] font-black font-sans rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        Audit & Verify Compliance Coordinates
                      </button>
                    </div>

                    {/* LCTO Terminal Logs Output */}
                    <div className="lg:col-span-7 bg-black/80 border border-white/15 p-4 rounded-2xl min-h-[220px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                          <span className="text-[10px] font-mono text-gray-400 font-bold">LCTO GNSS GIS Audit Logs</span>
                          <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fcaa33] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fcaa33]"></span>
                          </span>
                        </div>
                        <div className="space-y-1.5 font-mono text-xs max-h-[160px] overflow-y-auto">
                          {lctoLogs.map((log, index) => (
                            <p key={index} className={log.startsWith('✅') || log.startsWith('📏') || log.startsWith('🤖') ? 'text-green-400' : 'text-gray-300'}>
                              {log}
                            </p>
                          ))}
                        </div>
                      </div>

                      {lctoAudited && (
                        <div className="mt-4 p-2.5 bg-[#066054]/20 border border-[#066054]/30 text-green-300 text-[10px] sm:text-xs rounded-lg text-center font-sans font-bold">
                          ✓ LCTO COMPLIANCE VERIFICATION LOCKED: Coordinates and spatial setback cleared. Ready for HSM Sealing!
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedRole === 'Approval Authority' && (
                <motion.div
                  key="approval-authority"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <h4 className="text-xs font-mono text-[#fcaa33] uppercase">
                    Secured Technical Signature Gate
                  </h4>

                  <div className="bg-white/5 border border-white/10 p-5 rounded-2xl space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
                      <div className="md:col-span-7">
                        <span className="text-xs font-mono text-[#fcaa33]">Case Ref: VX-2026-104</span>
                        <h5 className="text-white font-bold text-sm">Beverly Hills Twin Villas (Axis Bank Case)</h5>
                        <p className="text-white/60 text-xs">Calculated Appraisal Value: <strong className="text-green-400">₹3,80,00,000</strong></p>
                        
                        <button
                          onClick={() => handleLctoApprove('VX-2026-104')}
                          className={`px-5 py-2.5 rounded-lg text-xs font-bold shadow-md cursor-pointer transition-all mt-4 ${
                            lctoApproved['VX-2026-104']
                              ? 'bg-green-500/20 text-green-400 border border-green-500/35'
                              : 'bg-[#fcaa33] hover:bg-[#ef9f27] text-[#001732]'
                          }`}
                        >
                          {lctoApproved['VX-2026-104'] ? 'Approved & Signed ✓' : 'Approve & Cryptographically Sign'}
                        </button>
                      </div>

                      {/* Interactive Cryptographic HSM Seal Visualizer */}
                      <div className="md:col-span-5 h-24 bg-[#000a14] border border-white/10 rounded-xl relative overflow-hidden flex items-center justify-center p-2 font-mono">
                        <svg className="w-full h-full" viewBox="0 0 100 50">
                          <circle cx="50" cy="25" r="16" className="fill-none stroke-white/10 stroke-dasharray-[2_2]" />
                          {lctoApproved['VX-2026-104'] ? (
                            <motion.g 
                              initial={{ scale: 0.2, opacity: 0 }} 
                              animate={{ scale: 1, opacity: 1 }} 
                              transition={{ type: 'spring', damping: 10 }}
                            >
                              <circle cx="50" cy="25" r="14" className="fill-[#066054]/30 stroke-emerald-400 stroke-2" />
                              <path d="M47,23 l2.5,2.5 l4.5,-4.5" className="fill-none stroke-emerald-300 stroke-2" />
                              <text x="50" y="35" className="fill-emerald-300 font-bold text-[4px]" textAnchor="middle">SEALED & LOCKED</text>
                            </motion.g>
                          ) : (
                            <g>
                              <circle cx="50" cy="25" r="14" className="fill-none stroke-[#fcaa33]/25 stroke-2" />
                              <path d="M47,25 h6 M50,22 v6" className="fill-none stroke-[#fcaa33] stroke" />
                              <text x="50" y="34" className="fill-gray-500 text-[4px]" textAnchor="middle">AWAITING_AUTH</text>
                            </g>
                          )}
                        </svg>
                      </div>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-xs space-y-2 text-white/80 leading-relaxed font-sans mt-2">
                      <div className="flex items-center gap-1 text-white text-xs font-bold font-mono">
                        <Lock className="w-3.5 h-3.5 text-green-400" /> Secure Audit Ledger Trajectory:
                      </div>
                      <div className="space-y-1 text-[11px] font-mono">
                        <p className="text-gray-400">02 Jun 10:14 UTC • Ingestion parsed from bank mail dossier (COO Level)</p>
                        <p className="text-gray-400">03 Jun 14:22 UTC • GPS check-in validated by Surveyor Rajesh Kumar</p>
                        <p className="text-gray-400">04 Jun 09:30 UTC • Dimension calculations locked by Draft Manager Anil Sharma</p>
                        <p className="text-gray-400">05 Jun 11:15 UTC • Auditor verify audit marked active by QA desk RC</p>
                        {lctoApproved['VX-2026-104'] && (
                          <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-green-400 font-bold"
                          >
                            ✓ 05 Jun 15:40 UTC • Cryptographically sealed & cryptographically authorized by Approval Authority
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedRole === 'Bank Partner' && (
                <motion.div
                  key="bank-partner"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <div className="lg:col-span-5 bg-black/40 border border-white/15 p-5 rounded-2xl flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-[#fcaa33]" />
                          <h4 className="text-xs font-mono uppercase text-white/80 font-bold">API Submission Channel</h4>
                        </div>

                        {/* Interactive Secure API Network Gateway Diagram */}
                        <div className="relative h-28 bg-[#000810] border border-white/10 rounded-xl overflow-hidden flex items-center justify-between p-3 font-mono">
                          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e9/5_0%,transparent_75%)] opacity-30 pointer-events-none" />
                          
                          {/* Local Server Node */}
                          <div className="flex flex-col items-center z-10">
                            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/20 flex items-center justify-center">
                              <Cpu className="w-4 h-4 text-cyan-400" />
                            </div>
                            <span className="text-[6px] text-gray-500 mt-1">VALUXPERT_HSM</span>
                          </div>

                          {/* Data Transport Path */}
                          <div className="flex-1 px-4 relative h-4 flex items-center">
                            <div className="w-full h-[2px] bg-white/10" />
                            {apiStatus === 'sending' && (
                              <motion.div 
                                className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#22d3ee]"
                                animate={{ x: ["0%", "450%"] }}
                                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                              />
                            )}
                            {apiStatus === 'success' && (
                              <div className="absolute left-1/2 -translate-x-1/2 text-[5px] text-green-400 bg-green-500/10 px-1 rounded font-bold uppercase tracking-wider">
                                SSL_SECURE
                              </div>
                            )}
                          </div>

                          {/* Bank Endpoint Node */}
                          <div className="flex flex-col items-center z-10">
                            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-colors duration-500 ${apiStatus === 'success' ? 'bg-green-950/30 border-green-500' : 'bg-slate-900 border-white/20'}`}>
                              <Send className={`w-4 h-4 ${apiStatus === 'success' ? 'text-green-400' : 'text-gray-400'}`} />
                            </div>
                            <span className="text-[6px] text-gray-500 mt-1">AXIS_INTRANET</span>
                          </div>
                        </div>

                        <p className="text-gray-300 text-xs">
                          Once LCTO Technical officers seal the report dossier, it transfers directly to the partner bank through real-time API integrations.
                        </p>

                        <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-xs text-white/70 space-y-1">
                          <p><strong>Dossier Reference:</strong> VX-2026-104</p>
                          <p><strong>Certified Valuation:</strong> ₹3,80,00,000</p>
                          <p><strong>Status:</strong> Sealed & Awaiting dispatch</p>
                        </div>
                      </div>

                      <button
                        onClick={executeBankSync}
                        disabled={apiStatus === 'sending'}
                        className={`w-full py-2.5 mt-5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                          apiStatus === 'success' 
                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                            : 'bg-[#fcaa33] text-[#001732] hover:bg-[#ef9f27]'
                        }`}
                      >
                        {apiStatus === 'success' ? '✓ dossier Transmitted' : apiStatus === 'sending' ? 'Sending Payload...' : 'Affix dispatch to Axis Bank API'}
                      </button>
                    </div>

                    <div className="lg:col-span-7 bg-black/90 p-4 border border-white/10 rounded-2xl min-h-[220px] flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
                          <span className="text-[10px] font-mono text-gray-400 font-bold">Developer API Console Logs</span>
                          <span className="flex h-1.5 w-1.5 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fcaa33] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#fcaa33]"></span>
                          </span>
                        </div>

                        {apiLogs.length === 0 ? (
                          <p className="text-gray-500 font-mono text-xs italic">Awaiting API trigger event...</p>
                        ) : (
                          <div className="space-y-1 font-mono text-xs max-h-[170px] overflow-y-auto">
                            {apiLogs.map((log, index) => (
                              <p key={index} className={log.includes('SUCCESS') || log.includes('ACCEPTED') ? 'text-green-400 font-bold' : 'text-gray-300'}>
                                {log}
                              </p>
                            ))}
                          </div>
                        )}
                      </div>

                      {apiStatus === 'success' && (
                        <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-xl text-[10px] text-green-300 font-sans mt-3">
                          ✓ report successfully synced inside Axis Banker intranet database! Workflow cycles concluded completely.
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {selectedRole === 'HR & Accountant' && (
                <motion.div
                  key="hr"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4 font-sans"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-xs font-mono text-[#fcaa33] uppercase">
                      Operational Muster Attendance & Expense System
                    </h4>
                    <span className="text-xs text-white/50 hidden sm:inline">Click attendance tag to toggle status</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Attendance roster list */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl space-y-3">
                      <h5 className="text-xs font-bold text-white/80 font-mono uppercase tracking-wider">
                        Active Employee Attendance Logs
                      </h5>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                        {staff.map((employee) => (
                          <div
                            key={employee.id}
                            className="bg-white/5 p-2.5 rounded-lg flex justify-between items-center border border-white/5 text-xs text-white/95"
                          >
                            <div>
                              <p className="font-bold text-white">{employee.name}</p>
                              <p className="text-white/40 text-[10px]">{employee.role}</p>
                            </div>
                            <button
                              onClick={() => toggleAttendance(employee.id)}
                              className={`px-3 py-1 rounded-full text-[10px] font-bold cursor-pointer transition-colors ${
                                employee.attendanceStatus === 'Present'
                                  ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                                  : employee.attendanceStatus === 'Absent'
                                  ? 'bg-red-500/20 text-red-300 border border-red-500/30'
                                  : 'bg-[#fcaa33]/25 text-[#fcaa33] border border-[#fcaa33]/40'
                              }`}
                            >
                              {employee.attendanceStatus}
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Integrated Financial Summary */}
                    <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex flex-col justify-between">
                      <div className="space-y-1">
                        <h5 className="text-xs font-bold text-white/80 font-mono uppercase tracking-wider mb-2">
                          Muster Roll Financial Processing
                        </h5>
                        <p className="text-white/60 text-xs leading-relaxed">
                          Field engineer travel claims are dynamically tracking based on latitude metrics logged by check-in coordinates. Auto-processing payouts.
                        </p>
                      </div>

                      {/* Interactive Fuel KM Logs ledger visual */}
                      <div className="relative h-20 bg-[#000a14] border border-white/10 rounded-xl overflow-hidden flex items-center justify-between p-3 font-mono text-[8px] my-3">
                        <div className="space-y-1">
                          <p className="text-gray-400">ACTIVE GEOCALC TRIPS</p>
                          <p className="text-[#fcaa33] font-bold text-[10px]">4 ACTIVE IN FIELD</p>
                          <div className="w-16 h-1 bg-white/10 rounded overflow-hidden">
                            <div className="w-4/5 h-full bg-[#fcaa33]" />
                          </div>
                        </div>

                        <div className="space-y-1 text-right">
                          <p className="text-gray-400">PETROL REIMBURSE RATE</p>
                          <p className="text-green-400 font-bold text-[10px]">₹12.50 / KM</p>
                          <p className="text-gray-500">MUSTER NO: #4492</p>
                        </div>
                      </div>

                      <div className="bg-white/5 p-3 rounded-lg border border-white/5 text-xs mt-1 space-y-1.5 font-mono">
                        <div className="flex justify-between text-white/50">
                          <span>Active Present Officers:</span>
                          <span className="text-white font-bold">{staff.filter(s => s.attendanceStatus === 'Present').length}</span>
                        </div>
                        <div className="flex justify-between text-white/50">
                          <span>Verified Auto claims KM tracking:</span>
                          <span className="text-[#fcaa33] font-bold">₹28,450 approved</span>
                        </div>
                        <div className="flex justify-between text-white/50">
                          <span>Muster payroll processed value:</span>
                          <span className="text-green-400 font-bold">₹4,20,000 processed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
