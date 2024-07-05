import Image from "next/image";
import Link from "next/link";

const HomeVideoPreview = ({
  video,
  embedded,
  videoUrl,
  imageUrl,
  title,
  type,
  slug,
  external,
}) => (
  <div className="videoWrapper">
    {video ? (
      <div className="embedContainer">
        <iframe
          src={`https://player.vimeo.com/video/${videoUrl}?background=1&autoplay=1&loop=1&muted=1`}
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    ) : (
      <div className="imageWrapper">
        <Image src={imageUrl} fill style={{ objectFit: "cover" }} />
      </div>
    )}
    <div className="videoInfos">
      <span style={{ display: "flex" }}>
        {embedded ? (
          <Link href={`/${slug?.current}?index=0`}>
            <h2 className="videoTitle">
              {title}{" "}
              <span className="videoIcon">{embedded ? "play" : "Vimeo"}</span>
            </h2>{" "}
          </Link>
        ) : (
          <a href={external} target="_blank" rel="noreferrer">
            <h2 className="videoTitle">
              {title}{" "}
              <span className="videoIcon">{embedded ? "play" : "Vimeo"}</span>
            </h2>
          </a>
        )}
      </span>
      <h2 style={{ opacity: 0.5 }}>{type}</h2>
    </div>
  </div>
);

export default HomeVideoPreview;
