import axios from "axios";
const baseUrl = "http://localhost:3001/api/chuckNorris/facts";

//function getting all facts
const getAllFacts = () => {
  return axios.get(baseUrl).then((result) => result);
};

//function getting one fact by his id
const getOneFact = (id) => {
  return axios.get(`${baseUrl}/${id}`).then((result) => result);
};

export { getAllFacts, getOneFact };
