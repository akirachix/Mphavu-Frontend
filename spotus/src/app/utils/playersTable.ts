
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchPlayers = async (teamId) => {
  if (!teamId) throw new Error('No team ID provided');

  const response = await fetch(`${BASE_URL}/api/teams/${teamId}/players/`);
  if (!response.ok) {
    throw new Error('Failed to fetch players');
  }

  const players = await response.json();
  return players.map((player) => ({
    id: player.id,
    firstName: player.firstName,  // Ensure these fields match your API response
    lastName: player.lastName,
    position: player.position,
    profilePicture: player.profilePicture, // Using player's profile picture
  }));
};
