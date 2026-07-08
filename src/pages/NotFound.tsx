/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Home, MapPin } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-slate-950 text-white min-h-[70vh] flex items-center justify-center p-6 text-center relative overflow-hidden">
      {/* Subtle coordinate grid lines overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]" />
      
      <div className="relative z-10 max-w-md space-y-6">
        <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-full w-20 h-20 flex items-center justify-center mx-auto text-blue-400">
          <Compass className="h-10 w-10 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <p className="font-mono text-xs text-blue-400 tracking-widest uppercase">
            Error Code: 404 • Outside Measured Bounds
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight">
            Coordinate Out of Range
          </h1>
          <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
            The spatial URL or page coordinates you requested are outside our established geodetic control network. The reference benchmark may have moved.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="#/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center space-x-2"
          >
            <Home className="h-3.5 w-3.5" />
            <span>Return to safe Home Benchmark</span>
          </a>
          <a
            href="#/contact"
            className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 font-bold text-xs py-3 px-6 rounded-lg transition-all flex items-center justify-center space-x-2"
          >
            <MapPin className="h-3.5 w-3.5" />
            <span>Contact Admin Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
}
