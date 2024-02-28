import React, { useEffect, useState } from "react";
import ppappsService from "../services/ppAppsService";
import { Card, CardContent, Button, Grid, Typography } from "@mui/material";
import { setAuthToken } from "../services/httpService";
import { useNavigate } from "react-router-dom";

const PpApps = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setAuthToken();
        const ppappsData = await ppappsService.getAll();

        setTimeout(() => {
          setData(ppappsData);
        }, 250);
      } catch (error) {
        console.error("Error fetching ppapps data:", error);
      }
    };

    fetchData();
  }, []); // Run the effect whenever the authToken changes

  const handlePreviewClick = (appName) => {
    // Navigate to the preview route, passing the application name
    navigate(`/ppapps/preview/${appName}`);
  };

  return (
    <div>
      <h2>PpApps</h2>
      <Grid container spacing={2}>
        {data ? (
          data.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {item.applicationName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handlePreviewClick(item.applicationName)}
                >
                  Preview
                </Button>
              </Card>
            </Grid>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </div>
  );
};

export default PpApps;
