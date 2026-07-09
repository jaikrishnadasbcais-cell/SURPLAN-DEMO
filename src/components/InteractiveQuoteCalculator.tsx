/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calculator, Shield, Download, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { services } from '../data/services';

interface QuoteResult {
  fieldWorkCost: number;
  dataProcessingCost: number;
  travelCost: number;
  lodgingFees: number;
  vat: number;
  totalCost: number;
}

export default function InteractiveQuoteCalculator() {
  const [selectedService, setSelectedService] = useState(services[0].id);
  const [projectSize, setProjectSize] = useState<number>(5); // Default size (e.g. 5 hectares or km or plots)
  const [complexity, setComplexity] = useState<'low' | 'medium' | 'high'>('medium');
  const [province, setProvince] = useState<string>('Eastern Cape');
  const [requiresSGAproval, setRequiresSGApproval] = useState<boolean>(false);
  
  // Submission state
  const [clientName, setClientName] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Simple calculator formula based on realistic geomatics budgeting
  const calculateQuote = (): QuoteResult => {
    const serviceObj = services.find(s => s.id === selectedService);
    let baseRatePerUnit = 2500; // ZAR per unit (hectare, plot, etc.)
    let baseProcessingRate = 1500;
    
    // Customize base rates depending on service type complexity
    if (selectedService.includes('uav')) {
      baseRatePerUnit = 850;
      baseProcessingRate = 3000;
    } else if (selectedService.includes('lidar') || selectedService.includes('scanning')) {
      baseRatePerUnit = 1800;
      baseProcessingRate = 4500;
    } else if (selectedService.includes('cadastral') || selectedService.includes('sectional')) {
      baseRatePerUnit = 4000;
      baseProcessingRate = 3500;
    } else if (selectedService.includes('monitoring')) {
      baseRatePerUnit = 5000; // Fixed monitoring installation
      baseProcessingRate = 2500;
    }

    // Complexity multiplier
    const complexityMultiplier = complexity === 'low' ? 0.8 : complexity === 'high' ? 1.5 : 1.0;
    
    // Scale discount (price per unit goes down for very large surveys)
    const scaleFactor = Math.max(0.4, 1 - (projectSize * 0.02)); 
    
    const fieldWorkCost = Math.round(baseRatePerUnit * projectSize * scaleFactor * complexityMultiplier);
    const dataProcessingCost = Math.round(baseProcessingRate * (1 + (projectSize * 0.05)) * complexityMultiplier);
    
    // Travel costs based on distance from our Port Elizabeth (Gqeberha) HQ
    let travelCost = 1200; // standard close-by
    if (province !== 'Eastern Cape') {
      travelCost = 4500; // regional mobilize fee
    }

    // SG Lodging Fees if cadastral / sectional
    let lodgingFees = 0;
    if (requiresSGAproval || selectedService.includes('cadastral') || selectedService.includes('sectional')) {
      lodgingFees = 1850 + (projectSize * 150);
    }

    const subtotal = fieldWorkCost + dataProcessingCost + travelCost + lodgingFees;
    const vat = Math.round(subtotal * 0.15); // South African VAT is 15%
    const totalCost = subtotal + vat;

    return {
      fieldWorkCost,
      dataProcessingCost,
      travelCost,
      lodgingFees: Math.round(lodgingFees),
      vat,
      totalCost
    };
  };

  const quote = calculateQuote();
  const activeService = services.find(s => s.id === selectedService);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientEmail) return;
    setIsSubmitted(true);
  };

  return (
    <div id="quote-calculator-container" className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden lg:grid lg:grid-cols-12">
      {/* Configuration Side */}
      <div className="p-8 lg:p-12 lg:col-span-7">
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
            <Calculator className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 font-sans">Professional Fee Estimator</h3>
            <p className="text-sm text-gray-500">Generate a transparent, structural geomatics concept budget</p>
          </div>
        </div>

        <form className="space-y-6">
          {/* Service Dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Core Service</label>
            <select
              value={selectedService}
              onChange={(e) => {
                setSelectedService(e.target.value);
                // Auto-toggle SG approval for cadastral types
                if (e.target.value.includes('cadastral') || e.target.value.includes('sectional')) {
                  setRequiresSGApproval(true);
                }
              }}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            >
              {services.map((s) => (
                <option key={s.id} value={s.id}>{s.title}</option>
              ))}
            </select>
          </div>

          {/* Project Size with dynamic units */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-medium text-gray-700">
                Project Scope / Scale
              </label>
              <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {selectedService.includes('sectional') ? 'Total Units' : selectedService.includes('uav') || selectedService.includes('topographical') ? 'Estimated Hectares (ha)' : 'Linear Kilometres / Ground Points'}
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="range"
                min="1"
                max="100"
                value={projectSize}
                onChange={(e) => setProjectSize(Number(e.target.value))}
                className="w-full accent-blue-600"
              />
              <input
                type="number"
                min="1"
                max="5000"
                value={projectSize}
                onChange={(e) => setProjectSize(Math.max(1, Number(e.target.value)))}
                className="w-20 px-3 py-2 text-center bg-gray-50 border border-gray-200 rounded-lg text-gray-800 font-mono font-bold focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <p className="text-xs text-gray-400 mt-1">Adjust to match physical terrain boundaries or development density.</p>
          </div>

          {/* Grid Layout for complexity and province */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Terrain / Site Complexity</label>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'medium', 'high'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setComplexity(lvl)}
                    className={`py-2 px-3 text-xs font-semibold rounded-lg border text-center capitalize transition-all ${
                      complexity === lvl
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                        : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Province</label>
              <select
                value={province}
                onChange={(e) => setProvince(e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all text-sm"
              >
                <option value="Eastern Cape">Eastern Cape (HQ Hub)</option>
                <option value="Western Cape">Western Cape</option>
                <option value="Gauteng">Gauteng</option>
                <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                <option value="Mpumalanga">Mpumalanga</option>
                <option value="Limpopo">Limpopo</option>
                <option value="Free State">Free State</option>
                <option value="North West">North West</option>
                <option value="Northern Cape">Northern Cape</option>
              </select>
            </div>
          </div>

          {/* Statutory Lodging Checkbox */}
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="sg-approval"
                type="checkbox"
                checked={requiresSGAproval}
                onChange={(e) => setRequiresSGApproval(e.target.checked)}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="sg-approval" className="font-medium text-gray-700 flex items-center">
                Requires Surveyor-General (SG) Lodgement
                <span className="ml-1.5 px-1.5 py-0.5 text-[10px] bg-amber-50 text-amber-700 border border-amber-100 rounded">
                  Legal
                </span>
              </label>
              <p className="text-gray-400 text-xs">Necessary for subdivision plans, sectional title diagrams, or registered servitudes.</p>
            </div>
          </div>
        </form>
      </div>

      {/* Estimator Breakdown & Submission */}
      <div className="bg-slate-50 p-8 lg:p-12 lg:col-span-5 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-gray-100">
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Estimated Cost Breakdown (ZAR)</h4>
          
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Field Survey Operations</span>
              <span className="font-mono font-medium text-gray-900">R {quote.fieldWorkCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Data Processing & Drafting</span>
              <span className="font-mono font-medium text-gray-900">R {quote.dataProcessingCost.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Mobilization & Travel</span>
              <span className="font-mono font-medium text-gray-900">R {quote.travelCost.toLocaleString()}</span>
            </div>
            {quote.lodgingFees > 0 && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">SG Lodgement & Fees</span>
                <span className="font-mono font-medium text-gray-900">R {quote.lodgingFees.toLocaleString()}</span>
              </div>
            )}
            <div className="border-t border-gray-200 my-2 pt-2 flex justify-between text-xs text-gray-500">
              <span>Subtotal</span>
              <span className="font-mono">R {(quote.fieldWorkCost + quote.dataProcessingCost + quote.travelCost + quote.lodgingFees).toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-500">
              <span>VAT (15%)</span>
              <span className="font-mono">R {quote.vat.toLocaleString()}</span>
            </div>
            
            <div className="border-t-2 border-dashed border-gray-200 pt-4 flex justify-between items-baseline">
              <span className="text-base font-bold text-gray-900">Total Concept Fee</span>
              <div className="text-right">
                <span className="text-2xl font-bold font-mono text-blue-600">R {quote.totalCost.toLocaleString()}</span>
                <p className="text-[10px] text-gray-400 italic">incl. VAT, subject to final terrain audit</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-lg mb-8 flex items-start space-x-3">
            <Shield className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
            <p className="text-xs text-blue-800 leading-relaxed">
              This estimator is based on standard South African Geomatics Council (SAGC) guidelines. Actual rates vary based on heavy vegetation density, canopy coverage, and municipal delays.
            </p>
          </div>
        </div>

        {/* Lead Submission Form / Done State */}
        <div>
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3">
              <p className="text-xs font-semibold text-gray-700 mb-2">Request Physical Site Consultation based on this Estimate:</p>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 text-gray-800"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={clientEmail}
                  onChange={(e) => setClientEmail(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 text-gray-800"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Company Name (Optional)"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 text-gray-800"
                />
                <input
                  type="tel"
                  placeholder="Contact Phone"
                  value={clientPhone}
                  onChange={(e) => setClientPhone(e.target.value)}
                  className="px-3 py-2 text-xs bg-white border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-blue-600 text-gray-800"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 px-4 rounded-lg flex items-center justify-center space-x-2 transition-all cursor-pointer shadow hover:shadow-md"
              >
                <span>Submit Estimate & Request Call</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-lg p-5 text-center">
              <CheckCircle2 className="h-10 w-10 text-green-600 mx-auto mb-2" />
              <h5 className="font-bold text-green-900 text-sm">Estimate Lodged Successfully!</h5>
              <p className="text-xs text-green-700 mt-1 leading-relaxed">
                Thank you, <strong>{clientName}</strong>. Annatjie Botha and our technical team will review this estimated budget of <strong>R {quote.totalCost.toLocaleString()}</strong> for your {activeService?.title} and reach out to you within 4 business hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setClientName('');
                  setClientEmail('');
                }}
                className="mt-3 text-xs text-green-800 underline hover:text-green-950 block mx-auto font-medium"
              >
                Estimate Another Project
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
