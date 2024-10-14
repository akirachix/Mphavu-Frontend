"use client"; 

import React, { useState } from 'react';
import { Search, ArrowLeft, Plus, X } from 'lucide-react';
import { useSendInvite } from '../../hooks/useSendInvite';  
import { validateEmail } from '../../utils/fetchEmail';

const AgentsPage = () => {
  const [selected, setSelected] = useState('Coaches');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // <-- Add errorMessage state
  const { inviteSent, successMessage, sendInvite, setInviteSent } = useSendInvite(); 


  const handleSendInvite = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      alert('Please enter a valid email address');
      return;
    }

    try {
      await sendInvite(email); // Call sendInvite from the hook
      setEmail(''); // Clear email input
      setErrorMessage('');
    } catch (error) {
      console.error('Failed to send invite:', error);
      setInviteSent(false); // Set to false if there was an error
      setErrorMessage('Error sending invite: ' + error.message); 
    }

    // Automatically close the modal after a short delay
    setTimeout(() => {
      setIsModalOpen(false);
      setInviteSent(false);
      setErrorMessage(''); // Clear error message if any
    }, 3000);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-96 bg-blue-500 text-white">
        <div className="p-4">
          <img src="/image (5).png" alt="Spot Us Logo" className="w-[300px] h-[100px]" />
        </div>

        <nav className="mt-8">
          <a
            href="#"
            onClick={() => setSelected('Agents')}
            className={`block py-2 px-4 text-[36px] h-24 flex items-center ${
              selected === 'Agents' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
            }`}
          >
            Agents
          </a>
          <a
            href="#"
            onClick={() => setSelected('Coaches')}
            className={`block py-2 px-4 text-[36px] h-24 flex items-center mt-20 ${
              selected === 'Coaches' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
            }`}
          >
            Coaches
          </a>
        </nav>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button className="text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-blue-500 hover:bg-[#E99700] text-white font-bold py-2 px-4 rounded-[30px] inline-flex items-center text-[24px]"
            >
              <Plus className="h-[35px] w-[35px] mr-2" />
              {selected === 'Agents' ? 'Add Agent' : 'Add Coach'}
            </button>
          </div>
        </header>

        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 rounded-[20px] border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute left-3 top-2.5">
              <Search className="h-5 w-5 text-black" />
            </div>
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <p className="text-[60px] text-black">
            {selected === 'Agents' ? 'Oops! No Agents Yet' : 'Oops! No Coaches Yet'}
          </p>
        </div>

        {/* Success message */}
        {inviteSent && (
          <div className="fixed bottom-4 right-4 text-black text-[21px] z-50 bg-white p-4 rounded-lg h-[30px] flex items-center justify-center">
            Invitation sent successfully
          </div>
        )}

        {/* Error message */}
        {errorMessage && (
          <div className="fixed bottom-4 right-4 text-red-500 text-[21px] z-50 bg-white p-4 rounded-lg h-[30px] flex items-center justify-center">
            {errorMessage}
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-gray-800 p-6 rounded-[20px] w-[600px] h-[300px] flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-white text-xl mt-8">Email</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-white">
                <X className="h-6 w-6" />
              </button>
            </div>
            <form onSubmit={handleSendInvite} className="flex flex-col">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full p-2 mb-4 rounded"
                required
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-[150px] bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-4"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentsPage;


// "use client"; 

// import React, { useState } from 'react';
// import { Search, ArrowLeft, Plus, X } from 'lucide-react';
// import { useSendInvite } from '../../hooks/useSendInvite';  
// import { validateEmail } from '../../utils/fetchEmail';

// const AgentsPage = () => {
//   const [selected, setSelected] = useState('Coaches');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [email, setEmail] = useState('');
//   const { inviteSent, errorMessage, successMessage, sendInvite, setInviteSent } = useSendInvite(); 

//   // Define local state for error and success messages
//   const [localErrorMessage, setLocalErrorMessage] = useState('');
//   const [localSuccessMessage, setLocalSuccessMessage] = useState('');

//   const handleSendInvite = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       alert('Please enter a valid email address');
//       return;
//     }

//     try {
//       await sendInvite(email); // Call sendInvite from the hook
//       setEmail(''); // Clear email input
//       setLocalSuccessMessage('Invitation sent successfully'); // Set success message
//       setLocalErrorMessage(''); // Clear error message if any

//       // Automatically close the modal after a short delay
//       setTimeout(() => {
//         setIsModalOpen(false);
//         setInviteSent(false);
//         setLocalSuccessMessage(''); // Clear success message
//       }, 3000);
//     } catch (error) {
//       console.error('Failed to send invite:', error);
//       setLocalErrorMessage(error.message || 'Failed to send invite'); // Set the error message
//       setLocalSuccessMessage(''); // Clear success message if any

//       // Automatically close the modal after a short delay
//       setTimeout(() => {
//         setIsModalOpen(false);
//         setLocalErrorMessage(''); // Clear error message after a delay
//       }, 3000);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-gray-100">
//       <div className="w-96 bg-blue-500 text-white">
//         <div className="p-4">
//           <img src="/image (5).png" alt="Spot Us Logo" className="w-[300px] h-[100px]" />
//         </div>

//         <nav className="mt-8">
//           <a
//             href="#"
//             onClick={() => setSelected('Agents')}
//             className={`block py-2 px-4 text-[36px] h-24 flex items-center ${
//               selected === 'Agents' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
//             }`}
//           >
//             Agents
//           </a>
//           <a
//             href="#"
//             onClick={() => setSelected('Coaches')}
//             className={`block py-2 px-4 text-[36px] h-24 flex items-center mt-20 ${
//               selected === 'Coaches' ? 'bg-[#033354]' : 'hover:bg-[#033354]'
//             }`}
//           >
//             Coaches
//           </a>
//         </nav>
//       </div>

//       <div className="flex-1 flex flex-col">
//         <header className="bg-white shadow-sm">
//           <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//             <button className="text-gray-600 hover:text-gray-900">
//               <ArrowLeft className="h-6 w-6" />
//             </button>
//             <button
//               onClick={() => setIsModalOpen(true)}
//               className="bg-blue-500 hover:bg-[#E99700] text-white font-bold py-2 px-4 rounded-[30px] inline-flex items-center text-[24px]"
//             >
//               <Plus className="h-[35px] w-[35px] mr-2" />
//               {selected === 'Agents' ? 'Add Agent' : 'Add Coach'}
//             </button>
//           </div>
//         </header>

//         <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 mt-8">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search"
//               className="w-full pl-10 pr-4 py-2 rounded-[20px] border border-black focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <div className="absolute left-3 top-2.5">
//               <Search className="h-5 w-5 text-black" />
//             </div>
//           </div>
//         </div>

//         <div className="flex-1 flex items-center justify-center">
//           <p className="text-[60px] text-black">
//             {selected === 'Agents' ? 'Oops! No Agents Yet' : 'Oops! No Coaches Yet'}
//           </p>
//         </div>

//         {/* Success message */}
//         {localSuccessMessage && (
//           <div className="fixed bottom-4 right-4 text-black text-[21px] z-50 bg-white p-4 rounded-lg h-[30px] flex items-center justify-center">
//             {localSuccessMessage}
//           </div>
//         )}

//         {/* Error message */}
//         {localErrorMessage && (
//           <div className="fixed bottom-4 right-4 text-red-500 text-[21px] z-50 bg-white p-4 rounded-lg h-[30px] flex items-center justify-center">
//             {localErrorMessage}
//           </div>
//         )}
//       </div>

//       {isModalOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
//           <div className="bg-gray-800 p-6 rounded-[20px] w-[600px] h-[300px] flex flex-col">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-white text-xl mt-8">Email</h2>
//               <button onClick={() => setIsModalOpen(false)} className="text-white">
//                 <X className="h-6 w-6" />
//               </button>
//             </div>
//             <form onSubmit={handleSendInvite} className="flex flex-col">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter email address"
//                 className="w-full p-2 mb-4 rounded"
//                 required
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="submit"
//                   className="w-[150px] bg-green-500 text-white py-2 rounded hover:bg-green-600 mt-4"
//                 >
//                   Send Invite
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AgentsPage;
