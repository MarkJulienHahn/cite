"use client"

import HomeVideoPreview from "./HomeVideoPreview";
import React from "react";

const renderPreview = (entry) => (
  <HomeVideoPreview
    imageUrl={entry?.pre?.url?.asset.url}
    videoUrl={entry?.pre?.link}
    title={entry?.title}
    type={entry?.type}
    video={entry?.pre?.video}
    embedded={entry?.content?.embedded}
    slug={entry?.slug}
    external={entry?.content?.externalLink}
  />
);

const HomeEntry = ({ entry }) => {
  const { singleEntry, quadEntry } = entry;

  console.log(entry);

  return singleEntry ? (
    <>
      {renderPreview(singleEntry)}
    </>
  ) : (
    <div className="quadWrapper">
      {["one", "two", "three", "four"].map((key) => (
        <div className="quadInner" key={key}>
          {renderPreview(quadEntry?.[key])}
        </div>
      ))}
    </div>
  );
};

export default HomeEntry;
