import Image from "next/image";
import LandingPage from "./components/LandingPage";
import Sidebar from "./components/Layout/AgentSidebar";
import AgentSidebar from "./components/Layout/AgentSidebar";
import Navbar from "./components/Navbar";
import StatisticsForm from "./components/statistics/page";
import RegistrationForm from "./components/Signup";
import LoginPage from "./components/Login";
import Teams from "./components/Team";

export default function Home() {
  return (
    <div>
      <main>
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
