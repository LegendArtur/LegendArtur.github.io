import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "@/styles/ScrollArrow.css";

interface ScrollArrowProps {
  page?: number;
}

const ScrollArrow: React.FC<ScrollArrowProps> = ({ page = 1 }) => {
  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight * page,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col justify-center bottom-0 relative">
      <div className="scroll-arrow-container" onClick={handleClick}>
        <div className="scroll-text">Scroll</div>
        <FontAwesomeIcon icon={faChevronDown} className="arrow-icon" />
      </div>
    </div>
  );
};

export default ScrollArrow;
