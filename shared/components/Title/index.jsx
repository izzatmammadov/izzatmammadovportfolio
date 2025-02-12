import React from "react";

const Title = ({ title }) => {
  return (
    // <div
    //   className=' relative sm:flex hidden text-center items-center justify-center before:content-[""] before:w-[35%] before:h-[8px] before:bg-[#ff6002] before:absolute before:left-0 before:top-1/2 before:rounded-full after:content-[""] after:w-[35%] after:h-[8px] after:rounded-full after:bg-[#ff6002] after:absolute after:right-0 after:top-1/2'
    // >
      <div className="text-4xl w-max mx-auto rotate-6 bg-[#ff6002] rounded-full py-1 px-4 text-white font-medium shadow-lg shadow-[#ff6002] sm:mt-0 mt-20">
    {title}
      </div>
    // </div>
  );
};

export default Title;
