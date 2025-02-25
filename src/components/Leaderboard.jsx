import React from "react";
import { Box, Typography, Card, Avatar, Divider, Grid, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { EmojiEvents as RewardIcon, TrendingUp as TrendIcon, CardMembership as MembershipIcon } from "@mui/icons-material";

const leaderboardData = [
  { rank: 1, name: "George Reddy", score: 950, trends: "+5", achievements: 12, progress: 90 },
  { rank: 2, name: "Bob", score: 900, trends: "-2", achievements: 10, progress: 75 },
  { rank: 3, name: "Charlie", score: 850, trends: "+3", achievements: 9, progress: 65 },
];

const atmCards = [
  { profile: "A", gift: "George Reddy", points: 1500, achievements: 12, progress: 95, bgcolor: "yellow" },
  { profile: "B", gift: "Vishnu Reddy", points: 1350, achievements: 15, progress: 85, bgcolor: "#add8e6" },
  { profile: "C", gift: "Chandana", points: 1200, achievements: 10, progress: 70, bgcolor: "#a52a2a" },
];

const Leaderboard = () => {
  return (
    <Box sx={{ display: "flex", gap: 3, p: 2 }}>
      {/* Left Section - 75% */}
      <Box sx={{ flex: 3, display: "flex", flexDirection: "column", gap: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Ranking</Typography>
        <Grid container spacing={2}>
          {atmCards.map((card, index) => (
            <Grid item xs={4} key={index}>
              <Card sx={{ display: "flex", alignItems: "center", flexDirection: "column", p: 2 }}>
                <Avatar sx={{ bgcolor: card.bgcolor, width: 50, height: 50, mb: 1 }}>{card.profile}</Avatar>
                <Typography variant="body1" sx={{ fontWeight: "bold", color: "#d4af37" }}>
                  <MembershipIcon sx={{ fontSize: 16, color: "#d4af37", mr: 1 }} />
                  {card.gift}
                </Typography>
                <Typography variant="body2" sx={{ color: "#444" }}>
                  <RewardIcon sx={{ fontSize: 16, color: "#d4af37", mr: 1 }} />
                  {card.points} Points
                </Typography>
                <Typography variant="body2" sx={{ fontWeight: "bold", color: "#000" }}>{card.achievements} Achievements</Typography>
                <LinearProgress variant="determinate" value={card.progress} sx={{ mt: 2, width: "100%", height: 10, borderRadius: 5 }} />
              </Card>
            </Grid>
          ))}
        </Grid>

        <TableContainer component={Paper}>
          <Table>
            <TableHead sx={{ backgroundColor: "#add8e6" }}>
              <TableRow>
                <TableCell><b>Rank</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Membership Progress</b></TableCell>
                <TableCell><b>Points</b></TableCell>
                <TableCell><b>Trends</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {leaderboardData.map((player, index) => (
                <TableRow key={index}>
                  <TableCell>#{player.rank}</TableCell>
                  <TableCell>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <Avatar>{player.name.charAt(0)}</Avatar>
                      {player.name}
                    </Box>
                  </TableCell>
                  <TableCell>
                    <LinearProgress variant="determinate" value={player.progress} sx={{ width: "100%", height: 10, borderRadius: 5 }} />
                  </TableCell>
                  <TableCell>{player.score} Points</TableCell>
                  <TableCell sx={{ color: player.trends.startsWith("+") ? "green" : "red" }}>
                    <TrendIcon sx={{ fontSize: 16, mr: 1 }} />
                    {player.trends}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

      {/* Right Section - 25% */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Statistics</Typography>
        <Card sx={{ height: 40, borderRadius: 2 ,backgroundColor: "#D0F0C0" }} />
        <Card sx={{ height: 40, borderRadius: 2 ,backgroundColor: "#D0F0C0"}} />
        <Card sx={{ height: 40, borderRadius: 2  ,backgroundColor: "#D0F0C0"}} />
        <Divider />

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Recent Achievements</Typography>
        <Card sx={{ height: 40, borderRadius: 2 ,backgroundColor: "#DFFFD6" }} />
        <Card sx={{ height: 40, borderRadius: 2 ,backgroundColor: "#DFFFD6" }} />
        <Card sx={{ height: 40, borderRadius: 2 ,backgroundColor: "#DFFFD6"}} />
        <Divider />

        <Typography variant="h6" sx={{ fontWeight: "bold" }}>Top Categories</Typography>
        <Card sx={{ height: 40, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "green", color: "white" }}>
          <Typography>Development</Typography>
        </Card>
        <Card sx={{ height: 40, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "pink", color: "black" }}>
          <Typography>Design</Typography>
        </Card>
        <Card sx={{ height: 40, borderRadius: 2, display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "lightpink", color: "black" }}>
          <Typography>Market</Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default Leaderboard;