/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldAlert, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest">
            Regulatory Compliance
          </span>
          <h1 className="text-3xl font-extrabold font-sans tracking-tight mt-1">
            Privacy Policy (POPIA Compliant)
          </h1>
          <p className="text-slate-400 text-xs mt-2">
            Effective Date: July 8, 2026 • Last Updated: July 8, 2026
          </p>
        </div>
      </section>

      {/* Narrative */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8 text-xs sm:text-sm text-gray-600 leading-relaxed">
        
        <div className="p-4 bg-blue-50 border border-blue-100 rounded-xl flex items-start space-x-3 text-xs text-blue-800 leading-normal">
          <ShieldAlert className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <p>
            This policy defines our structural commitment to safeguarding your proprietary coordinates, architectural plans, and deeds office queries in accordance with the <strong>South African Protection of Personal Information Act (POPIA) No. 4 of 2013</strong>.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            1. Information We Collect
          </h2>
          <p>
            As a registered geomatics consultancy, we collect personal and structural data to compile quotations and execute legal cadastral surveys. This includes:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Identity & Contact Details:</strong> Name, physical address, company registration, VAT numbers, phone numbers, and email.</li>
            <li><strong>Geographic & Land Data:</strong> Title deed diagrams, sectional plan coordinates, SG numbers, boundary pegs, and physical site measurements.</li>
            <li><strong>Digital Imagery:</strong> High-resolution drone orthophotos, 3D laser-scan point clouds, and CAD structural layout files.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            2. Purpose of Data Processing
          </h2>
          <p>
            We process your information strictly to execute our physical geomatics mandates:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Preparing transparent, itemized quotation estimates based on terrain scale.</li>
            <li>Staking out gridlines and boundaries physically on active development sites.</li>
            <li>Drafting and lodging legal SG Diagrams and Sectional Title Plans with the provincial Surveyor-General Office.</li>
            <li>Maintaining professional records as demanded by the South African Geomatics Council (SAGC).</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            3. Protection and Security
          </h2>
          <p>
            Your proprietary CAD drawings and point clouds are kept in our secure, encrypted digital vault. Only registered geomatics specialists and administrators directly assigned to your linear project have permission to access files. We utilize firewalled local servers and secure cloud databases with multi-factor authentication.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            4. Third-Party Sharing (Statutory Exception)
          </h2>
          <p>
            We do not sell, rent, or trade your data. Your data is only shared with statutory bodies required to register your land rights, specifically:
          </p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>The Office of the Surveyor-General (SG) for legal pegging approvals.</li>
            <li>The South African Deeds Registry for property title transfers and servitude registration.</li>
            <li>Local metropolitan planning departments for zoning and subdivision consent certificates.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            5. Your POPIA Rights
          </h2>
          <p>
            Under POPIA, you have the right to request access to any personal or land record we hold in our archives, request correction of inaccurate property details, or ask us to erase your personal contact details from our active quotation newsletter lists. For queries, contact our Information Officer, Johan van der Merwe, at <a href="mailto:capetown@surplan.co.za" className="text-blue-600 hover:underline">capetown@surplan.co.za</a>.
          </p>
        </section>

        <div className="pt-6 border-t border-gray-100">
          <a
            href="#/"
            className="inline-flex items-center space-x-1.5 font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Return to Homepage</span>
          </a>
        </div>

      </main>

    </div>
  );
}
