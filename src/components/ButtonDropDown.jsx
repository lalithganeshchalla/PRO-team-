import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";

const DropdownButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button 
        sx={{ color: "#000" }} 
        onClick={handleClick}
      >
        More🔽
      </Button>

      <Menu 
        anchorEl={anchorEl} 
        open={open} 
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Courses</MenuItem>
        <MenuItem onClick={handleClose}>Scholar Ships</MenuItem>
        <MenuItem onClick={handleClose}>Cultural Events</MenuItem>
        <MenuItem onClick={handleClose}>Workshops</MenuItem>
        <MenuItem onClick={handleClose}>Conference</MenuItem>
        <MenuItem onClick={handleClose}>Blog</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownButton;
