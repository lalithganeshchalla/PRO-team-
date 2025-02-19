import { AppBar, Toolbar, Box,Button,InputBase,Card,Select,MenuItem,Switch,Avatar,notifications } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Notifications } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Badge, IconButton } from '@mui/material';
import logo from '../assets/Logo.png';

const Navbar = () => {
    const [language, setLanguage] = useState("en"); // Default language: English
    const [notifications, setNotifications] = useState(3); // Example: 3 notifications
  return (
    <Card>
    <AppBar position="static" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0" }}>
    <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
      <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box sx={{color:"#000", display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px" }}>
          <SearchIcon />
          <InputBase placeholder="Search Hackathons" sx={{font:20, marginLeft: 2, flex: 1 }} />
        </Box>
        <Button sx={{ color: "#000" }}>Internships</Button>
        <Button sx={{ color: "#000" }}>Jobs</Button>
        <Button sx={{ color: "#000" }}>Competitions</Button>
        <Button sx={{ color: "#000" }}>Mentors</Button>
        <Button sx={{ color: "#000" }}>Practice</Button>
        <IconButton color="" component={Link} to="/notifications">
          <Badge badgeContent={notifications} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          
          sx={{ minWidth: 100, mx: 2, background: '#f5f5f5', borderRadius: 2, height: 35 }}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="de">Deutsch</MenuItem>
          <MenuItem value="hi">हिंदी</MenuItem>
        </Select>
        <Switch defaultChecked />

        {/* User Avatar */}
        <Avatar src="/profile.jpg" sx={{ ml: 2 }} />
        <Button variant="contained" sx={{ background: "#007bff",borderRadius:"25px" }}>Login</Button>
        <Button variant="outlined" sx={{borderRadius:"25px" }}>Host</Button>
        
      </Box>
    </Toolbar>
  </AppBar>
  </Card>
  );
};

export default Navbar;
