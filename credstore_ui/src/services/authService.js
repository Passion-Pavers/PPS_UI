import axios from "axios";

const baseUrl =
  process.env.REACT_AUTH_SERVICE || "http://localhost:5219/api/Auth";

const authService = {
  login: async function (credentials) {
    const response = await axios.post(`${baseUrl}/login`, credentials);
    return response;
  },
  register: async function (registrationRequest) {
    const response = await axios.post(
      `${baseUrl}/register`,
      registrationRequest
    );
    return response;
  },
};

export default authService;
