"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Phone, 
  X, 
  ChevronRight, 
  ArrowLeft, 
  Send, 
  AlertCircle, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Scale, 
  Building2 
} from "lucide-react";
import styles from "./EnquiryAssistant.module.css";
import { siteConfig } from "@/data/siteConfig";

interface EnquiryAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

type Step = "disclaimer" | "topics" | "detail";

interface MatterTopic {
  id: string;
  label: string;
  category: string;
  court: string;
  laws: string;
  summary: string;
  documents: string[];
  pageHref: string;
  keywords: string[];
}

const MATTER_TOPICS: MatterTopic[] = [
  {
    id: "divorce",
    label: "Divorce or separation",
    category: "Family Law",
    court: "Family Court, Shivajinagar, Pune",
    laws: "Section 13B (Mutual Consent) & Section 13 (Contested) · Hindu Marriage Act / Special Marriage Act",
    summary: "Hears mutual consent petitions, contested divorces, permanent alimony, interim maintenance, and child custody disputes across Pune district.",
    documents: [
      "Marriage registration certificate or wedding invitation & photographs",
      "Address & identity proof of both spouses (Aadhaar / Passport)",
      "Financial disclosures / ITR / salary slips (for maintenance or child support)",
      "Mutual settlement terms sheet (if mutually agreed)"
    ],
    pageHref: "/practice-areas/family-law",
    keywords: ["divorce", "separation", "mutual", "contested", "custody", "alimony", "maintenance", "marriage", "wife", "husband"]
  },
  {
    id: "domestic-violence",
    label: "Domestic violence or 498A",
    category: "Family & Criminal Law",
    court: "Judicial Magistrate First Class (JMFC) & Sessions Court, Shivajinagar, Pune",
    laws: "Protection of Women from Domestic Violence Act (PWDVA) & Section 498A IPC / Section 85 BNS",
    summary: "Deals with emergency protection orders, residence orders, monetary relief, and criminal defence against matrimonial allegations or anticipatory bail.",
    documents: [
      "Copy of FIR, police complaint, or Domestic Incident Report (DIR)",
      "Medical records, treatment sheets, or MLC report (if injuries alleged)",
      "Proof of shared residence and financial dependency",
      "Any prior notices, correspondence, or WhatsApp/call records"
    ],
    pageHref: "/practice-areas/family-law",
    keywords: ["domestic violence", "dv", "498a", "cruelty", "harassment", "police complaint", "protection order", "maintenance"]
  },
  {
    id: "criminal-bail",
    label: "Criminal, FIR or bail",
    category: "Criminal Law",
    court: "Sessions Court, Pune & JMFC Courts / Bombay High Court",
    laws: "Bharatiya Nagarik Suraksha Sanhita (BNSS) / Code of Criminal Procedure (CrPC)",
    summary: "Immediate filing for Anticipatory Bail (before arrest), Regular Bail (post-arrest), quashing of FIRs, and trial representation in Pune courts.",
    documents: [
      "Copy of First Information Report (FIR) & Police Station crime number",
      "Arrest memo / Remand report (if accused is already detained)",
      "Identity proof and Pune resident address proof for sureties",
      "Supporting alibi evidence or medical certificates (if relevant)"
    ],
    pageHref: "/practice-areas/criminal-law",
    keywords: ["criminal", "fir", "bail", "anticipatory bail", "police", "arrest", "sessions court", "crime", "accused", "warrant"]
  },
  {
    id: "cheque-bounce",
    label: "Cheque bounce or recovery",
    category: "Commercial & Criminal",
    court: "Special JMFC Court (NI Act), Shivajinagar, Pune",
    laws: "Section 138, Negotiable Instruments Act, 1881 & Order 37 CPC Summary Suits",
    summary: "Enforces financial recovery through statutory legal demand notices and fast-track criminal trial for dishonoured cheques.",
    documents: [
      "Original dishonoured cheque and Bank Return Memo with reason",
      "Copy of 15-day statutory Demand Notice served within 30 days of bounce",
      "Postal receipt & speed post delivery tracking report / acknowledgment",
      "Underlying invoice, agreement, promissory note, or proof of debt"
    ],
    pageHref: "/practice-areas/consumer-cheque",
    keywords: ["cheque", "cheque bounce", "dishonour", "138", "ni act", "recovery", "money", "payment", "bank return memo", "debt"]
  },
  {
    id: "property-partition",
    label: "Property or partition",
    category: "Property & Civil Law",
    court: "Civil Court Senior Division, Pune & Revenue Courts (Tahsildar / SDO)",
    laws: "Transfer of Property Act, 1882 · Hindu Succession Act · Specific Relief Act",
    summary: "Resolves ancestral land division, co-ownership disputes, title defects, boundary demarcation, and injunctions against illegal possession.",
    documents: [
      "Registered Sale Deed, Gift Deed, or Title Conveyance document",
      "7/12 Extract (Saat-Baara), 8-A Extract, or City Survey Property Card (Akhiv Patrika)",
      "Mutation entries (Ferfar Patrak) reflecting chain of ownership",
      "Family pedigree / genealogical tree (Vanshval) for partition claims"
    ],
    pageHref: "/practice-areas/property-law",
    keywords: ["property", "partition", "land", "plot", "flat", "7/12", "saat baara", "ancestral", "heir", "title", "possession", "civil court"]
  },
  {
    id: "builder-delay",
    label: "Builder delay or possession",
    category: "Real Estate / RERA",
    court: "MahaRERA Tribunal (Pune Bench) & District Consumer Commission, Pune",
    laws: "Real Estate (Regulation & Development) Act, 2016 & Consumer Protection Act",
    summary: "Represents flat buyers seeking delayed possession interest, project completion enforcement, refund of investment, or structural defect rectifications.",
    documents: [
      "Registered Agreement for Sale / Allotment Letter / Cost sheet",
      "All payment receipts, bank disbursement records, and ledger statement",
      "Builder correspondence / emails committing delivery date",
      "MahaRERA project registration number and approved sanction plans"
    ],
    pageHref: "/practice-areas/property-law",
    keywords: ["builder", "possession", "rera", "maharera", "flat", "delay", "developer", "refund", "interest", "amenities", "housing"]
  },
  {
    id: "consumer-complaint",
    label: "Consumer complaint",
    category: "Consumer Law",
    court: "District Consumer Disputes Redressal Commission, Pune (Camp & Shivajinagar)",
    laws: "Consumer Protection Act, 2019",
    summary: "Claims compensation and damages for defective goods, deficiency in banking/insurance/travel services, or unfair trade practices.",
    documents: [
      "Tax invoice, booking voucher, bill, or service agreement",
      "Warranty / guarantee card or insurance policy schedule",
      "Written grievances filed with customer support and their responses",
      "Proof of financial loss or deficiency sustained"
    ],
    pageHref: "/practice-areas/consumer-cheque",
    keywords: ["consumer", "deficiency", "insurance", "claim", "hospital", "bank", "defect", "product", "complaint", "compensation"]
  },
  {
    id: "rent-tenancy",
    label: "Rent, tenancy or eviction",
    category: "Civil & Tenancy Law",
    court: "Small Causes Court, Pune (Shivajinagar) & Competent Authority (Rent Control)",
    laws: "Maharashtra Rent Control Act, 1999",
    summary: "Eviction proceedings for non-payment of rent, bonafide requirement, license expiry, recovery of security deposit, and tenancy dispute resolution.",
    documents: [
      "Registered Leave and License Agreement or Lease Deed",
      "Rent receipts or bank transfer transaction records",
      "Statutory notice to vacate / termination notice with postal proof",
      "Property ownership deed or tax assessment receipt"
    ],
    pageHref: "/practice-areas/civil-law",
    keywords: ["rent", "tenant", "landlord", "eviction", "leave and license", "deposit", "lease", "vacate", "licensee"]
  },
  {
    id: "business-partnership",
    label: "Business or partnership",
    category: "Corporate & Commercial",
    court: "Commercial Court / Civil Court SD, Pune & Arbitration Tribunals",
    laws: "Indian Partnership Act, 1932 · Companies Act, 2013 · Indian Contract Act",
    summary: "Handles partnership dissolutions, partner disputes, vendor breach of contract, shareholder disagreements, and commercial arbitration.",
    documents: [
      "Registered Partnership Deed, LLP Agreement, or MOA/AOA",
      "Registration certificates (ROF / ROC / MSME / GST)",
      "Disputed vendor contracts, work orders, invoices, and payment statements",
      "Notices exchanged between partners or commercial counterparties"
    ],
    pageHref: "/practice-areas/civil-law",
    keywords: ["business", "partnership", "company", "contract", "agreement", "commercial", "vendor", "dispute", "arbitration", "shares"]
  },
  {
    id: "drafting-document",
    label: "Drafting a document",
    category: "Legal Documentation",
    court: "Sub-Registrar Offices across Pune (Haveli) & Notary Public",
    laws: "Registration Act, 1908 & Maharashtra Stamp Act",
    summary: "Professional legal drafting of Wills, Power of Attorney (PoA), Gift Deeds, Lease Agreements, Settlement Deeds, and Statutory Legal Notices.",
    documents: [
      "Government Photo ID & PAN of all parties and witnesses",
      "Underlying title documents or asset details to be drafted/transferred",
      "Specific agreed clauses, consideration amount, and conditions"
    ],
    pageHref: "/practice-areas/documentation",
    keywords: ["drafting", "draft", "will", "power of attorney", "poa", "agreement", "contract", "deed", "notice", "gift deed", "settlement"]
  },
  {
    id: "notary-affidavit",
    label: "Notary or affidavit",
    category: "Notarial Services",
    court: "Notary Public & Oath Commissioner, Pune Courts",
    laws: "Notaries Act, 1952 & Indian Oaths Act",
    summary: "Attestation and execution of sworn court affidavits, name change affidavits, educational gap affidavits, address proofs, and declarations.",
    documents: [
      "Government Photo ID (Aadhaar / Passport / Voter ID)",
      "Non-judicial e-stamp paper (as applicable under Maharashtra Stamp Act)",
      "Documentary proof substantiating the declared statement"
    ],
    pageHref: "/practice-areas/documentation",
    keywords: ["notary", "affidavit", "stamp paper", "attestation", "declaration", "oath", "name change", "gap certificate"]
  },
  {
    id: "employment-salary",
    label: "Employment or salary",
    category: "Labour & Service Law",
    court: "Labour Court & Industrial Court, Pune (Wakdewadi) / Civil Court",
    laws: "Industrial Disputes Act & Maharashtra Recognition of Trade Unions Act",
    summary: "Assistance regarding wrongful termination, unpaid salary/dues, non-compete disputes, gratuity recovery, and formal legal representation.",
    documents: [
      "Appointment letter, offer letter, and employment contract",
      "Salary slips and bank statements showing unpaid salary or deductions",
      "Termination letter, email communications, and resignation responses",
      "Relieving letter, experience certificate, and gratuity/PF statements"
    ],
    pageHref: "/practice-areas/civil-law",
    keywords: ["employment", "job", "salary", "termination", "boss", "gratuity", "labour court", "unpaid", "hr", "service"]
  }
];

