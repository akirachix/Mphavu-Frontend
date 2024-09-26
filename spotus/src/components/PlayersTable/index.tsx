
"use client"
import { useState } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import PlayerCreationForm from '../PlayerCreationForm';

const PlayerTable = ({ players }) => {
  const [showForm, setShowForm] = useState(false);

  const handleAddPlayer = () => {
      setShowForm(true);
  };

  const handleBackToPlayers = () => {
      setShowForm(false); 
  };

  return (
      <div className="overflow-x-auto">
          {showForm ? (
              <PlayerCreationForm onBack={handleBackToPlayers} /> // Pass back function
          ) : (
              <>
                  <Navbar />
                  <Header onAddPlayer={handleAddPlayer} />
                  <table className="min-w-full bg-white">
                      <thead>
                          <tr className="bg-gray-100">
                              <th className="py-2 px-4 text-left">Profile</th>
                              <th className="py-2 px-4 text-left">First Name</th>
                              <th className="py-2 px-4 text-left">Last Name</th>
                              <th className="py-2 px-4 text-left">Position</th>
                              <th className="py-2 px-4 text-left">Player Details</th>
                          </tr>
                      </thead>
                      <tbody>
                          {Array.isArray(players) && players.length > 0 ? (
                              players.map((player, index) => (
                                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                      <td className="py-2 px-4">
                                          <img src={player.profileImage} alt={`${player.firstName} ${player.lastName}`} className="w-8 h-8 rounded-full" />
                                      </td>
                                      <td className="py-2 px-4">{player.firstName}</td>
                                      <td className="py-2 px-4">{player.lastName}</td>
                                      <td className="py-2 px-4">{player.position}</td>
                                      <td className="py-2 px-4">
                                          <button className="bg-green-500 text-white px-3 py-1 rounded">View</button>
                                      </td>
                                  </tr>
                              ))
                          ) : (
                              <tr>
                                  <td colSpan={5} className="py-2 px-4 text-center">No players available</td>
                              </tr>
                          )}
                      </tbody>
                  </table>
              </>
          )}
      </div>
  );
};

export default PlayerTable;