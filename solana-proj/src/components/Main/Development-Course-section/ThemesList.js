import React, { useState } from "react";
import bootcamp from "../../../assets/images/main/development-course-section/development-bootcamp-image.png";
import buildspace from "../../../assets/images/main/development-course-section/development-buildspace-image.png";
import byKnox from "../../../assets/images/main/development-course-section/development-byKnox-image.png";
import bytes from "../../../assets/images/main/development-course-section/development-bytes-image.png";
import freecodecamp from "../../../assets/images/main/development-course-section/development-freecodecamp-image.png";
import scaffoldSeries from "../../../assets/images/main/development-course-section/development-scaffoldSeries-image.png";
import ThemeBlock from "./ThemeBlock";
import "./devCourseSectionStyle.css";

const OFFER_DATA = [
  {
    image: buildspace,
    theme: "Buildspace",
    chapters: "14 Chapters",
  },
  {
    image: bytes,
    theme: "Solana Bytes",
    chapters: "12 Chapters",
  },
  {
    image: scaffoldSeries,
    theme: "Scaffold Series",
    chapters: "1 Chapter",
  },
  {
    image: freecodecamp,
    theme: "Freecodecamp Solana Course",
    chapters: "3 Chapters",
  },
  {
    image: byKnox,
    theme: "Solana Development by Knox",
    chapters: "16 Chapters",
  },
  {
    image: bootcamp,
    theme: "Solana Bootcamp",
    chapters: "8 Chapters",
  },
];

const ThemesList = () => {
  const [displayedItems, setDisplayedItems] = useState(3);
  const addMoreItems = () => {
    setDisplayedItems((prevItems) => prevItems + 3);
  };
  return (
    <div>
      <div className="development-course__theme-list">
        {OFFER_DATA.slice(0, displayedItems).map((data, index) => (
          <ThemeBlock
            key={index}
            image={data.image}
            theme={data.theme}
            chapters={data.chapters}
          />
        ))}
      </div>
      <div className="development-course__btn-load-more-container">
        {displayedItems < OFFER_DATA.length && (
          <button
            className="development-course__btn-load-more"
            onClick={addMoreItems}
          >
            Load More
          </button>
        )}
      </div>
    </div>
  );
};
export default ThemesList;
