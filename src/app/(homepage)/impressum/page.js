import { PortableText } from "next-sanity";
import { getImpressum } from "../../../../sanity/sanity-utils";
import Footer from "../../../../components/Footer";

export default async function page() {
  const impressum = await getImpressum();
  return (
    <main className="impressum">
      <PortableText value={impressum.text} />
      <Footer />
    </main>
  );
}
