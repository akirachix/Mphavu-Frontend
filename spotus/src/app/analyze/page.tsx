'use client'; // Add this line to indicate it's a Client Component


import { useSearchParams } from 'next/navigation';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AnalyzeResults = () => {
  const searchParams = useSearchParams();
  const results = searchParams.get('results');

  // Parse the results if they exist
  const analysisResults = results ? JSON.parse(results) : {};

  return (
    <div>
      <h1 className='text-center font-bold text-4xl 2xl:mb-10 lg:mb-5  2xl:mt-5 xl:mt-5'>
        Analysis Results
      </h1>
    <div className="max-w-7xl mx-auto pl-10 pr-10 pt-3">
      {/* <h3 className="text-5xl mb-7 font-bold text-center ">Analysis Results</h3> */}
      <div className="grid grid-cols-4 2xl:gap-40 lg:gap-20 xl:gap-40">
        {Object.entries(analysisResults).map(([key, value]) => (
          <div key={key} className="flex flex-col items-center">
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              styles={{
                path: {
                  stroke: `#3e98c7`,
                  strokeWidth: 8,
                },
                text: {
                  fill: 'black',
                  fontSize: '16px',
                },
              }}
            />
            <span className="2xl:mt-4 lg:mt-4 2xl:text-2xl lg:text-lg text-center">{key.replace(/([A-Z])/g, ' $1')}</span>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default AnalyzeResults;
