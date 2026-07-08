/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'cape-town-harbour-expansion',
    title: 'Cape Town Harbour Container Terminal Expansion',
    client: 'Transnet National Ports Authority (TNPA)',
    location: 'Port of Cape Town, Western Cape',
    province: 'Western Cape',
    category: 'Engineering & Marine Geomatics',
    overview: 'Provided comprehensive geomatics support, high-precision control networks, and quay wall alignment surveys for the multi-million Rand berth deepening and container terminal expansion project at the Port of Cape Town.',
    challenges: 'Working in a high-density, active marine environment with constant tidal surges, ship vibrations, and strict port security clearance boundaries.',
    solutions: 'Our professional land surveyors established ultra-stable, deep-anchored control beacons outside the active berth area using static dual-frequency GNSS. We utilized robotic total stations with automated target tracking to monitor concrete quay wall stability and alignment in real-time.',
    technology: [
      'Robotic Total Stations',
      'Static Dual-Frequency GNSS',
      'Terrestrial Laser Scanning',
      'Deformation Monitoring Software'
    ],
    images: [
      '/src/assets/images/surplan_hero_project_1783524905114.jpg',
      'https://picsum.photos/seed/cape-harbour-asbuilt/800/600',
      'https://picsum.photos/seed/cape-harbour-control/800/600'
    ],
    relatedServices: ['engineering-surveys', 'monitoring-surveys', 'lidar-laser-scanning'],
    year: '2024'
  },
  {
    id: 'n1-highway-gauteng-widening',
    title: 'N1 Freeway Corridor Widening and Bridge Construction',
    client: 'South African National Roads Agency (SANRAL)',
    location: 'Midrand to Pretoria, Gauteng',
    province: 'Gauteng',
    category: 'Infrastructure & Construction Surveys',
    overview: 'Supplied full construction setting-out, topographical corridor mapping, and volumetric earthworks reconciliation for a major 14km triple-lane widening project, including two new high-load concrete bridge interchanges.',
    challenges: 'High-speed active highway traffic limiting safe ground crew access, and demanding setting-out schedules requiring rapid site response within hours of concrete pouring.',
    solutions: 'We deployed autonomous UAV (drone) surveys during low-volume weekend windows to map the highway topography. For on-site setting out of bridge column grids, we assigned on-call, dedicated construction survey crews equipped with high-visibility safety equipment and robotic non-prism total stations.',
    technology: [
      'RTK GNSS Receivers',
      'UAV Drone Photogrammetry',
      'Robotic Total Stations',
      'Civil 3D Earthworks Processing'
    ],
    images: [
      'https://picsum.photos/seed/highway-survey/1200/800',
      'https://picsum.photos/seed/highway-bridge-setout/800/600'
    ],
    relatedServices: ['construction-surveys', 'topographical-surveys', 'uav-drone-surveys'],
    year: '2025'
  },
  {
    id: 'mpumalanga-platinum-volumetric-audit',
    title: 'Mpumalanga Open-Cast Mine Audit & Stockpile Volumetrics',
    client: 'Anglo American Platinum',
    location: 'Steelpoort, Mpumalanga',
    province: 'Mpumalanga',
    category: 'Mine Surveys & UAV Mapping',
    overview: 'Conducted mandatory monthly volumetric stockpile audits and open-cast highwall deformation mapping to guarantee DMRE legal compliance and operational reconciliation for a premier platinum extraction site.',
    challenges: 'Massive, highly volatile stockpile shapes and high-wall slopes that were physically hazardous and highly inefficient for traditional ground-surveying methods.',
    solutions: 'Deployed SACAA-compliant high-end multirotor UAVs equipped with RTK GPS, capturing entire multi-hectare stockpiles within a 35-minute flight window. The resulting dense point cloud was filtered and processed to deliver volume calculations accurate to within 1.5%.',
    technology: [
      'Survey-Grade Mapping Drones',
      'PPK/RTK Photogrammetric Processing',
      'LiDAR Laser Scanning',
      'Surpac Volumetric Modelling'
    ],
    images: [
      '/src/assets/images/surplan_uav_mapping_1783524940451.jpg',
      'https://picsum.photos/seed/mine-pit-aerial/800/600',
      'https://picsum.photos/seed/mine-stockpile-cloud/800/600'
    ],
    relatedServices: ['mine-surveys', 'uav-drone-surveys', 'lidar-laser-scanning'],
    year: '2025'
  },
  {
    id: 'durban-point-waterfront-sectional-title',
    title: 'Durban Point Waterfront Precinct Consolidation and Sectional Plans',
    client: 'Durban Point Development Company',
    location: 'Durban Harbour Entrance, KwaZulu-Natal',
    province: 'KwaZulu-Natal',
    category: 'Cadastral & Sectional Title Surveys',
    overview: 'Executed comprehensive property consolidations, boundary pegging, and detailed sectional title plans for an elegant 18-storey, mixed-use luxury residential and retail tower in the Durban Point precinct.',
    challenges: 'Complex overlapping historical rail servitudes, sub-sea level baseline basements, and hundreds of individual high-value apartments requiring exact floor area diagrams.',
    solutions: 'Our registered Professional Land Surveyors researched historical deeds, re-established missing boundary pegs, and performed thorough internal laser scans of the complete building core. We prepared legally airtight sectional plans that were successfully approved by the Surveyor-General.',
    technology: [
      '3D Disto Laser Measurement',
      'SG Diagram Drafting Tools',
      'GIS Deeds Registry Database',
      'Terrestrial Laser Scanning'
    ],
    images: [
      'https://picsum.photos/seed/durban-point/1200/800',
      'https://picsum.photos/seed/sectional-interior/800/600'
    ],
    relatedServices: ['cadastral-surveys', 'sectional-title-surveys', 'topographical-surveys'],
    year: '2023'
  },
  {
    id: 'coega-idz-wind-farm-infrastructure',
    title: 'Coega Industrial Zone Wind Farm Geomatics Layout',
    client: 'Coega Development Corporation / Enel Green Power',
    location: 'Port Elizabeth, Eastern Cape',
    province: 'Eastern Cape',
    category: 'Renewable Energy & GIS Mapping',
    overview: 'Delivered precise micro-siting, access road horizontal alignment, and structural foundation setting out for 24 heavy-capacity wind turbine generator structures inside the Coega Industrial Development Zone (IDZ).',
    challenges: 'High coastal wind conditions causing survey tripod vibration, and an expansive 40-square-kilometre site layout requiring highly uniform coordinate system consistency.',
    solutions: 'Established 6 concrete-anchored, deep-foundation survey monuments across the IDZ. We scheduled measurements during early morning low-wind windows and utilized heavy-weight, wind-dampened carbon tripods and dual-constellation RTK receivers.',
    technology: [
      'Static GNSS Beacons',
      'Heavy-Dampened Carbon Tripods',
      'GIS Spatial Asset Database',
      'Site Calibration Controllers'
    ],
    images: [
      'https://picsum.photos/seed/wind-farm/1200/800',
      'https://picsum.photos/seed/wind-turbine-survey/800/600'
    ],
    relatedServices: ['engineering-surveys', 'topographical-surveys', 'gis-spatial-data'],
    year: '2024'
  }
];
