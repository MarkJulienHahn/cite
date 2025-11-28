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
      name: "preview",
      title: "Preview (Startseite)",
      type: "object",
      description: "Das ist die Fullscreen Preview auf der Startseite.",
      options: {
        collapsible: true,
        collapsed: true,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
      },
      fields: [
        {
          name: "link",
          type: "string",
          description:
            "Hier kann man die Vimeo Video-ID einfügen, für ein Vimeo-Preview-Video.",
        },
        {
          name: "text",
          title: "Preview Text",
          type: "object",
          initialValue: () => ({ color: "white" }),
          fields: [
            {
              name: "text",
              description:
                "Das ist der kurze Previewtext auf der Startseite (2 – 3 Zeilen)",
              type: "text",
            },
            {
              name: "color",
              type: "string",
              options: {
                list: [
                  { title: "White", value: "white" },
                  { title: "Black", value: "black" },
                ],
                layout: "radio",
              },
              validation: (Rule) =>
                Rule.required().error("Bitte eine Farbe auswählen."),
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
        collapsed: false,
        modal: {
          type: "fullscreen",
          width: "auto",
        },
      },
      fields: [
        {
          name: "introtext",
          description: "Das ist der Introtext am Anfang der Projektseite.",
          type: "text",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "headerVideo",
          type: "string",
          description: "Hier bitte nur die Vimeo ID einfügen (8–10 Zeichen).",
          validation: (Rule) => Rule.required(),
        },
        {
          name: "videos",
          type: "array",
          of: [
            {
              name: "video",
              type: "object",
              fields: [
                {
                  name: "title",
                  type: "string",
                  description:
                    "Der Videotitel wird in der Navigation oben angezeigt.",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "link",
                  type: "string",
                  description:
                    "Hier das <iframe/> Element von Youtube oder Vimeo einfügen.",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "description",
                  type: "text",
                  description:
                    "Kurzbeschreibung unter dem Video (ca. 2 – 3 Zeilen)",
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: "length",
                  type: "string",
                  description: "Videolänge im Format: 123:45 min",
                  validation: (Rule) => Rule.required(),
                },
              ],
            },
          ],
        },
        {
          name: "text",
          title: "Langer Text",
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
          validation: (Rule) => Rule.required(),
        },
        {
          name: "infos",
          type: "array",
          of: [
            {
              name: "info",
              type: "object",
              fields: [
                { name: "name", type: "string" },
                { name: "value", type: "string" },
              ],
            },
          ],
        },
        {
          name: "fotos",
          type: "object",
          fields: [
            {
              name: "fotos",
              type: "array",
              of: [{ name: "foto", type: "image", description: "Maximal 500KB" }],
            },
            {
              name: "description",
              type: "text",
              description:
                "Kurzbeschreibung unter den Fotos (ca. 2 – 3 Zeilen)",
            },
          ],
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      validation: (Rule) =>
        Rule.required().warning(
          "Bitte einen einzigartigen SLUG generieren. Der Slug darf bei zwei gleichen Projekten nicht der selbe sein."
        ),
      options: {
        source: "title",
      },
    },
    orderRankField({ type: "projects" }),
  ],
});
