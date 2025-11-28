import { PortableText } from "next-sanity";
import Footer from "../../../components/Footer";
import HomeEntry from "../../../components/HomeEntry";
import { getProjects } from "../../../sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  console.log(projects);

  return (
    <main>
      {projects.map((entry, i) => (
        <div key={i} className="homeEntryWrapper">
          <HomeEntry entry={entry} />
        </div>
      ))}
      <Footer />
    </main>
  );
}

export const revalidate = 10;
