
'use client';
import Head from 'next/head';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useStatistics } from '../../hooks/useStatistics'; 
import Link from 'next/link';

export default function Statistics() {
  const playerId1 = 1; 
  const { statistics: stats1 } = useStatistics(playerId1);


  const performanceData1 = stats1 ? stats1[0] : {};

  const performanceData1 = stats1 || {};


  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Player Statistics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <Link href="/comp" className='h-[1%] w-[83px] ml-[10%] mb-[2%] text-[40px]'>
            <div><IoMdArrowRoundBack /></div>
          </Link>
        </div>

        <div className="flex justify-center 2xl:mt-[-3%] xl:mt-[-7%] lg:mt-[-7%]">

          <div className="bg-white rounded-[50px] shadow-md p-8 2xl:w-[700px] 2xl:h-[820px] xl:w-[600px] xl:h-[700px] lg:w-[550px] lg:h-[600px] border-[1px] border-black">
            <div className="flex items-center mb-[2%]">
              <img src="/images/playerProfile.jpg" alt={performanceData1.name || "Player 1"} className='w-[160px] ml-[5%] rounded-full' />
              <div className="ml-[12%]">
                <h2 className="2xl:text-[28px] xl:text-[24px] lg:text-[22px] font-bold text-[#177BBD]">
                  Name: <span className="text-black font-normal">{performanceData1.name || "Calvin Kamau"}</span>
                </h2>
                <p className='text-[24px] xl:text-[24px] lg:text-[22px] font-bold text-[#177BBD]'>
                  Position: <span className="text-black font-normal">{performanceData1.position || "Striker"}</span>
                </p>
                <p className='text-[24px] xl:text-[24px] lg:text-[22px] font-bold text-[#177BBD]'>
                  Team: <span className="text-black font-normal">{performanceData1.team || "Kikwetu"}</span>

          <div className="bg-white rounded-[50px] shadow-md p-8 2xl:w-[700px] 2xl:h-[820px] xl:w-[600px] xl:h-[700px] lg:w-[550px] lg:h-[600px]  border-[1px] border-black">
            <div className="flex items-center mb-[2%]">
              <img src="/images/profile.png" alt={performanceData1.name || "Player 1"} className='w-[160px] ml-[5%]' />
              <div className="ml-[12%]">
                <h2 className="2xl:text-[28px] xl:text-[24px] lg:text-[22px]  font-bold text-[#177BBD]">Name: <span className="text-black font-normal">{performanceData1.name || "Unknown Player"}</span></h2>
                <p className='text-[24px] xl:text-[24px]  lg:text-[22px]  font-bold text-[#177BBD]'>Position: <span className="text-black font-normal">{performanceData1.position || "Unknown Position"}</span></p>
                <p className='text-[24px] xl:text-[24px]  lg:text-[22px]  font-bold text-[#177BBD]'>Team: <span className="text-black font-normal">{performanceData1.team || "Unknown Team"}</span></p>

              </div>
            </div>

            <div className="2xl:mt-[15%] lg:mt-[10%] grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Goals</p>
                <CircularProgressbar
                  value={performanceData1.no_of_goals || 0}
                  maxValue={10}

                  text={`${performanceData1.no_of_goals || 0}`} 

                  text={`${performanceData1.no_of_goals || 0}`}

                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[60px] 2xl:h-[140px] xl:w-[40px] xl:h-[120px] lg:w-[35px] lg:h-[100px] mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Assists</p>
                <CircularProgressbar
                  value={performanceData1.assists || 0}
                  maxValue={10}

                  text={`${performanceData1.assists || 0}`} 

                  text={`${performanceData1.assists || 0}`}

                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[60px] 2xl:h-[140px] xl:w-[40px] xl:h-[120px] lg:w-[35px] lg:h-[100px] mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Passes</p>
                <CircularProgressbar
                  value={performanceData1.passes || 0}
                  maxValue={10}

                  text={`${performanceData1.passes || 0}`} 

                  text={`${performanceData1.passes || 0}`}

                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[60px] 2xl:h-[140px] xl:w-[40px] xl:h-[120px] lg:w-[40px] lg:h-[100px] mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Shots on Target</p>
                <CircularProgressbar
                  value={performanceData1.shots_on_target || 0}
                  maxValue={10}

                  text={`${performanceData1.shots_on_target || 0}`} 

                  text={`${performanceData1.shots_on_target || 0}`}

                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[60px] 2xl:h-[140px] xl:w-[40px] xl:h-[120px] lg:w-[40px] lg:h-[100px] mb-[16%]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
