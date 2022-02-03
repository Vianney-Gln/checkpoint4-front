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

/**
 * function posting facts to the back
 * @param {object} infosFact
 * @returns
 */
const postData = (infosFact) => {
  return axios({
    method: "post",
    url: baseUrl,
    data: infosFact,
  });
};
export { getAllFacts, getOneFact, postData };
