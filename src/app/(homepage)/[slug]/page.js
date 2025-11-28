import { PortableText } from "next-sanity";
import { getProjects } from "../../../../sanity/sanity-utils";
import Link from "next/link";
import Footer from "../../../../components/Footer";
import Slider from "../../../../components/Slider";
import parse from "html-react-parser";

export default async function page(params) {
  const projects = await getProjects();
  const project = projects.filter(
    (entry) => entry.slug.current == params.params.slug
  )[0];

  console.log("infos:", project.content.fotos.fotos);

  return (
    <main>
      <div className="videoHeader">
        <div className="embedContainer embed100vh">
          <iframe
            src={`https://player.vimeo.com/video/${project.content.headerVideo}?background=1&autoplay=1&loop=1&muted=1`}
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
          {project.content.videos.map((video, i) => (
            <div
              className={`button ${!video.link} ${params.searchParams.index == i && "active"}`}
              key={i}
            >
              {video.title}
            </div>
          ))}
        </div>

        <section className="videoSingleIntro">
          <h1>{project.title}</h1>
          <div className="videoSingleIntroText">
            <p>{project.content.introtext}</p>
          </div>
        </section>

        <section className="videoSingleVideos">
          {project.content.videos.map((video, i) => (
            <div className="videoSingleVideo">
              <div key={i} className="embedContainer">
                <>{parse(video.link)}</>
              </div>
              <div className="videoSingleInfo">
                <p>{video.description}</p>
                <p>{video.length}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="videoSingleText">
          <PortableText value={project.content.text} />
        </section>

        <section className="videoSingleInfoblock">
          <div className="videoSingleInfoblockInner">
            {project.content.infos.map((info, i) => (
              <div className="videoSingleInfoblockRow" key={i}>
                <div>{info.name}</div>
                <div>{info.value}</div>
              </div>
            ))}
          </div>
        </section>

        {project.content.fotos.fotos && (
          <Slider
            fotos={project.content.fotos.fotos}
            description={project.content.fotos.description}
          />
        )}

        <Footer />
      </div>
    </main>
  );
}

export const revalidate = 10;
