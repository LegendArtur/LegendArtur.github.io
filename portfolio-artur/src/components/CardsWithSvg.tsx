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
        className={`flex-1 mx-16 ease-in ${
          inView
            ? `opacity-100 duration-500 delay-${750 + index * 250}`
            : "opacity-0 duration-0 delay-0"
        } `}
      >
        <CardContainer className="w-full">
          <CardBody className="bg-none relative group-card h-16 w-16 rounded-xl">
            <CardItem
              translateZ="50"
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
    <div className="hidden sm:flex flex-row items-center justify-center">
      <div className="flex flex-col items-center">
        <span
          className={`text-gray-400 text-4xl mb-8 mt-8 ease-in ${
            inView
              ? `opacity-100 duration-500 delay-250`
              : "opacity-0 duration-0 delay-0"
          } `}
        >
          Trusted by companies like:
        </span>
        <div className="flex justify-center items-center w-full">
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
