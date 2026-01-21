import PageClient from "./PageClient";
import { getProjects } from "../../../../sanity/sanity-utils";

export default async function page(params) {
  const projects = await getProjects();
  const project = projects.filter(
    (entry) => entry.slug.current == params.params.slug
  )[0];

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

      <PageClient project={project} params={params}/>
    </main>
  );
}

export const revalidate = 10;
