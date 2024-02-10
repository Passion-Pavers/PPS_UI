import axios from "axios";
const baseUrl = " http://localhost:5219/api/Auth";

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

const register = async (registrationRequest) => {
  const response = await axios.post(`${baseUrl}/register`, registrationRequest);
  return response.data;
};

export default { login, register };
