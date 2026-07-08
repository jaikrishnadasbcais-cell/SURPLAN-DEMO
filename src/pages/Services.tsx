/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Sparkles, Sliders, ChevronRight, FileDown, ArrowRight } from 'lucide-react';
import { services } from '../data/services';

export default function Services() {
  const [filter, setFilter] = useState<'all' | 'engineering' | 'spatial' | 'cadastral'>('all');

  const categories = [
    { id: 'all', label: 'All Geomatics Divisions' },
    { id: 'engineering', label: 'Engineering & Construction' },
    { id: 'spatial', label: 'LiDAR, UAV & Spatial GIS' },
    { id: 'cadastral', label: 'Cadastral & Legal Boundary' }
  ];

  const filteredServices = services.filter((srv) => {
    if (filter === 'all') return true;
    return srv.category === filter;
  });

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              Geomatics Portfolio
            </span>
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-white mt-1">
              Professional Surveying & Mapping Solutions
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We leverage robotic total stations, aerial LiDAR, and registered Surveyor-General procedures to deliver high-integrity maps and site parameters for South African property and engineering sectors.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Discipline Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-gray-800 shrink-0">
            <Sliders className="h-5 w-5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest font-sans">Filter Capabilities</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id as any)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  filter === cat.id
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Comprehensive Service Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((srv) => (
            <div
              key={srv.id}
              className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute bottom-4 left-4 text-[10px] font-bold font-mono uppercase tracking-widest text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                    {srv.category === 'engineering' ? 'Engineering / Site' : srv.category === 'spatial' ? 'LiDAR / Drone / GIS' : 'Legal Property'}
                  </span>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight group-hover:text-blue-600 transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    {srv.shortDescription}
                  </p>
                  
                  {/* Small bullet applications snippet */}
                  <div className="pt-2 border-t border-gray-50 space-y-1.5">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Primary Applications:</p>
                    {srv.applications.slice(0, 2).map((app, i) => (
                      <p key={i} className="text-[11px] text-gray-600 flex items-start">
                        <span className="text-blue-500 font-bold mr-1.5">•</span>
                        <span className="line-clamp-1">{app}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-2 border-t border-gray-50 bg-slate-50/50">
                <a
                  href={`#/services/${srv.id}`}
                  className="w-full text-center py-2.5 bg-white hover:bg-blue-600 text-gray-700 hover:text-white border border-gray-100 hover:border-blue-600 rounded-lg text-xs font-bold transition-all flex items-center justify-center space-x-1"
                >
                  <span>Detailed Specifications</span>
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Capabilities Brochure Downloads */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden lg:flex lg:items-center lg:justify-between lg:space-x-12">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent pointer-events-none" />
          
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">Documentation</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans tracking-tight">
              Download Our Corporate Capability Statement
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Need to present Surplan’s credentials to your procurement board or project directors? Download our comprehensive 24-page capability brochure detailing our equipment inventory, SACAA drone licenses, indemnity insurance certificates, and client history.
            </p>
          </div>

          <div className="mt-8 lg:mt-0 relative z-10 shrink-0 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => alert('Corporate Capability statement PDF is initiating download in background. (Concept Simulation)')}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 px-6 rounded-xl flex items-center justify-center space-x-2 shadow shadow-blue-500/10 cursor-pointer"
            >
              <FileDown className="h-4 w-4" />
              <span>Download Company PDF</span>
            </button>
            <a
              href="#/contact"
              className="bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs py-3.5 px-6 rounded-xl border border-slate-800 hover:border-slate-700 text-center flex items-center justify-center space-x-1"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
