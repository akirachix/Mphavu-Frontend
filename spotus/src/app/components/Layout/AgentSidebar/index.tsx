
"use client"; 

import React, { useState } from 'react';
import { IoHomeSharp } from "react-icons/io5";
import { TbPlayFootball } from "react-icons/tb";
import { FaScaleBalanced } from "react-icons/fa6";
import Link from 'next/link';

const AgentSidebar = () => {
  const [activeLink, setActiveLink] = useState<string>('/home');

  return (
    <div className="2xl:h-screen 2xl:w-[19%] bg-[#177BBD] p-5 flex flex-col items-center text-white font-[josefinSans] xl:w-[21.5%] xl:h-screen lg:w-[25%] lg:h-screen">
      <div className="text-center text-2xl font-bold mb-10">
        <img src="images/logo.png" alt="logo" className='2xl:ml-[26%] w-[70%] xl:ml-[15%] lg:ml-[15%]' />
      </div>
      <nav className="w-full">
        <ul className="list-none p-0">
          <li className="mb-5 w-full">
            <Link href="/home" 
              className={`flex items-center p-2 h-[100px] 2xl:ml-[-7%] 2xl:w-[113%] xl:w-[117%] xl:ml-[-9%] lg:w-[119%] lg:ml-[-10%] 2xl:mt-[25%] xl:mt-[25%] lg:mt-[10%] ${activeLink === '/home' ? 'bg-[#033354]' : 'hover:bg-[#033354]'} no-rounded`}
              onClick={() => setActiveLink('/home')}>
              <IoHomeSharp className="text-[40px] 2xl:ml-[30%] xl:ml-[18%] lg:ml-[14%]" />
              <p className='2xl:text-[30px] ml-[10%] lg:text-[26px]'>Home</p>
            </Link>
          </li>

          <li className="mb-5 w-full">
            <Link href="/teams" 
              className={`flex items-center p-2 h-[100px] 2xl:ml-[-7%] 2xl:w-[113%] xl:w-[117%] xl:ml-[-9%] lg:w-[119%] lg:ml-[-10%] 2xl:mt-[50%] 2xl:mt-[50%] lg:mt-[25%] ${activeLink === '/teams' ? 'bg-[#033354]' : 'hover:bg-[#033354]'} no-rounded`}
              onClick={() => setActiveLink('/teams')}>
              <TbPlayFootball className="2xl:text-[40px] 2xl:ml-[31%] xl:text-[40px] xl:ml-[18%] lg:ml-[18%] lg:text-[38px]"/> 
              <p className='2xl:text-[30px] ml-[10%] lg:text-[26px]'>Teams</p>
            </Link>
          </li>

          <li className="w-full">
            <Link href="/scouting-comparison" 
              className={`flex items-center 2xl:p-2 h-[100px] 2xl:ml-[-8%] 2xl:w-[114%] xl:w-[117%] xl:ml-[-9%] lg:w-[119%] lg:ml-[-10%] 2xl:mt-[50%] xl:mt-[50%] lg:mt-[25%]  ${activeLink === '/scouting-comparison' ? 'bg-[#033354]' : 'hover:bg-[#033354]'}  no-rounded`}
              onClick={() => setActiveLink('/scouting-comparison')}>
              <FaScaleBalanced className="2xl:text-[40px] 2xl:ml-[31%] xl:text-[40px] xl:ml-[18%] lg:ml-[18%] lg:text-[38px]" /> 
              <p className='2xl:text-[30px] ml-[10%] w-[2%] lg:text-[26px]'>Scouting Comparison</p>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AgentSidebar;