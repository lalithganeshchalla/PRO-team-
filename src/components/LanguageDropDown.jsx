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
        En🔻
      </Button>

      <Menu 
        anchorEl={anchorEl} 
        open={open} 
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>English </MenuItem>
        <MenuItem onClick={handleClose}>France</MenuItem>
        <MenuItem onClick={handleClose}>Italian</MenuItem>
        <MenuItem onClick={handleClose}>German</MenuItem>
        <MenuItem onClick={handleClose}>Telugu</MenuItem>
        <MenuItem onClick={handleClose}>Hindi</MenuItem>
      </Menu>
    </div>
  );
};

export default DropdownButton;
