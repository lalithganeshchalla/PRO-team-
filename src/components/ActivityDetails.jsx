import React from "react";
import { Card, CardContent, Typography, Box, Button, Chip, Divider, List, ListItem, ListItemText } from "@mui/material";
import { EmojiEvents, Info, CalendarToday } from "@mui/icons-material";

const ActivityDetails = () => {
  return (
    <Box sx={{ padding: 2 }}>
      {/* Activity Title and Info */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "#33cc33" }}>
            Master Code Talent Room 2025
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" sx={{ mt: 1 }}>
            <Info fontSize="small" sx={{ mr: 1 }} />
            Grab <strong>Pre-Placement Offers</strong> & Cash prizes worth ₹3,53,000
          </Typography>
          <Button 
            variant="contained" 
            sx={{ mt: 2, background: "#0066ff", color: "#fff" }}
          >
            Pay Entry Fees: ₹499 /- &nbsp; | &nbsp; Apply
          </Button>
        </CardContent>
      </Card>

      {/* Stages and Timelines */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Stages and Timelines
          </Typography>
          <List>
            <ListItem>
              <ListItemText 
                primary="Round 1: Learning Boot Camp" 
                secondary="The first round is a 7-day-long learning boot camp. Activities will be shared on your registered email ID."
              />
              <Chip label="To be announced" color="warning" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Round 2: Independent Upskilling" 
                secondary="All shortlisted participants will have access to the available resources. Nav's the time to upskill on your terms!"
              />
              <Chip label="To be announced" color="warning" />
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText 
                primary="Round 3: The Final Interview" 
                secondary="Shortlisted participants from round 2 will be interviewed for an internship with Master Code."
              />
              <Chip label="To be announced" color="warning" />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Eligibility */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Eligibility
          </Typography>
          <Typography variant="body1">
            Open to all: Undergraduate and Postgraduate Students, Freshers, and Experienced Individuals.
          </Typography>
        </CardContent>
      </Card>

      {/* Rewards and Prizes */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Rewards and Prizes
          </Typography>
          <List>
            <ListItem>
              <EmojiEvents sx={{ mr: 2, color: "#ff9900" }} />
              <ListItemText 
                primary="Winner" 
                secondary="Cash prize of ₹2,00,000 and an internship with Master Code."
              />
            </ListItem>
            <ListItem>
              <EmojiEvents sx={{ mr: 2, color: "#ff9900" }} />
              <ListItemText 
                primary="First Runner Up" 
                secondary="Cash prize of ₹1,50,000 and an internship with Master Code."
              />
            </ListItem>
            <ListItem>
              <EmojiEvents sx={{ mr: 2, color: "#ff9900" }} />
              <ListItemText 
                primary="Second Runner Up" 
                secondary="Cash prize of ₹1,30,000 and an internship with Master Code."
              />
            </ListItem>
          </List>
        </CardContent>
      </Card>

      {/* Important Dates and Deadlines */}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Important Dates & Deadlines
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
            <CalendarToday sx={{ mr: 1, color: "#ff3300" }} />
            <Typography variant="body1">
              Application Deadline: <strong>08 May 27, 11:00 AM IST</strong>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ActivityDetails;
