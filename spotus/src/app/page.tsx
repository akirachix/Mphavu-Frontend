import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Layout/AgentSidebar";
import AgentSidebar from "./components/Layout/AgentSidebar";
import Navbar from "./components/Navbar";
import TeamList from "./components/TeamList";
import StatisticsForm from "./components/statistics/page";
import RegistrationForm from "./components/Signup";
import LoginPage from "./components/Login";
import Teams from "./components/Team";


"use client";

import Dashboard from "./components/dashboard";
import Sidebar from "./components/Sidebar";
// import AnalyzeResults from "./components/analyze";
export default function Home() {
  return (

    <main>
      <div>
        {/* <Players/> */}
        {/* <AnalyzeResults/> */}
        {/* <Statistics/> */}
        {/* <Performance/> */}
        {/* <PerformanceMetrics/> */}
        {/* <StatisticsForm/> */}
        {/* <Analyze/> */}
        {/* <PerformanceMetrics />*/}
        {/* <Dashboard/> */}
        <Sidebar/>
        {/* <Dashboard/> */}
        {/* <AnalyzeResults/> */}
      </div>
</main>

    <div>
      <main>
      {/* <LandingPage/> */}
      {/* <AgentSidebar/> */}
      <TeamList/>
    <LandingPage/>
       <AgentSidebar/> 
       <StatisticsForm/>
      <LandingPage/>
      <AgentSidebar/>
      <Teams/>
       
      </main>
      <RegistrationForm/>
      <LoginPage/>
    </div>

  );
}
