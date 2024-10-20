"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation';
import { IoHomeSharp } from "react-icons/io5";
import { TbPlayFootball } from "react-icons/tb";
import { FaScaleBalanced } from "react-icons/fa6";
import Link from 'next/link';

const LandingPage = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/signup'); 
  };

  function setActiveLink(arg0: string): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
    
      <header className="absolute top-0 left-0 p-5 z-20">
        <img src="/image (5).png" alt="Spot Us Logo" className="h-[96px] w-[298px] shadow-lg" />
      </header>

      <main className="text-center z-10">
        <h2 className="text-[96px] font-bold mt-[150px]">Train.Analyze.Develop</h2>
        <button
          className="bg-[#46BC14] hover:bg-[#E99700] text-white py-2 px-4 rounded-[40px] h-[65px] w-[263px] text-[32px] transition-colors duration-300 ease-in-out mt-48"
          onClick={handleExploreClick}
        >
          Explore
        </button>
      </main>

      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/soccer.jpg"
          alt="Soccer Goal"
          className="w-[2500px] h-full" 
        />
      </div>
 
    </div>
  );
};

export default LandingPage;
