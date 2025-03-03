import React from "react";
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Assignment, Assessment, Notifications, BarChart, Analytics, Logout } from "@mui/icons-material";

const menuItems = [
  { text: "Home", icon: <Home />, path: "/Home" },
  { text: "Assignments", icon: <Assignment />, path: "/Assignments" },
  { text: "Submission Evaluation", icon: <Assessment />,path: "/SubmissionEvaluation" },
  { text: "Progress Monitoring", icon: <BarChart /> , path: "/ProgressMonitoring" },
  { text: "Notifications", icon: <Notifications /> ,path: "/Notifications" },
  { text: "Reports & Analysis", icon: <Analytics /> ,path: "/ReportsAnalysis" },
  { text: "Logout", icon: <Logout /> ,path: "/logout" },
];

const Sidebar = () => {
  return (
    <Drawer variant="permanent" sx={{ width: 250 ,marginTop: 10}}>
      <List>
        {menuItems.map((item, index) => (
          <ListItemButton key={index} selected={item.selected}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
