import React from "react";
import { Box, Typography, Card, CardContent, Avatar, Divider, Grid } from "@mui/material";
import { EmojiEvents as RewardIcon, TrendingUp as TrendIcon } from "@mui/icons-material";

const leaderboardData = [
  { rank: 1, name: "George Reddy", score: 950, trends: "+5", achievements: 12 },
  { rank: 2, name: "Bob", score: 900, trends: "-2", achievements: 10 },
  { rank: 3, name: "Charlie", score: 850, trends: "+3", achievements: 9 },
];

const atmCards = [
  { profile: "A", gift: "Gold Membership Badge", points: 1500, achievements: 12 },
  { profile: "B", gift: "Platinum Badge", points: 1350, achievements: 15 },
  { profile: "C", gift: "Silver Trophy", points: 1200, achievements: 10 },
];

const Leaderboard = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, p: 2 }}>
      {/* Left Section: ATM Cards */}
      <Box sx={{ flex: 1 }}>
        <Grid container spacing={2}>
          {atmCards.map((card, index) => (
            <Grid item xs={4} key={index}>
              <Card sx={{ display: "flex", alignItems: "center", p: 2, bgcolor: "#faf0ca" }}>
                <Avatar sx={{ bgcolor: "#ffcc00", width: 50, height: 50, mr: 2 }}>{card.profile}</Avatar>
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="body1" sx={{ fontWeight: "bold", color: "#d4af37" }}>
                    {card.gift}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#444" }}>
                    <RewardIcon sx={{ fontSize: 16, color: "#d4af37", mr: 1 }} />
                    {card.points} Points
                  </Typography>
                </Box>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#000" }}>
                  {card.achievements} Achievements
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Left Section: Ranking Box */}
      <Box sx={{ flex: 1, border: "1px solid #ccc", borderRadius: 2, p: 2, bgcolor: "#fff" }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
          Rankings
        </Typography>
        <Divider sx={{ mb: 2 }} />

        {leaderboardData.map((player, index) => (
          <Box key={index} sx={{ display: "flex", justifyContent: "space-between", mb: 2, p: 1, bgcolor: index === 0 ? "#ffd700" : "#f5f5f5", borderRadius: 2 }}>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              #{player.rank} {player.name}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", color: "#000" }}>
              {player.score} Points
            </Typography>
            <Typography variant="body2" sx={{ color: player.trends.startsWith("+") ? "green" : "red" }}>
              <TrendIcon sx={{ fontSize: 16, mr: 1 }} />
              {player.trends}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Leaderboard;
