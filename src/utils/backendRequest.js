import axios from "axios";

export const getCoursesList = async (setCourseList) => {
  try {
    const { data } = await axios.get(
      "https://spark.herokuapp.com/api/v1/test_api"
    );
    setCourseList(data);
  } catch (error) {
    console.log(error);
  }
};
