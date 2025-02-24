import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import enFlag from "../../../assets/images/enFlag.png";
import azeFlag from "../../../assets/images/azeFlag.png";
import trFlag from "../../../assets/images/trFlag.png";
import Image from "next/image";

const Language = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    setIsOpen(false);
  };

  const flags = {
    en: enFlag,
    az: azeFlag,
    tr: trFlag,
  };

  return (
    <div className="sm:relative absolute right-3 top-3 sm:right-0 sm:top-0 sm:z-50 z-50 sm:ml-5 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
      <Image
        title="Language"
        onClick={() => setIsOpen(!isOpen)}
        src={flags[currentLanguage]}
        alt="currentLng"
        width={0}
        height={0}
        className="w-[42px] cursor-pointer"
      />

      <div
        className={`absolute z-50 mt-2 w-max left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "opacity-100 scale-100 max-h-44 visible" : "opacity-0 scale-95 max-h-0 invisible"
        }`}
      >
        {Object.entries(flags)
          .filter(([lang]) => lang !== currentLanguage)
          .map(([lang, flag]) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className="flex items-center text-center justify-center"
            >
              <Image width={0} height={0} src={flag} alt={lang} className="w-[37.64px] border-t-[3px] border-[#cfd1d4] pt-2" />
            </button>
          ))}
      </div>
    </div>
  );
};

export default Language;
