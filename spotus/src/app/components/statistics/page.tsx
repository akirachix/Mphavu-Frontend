

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



"use client";

import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";

const validationSchema = yup.object().shape({
  shotsOnTarget: yup
    .number()
    .required("Shots on Target is required")
    .min(0, "Must be a positive number"),
  passes: yup
    .number()
    .required("Passes are required")
    .min(0, "Must be a positive number"),
  assists: yup
    .number()
    .required("Assists are required")
    .min(0, "Must be a positive number"),
  goals: yup
    .number()
    .required("Goals are required")
    .min(0, "Must be a positive number"),
  dribbling: yup
    .number()
    .required("Dribbling is required")
    .min(0, "Must be a positive number"),
});

const StatisticsForm = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null); // State to hold the uploaded video file

  const formik = useFormik({
    initialValues: {
      shotsOnTarget: "",
      passes: "",
      assists: "",
      goals: "",
      dribbling: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const formData = new FormData();
      if (videoFile) {
        formData.append('videoFile', videoFile);
      }
      formData.append('shotsOnTarget', values.shotsOnTarget);
      formData.append('passes', values.passes);
      formData.append('assists', values.assists);
      formData.append('goals', values.goals);
      formData.append('dribbling', values.dribbling);

      const response = await fetch('/api/Statistics/posts', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        console.error('Failed to submit statistics');
      }
    },
  });

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setVideoFile(file);
      console.log("Selected video:", file.name);
    }
  };

  return (
    <div className="max-w-8xl  mx-auto pl-10 pr-10 pt-3 font-[josefinSans]">
      <div className="flex mb-8 items-center justify-between">
      <a href="/components/playerstats">
          <IoMdArrowBack className="w-10 h-10 text-black-600 cursor-pointer" />
        </a>    <h2 className="2xl:text-5xl xl:text-5xl lg:text-3xl font-bold mx-auto">Statistics</h2>
</div>

      <div className="flex xl:flex-row 2xl:flex-row lg:flex-row space-x-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex lg:flex-col 2xl:flex-row xl:flex-row rounded-[26px] border border-[#0C3813] shadow-md gap-5">
              <Image
                src="/images/image (11).png" 
                alt="Player Image"
                width={250}
                height={200}
                className="2xl:ml-10 xl:ml-10 mt-6 2xl:mb-6 xl:mb-6 lg:mb-0 lg:ml-20"
              />
              <div className="2xl:space-y-10 xl:space-y-10 lg:space-y-2 2xl:mt-12 xl:mt-12 lg:mt-0 2xl:ml-8 xl:ml-8 lg:ml-20 lg:mb-3">
                <div className="text-lg font-semibold">Name: Lebron James</div>
                <div className="text-lg font-semibold">Age: 14</div>
                <div className="text-lg font-semibold">Team: Ligi Ndogo</div>
                <div className="text-lg font-semibold">Position: Striker</div>
              </div>
            </div>
            <div className="2xl:mt-16 xl:mt-14 lg:mt-6 lg:ml-24 xl:ml-32 2xl:ml-32">
              <div className="text-[#283891] xl:text-3xl 2xl:text-4xl lg:text-3xl font-bold 2xl:mb-6 xl:mb-6 lg:mb-4">Upload New Video</div>
              <label className="flex items-center 2xl:w-[40%] lg:w-60 xl:w-64 bg-[#177BBD] text-white lg:px-6 xl:px-10 2xl:px-8 2xl:py-4 xl:py-4 lg:py-4 rounded-[20px] cursor-pointer">
                <FaVideo size={24} />
                <span className="ml-2 lg:font-semibold xl:font-semibold 2xl:font-semibold 2xl:text-3xl xl:text-2xl lg:text-2xl">Upload Video</span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </label>
              <button type="submit" className="bg-[#177BBD] ml-10 text-white px-12 py-4 rounded-[20px] xl:text-2xl 2xl:text-3xl lg:text-2xl font-semibold 2xl:mt-24 xl:mt-18 lg:mt-10" onClick={formik.handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
  <form onSubmit={formik.handleSubmit}>
    <div className="grid grid-cols-1 gap-4 font-semibold">
      <div>
        <label className="block text-lg font-semibold text-gray-800 ml-4">Shots on Target</label>
        <input
          type="text"
          name="shotsOnTarget"
          value={formik.values.shotsOnTarget}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-[#177BBD] focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md shadow-black/60 p-6 rounded-[20px] w-full"
        />
        {formik.touched.shotsOnTarget && formik.errors.shotsOnTarget ? (
          <div className="text-red-600">{formik.errors.shotsOnTarget}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-lg font-semibold text-gray-800 ml-4">Passes</label>
        <input
          type="text"
          name="passes"
          value={formik.values.passes}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-[#177BBD] focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md shadow-black/60 p-6 rounded-[20px] w-full"
        />
        {formik.touched.passes && formik.errors.passes ? (
          <div className="text-red-600">{formik.errors.passes}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-lg font-semibold text-gray-800 ml-4">Assists</label>
        <input
          type="text"
          name="assists"
          value={formik.values.assists}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-[#177BBD] focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md shadow-black/60 p-6 rounded-[20px] w-full"
        />
        {formik.touched.assists && formik.errors.assists ? (
          <div className="text-red-600">{formik.errors.assists}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-lg font-semibold text-gray-800 ml-4">No of Goals</label>
        <input
          type="text"
          name="goals"
          value={formik.values.goals}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-[#177BBD] focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md shadow-black/60 p-6 rounded-[20px] w-full"
        />
        {formik.touched.goals && formik.errors.goals ? (
          <div className="text-red-600">{formik.errors.goals}</div>
        ) : null}
      </div>
      <div>
        <label className="block text-lg font-semibold text-gray-800 ml-4 ">Dribbling</label>
        <input
          type="text"
          name="dribbling"
          value={formik.values.dribbling}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="border border-[#177BBD] focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md shadow-black/60 p-6 rounded-[20px] w-full"
        />
        {formik.touched.dribbling && formik.errors.dribbling ? (
          <div className="text-red-600">{formik.errors.dribbling}</div>
        ) : null}
      </div>
    </div>

    <div className="2xl:ml-64 xl:ml-60 lg:ml-40 items-center 2xl:mt-28 xl:mt-12 lg:mt-20 ">
      <Link href="/components/performancemetrics">
  <button
    type="button"
    className="bg-[#46BC14] text-white 2xl:px-16 xl:px-14 lg:px-10 py-4 rounded-[20px] 2xl:text-3xl xl:text-2xl lg:text-2xl font-semibold"
    onClick={formik.handleSubmit}
  >
  Analyze
  </button>
  </Link>
</div>

  </form>
</div>
      </div>
    </div>
  );
};

export default StatisticsForm;

