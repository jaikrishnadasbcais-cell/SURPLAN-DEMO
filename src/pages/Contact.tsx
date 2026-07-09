/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Navigation, Compass } from 'lucide-react';
import { offices } from '../data/offices';

export default function Contact() {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('General Enquiry');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSubmitted(true);
  };

  const activeOffice = offices[0];

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 1. Page Header */}
      <section className="bg-slate-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/10 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center lg:text-left">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest font-mono">
              Contact Us
            </span>
            <h1 className="text-4xl font-extrabold font-sans tracking-tight text-white mt-1">
              Start Your Geomatics Consultation
            </h1>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Have an upcoming civil project, subdivision, or legal boundary dispute? Our land surveyors and digital photogrammetry technicians are ready to supply competitive, itemized fee quotes.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Side: Office details & Geographic SVG map */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-bold font-sans text-gray-900 tracking-tight">
              Our Office
            </h2>
            <p className="text-gray-500 text-xs">
              Visit us or reach out using the street directions, phone connections, and coordinates below.
            </p>
          </div>

          {/* Office specifications detail */}
          <div className="bg-slate-50 rounded-2xl p-6 border border-gray-100 space-y-4 text-xs">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900">Physical Address</p>
                <p className="text-gray-600 mt-1">{activeOffice.address}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3 border-t border-gray-100 pt-4">
              <Phone className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900">Telephone Connections</p>
                <a href={`tel:${activeOffice.phone}`} className="text-blue-600 hover:underline mt-1 block">
                  {activeOffice.phone}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 border-t border-gray-100 pt-4">
              <Mail className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900">E-mail Address</p>
                <a href={`mailto:${activeOffice.email}`} className="text-blue-600 hover:underline mt-1 block">
                  {activeOffice.email}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-3 border-t border-gray-100 pt-4">
              <Clock className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-gray-900">Operating Hours</p>
                <p className="text-gray-600 mt-1">{activeOffice.hours}</p>
              </div>
            </div>
          </div>

          {/* Geographic SVG Map */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 text-center space-y-4">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span className="font-mono">South African Hub Navigation</span>
              <span className="font-mono text-blue-400 text-[10px] uppercase">Geolocation</span>
            </div>

            {/* Simulated Custom Vector Map of South Africa */}
            <div className="relative w-full aspect-[4/3] bg-slate-950 border border-slate-800 rounded-xl overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]" />

              <svg className="w-full h-full max-h-[220px]" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Simulated South Africa Border Contour */}
                <path d="M50,150 L100,50 L200,60 L280,30 L350,90 L380,180 L320,240 L220,280 L120,260 L60,200 Z" fill="rgba(37, 99, 235, 0.05)" stroke="rgba(37, 99, 235, 0.2)" strokeWidth="2" strokeDasharray="4 4" />

                {/* Eastern Cape Marker (Gqeberha / Port Elizabeth HQ) */}
                <g>
                  <circle cx="270" cy="210" r="12" fill="rgba(37, 99, 235, 0.3)" className="animate-ping" />
                  <circle cx="270" cy="210" r="6" fill="#2563eb" />
                  <text x="282" y="214" fill="#ffffff" fontSize="10" fontWeight="bold">Gqeberha HQ</text>
                </g>
              </svg>

              <div className="absolute bottom-3 left-3 bg-slate-900/95 text-slate-400 text-[10px] px-2 py-1 rounded border border-slate-800">
                Lat: {activeOffice.coordinates.lat} • Lng: {activeOffice.coordinates.lng}
              </div>
            </div>
            <p className="text-[11px] text-slate-400">
              Prisms and benchmarks are tied into the South African Hartebeesthoek94 (WGS84) Geodetic Reference Frame.
            </p>
          </div>
        </div>

        {/* Right Side: Message submission form */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xl">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold font-sans text-gray-950 tracking-tight">
                  Enquiry Submission Portal
                </h3>
                <p className="text-gray-500 text-xs">
                  Fill out the fields below. Annatjie Botha will route your message to the relevant managing surveyor on our team.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sipho Nkosi"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. company@developer.co.za"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Contact Telephone</label>
                  <input
                    type="tel"
                    placeholder="e.g. +27 (0) 82 123 4567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Enquiry Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <option value="General Enquiry">General Corporate Enquiry</option>
                    <option value="Quotation Request">Request Detailed Fee Quote</option>
                    <option value="Tenders Desk">Submit Tender Documentation / RFP</option>
                    <option value="Subdivisions">Subdivision & Sectional Titles</option>
                    <option value="Mining Surveys">Mining Volumetric Audits</option>
                    <option value="Careers">Employment Opportunities</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Project Brief / Message</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Provide brief details about the property location, size (hectares), and target geomatics output (e.g. contours, CAD drawing, Surveyor-General Diagram lodging)."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-xs sm:text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all cursor-pointer shadow hover:shadow-lg"
              >
                <Send className="h-4 w-4" />
                <span>Submit Secure Message</span>
              </button>
            </form>
          ) : (
            <div className="p-8 text-center space-y-6">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto" />
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-gray-950 font-sans">Message Transmitted!</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Thank you, <strong>{name}</strong>. Your enquiry for <strong>{subject}</strong> has been received by our security framework and logged into our POPIA-compliant client queue.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Our regional coordinator, Annatjie Botha, will route this message to our Managing Director or professional surveyors. We will respond with an official letterhead reply within 4 business hours.
                </p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                }}
                className="px-6 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-xs font-bold transition-all"
              >
                Send Another Message
              </button>
            </div>
          )}
        </div>

      </section>

    </div>
  );
}
