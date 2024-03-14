// src/context/AppDisplayConfigContext.js

import { createContext, useContext, useState, useEffect } from "react";
import CRED_STORE_CONSTANTS from "../util/constants";
import displayConfigService from "../services/displayConfigService";

const AppDisplayConfigContext = createContext();

export const AppDisplayConfigProvider = ({ children }) => {
  const [appDisplayConfig, setAppDisplayConfig] = useState();

  useEffect(() => {
    let ignore = false;
    //setLoading(true);
    const appDisplayConfigRequest = {
      appId: CRED_STORE_CONSTANTS.APP_ID,
      subAppId: 0,
      isPreview: true,
    };
    async function getDisplayConfig() {
      try {
        const response = await displayConfigService.getAppConfig(
          appDisplayConfigRequest
        );
        console.log("API Response:", response);
        const data = response?.data;
        console.log("Json Response: ", JSON.parse(data));
        if (!ignore) {
          //setData(data);
          setAppDisplayConfig(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          //setLoading(false);
        }, 500);
      }
    }
    getDisplayConfig();
    return () => {
      ignore = true;
    };
  }, []);

  const loadDisplayConfig = (dispAppConfig) => {
    setAppDisplayConfig(dispAppConfig);
  };

  return (
    <AppDisplayConfigContext.Provider
      value={{ appDisplayConfig, loadDisplayConfig }}
    >
      {children}
    </AppDisplayConfigContext.Provider>
  );
};

export const useAppDispConfig = () => {
  const appDispConfigContext = useContext(AppDisplayConfigContext);
  if (!appDispConfigContext) {
    throw new Error(
      "useAppDispConfig must be used within an AppDisplayConfigContext"
    );
  }
  return appDispConfigContext;
};
