// PpsApps.js
import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import ppAppsService from "../services/ppapps";

const PpsApps = () => {
  const [appsData, setAppsData] = useState([]);

  const getPpAppsEffect = () => {
    ppAppsService
      .getAllApps()
      .then((ppAppsResp) => {
        setAppsData(ppAppsResp);
      })
      .catch((error) => console.error("Error fetching app data:", error));
  };
  useEffect(getPpAppsEffect, []);

  return (
    <Grid container spacing={3}>
      {appsData.map((app) => (
        <Grid item key={app.id} xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="div">
                {app.applicationName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {app.description}
              </Typography>
              <Button variant="contained" color="primary">
                Preview
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default PpsApps;
