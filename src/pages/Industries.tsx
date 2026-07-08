/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Building2, Check, ArrowRight } from 'lucide-react';
import { industries } from '../data/industries';

export default function Industries() {
  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              Expertise Sectors
            </span>
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-white mt-1">
              Sectors We Serve
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Every industry has distinct spatial requirements, tolerances, and statutory obligations. Discover how we tailor our geomatics operations to secure your specific sector parameters.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Industries Listing Column Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-16">
        {industries.map((ind, index) => (
          <div
            key={ind.id}
            className={`bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden lg:grid lg:grid-cols-12 gap-0 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image section */}
            <div className={`lg:col-span-5 h-64 sm:h-80 lg:h-full min-h-[300px] relative ${
              index % 2 === 1 ? 'lg:order-last' : ''
            }`}>
              <img
                src={ind.image}
                alt={ind.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/15" />
            </div>

            {/* Content section */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="flex items-center space-x-3 text-blue-600">
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Building2 className="h-5 w-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider font-mono">Sector Overview</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-extrabold text-gray-900 font-sans tracking-tight">
                  {ind.name}
                </h2>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {ind.details}
                </p>
              </div>

              {/* Highlights checklist */}
              <div className="space-y-3 pt-2">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest font-mono">Specialised Operations Include:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {ind.highlights.map((high, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-gray-700">
                      <Check className="h-4 w-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{high}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex">
                <a
                  href="#/contact"
                  className="bg-slate-900 hover:bg-slate-950 text-white font-bold text-xs py-2.5 px-6 rounded-lg transition-all flex items-center space-x-1"
                >
                  <span>Consult {ind.name} Division</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

    </div>
  );
}
