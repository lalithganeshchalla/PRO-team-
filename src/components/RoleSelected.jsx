import React, { useState, useEffect } from "react";
import { Box, Tabs, Tab } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

const RoleSelector = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const getRoleIndex = (pathname) => {
    switch (pathname) {
      case "/candidatelogin":
        return 0;
      case "/judgelogin":
        return 1;
      case "/recruiterlogin":
        return 2;
      default:
        return 0;
    }
  };

  const [selectedRole, setSelectedRole] = useState(getRoleIndex(location.pathname));

  useEffect(() => {
    setSelectedRole(getRoleIndex(location.pathname));
  }, [location.pathname]);

  const handleRoleChange = (event, newValue) => {
    setSelectedRole(newValue);

    // Navigate based on the selected tab
    switch (newValue) {
      case 0:
        navigate("/candidatelogin");
        break;
      case 1:
        navigate("/judgelogin");
        break;
      case 2:
        navigate("/recruiterlogin");
        break;
      default:
        break;
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2, pl: 36 }}>
      <Box
        sx={{
          bgcolor: "#a3ff8f",
          borderRadius: "50px",
          padding: "5px",
          display: "flex",
          width: "350px",
          height: "50px",
          alignItems: "center",
        }}
      >
        <Tabs
          value={selectedRole}
          onChange={handleRoleChange} // Corrected: Now accepts event, newValue
          TabIndicatorProps={{
            style: { display: "none" },
          }}
          sx={{
            width: "100%",
            "& .MuiTab-root": {
              textTransform: "none",
              fontWeight: "bold",
              minWidth: "auto",
              flex: 1,
              height: "50%",
              fontSize: "14px",
            },
            "& .Mui-selected": {
              color: "#fff !important",
              backgroundColor: "#008000",
              borderRadius: "30px",
            },
          }}
        >
          <Tab label="Candidate" />
          <Tab label="Judge" />
          <Tab label="Recruiter" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default RoleSelector;
