"use client";

import { useState } from "react";
import { FaVideo } from "react-icons/fa";
import Image from "next/image";
import * as yup from "yup";
import { useFormik } from "formik";
import { IoMdArrowBack } from "react-icons/io";
import Link from "next/link";
import { useRouter } from 'next/navigation';


const validationSchema = yup.object().shape({
  shotsOnTarget: yup.number().required("Shots on Target is required").min(0, "Must be a positive number"),
  passes: yup.number().required("Passes are required").min(0, "Must be a positive number"),
  assists: yup.number().required("Assists are required").min(0, "Must be a positive number"),
  goals: yup.number().required("Goals are required").min(0, "Must be a positive number"),
  dribbling: yup.number().required("Dribbling is required").min(0, "Must be a positive number"),
});

const StatisticsForm = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const router = useRouter();

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
        formData.append('video_file', videoFile);
      }
      if (imageFile) {
        formData.append('image_file', imageFile);
      }

      // Post the video for analysis
      try {
        const videoResponse = await fetch('http://127.0.0.1:8000/api/player/upload/', {
          method: 'POST',
          body: formData,
        });

        if (videoResponse.ok) {
          const videoData = await videoResponse.json();
          console.log("Video uploaded successfully:", videoData);
        } else {
          console.error('Failed to upload video');
        }
      } catch (error) {
        console.error("Error during video upload:", error);
      }

      // Post the performance metrics
// Post the performance metrics
try {
  const statsResponse = await fetch(`http://127.0.0.1:8000/api/players/1/performances/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  });

  if (statsResponse.ok) {
    const statsData = await statsResponse.json();
    console.log("Performance data submitted successfully:", statsData);
  } else {
    console.error('Failed to submit statistics');
  }
} catch (error) {
  console.error("Error during statistics submission:", error);
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
      console.log("Selected image:", file.name);
    }
  };

  // Function to fetch analyzed video data and redirect
  const fetchAnalysisResults = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/api/videos/4/');
      if (response.ok) {
        const data = await response.json();
        const combinedResults = { ...data, ...formik.values };
  
        // Debugging line
        console.log("Combined Results:", combinedResults);
  
        // Redirect to the Analyze results page
        router.push(`/analyze?results=${encodeURIComponent(JSON.stringify(combinedResults))}`);
      } else {
        console.error('Failed to retrieve analysis results');
      }
    } catch (error) {
      console.error("Error fetching analysis results:", error);
    }
  };
  
  

  return (
    <div className="max-w-8xl mx-auto pl-10 pr-10 pt-3 font-[josefinSans]">
      <div className="flex mb-8 items-center justify-between">
        <Link href="/components/playerstats">
          <IoMdArrowBack className="w-10 h-10 text-black-600 cursor-pointer" />
        </Link>
        <h2 className="2xl:text-5xl xl:text-5xl lg:text-3xl font-bold mx-auto">Statistics</h2>
      </div>

      <div className="flex xl:flex-row 2xl:flex-row lg:flex-row space-x-8">
        <div className="w-full lg:w-1/2">
          <div className="bg-white p-4 rounded-lg">
            <div className="flex lg:flex-col 2xl:flex-row xl:flex-row rounded-[26px] border border-[#0C3813] shadow-md gap-5">
              <Image
                src={imagePreview || "/images/image (11).png"}
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

            <div className="2xl:mt-16 xl:mt-6 lg:mt-6 lg:ml-2 xl:ml-6 2xl:ml-12">
              <h1 className=" 2xl:ml-[25%] lg:ml-[35%] xl:ml-[38%] text-[#283891] xl:text-3xl 2xl:text-4xl lg:text-3xl font-bold 2xl:mb-6 xl:mb-6 lg:mb-4 2xl:mt-4 xl:mt-2">
              Uploads
              </h1>
              <div className="flex gap-5">
              <label className="flex items-center lg:h-16 xl:h-16 2xl:w-[32%] lg:w-[52%] xl:w-60 bg-[#177BBD] text-white lg:px-6 xl:px- 2xl:px-2 2xl:py-4 xl:py-0 lg:py-2 rounded-[20px] cursor-pointer mb-10">
                <span className="2xl:ml-6 xl:ml-4 lg:ml-2 lg:font-semibold xl:font-semibold 2xl:font-semibold 2xl:text-3xl xl:text-xl lg:text-xl">Upload Image</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              <label className="flex items-center xl:h-16 2xl:w-[32%] lg:w-[60%] xl:w-64 bg-[#177BBD] text-white lg:px-6 xl:px-10 2xl:px-2 2xl:py-4 xl:py-4 lg:py-4 rounded-[20px] cursor-pointer mb-10">
                <span className="2xl:ml-6 lg:font-semibold xl:font-semibold 2xl:font-semibold 2xl:text-3xl xl:text-xl lg:text-2xl">Upload Video</span>
                <input
                  type="file"
                  accept="video/*"
                  onChange={handleVideoChange}
                  className="hidden"
                />
              </label>
              </div>
              <button type="submit" className="bg-[#177BBD] ml-44 text-white px-12 py-4 rounded-[20px] xl:text-2xl 2xl:text-3xl lg:text-2xl font-semibold 2xl:mt-12 xl:mt-18 lg:mt-10" onClick={formik.handleSubmit}>
                Save
              </button>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid grid-cols-1 gap-4 font-semibold">
              {/* Input fields for statistics */}
              {['shotsOnTarget', 'passes', 'assists', 'goals', 'dribbling'].map((field, index) => (
                <div key={index}>
                  <label className="block text-lg font-semibold text-gray-800 ml-4 capitalize">{field.replace(/([A-Z])/g, ' $1')}</label>
                  <input
                    type="text"
                    name={field}
                    value={formik.values[field]}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="border border-[#177BBD] focus:border-black focus:ring-2 focus:ring-blue-400 shadow-md shadow-black/60 p-6 rounded-[20px] w-full"
                  />
                  {formik.touched[field] && formik.errors[field] ? (
                    <div className="text-red-600">{formik.errors[field]}</div>
                  ) : null}
                </div>
              ))}
              <div>
              <button type="submit" className="bg-[#177BBD] text-white 2xl:w-[25%] lg:w-[46%] xl:w-[37%] px-8 py-4 rounded-[20px] font-semibold mt-4 2xl:ml-64 lg:ml-28 xl:ml-44">
                Submit Statistics
              </button>
              </div>
            </div>
          </form>
          {/* Button to fetch analysis results */}
          <div>
          <button 
            onClick={fetchAnalysisResults} 
            className="2xl:ml-64 lg:ml-28 bg-green-500 text-white px-12 py-4 rounded-[20px] font-semibold mt-4 xl:ml-44"
          >
            Retrieve Analysis
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsForm;
