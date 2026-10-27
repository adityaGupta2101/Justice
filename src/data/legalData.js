import {
  ScalesIcon,
  PropertyIcon,
  FamilyIcon,
  DocumentIcon,
  ConsumerIcon,
  ContractIcon,
  GeneralLawIcon,
} from '../components/Icons';

export const PRACTICE_CATEGORIES = [
  {
    id: 'civil-law',
    title: 'Civil Law Consultation',
    icon: ScalesIcon,
    tag: 'Dispute Advisory',
    description:
      'Legal guidance on civil suits, financial recovery, contractual defaults, injunctions, damages, and civil rights disputes governed under the Code of Civil Procedure.',
  },
  {
    id: 'property-real-estate',
    title: 'Property and Real Estate Matters',
    icon: PropertyIcon,
    tag: 'Title & Tenancy',
    description:
      'Thorough scrutiny of property titles, sale deeds, partition deeds, builder-buyer disputes, tenancy agreements, and possession or demarcation conflicts.',
  },
  {
    id: 'family-matrimonial',
    title: 'Family and Matrimonial Matters',
    icon: FamilyIcon,
    tag: 'Domestic Advisory',
    description:
      'Sensible, confidential consultation on mutual consent separation, maintenance, child custody advisories, domestic dispute settlements, and family property succession.',
  },
  {
    id: 'legal-notices',
    title: 'Legal Notices and Documentation',
    icon: DocumentIcon,
    tag: 'Statutory Drafting',
    description:
      'Drafting and replying to formal statutory legal notices, demand notices under Section 138 NI Act, legal rejoinders, power of attorney, and statutory affidavits.',
  },
  {
    id: 'consumer-disputes',
    title: 'Consumer Disputes',
    icon: ConsumerIcon,
    tag: 'Consumer Rights',
    description:
      'Consultation regarding deficiencies in services, defective goods, insurance claim rejections, unfair trade practices, and consumer forum litigation strategies.',
  },
  {
    id: 'contract-review',
    title: 'Contract and Agreement Review',
    icon: ContractIcon,
    tag: 'Legal Vetting',
    description:
      'Comprehensive legal vetting of commercial contracts, freelance agreements, non-disclosure agreements (NDAs), partnership covenants, and liability clauses.',
  },
  {
    id: 'general-consultation',
    title: 'General Legal Consultation',
    icon: GeneralLawIcon,
    tag: 'Advisory Session',
    description:
      'First-stage preliminary assessment of unfamiliar legal concerns, jurisdiction evaluation, statutory limitation analysis, and directional legal advice.',
  },
];

export const CONSULTATION_TYPES = [
  'Civil Law Consultation',
  'Property and Real Estate Matters',
  'Family and Matrimonial Matters',
  'Legal Notices and Documentation',
  'Consumer Disputes',
  'Contract and Agreement Review',
  'General Legal Consultation',
];

export const TIME_SLOTS = [
  '10:00 AM – 11:30 AM (Morning Session)',
  '11:30 AM – 01:00 PM (Midday Session)',
  '02:30 PM – 04:00 PM (Afternoon Session)',
  '04:00 PM – 05:30 PM (Late Afternoon Session)',
  '05:30 PM – 07:00 PM (Evening Chamber Session)',
];

export const FAQS = [
  {
    question: 'How can I request a consultation?',
    answer:
      'You can request a consultation by completing the online booking form on this website. Simply choose your legal matter category, provide your contact coordinates, select a preferred date and time slot, and furnish a concise summary of the legal issue you wish to discuss.',
  },
  {
    question: 'Can I select my preferred appointment time?',
    answer:
      'Yes, the consultation schedule allows you to select from standard morning, midday, afternoon, and evening chamber sessions. While this demo site simulates time slot reservations, in actual practice the chamber confirms availability prior to final appointment scheduling.',
  },
  {
    question: 'What information should I provide before a consultation?',
    answer:
      'It is advisable to provide the primary factual background, details of any adverse parties, relevant timelines, and a list of key documents currently in your possession (e.g., contracts, notices, registry deeds, or correspondence). Avoid including confidential passwords or irrelevant personal data.',
  },
  {
    question: 'Will submitting this demo form confirm my appointment?',
    answer:
      'No. This website is currently a frontend-only demonstration prototype designed for client review. Submitting the form generates a sample reference number for demonstration purposes, but does not send data to external servers or confirm a live appointment with Advocate Ashutosh Pathak.',
  },
  {
    question: 'Can I discuss my legal matter during a consultation?',
    answer:
      'Yes, legal consultations are specifically held to examine your circumstances, review relevant documentation, evaluate statutory rights and remedies, and discuss potential legal notices, dispute settlements, or court proceedings where appropriate.',
  },
  {
    question: 'How are client confidentiality and communications protected?',
    answer:
      'All substantive discussions between an advocate and client are governed by professional legal privilege and ethical standards under the Advocates Act. Discretion and confidentiality are maintained throughout the advisory process.',
  },
];

export const CONTACT_PLACEHOLDERS = {
  officeAddress: '[Chamber / Office Address Placeholder — e.g., Chamber No. 402, Lawyers Chambers Block, District Courts Complex]',
  contactNumber: '[Consultation Helpline Placeholder — +91 XXXXX XXXXX]',
  emailAddress: '[Official Email Placeholder — advocate.ashutoshpathak@example.com]',
  officeHours: '[Monday – Saturday: 10:00 AM – 6:30 PM | Sundays: By Prior Appointment Only]',
};
