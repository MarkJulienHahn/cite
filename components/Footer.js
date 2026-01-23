import Link from "next/link";
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footerWrapper">
      <div>
        <span>
          <Link href="/impressum">Impressum</Link>
        </span>
        <span>
          <a
            href="https://www.instagram.com/cite__online/reels/"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </span>
        <span>
          <a
            href="https://www.youtube.com/@cite_online"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
        </span>
      </div>
      <span>©Cite, {year}</span>
    </div>
  );
};

export default Footer;
