import React from "react";
import { Spotlight } from "@/components/Spotlight";
import NameText from "@/components/NameText";
import CardsWithSvg from "@/components/CardsWithSvg";
import ScrollArrow from "@/components/ScrollArrow";
import { NextPage } from "next";

const ProjectPage: NextPage = () => {
  return (
    <>
      <Spotlight
        className="hidden xl:block -top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="min-h-screen grid grid-rows-5 gap-4 bg-black">
        <div></div>
        <div></div>
        <NameText />
        <CardsWithSvg />
        <div className="flex flex-col justify-center cursor-pointer">
          <ScrollArrow/>
        </div>
      </div>
      <div className="min-h-screen flex flex-col items-center justify-center transition-opacity duration-500 bg-white">
        {/* This is the second page content */}
        <h2 className="text-2xl font-bold">Second Page</h2>
        <p>This is some content for the second page.</p>
      </div>
    </>
  );
};

export default ProjectPage;
