


import { useEffect, useState } from 'react';
// import { fetchTeamsList, fetchTeamPlayers } from '../Utils/getTeamsList';
import { fetchTeamsList , fetchTeamPlayers} from '../utils/getTeamsList';

const useTeamsList = () => {
  const [teams, setTeams] = useState([]);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTeams = async () => {
      try {
        const teamsData = await fetchTeamsList();
        setTeams(teamsData);
      } catch (error) {
        console.error('Error fetching teams list:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getTeams();
  }, []);

  const fetchPlayersForTeam = async (teamId) => {
    try {
      const playersData = await fetchTeamPlayers(teamId);
      setPlayers(playersData);
    } catch (error) {
      console.error('Error fetching players:', error);
      setError(error);
    }
  };

  return { teams, players, loading, error, fetchPlayersForTeam };
};

export default useTeamsList;

