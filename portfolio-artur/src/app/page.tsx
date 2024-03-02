"use client";
import React, { useEffect } from "react";
import { Spotlight } from "@/components/Spotlight";
import NameText from "@/components/NameText";
import CardsWithSvg from "@/components/CardsWithSvg";
import ScrollArrow from "@/components/ScrollArrow";
import { NextPage } from "next";

const ProjectPage: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className=" bg-black ">
      <Spotlight
        className="hidden xl:block -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="min-h-screen grid grid-rows-5 gap-4 ">
        <div></div>
        <div></div>
        <NameText />
        <div></div>
        <ScrollArrow page={1} />
      </div>
      <div className="min-h-screen grid grid-rows-5 gap-4">
        <div></div>
        <div></div>
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Over <span className="text-gradient">1.5 years</span> of
          </h1>
          <span className="text-3xl md:text-5xl font-bold">
            professional experience.
          </span>
        </div>
        <CardsWithSvg />
        <ScrollArrow page={2} />
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1>HOLA</h1>
      </div>
    </div>
  );
};

export default ProjectPage;
