import axios from "axios";
let baseUrl = process.env.REACT_AUTH_SERVICE;
if (!baseUrl) {
  baseUrl = "http://3.85.17.0:5000/api/Auth";
  //baseUrl = "http://localhost:5219/api/Auth";
}

const login = async (credentials) => {
  const response = await axios.post(`${baseUrl}/login`, credentials);
  return response.data;
};

const register = async (registrationRequest) => {
  const response = await axios.post(`${baseUrl}/register`, registrationRequest);
  return response.data;
};

export default { login, register };
