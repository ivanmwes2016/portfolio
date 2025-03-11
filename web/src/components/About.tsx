import React from "react";
import data from "../../utils/data.json";

export default function About() {
  return (
    <div className="h-screen pt-10 flex flex-col justify-center items-center text-center gap-8 md:p-0 px-10">
      <h6 className="tracking-[20px] text-gray-300 ">ABOUT</h6>
      <p className="max-w-2xl leading-8 text-gray-300">{data.aboutMe}</p>
    </div>
  );
}
