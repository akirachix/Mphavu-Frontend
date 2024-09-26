"use client"; 
import { useState } from 'react';
import { ArrowLeft, Search, Plus } from 'lucide-react';
const TeamsHeader = ({ setIsCreatingTeam }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddClick = () => {
      setIsCreatingTeam(true); 
  };

  return (
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <div className="flex items-center mb-2 md:mb-0" style={{ marginBottom: '100px' }}>
              <ArrowLeft className="h-6 w-6 text-gray-600 ml-[150px]" />
          </div>

          <div className="relative w-full md:w-1/2 mb-4 md:mb-0 mt-[100px]" style={{ marginLeft: '-550px' }}>
              <input
                  type="text"
                  placeholder="Search"
                  className="w-[500px] pl-10 pr-4 py-2 border rounded-xl border-black ml-[100px]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 ml-[100px]" />
          </div>

          <div style={{ marginBottom: '100px' }}>
              <button
                  onClick={handleAddClick}
                  className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 mr-[200px] mt-[50px]"
              >
                  <Plus className="h-5 w-5 mr-2" />
                  Create Team
              </button>
          </div>
      </div>
  );
};

export default TeamsHeader;