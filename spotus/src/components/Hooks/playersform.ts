// Hooks/playersForm.ts
import { useState } from 'react';
// import { postPlayerData } from '../Utils/playersForm';
import { postPlayerData } from '../Utils/playersform';

const usePlayersForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitPlayer = async (playerData: any) => {
    setLoading(true);
    setError(null);

    try {
      await postPlayerData(playerData);
      console.log('Player added'); // Handle successful response
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { submitPlayer, loading, error };
};

export default usePlayersForm;
