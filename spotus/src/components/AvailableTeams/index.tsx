// import Image from 'next/image';

import Navbar from "../Navbar";
import TopPlayers from "../TopPlayers";

// const AvailableTeams = ({ teams }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold text-blue-600 mb-4">Available Teams</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {teams.map((team, index) => (
//           <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
//             <div className="relative w-16 h-16">
//               <Image
//                 src={team.logo}
//                 alt={team.name}
//                 layout="fill"
//                 objectFit="contain"
//               />
//             </div>
//             <div>
//               <h3 className="font-bold">{team.name}</h3>
//               <p className="text-sm text-gray-600">{team.players} Players available</p>
//               <p className="text-sm text-gray-600">{team.location}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AvailableTeams;

// import Navbar from "../Navbar";
import Header from "../Header";
// import TopPlayers from "../TopPlayers";

const AvailableTeams = ({ teams }) => {
    return (
      <div className="ml-[100px] mt-[50px]">
        <Navbar/>
        {/* <Header/> */}
        <TopPlayers/>
        <h2 className="text-2xl font-bold text-blue-600 mb-4 ml-[100px] mt-[200px]">Available Teams</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.isArray(teams) && teams.length > 0 ? (
            teams.map((team, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
                <div className="relative w-16 h-16">
                  <img
                    src={team.logo} // Assuming team has a logo property
                    alt={team.name}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{team.name}</h3>
                  <p className="text-gray-500">{team.position}</p> {/* Adjust based on your data structure */}
                </div>
              </div>
            ))
          ) : (
            // Fallback message when there are no teams
            <div className="col-span-full text-center py-4">No available teams</div>
          )}
        </div>
      </div>
    );
  };
  
  export default AvailableTeams;
  