
'use client';
import Head from 'next/head';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useStatistics } from '../../hooks/useStatistics'; 
import Link from 'next/link';

export default function statistics() {
  const playerId1 = 1; 
  const playerId2 = 2; 
  const { statistics: stats1 } = useStatistics(playerId1);
  const { statistics: stats2 } = useStatistics(playerId2);

  const performanceData1 = stats1 || {};
  const performanceData2 = stats2 || {};

  return (
    <div className="flex h-screen bg-gray-100">
      <Head>
        <title>Spot Us - Player Statistics</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-6">
          <Link href="/comp" className='h-[1%] w-[83px] 2xl:ml-[10%] xl:ml-[10%]mb-[2%] text-[40px]'>
          <div><IoMdArrowRoundBack  /></div>
          </Link>
        </div>

        <div className="flex justify-center space-x-6 2xl:mb-[8%] lg:mb-[6%]">
          <div className="bg-white rounded-[50px] shadow-md p-6 2xl:w-[520px] 2xl:h-[690px] xl:w-[480px] xl:h-[640px] lg:w-[450px] lg:h-[590px] border-[1px] border-black">
            <div className="flex items-center mb-[2%]">
              <img src="/images/profile.png" alt={performanceData1.name || "Player 1"} className='2xl:w-[146px] xl:w-[130px] lg:w-[110px] ml-[5%]' />
              <div className="2xl:ml-[12%] xl:ml-[10%] lg:ml-[10%]">
                <h2 className="2xl:text-[24px] xl:text-[20px] lg:text-[18px] font-bold text-[#177BBD]">Name: <span className="text-black font-normal">{performanceData1.name || "Unknown Player"}</span></h2>
                <p className='text-[24px] xl:text-[20px] lg:text-[18px] font-bold text-[#177BBD]'>Position: <span className="text-black font-normal">{performanceData1.position || "Unknown Position"}</span></p>
                <p className='text-[24px] xl:text-[20px] lg:text-[18px] font-bold text-[#177BBD]'>Team: <span className="text-black font-normal">{performanceData1.team || "Unknown Team"}</span></p>
              </div>
            </div>
            <div className="mt-[15%] grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Goals</p>
                <CircularProgressbar
                  value={performanceData1.no_of_goals || 0}
                  maxValue={10}
                  text={`${performanceData1.no_of_goals || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px] mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Assists</p>
                <CircularProgressbar
                  value={performanceData1.assists || 0}
                  maxValue={10}
                  text={`${performanceData1.assists || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px]  mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Passes</p>
                <CircularProgressbar
                  value={performanceData1.passes || 0}
                  maxValue={10}
                  text={`${performanceData1.passes || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px]  mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Shots on Target</p>
                <CircularProgressbar
                  value={performanceData1.shots_on_target || 0}
                  maxValue={10}
                  text={`${performanceData1.shots_on_target || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px]  mb-[16%]"
                />
              </div>
            </div>
          </div>

        
          <div className="bg-white rounded-[50px] shadow-md p-6 2xl:w-[520px] 2xl:h-[690px] xl:w-[480px] xl:h-[640px] lg:w-[450px] lg:h-[590px]  border-[1px] border-black">
            <div className="flex items-center mb-[2%]">
              <img src="/images/profile.png" alt={performanceData2.name || "Player 2"} className='2xl:w-[146px] xl:w-[135px] lg:w-[135px]  ml-[5%]' />
              <div className="ml-[12%]">
                <h2 className="2xl:text-[24px] xl:text-[20px] font-bold text-[#177BBD]">Name: <span className="text-black font-normal">{performanceData2.name || "Unknown Player"}</span></h2>
                <p className='2xl:text-[24px] xl:text-[20px]  font-bold text-[#177BBD]'>Position: <span className="text-black font-normal">{performanceData2.position || "Unknown Position"}</span></p>
                <p className='2xl:text-[24px] xl:text-[20px] font-bold text-[#177BBD]'>Team: <span className="text-black font-normal">{performanceData2.team || "Unknown Team"}</span></p>
              </div>
            </div>
            <div className="mt-[15%] grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Goals</p>
                <CircularProgressbar
                  value={performanceData2.no_of_goals || 0}
                  maxValue={10}
                  text={`${performanceData2.no_of_goals || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px]  mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Assists</p>
                <CircularProgressbar
                  value={performanceData2.assists || 0}
                  maxValue={10}
                  text={`${performanceData2.assists || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px]  mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Passes</p>
                <CircularProgressbar
                  value={performanceData2.passes || 0}
                  maxValue={10}
                  text={`${performanceData2.passes || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px]  mb-[16%]"
                />
              </div>
              <div className="flex flex-col items-center">
                <p className="text-center font-semibold text-[24px]">Shots on Target</p>
                <CircularProgressbar
                  value={performanceData2.shots_on_target || 0}
                  maxValue={10}
                  text={`${performanceData2.shots_on_target || 0}`}
                  styles={buildStyles({
                    textSize: '24px',
                    pathColor: '#3B82F6',
                    textColor: '#1F2937',
                  })}
                  className="2xl:w-[50px] 2xl:h-[120px] xl:w-[50px] xl:h-[110px] lg:w-[50px] lg:h-[110px]  mb-[16%]"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}


