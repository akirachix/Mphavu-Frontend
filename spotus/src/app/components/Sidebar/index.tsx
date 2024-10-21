// components/Sidebar.js
import Image from 'next/image';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="h-screen w-[20%] bg-blue-400 text-white flex flex-col items-center py-8 font-[JosefinSans]">
      <div className="text-4xl font-semibold mb-8 flex items-center lg:w-[80%]">
        <Image src="/images/image (15).png" alt="Soccer Ball mb-40" width={300} height={32} />
      </div>
      <nav className="flex flex-col space-y-20">
        <Link href="/dashboard" className="2xl:text-5xl lg:text-2xl xl:text-3xl text-white hover:text-blue-800 2xl:mt-20 lg:mt-10 2xl:mb-10 2xl:ml-2 lg:ml-3">
          Dashboard
        </Link>
        <Link href="/product-metrics" className="2xl:text-5xl lg:text-2xl xl:text-3xl hover:text-blue-800 ml-2">
          Product Metrics
        </Link>
      </nav>
    </div>
  );
}