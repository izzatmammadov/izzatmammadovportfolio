import React from "react";
import Navbar from "../Navbar";
import izzat_profile from "../../../assets/images/izzat_profile.png";
import style from "./header.module.css";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import download from "../../../assets/icons/donwloading_white.png";
import cursor from "../../../assets/images/code_vector.svg";
import { useTranslation } from "react-i18next";
import Language from "../Language";
import Image from "next/image";


const Header = () => {
  const { t } = useTranslation();

  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [t("hello")], 
      typeSpeed: 70,
      showCursor: false,
    };
  
    const typed = new Typed(typedRef.current, options);
  
    return () => {
      typed.destroy();
    };
  }, [t]);
  return (
    <>
      <Navbar />
      <div data-aos="fade-down"
    data-aos-duration="1500" className="sm:hidden block">
      <Language/>
      </div>
      <section
        className={`${style.gradient_bg} h-[100vh] flex sm:flex-row flex-col-reverse items-center justify-center `}
      >
        <div className="relative sm:w-[40%] w-full">
          {/* <img
            data-aos="fade-up"
            data-aos-duration="1500"
            className="grayscale absolute sm:-top-72 top-5 sm:w-full"
            src={izzat_profile}
            alt="izzat"
          /> */}
          <Image width={0} height={0} data-aos="fade-up"
            data-aos-duration="1500"
            className="grayscale absolute sm:-top-72 top-5 sm:w-full"
            src={izzat_profile}
            alt="izzat"/>
          <div
            className={`${style.animate_container} ${style.container1} rounded-full sm:block hidden`}
          >
            {t("animation1")}
          </div>
          <div
            className={`${style.animate_container} ${style.container2} rounded-full sm:block hidden`}
          >
            {t("animation2")}
          </div>
        </div>

        <div
          className={`sm:w-[50%] w-full flex flex-col cursor-default items-center gap-4 sm:px-0 px-5`}
        >
          <h2
            data-aos="fade-down"
            data-aos-duration="1500"
            className="sm:text-6xl text-5xl font-bold relative"
          >
            {t("fullname")}
            {/* <img
              className="absolute sm:rotate-12 sm:-top-[110px] opacity-[0.2]"
              src={cursor}
              alt="cursor"
            /> */}
            <Image width={0} height={0} className="absolute sm:rotate-12 sm:-top-[110px] opacity-[0.2]"
              src={cursor}
              alt="cursor"/>
          </h2>
          <p
            data-aos="fade-down"
            data-aos-duration="1500"
            ref={typedRef}
            className={`${style.shadow} sm:text-2xl text-xl bg-[#ff6002] sm:w-max rounded-full py-2 px-4 text-white`}
          ></p>
          <p
            data-aos="fade-up"
            data-aos-duration="1500"
            className="sm:text-center text-justify sm:text-lg text-md leading-relaxed"
          >
            {t("description")}
          </p>
          <a
            href="/files/IZZAT_MAMMADOV.pdf"
            download="IZZAT_MAMMADOV.pdf"
            data-aos="fade-up"
            data-aos-duration="1500"
            className="bg-[#ff6002] w-full sm:w-max py-2 px-4 sm:text-lg rounded-full text-white flex items-center justify-center gap-1 shadow-md hover:shadow-lg"
          >
            {t("download")}
            {/* <img className="w-[18px]" src={download} alt="download" /> */}
            <Image width={0} height={0} className="w-[18px]" src={download} alt="download" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Header;
