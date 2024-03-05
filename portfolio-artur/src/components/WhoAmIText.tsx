/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { motion } from "framer-motion";

type Section = {
  title: string;
  role: string;
  date: string;
  text: string;
  location: string;
  imageUrl: React.JSX.Element;
};

interface WhoAmITextProps {
  sections: Section[];
}

const WhoAmIText: React.FC<WhoAmITextProps> = ({ sections }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [previous, setPrevious] = useState(false);

  const handleSectionInView = (index: number) => {
    setActiveSectionIndex(index);
    setPrevious(true);
  };

  const handleSectionLeave = () => {
    setPrevious(false);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center w-full mt-40 relative">
      <div className="hidden sm:grid col-end-2 absolute inset-0 z-0 place-items-center py-44">
        <div className="w-0.5 bg-white h-full rounded-full"></div>
      </div>

      <motion.div
        className="sticky top-1/2 -translate-y-1/2 h-44 w-44 hidden sm:flex flex-col justify-center items-center mt-44 z-10"
        initial={{ translateY: "-50%" }}
        animate={{ scale: previous ? 1 : 0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className=" bg-black border-white border-2 rounded-2xl py-2 px-4">
          <div>{sections[activeSectionIndex].date}</div>
        </div>
      </motion.div>

      <div className="flex-1 flex flex-col max-w-fit z-10 col-start-2 mx-8 sm:mx-0 ">
        {sections.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            onViewportEnter={() => handleSectionInView(index)}
            onViewportLeave={() => handleSectionLeave()}
            viewport={{ once: false, margin: "-50% 0px -50% 0px" }}
            transition={{ duration: 0.5 }}
            className="space-y-2 flex flex-col my-20 max-w-fit"
          >
            <h2 className="text-4xl font-bold">
              <span className="text-gradient">{section.title}</span>
            </h2>
            <span className="text-lg">{section.role}</span>
            <span>{section.text}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="hidden sm:grid sticky top-1/2 h-44 w-44 z-10 col-start-3 mt-44"
        initial={{ translateY: "-50%" }}
        animate={{ scale: previous ? 1 : 0.8, opacity: previous ? 1 : 0.25 }}
        transition={{ scale: { type: "spring", stiffness: 300 } }}
      >
        {sections[activeSectionIndex].imageUrl}
      </motion.div>
    </div>
  );
};

export default WhoAmIText;
