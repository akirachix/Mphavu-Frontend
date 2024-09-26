
"use client"; 
import AddPlayer from "@/components/AddPlayer/page";
import PlayerNotFound from "@/components/PlayerNotFound/page";
import Players from "@/components/Players/page";
import PlayerProfile from "@/components/PlayerStats/page";
import StatisticsForm from "@/components/Statistics/page";
import PlayerPerformance from "@/components/PlayerProfile/page";
import Dashboard from "@/components/Dashboard/page";
import Dashboardss from "@/components/Dashboards/page";
import PlayerStats from "@/components/PlayerStats/page";
export default function Home() {
  return (
    <main>
           {/* <StatisticsForm/> */}
          {/* <PlayerStats/> */}
        <StatisticsForm/>
          {/* <PlayerProfile/> */}
          {/* <AddPlayer/> */}
          {/* <PlayerNotFound/> */}
      {/* <Dashboard/>
      <Dashboardss/>  */}
    </main>
  );
}
