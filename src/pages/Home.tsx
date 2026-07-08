/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, Star, Compass, Award, Building2, MapPin, CheckCircle, Quote, Users, Layers, ShieldCheck } from 'lucide-react';
import { services } from '../data/services';
import { projects } from '../data/projects';
import { industries } from '../data/industries';
import InteractiveQuoteCalculator from '../components/InteractiveQuoteCalculator';

export default function Home() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Take 4 key services to highlight on the landing page
  const featuredServices = services.slice(0, 4);
  
  // Take first 3 projects
  const featuredProjects = projects.slice(0, 3);

  const testimonials = [
    {
      quote: "Surplan delivered absolute mathematical precision during our critical 18-storey quay wall piling. Their robotic deformation telemetry alerted our site teams early, preventing a massive structural settling risk. Their SAGC land surveyors are top-tier.",
      author: "Dr. Andrew Ndlovu",
      role: "Chief Engineer",
      company: "Coastal Harbours Infrastructure Group"
    },
    {
      quote: "We partnered with Surplan for a complex 250-hectare subdivision. From deeds registry analysis to physical pegging and final Surveyor-General Diagram approval, the process was seamless and exceptionally professional.",
      author: "Theresa de Villiers",
      role: "Development Director",
      company: "Vanguard Property Holdings, Cape Town"
    },
    {
      quote: "Surplan's drone LiDAR surveying team completed volumetric audits of our bulk coal stockpiles in Mpumalanga in record time, safely complying with DMRE rules. The 3D models were high-fidelity.",
      author: "Mpho Mokoena",
      role: "Operations Manager",
      company: "Premier Platinum & Energy Res."
    }
  ];

  return (
    <div className="space-y-0 bg-editorial-bg text-editorial-charcoal">
      
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center bg-editorial-navy text-white overflow-hidden">
        {/* Full-width custom-generated image background with subtle dark overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/surplan_hero_project_1783524905114.jpg"
            alt="Surplan Civil Engineering Survey South Africa"
            className="w-full h-full object-cover object-center opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-editorial-navy via-editorial-navy/95 to-editorial-navy/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
          <div className="max-w-4xl space-y-8">
            <span className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-editorial-sky">
              <Compass className="h-4 w-4 animate-spin-slow text-editorial-sky" />
              <span>South African Geomatics Leadership</span>
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold font-sans tracking-tight text-white leading-[1.05]">
              Precision That <br />
              <span className="italic font-serif font-light text-editorial-sky">Shapes</span> South Africa's Future.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl border-l-4 border-editorial-sky pl-6">
              For over three decades, Surplan has delivered authoritative, millimetre-accurate land surveying, engineering geomatics, cadastral diagrams, and 3D digital-twins. We provide critical spatial intelligence that minimizes civil engineering risks.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#/contact"
                className="bg-editorial-sky text-editorial-navy font-bold text-xs uppercase tracking-widest px-8 py-4 hover:bg-white transition-all text-center flex items-center justify-center space-x-2 rounded-none"
              >
                <span>Request a Quotation</span>
                <ArrowRight className="h-4 w-4 text-editorial-navy" />
              </a>
              <a
                href="#/services"
                className="bg-transparent hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest px-8 py-4 border border-white/20 hover:border-white transition-all text-center rounded-none"
              >
                Explore Our Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust Bar */}
      <section className="bg-white border-y border-gray-100 py-10 relative z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-bold text-editorial-navy font-display">35+</p>
              <p className="text-[10px] font-bold text-editorial-slate uppercase tracking-widest">Years of Service</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-bold text-editorial-navy font-display">SAGC</p>
              <p className="text-[10px] font-bold text-editorial-slate uppercase tracking-widest">Licensed Land Surveyors</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-bold text-editorial-navy font-display">1,200+</p>
              <p className="text-[10px] font-bold text-editorial-slate uppercase tracking-widest">National Projects</p>
            </div>
            <div className="space-y-1">
              <p className="text-4xl sm:text-5xl font-bold text-editorial-navy font-display">3 Hubs</p>
              <p className="text-[10px] font-bold text-editorial-slate uppercase tracking-widest">Regional Corporate Offices</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. About Surplan Teaser */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visuals column */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 rounded-none overflow-hidden shadow-xl border border-gray-200">
                <img
                  src="/src/assets/images/surplan_field_survey_1783524922330.jpg"
                  alt="Surplan Land Surveyor in safety vest"
                  className="w-full h-[450px] object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Solid colored backdrop boxes to reinforce editorial layouts */}
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-editorial-bg border border-gray-200 z-0" />
              
              {/* Small floating badge */}
              <div className="absolute bottom-6 left-6 z-20 bg-editorial-navy text-white p-5 rounded-none shadow-lg border border-slate-800 flex items-center space-x-3 max-w-[250px]">
                <Award className="h-10 w-10 text-editorial-sky shrink-0" />
                <div>
                  <p className="text-xs font-bold font-sans tracking-wide">Established 1988</p>
                  <p className="text-[10px] text-slate-300 leading-normal mt-1">South African engineering & geomatics authority.</p>
                </div>
              </div>
            </div>

            {/* Description column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-editorial-sky uppercase tracking-widest bg-editorial-navy px-2 py-1">Our Legacy</span>
                <h2 className="text-3xl sm:text-5xl font-bold text-editorial-navy font-sans tracking-tight leading-tight">
                  Over Three Decades of Accurate, Authoritative Geomatics
                </h2>
              </div>
              <p className="text-editorial-slate text-sm sm:text-base leading-relaxed">
                Founded during a period of massive infrastructure growth, Surplan has evolved into one of South Africa’s leading geomatics consultancies. From early coastal harbour works to SANRAL highway expansions and deep underground platinum mining networks, our reputation is built on technical excellence, legal compliance, and long-term partnerships.
              </p>
              <p className="text-editorial-slate text-sm sm:text-base leading-relaxed border-l-4 border-editorial-sky pl-4">
                As registered Professional Land Surveyors under the South African Geomatics Council (SAGC), we bridge the gap between architectural blueprints and physical real-world site construction. We manage the entire legal cadastral boundary framework, protecting your capital investments and reducing project risk.
              </p>
              
              {/* Trust list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-editorial-sky shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-editorial-charcoal">PLATO & SAGC Registered Professionals</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-editorial-sky shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-editorial-charcoal">SACAA-Licensed Drone Aviation</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-editorial-sky shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-editorial-charcoal">BIM & Civil 3D CAD Deliverables</p>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-editorial-sky shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-editorial-charcoal">POPIA Compliant Client Data Vault</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="#/about"
                  className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-editorial-navy hover:text-editorial-sky transition-colors border-b border-editorial-navy pb-1"
                >
                  <span>Read Our Full Story & History</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Featured Services Grid */}
      <section className="py-24 bg-editorial-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-editorial-navy uppercase tracking-widest border border-editorial-navy/20 px-3 py-1">Our Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-editorial-navy font-sans tracking-tight">
              State-of-the-Art Geomatics Services
            </h2>
            <p className="text-editorial-slate text-sm sm:text-base">
              We operate across three core subdivisions: Engineering Surveys, Spatial & LiDAR Data, and Legal Cadastral Subdivisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {featuredServices.map((srv) => (
              <div key={srv.id} className="group bg-white rounded-none border border-gray-200 hover:border-editorial-sky hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between border-t-4 border-t-editorial-navy">
                <div>
                  <div className="relative h-48 overflow-hidden bg-gray-200">
                    <img
                      src={srv.image}
                      alt={srv.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-editorial-navy text-editorial-sky shadow-md">
                      <Compass className="h-5 w-5 animate-spin-slow" />
                    </div>
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-lg font-bold text-editorial-navy font-sans group-hover:text-editorial-sky transition-colors leading-snug">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-editorial-slate leading-relaxed line-clamp-3">
                      {srv.shortDescription}
                    </p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-2">
                  <a
                    href={`#/services/${srv.id}`}
                    className="w-full text-center py-3 px-4 bg-editorial-navy hover:bg-[#162a4a] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center space-x-1 rounded-none"
                  >
                    <span>Analyze Service</span>
                    <ArrowRight className="h-3 w-3 text-editorial-sky" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="#/services"
              className="inline-block bg-editorial-navy hover:bg-[#162a4a] text-white font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none shadow-md hover:shadow-lg transition-all"
            >
              Analyze All 10 Specialised Services
            </a>
          </div>
        </div>
      </section>

      {/* 5. Industries We Serve */}
      <section className="py-24 bg-editorial-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(135,206,235,0.08),transparent)] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-editorial-sky uppercase tracking-widest font-mono">Expertise Sectors</span>
            <h2 className="text-3xl sm:text-5xl font-bold font-sans tracking-tight">
              Sectors Relying on Surplan Geomatics
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Different industries demand specialized surveying strategies. We support the entire national economy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {industries.slice(0, 4).map((ind) => (
              <div key={ind.id} className="p-8 bg-[#0d213b] rounded-none border border-slate-800 hover:border-editorial-sky shadow-lg transition-all duration-300 flex flex-col justify-between border-t-2 border-t-editorial-sky">
                <div className="space-y-4">
                  <div className="p-3 bg-editorial-navy text-editorial-sky border border-slate-800 w-12 h-12 flex items-center justify-center rounded-none">
                    <Building2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold font-sans text-white">{ind.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {ind.description}
                  </p>
                </div>
                <div className="pt-6">
                  <a
                    href="#/industries"
                    className="text-xs font-bold uppercase tracking-widest text-editorial-sky hover:text-white flex items-center space-x-1"
                  >
                    <span>Sectors overview</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <a
              href="#/industries"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-editorial-sky hover:text-white transition-colors border-b border-editorial-sky pb-1"
            >
              <span>Explore how we support Municipalities, Mining, and Agriculture</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 6. Featured Case Study / Projects Slider */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-gray-100 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-bold text-editorial-sky uppercase tracking-widest bg-editorial-navy px-2 py-1">Case Studies</span>
              <h2 className="text-3xl sm:text-5xl font-bold text-editorial-navy font-sans tracking-tight">
                Engineering Projects Completed
              </h2>
            </div>
            <div className="flex space-x-2">
              {featuredProjects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveProjectIndex(idx)}
                  className={`w-3.5 h-3.5 rounded-none transition-all ${
                    activeProjectIndex === idx ? 'bg-editorial-navy w-10' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Active project card */}
          <div className="bg-editorial-bg rounded-none shadow-xl overflow-hidden border border-gray-200 lg:grid lg:grid-cols-12 gap-0">
            {/* Project Image Column */}
            <div className="lg:col-span-6 relative h-64 sm:h-96 lg:h-full min-h-[400px]">
              <img
                src={featuredProjects[activeProjectIndex].images[0]}
                alt={featuredProjects[activeProjectIndex].title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-editorial-navy text-white text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-none border border-slate-700">
                {featuredProjects[activeProjectIndex].province}
              </div>
            </div>

            {/* Project Content Column */}
            <div className="p-8 sm:p-12 lg:col-span-6 flex flex-col justify-between bg-white">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-bold text-editorial-sky uppercase tracking-wider bg-editorial-navy px-2 py-0.5">
                    {featuredProjects[activeProjectIndex].category}
                  </span>
                  <h3 className="text-xl sm:text-3xl font-bold text-editorial-navy font-sans tracking-tight mt-3 leading-snug">
                    {featuredProjects[activeProjectIndex].title}
                  </h3>
                  <p className="text-xs text-editorial-slate mt-2 font-mono">
                    Client: {featuredProjects[activeProjectIndex].client} • Year: {featuredProjects[activeProjectIndex].year}
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-editorial-slate">Project Overview</p>
                  <p className="text-editorial-charcoal text-sm leading-relaxed">
                    {featuredProjects[activeProjectIndex].overview}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-editorial-bg border border-gray-200 rounded-none border-l-4 border-l-editorial-navy">
                    <p className="text-[10px] font-bold text-editorial-slate uppercase tracking-wider">Key Challenge</p>
                    <p className="text-editorial-charcoal text-xs mt-1.5 leading-relaxed line-clamp-3">
                      {featuredProjects[activeProjectIndex].challenges}
                    </p>
                  </div>
                  <div className="p-4 bg-editorial-bg border border-gray-200 rounded-none border-l-4 border-l-editorial-sky">
                    <p className="text-[10px] font-bold text-editorial-navy uppercase tracking-wider">Geomatics Solution</p>
                    <p className="text-editorial-charcoal text-xs mt-1.5 leading-relaxed line-clamp-3">
                      {featuredProjects[activeProjectIndex].solutions}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start">
                  {featuredProjects[activeProjectIndex].technology.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-editorial-bg text-editorial-slate text-[9px] font-mono rounded-none border border-gray-200">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={`#/projects/${featuredProjects[activeProjectIndex].id}`}
                  className="px-6 py-3.5 bg-editorial-navy hover:bg-[#162a4a] text-white font-bold text-xs uppercase tracking-widest rounded-none transition-all text-center flex items-center justify-center space-x-1.5 w-full sm:w-auto"
                >
                  <span>Analyze Case Study</span>
                  <ArrowRight className="h-3 w-3 text-editorial-sky" />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center pt-4">
            <a
              href="#/projects"
              className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-editorial-navy hover:text-editorial-sky transition-colors border-b border-editorial-navy pb-1"
            >
              <span>See all completed South African case studies</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

        </div>
      </section>

      {/* 7. Interactive Fee Calculator Callout Section */}
      <section className="py-24 bg-editorial-bg" id="quote">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-editorial-navy uppercase tracking-widest border border-editorial-navy/20 px-3 py-1">Instant Estimation</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-editorial-navy font-sans tracking-tight">
              Interactive Geomatics Budget Estimator
            </h2>
            <p className="text-editorial-slate text-sm sm:text-base">
              We believe in transparent, professional communication. Configure your survey scope below for an instant estimated cost proposal compliant with South African geomatics standards.
            </p>
          </div>

          {/* Calculator Component Embedded */}
          <InteractiveQuoteCalculator />
        </div>
      </section>

      {/* 8. Testimonials Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold text-editorial-sky uppercase tracking-widest bg-editorial-navy px-2 py-1">Client Feedback</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-editorial-navy font-sans tracking-tight">
              What Our Infrastructure Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((test, index) => (
              <div key={index} className="p-8 bg-editorial-bg border border-gray-200 rounded-none shadow-sm flex flex-col justify-between space-y-6 border-t-4 border-t-editorial-sky">
                <div className="space-y-4">
                  <div className="text-editorial-navy">
                    <Quote className="h-10 w-10 rotate-180 opacity-20 text-editorial-navy" />
                  </div>
                  <p className="text-editorial-slate text-xs sm:text-sm leading-relaxed italic">
                    "{test.quote}"
                  </p>
                </div>
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                  <div className="w-10 h-10 bg-editorial-navy rounded-none flex items-center justify-center font-bold text-editorial-sky text-xs font-sans">
                    {test.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-xs font-bold text-editorial-charcoal">{test.author}</p>
                    <p className="text-[10px] text-editorial-slate font-mono">{test.role} • {test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final Call to Action */}
      <section className="bg-editorial-navy text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-editorial-sky/10 via-transparent to-editorial-navy pointer-events-none" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <span className="text-xs font-bold text-editorial-sky uppercase tracking-widest font-mono">
            Partner With Precision
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-sans tracking-tight leading-tight">
            Take Your Project From Blueprint <br />To Ground Truth
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed border-l-2 border-r-2 border-editorial-sky/40 px-6">
            Ensure your municipal subdivisions, heavy structural concrete pours, and high-tech aerial mapping are backed by the ultimate accuracy in South African geomatics.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <a
              href="#/contact"
              className="bg-editorial-sky text-editorial-navy font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-none hover:bg-white transition-colors"
            >
              Get Professional Consultation
            </a>
            <a
              href="#/team"
              className="bg-[#0d213b] hover:bg-slate-800 text-slate-300 font-bold text-xs uppercase tracking-widest px-8 py-4 border border-slate-800 hover:border-slate-700 transition-all rounded-none"
            >
              Contact Managing Director
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
