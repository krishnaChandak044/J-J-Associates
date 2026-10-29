export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationArea {
  slug: string;
  name: string;
  travelTime: string;
  officeDestination: string;
  heroSubtitle: string;
  contextParagraph: string;
  faqs: LocationFaq[];
}

export const locations: LocationArea[] = [
  {
    slug: "koregaon-park",
    name: "Koregaon Park",
    travelTime: "~20 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Koregaon Park clients reach us most often for leases, business agreements and matrimonial matters. Consultations happen on video as easily as in person — and when your matter is heard, it is heard in the city courts we appear before daily.",
    contextParagraph:
      "Koregaon Park matters skew commercial and high-value. Leave-and-licence agreements for restaurants and offices, disputes over lock-in periods and deposit refunds, and property transactions where the sums plainly justify a proper title search. Matrimonial matters here often involve assets across more than one city.",
    faqs: [
      {
        question: "Can consultations happen on video? Koregaon Park to Kasba Peth is a long ride.",
        answer:
          "Yes — most first consultations and almost all follow-ups from Koregaon Park happen over video or call. You visit only for document signing and, when required, court dates. The ~20 min ride is for the exceptions, not the routine."
      },
      {
        question: "My commercial lock-in dispute is in Koregaon Park. Where is it decided?",
        answer:
          "Commercial tenancy disputes and recovery claims are typically initiated before the Civil Courts in Shivajinagar, or through arbitration if an arbitration clause is present in the registered agreement."
      },
      {
        question: "Which court will my case be heard in?",
        answer:
          "Matrimonial matters are heard at the Family Court in Shivajinagar. Civil property disputes and criminal matters are filed in the Pune District and Sessions Court at Shivajinagar."
      },
      {
        question: "Can you visit for a home consultation for senior citizens?",
        answer:
          "Yes, for senior citizens and mobility-impaired clients residing in Koregaon Park, we arrange home visits for urgent consultations, wills, and document executions."
      }
    ]
  },
  {
    slug: "pimple-saudagar",
    name: "Pimple Saudagar",
    travelTime: "~40 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "From Pimple Saudagar, clients come to us most often for builder disputes, matrimonial matters and documentation. We appear before both the Pune courts and, where matters belong there, the courts on the PCMC side — and video consultations cover the distance in between.",
    contextParagraph:
      "Housing societies in Pimple Saudagar frequently face delayed deemed conveyance, builder non-compliance, and amenities shortfall under RERA. With a large population of corporate and IT professionals, we also routinely handle mutual consent divorce, child custody arrangements, and property partition.",
    faqs: [
      {
        question: "Is a Pimple Saudagar matter heard in Pune or PCMC court?",
        answer:
          "Police complaints and local magistrate matters fall under the PCMC jurisdiction (Morwadi Court), while Family Court matters and District Court civil appeals are heard at Shivajinagar in Pune."
      },
      {
        question: "How do you handle builder delay in possession?",
        answer:
          "We file statutory complaints before MahaRERA seeking monthly interest for delayed possession under Section 18 of RERA, or a complete refund with interest if the buyer decides to withdraw."
      },
      {
        question: "Do I need to travel to your office for every hearing?",
        answer:
          "No. You only need to appear on dates when your personal deposition or mediation attendance is legally mandated. Our advocates handle all procedural dates on your behalf."
      },
      {
        question: "Can property documentation and title search be done remotely?",
        answer:
          "Yes. We conduct sub-registrar searches and document verification without requiring you to commute back and forth."
      }
    ]
  },
  {
    slug: "shivajinagar",
    name: "Shivajinagar",
    travelTime: "~5 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Located within minutes of the District Court and Family Court, our advocates provide rapid, hands-on representation for Shivajinagar clients facing urgent litigation, bail matters, or civil filings.",
    contextParagraph:
      "Shivajinagar is the judicial center of Pune. Matters here frequently involve urgent anticipatory bail, civil injunctions, succession suits for long-standing family estates, and proceedings before government and revenue tribunals.",
    faqs: [
      {
        question: "How quickly can urgent bail or injunction petitions be moved?",
        answer:
          "Given our close proximity to the Shivajinagar court campus, urgent bail petitions and interim stay applications can be drafted, verified, and mentioned before the bench on the same day."
      },
      {
        question: "Which court handles civil suits in Shivajinagar?",
        answer:
          "Civil suits regarding property, contracts, or recovery in Shivajinagar are heard at the District & Sessions Court complex at Shivajinagar."
      },
      {
        question: "Can I meet the advocates directly at the court premises?",
        answer:
          "Yes. While comprehensive conferences happen at our Kasba Peth office (~5 min away), our advocates are present at the Shivajinagar court complex daily and can meet for court-related proceedings."
      },
      {
        question: "Do you handle consumer forum matters in Shivajinagar?",
        answer:
          "Yes, the Pune District Consumer Disputes Redressal Commission handles consumer grievances from Shivajinagar."
      }
    ]
  },
  {
    slug: "kothrud",
    name: "Kothrud",
    travelTime: "~25 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "From Kothrud, clients frequently seek our counsel for society redevelopment agreements, ancestral property partitions, and family court proceedings.",
    contextParagraph:
      "With numerous cooperative housing societies undergoing redevelopment in Kothrud, we frequently scrutinize development agreements, transit rent guarantees, and power of attorney documents to protect individual flat owners. We also represent families in partition and probate suits.",
    faqs: [
      {
        question: "What should a Kothrud society member check before signing a redevelopment agreement?",
        answer:
          "Key clauses include developer bank guarantees, transit rent escalation, RERA carpet area verification, hardship allowance, and milestone-linked completion penalties."
      },
      {
        question: "How are family property disputes resolved here?",
        answer:
          "We first explore structured family settlement deeds. If court intervention is needed, partition suits and declaration petitions are filed before the Pune Civil Court."
      },
      {
        question: "Are mutual divorce consultations handled confidentially?",
        answer:
          "Yes. All matrimonial discussions are handled with strict privacy. Terms including financial settlement and child custody can be negotiated and finalized via remote conferences."
      },
      {
        question: "How do we travel for consultations from Kothrud?",
        answer:
          "Our Kasba Peth office is easily reached via Karve Road and Laxmi Road in about 20-25 minutes."
      }
    ]
  },
  {
    slug: "baner",
    name: "Baner",
    travelTime: "~30 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Baner’s blend of IT professionals and commercial hubs brings us disputes involving RERA possession delays, startup contract drafting, and matrimonial litigation.",
    contextParagraph:
      "Baner has seen extensive residential and commercial development. We frequently act for buyers against defaulting developers, draft non-compete agreements for growing tech firms, and manage family law matters for young working couples.",
    faqs: [
      {
        question: "My builder in Baner has delayed possession. What are my remedies?",
        answer:
          "You can approach MahaRERA to claim monthly interest for the delay under Section 18 without giving up your flat, or demand full refund with interest."
      },
      {
        question: "How can startup founders in Baner protect their intellectual property?",
        answer:
          "We draft comprehensive Non-Disclosure Agreements (NDAs), founder agreements, intellectual property assignment deeds, and employment contracts."
      },
      {
        question: "Which court decides rental and eviction disputes in Baner?",
        answer:
          "Eviction and leave & licence disputes are heard by the Competent Authority (Rent Control Act) or the Small Causes Court in Pune."
      },
      {
        question: "Can all consultation steps happen digitally?",
        answer:
          "Yes, from initial review to agreement drafting, consultations can be completed over video calls and secure digital document sharing."
      }
    ]
  },
  {
    slug: "hinjewadi",
    name: "Hinjewadi",
    travelTime: "~45 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Serving IT professionals and corporate entities in Hinjewadi with employment contract review, cyber complaints, RERA disputes, and matrimonial counsel.",
    contextParagraph:
      "Matters from Hinjewadi often involve cross-jurisdictional employment contracts, stock option vesting disputes, non-solicitation covenants, and matrimonial disputes involving NRI or tech-sector spouses. Video consultations allow seamless counsel without braving highway traffic.",
    faqs: [
      {
        question: "Can an IT employer in Hinjewadi enforce a non-compete clause?",
        answer:
          "Under Section 27 of the Indian Contract Act, post-employment non-compete restrictions are generally void in India, though non-solicitation of clients and confidentiality obligations remain strictly enforceable."
      },
      {
        question: "How do video consultations work for Hinjewadi professionals with tight schedules?",
        answer:
          "We schedule evening and weekend video consultations, review documents digitally, and call you in person only when court signatures are mandatory."
      },
      {
        question: "What happens if a developer in Hinjewadi alters the project sanction plan?",
        answer:
          "Any major alteration to sanction plans requires the written consent of two-thirds of allottees under RERA; otherwise, complaints can be lodged before MahaRERA."
      },
      {
        question: "Where are criminal complaints from Hinjewadi registered and tried?",
        answer:
          "Complaints originating in Hinjewadi Police Station are processed through the Pimpri/Pune jurisdiction courts."
      }
    ]
  },
  {
    slug: "wakad",
    name: "Wakad",
    travelTime: "~40 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Wakad residents come to us for society deemed conveyance, builder delay compensation, Section 138 cheque bounce recovery, and family law.",
    contextParagraph:
      "Wakad is characterized by large residential townships. Many cooperative societies consult us when developers fail to grant deemed conveyance or hand over amenities. We also handle high-volume cheque dishonour complaints and divorce proceedings.",
    faqs: [
      {
        question: "Our Wakad society developer refuses to execute deemed conveyance. What can we do?",
        answer:
          "We file for Unilateral Deemed Conveyance before the District Deputy Registrar (DDR) to transfer land ownership directly to the society."
      },
      {
        question: "Where is a cheque bounce case filed for a Wakad transaction?",
        answer:
          "Cheque bounce complaints under Section 138 NI Act are filed in the court having jurisdiction over the branch where the payee maintains their bank account."
      },
      {
        question: "Which court hears family disputes for Wakad residents?",
        answer:
          "Matrimonial petitions from Wakad are filed and heard before the Pune Family Court in Shivajinagar."
      },
      {
        question: "Do you handle mutual consent divorce waivers?",
        answer:
          "Yes, where terms are settled, we petition for waiver of the statutory 6-month cooling period under Section 13B(2) of the Hindu Marriage Act."
      }
    ]
  },
  {
    slug: "camp",
    name: "Camp",
    travelTime: "~15 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Close to our central offices, Camp residents and business owners consult us on Cantonment land regulations, leasehold tenancies, civil suits, and commercial agreements.",
    contextParagraph:
      "Property law in Pune Cantonment has unique complexities involving old grant properties, Ministry of Defence leaseholds, and municipal bylaws. We provide specialized legal scrutiny for property transactions and longstanding tenancy disputes here.",
    faqs: [
      {
        question: "How do Cantonment Board property rules differ from standard municipal areas?",
        answer:
          "Cantonment properties frequently operate on leasehold or Old Grant terms governed by the Cantonments Act and Defence Ministry rules, requiring special sanction for transfer."
      },
      {
        question: "Where are civil suits for Camp businesses heard?",
        answer:
          "Civil suits and commercial recovery actions are adjudicated at the Pune District & Sessions Court, approximately 15 minutes away."
      },
      {
        question: "Can our business retain your firm for contract vetting?",
        answer:
          "Yes, we regularly draft, review, and negotiate commercial lease agreements, supply contracts, and vendor NDAs for Camp commercial establishments."
      },
      {
        question: "How fast can we meet in person?",
        answer:
          "Our Kasba Peth office is less than 15 minutes from MG Road and East Street."
      }
    ]
  },
  {
    slug: "kharadi",
    name: "Kharadi",
    travelTime: "~40 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "From Kharadi’s business parks and residential towers, clients consult us on RERA builder issues, commercial agreements, and civil dispute resolution.",
    contextParagraph:
      "Kharadi has seen rapid commercialization. We handle high-value property diligence, builder delay claims, commercial leasing contracts, and civil recovery suits for professionals and corporate clients.",
    faqs: [
      {
        question: "What due diligence is required before buying property in Kharadi?",
        answer:
          "We perform a 30-year search at the sub-registrar office, verify 7/12 extracts, environmental clearances, Commencement Certificates, and RERA registration credentials."
      },
      {
        question: "Can we file RERA complaints if common amenities are not delivered?",
        answer:
          "Yes, failure to deliver promised clubhouses, swimming pools, or gardens as per the sanctioned prospectus allows allottees to claim relief under MahaRERA."
      },
      {
        question: "How are mutual divorce cases handled for busy professionals in Kharadi?",
        answer:
          "We handle drafting, asset partition deeds, and scheduling via remote conferences, requiring minimal court visits in Shivajinagar."
      },
      {
        question: "Which court handles employment and civil disputes in Kharadi?",
        answer:
          "Civil recovery and contractual disputes are filed before the District Court at Shivajinagar."
      }
    ]
  },
  {
    slug: "aundh",
    name: "Aundh",
    travelTime: "~25 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Providing discreet, sophisticated legal counsel to Aundh residents for high-value estate partition, RERA disputes, matrimonial litigation, and consumer claims.",
    contextParagraph:
      "Aundh is an established, affluent residential zone. Common matters include probate of wills, family asset distribution, consumer disputes against premium builders, and divorce settlements involving overseas assets.",
    faqs: [
      {
        question: "Do I need a probate for a will executed in Pune?",
        answer:
          "While probate is not strictly compulsory for all Hindu wills in Maharashtra outside presidency town limits, obtaining probate or letters of administration definitively prevents future title disputes."
      },
      {
        question: "Where are matrimonial matters for Aundh couples heard?",
        answer:
          "All divorce, custody, and domestic violence petitions are adjudicated at the Family Court and Judicial Magistrate Court in Shivajinagar."
      },
      {
        question: "Can cross-border assets be included in a divorce settlement?",
        answer:
          "Yes, comprehensive settlement agreements can cover overseas immovable property, ESOPs, and bank accounts through legally binding consent terms."
      },
      {
        question: "How long does it take to travel to your office from Aundh?",
        answer:
          "Around 25 minutes via University Road and Shivajinagar into Kasba Peth."
      }
    ]
  },
  {
    slug: "erandwane",
    name: "Erandwane",
    travelTime: "~20 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Minutes away from our central offices, Erandwane clients rely on us for property title verification, family court disputes, and civil litigation.",
    contextParagraph:
      "In Erandwane, redevelopment of old bungalows and cooperative societies is common. We assist residents with vetting developer agreements, resolving tenancy holdouts, and representing parties in succession and partition suits.",
    faqs: [
      {
        question: "What are the common pitfalls in bungalow redevelopment in Erandwane?",
        answer:
          "Undivided ancestral shares, missing original title deeds, and non-conforming FSI calculations are the most frequent risks requiring legal scrutiny."
      },
      {
        question: "How close is your office to Erandwane?",
        answer:
          "Our Kasba Peth office is only 15 to 20 minutes away via Tilak Road or Shastri Road."
      },
      {
        question: "Where are civil suits for Erandwane properties filed?",
        answer:
          "All property declarations and civil suits are heard at the Pune District & Sessions Court in Shivajinagar."
      },
      {
        question: "Do you handle consumer complaints against service providers?",
        answer:
          "Yes, we file and argue matters before the Pune District Consumer Forum."
      }
    ]
  },
  {
    slug: "karve-nagar",
    name: "Karve Nagar",
    travelTime: "~25 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Assisting Karve Nagar families and housing societies with society conveyance, property partition, civil recovery, and matrimonial counsel.",
    contextParagraph:
      "Karve Nagar features diverse residential developments and student housing. We regularly handle landlord-tenant disputes, boundary demarcation suits, society conveyance, and domestic disputes.",
    faqs: [
      {
        question: "How do we evict a defaulting tenant in Karve Nagar?",
        answer:
          "Eviction must follow statutory procedures under the Maharashtra Rent Control Act, beginning with a formal legal notice followed by an application before the Competent Authority."
      },
      {
        question: "Which court decides family cases for Karve Nagar residents?",
        answer:
          "Pune Family Court at Shivajinagar has jurisdiction over all matrimonial disputes."
      },
      {
        question: "How can we obtain deemed conveyance for our society?",
        answer:
          "We file an application under Section 11 of the MOFA before the District Deputy Registrar with society resolution documents and title trace."
      },
      {
        question: "Can consultations be scheduled over weekends?",
        answer:
          "Yes, we accommodate working clients with Saturday and evening consultations."
      }
    ]
  },
  {
    slug: "sinhagad-road",
    name: "Sinhagad Road",
    travelTime: "~20 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Guiding Sinhagad Road clients through complex land record verifications, 7/12 extract rectifications, builder disputes, and civil court matters.",
    contextParagraph:
      "The Sinhagad Road corridor expanded rapidly, often outpacing revenue record updates. Plot purchases here frequently suffer from mismatched 7/12 extracts, non-agricultural (NA) condition breaches, and unapproved layout approvals. Legal title search is vital here.",
    faqs: [
      {
        question: "Why is 7/12 verification critical for Sinhagad Road plots?",
        answer:
          "Many layouts historically emerged from agricultural land without proper collector NA sanctions or Gunthewari regularisation. A thorough 30-year revenue search protects buyers from fraudulent title claims."
      },
      {
        question: "How do you resolve boundary and encroachment disputes?",
        answer:
          "We file for official Tilak survey (Mojani) through the Land Records Department and pursue injunction suits in Civil Court if encroachment occurs."
      },
      {
        question: "Where are Sinhagad Road cases heard?",
        answer:
          "Civil and criminal matters are tried in Pune District Courts, accessible in 20 minutes from our Kasba Peth office."
      },
      {
        question: "What happens if a builder fails to obtain an Occupancy Certificate (OC)?",
        answer:
          "We initiate proceedings before MahaRERA to compel the developer to obtain the OC and hand over legal possession."
      }
    ]
  },
  {
    slug: "hadapsar",
    name: "Hadapsar",
    travelTime: "~35 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Advising Hadapsar businesses, IT professionals, and residents on commercial leases, property acquisition, cheque bounce recovery, and civil litigation.",
    contextParagraph:
      "Hadapsar's commercial and industrial activity generates frequent recovery disputes, contract enforcement, and leave & licence defaults. We also handle family matters and builder delay litigations.",
    faqs: [
      {
        question: "Where are commercial recovery cases for Hadapsar filed?",
        answer:
          "Commercial suits above statutory threshold values are filed before the Commercial Court division in Pune District Court."
      },
      {
        question: "How is a Section 138 cheque bounce case initiated?",
        answer:
          "A statutory demand notice must be served within 30 days of the cheque return memo, followed by a criminal complaint in court within 30 days if unpaid."
      },
      {
        question: "Can our business get recurring contract drafting support?",
        answer:
          "Yes, we handle vendor agreements, service contracts, and commercial lease drafting for Hadapsar enterprises."
      },
      {
        question: "Do Hadapsar residents need to commute for regular hearings?",
        answer:
          "No, our advocates attend regular court listings on your behalf."
      }
    ]
  },
  {
    slug: "magarpatta",
    name: "Magarpatta",
    travelTime: "~35 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Representing Magarpatta City residents and corporate executives in commercial contracts, cyber law, property documentation, and family court mediation.",
    contextParagraph:
      "With Magarpatta’s corporate and township ecosystem, clients often require guidance on employment non-compete agreements, startup IP protection, township property resales, and mutual divorce settlements.",
    faqs: [
      {
        question: "What legal checks are required for flat resale in Magarpatta City?",
        answer:
          "Verifying the original allotment letter, CIDCO/township approvals, society NOC, clear encumbrance certificate, and drafting a watertight agreement to sale."
      },
      {
        question: "How do you handle mutual consent divorce for IT professionals?",
        answer:
          "We draft joint petitions with settled financial and custody terms, and seek cooling-off waiver to resolve the case swiftly."
      },
      {
        question: "Where is the Pune Family Court located?",
        answer:
          "At Shivajinagar, approximately 30-35 minutes from Magarpatta."
      },
      {
        question: "Can company documentation be vetted entirely online?",
        answer:
          "Yes, contracts, NDAs, and service agreements are reviewed and redlined digitally."
      }
    ]
  },
  {
    slug: "bavdhan",
    name: "Bavdhan",
    travelTime: "~35 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Helping Bavdhan homeowners and buyers resolve builder delays, society handover issues, property boundary disputes, and family law proceedings.",
    contextParagraph:
      "Bavdhan’s hillside and highway-adjacent developments often present questions regarding environmental clearances, hill slope construction norms, and RERA delivery timelines. We also represent families in divorce and succession matters.",
    faqs: [
      {
        question: "How can Bavdhan buyers challenge stalled builder projects?",
        answer:
          "Allottees can file a joint complaint under Section 18 of MahaRERA or invoke NCLT insolvency proceedings if the developer is fundamentally insolvent."
      },
      {
        question: "Which court has jurisdiction over Bavdhan properties?",
        answer:
          "Pune District & Civil Courts at Shivajinagar exercise full territorial and pecuniary jurisdiction."
      },
      {
        question: "How long does travel take from Bavdhan to your Kasba Peth office?",
        answer:
          "Approximately 30-35 minutes via Kothrud and Paud Road."
      },
      {
        question: "Can we execute wills and power of attorneys without multiple office visits?",
        answer:
          "Yes, draft approvals are conducted remotely, requiring only one visit for final execution and sub-registrar registration."
      }
    ]
  },
  {
    slug: "warje",
    name: "Warje",
    travelTime: "~30 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Representing Warje residents in property title searches, civil property litigation, criminal defence, and matrimonial matters.",
    contextParagraph:
      "Warje has seen dense expansion. We routinely assist clients with land demarcation, property title searches to trace ancestral ownership, civil recovery suits, and family court disputes.",
    faqs: [
      {
        question: "How far back should a title search go for Warje properties?",
        answer:
          "A minimum of 30 years search at the relevant sub-registrar office is standard to verify unbroken ownership chain."
      },
      {
        question: "Where are criminal complaints from Warje Police Station handled?",
        answer:
          "They are brought before the Judicial Magistrate First Class (JMFC) courts at Shivajinagar."
      },
      {
        question: "How are mutual divorce proceedings conducted?",
        answer:
          "Both parties appear at Pune Family Court, with our advocates handling all documentation and mediation stages."
      },
      {
        question: "Can we consult via video call initially?",
        answer:
          "Yes, all initial case reviews can be done over phone or video conference."
      }
    ]
  },
  {
    slug: "nigdi",
    name: "Nigdi",
    travelTime: "~50 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Serving Nigdi and Pradhikaran residents in PCMC builder disputes, industrial recovery suits, civil property matters, and criminal defence.",
    contextParagraph:
      "Located in the PCMC industrial belt, Nigdi clients consult us on factory land leases, industrial vendor recovery suits, Pradhikaran authority lease transfers, and litigation in both Morwadi and Shivajinagar courts.",
    faqs: [
      {
        question: "Which court decides Nigdi disputes—Pimpri or Pune?",
        answer:
          "Criminal and lower civil matters are heard at the Morwadi Court (Pimpri), while major civil suits, Family Court matters, and District & Sessions trials are heard in Shivajinagar."
      },
      {
        question: "How do you handle Pradhikaran leasehold transfer issues?",
        answer:
          "We verify PCNTDA (PMRDA) lease conditions, clearance NOCs, and ensure statutory compliance before execution."
      },
      {
        question: "Is it feasible to manage cases from Nigdi with your Pune office?",
        answer:
          "Yes. Video consultations handle 90% of meetings, and our advocates appear in court so you rarely need to travel to central Pune."
      },
      {
        question: "What are the remedies for commercial cheque bounce in Nigdi?",
        answer:
          "We file complaints under Section 138 of the NI Act in the competent magistrate court with immediate summons issuance."
      }
    ]
  },
  {
    slug: "pcmc",
    name: "PCMC",
    travelTime: "~45 min",
    officeDestination: "Kasba Peth",
    heroSubtitle:
      "Comprehensive legal representation across Pimpri-Chinchwad for industrial disputes, RERA builder delays, family law, and civil litigation.",
    contextParagraph:
      "The twin city of PCMC is an industrial powerhouse with massive residential townships. We represent clients in Morwadi Magistrate Courts and Pune District Courts on commercial recoveries, society deemed conveyance, and family disputes.",
    faqs: [
      {
        question: "Where are PCMC family disputes heard?",
        answer:
          "Matrimonial matters for PCMC residents are heard before the Pune Family Court in Shivajinagar."
      },
      {
        question: "How does our PCMC society obtain deemed conveyance against an uncooperative builder?",
        answer:
          "We file a unilateral deemed conveyance petition before the Competent Authority under MOFA."
      },
      {
        question: "Do you handle industrial and commercial disputes for PCMC businesses?",
        answer:
          "Yes, including supply agreement breaches, commercial recovery suits, and employment litigation."
      },
      {
        question: "How do consultations work across the distance?",
        answer:
          "We conduct consultations via video, review digital scans of documents, and attend all scheduled court dates directly."
      }
    ]
  }
];

export function normalizeLocationSlug(slug: string): string {
  return slug
    .replace(/^lawyers-in-/, "")
    .replace(/-pune$/, "");
}

export function getLocationBySlug(slug: string): LocationArea | undefined {
  const normalized = normalizeLocationSlug(slug);
  return locations.find(
    (loc) => loc.slug === slug || loc.slug === normalized
  );
}

export function getAllLocationSlugs(): string[] {
  const slugs: string[] = [];
  for (const loc of locations) {
    slugs.push(loc.slug);
    slugs.push(`lawyers-in-${loc.slug}-pune`);
  }
  return slugs;
}
