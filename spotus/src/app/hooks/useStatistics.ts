
// import { useEffect, useState } from 'react';
// import { fetchStatistics } from '../api/statistics/route'; 


// export const useStatistics = (playerId: number) => {
//   const [statistics, setStatistics] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchStatistics(playerId);
//         console.log('Fetched statistics:', data); 
//         setStatistics(data); 
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false); 
//       }
//     };

//     fetchData();
//   }, [playerId]);

//   return { statistics, loading, error }; 
// };




// import { useEffect, useState } from 'react';
// import { fetchStatistics } from '../api/statistics/route'; 


// export const useStatistics = (playerId: number) => {
//   const [statistics, setStatistics] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true); // Start loading state
//       try {
//         const data = await fetchStatistics(playerId);
//         console.log('Fetched statistics:', data);
//         setStatistics(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false); // End loading state
//       }
//     };

//     if (playerId) {
//       fetchData();
//     }
//   }, [playerId]);

//   return { statistics, loading, error };
// };



// import { useEffect, useState } from 'react';
// import { fetchStatistics } from '../api/statistics/route'; 

// export const useStatistics = (playerId: number) => {
//   const [statistics, setStatistics] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const data = await fetchStatistics(playerId);
//         console.log('Fetched statistics:', data);
//         setStatistics(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (playerId) {
//       fetchData();
//     }
//   }, [playerId]);

//   return { statistics, loading, error }; 
// };









import { useEffect, useState } from 'react';

export const useStatistics = (playerId: number) => {
  const [statistics, setStatistics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await fetch(`https://sportus-70b4ee2281cb.herokuapp.com/api/players/${playerId}/performances/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setStatistics(data); // Assuming data contains the player performance statistics
      } catch (error) {
        console.error('Failed to fetch statistics:', error);
        setError(error.message); // Capture any error
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchStatistics();
  }, [playerId]);

  return { statistics, loading, error }; // Return loading and error states

import { useEffect, useState } from 'react';
import { fetchStatistics } from '../api/statistics/route'; 

export const useStatistics = (playerId: number) => {
  const [statistics, setStatistics] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStatistics(playerId);
        console.log('Fetched statistics:', data); 
        setStatistics(data); 
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, [playerId]);

  return { statistics, loading, error }; 

};
