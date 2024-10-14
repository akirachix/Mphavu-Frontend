import Image from "next/image";
import RegistrationForm from "./components/Signup";
import LandingPage from "./components/Admin";
import LoginPage from "./components/Login";
import CoachesPage from "./components/AddCoachAndAgents";
import Dashboard from "./components/Dashboard";
import DashboardLandingPage from "./components/DashboardLanding";
import DashboardLoginPage from "./components/DashboardLogin";

export default function Home() {
  return (
    <div>
      <main>
      <LandingPage/>
        {/* <RegistrationForm/> */}
        {/* <LoginPage/> */}
        {/* <CoachesPage/> */}
        {/* <DashboardLandingPage/> */}
        {/* <DashboardLoginPage/> */}
      {/* <Dashboard/> */}
      </main>
    
    </div>
  );
}
