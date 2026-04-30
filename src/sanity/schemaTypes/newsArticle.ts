import { defineType, defineField } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const newsArticle = defineType({
  name: "newsArticle",
  title: "News Article",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "caption",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "href",
      title: "Link URL",
      type: "url",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "desktopOffset",
      title: "Desktop offset (drops card 120px down)",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "caption", media: "image" },
  },
});
