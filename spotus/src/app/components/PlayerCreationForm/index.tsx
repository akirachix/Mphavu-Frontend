

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ArrowLeft, Upload, X, Check, Plus } from 'lucide-react';
// import usePostPlayer from '../Hooks/usePostPlayer';
import usePostPlayer from '@/app/Hooks/usePostPlayer';
// import useFetchTeamData from '../Hooks/useFetchTeamData';
import useFetchTeamData from '@/app/Hooks/useFetchTeamData';


// Validation schema using yup
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  dateOfBirth: yup.date().required('Date of birth is required').nullable(),
  position: yup.string().required('Position is required'),
  teamLogo: yup.mixed()
    .required('Please upload player logo')
    .test('fileSize', 'Please upload player logo', (value) => {
      return value && value.size <= 2000000; // 2MB limit
    })
    .test('fileType', 'Unsupported File Format (only JPEG, PNG, GIF)', (value) => {
      return value && ['image/jpeg', 'image/png', 'image/gif'].includes(value?.type);
    }),
});

const PlayerCreationForm = ({ onBack, teamId }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const { submitPlayer } = usePostPlayer();
  const { fetchTeamData } = useFetchTeamData(teamId);

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('dateOfBirth', data.dateOfBirth);
    formData.append('position', data.position);
    formData.append('teamLogo', data.teamLogo);

    try {
      await submitPlayer(teamId, formData);
      setShowSuccessModal(true);
      await fetchTeamData();
    } catch (error) {
      console.error('Error during player submission:', error);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('teamLogo', file);
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setValue('teamLogo', null);
    }
  };

  return (
    <div className="max-w-[1000px] mx-auto mt-12 p-6 bg-white rounded-lg border-2 border-gray-300">
      <div className="flex items-center mb-6">
        <ArrowLeft className="w-6 h-6 mr-2 text-gray-600 cursor-pointer" onClick={onBack} />
        <h2 className="text-[30px] md:text-[40px] font-semibold text-[#177BBD] mx-auto">Enter Player Details</h2>
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
              {...register('teamLogo')}
              onChange={handleImageChange}
            />
          </label>
          <span className="ml-4 text-blue-600 font-medium text-[24px]">Add Player Photo</span>
        </div>
        {errors.teamLogo && <p className="mt-1 text-sm text-red-600">{errors.teamLogo.message}</p>}

        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName')}
            className="h-[50px] shadow-xl border-[#177BBD] w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
            className="h-[50px] shadow-xl border-[#177BBD] w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-semibold mb-2">Date Of Birth</label>
          <input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth')}
            className="h-[50px] shadow-xl border-[#177BBD] w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          />
          {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
        </div>

        <div>
          <label htmlFor="position" className="block text-gray-700 font-semibold mb-2">Position</label>
          <select
            {...register('position')}
            className="h-[50px] shadow-xl border-[#177BBD] w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
          >
            <option value="">Select Position</option>
            {["Defender", "Striker", "Midfielder", "Goalkeeper"].map((position) => (
              <option key={position} value={position}>
                {position}
              </option>
            ))}
          </select>
          {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>}
        </div>

        {/* <button
          type="submit"
          className="items-center w-full max-w-[380px] py-2 px-4 bg-[#E99700] text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 mx-auto text-[20px] md:text-[32px]"
        >
          Add Player
        </button> */}

          
<button
  type="submit"
  className="lg:ml-[300px] xl:ml-[300px] items-center  md:w-[280px] py-2 px-4 ml-[100px] bg-[#E99700] text-white font-semibold rounded-md hover:bg-orange-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 sm:ml-52 xl:text-[25px] md:text-[32px]"
>
  Add Player
</button>


      </form>

      {showSuccessModal && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-1 mr-2">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold">Player successfully added</span>
            </div>
            <button onClick={() => setShowSuccessModal(false)} className="text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="flex items-center justify-center mb-4">
            {previewImage ? (
              <img src={previewImage} alt="Player Logo" className="w-16 h-16 object-contain" />
            ) : (
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
                <Upload className="w-8 h-8 text-gray-400" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerCreationForm;
