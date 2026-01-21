import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "projects",
        title: "Projects",
        S,
        context,
      }),

      S.listItem()
        .title("About")
        .id("about")
        .child(S.document().schemaType("about").documentId("about")),
      S.divider(),
      S.listItem()
        .title("Impressum")
        .id("impressum")
        .child(S.document().schemaType("impressum").documentId("impressum")),
    ]);
