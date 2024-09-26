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
    </div>
  );
}

// "use client";
// import { useState } from 'react';
// import Header from "@/components/Header";
// import PlayerCreationForm from "@/components/PlayerCreationForm";
// import PlayerTable from "@/components/PlayersTable";

// export default function Home() {
//   const [showForm, setShowForm] = useState(false); // State to manage form visibility

//   const handleAddPlayer = () => {
//     setShowForm(true); // Set the state to true to show the form
//   };

//   return (
//     <div>
//       <main>
//         <Header onAddPlayer={handleAddPlayer} />
//         {showForm ? (
//           <PlayerCreationForm />
//         ) : (
//           <PlayerTable />
//         )}
//       </main>
//     </div>
//   );
// }