import React from "react";
import { Typography, Container, Grid, Card } from "@mui/material";
import { styled } from "@mui/system";

const ColoredCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 4 }}>
        Welcome to Cred Store
      </Typography>
      <Typography variant="h6" align="center" sx={{ mt: 2, mb: 4 }}>
        One store for all your Credentials
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ColoredCard>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Our Work
            </Typography>
            <Typography>
              At Cred Store, we specialize in maneging your credentals for
              different websites.
            </Typography>
          </ColoredCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ColoredCard>
            <Typography variant="h5" sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography>
              Cred Store is committed to Credentails management Easy.
            </Typography>
          </ColoredCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
