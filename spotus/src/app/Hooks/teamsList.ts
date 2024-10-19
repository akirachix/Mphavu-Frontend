

import { useEffect, useState } from 'react';
import { fetchTeamsList } from '../Utils/getTeamsList';

const useTeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const data = await fetchTeamsList();
        setTeams(data);
      } catch (error) {
        console.error('Error fetching teams list:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTeams();
  }, []);

  return { teams, loading, error };
};

export default useTeamsList;
