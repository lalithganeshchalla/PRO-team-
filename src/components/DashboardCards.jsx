import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { AccessTime, CheckCircle, TrendingUp } from "@mui/icons-material";

const stats = [
  { title: "Pending Evaluations", value: 23, icon: <AccessTime />, change: "+2.5%" },
  { title: "Completed Reviews", value: 284, icon: <CheckCircle />, change: "+12.5%" },
  { title: "Active Challenges", value: 8, icon: <AccessTime />, change: "-3.5%" },
  { title: "Success Rate", value: "94%", icon: <TrendingUp />, change: "+1.5%" },
];

const DashboardCards = () => {
  return (
    <Box display="flex" gap={2} mb={2} >
      {stats.map((stat, index) => (
        <Card key={index} sx={{ width: 220, textAlign: "right", padding: 2 ,borderRadius: 5, boxShadow: 3}}>
          <CardContent>
            {stat.icon}
            <Typography variant="h6" sx={{textAlign: 'left'}}>{stat.value}</Typography>
            <Typography variant="body2" sx={{textAlign: 'left'}}>{stat.title}</Typography>
            <Typography variant="caption" color="green" sx={{textAlign: 'right'}}>{stat.change}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DashboardCards;
