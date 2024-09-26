
"use client"; 
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; 
import Image from 'next/image'; 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" mt-[80px] px-4  ml-[10px]  bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 ">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
            
              <Image 
                src="/Images/spotus-loggo.png" 
                alt="Logo"
                width={222} 
                height={63}
                style={{ marginLeft: '-30px' }} 
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-32 text-[36px] ml-[550px] absolute">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/teams" className="text-blue-600 font-semibold">Teams</Link>
            <Link href="/players" className="text-gray-700 hover:text-gray-900">Players</Link>
            <Link href="/videos" className="text-gray-700 hover:text-gray-900">Videos</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="/home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</Link>
          <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-700 hover:bg-gray-50">Teams</Link>
          <Link href="/players" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Players</Link>
          <Link href="/videos" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Videos</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







