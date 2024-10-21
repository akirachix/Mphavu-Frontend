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


export default function Home() {
  return (
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



      </main>
    
    </div>
  );
}
