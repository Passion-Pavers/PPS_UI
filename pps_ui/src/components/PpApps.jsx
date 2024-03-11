import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import ppappsService from "../services/ppAppsService";
import { useNavigate } from "react-router-dom";
import MyAppsGrid from "./MyAppsGrid";
import LoadingSpinner from "./LoadingSpinner";

const PpApps = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let ignore = false;
    setLoading(true);
    async function startFetchingData() {
      try {
        const json = await ppappsService.getAll();
        console.log("API Response:", json);
        if (!ignore) {
          setData(json);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 500);
      }
    }
    startFetchingData();
    return () => {
      ignore = true;
    };
  }, []);

  const handlePreviewClick = (appName) => {
    // Navigate to the preview route, passing the application name
    console.log("appName : ", appName);
    navigate(`/ppapps/preview/${appName}`);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <h2>PpApps</h2>
      <Grid container spacing={2}>
        {data ? (
          <MyAppsGrid
            data={data}
            handlePreviewClick={(appName) => handlePreviewClick(appName)}
          />
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </div>
  );
};

export default PpApps;
