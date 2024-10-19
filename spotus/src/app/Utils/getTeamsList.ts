
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; 

export const fetchTeamsList = async () => {
  const response = await fetch(`${BASE_URL}/api/teams/`); 
  if (!response.ok) {
    throw new Error('Failed to fetch teams list');
  }

  const data = await response.json();
  
  return data.map((team) => ({
    logo: `${BASE_URL}${team.logo}`,
    name: team.name,
    numPlayers: team.number_of_players,
  }));
};

