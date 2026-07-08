/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Industry } from '../types';

export const industries: Industry[] = [
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    description: 'Providing crucial geomatics data for dams, ports, rail networks, and bulk water supply systems.',
    details: 'Infrastructure forms the backbone of South Africa. Surplan is a trusted geomatics partner for major state-owned enterprises, national agencies, and bulk infrastructure consortia. Our precise measurement networks minimize risks and keep national logistics and utility grids flowing.',
    iconName: 'Building2',
    image: 'https://picsum.photos/seed/industry-infra/600/400',
    highlights: [
      'Berth and channel surveys for deep-water marine ports',
      'Bulk water pipeline route surveys and servitude mapping',
      'Structural deflection and deformation monitoring of national dams',
      'Stability tracking for commuter and freight rail networks'
    ]
  },
  {
    id: 'construction',
    name: 'Construction',
    description: 'Guarding structural integrity through professional, rapid, and sub-millimetre site setting out.',
    details: 'On modern construction sites, speed and accuracy are non-negotiable. Our construction surveyors integrate seamlessly with main contractors and project engineers, aligning complex grid lines, columns, piles, and steelwork with architectural designs.',
    iconName: 'HardHat',
    image: 'https://picsum.photos/seed/industry-const/600/400',
    highlights: [
      'Setting out of grid lines, pile foundations, and anchor plates',
      'As-built verification surveys for immediate sign-off and safety',
      'Vertical alignment check for multi-storey high-rise concrete structures',
      'Setting out of precision civil road works, curbing, and drainage'
    ]
  },
  {
    id: 'mining',
    name: 'Mining',
    description: 'Statutory geomatics compliance, monthly volume reconciliation, and underground tunnel guidance.',
    details: 'South African mining requires strict adherence to safety standards and legal surveying guidelines under the Mine Health and Safety Act. We provide licensed mine surveyors who utilize automated scanners and UAVs to audit stockpiles and map geological benches safely.',
    iconName: 'Hammer',
    image: 'https://picsum.photos/seed/industry-mining/600/400',
    highlights: [
      'Certificated mine surveying compliance and statutory plan maintenance',
      'UAV-based monthly stockpile volume auditing and reconciliation',
      'High-precision underground tunnel alignment and breakthrough calculations',
      'Open-pit highwall stability monitoring utilizing remote laser scans'
    ]
  },
  {
    id: 'property-development',
    name: 'Property Development',
    description: 'Subdivisions, consolidations, zoning schemes, and sectional title plans for premium estates.',
    details: 'From single-lot subdivisions to massive mixed-use lifestyle estates, Surplan helps property developers maximize the value of their real estate. We manage the complete cadastral process, working closely with town planners and conveyancers.',
    iconName: 'Home',
    image: 'https://picsum.photos/seed/industry-prop/600/400',
    highlights: [
      'Boundary pegging, subdivisions, and land consolidations',
      'Surveyor-General (SG) diagram compilation and legal lodgement',
      'Drafting of sectional title plans for multi-unit apartment complexes',
      'Mapping of environmental setback lines, wetlands, and physical site features'
    ]
  },
  {
    id: 'municipal',
    name: 'Municipal',
    description: 'Asset registries, utility networks mapping, and GIS database design for local authorities.',
    details: 'Efficient municipal management relies on accurate spatial data. Surplan assists metropolitan councils and local municipalities across South Africa to log, analyze, and manage their underground and surface utility networks.',
    iconName: 'Globe',
    image: 'https://picsum.photos/seed/industry-muni/600/400',
    highlights: [
      'As-built surveys of bulk sewer, water, and electrical infrastructure',
      'GIS database creation and population for property valuation rolls',
      'Encroachment surveys and informal settlement topographical mapping',
      'Road layout and municipal reserve corridor surveys'
    ]
  },
  {
    id: 'government',
    name: 'Government',
    description: 'State land audits, border surveying, and provincial spatial development support.',
    details: 'We support provincial and national government departments with professional geomatics advisory services. Our team provides state land boundary audits, topographical terrain surveys for human settlements, and regional mapping.',
    iconName: 'Briefcase',
    image: 'https://picsum.photos/seed/industry-gov/600/400',
    highlights: [
      'National and provincial boundary line re-establishment and audits',
      'Topographical terrain surveys for social housing and human settlements',
      'Deeds Registry audit and cadastral reconciliation for state land',
      'Public infrastructure servitude registrations and SG lodging'
    ]
  },
  {
    id: 'renewable-energy',
    name: 'Renewable Energy',
    description: 'Topographical mapping, micro-siting, and layout checks for solar PV and wind farms.',
    details: 'As South Africa transitions towards sustainable energy, Surplan offers leading geomatics support for renewable energy developers. We provide extensive topographical mapping for solar arrays and wind turbine generator locations, ensuring optimum wind and solar exposure layouts.',
    iconName: 'Zap',
    image: 'https://picsum.photos/seed/industry-renew/600/400',
    highlights: [
      'Micro-siting and horizontality checks for massive wind turbine columns',
      'High-precision topography mapping for solar PV array trackers',
      'Access road and electrical cabling trench layout planning surveys',
      'Volumetric analysis for heavy earthworks and site preparation'
    ]
  },
  {
    id: 'agriculture',
    name: 'Agriculture',
    description: 'Precision contour planning, soil drainage topography, and multispectral drone mapping.',
    details: 'Modern farming is spatial. We assist commercial farms in the Western Cape, Free State, and Limpopo to plan high-yield orchards, design optimal drainage networks, and map large farm boundaries with absolute precision.',
    iconName: 'Leaf',
    image: 'https://picsum.photos/seed/industry-agri/600/400',
    highlights: [
      'Precision contour mapping (0.1m) for soil erosion control and orchard design',
      'Irrigation pipeline layout and dam capacity surveys',
      'Farm boundary re-pegging and agricultural subdivision diagrams',
      'UAV multispectral vegetation indices (NDVI) for crop health analysis'
    ]
  }
];
