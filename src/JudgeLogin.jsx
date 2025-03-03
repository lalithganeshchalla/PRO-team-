import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import image from "./assets/undraw1.png";
import logo from "./assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { CardContent, TextField } from "@mui/material";
import RoleSelector from "./components/RoleSelected";


const JudgeLogin = () => {
  
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ background: "#fff", padding: 5, borderRadius: 5, boxShadow: 2, marginTop: 10 ,marginBottom: 10, borderTopRightRadius: 50, borderBottomLeftRadius: 50 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
          <img src={logo} alt="Sign Up" style={{ width: "100%", maxWidth: "200px" }} />
          <Typography variant="body1" fontWeight="bold">
            Judge
          </Typography>
        </Box>

        <RoleSelector />

        {/* Form & Image */}
        <Grid container spacing={4} sx={{ marginTop: 2, alignItems: "center" }}>
          {/* Left Side Image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={image} alt="Sign Up" style={{ width: "100%", maxWidth: "350px"}} />
            </Box>
          </Grid>
          <Box flex={1} p={4}>

            <CardContent>
              
              <TextField
                fullWidth
                label="Email ID"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                sx={{ mb: 1 }}
              />
              <Typography
                align="right"
                variant="caption"
                color="primary"
                sx={{ cursor: 'pointer' }}
              >
                Forgot Password?
              </Typography>
              <Grid item xs={12} md={12}>
              {/* Submit Button */}
              <Button type="submit" fullWidth variant="contained" sx={{ background: "#000", color: "#fff", marginTop: 2 }} onClick={() => navigate("/judgewithlogin")}>
                Login
              </Button>

              {/* Already have an account? */}
              <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
                Any Login Issus ContactUs? <span style={{ color: "#00cc00", cursor: "pointer" }} onClick={() => navigate("/signup")}>HelpLine</span>
              </Typography>
          </Grid>
            </CardContent>
          </Box>
          {/* Right Side Form */}
         
        </Grid>
      </Box>
    </Container>
  );
}
export default JudgeLogin;