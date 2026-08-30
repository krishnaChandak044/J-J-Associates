// Sanity schema: Team Member / Lawyer Profile
const teamMember = {
  name: "teamMember",
  title: "Team Members / Lawyers",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "designation",
      title: "Designation (e.g. Senior Advocate)",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "photo",
      title: "Professional Photo",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    },
    {
      name: "yearsExp",
      title: "Years of Experience",
      type: "number",
    },
    {
      name: "specialties",
      title: "Areas of Speciality (tags)",
      type: "array",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    },
    {
      name: "quote",
      title: "One-Line Quote (shown on team card)",
      type: "string",
      validation: (Rule: { max: (arg0: number) => unknown }) => Rule.max(120),
    },
    {
      name: "bio",
      title: "Full Biography",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "education",
      title: "Education",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "barAdmissions",
      title: "Bar Admissions / Enrolments",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "notableMatters",
      title: "Notable Matters (anonymized)",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "email",
      title: "Direct Email",
      type: "string",
    },
    {
      name: "order",
      title: "Display Order (lower = appears first)",
      type: "number",
    },
  ],
  preview: {
    select: { title: "name", subtitle: "designation", media: "photo" },
  },
};

export default teamMember;
