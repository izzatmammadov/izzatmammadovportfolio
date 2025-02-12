import React from "react";
import Card from "../Card";
import circle from "../../../assets/images/circle.svg";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="pt-14 px-5 cursor-default">
      <div data-aos="fade-down" data-aos-duration="1500">
        <div className="text-4xl w-max mx-auto rotate-6 bg-[#ff6002] rounded-full py-1 px-4 text-white  font-medium shadow-lg shadow-[#ff6002]">
          {t("experience")}
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="flex items-center justify-center flex-wrap gap-10 pt-14"
      >
        {/* <img
          className="sm:block hidden absolute -z-50 opacity-20"
          src={circle}
          alt="circle"
        /> */}
        <Image width={0} height={0} className="sm:block hidden absolute -z-50 opacity-20"
          src={circle}
          alt="circle"/>
        <Card
          workplace={t("experience1.workplace")}
          role={t("experience1.role")}
          duration={t("experience1.duration")}
          workstyle={t("experience1.workstyle")}
          description={t("experience1.description")}
          responsibilities={[
            t("experience1.responsibility1"),
            t("experience1.responsibility2"),
            t("experience1.responsibility3"),
          ]}
        />

        <Card
          workplace={t("experience2.workplace")}
          role={t("experience2.role")}
          duration={t("experience2.duration")}
          workstyle={t("experience2.workstyle")}
          description={t("experience2.description")}
          responsibilities={[
            t("experience2.responsibility1"),
            t("experience2.responsibility2"),
            t("experience2.responsibility3"),
          ]}
        />

        <Card
          workplace={t("experience3.workplace")}
          role={t("experience3.role")}
          duration={t("experience3.duration")}
          workstyle={t("experience3.workstyle")}
          description={t("experience3.description")}
          responsibilities={[
            t("experience3.responsibility1"),
            t("experience3.responsibility2"),
            t("experience3.responsibility3"),
          ]}
        />

        <Card
          workplace={t("experience4.workplace")}
          role={t("experience4.role")}
          duration={t("experience4.duration")}
          workstyle={t("experience4.workstyle")}
          description={t("experience4.description")}
          responsibilities={[
            t("experience4.responsibility1"),
            t("experience4.responsibility2"),
            t("experience4.responsibility3"),
          ]}
        />

        <Card
          workplace={t("experience5.workplace")}
          role={t("experience5.role")}
          duration={t("experience5.duration")}
          workstyle={t("experience5.workstyle")}
          description={t("experience5.description")}
          responsibilities={[
            t("experience5.responsibility1"),
            t("experience5.responsibility2"),
            t("experience5.responsibility3"),
          ]}
        />
      </div>
    </section>
  );
};

export default Experience;
