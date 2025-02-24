import React, { useState } from 'react';
import { Avatar, Box, Typography, Button, Menu, MenuItem, Divider, Badge } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import { useNavigate } from 'react-router-dom';

const Avatars = ({ openDrawer }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const navigate = useNavigate();

  return (
    <Box>
      <Button onClick={handleClick} sx={{  }}>
        <Avatar alt="Tom Holland" src="https://via.placeholder.com/150" />
       
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            bgcolor: '#e0f7df',
            borderRadius: 2,
            padding: 2,
          
          },
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
          <Badge
            overlap="circular"
            anchorOrigin={{ }}
            badgeContent={<CircleIcon sx={{ color: '#4caf50', fontSize: 10 }} />}
          >
            <Avatar alt="Tom Holland" src="https://via.placeholder.com/150" sx={{ width: 60, height: 60 }} />
          </Badge>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Tom Holland</Typography>
            <Typography variant="body2">tomhol@yahoo.com</Typography>
          </Box>
        </Box>

        <Box sx={{ bgcolor: '#fffde7', borderRadius: 2, p: 1, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            You are missing out on opportunities to create an impact
          </Typography>
          <Button 
            size="small" 
            color="primary" 
            sx={{ textTransform: 'none' }} 
            onClick={() => {
              handleClose(); 
              openDrawer();
            }}
          >
            Complete my profile
          </Button>
        </Box>

        <MenuItem onClick={() => navigate("/activites")}>Activities</MenuItem>
        <MenuItem onClick={handleClose}>Teams</MenuItem>
        <MenuItem onClick={handleClose}>Levels</MenuItem>
        <MenuItem onClick={handleClose}>Leaderboard</MenuItem>
        <MenuItem onClick={handleClose}>Applied Activities</MenuItem>
        <MenuItem onClick={handleClose}>Tasks</MenuItem>
        <MenuItem onClick={handleClose}>Notifications</MenuItem>
        <MenuItem onClick={handleClose}>My Transactions</MenuItem>
        <MenuItem onClick={handleClose}>Support</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>

        <Divider sx={{ my: 1 }} />

        <Typography variant="subtitle2" color="text.secondary" sx={{ pl: 1 }}>
          Mentors
        </Typography>
        <MenuItem onClick={handleClose}>My Dashboard</MenuItem>
      </Menu>
    </Box>
  );
};

export default Avatars;
