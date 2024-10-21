
"use client";
import React from 'react';
import Sidebar from '../Sidebar';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-[#0F75BC] w-[20%]">
        <Sidebar/>
      </aside>
      <main className="flex-grow p-4 bg-white">
        {children}
      </main>
    </div>
  );
};
export default Layout;