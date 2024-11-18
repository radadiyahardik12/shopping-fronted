import React from "react";

const Loader = ({width, hieght}) => {
  return (
    <div className={` w-[${width}px] h-[${hieght}px]flex justify-center items-center`}>
      <div className={` w-[${width}px] h-[${hieght}px] border-4 border-blue-500 border-t-transparent rounded-full animate-spin`}></div>
    </div>
  );
};

export default Loader;
