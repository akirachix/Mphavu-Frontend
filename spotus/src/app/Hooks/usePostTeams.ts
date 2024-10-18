
// import { useState } from 'react';
// // import { TeamResponse } from '../Utils/types'; // Adjust the import path as necessary
// import { TeamResponse } from '../Utils/types';

// const usePostTeams = () => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const postTeams = async (data: FormData): Promise<TeamResponse | null> => {
//     setLoading(true);
//     setError(null);

//     try {
//       const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teams/`, {
//         method: 'POST',
//         body: data,
//       });

//       // Log the response status and body for debugging
//       console.log('Response Status:', response.status);
//       const responseData = await response.json();
//       console.log('Response Data:', responseData);

//       if (!response.ok) {
//         throw new Error(responseData.message || 'Failed to create team');
//       }

//       return responseData; // Assuming this is the correct data structure
//     } catch (error) {
//       setError(error.message);
//       console.error('Error posting teams:', error);
//       return null;
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { postTeams, loading, error };
// };

// export default usePostTeams;































// // import { useState } from 'react';
// // import { ErrorResponse, TeamResponse } from '../Utils/types';

// // const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/add_teams`; // Use environment variable

// // type PostTeamsFunction = (data: FormData) => Promise<TeamResponse>;

// // const usePostTeams = () => {
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState<string | null>(null);

// //   const postTeams: PostTeamsFunction = async (formData: FormData) => {
// //     setLoading(true);
// //     setError(null);

// //     try {
// //       const response = await fetch(url, {
// //         method: 'POST',
// //         body: formData,
// //       });

// //       if (!response.ok) {
// //         const rawResponse = await response.text(); // Get raw response for debugging
// //         console.error('Raw response:', rawResponse);
// //         throw new Error('Failed to create team: ' + rawResponse);
// //       }

// //       const responseData: TeamResponse = await response.json();
// //       return responseData; // Return the success response
// //     } catch (err) {
// //       setError((err as Error).message);
// //       console.error('Error posting teams:', err);
// //       throw err; // Re-throw the error for further handling
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return { postTeams, loading, error };
// // };

// // export default usePostTeams;





import { useState } from 'react';
import { TeamResponse } from '../Utils/types'; // Adjust the import path as necessary

const usePostTeams = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const postTeams = async (data: FormData): Promise<TeamResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teams/`, {
        method: 'POST',
        body: data,
      });

      // Log the response status and body for debugging
      console.log('Response Status:', response.status);
      const responseData = await response.json();
      console.log('Response Data:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to create team');
      }

      return responseData; // Assuming this is the correct data structure
    } catch (err) {
      // Type assertion to handle any errors
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred'); // Fallback for non-Error objects
      }
      console.error('Error posting teams:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { postTeams, loading, error };
};

export default usePostTeams;
