import React, { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/CardContainer";
import { Modal, ModalHeader, ModalBody } from "@nextui-org/modal";
import CoveoSymbol from "@/logos/CoveoSymbol";
import FloSymbol from "@/logos/FloSymbol";
import SlackSymbol from "@/logos/SlackSymbol";
import ConcordiaSymbol from "@/logos/ConcordiaSymbol";
import "@/styles/CardsWithSvg.css";
import { ModalContent, ModalFooter } from "@nextui-org/react";
import { useInView } from "react-intersection-observer";

interface Experience {
  logo: React.ReactNode;
  title: string;
  company: string;
  timeframe: string;
  bulletPoints: string[];
}

interface ModalState {
  isOpen: boolean;
  content: Experience | null;
}

const FourCardsWithSvg: React.FC = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

  const [modalInfo, setModalInfo] = useState<ModalState>({
    isOpen: false,
    content: null,
  });

  const experiences: Experience[] = [
    {
      logo: <CoveoSymbol />,
      title: "Software Solution Specialist Intern",
      company: "Professional Services, Coveo Montreal, Canada",
      timeframe: "Currently here!",
      bulletPoints: [
        "Integrated Coveo’s AI search and GenAI frameworks inside various customer projects using React and Vue.js.",
        "Enhanced and deployed advanced .NET tooling projects utilizing C# and Azure for internal efficiencies.",
        "Developed a Slack App bot leveraging Python, Django, AWS, Ngrok, and the Slack API for team communications.",
      ],
    },
    {
      logo: <SlackSymbol />,
      title: "Software Engineering Intern",
      company: "Slack (Salesforce) Vancouver, Canada",
      timeframe: "Jun. – Aug. 2023",
      bulletPoints: [
        "Developed new Canvas and Bookmarks features for Slack’s web application with React, TypeScript, and CSS/Less.",
        "Collaborated in a hand-picked cross-functional engineering team to successfully deliver Canvas.",
        "Ensured optimal user experiences by creating responsive and accessible front-end components.",
        "Incorporated a robust CI/CD test suite using Buildkite and Playwright, decreasing deployment time by 40%.",
      ],
    },
    {
      logo: <ConcordiaSymbol />,
      title: "Software Engineering Intern and Research Assistant",
      company:
        "Security Research Centre, Concordia University Montreal, Canada",
      timeframe: "Oct. – Dec. 2023",
      bulletPoints: [
        "Built a responsive website/GUI for cybersecurity data visualization and analysis using React and TypeScript.",
        "Collaborated with PhD researchers to deliver a state-of-the-art product employing AI threat detection methods.",
        "Mentored an intern, providing guidance in HTML and React, contributing to successful project implementation and enhanced teamwork.",
      ],
    },
    {
      logo: <FloSymbol />,
      title: "Software Developer Intern",
      company: "Flo EV Charging Montreal, Canada",
      timeframe: "May – Aug. 2022",
      bulletPoints: [
        "Developed and maintained the Cloud solutions and microservices infrastructure in C#.",
        "Created and executed REST API calls using Postman, JavaScript, and JSON.",
        "Participated in stand-ups and sprint planning, contributing to agile development with Azure DevOps.",
      ],
    },
  ];

  const openModal = (content: Experience) => {
    setModalInfo({ isOpen: true, content });
  };

  const closeModal = () => {
    setModalInfo({ isOpen: false, content: null });
  };

  const renderModalContent = (content: Experience) => {
    return (
      <ModalContent className="bg-glass-effect bg-opacity-20 ">
        <div className="">
          <ModalHeader>{content.title}</ModalHeader>
          <ModalBody>
            <p>{content.company}</p>
            <p>{content.timeframe}</p>
            <ul>
              {content.bulletPoints.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </div>
      </ModalContent>
    );
  };

  const renderCard = (content: Experience, index: number) => (
    <div
      ref={ref}
      key={index}
      className={`flex-1 mx-12 ease-in cursor-pointer ${
        inView
          ? `opacity-100 duration-500 delay-${750 + index * 250}`
          : "opacity-0 duration-0 delay-0"
      } `}
      onClick={() => openModal(content)}
    >
      <CardContainer className="w-full">
        <CardBody className="bg-none relative group-card h-16 w-16 rounded-xl">
          <CardItem className="text-xl font-bold text-neutral-600 dark:text-white">
            <div className="flex justify-center items-center h-full">
              {content.logo}
            </div>
          </CardItem>
        </CardBody>
      </CardContainer>
    </div>
  );

  return (
    <>
      <div className="hidden sm:flex flex-row items-center justify-center">
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-2xl my-8">
            Trusted by top companies
          </span>
          <div className="flex justify-center items-center w-full">
            {experiences.map((exp, index) => renderCard(exp, index))}
          </div>
        </div>
      </div>
      <Modal isOpen={modalInfo.isOpen} onClose={closeModal}>
        {modalInfo.content && renderModalContent(modalInfo.content)}
      </Modal>
    </>
  );
};

export default FourCardsWithSvg;
