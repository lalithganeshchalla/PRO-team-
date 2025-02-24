import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import LevelSearch from "./LevelSearch"; // Import LevelSearch

const LevelDetails = ({ selectedCategory }) => {
  return (
    <Card sx={{ p: 2, width: "100%", borderRadius: "10px", backgroundColor: "white" }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>

        {/* My Levels Section */}
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
          My Levels
        </Typography>

        {/* Levels Details (Only shown if category is 'Levels') */}
        {selectedCategory === "Levels" && (
          <>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Levels Details
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This section shows details about Levels.
            </Typography>
          </>
        )}

        {/* Level Search Component */}
        <LevelSearch />

      </CardContent>
    </Card>
  );
};

export default LevelDetails;
