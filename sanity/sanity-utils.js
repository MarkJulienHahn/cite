import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "yube5tup",
  dataset: "production",
  apiVersion: "2024-06-24",
});

export default client;

export async function getHome() {
  return client.fetch(
    groq`*[_type == "home"]|order(orderRank){"singleEntry": single->{title, slug, type, text, "pre": preview {..., "url": image {..., asset->{...}}}, ...}, 
  "quadEntry": 
      zwei{ 
        one->{title, slug, type, vimeo, text, "pre": preview {..., "url": image {..., asset->{...}}}, ...}, 
        two->{title, slug, type, vimeo, text, "pre": preview {..., "url": image {..., asset->{...}}}, ...}, 
        three->{title, slug, type, vimeo, text, "pre": preview {..., "url": image {..., asset->{...}}}, ...}, 
        four->{title, slug, type, vimeo, text, "pre": preview {..., "url": image {..., asset->{...}}}, ...}, 
      }}`
  );
}

export async function getProjects() {
  return client.fetch(groq`*[_type == "projects"]|order(orderRank){...}`);
}

export async function getInfo() {
  return client.fetch(groq`*[_type == "info"]{...}`);
}
