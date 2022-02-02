import axios from "axios";
const baseUrl = "http://localhost:3001/api/chuckNorris/facts";

const getAllFacts = () => {
  return axios.get(baseUrl).then((result) => result);
};

export default getAllFacts;
