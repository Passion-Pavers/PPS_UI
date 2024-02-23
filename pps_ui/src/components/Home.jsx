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
      <Typography variant="h4" align="center" sx={{ mt: 4, color: "#03a9f4" }}>
        Welcome to Passion Pavers Services (PPS)
      </Typography>
      <Typography
        variant="h6"
        align="center"
        sx={{ mt: 2, mb: 4, color: "#03a9f4" }}
      >
        Path to Build Your Passion
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <ColoredCard>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Our Work
            </Typography>
            <Typography>
              At Passion Pavers Services, we specialize in building fully
              customizable websites for our users. Our unique approach allows
              users to visually customize their applications, and with a single
              click, we generate all the necessary components to create a
              stunning website tailored to their needs. Whether you're
              passionate about business, art, or any other endeavor, we provide
              a platform for you to showcase your passion effortlessly.
            </Typography>
          </ColoredCard>
        </Grid>
        <Grid item xs={12} sm={6}>
          <ColoredCard>
            <Typography variant="h5" sx={{ mb: 2 }}>
              About Us
            </Typography>
            <Typography>
              Passion Pavers Services (PPS) is committed to empowering
              individuals and businesses to express their passion through
              visually appealing and highly customizable websites. Our one-click
              publish feature simplifies the process, allowing users to bring
              their ideas to life without the need for extensive technical
              knowledge. Join us on the path to building your passion and
              showcasing it to the world.
            </Typography>
          </ColoredCard>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
