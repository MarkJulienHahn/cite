import { defineType } from "sanity";

export default defineType({
  name: "impressum",
  title: "Impressum",
  type: "document",

  fields: [
    {
      name: "text",
      title: "Text",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [],
            annotations: [],
          },
        },
      ],
    },
  ],

  preview: {
    select: {},
    prepare() {
      return {
        title: "Impressum",
      };
    },
  },
});
