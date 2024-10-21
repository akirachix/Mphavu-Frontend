
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
  );
}
