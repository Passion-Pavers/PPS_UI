import { Card, CardContent, Button, Grid, Typography } from "@mui/material";

const MyAppsGrid = ({ data, handlePreviewClick }) => {
  return data.map((item) => (
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
  ));
};

export default MyAppsGrid;
