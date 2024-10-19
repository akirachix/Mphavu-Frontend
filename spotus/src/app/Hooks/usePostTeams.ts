


import { useState } from 'react';
import { TeamResponse } from '../Utils/types'; 

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

      console.log('Response Status:', response.status);
      const responseData = await response.json();
      console.log('Response Data:', responseData);

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to create team');
      }

      return responseData; 
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
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
