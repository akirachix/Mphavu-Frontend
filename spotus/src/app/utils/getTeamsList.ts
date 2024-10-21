
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchTeamsList = async () => {
  const response = await fetch(`${BASE_URL}/api/teams/`);
  if (!response.ok) {
    throw new Error('Failed to fetch teams');
  }
  return response.json();
};

export const fetchTeamPlayers = async (teamId) => {
  const response = await fetch(`${BASE_URL}/api/teams/${teamId}/players/`);
  if (!response.ok) {
    throw new Error('Failed to fetch players');
  }
  return response.json();
};

