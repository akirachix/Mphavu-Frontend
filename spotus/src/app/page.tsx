import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Layout/AgentSidebar";
import AgentSidebar from "./components/Layout/AgentSidebar";
import StatisticsForm from "./components/statistics/page";
import RegistrationForm from "./components/Signup";

export default function Home() {
  return (
    <div>
      <main>
    <LandingPage/>
       <AgentSidebar/> 
       <StatisticsForm/>
      </main>
      <RegistrationForm/>
    </div>
  );
}
