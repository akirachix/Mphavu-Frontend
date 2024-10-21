"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';
import { Josefin_Sans } from 'next/font/google';
import * as Yup from 'yup';
import { useFormik } from 'formik';

const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    academyName: Yup.string().required('Academy Name is required'),
    password: Yup.string().required('Password is required'),
  });

  const formik = useFormik({
    initialValues: {
      academyName: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      console.log('Logging in...', values);
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Ensure handleGoogleLogin is defined
  const handleGoogleLogin = async () => {
    try {
      // Example login function; replace with your actual logic
      console.log('Google login initiated for:', formik.values.academyName);
      // You can call your login logic here if necessary
      await login(formik.values.academyName, formik.values.password); // Define this function as needed
    } catch (error) {
      console.error('Error during Google login:', error);
    }
  };

  return (
    <div className={`flex h-screen 2xl:ml-20 xl:ml-[2px] bg-gray-100 ml-24 xl:ml-[-30px] ${josefin.className}`}>
      <div className="w-1/2 relative ml-[60px]">
        <Image
          src="/images/image (9).png"
          alt="Soccer field with players"
          height={370}
          width={440}
          className="2xl:h-[700px] 2xl:w-[550px] 2xl:ml-28 2xl:mt-24 xl:ml-[48px] xl:h-[500px] xl:w-[470px] lg:h-[500px] lg:w-[400px] lg:mt-12 lg:ml-[-80px] xl:mt-16"
        />
      </div>
      <div className="flex items-center justify-center 2xl:mr-[100px] 2xl:ml-[-114px] xl:ml-[-40px] lg:ml-[-80px] 2xl:mt-[-60px]">
        <div className="p-0 rounded-none">
          <h1 className="2xl:text-[40px] font-bold text-blue-600 2xl:mt-[-1px] 2xl:mb-8 xl:text-[28px] xl:mb-8 xl:mt-[-90px] 2xl:ml-14 lg:text-[30px] lg:mt-[-15px] lg:ml-[40px]">Welcome Back to Spot Us</h1>
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-6">
              <label htmlFor="academyName" className="block 2xl:text-[18px] font-medium text-black 2xl:ml-4 xl:mt-12 2xl:mb-1 xl:mt-4 xl:ml-4 lg:ml-4">Academy Name</label>
              <input
                type="text"
                id="academyName"
                value={formik.values.academyName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`2xl:mt-0 block 2xl:w-[610px] xl:w-[500px] lg:w-[400px] lg:h-[50px] rounded-[15px] border ${formik.touched.academyName && formik.errors.academyName ? 'border-red-500' : 'border-black'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 px-3`}
              />
              {formik.touched.academyName && formik.errors.academyName && <p className="text-red-500 text-sm h-4 ml-4">{formik.errors.academyName}</p>}
            </div>

            <div className="mb-6 relative">
              <label htmlFor="password" className="block text-4 font-medium text-black 2xl:ml-4 xl:ml-4 mb-1 lg:ml-32 lg:mt-[-28px] 2xl:mt-12 xl:mt-4 lg:mt-[8px] 2xl:ml-[16px] lg:ml-4">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className={`mt-0 block 2xl:w-[610px] 2xl:w-[550px] 2xl:h-[55px] lg:h-[50px] rounded-[15px] xl:ml-[-3px] lg:ml-[1px] xl:h-[50px] xl:w-[500px] border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-black'} shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 h-[50px] py-2 pl-3 pr-12 lg:ml-[100px] lg:h-[40px] lg:w-[400px] 2xl:ml-[1px]`}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center justify-center h-full w-10 text-black font-bold"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <EyeOff className="h-6 w-6" strokeWidth={2} /> : <Eye className="h-6 w-6" strokeWidth={2} />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && <p className="text-[#EC0000] text-sm h-4 ml-4">{formik.errors.password}</p>}
            </div> 

            <div className="2xl:mb-4 2xl:ml-8 lg:ml-4 xl:ml-4">
              <span className="2xl:text-[18px] text-black">Forgot password? </span>
              <Link href="#" className="text-[#177BBD] hover:underline 2xl:text-[18px] font-bold">Reset</Link>
            </div>

            <button type="submit" className="2xl:w-[210px] 2xl:mb-2 2xl:h-[55px] xl:w-[150px] 2xl:ml-[250px] lg:w-[150px] lg:h-[45px] 2xl:text-[26px] lg:text-[20px] lg:ml-32 lg:mt-8 xl:ml-40 2xl:mt-[44px] xl:mt-8 bg-[#46BC14] text-white font-bold rounded-[15px] py-2 px-4 hover:bg-[#E99700] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 2xl:mt-4 xl:mt-8 text-[28px]">
              Login
            </button>
          </form>

          <div className="mt-4 text-center">
            <p className="2xl:text-4 text-black 2xl:ml-[15%] 2xl:mt-4 xl:mt-8 lg:text-[16px] lg:ml-4 2xl:mb-2">OR</p>
          </div>

          <button
            onClick={handleGoogleLogin} 
            className="2xl:mt-4 2xl:mb-2 xl:mt-8 lg:mt-4 2xl:ml-[26%] lg:ml-[80px] xl:ml-20 2xl:w-[390px] 2xl:h-[50px] xl:w-[300px] lg:w-[250px] lg:h-[40px] py-2 px-4 border border-black rounded-[15px] shadow-sm text-4 font-medium text-black bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <div className="flex items-center justify-center 2xl:text-[23px]">
              <img src="/google-removebg-preview.png" alt="Google" className="2xl:w-[35px] 2xl:ml-[-54px] 2xl:h-[35px] xl:w-[35px] xl:h-[35px] lg:w-[30px] lg:h-[30px] mr-2" />
              Sign in with Google
            </div>
          </button>

          <div className="2xl:mt-4 text-center lg:mt-4 2xl:ml-[-40px]">
            <p className="2xl:text-[20px] xl:text-[16px] text-black 2xl:mt-4 xl:mt-8 2xl:text-[126%] 2xl:ml-20">
              Don't have an account? <Link href="/register" className="text-blue-600 hover:underline font-bold text-[16px] 2xl:text-[20px]">Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
