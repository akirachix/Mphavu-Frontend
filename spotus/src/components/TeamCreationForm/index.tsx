 "use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ArrowLeft, Upload, X, Check, Plus } from 'lucide-react';

const schema = yup.object().shape({
  teamName: yup.string().required('Team name is required'),
  sport: yup.string().required('Sport is required'),
  noOfPlayers: yup.number().positive().integer().required('Number of players is required'),
  teamLogo: yup.mixed().required('Team logo is required')
});

// const sports = ['Football', 'Basketball', 'Tennis', 'Volleyball', 'Baseball'];
const sports = ['Football', 'Basketball'];
const TeamCreationForm = ({ onBack }) => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm({
    resolver: yupResolver(schema)
  });

  const teamName = watch('teamName');

  const onSubmit = (data) => {
    console.log(data);
    setShowSuccessModal(true);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue('teamLogo', file);
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-100 z-10">
      <div className="w-[1000px] mx-auto mt-[50px] p-6 bg-white rounded-lg relative ml-[300px] border-2 border-gray-300">
        <div className="flex items-center mb-6">
          <ArrowLeft className="w-6 h-6 mr-2 text-gray-600 cursor-pointer" onClick={onBack} />
          <h2 className="text-[40px] font-semibold text-blue-600 ml-[350px]">Create Team</h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Upload Team Logo */}
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
            <span className="ml-4 text-blue-600 font-medium text-[24px]">Upload Team Logo</span>
          </div>

          {/* Team Name */}
          <div>
            <label htmlFor="teamName" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Team Name"
              {...register('teamName')}
              className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
            />
            {errors.teamName && <p className="mt-1 text-sm text-red-600">{errors.teamName.message}</p>}
          </div>

          {/* Sport */}
          <div>
            <label htmlFor="sport" className="block text-gray-700 font-semibold mb-2">Sport</label>
            <Controller
              name="sport"
              control={control}
              render={({ field }) => (
                <select
                  {...field}
                  className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
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

          {/* Number of Players */}
          <div>
            <label htmlFor="noOfPlayers" className="block text-gray-700 font-semibold mb-2">Number Of Players</label>
            <input
              type="number"
              placeholder="No of Players"
              {...register('noOfPlayers')}
              className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.noOfPlayers && <p className="mt-1 text-sm text-red-600">{errors.noOfPlayers.message}</p>}
          </div>

          <button
            type="submit"
            className="w-[500px] py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ml-[200px] text-[32px]"
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
                <p className="text-center">Upload Team Logo</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamCreationForm;

// const TeamCreationForm = ({ onBack }) => {
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);
//   const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm({
//     resolver: yupResolver(schema)
//   });

//   const teamName = watch('teamName');

//   const onSubmit = (data) => {
//     console.log(data);
//     setShowSuccessModal(true);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setValue('teamLogo', file);
//       setPreviewImage(URL.createObjectURL(file));
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md relative">
//       <div className="flex items-center mb-6">
//         <ChevronLeft className="w-6 h-6 mr-2" onClick={onBack} />
//         <h2 className="text-xl font-semibold">Create Team</h2>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div>
//           <label className="block mb-2 font-medium">
//             Upload Team Logo
//             <div className="mt-1 flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50">
//               {previewImage ? (
//                 <div className="relative w-full h-full">
//                   <img src={previewImage} alt="Team Logo" className="h-full w-full object-contain" />
//                   <div className="absolute bottom-2 right-2 bg-green-500 rounded-full p-1">
//                     <Check className="w-4 h-4 text-white" />
//                   </div>
//                 </div>
//               ) : (
//                 <div className="text-center">
//                   <Upload className="mx-auto h-12 w-12 text-gray-400" />
//                   <p className="mt-1 text-sm text-gray-600">Upload Team Logo</p>
//                 </div>
//               )}
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="hidden"
//                 {...register('teamLogo')}
//                 onChange={handleImageChange}
//               />
//             </div>
//           </label>
//           {errors.teamLogo && <p className="mt-1 text-sm text-red-600">{errors.teamLogo.message}</p>}
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Team Name
//             <input
//               type="text"
//               {...register('teamName')}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             />
//           </label>
//           {errors.teamName && <p className="mt-1 text-sm text-red-600">{errors.teamName.message}</p>}
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             Sport
//             <Controller
//               name="sport"
//               control={control}
//               render={({ field }) => (
//                 <select
//                   {...field}
//                   className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//                 >
//                   <option value="">Select a sport</option>
//                   {sports.map((sport) => (
//                     <option key={sport} value={sport}>{sport}</option>
//                   ))}
//                 </select>
//               )}
//             />
//           </label>
//           {errors.sport && <p className="mt-1 text-sm text-red-600">{errors.sport.message}</p>}
//         </div>

//         <div>
//           <label className="block mb-2 font-medium">
//             No of Players
//             <input
//               type="number"
//               {...register('noOfPlayers')}
//               className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
//             />
//           </label>
//           {errors.noOfPlayers && <p className="mt-1 text-sm text-red-600">{errors.noOfPlayers.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//         >
//           Create Team
//         </button>
//       </form>

//       {showSuccessModal && (
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-10">
//           <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm w-full">
//             <div className="flex justify-between items-center mb-4">
//               <div className="flex items-center">
//                 <div className="bg-green-500 rounded-full p-1 mr-2">
//                   <Check className="w-4 h-4 text-white" />
//                 </div>
//                 <span className="font-semibold">{teamName} Team Successfully added</span>
//               </div>
//               <button onClick={() => setShowSuccessModal(false)} className="text-gray-400 hover:text-white">
//                 <X className="w-5 h-5" />
//               </button>
//             </div>
//             <div className="bg-gray-700 p-4 rounded-lg">
//               <div className="flex items-center justify-center mb-4">
//                 {previewImage ? (
//                   <img src={previewImage} alt="Team Logo" className="w-16 h-16 object-contain" />
//                 ) : (
//                   <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center">
//                     <Upload className="w-8 h-8 text-gray-400" />
//                   </div>
//                 )}
//                 <div className="ml-4">
//                   <Check className="w-6 h-6 text-green-500" />
//                 </div>
//               </div>
//               <p className="text-center">Upload Team Logo</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TeamCreationForm;
