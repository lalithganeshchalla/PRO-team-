import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import LevelSearch from "./components/LevelSearch";
import Leaderboard from "./components/Leaderboard"; // Import Leaderboard Component

const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSection, setSelectedSection] = useState(null); // Track which section is selected

  const handleSidebarSelect = (option) => {
    setSelectedSection(option); // Store selected option
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <Box>
        <Navbar />
        <Divider /> {/* Navbar Divider */}
      </Box>

      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Left Sidebar */}
        <Box sx={{ display: "flex" }}>
          <Sidebar onSelect={handleSidebarSelect} />
          <Divider orientation="vertical" flexItem /> {/* Sidebar Divider */}
        </Box>

        {/* Right Section */}
        <Box
          sx={{
            flex: 1,
            m: 2,
            pt: 0,
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: 1,
            backgroundColor: "white",
            boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
          }}
        >
          {/* Render Sections Based on Sidebar Selection */}
          {selectedSection === "Levels" && (
            <>
              <Typography variant="h6" sx={{ fontWeight: "bold", color: "black", mb: 1 }}>
                My Levels
              </Typography>
              <Divider sx={{ mb: 1 }} />
              <Mainbar onSelect={setSelectedCategory} />
              <Divider sx={{ mt: 2, mb: 1 }} />
              <LevelSearch />
            </>
          )}

          {selectedSection === "Leaderboard" && <Leaderboard />} {/* Show Leaderboard */}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
