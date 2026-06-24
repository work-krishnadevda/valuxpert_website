/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ValuationCase, StaffMember } from './types';

export const INITIAL_CASES: ValuationCase[] = [
  {
    id: "VX-2026-101",
    propertyTitle: "Elite Heights Penthouse",
    propertyAddress: "Apt 2402, B-Wing, Skyline Towers, Altamount Road, Mumbai",
    clientBank: "HDFC Bank",
    assignedEngineer: "Rajesh Kumar",
    status: "allocated",
    marketValueEstimate: 75000000, // 7.5 Cr INR
    latitude: 18.9647,
    longitude: 72.8258,
    riskScore: "Low",
    remarks: "Case created and pending engineer check-in",
    createdAt: "2026-06-04",
    photos: []
  },
  {
    id: "VX-2026-102",
    propertyTitle: "Bandra Beach-View Duplex",
    propertyAddress: "Carter Road Promenade, Bandra West, Mumbai",
    clientBank: "ICICI Bank",
    assignedEngineer: "Rajesh Kumar",
    status: "field_visit",
    marketValueEstimate: 120000000, // 12 Cr INR
    latitude: 19.0596,
    longitude: 72.8225,
    riskScore: "Low",
    remarks: "Site inspection in progress. Photogrammetry and GPS verified.",
    createdAt: "2026-06-03",
    photos: ["https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "VX-2026-103",
    propertyTitle: "MIDC Industrial Cold Storage Warehouse",
    propertyAddress: "Sector 15, Ind. Area, Kopar Khairane, Navi Mumbai",
    clientBank: "State Bank of India (SBI)",
    assignedEngineer: "Suresh Patil",
    status: "draft_calc",
    marketValueEstimate: 45000000, 
    latitude: 19.1030,
    longitude: 73.0125,
    riskScore: "Medium",
    remarks: "Site visit logs synced. Computer drafting and land rate matching initiated.",
    createdAt: "2026-06-02",
    photos: ["https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "VX-2026-104",
    propertyTitle: "Beverly Hills Twin Villas",
    propertyAddress: "Plot 42, Green Meadows Enclave, Baner, Pune",
    clientBank: "Axis Bank",
    assignedEngineer: "Anil Sharma",
    status: "qa_review",
    marketValueEstimate: 38000000,
    latitude: 18.5590,
    longitude: 73.7797,
    riskScore: "Low",
    remarks: "Draft calculations verified by checker. Transmitted to LCTO for final approval sign-off.",
    createdAt: "2026-06-02",
    photos: ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"]
  },
  {
    id: "VX-2026-105",
    propertyTitle: "Infinity Tech Park Commercial Space",
    propertyAddress: "Block G, Kadubeesanahalli, Outer Ring Road, Bengaluru",
    clientBank: "Kotak Mahindra Bank",
    assignedEngineer: "Anil Sharma",
    status: "delivered",
    marketValueEstimate: 180000000,
    latitude: 12.9363,
    longitude: 77.6917,
    riskScore: "Low",
    remarks: "Final report completed, cryptographically signed, and API-delivered to Kotak Credit Portal.",
    createdAt: "2026-06-01",
    photos: ["https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"]
  }
];

export const INITIAL_STAFF: StaffMember[] = [
  {
    id: "ST-01",
    name: "Sunita Deshmukh",
    role: "Admin / COO",
    attendanceStatus: "Present",
    lastLocation: "Corporate Headquarters - Desk 1",
    phone: "+91 98200 11223",
    email: "sunita.d@valuxpert.com"
  },
  {
    id: "ST-02",
    name: "Rajesh Kumar",
    role: "Field Engineer",
    attendanceStatus: "Present",
    lastLocation: "Carter Road Promenade, Bandra West",
    phone: "+91 98200 44556",
    email: "rajesh.k@valuxpert.com"
  },
  {
    id: "ST-03",
    name: "Suresh Patil",
    role: "Field Engineer",
    attendanceStatus: "Present",
    lastLocation: "MIDC Industrial Sector, Navi Mumbai",
    phone: "+91 98200 77889",
    email: "suresh.p@valuxpert.com"
  },
  {
    id: "ST-04",
    name: "Anil Sharma",
    role: "Draft Maker / Checker",
    attendanceStatus: "Present",
    lastLocation: "Remote Work / VPN Access",
    phone: "+91 98200 99001",
    email: "anil.s@valuxpert.com"
  },
  {
    id: "ST-05",
    name: "Devendra Verma",
    role: "LCTO / Approval Authority",
    attendanceStatus: "Present",
    lastLocation: "Mumbai Corporate Office",
    phone: "+91 98200 88221",
    email: "devendra.v@valuxpert.com"
  }
];

export const WORKFLOW_STAGES = [
  {
    id: "01",
    title: "01. Case Creation",
    subtitle: "Data entry and banker allocation.",
    icon: "FolderPlus",
    description: "Automatic API ingestion of valuation files from partnering financial institutes. Duplicate detection, geofence alignment and assignment of files in just one click."
  },
  {
    id: "02",
    title: "02. Field Visit",
    subtitle: "GPS-tracked site inspection.",
    icon: "MapPin",
    description: "Mobile app for field engineers forces GPS timestamp validation, compass verification, and watermark site photography. Works entirely offline."
  },
  {
    id: "03",
    title: "03. Draft & Calc",
    subtitle: "Automated value computation.",
    icon: "Edit3",
    description: "Rule-based banking computation sheet auto-matches recent historical guideliner property rates, local town planning grids, and built-area calculations."
  },
  {
    id: "04",
    title: "04. Review",
    subtitle: "Multi-level QA checkpoints.",
    icon: "CheckSquare",
    description: "Double-blind technical calculations audits. Auto-cross checks for deviations and anomalies against typical market range markers. Real-time compliance logs."
  },
  {
    id: "05",
    title: "05. Delivery",
    subtitle: "Final report sent to bankers.",
    icon: "CheckCircle",
    description: "Generates PDF with secure cryptographic signature token. Pushed directly to banker portals. Streamlines turn-around-time and reduces approval friction."
  }
];

export const ECO_SYSTEM_FEATURES = [
  {
    icon: "BarChart3",
    title: "MIS Reports",
    description: "Granular analytics on TAT, case volume, and team performance metrics with filterable data grids."
  },
  {
    icon: "MapPin",
    title: "GPS Field Tracking",
    description: "Live movement tracking and location-validated, time-stamped site photography for field audits."
  },
  {
    icon: "Users",
    title: "Integrated HRMS",
    description: "Unified system for attendance, staff lists, custom leave requests, and field expense claims."
  },
  {
    icon: "Landmark",
    title: "Bank-Wise Configuration",
    description: "Switch report formatting and valuation calculation logic automatically based on individual bank formulas."
  },
  {
    icon: "ShieldAlert",
    title: "Audit Trail & Compliance",
    description: "Pristine logs of every edit made by makers, checkers, and leaders on every single property case."
  },
  {
    icon: "Building",
    title: "Property Intelligence",
    description: "Historical comparable query engine pulls historical appraisals in matching geohashes or micro-markets."
  }
];

export const PROBLEM_CARDS = [
  {
    icon: "Database",
    title: "Scattered Case Data",
    description: "Stop hunting through emails and spreadsheets. Centralize every property detail instantly and search in one click."
  },
  {
    icon: "MapPinOff",
    title: "Inconsistent Field Visits",
    description: "Standardize evidence collection. Real-time GPS tracking ensures teams are genuinely visiting designated sites."
  },
  {
    icon: "EyeOff",
    title: "No Real-Time Visibility",
    description: "Know exactly which cases are pending, drafting, or awaiting approval at a single glance with visual dashboards."
  },
  {
    icon: "UserMinus",
    title: "Disconnected HR & Muster",
    description: "Attendance, payroll, and field travel expenses should talk to each other automatically. Ours finally do."
  }
];
