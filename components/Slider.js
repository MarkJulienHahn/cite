"use client";

import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Slider({ fotos, description }) {
  const swiperRef = useRef(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;

    if (!swiperRef.current) return;

    // Click left half → slide prev, right half → slide next
    if (x < rect.width / 2) {
      swiperRef.current.slidePrev();
    } else {
      swiperRef.current.slideNext();
    }
  };

  return (
    <section
      className="videoSingleImages"
      onClick={handleClick}
      style={{ position: "relative", cursor: "pointer" }}
    >
      <Swiper
        spaceBetween={10}
        slidesPerView="auto"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {fotos.map((foto, i) => (
          <SwiperSlide key={i} className="videoSingleSlide">
            <Image
              src={foto.asset.url}
              alt={foto.alt || ""}
              width={700}
              height={700 / foto.asset.metadata.dimensions.aspectRatio}
              style={{ height: "70vh", width: "auto", objectFit: "contain" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="videoSingleInfo">
        <p>{description}</p>
      </div>
    </section>
  );
}
