export interface LocationArea {
  slug: string;
  name: string;
  travelTime: string;
  description: string;
}

export const locations: LocationArea[] = [
  {
    slug: 'shivajinagar',
    name: 'Shivajinagar',
    travelTime: '~5 min',
    description: 'The legal heart of Pune. We regularly represent clients here at the Family Court and District Court.'
  },
  {
    slug: 'camp',
    name: 'Camp',
    travelTime: '~15 min',
    description: 'We frequently assist residents and businesses in the Camp area with civil litigation, property disputes, and corporate matters.'
  },
  {
    slug: 'erandwane',
    name: 'Erandwane',
    travelTime: '~20 min',
    description: 'From property matters to family law, our firm provides measured, strategic representation for clients from Erandwane.'
  },
  {
    slug: 'karve-nagar',
    name: 'Karve Nagar',
    travelTime: '~25 min',
    description: 'Our advocates routinely handle civil suits, documentation, and family court matters for clients based in Karve Nagar.'
  },
  {
    slug: 'sinhagad-road',
    name: 'Sinhagad Road',
    travelTime: '~20 min',
    description: 'The Sinhagad Road corridor has expanded faster than its land records. We regularly see plot purchases where 7/12 entries lag behind reality. Verification here is not a formality — it is the whole job.'
  },
  {
    slug: 'kothrud',
    name: 'Kothrud',
    travelTime: '~25 min',
    description: 'We handle a significant volume of property conveyancing, family disputes, and civil matters for individuals and families in Kothrud.'
  },
  {
    slug: 'baner',
    name: 'Baner',
    travelTime: '~30 min',
    description: 'A growing IT and residential hub. We assist clients in Baner with employment disputes, RERA complaints, and family law proceedings.'
  },
  {
    slug: 'aundh',
    name: 'Aundh',
    travelTime: '~25 min',
    description: 'Our firm provides discrete and effective legal representation for clients in Aundh, focusing on matrimonial disputes and property litigation.'
  },
  {
    slug: 'warje',
    name: 'Warje',
    travelTime: '~30 min',
    description: 'We represent clients from Warje in a range of matters including property title verification, civil suits, and family court disputes.'
  },
  {
    slug: 'bavdhan',
    name: 'Bavdhan',
    travelTime: '~35 min',
    description: 'Providing comprehensive legal services for Bavdhan residents, from property documentation to civil litigation and family law.'
  },
  {
    slug: 'hadapsar',
    name: 'Hadapsar',
    travelTime: '~35 min',
    description: 'We regularly advise clients in Hadapsar on property acquisitions, consumer forum matters, and corporate legal requirements.'
  },
  {
    slug: 'kharadi',
    name: 'Kharadi',
    travelTime: '~40 min',
    description: 'Serving professionals and businesses in Kharadi with employment law advice, property verifications, and civil dispute resolution.'
  },
  {
    slug: 'magarpatta',
    name: 'Magarpatta',
    travelTime: '~35 min',
    description: 'Our advocates assist Magarpatta residents and businesses with drafting commercial agreements, handling property disputes, and family law.'
  },
  {
    slug: 'koregaon-park',
    name: 'Koregaon Park',
    travelTime: '~20 min',
    description: 'We provide sophisticated legal counsel for clients in Koregaon Park, managing complex civil litigation and discrete family matters.'
  },
  {
    slug: 'wakad',
    name: 'Wakad',
    travelTime: '~40 min',
    description: 'Representing Wakad residents in RERA disputes, property conveyance, and matrimonial matters before the Family Court.'
  },
  {
    slug: 'hinjewadi',
    name: 'Hinjewadi',
    travelTime: '~45 min',
    description: 'We advise IT professionals and companies in Hinjewadi on employment contracts, consumer rights, and property investments.'
  },
  {
    slug: 'pimple-saudagar',
    name: 'Pimple Saudagar',
    travelTime: '~35 min',
    description: 'Providing targeted legal solutions for clients in Pimple Saudagar, spanning family law, property disputes, and civil litigation.'
  },
  {
    slug: 'nigdi',
    name: 'Nigdi',
    travelTime: '~50 min',
    description: 'Our firm represents clients from Nigdi in major civil and criminal matters across the District and Sessions Courts in Pune.'
  },
  {
    slug: 'pcmc',
    name: 'PCMC',
    travelTime: '~45 min',
    description: 'We provide comprehensive legal representation for clients across the Pimpri-Chinchwad Municipal Corporation (PCMC) area, handling matters from family disputes to property litigation.'
  }
];

export function getLocationBySlug(slug: string): LocationArea | undefined {
  return locations.find((loc) => loc.slug === slug);
}
