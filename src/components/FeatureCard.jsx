import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

const FeatureCard = ({ imgSrc, title, desc, color }) => {
  return (
    <Card sx={{ background: color, borderRadius: "20px", display: "flex", flexDirection: "row-reverse" }}>
      <Box sx={{ display: "flex", width: "100px", height: "100px" }}>
        <img src={imgSrc} alt={title} />
      </Box>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2" sx={{ color: "#666" }}>{desc}</Typography>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;