
"use client";
import React from 'react';
import { useState } from 'react';
import { ArrowLeft, Search, Plus } from 'lucide-react';

interface HeaderProps {
  onAddPlayer: () => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onAddPlayer, searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 ml-[50px]">
      <div className="flex items-center mb-2 md:mb-0" style={{ marginBottom: '10px' }}>
        <ArrowLeft className="h-6 w-6 text-gray-600 ml-4 md:ml-10" />
      </div>

      <div className="relative w-full mb-4 mt-[100px] lg:w-[600px] lg:mx-auto lg:ml-0 lg:mt-[100px]">
        <input
          type="text"
          placeholder="Search"
          className="w-full pl-10 pr-4 py-2 border rounded-xl border-black"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div style={{ marginBottom: '100px' }}>
        <button
          onClick={onAddPlayer}
          className="bg-[#177BBD] text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 md:mr-[200px] xl:mr-[80px] mt-[10px] hover:bg-orange-500 h-[55px] w-[200px] text-[20px]"
        >
          <Plus className="h-5 w-7 mr-2" />
          Add Player
        </button>
      </div>
    </div>
  );
};

export default Header;

