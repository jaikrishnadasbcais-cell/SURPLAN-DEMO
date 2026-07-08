/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FolderGit2, MapPin, Sliders, ChevronRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  const [provinceFilter, setProvinceFilter] = useState<string>('all');

  const provinces = [
    { id: 'all', label: 'All Provinces' },
    { id: 'Western Cape', label: 'Western Cape' },
    { id: 'Gauteng', label: 'Gauteng' },
    { id: 'KwaZulu-Natal', label: 'KwaZulu-Natal' },
    { id: 'Mpumalanga', label: 'Mpumalanga' },
    { id: 'Eastern Cape', label: 'Eastern Cape' }
  ];

  const filteredProjects = projects.filter((p) => {
    if (provinceFilter === 'all') return true;
    return p.province === provinceFilter;
  });

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              Infrastructure Portfolio
            </span>
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-white mt-1">
              South African Project Case Studies
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Explore how we translate complex land and engineering designs into concrete, physical reality, guaranteeing sub-millimetre alignment under rigorous field obstacles.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Interactive Province Filter */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 sm:p-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2 text-gray-800 shrink-0">
            <Sliders className="h-5 w-5 text-blue-600" />
            <span className="text-xs font-bold uppercase tracking-widest font-sans">Filter by Province</span>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {provinces.map((prov) => (
              <button
                key={prov.id}
                onClick={() => setProvinceFilter(prov.id)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  provinceFilter === prov.id
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                    : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {prov.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Projects Grid Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-blue-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-gray-200">
                    <img
                      src={p.images[0]}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/90 text-white text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 rounded backdrop-blur-sm border border-slate-700">
                      {p.province}
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">
                        {p.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 font-sans tracking-tight mt-1 line-clamp-2">
                        {p.title}
                      </h3>
                      <p className="text-[10px] text-gray-400 mt-1 font-mono">
                        Client: {p.client} • Year: {p.year}
                      </p>
                    </div>

                    <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                      {p.overview}
                    </p>

                    {/* Small tag checklist */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {p.technology.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-gray-100 text-gray-600 text-[9px] font-mono rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-2 border-t border-gray-50 bg-slate-50/50 flex justify-between items-center">
                  <span className="text-[10px] text-gray-400 font-medium">
                    {p.location.split(',')[0]}
                  </span>
                  <a
                    href={`#/projects/${p.id}`}
                    className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center"
                  >
                    <span>Full Case Review</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-100 p-12 text-center max-w-md mx-auto shadow-sm">
            <p className="text-gray-500 text-sm">No project found for the selected filter.</p>
          </div>
        )}
      </section>

    </div>
  );
}
