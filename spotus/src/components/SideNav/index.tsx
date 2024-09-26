import Link from 'next/link';

const SideNavbar = () => {
  return (
    <div className="bg-sky-500 text-white h-screen w-64 p-6">
      <h1 className="text-3xl font-bold mb-4">
        Sp<span className="inline-block">⚽</span>t Us
      </h1>
      <h2 className="text-2xl mb-8">Dashboard</h2>
      <nav>
        <ul>
          <li className="mb-4">
            <Link href="/product-metrics" className="text-xl hover:underline">
              Product Metrics
            </Link>
          </li>
          {/* Add more navigation items as needed */}
        </ul>
      </nav>
    </div>
  );
};

export default SideNavbar;