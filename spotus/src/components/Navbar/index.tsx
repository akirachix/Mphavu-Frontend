
// "use client"; 
// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react'; 
// import Image from 'next/image'; 
// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className=" mt-[80px] px-4  ml-[10px]  bg-white ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 ">
//           <div className="flex items-center">
//             <Link href="/" className="flex-shrink-0 flex items-center">
            
//               <Image 
//                 src="/Images/spotus-loggo.png" 
//                 alt="Logo"
//                 width={222} 
//                 height={63}
//                 style={{ marginLeft: '-30px' }} 
//               />
//             </Link>
//           </div>
//           <div className="hidden md:flex items-center space-x-32 text-[36px] ml-[550px] absolute">
//             <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
//             <Link href="/teams" className="text-blue-600 font-semibold">Teams</Link>
//             <Link href="/players" className="text-gray-700 hover:text-gray-900">Players</Link>
//             <Link href="/videos" className="text-gray-700 hover:text-gray-900">Videos</Link>
//           </div>
//           <div className="md:hidden flex items-center">
//             <button
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               {isMenuOpen ? (
//                 <X className="block h-6 w-6" aria-hidden="true" />
//               ) : (
//                 <Menu className="block h-6 w-6" aria-hidden="true" />
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link href="/home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
//           <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-50">Teams</Link>
//           <Link href="/players" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Players</Link>
//           <Link href="/videos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Videos</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;







// "use client"; 
// import { useState } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react'; 
// import Image from 'next/image'; 

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <nav className="mt-[80px] px-4 bg-white shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center h-16">
//         <div className="flex items-center">
//           <Link href="/" className="flex-shrink-0 flex items-center">
//             <Image 
//               src="/Images/spotus-loggo.png" 
//               alt="Logo"
//               width={222} 
//               height={63}
//             />
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//          <div className="hidden md:flex items-center space-x-32 text-[36px]">
//             <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
//             <Link href="/teams" className="text-blue-600 font-semibold">Teams</Link>
//             <Link href="/players" className="text-gray-700 hover:text-gray-900">Players</Link>
//             <Link href="/videos" className="text-gray-700 hover:text-gray-900">Videos</Link>
//           </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="p-2 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//           >
//             {isMenuOpen ? (
//               <X className="block h-6 w-6" aria-hidden="true" />
//             ) : (
//               <Menu className="block h-6 w-6" aria-hidden="true" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
//         <div className="px-2 pt-2 pb-3 space-y-1">
//           <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
//           <Link href="/teams" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-50">Teams</Link>
//           <Link href="/players" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Players</Link>
//           <Link href="/videos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Videos</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// "use client"; 
// import Link from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] });

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('#home');

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} absolute mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-bold font-josefinsans">
//                     <Link href="#home">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={230} 
//                             height={74} 
//                             className="w-[100px] h-[auto] md:w-[150px] lg:w-[150px] lg:h-[100px]xl:w-[250px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden text-[white]">
//                         <button onClick={toggleMenu} aria-label="Open navigation">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                         <li key={index} className={`font-bold text-[20px] font-josefinSans`}>
//                             <Link
//                                 href={`#${link}`}
//                                 onClick={() => handleLinkClick(`#${link}`)}
//                                 className={`${
//                                     activeLink === `#${link}`
//                                     ? 'text-green-500' 
//                                     : 'text-white' 
//                                 } hover:text-green-700`} 
//                             >
//                                 {link.toUpperCase()}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                                 <li key={index} className={`font-bold text-[20px]`}>
//                                     <Link
//                                         href={`#${link}`}
//                                         onClick={() => handleLinkClick(`#${link}`)}
//                                         className={`${
//                                             activeLink === `#${link}`
//                                             ? 'text-green-500' 
//                                             : 'text-black' 
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.toUpperCase()}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;






