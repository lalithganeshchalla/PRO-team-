import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Navbar from "./Navbar";
import Hero from "./Hero";
import FeatureCard from "./FeatureCard";
import CategoryCard from "./CategoryCard";

import intenship from "./assets/intenship.png";
import mentors from "./assets/mentors.png";
import jobs from "./assets/jobs.png";
import more from "./assets/more.png";
import awades from "./assets/awades.png";
import aechives from "./assets/aechives.png";
import student from "./assets/student.png";
import compani from "./assets/compani.png";
import colleges from "./assets/colleges.png";

const Home = () => {
  const features = [
    { imgSrc: intenship, title: "Internships", desc: "Gain Practical Experience", color: "#cceeff" },
    { imgSrc: jobs, title: "Jobs", desc: "Explore Diverse Careers", color: "#ffccdd" },
    { imgSrc: aechives, title: "Competitions", desc: "Battle For Excellence", color: "#ffddaa" },
    { imgSrc: mentors, title: "Mentors", desc: "Guidance From Top Mentors", color: "#ffffcc" },
    { imgSrc: awades, title: "Practice", desc: "Refine Skills Daily", color: "#ccffcc" },
    { imgSrc: more, title: "More", desc: "", color: "#e0c3fc" },
  ];

  const categories = [
    { imgSrc:student, title: "Students and Professionals", desc: "Compete, Build Resume, Grow and get Hired!" },
    { imgSrc:compani, title: "Companies and Recruiters", desc: "Hire, Engage, and Brand Like Never Before!" },
    { imgSrc:colleges, title: "Colleges", desc: "Bridge Academia and Industry with Real-World Opportunities!" },
  ];

  return (
    <>
      <Navbar />
      <Hero />
      
      {/* Feature Cards */}
      <Container sx={{ marginTop: 5 }}>
        <Grid container spacing={3} sx={{ justifyContent: "flex-end" }}>
          {features.map((item, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <FeatureCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* User Categories */}
      <Container sx={{ marginTop: 5 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 2 }}>
          Who's using Master Code?
        </Typography>
        <Grid container spacing={3} sx={{ justifyContent: "flex-end"}}>
          {categories.map((item, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <CategoryCard {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
