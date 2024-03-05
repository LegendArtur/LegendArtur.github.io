"use client";
import React from "react";
import { useInView } from 'react-intersection-observer';
import "@/styles/NameText.css";

const NameText: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className={`flex flex-col justify-center text-center fade-effect ${inView ? "fade-in" : "fade-out"}`}>
      <h1 className=" text-4xl md:text-7xl font-bold text-center">
        Artur <span className="text-gradient">Gub</span>aidullin.
      </h1>
      <span className="text-gradient text-3xl md:text-4xl">
        Next-Gen 10X Developer
      </span>
    </div>
  );
};

export default NameText;
