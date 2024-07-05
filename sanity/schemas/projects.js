import { defineType } from "sanity";
import { orderRankField } from "@sanity/orderable-document-list";
import { ProjectsIcon } from "@sanity/icons";

export default defineType({
  name: "projects",
  title: "Projekte",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    {
      name: "title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) =>
        Rule.required().warning(
          "Bitte einen einzigartigen SLUG generieren. Der Slug darf bei zwei gleichen Seminaren nicht der selbe sein."
        ),
      options: {
        source: "title",
      },
    },
    {
      name: "type",
      type: "string",
    },

    {
      name: "preview",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
      },
      fields: [
        { name: "video", type: "boolean" },
        {
          name: "image",
          type: "image",
          description: "Hier kann man JPEG oder GIF einfügen.",
          hidden: ({ parent }) => parent?.video === true,
        },
        {
          name: "link",
          type: "string",
          description:
            "Hier kann man die Vimeo Video-ID einfügen, für ein Vimeo-Preview-Video.",
          hidden: ({ parent }) => parent?.video !== true,
        },
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
      ],
    },

    {
      name: "content",
      type: "object",
      options: {
        collapsible: true,
        collapsed: true,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
      },
      fields: [
        { name: "embedded", type: "boolean" },

        {
          name: "externalLink",
          type: "string",
          description: "Hier kann der Vimeo Link komplett eingefügt werden",
          hidden: ({ parent }) => parent?.embedded === true,
        },
        {
          name: "videos",
          type: "array",
          hidden: ({ parent }) => parent?.embedded !== true,
          of: [
            {
              name: "video",
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "length", type: "string" },
                {
                  name: "link",
                  type: "string",
                  description:
                    "Hier kann man die Vimeo Video-ID einfügen, für ein Vimeo-Preview-Video.",
                },
              ],
            },
          ],
        },
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
                decorators: [{ title: "Bold", value: "strong" }],
              },
            },
          ],
        },
      ],
    },
  ],
});
