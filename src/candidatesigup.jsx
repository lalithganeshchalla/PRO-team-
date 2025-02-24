import React, { useState } from "react";
import { Box, Button, Container, Grid, TextField, Typography, FormControlLabel, Checkbox, Tabs, Tab, InputAdornment } from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import image from "./assets/undraw.svg";
import { useNavigate } from "react-router-dom";


const CandidateSignUp = () => {
  const [selectedRole, setSelectedRole] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Validation Schema using Yup
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    phone: yup.string().matches(/^\+91\d{10}$/, "Enter valid phone number").required("Phone Number is required"),
    password: yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
    terms: yup.boolean().oneOf([true], "You must accept the terms"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ background: "#fff", padding: 5, borderRadius: 5, boxShadow: 2, marginTop: 5 }}>
        {/* Logo & Navigation */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 3 }}>
          <Typography variant="h5" fontWeight="bold">
            <span style={{ background: "#66ff66", padding: "5px 10px", borderRadius: "20px" }}>Master</span> Code
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            Sign Up
          </Typography>
        </Box>

        <Tabs value={selectedRole} onChange={(e, newValue) => setSelectedRole(newValue)} centered>
          <Tab label="Candidate" />
          <Tab label="Judge" />
          <Tab label="Recruiter" />
        </Tabs>

        {/* Form & Image */}
        <Grid container spacing={4} sx={{ marginTop: 2, alignItems: "center" }}>
          {/* Left Side Image */}
          <Grid item xs={12} md={5}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <img src={image} alt="Sign Up" style={{ width: "100%", maxWidth: "350px" }} />
            </Box>
          </Grid>

          {/* Right Side Form */}
          <Grid item xs={12} md={7}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field }) => <TextField {...field} label="First Name" fullWidth error={!!errors.firstName} helperText={errors.firstName?.message} />}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field }) => <TextField {...field} label="Last Name" fullWidth error={!!errors.lastName} helperText={errors.lastName?.message} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => <TextField {...field} label="Email ID" fullWidth error={!!errors.email} helperText={errors.email?.message} />}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Phone Number"
                        fullWidth
                        error={!!errors.phone}
                        helperText={errors.phone?.message}
                        InputProps={{ startAdornment: <InputAdornment position="start">+91</InputAdornment> }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="password"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        label="Password"
                        type={showPassword ? "text" : "password"}
                        fullWidth
                        error={!!errors.password}
                        helperText={errors.password?.message}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <Button onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                              </Button>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Controller
                    name="confirmPassword"
                    control={control}
                    render={({ field }) => (
                      <TextField {...field} label="Confirm Password" type="password" fullWidth error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} />
                    )}
                  />
                </Grid>
              </Grid>

              {/* Terms & Conditions */}
              <Box sx={{ marginTop: 2 }}>
                <Controller
                  name="terms"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel

                      control={<Checkbox {...field} checked={field.value || false} />}
                      label={<Typography variant="body2">Agree to our <b>Privacy Policy and Terms</b></Typography>}
                    />
                  )}
                />
                {errors.terms && <Typography color="error" variant="body2">{errors.terms.message}</Typography>}
              </Box>

              {/* Submit Button */}
              <Button type="submit" fullWidth variant="contained" sx={{ background: "#000", color: "#fff", marginTop: 2 }} onClick={() => navigate("/otp")}>
                Sign Up
              </Button>

              {/* Already have an account? */}
              <Typography variant="body2" sx={{ textAlign: "center", marginTop: 2 }}>
                Already have an account? <span style={{ color: "#00cc00", cursor: "pointer" }} onClick={() => navigate("/login")}>Sign In</span>
              </Typography>
            </form>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );

};
export default CandidateSignUp;