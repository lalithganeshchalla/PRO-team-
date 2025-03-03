import React from "react";
import { Card, List, ListItem, ListItemText, Typography } from "@mui/material";

const deadlines = [
  { title: "Design Review Meeting", time: "2:00 PM Today" },
  { title: "Project Evaluation Due", time: "Tomorrow" },
  { title: "Team Sync", time: "13 Mar, 2:30 PM" },
  { title: "Performance Review", time: "23 Mar, 11:00 AM" },
];

const UpcomingDeadlines = () => {
  return (
    <Card sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6">Upcoming Deadlines</Typography>
      <List>
        {deadlines.map((deadline, index) => (
          <ListItem key={index}>
            <ListItemText primary={deadline.title} secondary={deadline.time} />
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default UpcomingDeadlines;
