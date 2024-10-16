import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Layout/AgentSidebar";
import AgentSidebar from "./components/Layout/AgentSidebar";
import Teams from "./components/Team";

export default function Home() {
  return (
    <div>
      <main>
      <LandingPage/>
      <AgentSidebar/>
      <Teams/>
       
      </main>
    
    </div>
  );
}
