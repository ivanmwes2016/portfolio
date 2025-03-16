"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import data from "../../utils/data.json";
import Link from "next/link";

export function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "I am  based in London, England.",
      "Music is my thing",
      "<But I love to code more />",
    ],
    loop: 100,
    delaySpeed: 2000,
  });
  return (
    <div className=" w-full h-screen text-center  flex justify-evenly items-center flex-col">
      <div>
        <h6 className="tracking-[20px] text-gray-300 ">SOFTWARE ENGINEER</h6>
        <h1 className="text-5xl md:text-7xl after:content-['Ivan'] after:text-amber-500 after:font-bold my-4">
          Hi! , I am{" "}
        </h1>
        <p className="text-2xl  text-gray-300">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </p>
      </div>
      <ul className="flex flex-row gap-8 text-[12px] uppercase mt-10">
        {data.menuLinks.map((item) => (
          <Link
            className="tracking-wide cursor-pointer"
            key={item.id}
            href={item.to}>
            {item.title}
          </Link>
        ))}
      </ul>
    </div>
  );
}
