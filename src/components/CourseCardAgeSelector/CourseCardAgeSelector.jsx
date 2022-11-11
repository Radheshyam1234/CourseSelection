import React from "react";
import "./ageSelector.css";

export const CourseCardAgeSelector = ({
  ageGroup,
  activeAgeGroup,
  setActiveAgeGroup,
  courseCategory,
}) => {
  return (
    <>
      <div
        className={`courseCardAgeSelector-wrapper  ${courseCategory.toLowerCase()}`}
        onClick={() => {
          setActiveAgeGroup(ageGroup);
        }}
      >
        <div
          className={`courseCardAgeSelector-button ${
            isItActiceAgeGroup(ageGroup, activeAgeGroup)
              ? "ageSelector-active"
              : ""
          }
          
          `}
        >
          <span>
            ( Age {ageGroup[0]} - {ageGroup[1]} )
          </span>
        </div>
      </div>
    </>
  );
};

const isItActiceAgeGroup = (ageGroup, activeAgeGroup) => {
  return ageGroup[0] === activeAgeGroup[0] && ageGroup[1] === activeAgeGroup[1];
};
