// src/services/httpService.js

import axios from "axios";

const httpService = axios.create({
  baseURL: process.env.REACT_APPS_SERVICE || "http://localhost:5000/api",
  //baseURL: `http://3.85.17.0:5001/api`,
});

// Function to set the Bearer token in the request headers
export const setAuthToken = () => {
  const authToken = window.localStorage.getItem("authToken");
  httpService.defaults.headers.common["Authorization"] = authToken
    ? `Bearer ${authToken}`
    : null;
};

export default httpService;