// "use client"; 
// import Link from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] });

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('#teams'); // Set default active link to teams

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} absolute mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-bold font-josefinsans">
//                     <Link href="#home">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={230} 
//                             height={74} 
//                             className="w-[100px] h-[auto] md:w-[150px] lg:w-[150px] lg:h-[100px]xl:w-[250px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden text-[white]">
//                         <button onClick={toggleMenu} aria-label="Open navigation">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                         <li key={index} className={`font-bold text-[36px] font-josefinSans`}>
//                             <Link
//                                 href={`#${link}`}
//                                 onClick={() => handleLinkClick(`#${link}`)}
//                                 className={`${
//                                     activeLink === `#${link}`
//                                     ? 'text-blue-500'  // Change active link color to blue
//                                     : 'text-black'      // Set all other links to black
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.charAt(0).toUpperCase() + link.slice(1)} {/* Convert to title case */}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                                 <li key={index} className={`font-bold text-[36px]`}>
//                                     <Link
//                                         href={`#${link}`}
//                                         onClick={() => handleLinkClick(`#${link}`)}
//                                         className={`${
//                                             activeLink === `#${link}`
//                                             ? 'text-blue-500'  // Change active link color to blue
//                                             : 'text-black'      // Set all other links to black
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.charAt(0).toUpperCase() + link.slice(1)} {/* Convert to title case */}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




// "use client"; 
// import Link from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] });

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('#teams'); // Default active link set to teams

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} absolute mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//                     <Link href="#home">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={230} 
//                             height={74} 
//                             className="w-[100px] h-[auto] md:w-[150px] lg:w-[150px] lg:h-[100px] xl:w-[250px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden text-[white]">
//                         <button onClick={toggleMenu} aria-label="Open navigation">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                         <li key={index} className="text-[36px]">
//                             <Link
//                                 href={`#${link}`}
//                                 onClick={() => handleLinkClick(`#${link}`)}
//                                 className={`${
//                                     activeLink === `#${link}`
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.charAt(0).toUpperCase() + link.slice(1)} {/* Title case */}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                                 <li key={index} className="text-[36px]">
//                                     <Link
//                                         href={`#${link}`}
//                                         onClick={() => handleLinkClick(`#${link}`)}
//                                         className={`${
//                                             activeLink === `#${link}`
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.charAt(0).toUpperCase() + link.slice(1)} {/* Title case */}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;





// "use client"; 
// import Link from "next/link";
// import { useState } from "react";
// import { FaBars, FaTimes } from 'react-icons/fa';
// import Image from "next/image";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ['latin'] });

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('#teams'); // Default active link set to teams

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} absolute mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//                     <Link href="#home">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={230} 
//                             height={74} 
//                             className="w-[100px] h-[auto] md:w-[150px] lg:w-[150px] lg:h-[100px] xl:w-[250px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden">
//                         <button onClick={toggleMenu} aria-label="Open navigation" className="text-black">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                         <li key={index} className="text-[36px]">
//                             <Link
//                                 href={`#${link}`}
//                                 onClick={() => handleLinkClick(`#${link}`)}
//                                 className={`${
//                                     activeLink === `#${link}`
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.charAt(0).toUpperCase() + link.slice(1)} {/* Title case */}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                                 <li key={index} className="text-[36px]">
//                                     <Link
//                                         href={`#${link}`}
//                                         onClick={() => handleLinkClick(`#${link}`)}
//                                         className={`${
//                                             activeLink === `#${link}`
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.charAt(0).toUpperCase() + link.slice(1)} {/* Title case */}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




"use client"; 
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { Inter } from "next/font/google";



