import React from "react";
import style from "./card.module.css";

const Card = ({
  workplace,
  duration,
  role,
  workstyle,
  description,
  responsibilities,
}) => {
  return (
    <div
      data-aos="fade-up"
      className={`${style.card} flex flex-col gap-6 sm:w-[48%] w-full rounded shadow-lg p-5`}
    >
      <div className="flex sm:flex-row flex-col justify-between items-center sm:gap-0 gap-2">
        <div className="flex flex-col sm:items-start items-center">
          <p className="text-2xl italic mb-2 sm:text-start text-center font-semibold bg-[#ff6002] w-max py-1 px-3 shadow-md rounded-full text-white">
            {workplace}
          </p>
          <p className="italic bg-[#ff6002] w-max py-1 px-3 shadow-md rounded-full text-white">
            {role}
          </p>
        </div>
        <div className="flex flex-col sm:items-start items-center ">
          <p>{duration}</p>
          <p className="sm:ml-auto">{workstyle}</p>
        </div>
      </div>
      <p className="text-justify leading-relaxed text-md">{description}</p>
      <div className="flex flex-col leading-relaxed">
        <p className="mb-2 text-white text-md">Key Responsibilities:</p>
        {responsibilities.map((item, index) => (
          <li className="list-disc text-md" key={index}>
            {item}
          </li>
        ))}
      </div>
    </div>
  );
};

export default Card;
