/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { History, Target, Eye, Shield, Users, Award, Heart, CheckCircle2 } from 'lucide-react';
import { team } from '../data/team';

export default function About() {
  return (
    <div className="bg-white">
      
      {/* 1. Page Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              About Surplan
            </span>
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-white mt-2">
              Our Legacy, Mission & Commitment to Accuracy
            </h1>
            <p className="text-slate-400 mt-4 text-sm sm:text-base leading-relaxed">
              Founded in Cape Town in 1988, Surplan has spent over three decades establishing itself as a trusted partner in Southern African civil development and geomatics operations.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Company History & Legacy */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 text-blue-600">
              <History className="h-6 w-6" />
              <span className="text-xs font-bold uppercase tracking-wider font-mono">Our History</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans">
              Erecting the Beacons of South African Infrastructure
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              In 1988, professional land surveyor Johan van der Merwe established Surplan with a single total station and a commitment to helping municipalities navigate early coastal harbour expansions. As South Africa transitioned into a constitutional democracy, massive structural developments required a new class of agile, highly precise geomatics professionals.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We grew rapidly by investing in revolutionary tech—becoming early adopters of static GPS satellite networks in the 1990s, terrestrial laser scanning in the 2000s, and high-precision survey drones in the 2010s. Today, we manage six divisions staffed with SAGC-registered Land Surveyors, geomatics programmers, and GIS databases experts, operating across three regional hubs in Cape Town, Gauteng, and Durban.
            </p>
            <div className="p-4 bg-slate-50 border border-gray-100 rounded-xl flex items-start space-x-3">
              <Award className="h-6 w-6 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-gray-900">35+ Years of Certified Audited Survey Data</p>
                <p className="text-[11px] text-gray-500 mt-0.5 leading-relaxed">
                  Every map, coordinate, and diagram logged by Surplan has survived decades of legal scrutiny, deeds office registry audits, and municipal construction tolerances.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <img
              src="https://picsum.photos/seed/surplan-history/600/450"
              alt="Vintage optical theodolite and historic Cape Town harbor"
              className="rounded-2xl shadow-xl w-full object-cover h-[350px]"
              referrerPolicy="no-referrer"
            />
            {/* Overlay badge representing historical timeline */}
            <div className="absolute top-4 right-4 bg-blue-600 text-white py-2 px-4 rounded-lg font-mono font-bold text-xs shadow-md">
              Since 1988
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission, Vision & Values Panels */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Our Blueprint</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans">
              Mission, Vision & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-12 h-12 flex items-center justify-center">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-gray-900">Our Mission</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                To deliver ultimate spatial confidence. We translate complex engineering designs and legal land rights into precise, real-world measurements using advanced geomatics, minimizing construction risks and safeguarding capital infrastructure across South Africa.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-12 h-12 flex items-center justify-center">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-gray-900">Our Vision</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                To be the premier geomatics consultancy in Africa, recognized for combining absolute legal integrity with state-of-the-art 3D technology, forming the digital and physical framework for the continent’s next generation of smart cities and linear projects.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg w-12 h-12 flex items-center justify-center">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold font-sans text-gray-900">Our Core Values</h3>
              <ul className="space-y-2 text-xs text-gray-500">
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-1.5">•</span>
                  <span><strong>Mathematical Rigor:</strong> Zero tolerance for loose bounds.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-1.5">•</span>
                  <span><strong>Ethical Legality:</strong> Protection of public cadastral diagrams.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-1.5">•</span>
                  <span><strong>Field Safety First:</strong> Zero harm inside active mine and road sites.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-blue-600 mr-1.5">•</span>
                  <span><strong>Continuous Innovation:</strong> Early-adopters of LiDAR & AI algorithms.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional Registrations */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <img
              src="https://picsum.photos/seed/legal-deeds/600/400"
              alt="Professional Surveyor General legal lodgement map"
              className="rounded-2xl shadow-md w-full object-cover h-[300px]"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
              Compliance & Legislation
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans tracking-tight">
              South African Geomatics Council (SAGC) Registrations
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              In South Africa, the Geomatics Profession Act 19 of 2013 governs all boundary-defining operations. Our land surveyors are registered as **Professional Land Surveyors (Pr.L.S.)** and geomatics specialists. We are legal custodians of the cadastral record, certifying subdivisions and sectional titles.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700"><strong>SAGC Act 19 of 2013:</strong> Full professional accreditation & annual licensing.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700"><strong>SAGI Corporate Member:</strong> Active contributor to South African Geomatics Institute.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700"><strong>Sectional Title Act 95:</strong> Registered experts for sectional subdivisions.</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-gray-700"><strong>Mine Health & Safety Act:</strong> DMRE legal mine surveying credentials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Health & Safety / OHS Policy */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between lg:space-x-12">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center space-x-2 text-blue-400">
                <Shield className="h-5 w-5" />
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Zero Harm Policy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
                Health, Safety & Environmental Integrity
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Our surveyors work on high-risk active sites, including high-speed highways, active railway corridors, deep underground mines, and chemical refineries. We enforce strict OHS Act and MHSA compliance:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-2">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Full medical surveillance certifications for all field crews</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Site-specific Method Statements and Risk Assessments (HAZOP)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>SACAA licensed pilots and registered airworthiness certificates</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span>Active PPE Level 4 compliance (high-visibility, steel-cap, ear, face protection)</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-8 lg:mt-0 p-6 bg-slate-950 rounded-xl border border-slate-800 text-center space-y-2 lg:shrink-0 lg:w-80">
              <p className="text-3xl font-black text-blue-500 font-mono">10,000+</p>
              <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">Field Hours with Zero LTI</p>
              <p className="text-xs text-slate-400">Continuous commitment to accident-free geomatics operations on active infrastructure sites.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Community Involvement & Culture */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="max-w-3xl space-y-4">
          <div className="flex items-center space-x-2 text-blue-600">
            <Heart className="h-5 w-5" />
            <span className="text-xs font-bold uppercase tracking-wider font-mono">Giving Back</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 font-sans tracking-tight">
            Nurturing South Africa's Geomatics Talents
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            As a legacy South African firm, Surplan believes in creating opportunities for the next generation of land surveyors. We partner closely with the **University of Cape Town (UCT)**, **University of Pretoria (UP)**, and **Durban University of Technology (DUT)**:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">Bursary Support</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We fund annual geomatics student bursaries, prioritizing previously disadvantaged applicants who exhibit academic excellence in mathematical sciences.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">Practical Internship Weeks</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every June and December, we host geomatics undergraduates at our Cape Town and Sandton offices, introducing them to high-precision robotic tracking and drone point-cloud registers.
            </p>
          </div>
          <div className="bg-slate-50 p-6 rounded-xl border border-gray-100 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">Rural Land Auditing Pro Bono</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              We offer pro bono boundary dispute resolution and historical maps auditing for rural communities and historical trusts, protecting agricultural heritage properties.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
