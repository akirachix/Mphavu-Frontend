

"use client";
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
// import Header from '../Header';
import Header from '../Header';
import PlayerCreationForm from '../PlayerCreationForm';

const PlayersTable = ({ teamId, teamName, onBack, players }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddPlayer = () => {
    setShowForm(true);
  };

  const handleBackToPlayers = () => {
    setShowForm(false);
  };

  if (showForm) {
    return <PlayerCreationForm onBack={handleBackToPlayers} />;
  }

  return (
    <div className="overflow-x-auto">
      <Navbar />
      <Header onAddPlayer={handleAddPlayer} />
      <div className="flex justify-center">
        <div className="w-full max-w-8xl mx-auto px-5">
          <div className="text-center mb-4">
            <h1 className="text-3xl text-blue-500 font-bold"> {teamName}</h1>
            <hr className='text-blue-500'></hr>
          </div>
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-gray-100 text-3xl">
                <th className="py-3 px-4 text-left">Profile</th>
                <th className="py-3 px-4 text-left">First Name</th>
                <th className="py-3 px-4 text-left">Last Name</th>
                <th className="py-3 px-4 text-left">Position</th>
              </tr>
            </thead>
            <tbody className="text-2xl">
              {players.length > 0 ? (
                players.map((player, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-3 px-4">
                      <img src={player.profilePicture} alt={`${player.firstName} ${player.lastName}`} className="w-8 h-8 rounded-full" />
                    </td>
                    <td className="py-3 px-4">{player.firstName}</td>
                    <td className="py-3 px-4">{player.lastName}</td>
                    <td className="py-3 px-4">{player.position}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-3 px-4 text-center">No players available</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PlayersTable;



// "use client";
// import { useEffect, useState } from 'react';
// import Navbar from '../Navbar';
// import Header from '../Header';
// import PlayerCreationForm from '../PlayerCreationForm';

// const PlayersTable = ({ teamId, teamName, onBack, players }) => {
//   const [showForm, setShowForm] = useState(false);

//   const handleAddPlayer = () => {
//     setShowForm(true);
//   };

//   const handleBackToPlayers = () => {
//     setShowForm(false);
//   };

//   if (showForm) {
//     return <PlayerCreationForm onBack={handleBackToPlayers} teamId={teamId} />;
//   }

//   return (
//     <div className="overflow-x-auto">
//       <Navbar />
//       <Header onAddPlayer={handleAddPlayer} />
//       <div className="flex justify-center">
//         <div className="w-full max-w-8xl mx-auto px-5">
//           <div className="text-center mb-4">
//             <h1 className="text-3xl text-blue-500">Team: {teamName}</h1>
//           </div>
//           <table className="min-w-full bg-white">
//             <thead>
//               <tr className="bg-gray-100 text-3xl">
//                 <th className="py-3 px-4 text-left">Profile</th>
//                 <th className="py-3 px-4 text-left">First Name</th>
//                 <th className="py-3 px-4 text-left">Last Name</th>
//                 <th className="py-3 px-4 text-left">Position</th>
//               </tr>
//             </thead>
//             <tbody className="text-2xl">
//               {players.length > 0 ? (
//                 players.map((player, index) => (
//                   <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
//                     <td className="py-3 px-4">
//                       <img src={player.profilePicture} alt={`${player.firstName} ${player.lastName}`} className="w-8 h-8 rounded-full" />
//                     </td>
//                     <td className="py-3 px-4">{player.firstName}</td>
//                     <td className="py-3 px-4">{player.lastName}</td>
//                     <td className="py-3 px-4">{player.position}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={4} className="py-3 px-4 text-center">No players available</td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PlayersTable;
