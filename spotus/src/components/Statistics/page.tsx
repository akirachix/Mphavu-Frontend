"use client";

import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";

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
    <div className="max-w-8xl max- mx-auto p-10">
      <div className="flex items-center space-x-64 mb-4">
        <button className="text-8xl font-bold">&larr;</button>
        <h1 className="text-3xl mt-6 font-bold">Statistics</h1>
      </div>

      <div className="flex flex-col lg:flex-row space-x-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex rounded-md border border-gray-300 shadow-md gap-10">
              <Image
                src="/images/image (11).png" 
                alt="Player Image"
                width={250}
                height={200}
                className="rounded-lg"
              />
              <div className="pl-4">
                <div className="text-lg font-bold">Name: Lebron James</div>
                <div className="text-md">Age: 14</div>
                <div className="text-md">Team: Ligi Ndogo</div>
                <div className="text-md">Position: Striker</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="text-blue-600 text-2xl font-semibold mb-2">Upload New Video</div>
              <label className="flex items-center w-[20%] bg-[#177BBD] text-white px-4 py-2 rounded-md cursor-pointer">
                <FaVideo size={20} />
                <span className="ml-2">Upload Video</span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden" 
                />
              </label>
              <button type="submit" className="bg-[#177BBD] ml-10 text-white px-8 py-2 rounded-md text-lg font-semibold mt-40" onClick={formik.handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="w-full  lg:w-1/2 mt-8 lg:mt-0">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-800">Shots on Target</label>
                <input
                  type="text"
                  name="shotsOnTarget"
                  value={formik.values.shotsOnTarget}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-500 focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md p-6 rounded-md w-full"
                />
                {formik.touched.shotsOnTarget && formik.errors.shotsOnTarget ? (
                  <div className="text-red-600">{formik.errors.shotsOnTarget}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">Passes</label>
                <input
                  type="text"
                  name="passes"
                  value={formik.values.passes}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-500 focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md p-6 rounded-md w-full"
                />
                {formik.touched.passes && formik.errors.passes ? (
                  <div className="text-red-600">{formik.errors.passes}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">Assists</label>
                <input
                  type="text"
                  name="assists"
                  value={formik.values.assists}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-500 focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md p-6 rounded-md w-full"
                />
                {formik.touched.assists && formik.errors.assists ? (
                  <div className="text-red-600">{formik.errors.assists}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">No of Goals</label>
                <input
                  type="text"
                  name="goals"
                  value={formik.values.goals}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-500 focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md p-6 rounded-md w-full"
                />
                {formik.touched.goals && formik.errors.goals ? (
                  <div className="text-red-600">{formik.errors.goals}</div>
                ) : null}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800">Dribbling</label>
                <input
                  type="text"
                  name="dribbling"
                  value={formik.values.dribbling}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  className="border border-gray-500 focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md p-6 rounded-md w-full"
                />
                {formik.touched.dribbling && formik.errors.dribbling ? (
                  <div className="text-red-600">{formik.errors.dribbling}</div>
                ) : null}
              </div>
            </div>

            <div className="ml-40 items-center mt-20">
              <button type="button" className="bg-[#46BC14] text-white px-8 py-2 rounded-md text-lg font-semibold">
                Analyze
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StatisticsForm;
