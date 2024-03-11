// src/services/ppapps.js

import httpService from "./httpService";
import { setAuthToken } from "./httpService";

const ppappsService = {
  getAll: async (searchFilter) => {
    try {
      setAuthToken();
      const response = await httpService.post(
        `/Credentials/GetCredentials`,
        searchFilter
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
      const response = await httpService.post(
        `/Credentials/AddCredentials`,
        addRequest
      );
      return response;
    } catch (error) {
      throw error;
    }
  },
  update: async (updateRequest) => {
    try {
      setAuthToken();
      await httpService.put(`/Credentials/${updateRequest.id}`, updateRequest);
    } catch (error) {
      throw error;
    }
  },
};

export default ppappsService;
