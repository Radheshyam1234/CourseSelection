import React, { useEffect } from "react";
import { Courses } from "./pages/Courses";
import { getCoursesList } from "./utils/backendRequest";
import { useCoursesDataProvider } from "./Context/CoursesDataContext/CoursesDataProvider";

export const App = () => {
  const { setCourseList } = useCoursesDataProvider();

  useEffect(() => {
    getCoursesList(setCourseList);
  }, []);
  return (
    <>
      <Courses />
    </>
  );
};