// const inter = Inter({ subsets: ['latin'] });

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('#teams'); // Default active link set to teams

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} relative mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//                     <Link href="#home">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={180} 
//                             height={45} 
//                             className="w-[100px] h-[auto] md:w-[150px] lg:w-[150px] lg:h-[100px] xl:w-[250px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden">
//                         <button onClick={toggleMenu} aria-label="Open navigation" className="text-black">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                         <li key={index} className="text-[36px]">
//                             <Link
//                                 href={`#${link}`}
//                                 onClick={() => handleLinkClick(`#${link}`)}
//                                 className={`${
//                                     activeLink === `#${link}`
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.charAt(0).toUpperCase() + link.slice(1)} {/* Title case */}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {['home', 'teams', 'players', 'videos'].map((link, index) => (
//                                 <li key={index} className="text-[36px]">
//                                     <Link
//                                         href={`#${link}`}
//                                         onClick={() => handleLinkClick(`#${link}`)}
//                                         className={`${
//                                             activeLink === `#${link}`
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.charAt(0).toUpperCase() + link.slice(1)} {/* Title case */}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;

// const inter = Inter({ subsets: ['latin'] });

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('/teams'); // Default active link

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} relative mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//                     {/* <Link href="/">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={50} 
//                             height={45} 
//                             className="w-[auto] h-[auto] md:w-[150px] lg:w-[150px] lg:h-[100px] xl:w-[250px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link> */}

// <Link href="/">
//     <Image
//         src="/Images/spotus-loggo.png"
//         alt="Logo"
//         width={150} // Use the actual width of the image
//         height={35} // Use the actual height of the image
//         className="w-auto h-auto md:w-[100px] lg:w-[150px] xl:w-[230px] mx-3 lg:mx-5 xl:mx-6 sm:w-[50px]" 
//     />
// </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden">
//                         <button onClick={toggleMenu} aria-label="Open navigation" className="text-black">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {[
//                         { name: 'Home', href: '/' },
//                         { name: 'Teams', href: '/teams' },
//                         { name: 'Players', href: '/players' },
//                         { name: 'Videos', href: '/videos' }
//                     ].map((link, index) => (
//                         <li key={index} className="text-[36px]">
//                             <Link
//                                 href={link.href}
//                                 onClick={() => handleLinkClick(link.href)}
//                                 className={`${
//                                     activeLink === link.href
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.name} {/* Title case */}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {[
//                                 { name: 'Home', href: '/' },
//                                 { name: 'Teams', href: '/teams' },
//                                 { name: 'Players', href: '/players' },
//                                 { name: 'Videos', href: '/videos' }
//                             ].map((link, index) => (
//                                 <li key={index} className="text-[36px]">
//                                     <Link
//                                         href={link.href}
//                                         onClick={() => handleLinkClick(link.href)}
//                                         className={`${
//                                             activeLink === link.href
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.name} {/* Title case */}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




// const inter = Inter({ subsets: ['latin'] });

// // Define the props interface
// interface NavbarProps {
//     onSelectSection: (section: string) => void; // Accept the onSelectSection prop
// }

// const Navbar: React.FC<NavbarProps> = ({ onSelectSection }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('/teams'); // Default active link

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         onSelectSection(link); // Call the onSelectSection when a link is clicked
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} relative mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//     <Link href="/">
//         <Image
//             src="/Images/spotus-loggo.png"
//             alt="Logo"
//             width={150} // Use the actual width of the image
//             height={35} // Use the actual height of the image
//             className="w-auto h-auto sm:w-[20px] md:w-[100px] lg:w-[150px] xl:w-[230px] mx-3 lg:mx-5 xl:mx-6" 
//         />
//     </Link>
// </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden">
//                         <button onClick={toggleMenu} aria-label="Open navigation" className="text-black">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {[
//                         { name: 'Home', href: '/' },
//                         { name: 'Teams', href: '/teams' },
//                         { name: 'Players', href: '/players' },
//                         { name: 'Videos', href: '/videos' }
//                     ].map((link, index) => (
//                         <li key={index} className="text-[36px]">
//                             <Link
//                                 href={link.href}
//                                 onClick={() => handleLinkClick(link.href)} // Use handleLinkClick
//                                 className={`${
//                                     activeLink === link.href
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.name} {/* Title case */}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {[
//                                 { name: 'Home', href: '/' },
//                                 { name: 'Teams', href: '/teams' },
//                                 { name: 'Players', href: '/players' },
//                                 { name: 'Videos', href: '/videos' }
//                             ].map((link, index) => (
//                                 <li key={index} className="text-[36px]">
//                                     <Link
//                                         href={link.href}
//                                         onClick={() => handleLinkClick(link.href)}
//                                         className={`${
//                                             activeLink === link.href
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.name} {/* Title case */}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;



// const inter = Inter({ subsets: ['latin'] });

// // Define the props interface
// interface NavbarProps {
//     onSelectSection: (section: string) => void; // Accept the onSelectSection prop
// }

// const Navbar: React.FC<NavbarProps> = ({ onSelectSection }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('/teams'); // Default active link

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         onSelectSection(link); // Call the onSelectSection when a link is clicked
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} relative mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//                     <Link href="/">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={150}
//                             height={35}
//                             className="w-auto h-auto sm:w-[20px] md:w-[100px] lg:w-[150px] xl:w-[230px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden">
//                         <button onClick={toggleMenu} aria-label="Open navigation" className="text-black">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden lg:flex xl:flex lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {[
//                         { name: 'Home', href: '/' },
//                         { name: 'Teams', href: '/teams' },
//                         { name: 'Players', href: '/players' },
//                         { name: 'Videos', href: '/videos' }
//                     ].map((link, index) => (
//                         <li key={index} className="text-[28px] md:text-[32px] lg:text-[36px]">
//                             <Link
//                                 href={link.href}
//                                 onClick={() => handleLinkClick(link.href)}
//                                 className={`${
//                                     activeLink === link.href
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {[
//                                 { name: 'Home', href: '/' },
//                                 { name: 'Teams', href: '/teams' },
//                                 { name: 'Players', href: '/players' },
//                                 { name: 'Videos', href: '/videos' }
//                             ].map((link, index) => (
//                                 <li key={index} className="text-[28px] md:text-[32px] lg:text-[36px]">
//                                     <Link
//                                         href={link.href}
//                                         onClick={() => handleLinkClick(link.href)}
//                                         className={`${
//                                             activeLink === link.href
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;


// const inter = Inter({ subsets: ['latin'] });

// // Define the props interface
// interface NavbarProps {
//     onSelectSection: (section: string) => void; // Accept the onSelectSection prop
// }

// const Navbar: React.FC<NavbarProps> = ({ onSelectSection }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('/teams'); // Default active link

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         onSelectSection(link); // Call the onSelectSection when a link is clicked
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} relative mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//                     <Link href="/">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={150}
//                             height={35}
//                             className="w-auto h-auto sm:w-[20px] md:w-[100px] lg:w-[150px] xl:w-[230px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {!isOpen && (
//                     <div className="block lg:hidden xl:hidden">
//                         <button onClick={toggleMenu} aria-label="Open navigation" className="text-black">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden md:flex lg:flex xl:flex md:space-x-8 lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {[
//                         { name: 'Home', href: '/' },
//                         { name: 'Teams', href: '/teams' },
//                         { name: 'Players', href: '/players' },
//                         { name: 'Videos', href: '/videos' }
//                     ].map((link, index) => (
//                         <li key={index} className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
//                             <Link
//                                 href={link.href}
//                                 onClick={() => handleLinkClick(link.href)}
//                                 className={`${
//                                     activeLink === link.href
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {[
//                                 { name: 'Home', href: '/' },
//                                 { name: 'Teams', href: '/teams' },
//                                 { name: 'Players', href: '/players' },
//                                 { name: 'Videos', href: '/videos' }
//                             ].map((link, index) => (
//                                 <li key={index} className="text-[28px] md:text-[32px] lg:text-[36px]">
//                                     <Link
//                                         href={link.href}
//                                         onClick={() => handleLinkClick(link.href)}
//                                         className={`${
//                                             activeLink === link.href
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;




const inter = Inter({ subsets: ['latin'] });

// Define the props interface
interface NavbarProps {
    onSelectSection: (section: string) => void; // Accept the onSelectSection prop
}

const Navbar: React.FC<NavbarProps> = ({ onSelectSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/teams'); // Default active link

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = (link: string) => {
        setActiveLink(link);
        onSelectSection(link); // Call the onSelectSection when a link is clicked
        if (isOpen) {
            toggleMenu(); 
        }
    };

    return (
        <nav className={`${inter.className} relative mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
            <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
                <div className="font-josefinsans">
                    <Link href="/">
                        <Image
                            src="/Images/spotus-loggo.png"
                            alt="Logo"
                            width={150}
                            height={35}
                            className="w-auto h-auto sm:w-[20px] md:w-[140px] lg:w-[150px] xl:w-[230px] mx-3 lg:mx-5 xl:mx-6" 
                        />
                    </Link>
                </div>
                {/* Hamburger menu button is hidden on medium screens and up */}
                {!isOpen && (
                    <div className="block md:hidden">
                        <button onClick={toggleMenu} aria-label="Open navigation" className="text-black mr-[20px] mt-[18px]">
                            <FaBars size={30} />
                        </button>
                    </div>
                )}
                <ul className="hidden md:flex lg:flex xl:flex md:space-x-8 lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
                    {[
                        { name: 'Home', href: '/' },
                        { name: 'Teams', href: '/teams' },
                        { name: 'Players', href: '/players' },
                        { name: 'Videos', href: '/videos' }
                    ].map((link, index) => (
                        <li key={index} className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
                            <Link
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={`${
                                    activeLink === link.href
                                    ? 'text-blue-500'  // Active link color
                                    : 'text-black'      // Other links color
                                } hover:text-gray-700`} 
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                {isOpen && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 md:hidden xl:hidden">
                        <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
                            {[
                                { name: 'Home', href: '/' },
                                { name: 'Teams', href: '/teams' },
                                { name: 'Players', href: '/players' },
                                { name: 'Videos', href: '/videos' }
                            ].map((link, index) => (
                                <li key={index} className="text-[28px] md:text-[32px] lg:text-[36px]">
                                    <Link
                                        href={link.href}
                                        onClick={() => handleLinkClick(link.href)}
                                        className={`${
                                            activeLink === link.href
                                            ? 'text-blue-500'  // Active link color
                                            : 'text-black'      // Other links color
                                        } hover:text-gray-700`} 
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
                            <FaTimes size={30} />
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;


// const inter = Inter({ subsets: ['latin'] });

// // Define the props interface
// interface NavbarProps {
//     onSelectSection: (section: string) => void; // Accept the onSelectSection prop
// }

// const Navbar: React.FC<NavbarProps> = ({ onSelectSection }) => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeLink, setActiveLink] = useState('/teams'); // Default active link

//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLinkClick = (link: string) => {
//         setActiveLink(link);
//         onSelectSection(link); // Call the onSelectSection when a link is clicked
//         if (isOpen) {
//             toggleMenu(); 
//         }
//     };

//     return (
//         <nav className={`${inter.className} relative mt-[30px] left-0 w-full bg-transparent text-black z-50`}>
//             <div className="max-w-8xl mx-auto flex justify-between items-center py-3 px-2 lg:py-4 lg:px-3 xl:px-5">
//                 <div className="font-josefinsans">
//                     <Link href="/">
//                         <Image
//                             src="/Images/spotus-loggo.png"
//                             alt="Logo"
//                             width={150}
//                             height={35}
//                             className="w-auto h-auto sm:w-[20px] md:w-[120px] lg:w-[150px] xl:w-[230px] mx-3 lg:mx-5 xl:mx-6" 
//                         />
//                     </Link>
//                 </div>
//                 {/* Hamburger menu button is hidden on medium screens and up */}
//                 {!isOpen && (
//                     <div className="block md:hidden">
//                         <button onClick={toggleMenu} aria-label="Open navigation" className="text-black">
//                             <FaBars size={30} />
//                         </button>
//                     </div>
//                 )}
//                 <ul className="hidden md:flex lg:flex xl:flex md:space-x-8 lg:space-x-10 xl:space-x-16 mr-12 font-josefinsans whitespace-nowrap">
//                     {[
//                         { name: 'Home', href: '/' },
//                         { name: 'Teams', href: '/teams' },
//                         { name: 'Players', href: '/players' },
//                         { name: 'Videos', href: '/videos' }
//                     ].map((link, index) => (
//                         <li key={index} className="text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px]">
//                             <Link
//                                 href={link.href}
//                                 onClick={() => handleLinkClick(link.href)}
//                                 className={`${
//                                     activeLink === link.href
//                                     ? 'text-blue-500'  // Active link color
//                                     : 'text-black'      // Other links color
//                                 } hover:text-gray-700`} 
//                             >
//                                 {link.name}
//                             </Link>
//                         </li>
//                     ))}
//                 </ul>
//                 {isOpen && (
//                     <div className="fixed top-0 left-0 w-full h-screen bg-green-100 bg-opacity-90 z-40 md:hidden xl:hidden">
//                         <ul className="flex flex-col items-center justify-center h-full space-y-4 pl-8 pr-8">
//                             {[
//                                 { name: 'Home', href: '/' },
//                                 { name: 'Teams', href: '/teams' },
//                                 { name: 'Players', href: '/players' },
//                                 { name: 'Videos', href: '/videos' }
//                             ].map((link, index) => (
//                                 <li key={index} className="text-[28px] md:text-[32px] lg:text-[36px]">
//                                     <Link
//                                         href={link.href}
//                                         onClick={() => handleLinkClick(link.href)}
//                                         className={`${
//                                             activeLink === link.href
//                                             ? 'text-blue-500'  // Active link color
//                                             : 'text-black'      // Other links color
//                                         } hover:text-gray-700`} 
//                                     >
//                                         {link.name}
//                                     </Link>
//                                 </li>
//                             ))}
//                         </ul>
//                         <button className="absolute top-4 right-4 z-50 text-black" onClick={toggleMenu} aria-label="Close navigation">
//                             <FaTimes size={30} />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
