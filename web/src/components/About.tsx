"use client";

import React from "react";
import data from "../../utils/data.json";
import { motion } from "motion/react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function About() {
  return (
    <div className="h-screen px-10 flex flex-col relative justify-evenly items-center text-center md:text-left gap-8 md:p-0">
      <h6 className="tracking-[20px] text-gray-500 text-2xl top-10  w-full text-center">
        ABOUT
      </h6>
      <div className="flex md:flex-row flex-col md:items-start items-center gap-8 px-5">
        <motion.img
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{ duration: 0.5 }}
          src="https://res.cloudinary.com/da23xzvpt/image/upload/v1672013524/samples/people/smiling-man.jpg"
          className=" flex-shrink-0 w-56 h-56 rounded-full object-cover  md:rounded-3xl md:w-96 md:h-80"
        />
        <div className="space-y-10 px-0">
          <h4 className="text-4xl">
            Here's a{" "}
            <span className=" font-bold text-amber-500">little background</span>
          </h4>
          <p className=" text-gray-300">{data.aboutMe}</p>
          <div className="space-y-2 flex flex-col items-center md:items-start font-bold">
            <div className=" space-x-2">
              <LocalPhoneRoundedIcon />
              <span>{`Phone: ${data.phone}`}</span>
            </div>
            <div className=" space-x-2">
              <EmailRoundedIcon />
              <span>{`Email: ${data.email}`}</span>
            </div>

            <div className="w-3xs h-12 bg-amber-600 my-4 flex justify-center items-center">
              DOWNLOAD MY CV
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
