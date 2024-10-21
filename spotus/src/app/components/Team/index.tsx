
'use client';

import Head from 'next/head';
import Link from 'next/link';
import { IoSearchSharp } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState, useEffect } from 'react';
import { useTeamData } from '@/app/hooks/useTeam';

export default function Team() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeamId, setSelectedTeamId] = useState(null);
  const { teams, teamData, players, loading, error } = useTeamData(selectedTeamId);

  useEffect(() => {
   
    if (teams.length > 0 && !selectedTeamId) {
      setSelectedTeamId(teams[0].id);
    }
  }, [teams, selectedTeamId]);

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

  const handleTeamChange = (e) => {
    setSelectedTeamId(e.target.value);
    setSelectedPlayers([]); 
  };

  const filteredPlayers = players.filter(player =>
    player.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    player.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (teamData && teamData.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCompare = () => {
    const queryParams = new URLSearchParams({
      player1: selectedPlayers[0],
      player2: selectedPlayers[1],
    }).toString();
    window.location.href = `/compare?${queryParams}`;
  };

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
          <Link href="/" className="text-4xl mb-[4%] ml-[4%]"><IoMdArrowRoundBack /></Link>

          <div className="flex items-center w-[35%] border border-black rounded-[30px] p-4 bg-[#E3E3E3] mt-[1%]">
            <IoSearchSharp className="text-xl mr-3" />
            <input 
              type="text" 
              placeholder="Search" 
              className="w-full outline-none text-[21px] bg-[#E3E3E3]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} 
            />
          </div>

          <div className="relative mb-2 mr-[10%] mt-[2%]">
            {teams.length === 0 ? (
              <p className="text-black text-[40px] text-center w-full">No teams found</p>
            ) : (
              <select 
                id="team-select"
                value={selectedTeamId || ''}
                onChange={handleTeamChange} 
                className="bg-white dropdown border border-black rounded-[15px] px-4 py-4 text-[20px] appearance-none w-[220px] "
              >
                <option value="">Filter by teams</option>
                {teams.map((team) => (
                  <option key={team.id} value={team.id}>
                    {team.name}
                  </option>
                ))}
              </select>
            )}
            <IoIosArrowDropdown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[35px] text-blue-800 pointer-events-none" />
          </div>
        </div>

        {selectedTeamId && (
          <>
            <h2 className="text-[40px] font-bold text-[#177BBD] text-center mb-4">{teamData?.name || 'Team'}</h2>
            <table className="w-[90%] mx-auto">
              <thead>
                <tr className="text-black text-[24px]">
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
                      <td className="px-4 py-2 flex items-center">
                        <img
                          src={`http://localhost:8000${player.image || "/path/to/default/profile.jpg"}`}
                          alt={`${player.firstName} ${player.lastName}`}
                          className="2xl:w-16 2xl:h-16 lg:w-14 lg:h-14 rounded-full mr-2 shadow"
                        />
                      </td>
                      
                      <td className="p-2 text-center text-[22px]">{player.firstName} {player.lastName}</td>
                      <td className="p-2 text-center text-[22px]">{player.position || 'N/A'}</td>
                      <td className="p-2 text-center text-[22px]">{teamData?.name || 'N/A'}</td>
                      <td className="p-2 text-center">
                        <Link href="/components/cardStatistics">
                          <button className="bg-[#46BC14] text-white text-[22px] px-3 py-1 rounded-[10px] 2xl:w-[50%] h-[5%]">View</button>
                        </Link>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5}><p className='text-black 2xl:text-[60px] lg:text-[45px] py-[16%] ml-[25%] text-center w-[60%] font-josefins'>No players found</p></td>
                  </tr>
                )}
              </tbody>
            </table>
          </>
        )}
      </main>
    </div>
  );
}