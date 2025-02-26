// src/components/MentorCard.jsx

import React from "react";
import { Box, Card, CardContent, Typography, Button, Chip, Avatar } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import mentor from "../assets/mentors.png";

const MentorCard = () => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        boxShadow: "none",
        border: "1px solid #E0E0E0",
        marginBottom: "1rem",
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center">
          <Avatar
            src={mentor}
            sx={{ width: 80, height: 80, marginRight: "1rem" }}
          />
          <Box>
            <Typography variant="h6" fontWeight="bold">
              Thandel Raju
            </Typography>
            <Typography variant="body2" color="text.secondary">
              4 years | Business And Management | 4,434 Engagements | 205 Review
            </Typography>
            <Box display="flex" alignItems="center" mt={1}>
              <Chip label="Available" color="primary" size="small" sx={{ marginRight: "0.5rem" }} />
              <Chip
                icon={<StarIcon style={{ color: "#FFD700" }} />}
                label="4.8"
                color="success"
                size="small"
                sx={{ marginRight: "0.5rem" }}
              />
              <Chip label="Top Mentors" color="warning" size="small" />
            </Box>
          </Box>
        </Box>

        <Box display="flex" justifyContent="flex-end" mt={2}>
          <Button variant="contained" color="success">
            View Profile
          </Button>
        </Box>

        <Box display="flex" justifyContent="center" mt={2}>
          <LinkedInIcon sx={{ color: "#0A66C2", marginRight: "1rem", cursor: "pointer" }} />
          <InstagramIcon sx={{ color: "#E4405F", cursor: "pointer" }} />
        </Box>
        
      </CardContent>
    </Card>
  );
};

export default MentorCard;
