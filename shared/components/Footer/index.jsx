import React from "react";
import linkedin from "../../../assets/icons/linkedinn.png";
import github from "../../../assets/icons/github.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <section className="pb-10 cursor-default mt-14 flex gap-6 flex-col text-center italic font-light">
      <div>{t("footerDesc")}</div>
      <div className="flex items-center justify-center gap-2">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/izzatmammadov"
        >
          {/* <img
            title="LinkedIn"
            className="w-[30px] cursor-pointer rounded-full "
            src={linkedin}
            alt="linkedin"
          /> */}
          <Image
            width={0}
            height={0}
            title="LinkedIn"
            className="w-[30px] cursor-pointer rounded-full "
            src={linkedin}
            alt="linkedin"
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/izzatmammadov"
        >
          {/* <img
            title="GitHub"
            className="w-[30px] cursor-pointer"
            src={github}
            alt="github"
          /> */}
          <Image
            width={0}
            height={0}
            title="GitHub"
            className="w-[30px] cursor-pointer"
            src={github}
            alt="github"
          />
        </a>
      </div>
    </section>
  );
};

export default Footer;
