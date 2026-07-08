/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Office } from '../types';

export const offices: Office[] = [
  {
    name: 'Cape Town (Head Office)',
    city: 'Cape Town',
    address: 'Suite 401, Foreshore Chambers, 22 Waterfront Boulevard, Cape Town, 8001',
    phone: '+27 (0) 21 421 9500',
    email: 'capetown@surplan.co.za',
    hours: 'Monday – Friday: 08:00 – 17:00',
    coordinates: { lat: -33.9189, lng: 18.4233 }
  },
  {
    name: 'Gauteng Office',
    city: 'Johannesburg',
    address: 'Unit 12, Sandton Boulevard Office Park, 44 Rivonia Road, Sandton, 2196',
    phone: '+27 (0) 11 784 3200',
    email: 'gauteng@surplan.co.za',
    hours: 'Monday – Friday: 08:00 – 17:00',
    coordinates: { lat: -26.1015, lng: 28.0567 }
  },
  {
    name: 'KwaZulu-Natal Office',
    city: 'Durban',
    address: 'Ground Floor, Lighthouse Arch Building, 15 Umhlanga Rocks Drive, Umhlanga, 4319',
    phone: '+27 (0) 31 561 7400',
    email: 'kzn@surplan.co.za',
    hours: 'Monday – Friday: 08:00 – 17:00',
    coordinates: { lat: -29.7258, lng: 31.0664 }
  }
];
