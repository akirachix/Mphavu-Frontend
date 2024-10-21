// src/app/utils/api.js

const BASE_URL = 'https://sportus-70b4ee2281cb.herokuapp.com';

export const fetchPlayerData = async (playerId) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${playerId}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch player data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching player data:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};
