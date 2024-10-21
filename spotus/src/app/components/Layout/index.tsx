"use client";
import React from 'react';
import Sidebar from '../AdminSidebar';


"use client";
import React from 'react';
import Sidebar from '../Sidebar';
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <aside className="bg-[#0F75BC] w-[20%]">
        <Sidebar />

        <Sidebar/>
      </aside>
      <main className="flex-grow p-4 bg-white">
        {children}
      </main>
    </div>
  );
};
export default Layout;
export default Layout;

"use client";
import React from 'react';
import Sidebar from '../Sidebar';
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-grow p-4">
        {children}
      </div>
    </div>
  );
}

