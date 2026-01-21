import { PortableText } from "next-sanity";
import Footer from "../../../components/Footer";
import HomeEntry from "../../../components/HomeEntry";
import { getProjects } from "../../../sanity/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  console.log(projects);

  return (
    <main>
      <div className="homeEntriesWrapper">
        {projects.map((entry, i) => (
          <div key={i} className="homeEntryWrapper">
            <HomeEntry entry={entry} />
          </div>
        ))}
      </div>
      <div className="footerHomeWrapper">
        <Footer />
      </div>
    </main>
  );
}

export const revalidate = 10;
