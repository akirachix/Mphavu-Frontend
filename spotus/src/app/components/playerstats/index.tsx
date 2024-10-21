'use client'; // Add this line to make it a client component

import Image from 'next/image';
import { useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { useRouter } from 'next/navigation'; // Ensure you're importing from 'next/navigation' in the App Router
import { IoIosArrowDropdown } from "react-icons/io";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
export default function PlayerProfile() {
  const [selectedMonth, setSelectedMonth] = useState('September');
  const router = useRouter(); // Initialize useRouter

  const players = [
    {
      id: 1,
      firstName: 'Lebron',
      lastName: 'James',
      age: 14,
      team: 'Ligi Ndogo',
      position: 'Striker',
      image: '/images/image (11).png',
      sessions: [
        { date: '12/8/24', name: 'Session 1' },
        { date: '12/8/24', name: 'Session 2' },
        { date: '12/8/24', name: 'Session 3' },
      ],
    },
  ];

  const player = players[0];

  // Function to handle navigation
  const navigateToAddStatistics = () => {
    router.push('/components/statisticsform'); // Change this to your desired route
  };

  return (
    
    <div className="pl-[20%] pt-10 w-[80%]">
      <Link href="/components/players/">
    <ArrowLeft className="w-10 h-10 font-bold text-black-600 mb-4" />
    </Link>
      <div className="flex justify-between p-4 bg-gray-100 rounded-[24px] shadow-md border border-black ">
        <div className="flex items-center ml-14 mt-5 mb-5">
          <Image
            src={player.image}
            alt={`${player.firstName} ${player.lastName}`}
            width={280}
            height={100}
          />
          <div className="ml-20 space-y-12 mt-0">
            <h2 className="text-3xl">{`Name: ${player.firstName} ${player.lastName}`}</h2>
            <p className="text-3xl">{`Age: ${player.age}`}</p>
            <p className="text-3xl">{`Team: ${player.team}`}</p>
            <p className="text-3xl">{`Position: ${player.position}`}</p>
          </div>
        </div>
        <div className="flex flex-col mr-20 mt-14">
          <button className="flex items-center text-black space-x-2">
            <FaEdit className="text-4xl" />
            <span className="text-3xl font-bold">Edit</span>
          </button>
          <button
            className="text-black text-3xl mt-20"
            onClick={navigateToAddStatistics} 
          >
            Add statistics
          </button>
        </div>
      </div>
    </div>
  );
}
