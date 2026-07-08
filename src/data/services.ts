/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service } from '../types';

export const services: Service[] = [
  {
    id: 'engineering-surveys',
    title: 'Engineering Surveys',
    shortDescription: 'High-precision spatial data for civil engineering, infrastructure, and major design projects across South Africa.',
    longDescription: 'Our engineering survey division provides the critical spatial foundation for major civil works, including roads, railways, water pipelines, and structural foundations. We understand that sub-millimetre precision during the design and planning phase prevents multi-million Rand errors during construction.',
    category: 'engineering',
    applications: [
      'Route surveys for roads, highways, and rail links',
      'As-built surveys of existing service structures',
      'Pipelines, canals, and water infrastructure alignment',
      'Tunnel alignment and underground control networks'
    ],
    benefits: [
      'Eliminates design discrepancies prior to breaking ground',
      'Certified compliance with South African national engineering standards',
      'Seamless integration with BIM (Building Information Modelling) and CAD software',
      'Highly experienced geomatics professionals familiar with complex sites'
    ],
    process: [
      'Initial consultation and scope definition based on project engineering plans',
      'Establishment of ultra-stable control networks using static dual-frequency GNSS',
      'Detailed field data acquisition using high-precision total stations',
      'Data processing, quality auditing, and delivery of final digital models (DWG, DXF, LandXML)'
    ],
    image: '/src/assets/images/surplan_field_survey_1783524922330.jpg',
    iconName: 'Compass'
  },
  {
    id: 'topographical-surveys',
    title: 'Topographical Surveys',
    shortDescription: 'Accurate mapping of natural and man-made features to guide architectural design and land-use planning.',
    longDescription: 'Topographical surveys map the physical features, elevation, contours, and existing structures of a piece of land. This serves as the blank canvas for architects, town planners, and civil designers to develop conceptual designs with complete spatial confidence.',
    category: 'spatial',
    applications: [
      'Greenfield and brownfield site development planning',
      'Volumetric analysis and earthworks calculation',
      'Flood line studies and hydrological catchment mapping',
      'Environmental sensitivity zoning surveys'
    ],
    benefits: [
      'Accurate identification of boundary lines and servitudes',
      'Identification of physical obstacles, overhead cables, and underground utilities',
      'Precise contour intervals (up to 0.1m) for optimal structural positioning',
      'Reduces soil movement and excavation costs by optimising layouts'
    ],
    process: [
      'Desktop study of existing deeds, diagrams, and historical municipal maps',
      'On-site field collection using a blend of RTK GPS and optical surveying instruments',
      'Drafting of 3D terrain models and contour lines in our dedicated CAD department',
      'Rigorous quality check and delivery of digital layout files'
    ],
    image: 'https://picsum.photos/seed/topo-survey/800/600',
    iconName: 'Map'
  },
  {
    id: 'construction-surveys',
    title: 'Construction Surveys',
    shortDescription: 'On-site setting out of structural elements, gridlines, and earthworks to guarantee real-world alignment.',
    longDescription: 'We translate complex structural plans into physical markers on site. Our construction survey team works side-by-side with site managers, engineers, and steel fixers to ensure that concrete foundations, column grids, and multi-storey structures are erected exactly where they belong.',
    category: 'engineering',
    applications: [
      'Setting out of column grids, pile foundations, and anchor bolts',
      'Road layer works staking and curb alignment control',
      'Vertical alignment monitoring for high-rise developments',
      'Pre-pour structural checks and post-tensioning verification'
    ],
    benefits: [
      'Prevents structural misalignment and expensive rework',
      'Provides daily/weekly progress reports and volume verification',
      'Guarantees structures align perfectly with municipal servitudes',
      'On-call surveyors available to fit demanding concrete schedules'
    ],
    process: [
      'Ingestion and comparative audit of engineering and architectural construction files',
      'Physical site calibration and control check using established site datum points',
      'On-site staking and marking using heavy-duty steel pegs, nails, or offset lines',
      'Independent verification checks (double-tie) and immediate hand-over signing certificates'
    ],
    image: 'https://picsum.photos/seed/construction-site/800/600',
    iconName: 'Layers'
  },
  {
    id: 'mine-surveys',
    title: 'Mine Surveys',
    shortDescription: 'Specialised surface and underground geomatics solutions to support safety, volume tracking, and legal compliance.',
    longDescription: 'Mining operations in South Africa require legal compliance under the Mine Health and Safety Act. Our certificated mine surveyors provide accurate volumetric audits, tunnel guidance, and spatial tracking for both surface open-pit and deep-level underground mining activities.',
    category: 'engineering',
    applications: [
      'Monthly stockpile volumetric measurements and inventory reconciliation',
      'Underground blast-face and development tunnel guidance',
      'Opencast pit design staking and bench alignment',
      'Deformation and stability monitoring of highwalls and tailing dams'
    ],
    benefits: [
      'Legally compliant surveys aligned with DMRE regulations',
      'Highly accurate stockpile volumes utilizing laser scanning and drone tech',
      'Enhanced underground safety through prompt hazard and drift warnings',
      'Efficient mine planning supported by digital 3D spatial updates'
    ],
    process: [
      'Safety briefing and alignment with mine-specific SOPs and standard regulations',
      'Laser scanning or UAV flights over pits and active stockpiles',
      'Point-cloud filtering, processing, and volumetric reporting via mesh triangulation',
      'Updating of statutory mine plans for legal compliance'
    ],
    image: 'https://picsum.photos/seed/mine-geomatics/800/600',
    iconName: 'Hammer'
  },
  {
    id: 'cadastral-surveys',
    title: 'Cadastral Surveys',
    shortDescription: 'Boundary surveys, land subdivisions, consolidations, and legal land rights registration with the Surveyor-General.',
    longDescription: 'Cadastral surveying is a legal function reserved exclusively for Professional Land Surveyors registered with the South African Geomatics Council (SAGC). We specialize in defining property boundaries, subdividing land parcels, and preparing statutory diagrams for lodging with the Surveyor-General.',
    category: 'cadastral',
    applications: [
      'Subdivision of agricultural, commercial, and residential land',
      'Consolidation of multiple adjacent property title deeds',
      'Replacement of missing property beacon pegs',
      'Servitude definition and registration (rights of way, power lines, pipelines)'
    ],
    benefits: [
      'Legally binding boundary definition to resolve neighbor disputes',
      'Essential step for releasing real estate value through subdivision',
      'Approved Surveyor-General (SG) diagrams required for title deed registration',
      'Adherence to municipal zoning schemes and national planning legislation'
    ],
    process: [
      'Deeds Office search to obtain historical survey diagrams and title deeds',
      'Field search for historical beacons and geodetic reference marks',
      'Field measurement to calculate the mathematically exact positions of boundaries',
      'Pegging of beacons, drafting of SG diagrams, and lodging with the Surveyor-General'
    ],
    image: 'https://picsum.photos/seed/cadastral-land/800/600',
    iconName: 'Scale'
  },
  {
    id: 'uav-drone-surveys',
    title: 'UAV & Drone Surveys',
    shortDescription: 'Rapid, high-resolution aerial mapping, orthophotography, and spatial analysis for expansive sites.',
    longDescription: 'Our commercial UAV drone operations deliver incredibly dense topographic datasets over hundreds of hectares in a fraction of the time taken by traditional ground crews. Operating under strict SACAA-compliant aviation rules, we generate survey-grade orthomosaics and digital elevation models.',
    category: 'spatial',
    applications: [
      'Large-scale topographical mapping for master planning',
      'As-built monitoring for linear infrastructure projects (roads, powerlines)',
      'High-resolution visual inspections of towers and bridges',
      'Agricultural vegetation health mapping and soil drainage analysis'
    ],
    benefits: [
      'Up to 90% faster data collection on large undeveloped terrains',
      'Keeps ground surveyors safe from hazardous slopes or active mining equipment',
      'Produces stunning, high-resolution visual orthophotos (GSD up to 1.5cm/pixel)',
      'Sub-5cm global accuracy when processed with ground control points (GCPs)'
    ],
    process: [
      'Flight planning, airspace clearance, and safety risk assessment',
      'Placement and GPS coordination of highly visible ground control targets',
      'Autonomous flight execution with high-overlap camera sensors',
      'Photogrammetric processing, point-cloud classification, and elevation file generation'
    ],
    image: '/src/assets/images/surplan_uav_mapping_1783524940451.jpg',
    iconName: 'Plane'
  },
  {
    id: 'lidar-laser-scanning',
    title: 'LiDAR & Laser Scanning',
    shortDescription: 'Millimetre-accurate 3D point cloud generation for complex industrial installations, historic sites, and foliage penetration.',
    longDescription: 'LiDAR (Light Detection and Ranging) uses rapid laser pulses to capture millions of 3D coordinates per second. This technology creates a dense digital twin of complex geometry, penetrating dense forest canopies or detailing intricate steel piping networks inside active refineries.',
    category: 'spatial',
    applications: [
      'As-built documentation for complex chemical and industrial plants',
      'Heritage site conservation and high-fidelity structural archiving',
      'Terrain mapping beneath dense coastal forest or thick bushveld canopy',
      'Detailed volumetric mapping of covered or indoor warehouses'
    ],
    benefits: [
      'Captures millions of points, leaving zero blind spots in complex structures',
      'Saves weeks of manual physical tape-measurement in industrial shutdowns',
      'Penetrates vegetation to reveal actual ground contours underneath',
      'Creates high-fidelity digital twins for advanced engineering simulations'
    ],
    process: [
      'Strategic placement of reflective registration spheres and scan targets',
      'Multiple scan stations executed using premium terrestrial laser scanners',
      'Registration and stitching of multiple individual scans in a unified coordinate frame',
      'Feature extraction, architectural drafting, or 3D mesh reconstruction'
    ],
    image: 'https://picsum.photos/seed/laser-scan/800/600',
    iconName: 'Activity'
  },
  {
    id: 'gis-spatial-data',
    title: 'GIS & Spatial Data',
    shortDescription: 'Advanced spatial database design, asset tracking systems, and cartographic analysis for municipal and private clients.',
    longDescription: 'Geographical Information Systems (GIS) bring spatial data to life by linking geography with functional databases. We help municipalities, agricultural syndicates, and utility companies visualize their assets, manage infrastructure life cycles, and make informed geographic decisions.',
    category: 'spatial',
    applications: [
      'Municipal asset registries and infrastructure condition tracking',
      'Zoning map management and land-use information systems',
      'Forestry and crop yield spatial analysis over multiple seasons',
      'Demographic and catchment analysis for retail developments'
    ],
    benefits: [
      'Centralized asset data reducing response times for repair crews',
      'Advanced spatial query capabilities to identify patterns and risks',
      'Seamless integration of GPS field data with corporate ERP systems',
      'Stunning custom cartographic maps for board presentations'
    ],
    process: [
      'User needs analysis and spatial database schema design',
      'Data collection, cleaning, georeferencing, and attributes joining',
      'Implementation of web-based GIS map portals or local spatial databases',
      'Technical support, data hosting, and specialized geographic analysis reports'
    ],
    image: 'https://picsum.photos/seed/gis-mapping/800/600',
    iconName: 'Database'
  },
  {
    id: 'monitoring-surveys',
    title: 'Monitoring Surveys',
    shortDescription: 'Continuous, high-precision deformation measurements to monitor structural movement, settling, or geological shifts.',
    longDescription: 'Major engineering structures can settle, tilt, or warp under pressure, temperature, or geological forces. We design and execute continuous or periodic monitoring routines to track movement down to fractions of a millimetre, ensuring early warnings are triggered before failure.',
    category: 'engineering',
    applications: [
      'Monitoring of bridge piers and retaining walls during adjacent excavation',
      'Dam wall deformation monitoring under variable hydraulic load',
      'Historic building tilt and crack monitoring during deep basements works',
      'Railway line alignment monitoring in active mining or sinkhole-prone areas'
    ],
    benefits: [
      'Provides absolute, independent structural health and safety verification',
      'Saves millions in insurance claims by acting as an early warning system',
      'Clear, graphical reports demonstrating movement trends over months or years',
      'Automated telemetry options for real-time critical displacement alerts'
    ],
    process: [
      'Establishment of ultra-deep benchmark datums far outside the zone of influence',
      'Installation of high-stability optical prisms, tiltmeters, and strain gauges',
      'High-precision robotic monitoring observations performed on strict schedules',
      'Statistical analysis of historical trends, trend graphing, and emergency threshold notification'
    ],
    image: 'https://picsum.photos/seed/monitoring-laser/800/600',
    iconName: 'TrendingUp'
  },
  {
    id: 'sectional-title-surveys',
    title: 'Sectional Title Surveys',
    shortDescription: 'Preparation of sectional plans for multi-unit complexes, apartment blocks, and office developments.',
    longDescription: 'Sectional title properties require specialized plans dividing buildings into individual ownership sections and shared common property. Our Professional Land Surveyors draft, measure, and process these legal sectional plans for approval by the Surveyor-General and registration in the Deeds Office.',
    category: 'cadastral',
    applications: [
      'New residential apartment block block sectional title registrations',
      'Office park division into separate commercial sections',
      'Extension of existing sectional title schemes (adding units or rooms)',
      'Exclusive use area definition (parking bays, garden patios)'
    ],
    benefits: [
      'Enables developers to legally sell and transfer individual apartment units',
      'Clear, undisputed definition of common property vs private ownership sections',
      'Required by commercial banks before approving buyer home loans',
      'Fully compliant with the South African Sectional Titles Act 95 of 1986'
    ],
    process: [
      'Review of approved architectural building plans and physical site verification',
      'On-site structural measurements of walls, sections, and common boundary lines',
      'Mathematical drafting of Sectional Plans displaying precise floor areas',
      'Submission and certification with the Surveyor-General (SG) and coordination with conveyancers'
    ],
    image: 'https://picsum.photos/seed/sectional-title/800/600',
    iconName: 'Grid'
  }
];
