/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Industries from './pages/Industries';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      // Premium UX: Scroll window to top on every navigation shift
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Simple, robust Hash Router Parser
  const renderPage = () => {
    // Standardize empty / root path
    if (currentHash === '#/' || currentHash === '' || currentHash === '#/home') {
      return <Home />;
    }

    if (currentHash === '#/about') {
      return <About />;
    }

    if (currentHash === '#/services') {
      return <Services />;
    }

    // Dynamic Service Details Route (e.g. #/services/engineering-surveys)
    if (currentHash.startsWith('#/services/')) {
      const serviceId = currentHash.replace('#/services/', '');
      return <ServiceDetail serviceId={serviceId} />;
    }

    if (currentHash === '#/projects') {
      return <Projects />;
    }

    // Dynamic Project Detail Route (e.g. #/projects/cape-town-harbour-expansion)
    if (currentHash.startsWith('#/projects/')) {
      const projectId = currentHash.replace('#/projects/', '');
      return <ProjectDetail projectId={projectId} />;
    }

    if (currentHash === '#/industries') {
      return <Industries />;
    }

    if (currentHash === '#/team') {
      return <Team />;
    }

    if (currentHash === '#/contact') {
      return <Contact />;
    }

    if (currentHash === '#/careers') {
      return <Careers />;
    }

    if (currentHash === '#/privacy') {
      return <PrivacyPolicy />;
    }

    if (currentHash === '#/terms') {
      return <Terms />;
    }

    // Fallback 404 Out of Bounds
    return <NotFound />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Premium Navigation Header */}
      <Header currentHash={currentHash} />

      {/* Primary Page Canvas */}
      <main className="grow">
        {renderPage()}
      </main>

      {/* Corporate Footprint */}
      <Footer />
    </div>
  );
}
