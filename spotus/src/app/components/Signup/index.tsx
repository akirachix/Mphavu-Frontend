"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye, EyeOff } from 'lucide-react';
import { Josefin_Sans } from 'next/font/google';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setShowPassword(!showPassword);
    } else {
      setShowConfirmPassword(!showConfirmPassword);
    }
  };

  const validationSchema = Yup.object({
    academyName: Yup.string().required('Academy Name is required'),
    location: Yup.string().required('Location is required'),
    email: Yup.string().email('Invalid email format').required('Academy Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      academyName: '',
      location: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Form submitted', values);
    },
  });

  return (
    <div className={`flex h-screen bg-gray-100 ml-32 mr-14 ${josefin.className}`}>
      <div className="2xl:w-1/2 relative ml-[60px]">
        <Image
          src="/images/image (13).png"
          alt="Soccer field with players"
          height={460}
          width={560}
          className="object-cover 2xl:ml-14 xl:ml-[-90px] lg:ml-[-60px] 2xl:mt-24 xl:mt-12 lg:mt-16"
        />
      </div>

      <div className="flex items-center justify-center mr-[100px] lg:ml-[-90px]">
        <div className="p-0 rounded-none font-josefin">
          <h1 className="2xl:text-[40px] xl:text-[35px] 2xl:text-40 lg:text-[25px] font-bold text-[#177BBD] 2xl:mt-[-62px] xl:mt-[-100px] lg:mt-[10px] 2xl:mb-8 xl:mb-4 lg:mb-4 2xl:ml-12 lg:ml-40">Welcome to Spot Us</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label htmlFor="academyName" className="block text-4 font-medium text-black 2xl:ml-[-2px] lg:ml-32 mb-1">Academy Name</label>
              <input
                type="text"
                id="academyName"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.academyName}
                className={`mt-0 block 2xl:w-[600px] lg:w-[400px] 2xl:h-[55px] rounded-[15px] border ${formik.touched.academyName && formik.errors.academyName ? 'border-red-500' : 'border-black'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 2xl:h-[50px] lg:h-[40px] py-2 px-3 2xl:ml-[-24px] lg:ml-[100px]`}
              />
              {formik.touched.academyName && formik.errors.academyName && <p className="text-[#EC0000] text-sm h-4 ml-4">{formik.errors.academyName}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="location" className="block text-4 font-medium text-black ml-4 2xl:mb-1 lg:ml-32 lg:mt-[-28px] 2xl:mt-0 xl:mt-4 lg:mt-[-12px] 2xl:ml-[-2px]">Location</label>
              <input
                type="text"
                id="location"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
                className={`mt-0 block 2xl:w-[600px] w-[550px] 2xl:h-[55px] rounded-[15px] border ${formik.touched.location && formik.errors.location ? 'border-red-500' : 'border-black'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3 lg:ml-[100px] lg:h-[40px] lg:w-[400px]  2xl:ml-[-24px]`}
              />
              {formik.touched.location && formik.errors.location && <p className="text-[#EC0000] text-sm h-4 ml-4">{formik.errors.location}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-4 font-medium text-black ml-4 mb-1 lg:text-2 lg:ml-32 lg:mt-[-28px] 2xl:mt-0 xl:mt-4 lg:mt-[-12px] 2xl:ml-[-2px]">Academy Email</label>
              <input
                type="email"
                id="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`mt-0 block 2xl:w-[600px] w-[550px] 2xl:h-[55px] rounded-[15px] border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-black'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3 lg:ml-[100px] lg:h-[40px] lg:w-[400px]  2xl:ml-[-24px]`}
              />
              {formik.touched.email && formik.errors.email && <p className="text-[#EC0000] text-sm h-4 ml-4">{formik.errors.email}</p>}
            </div>
            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-4 font-medium text-black ml-4 mb-1 lg:ml-32 lg:mt-[-28px] 2xl:mt-0 xl:mt-4 lg:mt-[-12px] 2xl:ml-[-2px]">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`mt-0 block 2xl:w-[600px] w-[550px] 2xl:h-[55px] rounded-[15px] border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-black'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 pl-3 pr-12 lg:ml-[100px] lg:h-[40px] lg:w-[400px] 2xl:ml-[-24px]`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-10 text-black font-bold"
                  onClick={() => togglePasswordVisibility('password')}
                >
                  {showPassword ? <EyeOff className="h-6 w-6" strokeWidth={2} /> : <Eye className="h-6 w-6" strokeWidth={2} />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && <p className="text-[#EC0000] text-sm h-4 ml-4">{formik.errors.password}</p>}
            </div>
            <div className="mb-6 relative">
              <label htmlFor="confirmPassword" className="block text-4 font-medium text-black ml-4 mb-1 lg:ml-32 lg:mt-[-28px] 2xl:mt-0 xl:mt-4 lg:mt-[-12px] 2xl:ml-[-2px]">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  id="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  className={`mt-0 block 2xl:w-[600px] w-[550px] 2xl:h-[55px] rounded-[15px] border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-black'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 pl-3 pr-12 lg:ml-[100px] lg:h-[40px] lg:w-[400px] 2xl:ml-[-24px]`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-10 text-black font-bold"
                  onClick={() => togglePasswordVisibility('confirm')}
                >
                  {showConfirmPassword ? <EyeOff className="h-6 w-6" strokeWidth={2} /> : <Eye className="h-6 w-6" strokeWidth={2} />}
                </button>
              </div>
              {formik.touched.confirmPassword && formik.errors.confirmPassword && <p className="text-[#EC0000] text-sm h-4 ml-4">{formik.errors.confirmPassword}</p>}
            </div>
            <button type="submit" className="2xl:w-[220px] 2xl:h-[60px] lg:w-[160px] lg:h-[45px] 2xl:ml-[180px] lg:ml-48 bg-[#46BC14] text-white 2xl:text-[26px] lg:text-[20px] font-bold rounded-[15px] py-2 px-4 hover:bg-[#E99700] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 2xl:mt-4 2xl:mb-2 xl:mt-[-4px] xl:mb-[-12px] lg:mb-[-74px]">
              Register
            </button>
          </form>
          <p className="2xl:mt-4 lg:mt-6 2xl:ml-[140px] lg:ml-36 2xl:text-[20px] lg:text-[18px]">Already have an account? <Link href="/login" className="text-[#177BBD] font-bold xl:mb-8 2xl:text-[20px]">Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
