/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Briefcase, Send, CheckCircle2, MapPin, Award, Compass, Sparkles } from 'lucide-react';

interface Position {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  requirements: string[];
  description: string;
}

export default function Careers() {
  const [selectedRole, setSelectedRole] = useState<string>('');
  const [candidateName, setCandidateName] = useState('');
  const [candidateEmail, setCandidateEmail] = useState('');
  const [linkedinProfile, setLinkedinProfile] = useState('');
  const [isApplied, setIsApplied] = useState(false);

  const positions: Position[] = [
    {
      id: 'sr-surveyor',
      title: 'Senior Geomatics Land Surveyor (Pr.L.S.)',
      location: 'Cape Town Office',
      type: 'Full-time Permanent',
      department: 'Cadastral & Legal Subdivisions',
      description: 'We are seeking a SAGC-registered Professional Land Surveyor to oversee complex commercial subdivisions, township establishment diagrams, and Deeds Office liaison. You will supervise three junior surveyors-in-training.',
      requirements: [
        'BSc Geomatics or equivalent from an accredited institution',
        'Active registration with the South African Geomatics Council (SAGC) as a Pr.L.S.',
        'Minimum 5 years of post-registration cadastral and sectional title drafting experience',
        'Proficiency in Model Maker, Civil 3D, and municipal portal submissions'
      ]
    },
    {
      id: 'uav-pilot',
      title: 'Commercial UAV Pilot & Photogrammetry Specialist',
      location: 'Durban Office',
      type: 'Full-time Permanent',
      department: 'LiDAR & Aerial Spatial Data',
      description: 'Join our high-tech spatial division executing dense topographical corridor mapping, wind-farm micro-siting, and mining volumetric audits using modern vertical take-off UAV drones.',
      requirements: [
        'Valid SACAA Remote Pilot Licence (RPL) with multirotor/fixed-wing rating',
        'NDip in Surveying or Geomatics with solid understanding of Ground Control Points (GCPs)',
        '2+ years experience in photogrammetry processing (Pix4D, Pix4Dmatic, or Agisoft Metashape)',
        'Willingness to travel for regional mining projects'
      ]
    },
    {
      id: 'gis-analyst',
      title: 'Junior GIS Systems Developer',
      location: 'Johannesburg Office',
      type: 'Full-time / Trainee Program',
      department: 'GIS & Spatial Databases',
      description: 'We are looking for an analytical GIS systems designer to manage and integrate spatial database registries for our major municipal and utility asset mapping clients.',
      requirements: [
        'BSc Hons in Geographic Information Systems (GIS) or Spatial Sciences',
        'Strong knowledge of PostgreSQL/PostGIS, Python, and QGIS/ArcGIS Pro systems',
        'Familiarity with municipal valuation rolls or utility mapping attributes is advantageous',
        'Strong communication skills for presenting spatial queries to municipal engineers'
      ]
    }
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!candidateName || !candidateEmail || !selectedRole) return;
    setIsApplied(true);
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              Join Our Team
            </span>
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-white mt-1">
              Build a High-Precision Career
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              At Surplan, we believe in technical excellence, absolute accuracy, and fostering professional registrations. Work with state-of-the-art robotic systems, LiDAR scanning, and autonomous UAV aviation.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company Culture Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center space-x-2 text-blue-600">
            <Compass className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">Our Culture</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans tracking-tight">
            Nurturing Professional Growth with Advanced Tech
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            We don’t just hire operators—we cultivate registered geomatics leaders. Surplan provides comprehensive assistance for candidate surveyors completing their practical field portfolios and preparing for their SAGC board exams.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-gray-600">
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Paid SAGC/PLATO board examination and annual registration fees</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Work with premium Leica, Trimble, and DJI Enterprise equipment</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Full medical coverage and hazard bonuses for active site work</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
              <span>Flexible hybrid workspace for GIS analysts and CAD drawers</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <img
            src="https://picsum.photos/seed/surplan-office/500/350"
            alt="Surveyors discussing digital 3D scans in office"
            className="rounded-2xl shadow-md w-full object-cover h-[280px]"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* 3. Job Openings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 space-y-8">
        <h2 className="text-2xl font-extrabold text-gray-900 font-sans tracking-tight">
          Current Active Vacancies
        </h2>
        
        <div className="space-y-6">
          {positions.map((pos) => (
            <div
              key={pos.id}
              className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all space-y-6"
            >
              <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-gray-900 font-sans">{pos.title}</h3>
                  <div className="flex flex-wrap gap-4 text-xs text-slate-400 font-mono">
                    <span className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-slate-400" />
                      {pos.location}
                    </span>
                    <span>Department: {pos.department}</span>
                    <span>Type: {pos.type}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedRole(pos.title);
                    // scroll to application form smoothly
                    const element = document.getElementById('apply-form');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2 px-4 rounded transition-all shrink-0 cursor-pointer text-center"
                >
                  Apply For Role
                </button>
              </div>

              <div className="space-y-4 pt-4 border-t border-gray-50 text-xs sm:text-sm">
                <p className="text-gray-600 leading-relaxed">
                  {pos.description}
                </p>
                <div className="space-y-2">
                  <p className="font-bold text-gray-800">Position Requirements:</p>
                  <ul className="space-y-1.5 text-xs text-gray-500 pl-4 list-disc">
                    {pos.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Application Form Container */}
      <section id="apply-form" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="bg-slate-50 rounded-3xl p-8 border border-gray-100 shadow-sm">
          {!isApplied ? (
            <form onSubmit={handleApply} className="space-y-6">
              <div className="text-center space-y-2">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold font-sans text-gray-950">Express Your Interest</h3>
                <p className="text-gray-500 text-xs">
                  Upload your LinkedIn profile details below for a preliminary culture fit assessment.
                </p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-2">Select Vacancy</label>
                  <select
                    required
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm"
                  >
                    <option value="">-- Choose Position --</option>
                    {positions.map(p => (
                      <option key={p.id} value={p.title}>{p.title}</option>
                    ))}
                    <option value="General Application">General Candidate Registration (Speculative)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sipho Dlamini"
                      value={candidateName}
                      onChange={(e) => setCandidateName(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 uppercase mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. sipho@gmail.com"
                      value={candidateEmail}
                      onChange={(e) => setCandidateEmail(e.target.value)}
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 uppercase mb-2">LinkedIn Profile URL</label>
                  <input
                    type="url"
                    required
                    placeholder="e.g. https://linkedin.com/in/yourprofile"
                    value={linkedinProfile}
                    onChange={(e) => setLinkedinProfile(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 text-xs sm:text-sm"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all cursor-pointer shadow hover:shadow-md"
              >
                <Send className="h-4 w-4" />
                <span>Submit Candidate Interest</span>
              </button>
            </form>
          ) : (
            <div className="p-6 text-center space-y-4">
              <CheckCircle2 className="h-16 w-16 text-green-600 mx-auto" />
              <h3 className="text-xl font-bold text-gray-950 font-sans">Application Received!</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Thank you, <strong>{candidateName}</strong>. Your express interest in the <strong>{selectedRole}</strong> position has been safely registered in our HR database.
              </p>
              <p className="text-[11px] text-gray-400">
                Annatjie Botha and our recruitment committee will review your profile and match it to our pending geomatics projects. We will reach out within 5 working days.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsApplied(false);
                  setCandidateName('');
                  setCandidateEmail('');
                  setLinkedinProfile('');
                }}
                className="text-xs text-blue-600 font-bold underline block mx-auto pt-2"
              >
                Register For Another Role
              </button>
            </div>
          )}
        </div>
      </section>

    </div>
  );
}
