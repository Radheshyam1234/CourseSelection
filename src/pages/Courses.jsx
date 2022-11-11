import React, { useEffect, useState } from "react";
import { CourseCard } from "../components/Course-Card/CourseCard";
import { CourseCardAgeSelector } from "../components/CourseCardAgeSelector/CourseCardAgeSelector";
import { useCoursesDataProvider } from "../Context/CoursesDataContext/CoursesDataProvider";
import { getAgeGroups, getFilteredCourseList } from "../utils/utilities";
import "./styles.css";

export const Courses = () => {
  const { courseList } = useCoursesDataProvider();
  const { activeAgeGroup, setActiveAgeGroup } = useCoursesDataProvider();
  const [ageGroups, setAgeGroups] = useState([]);

  useEffect(() => {
    const ageGroups = getAgeGroups(courseList);
    setAgeGroups(ageGroups);
    setActiveAgeGroup(ageGroups[0]);
  }, [courseList]);

  return (
    <>
      <div className="ageGroups-container">
        {ageGroups.length > 0 &&
          ageGroups.map((ageGroup, index) => {
            return (
              <CourseCardAgeSelector
                ageGroup={ageGroup}
                activeAgeGroup={activeAgeGroup}
                setActiveAgeGroup={setActiveAgeGroup}
                courseCategory={courseList[0].category_name}
                key={index}
              />
            );
          })}
      </div>

      <div className="courseCards">
        {courseList.length > 0 ? (
          getFilteredCourseList(activeAgeGroup, courseList)?.map(
            (course, index) => {
              return <CourseCard course={course} key={index} />;
            }
          )
        ) : (
          <h3>Loading the courses</h3>
        )}
      </div>
    </>
  );
};

// let courseList = [
//   {
//     display_name: "Stop Motion Animation",
//     rating: "4.9;5;117",
//     games_count: "5",
//     category_name: "Visual Arts",
//     original_price: 12000,
//     discounted_price: 7000,
//     name: "Stop Motion Animation-Learn",
//     certificate_count: 1,
//     num_classes: 24,
//     min_age: 5,
//     max_age: 9,
//     pitch:
//       "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
//     curriculum_outcomes: [
//       "Understand the debate format of communications and it’s structure",
//       "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
//       "Learn to research and prepare for a debate",
//       "Perform and compete with other students!",
//     ],
//   },
//   {
//     display_name: "Stop Motion Animation",
//     rating: "4.5;5;100",
//     games_count: "3",
//     category_name: "Visual Arts",
//     original_price: 11000,
//     discounted_price: 5000,
//     name: "Stop Motion Animation-Discover",
//     certificate_count: 2,
//     num_classes: 20,
//     min_age: 5,
//     max_age: 9,
//     pitch:
//       "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
//     curriculum_outcomes: [
//       "Understand the debate format of communications and it’s structure",
//       "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
//       "Learn to research and prepare for a debate",
//       "Perform and compete with other students!",
//     ],
//   },
//   {
//     display_name: "Stop Motion Animation",
//     rating: "4.5;5;100",
//     games_count: "3",
//     category_name: "Visual Arts",
//     original_price: 11000,
//     discounted_price: 5000,
//     name: "Stop Motion Animation-Discover",
//     certificate_count: 2,
//     num_classes: 20,
//     min_age: 10,
//     max_age: 15,
//     pitch:
//       "Learn to create well-researched speeches, structure arguments, and prepare for rebuttals through grammar and interactive speaking activities",
//     curriculum_outcomes: [
//       "Understand the debate format of communications and it’s structure",
//       "Practice micro-skills used in debate - stating opinion, effective opening and closing, rebuttal",
//       "Learn to research and prepare for a debate",
//       "Perform and compete with other students!",
//     ],
//   },
// ];
