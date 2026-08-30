// Sanity schema: Case Result
const caseResult = {
  name: "caseResult",
  title: "Case Results",
  type: "document",
  fields: [
    {
      name: "practiceArea",
      title: "Practice Area",
      type: "string",
      options: {
        list: [
          { title: "Divorce", value: "divorce" },
          { title: "Family Law", value: "family-law" },
          { title: "Criminal Defense", value: "criminal-defense" },
          { title: "Civil Litigation", value: "civil-litigation" },
          { title: "Property", value: "property" },
          { title: "Corporate", value: "corporate" },
          { title: "Consumer Matters", value: "consumer-matters" },
          { title: "Cheque Bounce", value: "cheque-bounce" },
          { title: "Documentation", value: "documentation" },
          { title: "Consultations", value: "consultations" },
        ],
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "matterType",
      title: "Matter Type (short description)",
      type: "string",
      description: 'E.g. "Contested Divorce — Ancestral Property Dispute"',
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "situation",
      title: "The Situation (2 sentences)",
      type: "text",
      rows: 3,
      description: "Brief anonymous description of the client's situation.",
    },
    {
      name: "outcome",
      title: "The Outcome (2 sentences)",
      type: "text",
      rows: 3,
      description: "What was achieved. Be specific but anonymised.",
    },
    {
      name: "duration",
      title: "Duration",
      type: "string",
      description: 'E.g. "14 months"',
    },
    {
      name: "court",
      title: "Court / Forum",
      type: "string",
      description: 'E.g. "Family Court, Pune"',
    },
    {
      name: "year",
      title: "Year",
      type: "number",
    },
  ],
  preview: {
    select: { title: "matterType", subtitle: "practiceArea" },
  },
};

export default caseResult;
