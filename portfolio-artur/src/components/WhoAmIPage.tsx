/* eslint-disable @next/next/no-img-element */
import React from "react";
import CoveoSymbol from "@/logos/CoveoSymbol";
import SlackSymbol from "@/logos/SlackSymbol";
import ConcordiaSymbol from "@/logos/ConcordiaSymbol";
import FloSymbol from "@/logos/FloSymbol";
import WhoAmIText from "./WhoAmIText";

type Section = {
  title: string;
  role: string;
  date: string;
  text: string;
  location: string;
  imageUrl: React.JSX.Element;
};

const WhoAmIPage: React.FC = () => {
  const sections: Section[] = [
    {
      title: "Software Solution Specialist Intern",
      role: "Professional Services, Coveo",
      date: "Currently here!",
      location: "Montreal, Canada",
      text: "Integrated Coveo’s AI search and GenAI frameworks inside various customer projects using React and Vue.js. Enhanced and deployed advanced .NET tooling projects utilizing C# and Azure for internal efficiencies. Developed a Slack App bot leveraging Python, Django, AWS, Ngrok, and the Slack API for team communications.",
      imageUrl: <CoveoSymbol />,
    },
    {
        title: "Software Engineering Intern and Research Assistant",
        role: "Security Research Centre, Concordia University",
        date: "Oct. – Dec. 2023",
        location: "Montreal, Canada",
        text: "Built a responsive website/GUI for cybersecurity data visualization and analysis using React and TypeScript. Collaborated with PhD researchers to deliver a state-of-the-art product employing AI threat detection methods.Mentored an intern, providing guidance in HTML and React, contributing to successful project implementation and enhanced teamwork.",
        imageUrl: <ConcordiaSymbol />,
    },
    {
      title: "Software Engineering Intern",
      role: "Slack (Salesforce)",
      date: "Jun. – Aug. 2023",
      location: "Vancouver, Canada",
      text: "Developed new Canvas and Bookmarks features for Slack’s web application with React, TypeScript, and CSS/Less. Collaborated in a hand-picked cross-functional engineering team to successfully deliver Canvas. Ensured optimal user experiences by creating responsive and accessible front-end components. Incorporated a robust CI/CD test suite using Buildkite and Playwright, decreasing deployment time by 40%.",
      imageUrl: <SlackSymbol />,
    },
    {
      title: "Software Developer Intern",
      role: "Flo EV Charging",
      date: "May – Aug. 2022",
      location: "Montreal, Canada",
      text: "Developed and maintained the Cloud solutions and microservices infrastructure in C#. Created and executed REST API calls using Postman, JavaScript, and JSON. Participated in stand-ups and sprint planning, contributing to agile development with Azure DevOps.",
      imageUrl: <FloSymbol />,
    },
  ];

  return <WhoAmIText sections={sections} />;
};

export default WhoAmIPage;
