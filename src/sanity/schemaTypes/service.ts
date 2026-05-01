import { defineType, defineField } from "sanity";
import { StarIcon } from "@sanity/icons";

export const service = defineType({
  name: "service",
  title: "Service",
  type: "document",
  icon: StarIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cropVertical",
      title: "Use vertical crop on thumbnail",
      description: "Enable for tall images like portrait/photography shots",
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
    select: { title: "name", media: "image" },
  },
});
