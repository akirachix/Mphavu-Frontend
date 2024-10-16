import AvailableTeams from "@/components/AvailableTeams";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import PlayerCreationForm from "@/components/PlayerCreationForm";
import PlayerTable from "@/components/PlayersTable";
import TeamCreationForm from "@/components/TeamCreationForm";
import TopPlayers from "@/components/TopPlayers";
import Image from "next/image";
import TeamSearchPage from "@/components/TeamNotFound";
import TeamsHeaderHeader from "@/components/TeamsHeader";
import TeamList from "@/components/TeamList";
import ProductMetrics from "@/components/ProductMetrics";
import AgentsMetrics from "@/components/AgentsMetrics/agents";
// import <PlayerCreationForm></PlayerCreationForm>



import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Layout/AgentSidebar";
import AgentSidebar from "./components/Layout/AgentSidebar";

export default function Home() {
  return (
    <div>
      <main >
     {/* <Navbar/> */}
      {/* <Header/> */}
     <PlayerTable/> 
     {/* <TopPlayers/>  */}
     {/* <AvailableTeams/>  */}
     {/* <TeamCreationForm/> */}
     {/* <PlayerCreationForm/> */}
     {/* <TeamSearchPage/> */}
     {/* <TeamList/> */}
     {/* <ProductMetrics/> */}
     {/* <AgentsMetrics/> */}
      </main>
      <main>
      <LandingPage/>
      <AgentSidebar/>
       
      </main>
    
    </div>
  );
}

