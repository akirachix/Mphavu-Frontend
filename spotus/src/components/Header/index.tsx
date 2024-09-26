// "use client";
// import { useState } from 'react';
// import { ArrowLeft, Search, Plus } from 'lucide-react';

// const Header = ({ onAddPlayer }) => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isAddActive, setIsAddActive] = useState(false);

//   const handleAddClick = () => {
//     setIsAddActive(true);
//     onAddPlayer();
//     setTimeout(() => setIsAddActive(false), 300);
//   };

//   return (
//     <div className="flex justify-between items-center p-4">
//       <div className="flex items-center space-x-4">
//         <ArrowLeft className="cursor-pointer" />
//         <div className="relative">
//           <input
//             type="text"
//             placeholder="Search"
//             className="pl-10 pr-4 py-2 border rounded-md"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//       </div>
//       <button
//         className={`px-4 py-2 rounded-md ${
//           isAddActive ? 'bg-orange-500' : 'bg-blue-500'
//         } text-white flex items-center`}
//         onClick={handleAddClick}
//       >
//         <Plus className="mr-2" /> Add Player
//       </button>
//     </div>
//   );
// };

// export default Header;





"use client"; // Ensure you have this line at the top

import { useState } from 'react';
import { ArrowLeft, Search, Plus } from 'lucide-react';

const Header = ({ onAddPlayer }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddClick = () => {
    onAddPlayer();
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 ">
      {/* Left Arrow Icon Above Search Button */}
      <div className="flex items-center mb-2 md:mb-0" style={{ marginBottom: '100px' }}>
        <ArrowLeft className="h-6 w-6 text-gray-600 ml-[150px]" />
      </div>

      <div className="relative w-full md:w-1/2 mb-4 md:mb-0 mt-[100px]" style={{ marginLeft: '-550px' }}>
        <input
          type="text"
          placeholder="Search"
          className="w-[500px] pl-10 pr-4 py-2 border rounded-xl border-black ml-[100px]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 ml-[100px]" />
      </div>

      <div style={{ marginBottom: '100px' }}>
        <button
          onClick={handleAddClick}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 mr-[200px] mt-[50px]"
        >
          <Plus className="h-5 w-5 mr-2" />
          Add Player


           {/* <li>
//             <Link href="/teams">Go to Teams</Link>
//           </li> */}
        </button>
      </div>
    </div>
  );
};

export default Header;









// "use client"; // Ensure you have this line at the top

// import { useState } from 'react';
// import { ArrowLeft, Search, Plus } from 'lucide-react';

// const Header = ({ onAddPlayer }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleAddClick = () => {
//     onAddPlayer(); // Call the function passed via props
//   };

//   return (
//     <div className="flex flex-col md:flex-row justify-between items-center mb-4 absolute w-full">
//       {/* Left Arrow Icon Above Search Button */}
//       <div className="flex items-center mb-2 md:mb-0" style={{ marginBottom: '100px' }}>
//         <ArrowLeft className="h-6 w-6 text-gray-600 ml-4 md:ml-[150px]" />
//       </div>

//       <div className="relative w-full md:w-1/2 mb-4 md:mb-0 mt-[100px]">
//         <input
//           type="text"
//           placeholder="Search"
//           className="w-full md:w-[500px] pl-10 pr-4 py-2 border rounded-xl border-black mx-auto md:ml-[100px]"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//       </div>

//       <div className="mb-4 md:mb-0" style={{ marginBottom: '100px' }}>
//         <button
//           onClick={handleAddClick}
//           className="bg-yellow-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-yellow-600 mr-0 md:mr-[200px] mt-[50px]"
//         >
//           <Plus className="h-5 w-5 mr-2" />
//           Add Player
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Header;



