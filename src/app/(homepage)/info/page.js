import Footer from "../../../../components/Footer";
import { getAbout } from "../../../../sanity/sanity-utils";
import { PortableText } from "next-sanity";

export default async function page() {
  const about = await getAbout();

  return (
    <>
      <div className="infoWrapper">
        <div className="infoInner">
          <section className="infosection">
            <h2>About</h2>
            <div className="infoSectionText">
              <PortableText value={about.text} />
            </div>

            {about.personen?.length > 0 && (
              <div className="personenWrapper">
                <h3>Beteiligte</h3>
                <ul>
                  {about.personen.map((person, i) => (
                    <li key={i}>
                      <span className="listLeft">{person.role}</span>
                      <span>
                        {person.name}{" "}
                        {person.link && (
                          <a
                            href={person.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            ↗
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {about.partner?.length > 0 && (
              <div className="personenWrapper">
                <h3>Kooperationspartner*innen</h3>
                <ul>
                  {about.partner.map((person, i) => (
                    <li key={i}>
                      <span className="listLeft">{person.role}</span>
                      <span>
                        {person.name}{" "}
                        {person.link && (
                          <a
                            href={person.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            ↗
                          </a>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links Section */}
            {about.links?.length > 0 && (
              <div className="personenWrapper">
                <h3>Links</h3>
                <ul className="personenWrapperLinks">
                  {about.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.link} target="_blank" rel="noreferrer">
                        {link.name} ↗
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </section>

          <Footer />
        </div>
      </div>
    </>
  );
}
