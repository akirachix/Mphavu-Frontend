
"use client";
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Plus, ArrowLeft, Check, X, Upload } from 'react-feather';
// import usePostTeams from '../Hooks/usePostTeams'; // Make sure this import is correct
import usePostTeams from '@/app/Hooks/usePostTeams';
// import { Team } from '../Utils/types';
import { Team } from '@/app/Utils/types';



const schema = yup.object().shape({
  name: yup.string().required('Team name is required'),
  sport: yup.string().required('Sport is required'),
  number_of_players: yup.number().positive().integer().required('Number of players is required'),
  logo: yup.mixed()
    .required('Please upload team logo')
    .test('fileSize', 'Please upload team logo', (value) => {
      return value && value.size <= 2000000; // 2MB limit
    })
    .test('fileType', 'Unsupported File Format', (value) => {
      return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value?.type);
    }),
});

const sports = ['Football', 'Basketball'];

const TeamCreationForm = ({ onBack }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm({
    resolver: yupResolver(schema),
  });

  const teamName = watch('name');
  const { postTeams } = usePostTeams(); // Ensure this destructuring is correct

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('sport', data.sport);
    formData.append('number_of_players', data.number_of_players.toString());

    if (data.logo instanceof File) {
      formData.append('logo', data.logo);
    } else {
      console.error('Logo is not a valid file:', data.logo);
      return;
    }

    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const result = await postTeams(formData);
      if (result) {
        setShowSuccessModal(true);
      }
    } catch (error) {
      console.error('Error during submission:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('logo', file); // Set the file in the form state
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setValue('logo', null); // Clear the value if no file is selected
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 z-10">
      <div className="w-full max-w-[1000px] mx-auto mt-8 p-6 bg-white rounded-lg relative border-2 border-gray-300">
        <div className="flex items-center mb-6">
          <ArrowLeft className="w-6 h-6 mr-2 text-gray-600 cursor-pointer" onClick={onBack} />
          <h2 className="text-[30px] md:text-[40px] font-semibold text-[#177BBD] mx-auto">Create Team</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex items-center justify-center mb-4">
            <label className="cursor-pointer">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
                <Plus className="w-8 h-8 text-white" />
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                {...register('logo')}
                onChange={handleImageChange}
              />
            </label>
            <span className="ml-4 text-[#177BBD] font-medium text-[20px] md:text-[24px]">Upload Team Logo</span>
          </div>
          {errors.logo && <p className="mt-1 text-sm text-red-600">{errors.logo.message}</p>} {/* Error message for logo */}

          <div>
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Team Name"
              {...register('name')}
              className="w-full h-[60px] border-[#177BBD] px-3 py-2 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="sport" className="block text-gray-700 font-semibold mb-2">Sport</label>
            <Controller
              name="sport"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-full h-[60px] shadow-xl border-[#177BBD] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
                >
                  <option value="">Select Sport</option>
                  {sports.map((sport) => (
                    <option key={sport} value={sport}>{sport}</option>
                  ))}
                </select>
              )}
            />
            {errors.sport && <p className="mt-1 text-sm text-red-600">{errors.sport.message}</p>}
          </div>

          <div>
            <label htmlFor="number_of_players" className="block text-gray-700 font-semibold mb-2">Number Of Players</label>
            <input
              type="number"
              placeholder="No of Players"
              {...register('number_of_players')}
              className="w-full h-[60px] border-[#177BBD] px-3 py-2 border border-gray-300 rounded-md shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            {errors.number_of_players && <p className="mt-1 text-sm text-red-600">{errors.number_of_players.message}</p>}
          </div>

          <button
            type="submit"
            className="lg:ml-[300px] xl:ml-[300px] items-center w-full max-w-[280px] py-2 px-4 bg-[#E99700] text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 mx-auto xl:text-[25px] md:text-[32px]"
          >
            Create Team
          </button>
        </form>

        {showSuccessModal && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-10">
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm w-full">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="bg-green-500 rounded-full p-1 mr-2">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold">{teamName} Team Successfully added</span>
                </div>
                <button onClick={() => setShowSuccessModal(false)} className="text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center justify-center mb-4">
                  {previewImage ? (
                    <img src={previewImage} alt="Team Logo" className="w-16 h-16 object-contain" />
                  ) : (
                    <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                </div>
                <p className="text-center">Uploaded Team Logo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCreationForm;

