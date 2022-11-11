import { createContext, useContext, useState } from "react";

export const CoursesDataContext = createContext();

export const CoursesDataProvider = ({ children }) => {
  const [courseList, setCourseList] = useState([]);
  const [activeAgeGroup, setActiveAgeGroup] = useState([]);

  return (
    <CoursesDataContext.Provider
      value={{ courseList, setCourseList, activeAgeGroup, setActiveAgeGroup }}
    >
      {children}
    </CoursesDataContext.Provider>
  );
};

export const useCoursesDataProvider = () => useContext(CoursesDataContext);
