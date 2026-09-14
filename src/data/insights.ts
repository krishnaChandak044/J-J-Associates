// Jaju & Jaju Associates — Legal Insights
// Static seed content. Replace/extend with Sanity CMS when ready.

export interface InsightArticle {
  slug: string;
  title: string;
  category: string;
  date: string;       // ISO date string
  readTime: string;   // e.g. "5 min read"
  excerpt: string;
  body: string[];     // Paragraphs
  relatedSlugs?: string[];
}

export const insights: InsightArticle[] = [
  {
    slug: 'mutual-consent-divorce-pune',
    title: 'Mutual Consent Divorce in Pune: What the Process Actually Looks Like',
    category: 'Family Law',
    date: '2025-10-15',
    readTime: '6 min read',
    excerpt:
      'Both parties agree to divorce — so why does it still take months? A plain-language explanation of the Section 13B process, the cooling-off period, and when a waiver is possible.',
    body: [
      'Mutual consent divorce under Section 13B of the Hindu Marriage Act is often described as the "simpler" divorce — and in relative terms, it is. Both parties have agreed on the separation, on maintenance, on property division, and on child custody if children are involved. The court\'s role is largely to confirm that the consent is genuine and the terms are fair.',
      'But simple does not mean fast. The process involves two motions before the Family Court. The first motion is filed along with the petition. The second motion can be filed only after a mandatory waiting period of six months from the date of the first motion. This waiting period — the "cooling-off period" — exists to allow the parties to reconsider.',
      'The six-month period is not always mandatory. The Supreme Court, in Amardeep Singh v. Harveen Kaur (2017), held that courts have the discretion to waive the cooling-off period where both parties have been living separately for a long time, where the marriage is clearly beyond repair, and where there are no minor children whose welfare requires further consideration.',
      'Practically, what does this mean? If both parties are ready with all documents at the time of filing, the cooling-off waiver is applied for simultaneously. If the court grants it — which is not guaranteed, and which requires specific averments in the petition — the second motion can be filed shortly after the first, and a decree of divorce can follow within a few months of the initial filing.',
      'What documents are needed? A marriage certificate, evidence of separate residence, a joint statement signed by both parties setting out the agreed terms (maintenance, property, custody), and the advocate\'s vakalatnama are the core requirements. Additional affidavits may be needed depending on the court\'s specific requirements.',
      'One practical note on timing: family courts in Pune handle a large volume of cases. Even after both motions are filed, the actual date of the decree depends on the court\'s scheduling — which neither party nor advocate fully controls. Managing these expectations honestly is part of how we approach mutual consent divorce matters.',
    ],
    relatedSlugs: ['anticipatory-bail-when-to-apply', 'property-title-verification-pune'],
  },
  {
    slug: 'anticipatory-bail-when-to-apply',
    title: 'Anticipatory Bail: When to Apply, and What the Court Weighs',
    category: 'Criminal Law',
    date: '2025-09-08',
    readTime: '7 min read',
    excerpt:
      'An anticipatory bail application filed at the right moment — before the FIR is registered or immediately after — can make a significant difference to how a criminal matter unfolds.',
    body: [
      'Anticipatory bail — now governed by Section 482 of the Bharatiya Nagarik Suraksha Sanhita 2023 (which replaced Section 438 of the old CrPC) — is a direction by the Sessions Court or High Court that if a person is arrested, they shall be released on bail. It is applied for before an arrest takes place.',
      'The critical distinction is timing. Anticipatory bail is not applied for after arrest — that is regular bail under Section 480 BNSS. Anticipatory bail is for situations where a person has reason to apprehend arrest in connection with a non-bailable offence. The apprehension must be real, not speculative.',
      'What factors does a court weigh when deciding an anticipatory bail application? The law sets out several: the nature and gravity of the accusation, the applicant\'s antecedents, the possibility that the person will flee justice if released, and whether the accusation appears to be motivated by a desire to humiliate and injure the applicant.',
      'The forum matters. For most offences, the Sessions Court is the first forum for an anticipatory bail application. For offences that are exclusively triable by the Court of Session, the High Court may be the appropriate forum, particularly in urgent cases where the Sessions Court is not immediately available.',
      'Conditions. Anticipatory bail is almost invariably granted with conditions: an obligation to report to the police station on certain days, a requirement not to leave the country without prior court approval, a direction not to tamper with evidence or contact witnesses, and sometimes a surety requirement.',
      'From a practical standpoint, the strongest anticipatory bail applications are those filed with specific, detailed averments about why the arrest is apprehended and why the allegations are unfounded or motivated. If you have reason to believe that an FIR is about to be filed against you, contacting an advocate immediately — before speaking to the police, if possible — is the most important first step.',
    ],
    relatedSlugs: ['498a-defence-what-to-expect', 'mutual-consent-divorce-pune'],
  },
  {
    slug: '498a-defence-what-to-expect',
    title: 'Facing a 498A Complaint in Pune: What the Defence Looks Like',
    category: 'Criminal Law',
    date: '2025-08-22',
    readTime: '8 min read',
    excerpt:
      'Section 498A of the Indian Penal Code (now Section 85 of the BNS) creates a criminal offence out of matrimonial cruelty. Here is what the defence actually involves.',
    body: [
      'Section 85 of the Bharatiya Nyaya Sanhita 2023 — which replaced Section 498A of the Indian Penal Code — criminalises cruelty by a husband or his relatives towards a wife. The offence is cognisable and non-bailable, which means the police can make arrests without a warrant, and bail is not a matter of right at the magistrate level.',
      'The history of Section 498A — and its current form under the BNS — is relevant context. The provision was introduced to protect women from domestic cruelty and dowry harassment. Over time, courts — including the Supreme Court — have acknowledged that the provision has occasionally been invoked in matrimonial disputes as a tactical move.',
      'When a 498A FIR is registered, several things happen quickly. The police can summon the accused persons for questioning. If arrests are imminent, anticipatory bail applications need to be filed without delay. The application should specifically address the allegations in the FIR — not generically, but by examining each allegation and presenting the factual context.',
      'The investigation stage involves recorded statements, examination of witnesses, and collection of documents. The accused is entitled to remain silent during police questioning — the right against self-incrimination applies. No statement to the police by an accused person is admissible as evidence against them in court.',
      'If a chargesheet is filed, the matter moves to trial. Trial under Section 85 BNS takes place before the Magistrate Court for most accused, and may be committed to the Sessions Court depending on the specific allegations. The trial can take several years.',
      'The defence in these matters is a combination of the bail strategy (immediate), the investigation management (first few months), and the trial preparation (long-term). Each stage requires different work, and the approach at each stage affects the outcome at the next.',
    ],
    relatedSlugs: ['anticipatory-bail-when-to-apply', 'mutual-consent-divorce-pune'],
  },
  {
    slug: 'property-title-verification-pune',
    title: 'Title Verification Before Buying Property in Pune: What It Covers and Why It Matters',
    category: 'Property Law',
    date: '2025-07-10',
    readTime: '6 min read',
    excerpt:
      'Title verification is one of the most underused legal safeguards in property transactions. A plain explanation of what it involves and why a "clean" looking property can still carry significant risk.',
    body: [
      'A property transaction in India — whether a flat in Pune, agricultural land in the surrounding areas, or a commercial space — involves a title that needs to be verified. Title verification is the legal process of examining the history of ownership of a property, establishing that the current seller has the right to sell, and identifying any encumbrances, disputes, or restrictions.',
      'Most buyers either skip title verification entirely, or commission a perfunctory check that amounts to reading the current sale deed and assuming everything is fine. This is a significant risk.',
      'What does a proper title verification actually involve? The chain of title — ideally for the preceding 30 years — is examined. This means reviewing every deed, conveyance, partition document, gift deed, or court order through which ownership passed from one person to the next.',
      'Encumbrances are the other major risk. A mortgage on the property that was never discharged. A court-ordered attachment in a dispute between the seller and a third party. A lien in favour of a bank. These do not show up from reading the sale deed alone — they require a search of the Sub-Registrar\'s records and the Mahabhulekh (land records) and CERSAI databases.',
      'In Pune specifically, several types of property carry particular risks. Agricultural land near the city limits may be subject to conversion requirements — land that is zoned agricultural cannot be legally used for residential or commercial construction without conversion permission from the Collectorate.',
      'Title verification is not an expensive exercise relative to the cost of the property it protects. A written legal opinion, based on a proper document review, takes a few days and gives the buyer a clear picture of what they are purchasing — and what the risks are.',
    ],
    relatedSlugs: ['consumer-forum-complaint-pune', 'mutual-consent-divorce-pune'],
  },
  {
    slug: 'consumer-forum-complaint-pune',
    title: 'Filing a Consumer Forum Complaint in Pune: What Works and What Doesn\'t',
    category: 'Consumer Law',
    date: '2025-06-05',
    readTime: '5 min read',
    excerpt:
      'The Consumer Protection Act 2019 expanded consumer rights significantly. But not every grievance is actionable — understanding what makes a strong complaint determines whether it is worth filing.',
    body: [
      'The Consumer Protection Act 2019 replaced the 1986 Act and made several significant changes: the pecuniary limits for district forums were revised upward (the District Consumer Disputes Redressal Commission now has jurisdiction up to ₹1 crore), mediation was made a mandatory pre-hearing step, and an online complaint mechanism (e-Daakhil) was introduced.',
      'What makes a consumer complaint actionable? Three elements: a deficiency in service or defect in goods, a consumer relationship (you are the person who purchased the service or goods), and a quantifiable loss. The third element is often where otherwise valid complaints struggle — the consumer must be able to specify the relief sought in concrete terms.',
      'What does not work? Vague complaints that describe dissatisfaction without specifying the deficiency clearly. Complaints where the consumer relationship is in dispute. Complaints that are barred by limitation — consumer complaints must generally be filed within two years of the cause of action arising.',
      'Mediation. Under the 2019 Act, both parties are referred to mediation before the substantive complaint is heard. Mediation is not a formality — settlement at this stage is common and often faster than a full hearing.',
      'Builder disputes deserve a separate note. Builder-related consumer complaints and RERA complaints cover some overlapping ground — delayed possession, failure to hand over agreed amenities, construction defects. The forums are different, the reliefs are somewhat different, and the two are not mutually exclusive.',
      'Cheque bounce matters — which are technically criminal proceedings under Section 138 of the Negotiable Instruments Act, not consumer complaints — are sometimes confused with consumer forum jurisdiction. They are different processes with different courts, timelines, and outcomes.',
    ],
    relatedSlugs: ['property-title-verification-pune', '498a-defence-what-to-expect'],
  },
  {
    slug: 'why-hire-advocate-vs-self-represent',
    title: 'Representing Yourself in Court vs. Hiring an Advocate: What the Tradeoffs Actually Are',
    category: 'General',
    date: '2025-05-12',
    readTime: '5 min read',
    excerpt:
      'Self-representation in court — called appearing "in person" — is a legal right. But the question of when it makes sense, and what it actually costs, deserves an honest answer.',
    body: [
      'Litigants in India have the right to represent themselves before any court. This is called appearing "in person" or as a "party-in-person." It is not uncommon in consumer forum matters, matrimonial proceedings (particularly mutual consent divorces), and small-value civil suits.',
      'The question is not whether you can represent yourself — it is whether it makes sense to do so in your specific matter. The answer depends on three factors: the complexity of the legal issues involved, the value of the outcome to you, and your familiarity with the court process.',
      'For matters with straightforward facts and well-established legal outcomes — a mutual consent divorce where terms are agreed, an uncontested probate application, a simple affidavit — self-representation is often practical.',
      'For matters where the legal outcome is genuinely uncertain, where the other side is legally represented, where interim orders are sought (injunctions, bail, maintenance), or where the facts are disputed and cross-examination will determine the outcome — self-representation carries real risk.',
      'The cost of an advocate is a real consideration. We do not pretend otherwise. But the relevant comparison is not the advocate\'s fee against nothing — it is the advocate\'s fee against the potential cost of an adverse outcome.',
      'Our view: if the matter is significant enough to be in court, it is usually significant enough to have proper legal representation. If cost is the constraint, that is a conversation worth having at the first consultation.',
    ],
    relatedSlugs: ['mutual-consent-divorce-pune', 'consumer-forum-complaint-pune'],
  },
];

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getRelatedInsights(slugs: string[]): InsightArticle[] {
  return insights.filter((i) => slugs.includes(i.slug));
}

export function formatInsightDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
