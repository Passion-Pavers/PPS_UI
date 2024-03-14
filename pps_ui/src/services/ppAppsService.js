// src/services/ppapps.js

import httpService from "./httpService";
import { setAuthToken } from "./httpService";

const ppappsService = {
  getAll: async () => {
    try {
      setAuthToken();
      const response = await httpService.get(
        "/Application/GetActiveApplications"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Add other CRUD operations as needed
  add: async (addRequest) => {
    try {
      setAuthToken();
      const response = await httpService.post("/applications", addRequest);
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (updateRequest) => {
    try {
      setAuthToken();
      await httpService.put("/applications", updateRequest);
    } catch (error) {
      throw error;
    }
  },
};

export default ppappsService;