export function EnquiryAssistant({ isOpen, onClose }: EnquiryAssistantProps) {
  const [step, setStep] = useState<Step>("disclaimer");
  const [selectedTopic, setSelectedTopic] = useState<MatterTopic | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Click outside to close (desktop)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen && 
        modalRef.current && 
        !modalRef.current.contains(e.target as Node)
      ) {
        // Check if the click was not on the floating CTA button itself
        const target = e.target as HTMLElement;
        if (!target.closest("[data-enquiry-trigger]")) {
          onClose();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Search logic for Step 2
  const filteredTopics = MATTER_TOPICS.filter((topic) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase().trim();
    return (
      topic.label.toLowerCase().includes(q) ||
      topic.category.toLowerCase().includes(q) ||
      topic.court.toLowerCase().includes(q) ||
      topic.keywords.some(k => k.includes(q))
    );
  });

  const handleSelectTopic = (topic: MatterTopic) => {
    setSelectedTopic(topic);
    setStep("detail");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (filteredTopics.length > 0) {
      setSelectedTopic(filteredTopics[0]);
      setStep("detail");
    }
  };

  return (
    <div 
      className={styles.assistantCard} 
      ref={modalRef} 
      role="dialog" 
      aria-label="Enquiry assistant"
    >
      {/* ── Top Header ─────────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.headerTitleWrap}>
          {step !== "disclaimer" && (
            <button 
              type="button"
              className={styles.backBtn}
              onClick={() => {
                if (step === "detail") setStep("topics");
                else setStep("disclaimer");
              }}
              aria-label="Back"
            >
              <ArrowLeft size={16} />
            </button>
          )}
          <div>
            <h3 className={styles.title}>Enquiry assistant</h3>
            <p className={styles.subtitle}>Not confidential · not legal advice</p>
          </div>
        </div>

        <div className={styles.headerActions}>
          <a 
            href={`tel:${siteConfig.phoneRaw}`} 
            className={styles.iconBtn} 
            title={`Call ${siteConfig.phone}`}
            aria-label="Call Advocate"
          >
            <Phone size={17} />
          </a>
          <button 
            type="button" 
            className={styles.iconBtn} 
            onClick={onClose} 
            title="Close"
            aria-label="Close assistant"
          >
            <X size={19} />
          </button>
        </div>
      </header>

      {/* ── Screen 1: Disclaimer ("Before you start, four things") ─── */}
      {step === "disclaimer" && (
        <div className={styles.bodyDisclaimer}>
          <div className={styles.alertIcon}>
            <AlertCircle size={28} strokeWidth={2} />
          </div>

          <h4 className={styles.disclaimerHeading}>Before you start, four things</h4>

          <ul className={styles.disclaimerList}>
            <li>This is an automated assistant, not an advocate.</li>
            <li>It cannot give legal advice, quote fees, or tell you what the law says.</li>
            <li>
              <strong>
                This chat is not confidential and not privileged — please don't type the details of your matter, names, or any ID numbers.
              </strong>
            </li>
            <li>No advocate–client relationship is created by using it.</li>
          </ul>

          <p className={styles.disclaimerNote}>
            It can tell you which court in Pune hears your kind of matter, which page here covers it, and what documents to bring to a first meeting. See our{" "}
            <Link href="/privacy-policy" onClick={onClose} className={styles.linkText}>privacy policy</Link> and{" "}
            <Link href="/disclaimer" onClick={onClose} className={styles.linkText}>disclaimer</Link>.
          </p>

          <button 
            type="button" 
            className={styles.primaryBtn}
            onClick={() => setStep("topics")}
          >
            I understand — continue
          </button>

          <a href={`tel:${siteConfig.phoneRaw}`} className={styles.phoneFallback}>
            <Phone size={14} />
            <span>Or just call {siteConfig.phone}</span>
          </a>
        </div>
      )}

      {/* ── Screen 2: Topic Selection & Quick Router ───────────────── */}
      {step === "topics" && (
        <div className={styles.bodyTopics}>
          <div className={styles.topicsIntro}>
            <p>
              Tell me the type of matter and I'll point you to the right court in Pune, and what papers to bring. Marathi, Hindi or English.
            </p>
          </div>

          <div className={styles.topicsList}>
            {filteredTopics.length > 0 ? (
              filteredTopics.map((topic) => (
                <button
                  key={topic.id}
                  type="button"
                  className={styles.topicRow}
                  onClick={() => handleSelectTopic(topic)}
                >
                  <span className={styles.topicLabel}>{topic.label}</span>
                  <ChevronRight size={18} className={styles.topicChevron} />
                </button>
              ))
            ) : (
              <div className={styles.emptyState}>
                <p>No specific match found for &ldquo;{searchQuery}&rdquo;.</p>
                <span>Please call our office or select a category below.</span>
              </div>
            )}
          </div>

          <form className={styles.searchBar} onSubmit={handleSearchSubmit}>
            <input
              ref={inputRef}
              type="text"
              className={styles.searchInput}
              placeholder="What type of matter is it?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="What type of matter is it?"
            />
            <button 
              type="submit" 
              className={styles.searchSubmitBtn} 
              aria-label="Find court & documents"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}

      {/* ── Screen 3: Matter Guidance Details ───────────────────────── */}
      {step === "detail" && selectedTopic && (
        <div className={styles.bodyDetail}>
          <div className={styles.detailScrollArea}>
            <div className={styles.detailBadge}>
              <Scale size={13} />
              <span>{selectedTopic.category}</span>
            </div>

            <h4 className={styles.detailTitle}>{selectedTopic.label}</h4>

            {/* Pune Court Jurisdiction */}
            <div className={styles.infoCard}>
              <div className={styles.infoCardHeader}>
                <Building2 size={16} className={styles.infoIcon} />
                <strong>Pune Court Jurisdiction</strong>
              </div>
              <p className={styles.infoCardText}>{selectedTopic.court}</p>
              <p className={styles.lawsReference}>{selectedTopic.laws}</p>
            </div>

            {/* Scope / Summary */}
            <p className={styles.summaryText}>{selectedTopic.summary}</p>

            {/* Checklist of Papers */}
            <div className={styles.documentsCard}>
              <div className={styles.infoCardHeader}>
                <FileText size={16} className={styles.infoIcon} />
                <strong>What papers to bring to a first meeting</strong>
              </div>
              <ul className={styles.docList}>
                {selectedTopic.documents.map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>

            {/* Action buttons */}
            <div className={styles.detailActions}>
              <Link 
                href="/contact#enquiry" 
                onClick={onClose} 
                className={styles.primaryBtn}
              >
                <Calendar size={16} />
                <span>Request a Call Back</span>
              </Link>

              <div className={styles.detailRowBtns}>
                <a 
                  href={`tel:${siteConfig.phoneRaw}`} 
                  className={styles.secondaryCallBtn}
                >
                  <Phone size={15} />
                  <span>Call Advocate</span>
                </a>
                <a 
                  href={`${siteConfig.whatsapp}?text=${encodeURIComponent(
                    `Hello Advocate Jaju, I need guidance regarding ${selectedTopic.label} in Pune courts.`
                  )}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.secondaryWhatsAppBtn}
                >
                  <MessageSquare size={15} />
                  <span>WhatsApp</span>
                </a>
              </div>

              <Link 
                href={selectedTopic.pageHref} 
                onClick={onClose}
                className={styles.pageLink}
              >
                Explore {selectedTopic.category} Practice Area →
              </Link>
            </div>
          </div>

          <button 
            type="button" 
            className={styles.anotherMatterBtn}
            onClick={() => {
              setSearchQuery("");
              setStep("topics");
            }}
          >
            ← Select another type of matter
          </button>
        </div>
      )}
    </div>
  );
}
