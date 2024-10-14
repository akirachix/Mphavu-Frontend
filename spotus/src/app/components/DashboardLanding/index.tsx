import React from 'react';
import Image from 'next/image';

const DashboardLandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <Image
          src="/images/logo.png"
          alt="SpotUs Logo"
          width={1091}
          height={652}
          className="mb-4"
        />
        <h2 className="text-[64px] mb-6">Sports Management System</h2>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-[50px] h-[54px] w-[302px] text-[26px] mt-[24px]">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default DashboardLandingPage;