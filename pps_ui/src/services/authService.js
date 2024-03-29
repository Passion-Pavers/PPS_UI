import axios from "axios";
const baseUrl =
  process.env.REACT_AUTH_SERVICE || "http://localhost:5219/api/Auth";

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response;
};

const register = async (registrationRequest) => {
  const response = await axios.post(`${baseUrl}/register`, registrationRequest);
  return response;
};

export default { login, register };
