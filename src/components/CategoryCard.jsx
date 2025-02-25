import React from "react";
import { Card, Typography, Box } from "@mui/material";

const CategoryCard = ({ imgSrc, title, desc, color }) => {
  return (
    <Card sx={{ background: color, borderRadius: "20px", display: "flex", flexDirection: "row-reverse" }}>
        <Box sx={{ display: "flex", width: "100px", height: "100px" }}>
         <img src={imgSrc} alt={title} />
         </Box>
           <Typography variant="h6">{title}</Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>{desc}</Typography>
    </Card>
  );
};

export default CategoryCard;

