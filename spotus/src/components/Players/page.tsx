"use client"; 

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Players() {
  const [searchTerm, setSearchTerm] = useState('');
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState({ name: '', position: '', team: '', profile: '' });
  const [showModal, setShowModal] = useState(false); 
  const [profileImage, setProfileImage] = useState(null); 

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('/api/Players/posts');
      const data = await response.json();
      setPlayers(data); 
    };

    fetchPlayers();
  }, []);

  const handleAddPlayer = async () => {
    if (newPlayer.name && newPlayer.position && newPlayer.team && profileImage) {
      const newPlayerData = { ...newPlayer, id: players.length + 1, profile: profileImage };

      await fetch('/api/Players/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPlayerData),
      });

      setPlayers([...players, newPlayerData]); 
      setNewPlayer({ name: '', position: '', team: '', profile: '' });
      setProfileImage(null); 
      setShowModal(false); 
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="px-6 py-4">
        <div className="flex items-center text-3xl justify-between mb-4">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-5 py-2 border border-gray-500 rounded-full focus:ring focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <span className="absolute top-3.5 right-4 text-black-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.196 3.58l4.675 4.675a1 1 0 01-1.414 1.414l-4.675-4.675A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          <button 
            onClick={() => setShowModal(true)} 
            className="text-3xl bg-[#E99700] hover:bg-yellow-600 text-white px-4 py-2 rounded-md ml-4 flex items-center"
          >
            + Add Player
          </button>
        </div>

        <h2 className="text-4xl font-bold text-blue-600 text-center mb-4">Kikwetu</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto text-2xl border-collapse">
            <thead>
              <tr className="text-left">
                <th className="px-4 py-2 border-b-4 border-blue-600">Profile</th>
                <th className="px-4 py-2 border-b-4 border-blue-600">Name</th>
                <th className="px-4 py-2 border-b-4 border-blue-600">Position</th>
                <th className="px-4 py-2 border-b-4 border-blue-600">Team</th>
                <th className="px-4 py-2 border-b-4 border-blue-600"></th>
              </tr>
            </thead>
            <tbody>
              {players
                .filter((player) =>
                  player.name.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((player) => (
                  <tr key={player.id} className="odd:bg-gray-200 even:bg-gray-50">
                    <td className="px-4 py-2 border-b">
                      <Image
                        src={player.profile} 
                        alt="Player profile"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </td>
                    <td className="px-4 py-2 border-b">{player.name}</td>
                    <td className="px-4 py-2 border-b">{player.position}</td>
                    <td className="px-4 py-2 border-b">{player.team}</td>
                    <td className="px-4 py-2 border-b">
                      <button className="bg-[#46BC14] hover:bg-green-600 text-white px-4 py-2 rounded-md" style={{ width: '120px' }}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-96">
            <h3 className="text-xl font-bold mb-4">Add Player</h3>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="border border-gray-300 rounded mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Name"
              value={newPlayer.name}
              onChange={(e) => setNewPlayer({ ...newPlayer, name: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Position"
              value={newPlayer.position}
              onChange={(e) => setNewPlayer({ ...newPlayer, position: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
            />
            <input
              type="text"
              placeholder="Team"
              value={newPlayer.team}
              onChange={(e) => setNewPlayer({ ...newPlayer, team: e.target.value })}
              className="border border-gray-300 rounded px-4 py-2 mb-2 w-full"
            />
            <div className="flex justify-end">
              <button
                onClick={handleAddPlayer}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2"
              >
                Add
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
