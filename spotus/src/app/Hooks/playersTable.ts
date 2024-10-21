
import { useEffect, useState } from 'react';
// import { fetchPlayers } from '../Utils/playersTable';
import { fetchPlayers } from '../utils/playersTable';

const usePlayersForm = (teamId) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getPlayers = async () => {
      if (!teamId) return; // Ensure teamId is present

      try {
        const data = await fetchPlayers(teamId);
        setPlayers(data);
      } catch (error) {
        setError(error.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    getPlayers();
  }, [teamId]);

  return { players, loading, error };
};

export default usePlayersForm;
