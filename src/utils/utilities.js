export const getAgeGroups = (courseList) => {
  let ageGropus = [];
  courseList.forEach((course) => {
    ageGropus.push([course.min_age, course.max_age]);
  });
  let set = new Set(ageGropus.map(JSON.stringify));
  let newAgeGropus = Array.from(set).map(JSON.parse);
  return newAgeGropus;
};

export const getFilteredCourseList = (activeAgeGroup, courseList) => {
  if (activeAgeGroup && courseList) {
    let filteredCourseList = courseList.filter((course) => {
      return (
        course.min_age === activeAgeGroup[0] &&
        course.max_age === activeAgeGroup[1]
      );
    });
    return filteredCourseList;
  }
};
