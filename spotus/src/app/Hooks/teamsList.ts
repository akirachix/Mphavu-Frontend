
// import { useEffect, useState } from 'react';
// import { fetchAvailableTeams } from '../Utils/AvailableTeams';

// const useAvailableTeams = () => {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getTeams = async () => {
//       try {
//         const data = await fetchAvailableTeams();
//         setTeams(data);
//       } catch (error) {
//         console.error('Error fetching available teams:', error);
//         setError(error); // Capture the error
//       } finally {
//         setLoading(false); // Set loading to false after fetching
//       }
//     };

//     getTeams();
//   }, []);

//   return { teams, loading, error }; // Return all three states
// };

// export default useAvailableTeams;





// // src/Hooks/useTeamsList.ts
// import { useEffect, useState } from 'react';
// // import { fetchTeamsList } from '../Utils/getTeamsList';
// import { fetchTeamsList } from '../Utils/getTeamsList';

// const useTeamsList = () => {
//   const [teams, setTeams] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getTeams = async () => {
//       try {
//         const data = await fetchTeamsList();
//         setTeams(data);
//       } catch (error) {
//         console.error('Error fetching teams list:', error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     getTeams();
//   }, []);

//   return { teams, loading, error };
// };

// export default useTeamsList;



// src/Hooks/useTeamsList.ts
import { useEffect, useState } from 'react';
import { fetchTeamsList } from '../Utils/getTeamsList';

const useTeamsList = () => {
  const [teams, setTeams] = useState<any[]>([]); // Specify a more specific type if possible
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null); // Specify the type of error

  useEffect(() => {
    const getTeams = async () => {
      try {
        const data = await fetchTeamsList();
        setTeams(data);
      } catch (err) {
        console.error('Error fetching teams list:', err);
        
        // Handle the error safely
        if (err instanceof Error) {
          setError(err.message); // Set the error message
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    getTeams();
  }, []);

  return { teams, loading, error };
};

export default useTeamsList;
