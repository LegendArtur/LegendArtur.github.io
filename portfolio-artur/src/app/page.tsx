"use client";
import { NextUIProvider } from "@nextui-org/react";
import React, { useEffect } from "react";
import { NextPage } from "next";
import ExperienceText from "@/components/ExperienceText";
import CardsWithSvg from "@/components/CardsWithSvg";
import { Spotlight } from "@/components/Spotlight";
import ScrollArrow from "@/components/ScrollArrow";
import NameText from "@/components/NameText";
import WhoAmIPage from "@/components/WhoAmIPage";
import ContactMeCard from "@/components/ContactMeCard";

const ProjectPage: NextPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <div className="relative min-h-full  pointer-events-none inset-0 dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
    // <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]"></div>
    <NextUIProvider>
      <div className=" bg-black">
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
          <ExperienceText />
          <CardsWithSvg />
          <div></div>
        </div>
        <div className="min-h-screen flex flex-col items-center justify-center">
          <WhoAmIPage></WhoAmIPage>
        </div>
        <div className="min-h-screen grid grid-rows-3 gap-4">
          <div></div>
          <ContactMeCard />
          <div></div>
        </div>
      </div>
    </NextUIProvider>
  );
};

export default ProjectPage;
