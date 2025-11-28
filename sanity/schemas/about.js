import { defineType } from "sanity";
import { InfoFilledIcon } from "@sanity/icons";

export default defineType({
  name: "about",
  title: "About",
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
            { name: "link", type: "url" },
          ],
        },
      ],
    },
    {
      name: "partner",
      type: "array",
      of: [
        {
          name: "partner",
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "role", type: "string" },
            { name: "link", type: "url" },
          ],
        },
      ],
    },
    {
      name: "links",
      type: "array",
      of: [
        {
          name: "link",
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "link", type: "string" },
          ],
        },
      ],
    },
  ],

  preview: {
    select: {},
    prepare() {
      return {
        title: "About",
      };
    },
  },
});
