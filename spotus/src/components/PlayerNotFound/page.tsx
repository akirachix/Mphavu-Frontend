import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PlayerNotFound() {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const handleSearch = async () => {
    setErrorMessage(''); 
    try {
      const response = await fetch(`/api/PlayerNotFound/posts?name=${searchTerm}`);
      if (!response.ok) {
        throw new Error('Player not found');
      }
      const playerData = await response.json();
      console.log('Player Data:', playerData);
     
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="p-6 bg-white shadow-md">
        <div className="mb-4 flex justify-start">
          <button onClick={() => router.back()} className="text-black text-6xl">
            &#8592;
          </button>
        </div>

        <div className="flex flex-row justify-between items-start">
          <div className="relative w-full max-w-md mb-4 ml-10">
            <input
              type="text"
              placeholder="Search"
              className="w-full text-3xl px-5 py-2 border border-gray-500 rounded-full focus:ring focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch} className="absolute top-3.5 right-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1111.196 3.58l4.675 4.675a1 1 0 01-1.414 1.414l-4.675-4.675A6 6 0 012 8z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <button className="text-3xl bg-[#177BBD] hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center">
            + Add Player
          </button>
        </div>
      </header>

      <div className="flex justify-center items-center mt-24">
        <h2 className="text-5xl font-bold text-black-600">{errorMessage || 'Player Not Found'}</h2>
      </div>
    </div>
  );
}
