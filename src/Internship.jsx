import React, { useState } from 'react';
import { Box, Grid, AppBar, Toolbar, Button, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import InternshipCard from './components/InternshipCard';
import InternshipDetails from './components/InternshipDetails';
import Buttons from './components/ButtonDropDown';
import LanguageDropDown from './components/LanguageDropDown';
import logo from './assets/Logo.png';
import Avatar from './components/Avatars';


const internships = [
    {
        id: 1,
        title: 'Ambassador Internship',
        company: 'Pluntx',
        duration: '27 days left',
        eligibility: 'B-Tech Students',
        location: 'Hyderabad',
        updatedOn: 'Feb 7, 2025',
        eligibilityDetails: 'Open to all: Undergraduate and Postgraduate Students.',
    },
    {
        id: 2,
        title: 'Marketing Internship',
        company: 'TechCorp',
        duration: '15 days left',
        eligibility: 'MBA Students',
        location: 'Bangalore',
        updatedOn: 'Feb 10, 2025',
        eligibilityDetails: 'Open to all: Graduate and Postgraduate Students.',
    },
    {
        id: 3,
        title: 'Marketing Internship',
        company: 'TechCorp',
        duration: '15 days left',
        eligibility: 'MBA Students',
        location: 'Bangalore',
        updatedOn: 'Feb 10, 2025',
        eligibilityDetails: 'Open to all: Graduate and Postgraduate Students.',
    },
    {
        id: 4,
        title: 'Ambassador Internship',
        company: 'Pluntx',
        duration: '27 days left',
        eligibility: 'B-Tech Students',
        location: 'Hyderabad',
        updatedOn: 'Feb 7, 2025',
        eligibilityDetails: 'Open to all: Undergraduate and Postgraduate Students.',
    },
];

function App() {
    const [selectedId, setSelectedId] = useState(internships[0].id);
    const navigate = useNavigate();
    const selectedInternship = internships.find((item) => item.id === selectedId);

    return (
        <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', p: 2 }}>
           <AppBar position="static" sx={{ background: "#fff", boxShadow: "none", padding: "10px 0", maxWidth: "100%" }}>
          <Toolbar sx={{ display: "flex" }}>
            <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", background: "#f5f5f5", padding: "5px 10px", borderRadius: "20px", color: "#b5b5b5" }}>
              <SearchIcon />
              <InputBase placeholder="Search Hackathons" sx={{ marginLeft: 1 ,fontSize: "12px" }} />
            </Box>
            <Button sx={{ color: "#fff" ,backgroundColor:"#9dff8a" ,width:"150px"}} onClick={() => navigate("/internship")}>Internships</Button>
            <Button sx={{ color: "#000" }}>Jobs</Button>
            <Button sx={{ color: "#000" }}>Competitions</Button>
            <Button sx={{ color: "#000" }}>Mentors</Button>
            <Button sx={{ color: "#000" }}>Practice</Button>
            <Buttons />
            <LanguageDropDown />
            <Avatar />
            <Button variant="outlined" sx={{ borderRadius: "25px" }}>Host</Button>
            </Box>
          </Toolbar>
        </AppBar>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    {internships.map((internship) => (
                        <InternshipCard
                            key={internship.id}
                            internship={internship}
                            selected={internship.id === selectedId}
                            onSelect={setSelectedId}
                        />
                    ))}
                </Grid>
                <Grid item xs={12} md={8}>
                    <InternshipDetails internship={selectedInternship} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;
