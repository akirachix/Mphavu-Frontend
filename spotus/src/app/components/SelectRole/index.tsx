
"use client"; 

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const SelectRole = () => {
  const router = useRouter();
  const handleCoachClick = () => {
    router.push('/coach'); 
  };

  const handleAgentClick = () => {
    router.push('/agent'); 
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 xl:ml-[4%] lg:ml-[3%]">
      <div className="flex flex-col md:flex-row items-center">
        
        <div className="flex-1 p-4 2xl:mr-8 xl:mr-8">
          <img src='/images/welcome.png' className='2xl:w-[740px] 2xl:h-[780px] xl:w-[740px] xl:h-[650px]  lg:w-[650px] lg:h-[520px] '></img>
         
        </div>

        <div className="flex-1 flex flex-col items-center justify-center p-8">
          <h1 className="2xl:text-5xl lg:text-[45px] xl:text-[48px] font-bold text-[#177BBD] 2xl:mt-[-30%] xl:mt-[-30%] lg:mt-[-15%] ">Welcome to Spot Us</h1>
          <p className="2xl:text-[38px] xl:text-[38px] lg:text-[30px] font-bold text-black 2xl:mt-[20%] lg:mt-[15%]">Are you a coach or an agent?</p>

          <div className="flex flex-col 2xl:space-y-16 lg:space-y-16 2xl:mt-[-5%] xl:mt-[-5%] lg:mt-[-14%] lg:ml-[-16%]">
  <button 
    className="bg-[#76CD51] text-white text-2xl font-semibold px-6 py-3 rounded-[15px] 
               hover:opacity-90 w-[170%] mt-[100%] shadow-lg transition-transform 
               transform hover:scale-105 hover:shadow-2xl" 
    onClick={handleCoachClick}
  >
    Coach
  </button>
  <button 
    className="bg-[#E99700] text-white text-2xl font-semibold px-6 py-3 rounded-[15px] 
               hover:opacity-90 w-[170%] mb-[40%] shadow-lg transition-transform 
               transform hover:scale-105 hover:shadow-2xl" 
    onClick={handleAgentClick}
  >
    Agent
  </button>
</div>
        </div>
      </div>
    </div>
  );
};

export default SelectRole ;
