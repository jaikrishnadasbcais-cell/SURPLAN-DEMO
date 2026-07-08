/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* Header */}
      <section className="bg-slate-950 text-white py-12 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest">
            Service Contracts
          </span>
          <h1 className="text-3xl font-extrabold font-sans tracking-tight mt-1">
            Terms & Conditions
          </h1>
          <p className="text-slate-400 text-xs mt-2">
            Effective Date: July 8, 2026 • Last Updated: July 8, 2026
          </p>
        </div>
      </section>

      {/* Narrative */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-8 text-xs sm:text-sm text-gray-600 leading-relaxed">
        
        <div className="p-4 bg-slate-50 border border-gray-100 rounded-xl flex items-start space-x-3 text-xs text-gray-700 leading-normal">
          <FileText className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
          <p>
            These terms govern the use of our website, dynamic budget calculators, and the general framework under which Surplan executes geomatics, surveying, and Surveyor-General lodgement contracts.
          </p>
        </div>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            1. Site Access Requirements
          </h2>
          <p>
            For all physical fieldwork (topographical, construction, cadastral), the client is legally responsible for granting our survey crews unobstructed and safe access to the land parcel. This includes coordinating keys, gate access with security committees, or obtaining neighbor permission for boundary peg inspections.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            2. Payment Milestones
          </h2>
          <p>
            Standard corporate contracts require a <strong>50% mobilization deposit</strong> before fieldwork begins. The remaining 50% balance is invoiced upon delivery of CAD files, point clouds, or prior to final submission to the Surveyor-General office for peg approval.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            3. Accuracy and Scope Limits
          </h2>
          <p>
            While Surplan employs millimetre-accurate robotic tracking, geomatics readings can be affected by active heavy site vibrations, earthworks settling, and dense vegetation. If actual terrain conditions differ significantly from those selected in the digital Quote Calculator, we reserve the right to revise the final billing fee based on actual hours logged.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            4. Municipal and SG Delays
          </h2>
          <p>
            Our land surveyors commit to submitting diagrams to the Surveyor-General (SG) portal within agreed-upon timelines. However, Surplan cannot be held liable for delayed registrations caused by municipal town planning committee backlogs, deeds registry shutdowns, or legislative changes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-bold text-gray-950 font-sans border-b border-gray-100 pb-2">
            5. Limitation of Liability
          </h2>
          <p>
            Surplan maintains extensive professional indemnity insurance up to **R10,000,000**. Our total liability for any claim arising from coordinate errors or delayed plans is strictly capped at the total fee paid for the geomatics contract in question.
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
