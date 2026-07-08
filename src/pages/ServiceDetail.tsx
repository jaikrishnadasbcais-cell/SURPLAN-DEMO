/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ChevronRight, ArrowLeft, Check, Compass, Workflow, ShieldAlert, Award, FileText } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';

interface ServiceDetailProps {
  serviceId: string;
}

export default function ServiceDetail({ serviceId }: ServiceDetailProps) {
  const activeService = services.find((s) => s.id === serviceId) || services[0];

  // Get related projects
  const relatedProjects = projects.filter((p) =>
    p.relatedServices.includes(activeService.id)
  );

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Back link & Breadcrumbs */}
      <div className="bg-slate-100 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center space-x-2">
          <a href="#/services" className="hover:text-blue-600 transition-colors flex items-center">
            <ArrowLeft className="h-3 w-3 mr-1" />
            <span>All Services</span>
          </a>
          <span>/</span>
          <span className="text-gray-800 font-bold">{activeService.title}</span>
        </div>
      </div>

      {/* 2. Service Layout Grid (Sidebar + Main Content) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Sidebar: Quick-switch lists */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="bg-slate-50 border border-gray-100 p-6 rounded-2xl">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-gray-200 pb-3 mb-4">
              Geomatics Divisions
            </h3>
            <div className="space-y-1">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#/services/${s.id}`}
                  className={`block px-4 py-2.5 text-xs font-bold rounded-lg text-left transition-colors ${
                    s.id === activeService.id
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-white hover:text-slate-900 hover:shadow-xs'
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </div>

          <div className="p-6 bg-slate-950 text-white rounded-2xl space-y-4">
            <Compass className="h-8 w-8 text-blue-400 animate-spin-slow" />
            <h4 className="text-sm font-bold font-sans">Have a custom tender?</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              We regularly respond to private and municipal geomatics requests for proposal. Send your RFPs directly to our administration office.
            </p>
            <a
              href="#/contact"
              className="block text-center py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded transition-colors"
            >
              Contact Tenders Desk
            </a>
          </div>
        </aside>

        {/* Right Main Content Block */}
        <main className="lg:col-span-9 space-y-10">
          
          {/* Header Banner */}
          <div className="space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
              Service Specification
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 font-sans tracking-tight">
              {activeService.title}
            </h1>
            
            <div className="relative h-64 sm:h-96 rounded-2xl overflow-hidden shadow-md">
              <img
                src={activeService.image}
                alt={activeService.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-950/20" />
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-gray-950 border-b border-gray-100 pb-2">
              Division Overview
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {activeService.longDescription}
            </p>
          </div>

          {/* Grid for Applications & Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            {/* Applications */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100/50 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center space-x-2">
                <Workflow className="h-5 w-5 text-blue-600" />
                <span>Scope & Applications</span>
              </h3>
              <ul className="space-y-3">
                {activeService.applications.map((app, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start">
                    <span className="text-blue-500 font-bold mr-2">•</span>
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-slate-50 p-6 rounded-2xl border border-gray-100/50 space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center space-x-2">
                <Award className="h-5 w-5 text-blue-600" />
                <span>Quality Assurances & Benefits</span>
              </h3>
              <ul className="space-y-3">
                {activeService.benefits.map((ben, i) => (
                  <li key={i} className="text-xs text-gray-600 flex items-start">
                    <Check className="h-4 w-4 text-green-600 shrink-0 mr-2 mt-0.5" />
                    <span>{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Core Fieldwork Process */}
          <div className="space-y-6 pt-4">
            <h2 className="text-xl font-bold font-sans text-gray-950 border-b border-gray-100 pb-2">
              Methodology & Execution Process
            </h2>
            <div className="relative pl-6 border-l-2 border-blue-500 space-y-8">
              {activeService.process.map((step, i) => (
                <div key={i} className="relative">
                  {/* Circle Marker */}
                  <div className="absolute -left-[31px] top-0.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow" />
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">
                      Phase 0{i + 1}: {step.split(' ')[0] === 'Initial' || step.split(' ')[0] === 'Desktop' || step.split(' ')[0] === 'Establishment' || step.split(' ')[0] === 'Safety' ? step.split(' and ')[0] : 'Data Collection'}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                      {step}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Related Case Studies */}
          {relatedProjects.length > 0 && (
            <div className="space-y-6 pt-6 border-t border-gray-100">
              <h2 className="text-xl font-bold font-sans text-gray-950">
                Related Project Deployments
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {relatedProjects.map((proj) => (
                  <div key={proj.id} className="border border-gray-100 rounded-xl overflow-hidden hover:shadow-md transition-all flex flex-col justify-between">
                    <div>
                      <img
                        src={proj.images[0]}
                        alt={proj.title}
                        className="w-full h-40 object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="p-4 space-y-2">
                        <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wide">
                          {proj.province}
                        </span>
                        <h4 className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-1">
                          {proj.title}
                        </h4>
                        <p className="text-gray-500 text-[11px] line-clamp-2">
                          {proj.overview}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 pt-0">
                      <a
                        href={`#/projects/${proj.id}`}
                        className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        <span>Analyze case study</span>
                        <ChevronRight className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Action */}
          <div className="bg-slate-50 rounded-2xl p-8 border border-gray-100 text-center space-y-4">
            <h3 className="font-bold text-gray-950 text-lg">Require a {activeService.title} for your site?</h3>
            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              Our registered Land Surveyors can prepare a site-specific method statement and cost proposal suited to your municipal zoning or construction schedule.
            </p>
            <div className="flex justify-center space-x-3 pt-2">
              <a
                href="#/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-2.5 px-6 rounded-lg transition-all"
              >
                Request Quotation
              </a>
              <a
                href="#/home"
                className="bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 font-bold text-xs py-2.5 px-6 rounded-lg transition-all"
              >
                Estimate Cost
              </a>
            </div>
          </div>

        </main>
      </div>

    </div>
  );
}
