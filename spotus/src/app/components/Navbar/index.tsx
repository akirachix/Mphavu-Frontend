"use client"; 
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ['latin'] });

interface NavbarProps {
    onSelectSection: (section: string) => void; 
}
const Navbar: React.FC<NavbarProps> = ({ onSelectSection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('/teams'); // Default active link

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
const handleLinkClick = (link: string) => {
        setActiveLink(link);
        onSelectSection(link); 
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
                            src="/spotus-loggo.png"
                            alt="Logo"
                            width={150}
                            height={35}
                            className="w-auto h-auto sm:w-[20px] md:w-[140px] lg:w-[150px] xl:w-[230px] mx-3 lg:mx-5 xl:mx-6" 
                        />
                    </Link>
                </div>
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
                                    ? 'text-blue-500'  
                                    : 'text-black'      
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

