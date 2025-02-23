import React from "react";
import { Container, Typography, Box } from "@mui/material";
import image1 from "./assets/ccc.jpg";

const Hero = () => {
  return (
    <Container sx={{ display: "flex", alignItems: "center", marginTop: 5 }}>
      <img src={image1} alt="home" style={{ width: "200px" }} />
      <Box sx={{ textAlign: "left", marginLeft: 5 }}>
        <Typography variant="h4">
          <span style={{ color: "#00cc00", fontWeight: "bold" }}>Master</span> of Your Career
        </Typography>
        <Typography variant="subtitle1" sx={{ color: "#666", margin: "10px 0" }}>
          Discover worldwide opportunities to enhance your skills, build an impressive CV, and land your dream job
        </Typography>
      </Box>
    </Container>
  );
};

export default Hero;
