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