import { defineType } from "sanity";
import { InfoFilledIcon } from "@sanity/icons";

export default defineType({
  name: "info",
  title: "Info",
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
            decorators: [{ title: "Emphasis", value: "em" }],
          },
        },
      ],
    },
    {
      name: "herausgeber",
      type: "array",
      of: [
        {
          name: "person",
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "role", type: "string" },
            { name: "contact", type: "string" },
          ],
        },
      ],
    },
    {
      name: "personen",
      type: "array",
      of: [
        {
          name: "person",
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "role", type: "string" },
          ],
        },
      ],
    },
  ],

  preview: {
    prepare() {
      return {
        title: "Info",
      };
    },
  },
});
