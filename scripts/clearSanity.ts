
import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: 'yube5tup',
  dataset: 'production',
  apiVersion: "2024-06-24",
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function deleteAllDocuments() {
  const allDocs = await sanityClient.fetch(`*[_type != "system"]{_id}`);
  console.log(`Found ${allDocs.length} documents.`);

  for (const doc of allDocs) {
    await sanityClient.delete(doc._id);
    console.log(`Deleted ${doc._id}`);
  }

  console.log("All documents deleted!");
}

deleteAllDocuments().catch(console.error);
