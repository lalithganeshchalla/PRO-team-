import React from "react";
import { Box, Typography } from "@mui/material";

const Mainbar = ({ onSelect }) => {
  const menuItems = [
    "All", "Competitions", "Quizzes", "Activities", "Scholarships", 
    "Internships", "Jobs", "Workshops", "Conferences", 
    "Events", "Festivals"
  ];

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around", // Equal spacing
        alignItems: "center",
        backgroundColor: "white",
        padding: "10px 0",
        cursor: "pointer",
      }}
    >
      {menuItems.map((item, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{
            fontWeight: "normal",
            color: "#000",
            transition: "color 0.3s",
            "&:hover": { color: "#66ff66" }, // Hover effect
          }}
          onClick={() => onSelect(item)} // Update selectedCategory
        >
          {item}
        </Typography>
      ))}
    </Box>
  );
};

export default Mainbar;
