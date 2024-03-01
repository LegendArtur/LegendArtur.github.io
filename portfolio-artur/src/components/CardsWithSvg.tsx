import React, { ReactNode } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/CardContainer";
import CoveoSymbol from "@/logos/CoveoSymbol"; // Adjust the path as necessary
import FloSymbol from "@/logos/FloSymbol";
import SlackSymbol from "@/logos/SlackSymbol";
import ConcordiaSymbol from "@/logos/ConcordiaSymbol";
import "@/styles/CardsWithSvg.css";

const FourCardsWithSvg: React.FC = () => {
  const renderCard = ({ svg }: { svg: ReactNode }) => (
    <CardContainer className="flex-1 mx-16">
      <CardBody className="bg-none relative group-card h-16 w-16 rounded-xl">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          <div className="flex justify-center items-center h-full">{svg}</div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );

  return (
    <div className="hidden sm:flex flex-row items-center justify-center">
      <div className="flex flex-col items-center font-bold">
        <span className=" text-gray-400 text-xl mb-4">Trusted by :</span>
        <div className="flex justify-center items-center w-full">
          {renderCard({ svg: <CoveoSymbol /> })}
          {renderCard({ svg: <FloSymbol /> })}
          {renderCard({ svg: <SlackSymbol /> })}
          {renderCard({ svg: <ConcordiaSymbol /> })}
        </div>
      </div>
    </div>
  );
};

export default FourCardsWithSvg;
