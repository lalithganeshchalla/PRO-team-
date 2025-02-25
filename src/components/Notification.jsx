import React, { useState } from "react";
import { Box, Typography, Switch, Divider } from "@mui/material";

const Notification = () => {
  const [newsletterActive, setNewsletterActive] = useState(true);
  const [emailActive, setEmailActive] = useState(true);
  const [organizerEmailsActive, setOrganizerEmailsActive] = useState(true); // New toggle for organizer emails

  return (
    <Box sx={{ padding: 2 }}>
      {/* Newsletter Preference */}
      <Box 
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Newsletter Preference
        </Typography>
        <Switch 
          checked={newsletterActive} 
          onChange={() => setNewsletterActive(!newsletterActive)} 
          color="success" 
        />
      </Box>

      <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
        Our newsletter provides updates on hiring challenges, job openings, internships, competitions, and quizzes from elite colleges and top recruiters like Walmart, Flipkart, Uber, and Amazon.
      </Typography>

      <Divider sx={{ my: 2 }} />

      {/* Email Notification Preference */}
      <Box 
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Email Notification Preference
        </Typography>
        <Switch 
          checked={emailActive} 
          onChange={() => setEmailActive(!emailActive)} 
          color="success" 
        />
      </Box>

      <Typography variant="body2" sx={{ color: "gray", mb: 2 }}>
        Automated reminders are sent for incomplete registrations, daily quiz and hackathon reminders, submission reminders, and review reminders.
      </Typography>

      {/* <Divider sx={{ my: 2 }} /> */}

      {/* Organizer Emails Toggle */}
      <Box 
        sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}
      >
        <Typography variant="body2" sx={{ color: "gray" }}>
          You can turn on the emails sent by the organizers for a single/multiple competitions from the "My Applications" page.
        </Typography>
        <Switch 
          checked={organizerEmailsActive} 
          onChange={() => setOrganizerEmailsActive(!organizerEmailsActive)} 
          color="success" 
        />
      </Box>
    </Box>
  );
};

export default Notification;
