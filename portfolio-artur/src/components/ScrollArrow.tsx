"use client";
import React from "react";
import "@/styles/ScrollArrow.css"; // Path to your CSS file

const ScrollArrow = () => {

  const handleClick = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust according to the height of your viewport or target element
      behavior: "smooth",
    });
  };

  return (
    <div
      className="scroll-arrow-container"
      onClick={handleClick}
    >
      <div className="scroll-text">Scroll</div>
      <div className="arrow-icon">&#x2193;</div>{" "}
      {/* This is a simple downward arrow. Replace with an icon if preferred. */}
    </div>
  );
};

export default ScrollArrow;
