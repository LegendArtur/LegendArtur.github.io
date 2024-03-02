import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import FloSymbol from "@/logos/FloSymbol";
import ConcordiaSymbol from "@/logos/ConcordiaSymbol";
import SlackSymbol from "@/logos/SlackSymbol";
import CoveoSymbol from "@/logos/CoveoSymbol";

interface ExperienceItemProps {
  logo: React.ReactNode;
  title: string;
  company: string;
  timeframe: string;
  bulletPoints: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  logo,
  title,
  company,
  timeframe,
  bulletPoints,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.33,
  });

  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "easeInOut", duration: 0.5 },
    },
    hidden: { opacity: 0, x: 300 },
  };

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-end w-full my-4"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      <div className="flex items-center mr-4">
        <span className="text-sm">{timeframe}</span>
        <div className="w-16 h-1 bg-black ml-2 mr-6" />
      </div>
      <div className="border border-white p-4 rounded-lg items-center w-2/3 shadow-lg grid grid-cols-3">
        <div className="col-span-1 flex justify-center items-center">
          <div className="w-24 h-24">{logo}</div>
        </div>
        <div className="col-span-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <h4 className="text-md italic">{company}</h4>
          <ul className="list-disc ml-5">
            {bulletPoints.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const ExperienceList: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <ExperienceItem
        logo={<CoveoSymbol />}
        title="Software Solution Specialist Intern"
        company="Professional Services, Coveo Montreal, Canada"
        timeframe="Jan – Apr. 2024"
        bulletPoints={[
          "Integrated Coveo’s AI search and GenAI frameworks inside various customer projects using React and Vue.js.",
          "Enhanced and deployed advanced .NET tooling projects utilizing C# and Azure for internal efficiencies.",
          "Developed a Slack App bot leveraging Python, Django, AWS, Ngrok, and the Slack API for team communications.",
        ]}
      />
      <ExperienceItem
        logo={<SlackSymbol />}
        title="Software Engineering Intern"
        company="Slack (Salesforce) Vancouver, Canada"
        timeframe="Jun. – Aug. 2023"
        bulletPoints={[
          "Developed new Canvas and Bookmarks features for Slack’s web application with React, TypeScript, and CSS/Less.",
          "Collaborated in a hand-picked cross-functional engineering team to successfully deliver Canvas.",
          "Ensured optimal user experiences by creating responsive and accessible front-end components.",
          "Incorporated a robust CI/CD test suite using Buildkite and Playwright, decreasing deployment time by 40%.",
        ]}
      />
      <ExperienceItem
        logo={<ConcordiaSymbol />}
        title="Software Engineering Intern and Research Assistant"
        company="Security Research Centre, Concordia University Montreal, Canada"
        timeframe="Oct. – Dec. 2023"
        bulletPoints={[
          "Built a responsive website/GUI for cybersecurity data visualization and analysis using React and TypeScript.",
          "Collaborated with PhD researchers to deliver a state-of-the-art product employing AI threat detection methods.",
          "Mentored an intern, providing guidance in HTML and React, contributing to successful project implementation and enhanced teamwork.",
        ]}
      />
      <ExperienceItem
        logo={<FloSymbol />}
        title="Software Developer Intern"
        company="Flo EV Charging Montreal, Canada"
        timeframe="May – Aug. 2022"
        bulletPoints={[
          "Developed and maintained the Cloud solutions and microservices infrastructure in C#.",
          "Created and executed REST API calls using Postman, JavaScript, and JSON.",
          "Participated in stand-ups and sprint planning, contributing to agile development with Azure DevOps.",
        ]}
      />
    </div>
  );
};

export default ExperienceList;
