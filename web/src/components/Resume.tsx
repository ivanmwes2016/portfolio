"use client";

import React from "react";
import data from "../../utils/data.json";
import { motion } from "motion/react";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function Resume() {
  return (
    <div className="h-screen px-10 flex flex-col relative justify-evenly items-center text-center md:text-left gap-8 md:p-0">
      <h6 className="tracking-[20px] text-gray-500 text-2xl top-10  w-full text-center">
        MY RESUME
      </h6>
    </div>
  );
}
