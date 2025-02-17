
import './App.css';
// import React, {useState} from 'react';
// import HomeDefault from './HomeDefault';
// import SplashScreen from './splashscreen';
//this app.js file
import SignUp from './Logincandidatesigup';
function App() {
  // const[loading,setLoading]=useState(true);
  return (
    <>
    {/* {loading ? <SplashScreen onFinish={()=>setLoading(false)}/> : <HomeDefault/>} */}
    <SignUp />
    </>
  );
}

export default App;
