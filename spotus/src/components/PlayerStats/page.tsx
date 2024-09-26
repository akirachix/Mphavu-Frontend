"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa'; 
import { Session } from '@/utils/playersStats'; 

const PlayerStats = () => {
  const [selectedMonth, setSelectedMonth] = useState('September');
  const [showEditOptions, setShowEditOptions] = useState(false); 
  const [sessions, setSessions] = useState<Session[]>([]); 
  const [loading, setLoading] = useState(true); 

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const handleEditClick = () => {
    setShowEditOptions(!showEditOptions);
  };

  useEffect(() => {
    const fetchSessions = async () => {
      const response = await fetch('/api/PlayersStats/posts');
      if (response.ok) {
        const data: Session[] = await response.json();
        setSessions(data);
      }
      setLoading(false); 
    };

    fetchSessions();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center space-x-4">
        <button className="text-6xl font-bold">&larr;</button>
      </div>

      <div className="mt-6 bg-white shadow-md p-7 rounded-lg flex border border-black">
        <div className="w-1/3">
          <Image
            src="/images/image (11).png"
            alt="Player"
            width={150}
            height={150}
            className="rounded-lg"
          />
        </div>

        <div className="w-2/3 pl-4">
          <div className="text-xl font-semibold">Name: Lebron James</div>
          <div className="text-md">Age: 14</div>
          <div className="text-md">Team: Ligi Ndogo</div>
          <div className="text-md">Position: Striker</div>
        </div>
        <div className="space-x-1">
          <div>
            <FaEdit size={24} color="black" className="cursor-pointer" onClick={handleEditClick} />
            {showEditOptions && (
              <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 shadow-lg rounded-lg z-10">
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Edit</button>
                <button className="w-full text-left px-4 py-2 hover:bg-gray-100">Delete</button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-start items-center">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="border rounded-md p-1"
          >
            {months.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="py-2 text-lg">Date</th>
                  <th className="py-2 text-lg">Sessions</th>
                </tr>
              </thead>
              <tbody>
                {sessions.map((session, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2">{session.date}</td>
                    <td className="py-2">{session.session}</td>
                    <td className="py-2">
                      <button className="bg-[#46BC14] text-white px-4 py-2 rounded-md">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
