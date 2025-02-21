import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import image from "./assets/undraw.svg";
import logo from "./assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { CardContent, Divider, TextField } from "@mui/material";
import { Google, LinkedIn } from "@mui/icons-material";
import RoleSelector from "./components/RoleSelected";

// ghtaj

const CandidateLogin = () => {
  
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box sx={{ background: "#fff", padding: 5, borderRadius: 5, boxShadow: 2, marginTop: 10 ,marginBottom: 10, borderTopRightRadius: 50, borderBottomLeftRadius: 50 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
          <img src={logo} alt="Sign Up" style={{ width: "100%", maxWidth: "200px" }} />
          <Typography variant="body1" fontWeight="bold">
            Sign In
          </Typography>
        </Box>

        <RoleSelector />

        {/* Form & Image */}
        <Grid container spacing={4} sx={{ marginTop: 2, alignItems: "center" }}>
          {/* Left Side Image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={image} alt="Sign Up" style={{ width: "100%", maxWidth: "350px" ,paddingBottom: "150px"}} />
            </Box>
          </Grid>
          <Box flex={1} p={4}>

            <CardContent>
              <Button
                fullWidth
                startIcon={<Google  sx={{ color: '#DB4437' }} />}
                variant="outlined"
                sx={{ mb: 2, textTransform: 'none', color: '#000' , borderColor: '#b5b5b5'}}
              >
                Continue with Google
              </Button>

              <Button
                fullWidth
                startIcon={<LinkedIn sx={{ color: '#0077B5' }} />}
                variant="outlined"
                sx={{ mb: 2, textTransform: 'none' , borderColor: '#b5b5b5' , color: '#000'}}
              >
                Continue with LinkedIn
              </Button>

              <Divider sx={{ my: 2 , color:'#b5b5b5' }}>Or login with email</Divider>

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
              <Button type="submit" fullWidth variant="contained" sx={{ background: "#000", color: "#fff", marginTop: 2 }} onClick={() => navigate("/withlogin")}>
                Login
              </Button>

              {/* Already have an account? */}
              <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
                Already have an account? <span style={{ color: "#00cc00", cursor: "pointer" }} onClick={() => navigate("/signup")}>SignUp</span>
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
export default CandidateLogin;