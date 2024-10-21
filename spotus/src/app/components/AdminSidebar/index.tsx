"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google'; 

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const AdminSidebar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [selected, setSelected] = useState('');


  return (
    <div className={`${josefin.className} bg-[#177BBD] 2xl:p-4 2xl:w-[320px] xl:w-[350px] lg:w-[250px] lg:h-[600px] lg:mt-[-6px] xl:h-[800px] 2xl:h-[910px] xl:mt-[-5px]`}>
      <div className="flex items-center space-x-2 mb-6 md:mb-8 mt-[5px] ml-[-35px] nh:mt-[30px] nh:ml-[10px] nhm:mt-[40px] nhm:ml-[12px]">
        <Image
          src="/mphavulogo.png"
          alt="spotus Logo"
          width={250}
          height={200}
          className="2xl:ml-[50px] 2xl:mt-[50px] xl:mt-8 xl:ml-20 xl:w-[250px] lg:w-[180px] lg:ml-16 lg:mt-8 nh:ml-[30px] nh:mt-[30px] nh:w-[150px] nh:h-[150px] nhm:ml-[40px] nhm:mt-[40px] nhm:w-[175px] nhm:h-[175px]"
        />
      </div>
      <nav className="flex flex-col space-y-14 mt-[130px] ml-[70px] nh:mt-[80px] nh:ml-[40px] nh:space-y-10 nhm:mt-[100px] nhm:ml-[50px] nhm:space-y-12">

        <button
          onClick={() => setSelected('Agents')}
          className={`text-white block py-2 px-4 2xl:text-[36px] 2xl:ml-[-86px] 2xl:mt-[-28px] xl:ml-[-80px] xl:mt-[-35px] lg:text-[28px] lg:mt-[-20px] 2xl:h-28 lg:h-20 2xl:w-[320px] lg:mt-[-80px] lg:ml-[-80px] xl:h-28 xl:text-[38px] text-center ${
            selected === 'Agents' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
          }`}
        >
          Agents
        </button>
        <button
          onClick={() => setSelected('Coaches')}
          className={`text-white block py-2 px-4 2xl:text-[36px] 2xl:ml-[-86px] xl:ml-[-80px] 2xl:mt-8 lg:text-[28px] 2xl:h-28 lg:h-20 2xl:w-[320px] lg:ml-[-80px] 2xl:mt-8 xl:h-28 xl:mt-8 xl:text-[38px] text-center ${
            selected === 'Coaches' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
          }`}
        >
          Coaches
        </button>
      </nav>
    </div>
  );
};

export default AdminSidebar;
