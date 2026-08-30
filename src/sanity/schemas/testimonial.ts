// Sanity schema: Testimonial
const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "text",
      title: "Testimonial Text",
      type: "text",
      rows: 4,
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "clientType",
      title: "Client Type (e.g. Divorce Matter)",
      type: "string",
      description: "Anonymised description — do not use client names.",
    },
    {
      name: "stars",
      title: "Star Rating",
      type: "number",
      options: { list: [1, 2, 3, 4, 5] },
      initialValue: 5,
    },
    {
      name: "source",
      title: "Source",
      type: "string",
      options: {
        list: [
          { title: "Google", value: "Google" },
          { title: "Direct", value: "Direct" },
        ],
      },
      initialValue: "Google",
    },
    {
      name: "order",
      title: "Display Order (lower = appears first)",
      type: "number",
    },
  ],
  preview: {
    select: { title: "clientType", subtitle: "source" },
  },
};

export default testimonial;
