// ExperienceText.tsx
import React from "react";
import { useInView } from "react-intersection-observer";
import "@/styles/ExperienceText.css";

const ExperienceText: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col justify-center text-center fade-effect ${
        inView ? "fade-in" : "fade-out"
      }`}
    >
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        Over <span className="text-gradient">1.5 years</span> of
      </h1>
      <span className="text-3xl md:text-5xl font-bold">
        professional experience.
      </span>
    </div>
  );
};

export default ExperienceText;
