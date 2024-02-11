import axios from "axios";
let baseUrl = process.env.REACT_APPS_SERVICE;
if (!baseUrl) {
  baseUrl = "http://3.85.17.0:5001/api/applications";
}
let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

/*
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}*/

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
