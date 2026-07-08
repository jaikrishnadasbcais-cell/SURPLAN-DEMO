/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, MapPin, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { offices } from '../data/offices';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-editorial-navy text-slate-300 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Registrations */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-2xl font-bold tracking-tight text-white flex items-center font-display space-x-2">
                <div className="w-6 h-6 bg-editorial-sky flex items-center justify-center text-editorial-navy font-bold text-sm">S</div>
                <span>SURPLAN</span>
              </span>
              <p className="text-xs font-mono tracking-widest text-editorial-sky/65 uppercase mt-2">
                Surveying & Geomatics Consultancy
              </p>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              Established South African geomatics consultancy delivering millimetre-accurate spatial surveys, cadastral boundary lodging, and 3D digital-twin engineering for national infrastructure projects since 1988.
            </p>

            {/* Compliance Badge */}
            <div className="p-4 bg-slate-900/60 rounded-none border border-slate-800/80 flex items-start space-x-3">
              <ShieldCheck className="h-6 w-6 text-editorial-sky shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold text-white uppercase tracking-wider">SAGC Registered</p>
                <p className="text-[10px] text-slate-400 leading-normal mt-0.5">
                  All property and cadastral services are supervised by registered Professional Land Surveyors in strict compliance with the Geomatics Profession Act 19 of 2013.
                </p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Corporate
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#/about" className="hover:text-white hover:underline transition-colors">About Our Legacy</a>
              </li>
              <li>
                <a href="#/services" className="hover:text-white hover:underline transition-colors">Geomatics Services</a>
              </li>
              <li>
                <a href="#/projects" className="hover:text-white hover:underline transition-colors">Project Portfolio</a>
              </li>
              <li>
                <a href="#/industries" className="hover:text-white hover:underline transition-colors">Sectors We Serve</a>
              </li>
              <li>
                <a href="#/team" className="hover:text-white hover:underline transition-colors">Professional Staff</a>
              </li>
              <li>
                <a href="#/careers" className="hover:text-white transition-colors flex items-center">
                  <span>Careers</span>
                  <span className="ml-1.5 px-1.5 py-0.5 bg-editorial-sky/20 text-editorial-sky rounded-none text-[9px] font-bold uppercase tracking-wider">
                    Hiring
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Regional Offices */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Regional Offices
            </h4>
            <div className="space-y-4 text-xs">
              {offices.map((off) => (
                <div key={off.city} className="space-y-1">
                  <p className="font-bold text-white">{off.name}</p>
                  <p className="text-slate-400 line-clamp-1 flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1 text-editorial-sky/60 shrink-0" />
                    <span>{off.address}</span>
                  </p>
                  <div className="flex space-x-4 text-slate-400">
                    <a href={`tel:${off.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-white flex items-center transition-colors">
                      <Phone className="h-3 w-3 mr-1 text-editorial-sky/60 shrink-0" />
                      <span>{off.phone}</span>
                    </a>
                    <a href={`mailto:${off.email}`} className="hover:text-white flex items-center transition-colors">
                      <Mail className="h-3 w-3 mr-1 text-editorial-sky/60 shrink-0" />
                      <span>{off.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Operational Hours */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest border-b border-slate-800 pb-2">
              Working Hours
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-start space-x-2">
                <Clock className="h-4 w-4 text-editorial-sky/60 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Office Hours</p>
                  <p className="text-slate-400 mt-0.5">Mon – Fri: 08:00 – 17:00</p>
                  <p className="text-slate-400">Weekends: Closed</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-2 pt-2">
                <Clock className="h-4 w-4 text-editorial-sky/60 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">Emergency Fieldwork</p>
                  <p className="text-slate-400 mt-0.5">Available on-call for active railway, dam deformation, and concrete pour schedules.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar for copy, licensing, legal links, and POPIA privacy notice */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <div className="text-center md:text-left space-y-1">
            <p>© {currentYear} Surplan Geomatics (Pty) Ltd. All Rights Reserved.</p>
            <p className="text-[10px] text-slate-600">
              Registered South African Company Reg. No. 1988/002495/07. VAT Reg No. 4010118352.
            </p>
          </div>
          
          <div className="flex space-x-6 text-[11px]">
            <a href="#/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy (POPIA compliant)
            </a>
            <a href="#/terms" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </a>
            <a href="#/contact" className="hover:text-slate-300 transition-colors">
              Site Map
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
