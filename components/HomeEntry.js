"use client";

import React from "react";

import Link from "next/link";

const HomeEntry = ({ entry }) => {
  console.log(entry);

  const title = entry?.title;
  const videoID = entry?.preview?.link;
  const text = entry?.preview.text;
  const slug = entry?.slug;

  console.log(entry);

  return (
    <div className="videoWrapper">
      {videoID && (
        <Link href={`/${slug?.current}?index=0`} scroll={false}>
          <div className="embedContainer embed100vh">
            <iframe
              src={`https://player.vimeo.com/video/${videoID}?background=1&autoplay=1&loop=1&muted=1`}
              width="640"
              height="360"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Link>
      )}
      <div className="videoInfos">
        <span style={{ display: "flex" }}>
          <Link href={`/${slug?.current}?index=0`}>
            <h2 className="videoTitle">
              {title}
              <span className="videoIcon">{"play"}</span>
            </h2>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default HomeEntry;
