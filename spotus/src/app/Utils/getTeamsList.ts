// // src/Utils/getTeamsList.ts
// export const fetchTeamsList = async () => {
//     const response = await fetch('${BASE_URL}/api/teams/');
//     if (!response.ok) {
//       throw new Error('Failed to fetch teams list');
//     }
//     const data = await response.json();
//     return data; // Ensure this matches the expected structure
//   };
  

// Utils/getTeamsList.ts



// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Get the base URL from the environment variable

// export const fetchTeamsList = async () => {
//   const response = await fetch(`${BASE_URL}/api/teams/`); // Use the correct endpoint
//   if (!response.ok) {
//     throw new Error('Failed to fetch teams list');
//   }
//   return response.json();
// };



const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL; // Get the base URL from the environment variable

export const fetchTeamsList = async () => {
  const response = await fetch(`${BASE_URL}/api/teams/`); // Use the correct endpoint
  if (!response.ok) {
    throw new Error('Failed to fetch teams list');
  }

  const data = await response.json();
  
  // Map the data to include the logo URLs
  return data.map((team: { logo: any; name: any; number_of_players: any; }) => ({
    logo: `${BASE_URL}${team.logo}`, // Construct the full URL for the logo
    name: team.name,
    numPlayers: team.number_of_players,
  }));
};

