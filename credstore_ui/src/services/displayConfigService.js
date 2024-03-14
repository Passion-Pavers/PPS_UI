import axios from "axios";
const baseUrl =
  process.env.REACT_DISPLAY_CONFIG_SERVICE || "http://localhost:5281/api";

const getAppConfig = async (configRequset) => {
  const response = await axios.post(
    `${baseUrl}/Application/GetAppConfig`,
    configRequset
  );
  return response.data;
};

const displayConfigService = {
  getAppConfig,
};

export default displayConfigService;
