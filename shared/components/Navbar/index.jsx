import React from "react";
import style from "./navbar.module.css";
import email_light from "../../../assets/icons/email_white.png";
import { useTranslation } from "react-i18next";
import Language from "../Language";
import Image from 'next/image';

const Navbar = () => {
  const {t} = useTranslation()
  const handleScrollToAbout = () => {
    window.scrollTo({
      top: 700,
      behavior: "smooth",
    });
  };

  const handleScrollToExperience = () => {
    window.scrollTo({
      top: 1400,
      behavior: "smooth",
    });
  };

  const handleScrollToContact = () => {
    window.scrollTo({
      top: 3000,
      behavior: "smooth",
    });
  };

  const handleWhatsAppMessage = () => {
    const phoneNumber = "+994503882464";
    const message = "Hi Izzat, can we talk?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="1500"
      className="absolute w-full backdrop-blur-md sm:flex hidden items-center justify-between p-4"
    >
      <h1 className="sm:block hidden sm:text-3xl text-xl cursor-default text-white font-bold tracking-widest w-[35%] text-center">
        {t("welcome")}
      </h1>

      <div className="flex items-center justify-between sm:w-[65%] w-full">
        <ul className="flex text-lg text-white font-light items-center w-full justify-evenly">
          <li className={`${style.nav_li}`} onClick={handleScrollToAbout}>
          {t("about")}
          </li>
          <li className={`${style.nav_li}`} onClick={handleScrollToExperience}>
          {t("experience")}
          </li>
          <li className={`${style.nav_li}`} onClick={handleScrollToContact}>
          {t("contact")}
          </li>
        </ul>
        <button
          title="WhatsApp"
          className="sm:flex hidden items-center justify-center gap-1 bg-[#01ffff] hover:shadow-lg transition-all rounded-full duration-300 font-light text-white p-2 shadow-md"
          onClick={handleWhatsAppMessage}
        >
          {/* <img className="w-[24px]" src={email_light} alt="email" /> */}
          <Image src={email_light} alt="email" width={24} height={24} />
        </button>
        <Language/>
      </div>
    </nav>
  );
};

export default Navbar;
