"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [errors, setErrors] = useState({
    academyName: '',
    location: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const handleConfirmPassword = (e) => {
    const password = document.getElementById('password').value;
    setPasswordMatch(e.target.value === password);
  };

  const handleChange = (field) => {
    const value = document.getElementById(field).value;
    if (value) {
      setErrors((prevErrors) => ({ ...prevErrors, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      academyName: '',
      location: '',
      email: '',
      password: '',
      confirmPassword: '',
    };

    if (!document.getElementById('academyName').value) {
      newErrors.academyName = 'Academy Name is required';
    }
    if (!document.getElementById('location').value) {
      newErrors.location = 'Location is required';
    }
    if (!document.getElementById('email').value) {
      newErrors.email = 'Academy Email is required';
    }
    if (!document.getElementById('password').value) {
      newErrors.password = 'Password is required';
    }
    if (!document.getElementById('confirmPassword').value) {
      newErrors.confirmPassword = 'Confirm Password is required';
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => !error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form logic here
      console.log("Form submitted");
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 ml-24">
    <div className="w-1/2 relative ml-[60px]">
  <Image
    src="/fieldimage.png"
    alt="Soccer field with players"
    height={824} // Desired height
    width={677} // Desired width
    className="object-cover ml-20 mt-4" // Tailwind classes for margins
  />
</div>

      <div className="flex items-center justify-center mr-[100px]">
        <div className="p-0 rounded-none">
          <h1 className="text-[56px] font-bold text-blue-600 mt-[-82px] mb-4">Welcome to Spot Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="academyName" className="block text-4 font-medium text-gray-700 ml-4 mb-1">Academy Name</label>
              <input
                type="text"
                id="academyName"
                onChange={() => handleChange('academyName')}
                className={`mt-0 block w-[600px] rounded-[20px] border ${errors.academyName ? 'border-red-500' : 'border-gray-600'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3`}
              />
              <p className="text-red-500 text-sm h-4 ml-4">{errors.academyName}</p>
            </div>
            <div className="mb-6">
              <label htmlFor="location" className="block text-4 font-medium text-gray-700 ml-4 mb-1">Location</label>
              <input
                type="text"
                id="location"
                onChange={() => handleChange('location')}
                className={`mt-0 block w-[600px] rounded-[20px] border ${errors.location ? 'border-red-500' : 'border-gray-600'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3`}
              />
              <p className="text-red-500 text-sm h-4 ml-4">{errors.location}</p>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-4 font-medium text-gray-700 ml-4 mb-1">Academy Email</label>
              <input
                type="email"
                id="email"
                onChange={() => handleChange('email')}
                className={`mt-0 block w-[600px] rounded-[20px] border ${errors.email ? 'border-red-500' : 'border-gray-600'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3`}
              />
              <p className="text-red-500 text-sm h-4 ml-4">{errors.email}</p>
            </div>

            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-4 font-medium text-gray-700 ml-4 mb-1">Password</label>
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
                {showPassword ? <EyeOff className="h-5 w-5 text-gray-600" /> : <Eye className="h-5 w-5 text-gray-600" />}
              </button>
            </div>

            <div className="mb-6 relative">
              <label htmlFor="confirmPassword" className="block text-4 font-medium text-gray-700 ml-4 mb-1">Confirm Password</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                onChange={(e) => {
                  handleChange('confirmPassword');
                  handleConfirmPassword(e);
                }}
                className={`mt-0 block w-[600px] rounded-[20px] border ${passwordMatch ? (errors.confirmPassword ? 'border-red-500' : 'border-gray-600') : 'border-red-500'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3`}
              />
              <p className="text-red-500 text-sm h-4 ml-4">{errors.confirmPassword}</p>
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 mt-6"
                onClick={() => togglePasswordVisibility('confirm')}
              >
                {showConfirmPassword ? <EyeOff className="h-5 w-5 text-gray-600" /> : <Eye className="h-5 w-5 text-gray-600" />}
              </button>
            </div>
            {!passwordMatch && (
              <p className="text-red-500 text-sm mb-4">Passwords do not match. Please try again.</p>
            )}
            <button type="submit" className="w-[200px] h-[50px] ml-[200px] bg-green-500 text-white font-bold rounded-[20px] py-2 px-4 hover:bg-[#E99700] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 mt-4 text-[22px]">
              Register
            </button>
          </form>
          <p className="mt-4 text-center text-4 text-gray-600">
            Already have an account? <Link href="/login" className="text-blue-600 hover:underline font-bold">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;

