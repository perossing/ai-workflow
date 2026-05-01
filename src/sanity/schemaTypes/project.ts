import { defineType, defineField } from "sanity";
import { ImageIcon } from "@sanity/icons";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "title", media: "image" },
  },
});
