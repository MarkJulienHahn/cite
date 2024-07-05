import Footer from "../../components/Footer";
import HomeEntry from "../../components/HomeEntry";
import { getHome } from "../../sanity/sanity-utils";

export default async function Home() {
  const home = await getHome();

  return (
    <main>
      {home.map((entry, i) => (
        <div key={i} className="homeEntryWrapper">
          <HomeEntry entry={entry} />
        </div>
      ))}
      <Footer />
    </main>
  );
}

export const revalidate = 10;