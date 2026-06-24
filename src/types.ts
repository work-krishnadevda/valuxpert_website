/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type CaseStatus = 'allocated' | 'field_visit' | 'draft_calc' | 'qa_review' | 'delivered';

export interface ValuationCase {
  id: string;
  propertyTitle: string;
  propertyAddress: string;
  clientBank: string;
  assignedEngineer: string;
  status: CaseStatus;
  marketValueEstimate: number;
  latitude: number;
  longitude: number;
  riskScore: 'Low' | 'Medium' | 'High';
  remarks: string;
  createdAt: string;
  photos: string[];
}

export interface StaffMember {
  id: string;
  name: string;
  role: 'COO / Admin' | 'Field Engineer' | 'Data Manager' | 'Report Checker' | 'LCTO / Approval Authority' | 'Bank Partner' | 'HR & Accountant' | 'Admin / COO' | 'Draft Maker / Checker';
  attendanceStatus: 'Present' | 'Absent' | 'On Leave';
  lastLocation: string;
  phone: string;
  email: string;
}

export interface DemoRequest {
  fullName: string;
  email: string;
  companyName: string;
  companySize: string;
  phone: string;
  featuresOfInterest: string[];
}
