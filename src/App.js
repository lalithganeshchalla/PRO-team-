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
  import Activites from './activities';
  import Tasks from './tasks';
  import Teams from './teams';
  import LeaderBoard from './Leaderboard';
  import Levels from './components/Dashboard';
  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Notification from './components/Notification';
  import AppliedActivities from './AppliedActivites';
  import ActivityDashboard from './ActivityDashboard';
  import Trancation from './Transcations';
  import Support from './Support';
  import Settings from './Settings';
  import Logout from './HomeDefault';
  import Jobs from './Jobs';
  import Host from './Host';
  import Practice from './Practice';
  import Mentor from './Mentor';
  import Competitions from './Competitions';
  import Pay from './components/PaymentScreeen';
import CandidateLogin from './CandidateLogin';
import JudgeLogin from './JudgeLogin';
import JudgeHomePage from './JudgeHomePage';
import AssignmentScreen from "./AssignmentScreen";
import Submissions from './Submissions';
import ProgressMonitoring from './ProcessMonitaring';
import JudgeNotification from './JudgeNotification';
import JudgeReports from './JudgeReports';
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
        <Route path="/activities" element={<Activites />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/leaderboard" element={<LeaderBoard />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/applied" element={<AppliedActivities/>}/>
        <Route path="/activitydashboard" element={<ActivityDashboard />}/>
        <Route path="/levels" element={<Levels/>}/>
        <Route path="/transactions" element={<Trancation />} />
        <Route path="/support" element={<Support/>}/>
        <Route path="/settings" element={<Settings/>}/>
        <Route path="/logout" element={<Logout />}/>
        <Route path="/jobs" element={<Jobs />}/>
        <Route path="/host" element={<Host />}/>
        <Route path="/practice" element={<Practice />}/>
        <Route path="/mentors" element={<Mentor />}/>
        <Route path="competitions" element={<Competitions />} />
        <Route path="/pay" element={<Pay />} />
        <Route path="/candidatelogin" element={<CandidateLogin />} />
        <Route path="/judgelogin" element={<JudgeLogin />} />
        <Route path="/judgewithlogin" element={<JudgeHomePage />} />
        <Route path="/home" element={<JudgeHomePage />} />
        <Route path="/assignment" element={<AssignmentScreen />} />
        <Route path="/submissionevaluation" element={<Submissions />} />
        <Route path="/progressmonitoring" element={<ProgressMonitoring />} />
        <Route path="/judgenotification" element={<JudgeNotification />} />
        <Route path="/report" element={<JudgeReports />} />
      </Routes>
    </Router>
      </>
    );
  }
  export default App;
