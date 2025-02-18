import React, { useState, useEffect } from "react";
import send from "../../../assets/icons/send_white.png";
import sendB from "../../../assets/icons/send_gray.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";

const Contact = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState({ email: false, message: false });

  useEffect(() => {
    if (error.email || error.message) {
      const shortTimer = setTimeout(() => {
        setError({ email: false, message: false });
      }, 1500);

      return () => {
        clearTimeout(shortTimer);
      };
    }
  }, [error]);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSendEmail = () => {
    const trimmedEmail = email.trim();
    const trimmedMessage = message.trim();

    if (!trimmedEmail || !trimmedMessage) {
      setError({
        email: !trimmedEmail,
        message: !trimmedMessage,
      });
      return;
    }

    if (!validateEmail(trimmedEmail)) {
      setError({ email: true, message: false });
      return;
    }

    const mailtoLink = `mailto:imamedov388@gmail.com?subject=Contact Form&body=Gönderen: ${trimmedEmail}%0A%0A${trimmedMessage}`;
    window.location.href = mailtoLink;

    setEmail("");
    setMessage("");
  };

  return (
    <section className="sm:pt-14 pt-0 cursor-default">
      <div data-aos="fade-down" data-aos-duration="1500">
        <div className="text-4xl w-max mx-auto rotate-6 bg-[#ff6002] rounded-full py-1 px-4 text-white font-medium shadow-lg shadow-[#ff6002] sm:mt-0 mt-20">
          {t("contact")}
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1500"
        className="sm:w-[48%] sm:px-0 px-5 relative mt-14 mx-auto flex flex-col gap-5"
      >
        <Image
          width={0}
          height={0}
          className="sm:w-1/2 w-[95%] inset-0 mx-auto sm:-top-[20px] sm:-right-[650px] opacity-20 -z-40 absolute"
          src={sendB}
          alt="send"
        />
        <p className="text-justify text-md">{t("contactDesc")}</p>
        <input
          type="email"
          placeholder={t("emailInput")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full py-2 text-md px-4 border rounded-full focus:outline-none shadow-md ${
            error.email ? "border-[#ff6002]" : "border-[#cfd1d4]"
          }`}
        />
        {error.email && (
          <p className="text-red-500 text-sm">
            {t("emailRequired")}
          </p>
        )}

        <textarea
          placeholder={t("messageInput")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`w-full capitalize py-2 px-4 border rounded-2xl focus:outline-none shadow-md h-32 ${
            error.message ? "border-[#ff6002]" : "border-[#cfd1d4]"
          }`}
        />
        {error.message && (
          <p className="text-red-500 text-sm">{t("messageRequired")}</p>
        )}

        <button
          onClick={handleSendEmail}
          className="flex sm:text-lg text-md items-center justify-center gap-1 bg-[#ff6002] tracking-widest text-white px-6 py-2 rounded-full shadow-md hover:bg-[#e05502] transition"
        >
          {t("sendBtn")}
          <Image
            width={0}
            height={0}
            className="sm:w-[18px] w-[16px]"
            src={send}
            alt="send"
          />
        </button>
      </div>
    </section>
  );
};

export default Contact;
