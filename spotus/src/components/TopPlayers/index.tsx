"use client"; 
import { useState } from 'react';
import { Search } from 'react-feather'; 
import Navbar from '../Navbar';

const TopPlayers = ({ players }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredPlayers = (players || []).filter((player) =>
    `${player.firstName} ${player.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );


  return (
    <div className='ml-[100px] mt-[70px]'>
        {/* <Navbar/> */}
      {/* Search Input */}
      <div className="relative mb-4 mt-[100px] ">
        <input
          type="text"
          placeholder="Search"
          className="pl-10 pr-4 py-2 border rounded-xl border-black w-[600px] "
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>
       <h2 className="text-2xl font-bold text-blue-600 mb-4">Top Players</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {Array.isArray(filteredPlayers) && filteredPlayers.length > 0 ? (
          filteredPlayers.map((player, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <img
                  src={player.profileImage}
                  alt={`${player.firstName} ${player.lastName}`}
                  className="w-full h-full rounded-full"
                />
              </div>
              <div>
                <h3 className="font-semibold">{player.firstName} {player.lastName}</h3>
                <p className="text-gray-500">{player.position}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-4">No top players available</div>
        )}
      </div>
    </div>
  );
};

export default TopPlayers;