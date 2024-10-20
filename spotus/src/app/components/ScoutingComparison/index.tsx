
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState, useEffect } from 'react';
import { useTeamData } from '@/app/hooks/useTeam';

export default function ScoutingComparison() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const { teams, teamData, players, loading, error } = useTeamData(selectedTeamId);

  const togglePlayerSelection = (playerId) => {
    setSelectedPlayers((prev) => {
      if (prev.includes(playerId)) {
        return prev.filter((id) => id !== playerId);
      } else if (prev.length < 2) {
        return [...prev, playerId];
      }
      return prev; 
    });
  };

  const filteredPlayers = players.filter(player =>
    (player.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.lastName.toLowerCase().includes(searchQuery.toLowerCase())) ||
    player.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (teamData?.name?.toLowerCase().includes(searchQuery.toLowerCase()) && selectedTeamId)
  );

  const handleCompare = () => {
    const queryParams = new URLSearchParams({
      player1: selectedPlayers[0],
      player2: selectedPlayers[1],
    }).toString();
    window.location.href = `/compare?${queryParams}`;
  };

  useEffect(() => {
    setSelectedPlayers([]);
  }, [selectedTeamId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Teams</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center w-[40%] border border-black rounded-[30px] p-4 bg-[#E3E3E3] ml-[10%]">
            <IoSearchSharp className="text-xl mr-3" />
            <input 
              type="text" 
              placeholder="Search by name, position, or team" 
              className="w-full outline-none text-[21px] bg-[#E3E3E3]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>

          <div className="relative mb-2 mr-[10%] ">
            <select 
              id="team-select"
              value={selectedTeamId || ''}
              onChange={(e) => setSelectedTeamId(e.target.value)} 
              className="bg-white border border-black rounded-[15px] px-4 py-4 text-[20px] appearance-none w-[220px] "
            >
              <option value="">Filter by teams</option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
            <IoIosArrowDropdown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[35px] text-blue-800 pointer-events-none" />
          </div>
        </div>

        <p className="ml-[10%] 2xl:text-[32px] lg:text-[30px] font-bold m-[2%] font-josefin">Select 2 players to compare their performance</p>

        {selectedTeamId && (
          <>
            <h2 className="2xl:text-[40px] lg:text-[36px]  font-bold text-[#177BBD] text-center 2xl:mb-4 lg:mb-4">{teamData?.name || 'Team'}</h2>
            <table className="w-[85%] mx-auto">
              <thead>
                <tr className="text-black text-[24px]">
                  <th className="p-2 text-center border-b-8 border-blue-600">Select</th>
                  <th className="p-2 text-center border-b-8 border-blue-600">Profile</th>
                  <th className="p-2 text-center border-b-8 border-blue-600">Name</th>
                  <th className="p-2 text-center border-b-8 border-blue-600">Position</th>
                  <th className="p-2 text-center border-b-8 border-blue-600">Team</th>
                  <th className="p-2 text-center border-b-8 border-blue-600"></th>
                </tr>
              </thead>
              <tbody>
                {filteredPlayers.length > 0 ? (
                  filteredPlayers.map((player, index) => (
                    <tr key={player.id} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
                      <td className="p-2 text-center">
                        <input
                          type="checkbox"
                          checked={selectedPlayers.includes(player.id)}
                          onChange={() => togglePlayerSelection(player.id)}
                          className="w-6 h-6 mx-auto mr-[20%]"
                        />
                      </td>
                      <td className="p-2 text-center">
                        <img src={player.image || '/profile.png'} alt="Profile" className="rounded-full w-12 h-12 inline-block" />
                      </td>
                      <td className="p-2 text-center 2xl:text-[22px] xl:text-[22px] lg:text-[18px]">{player.firstName} {player.lastName}</td>
                      <td className="p-2 text-center 2xl:text-[22px] xl:text-[22px] lg:text-[18px]">{player.position || 'N/A'}</td>
                      <td className="p-2 text-center 2xl:text-[22px] xl:text-[22px] lg:text-[18px]">{teamData?.name || 'N/A'}</td>
                      <td className="p-2 text-center">
                        <Link href="/components/cardStatistics">
                          <button className="bg-[#46BC14] text-white text-[22px] px-3 py-1 rounded-[10px] 2xl:w-[50%] xl:w-[75%] h-[5%]">View</button>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center text-black text-xl">No players found.</td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="flex justify-center mt-6">
              <Link href="/components/statistics">
                <button 
                  className={`text-white px-6 py-2 rounded-[15px] w-[100%] text-[20px] ${selectedPlayers.length === 2 ? 'bg-[#E99700]' : 'bg-[#007BFF]'}`}
                  disabled={selectedPlayers.length !== 2}
                >
                  Compare
                </button>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  );
}
