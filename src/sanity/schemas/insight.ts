// Sanity schema: Blog Post / Insight
const insight = {
  name: "insight",
  title: "Blog Posts / Insights",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Article Title",
      type: "string",
      validation: (Rule: { required: () => { max: (arg0: number) => unknown } }) =>
        Rule.required().max(100),
    },
    {
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Divorce", value: "divorce" },
          { title: "Family Law", value: "family" },
          { title: "Criminal Defense", value: "criminal" },
          { title: "Civil Litigation", value: "civil-litigation" },
          { title: "Property", value: "property" },
          { title: "Corporate", value: "corporate" },
          { title: "Consumer Matters", value: "consumer" },
          { title: "Cheque Bounce", value: "cheque-bounce" },
          { title: "Documentation", value: "documentation" },
          { title: "General Legal", value: "general" },
        ],
      },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "excerpt",
      title: "Excerpt (shown on cards — max 150 chars)",
      type: "text",
      rows: 3,
      validation: (Rule: { required: () => { max: (arg0: number) => unknown } }) =>
        Rule.required().max(150),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", type: "string", title: "Alt Text" }],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "teamMember" }],
    },
    {
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
    },
    {
      name: "readTime",
      title: "Read Time (minutes)",
      type: "number",
    },
    {
      name: "content",
      title: "Article Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", type: "string", title: "Alt Text" }],
        },
      ],
    },
    {
      name: "seoTitle",
      title: "SEO Title (optional override)",
      type: "string",
      description: "If blank, the article title is used.",
    },
    {
      name: "seoDesc",
      title: "SEO Description (optional override)",
      type: "text",
      rows: 2,
      description: "If blank, the excerpt is used.",
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", media: "coverImage" },
  },
};

export default insight;
