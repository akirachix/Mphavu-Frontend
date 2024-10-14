"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [academyName, setAcademyName] = useState('');
  const [errors, setErrors] = useState({
    academyName: '',
    password: '',
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const newErrors = {
      academyName: !academyName ? 'Academy Name is required' : '',
      password: !password ? 'Password is required' : '',
    };
    setErrors(newErrors);
    if (!newErrors.academyName && !newErrors.password) {
      // Proceed with login logic
      console.log('Logging in...');
    }
  };

  const handleChange = (field, value) => {
    if (field === 'academyName') setAcademyName(value);
    if (field === 'password') setPassword(value);
    setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <div className="flex h-screen bg-gray-100 ml-24">
      <div className="w-1/2 relative ml-[60px]">
        <Image
          src="/fieldimage.png"
          alt="Soccer field with players"
          objectFit="cover"
          height={800}
          width={600}
          className="object-cover ml-20 mt-16"
        />
      </div>
      <div className="flex items-center justify-center mr-[100px]">
        <div className="p-0 rounded-none">
          <h1 className="text-[56px] font-bold text-blue-600 mt-[-192px] mb-4">Welcome Back to Spot Us</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="academyName" className="block text-4 font-medium text-black ml-4 mb-1">Academy Name</label>
              <input
                type="text"
                id="academyName"
                value={academyName}
                onChange={(e) => handleChange('academyName', e.target.value)}
                className={`mt-0 block w-[600px] rounded-[20px] border ${errors.academyName ? 'border-red-500' : 'border-gray-600'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3`}
              />
              <p className="text-red-500 text-sm h-4 ml-4">{errors.academyName}</p>
            </div>

            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-4 font-medium text-black ml-4 mb-1">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                onChange={() => handleChange('password')}
                className={`mt-0 block w-[600px] rounded-[20px] border ${errors.password ? 'border-red-500' : 'border-gray-600'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3`}
              />
              <p className="text-red-500 text-sm h-4 ml-4">{errors.password}</p>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6"
                onClick={() => togglePasswordVisibility('password')}
              >
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-600" /> : <Eye className="h-5 w-5 text-black mr-[75px]" />}
              </button>
            </div>

            <div className="mb-4 ml-4">
            <span className="text-[16px] text-black ">Forgot password? </span>
             <Link href="#" className="text-blue-600 hover:underline text-[16px]">Reset</Link>
            </div>

            <button type="submit" className="w-[200px] h-[50px] ml-[240px] bg-green-500 text-white font-bold rounded-[20px] py-2 px-4 hover:bg-[#E99700] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4 text-[22px]">
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-4 text-black">OR</p>
          </div>
          <button
            className="mt-4 ml-40 w-[350px] py-2 px-4 border border-black rounded-[20px] shadow-sm text-4 font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <div className="flex items-center justify-center">
              <img src="/google-removebg-preview.png" alt="Google" className="w-[30px] h-[30px] mr-2" />
              Sign in with Google
            </div>
          </button>
          <div className="mt-4 text-center">
            <p className="text-[16px] text-black mt-8">
              Don't have an account? <Link href="/register" className="text-blue-600 hover:underline font-bold text-[16px]">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
