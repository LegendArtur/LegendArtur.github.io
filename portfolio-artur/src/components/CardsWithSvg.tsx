import React, { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import { CardBody, CardContainer, CardItem } from "@/components/CardContainer";
import CoveoSymbol from "@/logos/CoveoSymbol";
import FloSymbol from "@/logos/FloSymbol";
import SlackSymbol from "@/logos/SlackSymbol";
import ConcordiaSymbol from "@/logos/ConcordiaSymbol";
import "@/styles/CardsWithSvg.css";

const FourCardsWithSvg: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const renderCard = ({ svg, index }: { svg: ReactNode; index: number }) => {
    return (
      <div
        ref={ref}
        className={`flex-1 mx-12 ease-in mb-8 sm:my-0 ${
          inView
            ? `opacity-100 duration-500 delay-${750 + index * 250}`
            : "opacity-0 duration-0 delay-0"
        } `}
      >
        <CardContainer className="w-full">
          <CardBody className="bg-none relative group-card h-16 w-16 rounded-xl">
            <CardItem
              translateZ="100"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              <div className="flex justify-center items-center h-full">
                {svg}
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    );
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      <div className="w-full md:w-auto flex flex-row flex-wrap justify-center items-center">
        <span
          className={`text-gray-400 text-2xl my-8 w-full text-center ease-in ${
            inView
              ? `opacity-100 duration-500 delay-250`
              : "opacity-0 duration-0 delay-0"
          } `}
        >
          Trusted by top companies
        </span>
        <div className="flex flex-wrap justify-center items-center w-full">
          {renderCard({ svg: <FloSymbol />, index: 0 })}
          {renderCard({ svg: <ConcordiaSymbol />, index: 1 })}
          {renderCard({ svg: <SlackSymbol />, index: 2 })}
          {renderCard({ svg: <CoveoSymbol />, index: 3 })}
        </div>
      </div>
    </div>
  );
};

export default FourCardsWithSvg;
