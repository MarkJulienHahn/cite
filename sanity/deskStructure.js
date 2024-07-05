import { orderableDocumentListDeskItem } from "@sanity/orderable-document-list";

export const myStructure = (S, context) =>
  S.list()
    .title("Content")
    .items([
      orderableDocumentListDeskItem({
        type: "home",
        title: "Home",
        S,
        context,
      }),

      S.listItem()
        .title("Info")
        .id("info")
        .child(S.document().schemaType("info").documentId("info")),

      S.divider(),

      S.documentTypeListItem("projects").title("Projects"),
    ]);
