/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, MapPin, Building2, Calendar, Cpu, Compass, HardHat, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/projects';
import { services } from '../data/services';

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const activeProject = projects.find((p) => p.id === projectId) || projects[0];

  // Get service objects for this project
  const mappedServices = services.filter((s) =>
    activeProject.relatedServices.includes(s.id)
  );

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Breadcrumbs */}
      <div className="bg-slate-100 py-3 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs text-gray-500 flex items-center space-x-2">
          <a href="#/projects" className="hover:text-blue-600 transition-colors flex items-center">
            <ArrowLeft className="h-3 w-3 mr-1" />
            <span>All Projects</span>
          </a>
          <span>/</span>
          <span className="text-gray-800 font-bold">{activeProject.title}</span>
        </div>
      </div>

      {/* 2. Project Hero Section */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
            {activeProject.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white max-w-4xl">
            {activeProject.title}
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-slate-300 pt-2 font-mono">
            <span className="flex items-center">
              <MapPin className="h-4 w-4 mr-1.5 text-blue-400" />
              {activeProject.location}
            </span>
            <span className="flex items-center">
              <Building2 className="h-4 w-4 mr-1.5 text-blue-400" />
              Client: {activeProject.client}
            </span>
            <span className="flex items-center">
              <Calendar className="h-4 w-4 mr-1.5 text-blue-400" />
              Year: {activeProject.year}
            </span>
          </div>
        </div>
      </section>

      {/* 3. Main Specification Body */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Detail & Case narratives */}
        <div className="lg:col-span-8 space-y-10">
          
          {/* Main Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-md h-64 sm:h-[450px]">
            <img
              src={activeProject.images[0]}
              alt={activeProject.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Overview */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-gray-950 border-b border-gray-100 pb-2">
              Project Case Overview
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed">
              {activeProject.overview}
            </p>
          </div>

          {/* Side-by-Side: Challenges vs Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div className="p-6 bg-amber-50/50 border border-amber-100 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-amber-900 flex items-center space-x-2">
                <HardHat className="h-5 w-5 text-amber-600 shrink-0" />
                <span>Operational Challenge</span>
              </h3>
              <p className="text-xs text-amber-900/90 leading-relaxed">
                {activeProject.challenges}
              </p>
            </div>

            <div className="p-6 bg-green-50/50 border border-green-100 rounded-2xl space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-green-900 flex items-center space-x-2">
                <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0" />
                <span>Geomatics Solution</span>
              </h3>
              <p className="text-xs text-green-900/90 leading-relaxed">
                {activeProject.solutions}
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          {activeProject.images.length > 1 && (
            <div className="space-y-4 pt-4">
              <h3 className="text-xl font-bold font-sans text-gray-950 border-b border-gray-100 pb-2">
                Field Imagery & Scanning Records
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {activeProject.images.slice(1).map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden h-40 sm:h-52 bg-slate-100">
                    <img
                      src={img}
                      alt={`Gallery view ${i + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right Side: Sidebar tech specs & related links */}
        <div className="lg:col-span-4 space-y-8">
          
          {/* Tech Spec Box */}
          <div className="bg-slate-50 border border-gray-100 p-6 rounded-2xl space-y-6">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest border-b border-gray-200 pb-3">
              Geomatics Deployment Specs
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3 text-xs">
                <Cpu className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Technology & Instruments:</p>
                  <div className="flex flex-wrap gap-1 mt-1.5">
                    {activeProject.technology.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white border border-gray-100 text-gray-600 font-mono text-[9px] rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-3 text-xs border-t border-gray-100 pt-4">
                <Compass className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-gray-900">Related Capabilities:</p>
                  <div className="space-y-1.5 mt-2">
                    {mappedServices.map((s) => (
                      <a
                        key={s.id}
                        href={`#/services/${s.id}`}
                        className="block text-blue-600 hover:underline text-[11px] font-medium"
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick contact trigger */}
          <div className="bg-slate-950 text-white p-6 rounded-2xl space-y-4 text-center">
            <h4 className="font-bold text-sm">Require similar accuracy?</h4>
            <p className="text-xs text-slate-400 leading-normal">
              Our registered land surveyors operate nationwide. We can provide comparative geomatics advice for your project.
            </p>
            <a
              href="#/contact"
              className="block py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded-lg transition-colors"
            >
              Consult On This Project
            </a>
          </div>

        </div>

      </section>

    </div>
  );
}
