import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "yube5tup",
  dataset: "production",
  apiVersion: "2024-06-24",
});

export default client;

export async function getProjects() {
  return client.fetch(groq`*[_type == "projects"] | order(_rank) {
  _id,
  title,
  slug,
  preview {
    link,
    text {
      text,
      color
    }
  },
  content {
    introtext,
    headerVideo,
    videos[] {
      title,
      link,
      description,
      length
    },
    text[],
    infos[] {
      name,
      value
    },
    fotos {
      fotos[] {
        asset->{
          _id,
          url,
          metadata {
            dimensions,
            lqip
          }
        }
      },
      description
    }
  }
}
`);
}

export async function getAbout() {
  return client.fetch(groq`*[_type == "about"][0]{...}`);
}
