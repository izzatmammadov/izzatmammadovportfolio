import React from "react";
import Title from "../Title";
import lamp from "../../../assets/images/lamp.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";


const About = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-14 cursor-default">
      <div
        data-aos="fade-down"
        data-aos-duration="1500"
        className="flex flex-col sm:w-[60%] sm:text-start sm:ml-auto gap-16 px-5"
      >
        <Title title={`${t(`about`)}`} />
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col gap-10 leading-relaxed sm:mt-0 mt-40"
        >
          <p className="sm:text-lg text-md sm:mt-0 sm:text-center text-justify">
            {t("aboutMe")}
          </p>
          <p className="sm:text-lg text-md sm:text-center text-justify">
            {t("aboutMe2")}
          </p>
          <p className="sm:text-lg text-md sm:mt-0 sm:text-center text-justify">
            {t("aboutMe3")}
          </p>
        </div>
      </div>
      <div className="sm:w-[40%] w-full relative">
        {/* <img
          className=" absolute sm:-top-[350px] -top-[530px] sm:left-[100px] sm:w-[400px] w-[800px] opacity-[.2] sm:-rotate-12"
          src={lamp}
          alt=""
        /> */}
        <Image width={0} height={0} className=" absolute sm:-top-[350px] -top-[530px] sm:left-[100px] sm:w-[400px] w-[800px] opacity-[.2] sm:-rotate-12"
          src={lamp}
          alt="lmap"/>
      </div>
    </section>
  );
};

export default About;
