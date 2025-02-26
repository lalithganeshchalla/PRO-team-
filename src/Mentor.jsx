import React from 'react';
import { useState } from 'react';
import { Box, AppBar, Toolbar, InputBase, Button, Avatar, Typography } from '@mui/material';
import { Search as SearchIcon, } from '@mui/icons-material';
import logo from './assets/Logo.png';
import { useNavigate } from 'react-router-dom';
import Buttons from './components/ButtonDropDown';
import LanguageDropDown from './components/LanguageDropDown';
import ProfileUpdate from './components/ProfileUpdation';
import MentorCard from "./components/MentorCard";

const Mentors = () => {
      const navigate = useNavigate();
      const [isDrawerOpen, setIsDrawerOpen] = useState(false);
      const openDrawer = () => {
        setIsDrawerOpen(true);
      };
    
      const closeDrawer = () => {
        setIsDrawerOpen(false);
      };
  return (
    <Box display="flex">
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
            <Button sx={{ color: "#fff" ,backgroundColor:"#9dff8a" ,width:"110px",fontWeight:"700"}} onClick={() => navigate("/mentors")}>Mentors</Button>
            <Button sx={{ color: "#000" }} onClick={() => navigate("/practice")}>Practice</Button>
            <Buttons />
            <LanguageDropDown />
            <Avatar onClick={openDrawer} />
            <ProfileUpdate open={isDrawerOpen} onClose={closeDrawer} />
            <Button variant="outlined" sx={{ borderRadius: "25px" }}>Host</Button>
          </Box>
        </Toolbar>
      </AppBar>
      

      <Box sx={{ flexGrow: 1, padding: "2rem" }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Mentors
        </Typography>

        <MentorCard />
        <MentorCard />
        <MentorCard />
      </Box>
    </Box>
  );
};

export default Mentors;
