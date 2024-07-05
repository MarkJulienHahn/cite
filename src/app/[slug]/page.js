import { PortableText } from "next-sanity";
import { getProjects } from "../../../sanity/sanity-utils";
import Link from "next/link";
import Footer from "../../../components/Footer";

export default async function page(params) {
  const projects = await getProjects();
  const project = projects.filter(
    (entry) => entry.slug.current == params.params.slug
  );

  return (
    <main>
      <div className="videoSingleWrapper">
        <div className="embedContainer">
          <iframe
            src={`https://player.vimeo.com/video/${project[0].content.videos[params.searchParams.index].link}`}
            width="640"
            height="360"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="videoSingleContent">
        <div className="buttonsWrapper">
          {project[0].content.videos.map((video, i) => (
            <div
              className={`button ${!video.link && "disabled"} ${params.searchParams.index == i && "active"}`}
              key={i}
            >
              <Link href={`?index=${i}`}>
                {video.name} {video.length ? `(${video.length})` : ""}
              </Link>
            </div>
          ))}
        </div>

        <div className="videoSingleText">
          <h1>{project[0].title}</h1>
          <PortableText value={project[0].content.text} />
        </div>
        <Footer />
      </div>
    </main>
  );
}

export const revalidate = 10;
