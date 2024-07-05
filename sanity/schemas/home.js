import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "home",
  title: "Homepage",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    {
      name: "eintrag",
      type: "string",
      options: {
        list: [
          { title: "Ein Video", value: "single" },
          { title: "Vier Videos", value: "quadrouple" },
        ],
        layout: "radio",
      },
    },

    {
      name: "single",
      type: "reference",
      to: [{ type: "projects" }],
      hidden: ({ parent }) => parent?.eintrag == "quadrouple",
    },

    {
      name: "zwei",
      type: "object",
      fields: [
        {
          name: "one",
          type: "reference",
          to: [{ type: "projects" }],
        },
        {
          name: "two",
          type: "reference",
          to: [{ type: "projects" }],
        },
        {
          name: "three",
          type: "reference",
          to: [{ type: "projects" }],
        },
        {
          name: "four",
          type: "reference",
          to: [{ type: "projects" }],
        },
      ],
      hidden: ({ parent }) => parent?.eintrag !== "quadrouple",
    },

    orderRankField({ type: "home" }),
  ],

  // preview: {
  //   prepare() {
  //     return {
  //       title: "Cite",
  //     };
  //   },
  // },
});
