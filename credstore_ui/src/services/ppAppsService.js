// src/services/ppapps.js

import httpService from "./httpService";

const ppappsService = {
  getAll: async () => {
    try {
      const response = await httpService.get("/applications");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  // Add other CRUD operations as needed
};

export default ppappsService;
