/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, ShieldCheck, X, Award, ChevronRight } from 'lucide-react';
import { team } from '../data/team';
import { TeamMember } from '../types';

export default function Team() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              Professional Staff
            </span>
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-white mt-1">
              Our Leadership & Geomatics Specialists
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Our team consists of highly specialized, SAGC-registered Professional Land Surveyors, digital-twin experts, and GIS systems designers dedicated to maintaining absolute legal and structural rigor on site.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Team Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Photo with overlay */}
                <div className="relative h-64 bg-slate-100 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {member.registrationNumber && (
                    <div className="absolute bottom-4 left-4 bg-slate-900/95 text-white text-[9px] font-mono tracking-widest uppercase px-2.5 py-1 rounded border border-slate-700">
                      SAGC Reg: {member.registrationNumber}
                    </div>
                  )}
                </div>

                {/* Info block */}
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="font-extrabold text-gray-950 text-base sm:text-lg font-sans">
                      {member.name}
                    </h3>
                    <p className="text-xs text-blue-600 font-bold tracking-tight">
                      {member.role}
                    </p>
                    <p className="text-[10px] text-gray-400 mt-1 font-mono">
                      {member.qualifications}
                    </p>
                  </div>
                  
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Action bar */}
              <div className="px-6 pb-6 pt-2 flex justify-between items-center border-t border-gray-50 mt-2">
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-400 hover:text-blue-600 transition-colors flex items-center space-x-1"
                >
                  <Mail className="h-4 w-4" />
                  <span className="text-[10px] font-mono">{member.email}</span>
                </a>

                <button
                  onClick={() => setSelectedMember(member)}
                  className="px-3 py-1.5 bg-blue-50 hover:bg-blue-600 text-blue-700 hover:text-white rounded text-[11px] font-bold transition-all flex items-center"
                >
                  <span>Read Profile</span>
                  <ChevronRight className="h-3 w-3 ml-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SAGC Ethics & Professional Statement */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm flex flex-col md:flex-row items-center gap-6">
          <div className="p-4 bg-blue-50 rounded-xl text-blue-600 shrink-0">
            <ShieldCheck className="h-10 w-10" />
          </div>
          <div className="space-y-2">
            <h4 className="font-sans font-bold text-gray-900 text-sm sm:text-base">
              SAGC Professional Code of Conduct compliance
            </h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              As registered members of the South African Geomatics Council, we commit to the highest ethical and professional standards. We maintain complete professional indemnity insurance (up to R10,000,000) safeguarding all client subdivisions, topographical models, and heavy structural grid alignments.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Interactive Bio Modal Popup */}
      {selectedMember && (
        <div className="fixed inset-0 z-50 bg-slate-950/75 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full shadow-2xl overflow-hidden border border-gray-100 relative animate-fade-in">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 p-2 bg-slate-900/10 hover:bg-slate-900/20 text-slate-700 hover:text-slate-950 rounded-full transition-all cursor-pointer z-10"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Profile Content */}
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <img
                  src={selectedMember.image}
                  alt={selectedMember.name}
                  className="w-24 h-24 rounded-2xl object-cover shadow border"
                  referrerPolicy="no-referrer"
                />
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="text-xl font-bold text-gray-900 font-sans">{selectedMember.name}</h3>
                  <p className="text-xs font-bold text-blue-600">{selectedMember.role}</p>
                  <p className="text-[11px] text-gray-400 font-mono">{selectedMember.qualifications}</p>
                  {selectedMember.registrationNumber && (
                    <span className="inline-block mt-2 px-2 py-0.5 bg-slate-100 border border-gray-200 text-gray-600 text-[10px] font-mono rounded">
                      SAGC Reg: {selectedMember.registrationNumber}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest flex items-center space-x-1.5">
                  <Award className="h-4 w-4 text-blue-600" />
                  <span>Professional Bio & Track Record</span>
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {selectedMember.bio}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-[10px] text-gray-400">Direct Contact:</span>
                <a
                  href={`mailto:${selectedMember.email}`}
                  className="text-xs font-bold text-blue-600 hover:underline flex items-center space-x-1"
                >
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>{selectedMember.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
