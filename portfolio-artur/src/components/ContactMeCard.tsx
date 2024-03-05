/* eslint-disable @next/next/no-img-element */
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/CardContainer";
import "@/styles/CardsWithSvg.css";

const ContactMeCard: React.FC = () => {
  const handleCardClick = () => {
    window.open("https://www.linkedin.com/in/arturgub/", "_blank");
  };

  const renderCard = () => {
    return (
      <div className="flex-1 mx-12" onClick={handleCardClick}>
        <CardContainer className="w-full cursor-pointer">
          <CardBody className="bg-none flex justify-center items-center relative rounded-xl h-40 max-w-4">
            <CardItem
              translateZ="100"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <div className="image-container-mobile sm:image-container flex justify-center items-center"></div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    );
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="text-gray-400 text-2xl my-8">Connect with me</span>
        <div className="flex justify-center items-center w-full">
          {renderCard()}
        </div>
      </div>
    </div>
  );
};

export default ContactMeCard;
