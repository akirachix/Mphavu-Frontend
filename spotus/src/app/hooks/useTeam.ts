
import { useEffect, useState } from 'react';
import { handleApiError, sanitizePlayerData, sanitizeTeamData } from '../utils/team';


import { fetchTeams,fetchTeamData, fetchTeamPlayers } from '../api/team/get/route';

export const useTeamData = (teamId) => {
  const [teams, setTeams] = useState([]);
  const [teamData, setTeamData] = useState(null);
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const teamsResponse = await fetchTeams();
        setTeams(teamsResponse.map(sanitizeTeamData));
        if (teamId) {
          const [teamResponse, playersResponse] = await Promise.all([
            fetchTeamData(teamId),
            fetchTeamPlayers(teamId),
          ]);
          setTeamData(sanitizeTeamData(teamResponse));
          setPlayers(playersResponse.map(sanitizePlayerData));
        }
        setError(null);
      } catch (err) {
        setError(err);
        handleApiError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [teamId]);
  return { teams, teamData, players, loading, error };
};