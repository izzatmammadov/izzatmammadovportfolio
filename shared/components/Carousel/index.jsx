import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Autoplay } from "swiper/modules";
import Image from "next/image";

import html from "../../../assets/images/html5.png";
import css from "../../../assets/images/css3.png";
import js from "../../../assets/images/js.jpg";
import sass from "../../../assets/images/sass.png";
import bootstrap from "../../../assets/images/bootstrap.jpg";
import fireBase from "../../../assets/images/fireBase.svg";
import react from "../../../assets/images/react.png";
import vite from "../../../assets/images/vite.png";
import redux from "../../../assets/images/redux.png";
import tailwind from "../../../assets/images/tailwind.png";
import mui from "../../../assets/images/mui.svg";
import ant from "../../../assets/images/ant.png";
import typescript from "../../../assets/images/typescript.svg";
import next from "../../../assets/images/next.svg";
import git from "../../../assets/images/github.svg";
import style from "./carousel.module.css";

const images = [
  html,
  css,
  js,
  sass,
  bootstrap,
  fireBase,
  react,
  vite,
  redux,
  tailwind,
  mui,
  ant,
  typescript,
  next,
  git
];

const Carousel = () => {
  return (
    <div className="shadow-xl w-full overflow-hidden mt-28">
      <Swiper
        slidesPerView={6}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        modules={[FreeMode, Autoplay]}
        className={`${style.carousel} w-full`}
      >
        {[...images, ...images].map((img, index) => (
          <SwiperSlide key={index}>
            {/* <img
              src={img}
              alt={`tech-${index}`}
              className="sm:h-16 h-12 my-6 w-auto mx-auto"
            /> */}
            <Image width={0} height={0} src={img}
              alt={`tech-${index}`}
              className="sm:h-16 h-12 my-6 w-auto mx-auto"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
