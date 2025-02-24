import React from "react";
import { Box, Typography, IconButton, Divider } from "@mui/material";
import { 
  CalendarToday as CalendarIcon, 
  EmojiEvents as TrophyIcon, 
  Favorite as FavoriteIcon, 
  Share as ShareIcon, 
  Group as TeamIcon, 
  Star as StarIcon, 
  HowToReg as RegisterIcon 
} from "@mui/icons-material";

// Define colors
const MASTER_GREEN = "#66CC66";
const LIGHT_GREEN = "#DFFFD6";
const LIGHT_RED = "#FFDDDD";

const MasterCode = () => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      padding: "10px 20px",
      // borderRadius: "50px",
      fontWeight: "bold",
      fontSize: "18px",
      backgroundColor: "white",
      border: `2px solid ${MASTER_GREEN}`,
    }}
  >
    <Box
      sx={{
        backgroundColor: MASTER_GREEN,
        color: "white",
        padding: "5px 10px",
        borderRadius: "30px",
        fontWeight: "bold",
        fontSize: "18px",
        marginRight: "8px",
      }}
    >
      Master
    </Box>
    <Typography sx={{ color: MASTER_GREEN, fontWeight: "bold", fontSize: "18px" }}>
      Code
    </Typography>
  </Box>
);


const Transaction = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "start", mt: 3 }}>
      {/* Transaction Title with Divider */}
      <Typography variant="h5" sx={{ fontWeight: "bold", mb: 1 }}>
        Transaction
      </Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Content Box */}
      <Box
        sx={{
          backgroundColor: LIGHT_RED,
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            gap: 3,
          }}
        >
          {/* Left Section */}
          <Box sx={{ width: "60%", textAlign: "center", paddingRight: 3 }}>
            <MasterCode />
            <Typography variant="h6" sx={{ fontWeight: "bold", mt: 1 }}>
              Master Code Talent Room 2025
            </Typography>
            <Typography variant="body1">Master Code</Typography>
            <Typography
              variant="body2"
              sx={{ display: "flex", alignItems: "center", justifyContent: "center", mt: 1, color: "gray" }}
            >
              <CalendarIcon sx={{ fontSize: 16, marginRight: 1 }} />
              Updated on: May 10, 2025
            </Typography>

            {/* Trophy Section */}
            <Box
              sx={{
                backgroundColor: LIGHT_GREEN,
                padding: 3,
                borderRadius: 2,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                minHeight: "100px",
                mt: 2,
              }}
            >
              <TrophyIcon sx={{ fontSize: 40, color: "gold" }} />
              <Box sx={{ maxWidth: "350px", textAlign: "center" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Grab pre-placement offers
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  & cash prizes worth ₹3,53,000
                </Typography>
              </Box>
            </Box>
          </Box>

{/* Right Section */}
<Box
  sx={{
    width: "40%",
    textAlign: "left",
    paddingLeft: 3,
    backgroundColor: "#fff",
    padding: 3,
    borderRadius: 2,
  }}
>
  {/* ₹499 on the left & Icons on the right */}
  <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
    <Typography variant="h6" sx={{ fontWeight: "bold", color: "black" }}>
      ₹499/-
    </Typography>
    <Box>
      <IconButton><FavoriteIcon color="error" /></IconButton>
      <IconButton><CalendarIcon color="action" /></IconButton>
      <IconButton><ShareIcon color="primary" /></IconButton>
    </Box>
  </Box>

  <Box
  sx={{
    backgroundColor: "#FFF9C4", // Light Yellow Background
    padding: "8px 16px",
    borderRadius: 2,
    border: "1px solid #ccc",
    mt: 2,
    display: "flex",         // Enables Flexbox
    justifyContent: "center", // Centers Horizontally
    alignItems: "center",     // Centers Vertically
    textAlign: "center",      // Ensures Text Alignment
    height: "40px",           // Optional: Adjust Height
  }}
  >
    <Typography variant="body2" sx={{ fontWeight: "bold"  }}>You've paid ₹499/-</Typography>
  </Box>

  {/* Divider Below Payment Section */}
<Divider sx={{ mt: 2, mb: 2 }} />

  {/* Right Side Icons Arranged in a Column */}
  <Box sx={{ mt: 3, textAlign: "left", display: "flex", flexDirection: "column", gap: 2 }}>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <RegisterIcon sx={{ marginRight: 1 }} />
      <Typography variant="body2">Registered: <strong>1,78,000</strong></Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TeamIcon sx={{ marginRight: 1 }} />
      <Typography variant="body2">Team Size: <strong>1-4 members</strong></Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <StarIcon sx={{ marginRight: 1 }} />
      <Typography variant="body2">Impressions: <strong>2,679</strong></Typography>
    </Box>
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CalendarIcon sx={{ marginRight: 1 }} />
      <Typography variant="body2">Application Deadline: <strong>22 Feb 2025, 06:00 PM IST</strong></Typography>
    </Box>
  </Box>
</Box>

        </Box>
      </Box>
    </Box>
  );
};

export default Transaction;


