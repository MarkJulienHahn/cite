"use client";

import { useState, useRef, useEffect } from "react";

import { PortableText } from "next-sanity";
import Footer from "../../../../components/Footer";
import Slider from "../../../../components/Slider";
import parse from "html-react-parser";

export default function PageClient({ project, params }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      { root: null, threshold: 1 } // 50% of video visible
    );

    videoRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      videoRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const scrollToVideo = (i) => {
    videoRefs.current[i]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="videoSingleContent">
      <div className="buttonsWrapper">
        {project.content.videos.map((video, i) => (
          <button
            key={i}
            className={`button ${activeIndex === i ? "active" : ""}`}
            onClick={() => scrollToVideo(i)}
          >
            {video.title}
          </button>
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
          <div key={i} className="videoSingleVideo">
            <h2 className="videoSingleHeadline">{video.title}</h2>
            <div
              className="refAnchor"
              ref={(el) => (videoRefs.current[i] = el)}
              data-index={i}
            />
            <div className="embedContainer">
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
          {project.content.infos?.map((info, i) => (
            <div className="videoSingleInfoblockRow" key={i}>
              <div>{info.name}</div>
              <div>{info.value}</div>
            </div>
          ))}
        </div>
      </section>

      {project.content.fotos?.fotos && (
        <Slider
          fotos={project.content.fotos.fotos}
          description={project.content.fotos.description}
        />
      )}

      <Footer />
    </div>
  );
}
