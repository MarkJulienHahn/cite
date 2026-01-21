"use client";

import React from "react";

import Link from "next/link";

const HomeEntry = ({ entry }) => {
  console.log(entry);

  const title = entry?.title;
  const videoID = entry?.preview?.link;
  const text = entry?.preview.text;
  const slug = entry?.slug;

  return (
    <>
      <Link href={`/${slug?.current}?index=0`} scroll={false}>
        <div className="videoWrapper">
          <div className="embedContainer embed100vh">
            {videoID && (
              <iframe
                src={`https://player.vimeo.com/video/${videoID}?background=1&autoplay=1&loop=1&muted=1`}
                width="640"
                height="360"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
          <div className="videoInfos">
            <span style={{ display: "flex" }}>
              <h2 className="videoTitle">
                <span>{title}</span>
                <span className="videoIcon">{"play"}</span>
              </h2>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default HomeEntry;
