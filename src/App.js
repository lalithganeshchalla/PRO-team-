  import './App.css';
  import React, {useState} from 'react';
  import HomeDefault from './HomeDefault';
  import SplashScreen from './splashscreen';
  import CadidateLogin from './CandidateLogin';
  import SignUp from './candidatesigup';
  import OTPVerification from './SignUpverification';
  import SignUpPlanCarrer from './SignUpPlanCarrer';
  import SignUpPlanCarrerSelection from './SignUpPlanCarrerSelection';
  import HomePageWithLogin from './HomePageWithLogin';
  import Internship  from './Internship';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  function App() {
    const[loading,setLoading]=useState(true);
    return (
      <>
      <Router>
      <Routes>
        <Route path="/" element={loading ? <SplashScreen onFinish={()=>setLoading(false)}/> : <HomeDefault/>} />
        <Route path="/login" element={<CadidateLogin />} />
        <Route path="/withlogin" element={<HomePageWithLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/otp" element={<OTPVerification />} />
        <Route path="/SUPC" element={<SignUpPlanCarrer />} />
        <Route path="/SUPCS" element={<SignUpPlanCarrerSelection />} />

      </Routes>
    </Router>
      </>
    );
  }

  export default App;
