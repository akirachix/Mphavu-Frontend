import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Layout/AgentSidebar";
import AgentSidebar from "./components/Layout/AgentSidebar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <main>
      <LandingPage/>
      <AgentSidebar/>
       
      </main>
    
    </div>
  );
}
