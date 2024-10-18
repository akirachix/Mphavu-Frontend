

// "use client"; 
// import { useState } from 'react';
// import { ArrowLeft, Search, Plus } from 'lucide-react';

// interface TeamsHeaderProps {
//     setIsCreatingTeam: (value: boolean) => void; // Define the function type
// }

// const TeamsHeader: React.FC<TeamsHeaderProps> = ({ setIsCreatingTeam }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleAddClick = () => {
//       setIsCreatingTeam(true); 
//   };

//   return (
//       <div className="flex flex-col md:flex-row justify-between items-center mb-4 ml-[50px]">
//           <div className=" flex items-center mb-2 md:mb-0" style={{ marginBottom: '10px' }}>
//               <ArrowLeft className="h-6 w-6 text-gray-600 ml-4 md:ml-10" />
//           </div>

// <div className="relative w-full mb-4 mt-[100px] lg:w-[800px] lg:mx-auto lg:ml-0 lg:mt-[100px]">
//     <input
//         type="text"
//         placeholder="Search Team"
//         className="w-full pl-10 pr-4 py-2 border rounded-xl border-black"
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//     />
//     <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// </div>

//           <div style={{ marginBottom: '100px' }}>
//               <button
//                   onClick={handleAddClick}
//                   className="bg-[#177BBD] text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 md:mr-[200px] mt-[50px] hover:bg-orange-500"
//               >
//                   <Plus className="h-5 w-5 mr-2" />
//                   Create Team
//               </button>
//           </div>
//       </div>
//   );
// };

// export default TeamsHeader;




// "use client"; 
// import { useState } from 'react';
// import { ArrowLeft, Search, CirclePlus } from 'lucide-react';

// interface TeamsHeaderProps {
//     setIsCreatingTeam: (value: boolean) => void; 
//     onSearch: (searchTerm: string) => void; // Add search function prop
// }

// const TeamsHeader: React.FC<TeamsHeaderProps> = ({ setIsCreatingTeam, onSearch }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleAddClick = () => {
//       setIsCreatingTeam(true); 
//   };

//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setSearchTerm(value);
//     onSearch(value); // Call the search function from parent
//   };

//   return (
//       <div className="mt-[5px] flex flex-col md:flex-row justify-between items-center mb-4 ml-[50px]">
//           <div className=" flex items-center mb-2 md:mb-0 sm:ml-[1px]" style={{ marginBottom: '10px' }}>
//               <ArrowLeft className="h-6 w-6 text-gray-600  md:ml-10" />
//           </div>

//           <div className=" relative w-full mb-4 mt-[90px]  lg:w-[600px] lg:mx-auto lg:ml-0 lg:mt-[100px]">
//               <input
//                   type="text"
//                   placeholder="Search Team"
//                   className="w-full pl-10 pr-4 py-2 border rounded-xl border-black"
//                   value={searchTerm}
//                   onChange={handleInputChange}
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//           </div>

//           <div style={{ marginBottom: '100px' }}>
//               <button
//                   onClick={handleAddClick}
//                   className="bg-[#177BBD] text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 md:mr-[200px] mt-[10px] hover:bg-orange-500 h-[60px] w-[250px] text-[25px] xl:mr-[50px] "
//               >
//                   {/* <Plus className="h-5 w-10 mr-2" /> */}
//                 <CirclePlus className="h-8 w-12 mr-2" />

//                   {/* <CirclePlus /> */}
//                   Create Team
//               </button>
//           </div>
//       </div>
//   );
// };

// export default TeamsHeader;



"use client"; 
import { useState } from 'react';
import { ArrowLeft, Search, CirclePlus } from 'lucide-react';

interface TeamsHeaderProps {
    setIsCreatingTeam: (value: boolean) => void; 
    onSearch: (searchTerm: string) => void; // Add search function prop
}

const TeamsHeader: React.FC<TeamsHeaderProps> = ({ setIsCreatingTeam, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddClick = () => {
      setIsCreatingTeam(true); 
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value); // Call the search function from parent
  };

  return (
      <div className="mt-[5px] flex flex-col md:flex-row justify-between items-start mb-4 ml-[50px]">
          <div className="flex items-center mb-2 md:mb-0 md:mr-4 " style={{ marginTop: '10px' }}>
              <ArrowLeft className="h-6 w-6 text-gray-600" />
          </div>

          <div className="relative w-full mb-4 mt-[90px] lg:w-[600px] lg:mx-auto lg:ml-0 lg:mt-[100px]">
              <input
                  type="text"
                  placeholder="Search Team"
                  className="w-full pl-10 pr-4 py-2 border rounded-xl border-black bg-[#E3E3E3]"
                  value={searchTerm}
                  onChange={handleInputChange}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 " />
          </div>

          <div className="flex items-center mb-4">
              <button
                  onClick={handleAddClick}
                  className="bg-[#177BBD] text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 h-[60px] w-[250px] text-[25px] md:mr-[200px] xl:mr-[90px] lg:mr-[70px]"
              >
                  <CirclePlus className="h-8 w-12 mr-2" />
                  Create Team
              </button>
          </div>
      </div>
  );
};

export default TeamsHeader;
