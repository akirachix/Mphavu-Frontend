"use client";
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { useTeamData } from '@/app/hooks/usePlayers';

const Players = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  // Destructure the data from the useTeamData hook
  const { teams, teamData, players, loading, error } = useTeamData(selectedTeamId);

  // Handle loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // Filter players based on the search term
  const filteredPlayers = players.filter((player) =>
    `${player.firstName} ${player.lastName}`.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle player addition success message
  const handleAddPlayer = () => {
    setSuccessMessage('Player added successfully!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000); 
  };

  return (
    <div className="min-h-screen bg-white font-[josefinSans]">
      <div className="px-4 py-4 md:px-6 md:py-6">
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
            {successMessage}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="team-select" className="block text-3xl mb-2"></label>
          <select
            id="team-select"
            value={selectedTeamId || ''}
            onChange={(e) => setSelectedTeamId(e.target.value)} // Update selected team ID here
            className="w-48 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:outline-none text-lg appearance-none"
          >
            <option value="" className="text-gray-500">Select a Team</option>
            {teams.map((team) => (
              <option key={team.id} value={team.id}>
                {team.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row items-center text-3xl justify-between mb-4">
          <div className="relative w-full md:max-w-5xl">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 py-2 border border-gray-500 rounded-full focus:ring focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute top-3.5 right-4 text-black-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.196 3.58l4.675 4.675a1 1 0 01-1.414 1.414l-4.675-4.675A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
          </div>

          <Link href="/components/addplayer">
            <button
              className="text-3xl bg-[#E99700] hover:bg-blue-600 text-white px-4 py-2 rounded-md mt-4 md:mt-0 md:ml-4 flex items-center"
              onClick={handleAddPlayer}
            >
              <span className="bg-white text-[#E99700] hover:text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">+</span>
              Add Player
            </button>
          </Link> 
        </div>

        {selectedTeamId && (
          <>
            <h2 className="text-4xl font-bold text-blue-600 text-center mb-4 mt-8">{teamData?.name || 'Team'}</h2>

            <div className="overflow-x-auto">
              <table className="min-w-full table-auto table-fixed text-2xl border-collapse">
                <thead>
                  <tr>
                    <th className="w-[15%] px-2 py-2 md:px-4 md:py-2 border-b-4 border-blue-600 text-left">Profile</th>
                    <th className="w-[25%] px-2 py-2 md:px-4 md:py-2 border-b-4 border-blue-600 text-left">Name</th>
                    <th className="w-[20%] px-2 py-2 md:px-4 md:py-2 border-b-4 border-blue-600 text-left">Position</th>
                    <th className="w-[20%] px-2 py-2 md:px-4 md:py-2 border-b-4 border-blue-600 text-left">Team</th>
                    <th className="w-[20%] px-2 py-2 md:px-4 md:py-2 border-b-4 border-blue-600 text-left">Player's details</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPlayers.length > 0 ? (
                    filteredPlayers.map((player) => (
                      <tr key={player.id} className="odd:bg-gray-200 even:bg-gray-50">
                        <td className="px-2 py-2 md:px-4 md:py-2 border-b text-left">
                          
                          <Image
                            src={player.image || '/placeholder-image.jpg'}
                            alt="Player profile"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                        </td>
                        <td className="px-2 py-2 md:px-4 md:py-2 border-b text-left">
                          {player.lastName}
                        </td>
                        <td className="px-2 py-2 md:px-4 md:py-2 border-b text-left">
                          {player.position || 'N/A'}
                        </td>
                        <td className="px-2 py-2 md:px-4 md:py-2 border-b text-left">
                          {teamData?.name || 'N/A'}
                        </td>
                        <td className="px-2 py-2 md:px-4 md:py-2 border-b text-left">
  <Link href='/components/playerstats/'>
  <button className="bg-[#46BC14] text-white px-4 py-2 rounded-md hover:bg-blue-700">
    View
  </button>
</Link>

                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="px-4 py-64 text-center text-black text-7xl">
                        Player not found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Players;
