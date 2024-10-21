import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Layout/AgentSidebar";
import AgentSidebar from "./components/Layout/AgentSidebar";


import ScoutingComparison from "./components/ScoutingComparison";
import Statistics from "./components/statistics/page";

import CardStatistics from "./components/cardStatistics/page";
import Comparison from "./components/ScoutingComparison";
import SelectRole from "./components/SelectRole";
import Team from "./components/Team";

import Navbar from "./components/Navbar";
import TeamList from "./components/TeamList";
import StatisticsForm from "./components/statistics/page";
import RegistrationForm from "./components/Signup";
import LoginPage from "./components/Login";
import Teams from "./components/Team";



"use client";

import Statistics from "./components/analyze";
import Players from "./components/players/page";
import StatisticsPage from "./components/statisticsform/page";
import StatisticsForm from "./components/statisticsform/page";
import PerformanceMetrics from "./components/analyze";
import Analyze from "./components/analyze";
import Dashboard from "./components/dashboard/page";
import Sidebar from "./components/sidebar/pages";
import AnalyzeResults from "./analyze/page";
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
        <StatisticsForm/>
        {/* <Analyze/> */}
        {/* <PerformanceMetrics />*/}
        {/* <Dashboard/> */}
        {/* <Sidebar/> */}
        <AnalyzeResults/>
      </div>
</main>

    <div>
      <main>
      {/* <LandingPage/> */}

      {/* <SelectRole/> */}
      {/* <AgentSidebar/> */}
      <Team/>
      {/* <ScoutingComparison/> */}
      {/* <Statistics/> */}
      <CardStatistics/>
      

{/* didn't fetch */}
      {/* <ComparativeStatistics/>    */}

{/* Failed error--- check later*/}
      {/* <PlayerCard/> */}

{/* Repeated */}
      {/* <Comparison/> */}




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
