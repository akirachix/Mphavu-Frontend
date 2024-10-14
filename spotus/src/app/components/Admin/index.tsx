"use client"; 

import React from 'react';
import { useRouter } from 'next/navigation';

const LandingPage = () => {
  const router = useRouter();

  const handleExploreClick = () => {
    router.push('/signup'); 
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center relative">
    
      {/* Header with the logo */}
      <header className="absolute top-0 left-0 p-5 z-20">
        <img src="/image (5).png" alt="Spot Us Logo" className="h-[96px] w-[298px] shadow-lg" />
      </header>

      {/* Main content section */}
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
