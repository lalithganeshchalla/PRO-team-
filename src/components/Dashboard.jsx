import React, { useState } from "react";
import { Box, Typography, Divider } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import Button from "@mui/material/Button";
import Buttons from "./ButtonDropDown";
import LanguageDropDown from "./LanguageDropDown";
import Avatar from "./Avatars";
import Sidebar from "./Sidebar";
import Mainbar from "./Mainbar";
import ProfileUpdate from "./ProfileUpdation";
import { useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

import LevelSearch from "./LevelSearch"; // Import Leaderboard Component
import Leaderboard from "../Leaderboard";
const Dashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState("Levels");
  const [selectedSection, setSelectedSection] = useState(null); // Track which section is selected
const [selected, setSelected] = useState("Levels");
  const handleSidebarSelect = (option) => {
    setSelectedSection(option); // Store selected option
  };
const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <Box>
      <AppBar position="fixed" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0", maxWidth: "100%", top: 0 }}>
          <Toolbar sx={{ display: "flex" }}>
            <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
              <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px", color: "#b5b5b5" }}>
                <SearchIcon />
                <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1 }} />
              </Box>
              <Button sx={{ color: "#000"}} onClick={() => navigate("/internship")}>Internships</Button>
              <Button sx={{ color: "#000" }} onClick={() => navigate("/jobs")}>Jobs</Button>
              <Button sx={{ color: "#000" }} onClick={() => navigate("/competitions")}>Competitions</Button>
              <Button sx={{ color: "#000" }} onClick={() => navigate("/mentors")}>Mentors</Button>
              <Button sx={{ color: "#000" }} onClick={() => navigate("/practice")}>Practice</Button>
              <Buttons />
              <LanguageDropDown />
              <Avatar onClick={openDrawer} />
              <ProfileUpdate open={isDrawerOpen} onClose={closeDrawer} />
              <Button variant="outlined" sx={{ borderRadius: "25px" }}>Host</Button>
            </Box>
          </Toolbar>
        </AppBar>
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
