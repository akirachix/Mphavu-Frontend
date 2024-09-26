// import { useState, useEffect } from 'react';
// import Navbar from '../components/Navbar';
// import Header from '../components/Header';
// import PlayerTable from '../components/PlayerTable';

// export default function Home() {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     // Fetch players from your API
//     // Example: fetchPlayers().then(data => setPlayers(data));
//   }, []);

//   const handleAddPlayer = () => {
//     // Implement add player functionality
//     console.log('Add player clicked');
//     // Example: openAddPlayerModal() or navigate to add player page
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <main className="container mx-auto mt-8">
//         <Header onAddPlayer={handleAddPlayer} />
//         <h1 className="text-2xl font-bold my-4">Kikwetu</h1>
//         <PlayerTable players={players} />
//       </main>
//     </div>
//   );
// }
