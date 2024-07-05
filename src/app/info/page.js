import Footer from "../../../components/Footer";
import { getInfo } from "../../../sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function page() {
  const info = await getInfo();

  return (
    <>
      <div className="infoWrapper">
        <div>
          <PortableText value={info[0].text} />
          <div className="personenWrapper">
            <ul>
              <p>Herausgeber</p>
              {info[0].herausgeber?.map((person, i) => (
                <li key={i}>
                  <a
                    href={`:mailto:${person.contact}`}
                  >{`${person.name}, ${person.role}`}</a>
                </li>
              ))}
            </ul>
            <ul>
              <p>Personen</p>
              {info[0].personen?.map((person, i) => (
                <li key={i}>{`${person.name}, ${person.role}`}</li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
