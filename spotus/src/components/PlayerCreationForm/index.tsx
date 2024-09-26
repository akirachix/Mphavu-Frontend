//  "use client";
// import React, { useState } from 'react';
// import { useForm, Controller } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { ArrowLeft, Upload, X, Check, Plus } from 'lucide-react';

// const schema = yup.object().shape({
//   firstName: yup.string().required('First Name is required'),
//   lastName: yup.string().required('Last Name is required'),
//   dateOfBirth: yup.date().required('Date of Birth is required').nullable(),
//   position: yup.string().required('Position is required'),
//   teamLogo: yup.mixed().required('Team logo is required'),
// });

// const PlayerCreationForm = ({ onBack }) => { 
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [previewImage, setPreviewImage] = useState(null);

//   const { register, handleSubmit, control, formState: { errors }, setValue, watch } = useForm({
//     resolver: yupResolver(schema),
//   });

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
//     <div className="w-[1000px] mx-auto mt-[50px] p-6 bg-white rounded-lg relative ml-[300px] border-2 border-gray-300">
//       <div className="flex items-center mb-6">
//         <ArrowLeft className="w-6 h-6 mr-2 text-gray-600 cursor-pointer" onClick={onBack} /> {/* Step 2: Add click handler */}
//         <h2 className="text-[40px] font-semibold text-blue-600 ml-[350px]">Enter Player Details</h2>
//       </div>

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <div className="flex items-center justify-center mb-4">
//           <label className="cursor-pointer">
//             <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
//               <Plus className="w-8 h-8 text-white" />
//             </div>
//             <input
//               type="file"
//               accept="image/*"
//               className="hidden"
//               {...register('teamLogo')}
//               onChange={handleImageChange}
//             />
//           </label>
//           <span className="ml-4 text-blue-600 font-medium text-[24px]">Add Player Photo</span>
//         </div>

//         <div>
//           <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
//             First Name
//           </label>
//           <input
//             type="text"
//             placeholder="First Name"
//             {...register('firstName')}
//             className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
//           />
//           {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
//             Last Name
//           </label>
//           <input
//             type="text"
//             placeholder="Last Name"
//             {...register('lastName')}
//             className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
//           />
//           {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="dateOfBirth" className="block text-gray-700 font-semibold mb-2">
//             Date Of Birth
//           </label>
//           <input
//             id="dateOfBirth"
//             type="date"
//             {...register('dateOfBirth')}
//             className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
//           />
//           {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
//         </div>

//         <div>
//           <label htmlFor="position" className="block text-gray-700 font-semibold mb-2">
//             Position
//           </label>
//           <Controller
//             name="position"
//             control={control}
//             render={({ field }) => (
//               <select
//                 {...field}
//                 className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
//               >
//                 <option value="">Select Position</option>
//                 {["Defender", "Striker", "Midfielder", "Goalkeeper"].map((position) => (
//                   <option key={position} value={position}>
//                     {position}
//                   </option>
//                 ))}
//               </select>
//             )}
//           />
//           {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="w-[500px] py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ml-[200px] text-[32px]"
//         >
//           Add Player
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
//                 <span className="font-semibold">Player successfully added</span>
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
//               </div>
//               <p className="text-center">Upload Player Photo</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PlayerCreationForm;



"use client"; // Ensure you have this line at the top
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { ArrowLeft, Upload, X, Check, Plus } from 'lucide-react';
import usePlayersForm from '../Hooks/playersform';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  dateOfBirth: yup.date().required('Date of Birth is required').nullable(),
  position: yup.string().required('Position is required'),
  teamLogo: yup.mixed().required('Team logo is required'),
});

const PlayerCreationForm = ({ onBack }) => { 
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const { submitPlayer, loading, error } = usePlayersForm(); // Use the hook

  const { register, handleSubmit, control, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    await submitPlayer(data);
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
    <div className="w-[1000px] mx-auto mt-[50px] p-6 bg-white rounded-lg relative ml-[300px] border-2 border-gray-300">
      <div className="flex items-center mb-6">
        <ArrowLeft className="w-6 h-6 mr-2 text-gray-600 cursor-pointer" onClick={onBack} />
        <h2 className="text-[40px] font-semibold text-blue-600 ml-[350px]">Enter Player Details</h2>
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

        <div>
          <label htmlFor="firstName" className="block text-gray-700 font-semibold mb-2">
            First Name
          </label>
          <input
            type="text"
            placeholder="First Name"
            {...register('firstName')}
            className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
          />
          {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-gray-700 font-semibold mb-2">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Last Name"
            {...register('lastName')}
            className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
          />
          {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block text-gray-700 font-semibold mb-2">
            Date Of Birth
          </label>
          <input
            id="dateOfBirth"
            type="date"
            {...register('dateOfBirth')}
            className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
          />
          {errors.dateOfBirth && <p className="mt-1 text-sm text-red-600">{errors.dateOfBirth.message}</p>}
        </div>

        <div>
          <label htmlFor="position" className="block text-gray-700 font-semibold mb-2">
            Position
          </label>
          <Controller
            name="position"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="w-[900px] px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 mb-[50px]"
              >
                <option value="">Select Position</option>
                {["Defender", "Striker", "Midfielder", "Goalkeeper"].map((position) => (
                  <option key={position} value={position}>
                    {position}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.position && <p className="mt-1 text-sm text-red-600">{errors.position.message}</p>}
        </div>

        <button
          type="submit"
          className="w-[500px] py-2 px-4 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ml-[200px] text-[32px]"
        >
          Add Player
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
                <span className="font-semibold">Player successfully added</span>
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
              <p className="text-center">Upload Player Photo</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerCreationForm;
