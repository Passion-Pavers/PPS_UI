import axios from "axios";
const baseUrl =
  //process.env.REACT_APPS_SERVICE || "http://localhost:5109/api/applications";
    process.env.REACT_APPS_SERVICE || "http://3.85.17.0:5001/api/applications";
let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAllApps = () => {
  const config = {
    headers: { Authorization: token },
  };
  const request = axios.get(baseUrl, config);
  return request.then((response) => response.data);
};

const createApp = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.data;
};

const updateApp = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

export default {
  getAllApps,
  createApp,
  updateApp,
  setToken,
};
