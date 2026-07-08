/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: 'engineering' | 'spatial' | 'cadastral';
  applications: string[];
  benefits: string[];
  process: string[];
  image: string;
  iconName: string; // Lucide icon name string
}

export interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  province: 'Western Cape' | 'Gauteng' | 'KwaZulu-Natal' | 'Mpumalanga' | 'Eastern Cape' | 'Limpopo' | 'Free State' | 'North West' | 'Northern Cape';
  category: string;
  overview: string;
  challenges: string;
  solutions: string;
  technology: string[];
  images: string[];
  relatedServices: string[];
  year: string;
}

export interface Industry {
  id: string;
  name: string;
  description: string;
  details: string;
  iconName: string;
  image: string;
  highlights: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  qualifications: string;
  registrationNumber?: string; // SAGC / PLATO
  bio: string;
  email: string;
  image: string;
}

export interface Office {
  name: string;
  city: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  coordinates: { lat: number; lng: number };
}
