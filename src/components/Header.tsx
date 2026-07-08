/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone, FileText, ArrowUpRight } from 'lucide-react';
import { services } from '../data/services';

interface HeaderProps {
  currentHash: string;
}

export default function Header({ currentHash }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Close menus when route/hash changes
  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [currentHash]);

  const mainLinks = [
    { name: 'Home', href: '#/' },
    { name: 'About', href: '#/about' },
    { name: 'Services', href: '#/services', hasDropdown: true },
    { name: 'Projects', href: '#/projects' },
    { name: 'Industries', href: '#/industries' },
    { name: 'Team', href: '#/team' },
    { name: 'Contact', href: '#/contact' }
  ];

  const getActiveState = (href: string) => {
    if (href === '#/') {
      return currentHash === '#/' || currentHash === '' || currentHash === '#/home';
    }
    return currentHash.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm transition-all">
      {/* Top bar for emergency contact and PLATO/SAGC trust statement */}
      <div className="bg-editorial-navy text-slate-300 text-[11px] py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <p className="font-mono tracking-tight">
          Registered SAGC / PLATO Geomatics Consultancy • South Africa
        </p>
        <div className="flex space-x-6">
          <a href="tel:+27214219500" className="flex items-center hover:text-white transition-colors">
            <Phone className="h-3 w-3 mr-1.5 text-editorial-sky" />
            <span>+27 (0) 21 421 9500</span>
          </a>
          <a href="#/contact" className="hover:text-white transition-colors flex items-center">
            <span>Tenders & Portals</span>
            <ArrowUpRight className="h-2.5 w-2.5 ml-1 text-editorial-sky" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Typographic Logo */}
          <a href="#/" className="flex items-center space-x-2.5 group">
            <div className="w-8 h-8 bg-editorial-navy flex items-center justify-center text-white font-bold text-lg font-display transition-transform group-hover:scale-105">S</div>
            <span className="text-2xl font-bold tracking-tight text-editorial-navy font-display">
              SURPLAN
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-1 items-center">
            {mainLinks.map((link) => (
              <div key={link.name} className="relative group py-2">
                {link.hasDropdown ? (
                  <div className="flex items-center">
                    <a
                      href={link.href}
                      className={`px-3 py-1.5 text-sm font-semibold transition-all flex items-center space-x-1 border-b-2 ${
                        getActiveState(link.href)
                          ? 'text-editorial-navy border-editorial-sky font-bold'
                          : 'text-editorial-slate border-transparent hover:text-editorial-navy hover:border-gray-200'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="h-4 w-4 text-gray-400 group-hover:text-editorial-navy group-hover:rotate-180 transition-transform duration-200" />
                    </a>

                    {/* Desktop Dropdown */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 bg-white border border-gray-100 rounded-none shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="px-4 py-2 border-b border-gray-100 mb-1">
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                          Our 10 Core Capabilities
                        </span>
                      </div>
                      <div className="max-h-[350px] overflow-y-auto custom-scrollbar px-2 space-y-0.5">
                        {services.map((srv) => (
                          <a
                            key={srv.id}
                            href={`#/services/${srv.id}`}
                            className="flex items-start p-2 hover:bg-editorial-bg text-left transition-colors group/item"
                          >
                            <div className="ml-1 border-l border-transparent hover:border-editorial-sky pl-2 transition-all">
                              <p className="text-xs font-bold text-editorial-charcoal group-hover/item:text-editorial-navy">
                                {srv.title}
                              </p>
                              <p className="text-[10px] text-editorial-slate line-clamp-1 mt-0.5">
                                {srv.shortDescription}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`px-3 py-1.5 text-sm font-semibold transition-all border-b-2 ${
                      getActiveState(link.href)
                        ? 'text-editorial-navy border-editorial-sky font-bold'
                        : 'text-editorial-slate border-transparent hover:text-editorial-navy hover:border-gray-200'
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="#/contact"
              className="bg-editorial-navy text-white px-6 py-2.5 text-xs font-bold uppercase tracking-widest hover:bg-[#162a4a] transition-all flex items-center space-x-1.5 rounded-none"
            >
              <FileText className="h-3.5 w-3.5 text-editorial-sky" />
              <span>Request a Quotation</span>
            </a>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-6 w-6 text-editorial-navy" /> : <Menu className="h-6 w-6 text-editorial-navy" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white">
          <div className="px-2 pt-3 pb-4 space-y-1">
            {mainLinks.map((link) => (
              <div key={link.name}>
                {link.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className={`w-full flex justify-between items-center px-4 py-3 text-sm font-semibold text-left ${
                        getActiveState(link.href)
                          ? 'text-editorial-navy bg-editorial-bg border-l-4 border-editorial-sky'
                          : 'text-editorial-slate hover:bg-gray-50'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen && (
                      <div className="pl-6 pr-4 py-1 space-y-1 bg-editorial-bg rounded-none mt-1">
                        <a
                          href="#/services"
                          className="block px-3 py-2 text-xs font-bold text-editorial-navy hover:bg-gray-100"
                        >
                          All Services Landing Page
                        </a>
                        {services.map((srv) => (
                          <a
                            key={srv.id}
                            href={`#/services/${srv.id}`}
                            className="block px-3 py-2 text-xs text-editorial-slate hover:text-editorial-navy hover:bg-gray-100"
                          >
                            {srv.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={link.href}
                    className={`block px-4 py-3 text-sm font-semibold ${
                      getActiveState(link.href)
                        ? 'text-editorial-navy bg-editorial-bg border-l-4 border-editorial-sky'
                        : 'text-editorial-slate hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 pb-2 px-4">
              <a
                href="#/contact"
                className="w-full bg-editorial-navy text-white font-bold text-xs py-3 px-4 flex items-center justify-center space-x-2 rounded-none tracking-widest uppercase hover:bg-[#162a4a] transition-all"
              >
                <FileText className="h-4 w-4 text-editorial-sky" />
                <span>Request a Quotation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
