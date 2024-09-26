// "use client";

// import { useEffect, useState } from 'react';
// // import SideNavbar from '../components/SideNavbar';
// import SideNavbar from '../SideNav';
// // import CoachesTable from '../components/CoachesTable';
// import CoachesTable from '../CoachesTable';
// // import { useCoaches } from '../hooks/coaches';
// import { useCoaches } from '../Hooks/coaches';
// // import { Coach } from '../utils/coaches';
// import { Coach } from '../Utils/coaches';
// import Link from 'next/link'; // Add this import

// const ProductMetrics = () => {
//   const { coaches, loading, error } = useCoaches();
//   const [metrics, setMetrics] = useState({
//     total: 0,
//     active: 0,
//     inactive: 0,
//   });

//   useEffect(() => {
//     if (coaches) {
//       const total = coaches.length;
//       const active = coaches.filter(coach => coach.isActive).length;
//       setMetrics({
//         total,
//         active,
//         inactive: total - active,
//       });
//     }
//   }, [coaches]);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error}</div>;

//   return (
//     <div className="flex">
//       <SideNavbar />
//       <main className="flex-1 p-8">
//         <div className="flex justify-between mb-8">
//           <Link href="/" className="text-3xl">←</Link>
//           {/* <h1 className="text-3xl font-bold">Product Metrics</h1> */}
//         </div>
//         <div className="flex justify-between mb-8">
//           <div className="bg-yellow-500 text-white p-4 rounded">
//             <h2>Total of coaches registered</h2>
//             <p className="text-3xl font-bold">{metrics.total}</p>
//           </div>
//           <div className="bg-green-500 text-white p-4 rounded">
//             <h2>Total number of active coaches</h2>
//             <p className="text-3xl font-bold">{metrics.active}</p>
//           </div>
//           <div className="bg-blue-700 text-white p-4 rounded">
//             <h2>Number of inactive coaches</h2>
//             <p className="text-3xl font-bold">{metrics.inactive}</p>
//           </div>
//         </div>
//         <CoachesTable coaches={coaches} />
//       </main>
//     </div>
//   );
// };

// export default ProductMetrics;




"use client";

import { useEffect, useState } from 'react';
import SideNavbar from '../SideNav';
// import AgentsTable from '../AgentsTable'; // Updated to AgentsTable
import AgentsTable from '../AgentsTable ';
import { useAgents } from '../Hooks/agents'; // Updated to useAgents
// import { Agent } from '../Utils/agents'; // Updated to Agent
// import { Agent } from 'http';
import { Agent } from '../Utils/agents'; 
import Link from 'next/link';

const AgentsMetrics = () => {
  const { agents, loading, error } = useAgents(); // Updated to useAgents
  const [metrics, setMetrics] = useState({
    total: 0,
    active: 0,
    inactive: 0,
  });

  useEffect(() => {
    if (agents) {
      const total = agents.length;
      const active = agents.filter(agent => agent.isActive).length; // Updated to agent
      setMetrics({
        total,
        active,
        inactive: total - active,
      });
    }
  }, [agents]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="flex">
      <SideNavbar />
      <main className="flex-1 p-8">
        <div className="flex justify-between mb-8">
          <Link href="/" className="text-3xl">←</Link>
        </div>
        <div className="flex justify-between mb-8">
          <div className="bg-yellow-500 text-white p-4 rounded">
            <h2>Total of agents registered</h2> {/* Updated to agents */}
            <p className="text-3xl font-bold">{metrics.total}</p>
          </div>
          <div className="bg-green-500 text-white p-4 rounded">
            <h2>Total number of active agents</h2> {/* Updated to agents */}
            <p className="text-3xl font-bold">{metrics.active}</p>
          </div>
          <div className="bg-blue-700 text-white p-4 rounded">
            <h2>Number of inactive agents</h2> {/* Updated to agents */}
            <p className="text-3xl font-bold">{metrics.inactive}</p>
          </div>
        </div>
        <AgentsTable agents={agents} /> {/* Updated to AgentsTable */}
      </main>
    </div>
  );
};

export default AgentsMetrics;