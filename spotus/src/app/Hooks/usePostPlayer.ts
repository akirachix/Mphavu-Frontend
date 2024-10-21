
import { useState } from 'react';
// import { TeamResponse } from '../Utils/types'; 
import { TeamResponse } from '../utils/types';

const usePostPlayer = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitPlayer = async (teamId: number, formData: FormData, fetchTeamData: () => Promise<TeamResponse | null>): Promise<TeamResponse | null> => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/teams/${teamId}/players`, {
        method: 'POST',
        body: formData,
      });

      // Check if response is OK
      if (!response.ok) {
        const errorData = await response.text(); // Get the response as text
        console.error('Error response:', errorData);
        throw new Error(`Failed to add player: ${errorData || 'Unknown error'}`);
      }

      const responseData = await response.json(); // Parse the JSON response
      console.log('Player submitted successfully:', responseData);

      // Fetch the updated team data after adding the player
      await fetchTeamData(); // Call the function to fetch updated team data

      return responseData; // Return the player data

    } catch (error) {
      setError(error.message);
      console.error('Error submitting player:', error);
      return null;

    } finally {
      setLoading(false);
    }
  };

  return { submitPlayer, loading, error };
};

export default usePostPlayer;

