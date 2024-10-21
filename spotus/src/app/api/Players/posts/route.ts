import axios from 'axios';

const BASE_URL = 'https://sportus-70b4ee2281cb.herokuapp.com/';

export const fetchTeams = async () => {
  try {
    const response = await axios.get('https://sportus-70b4ee2281cb.herokuapp.com/api/teams/');
    return response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};

export const fetchTeamData = async (teamId) => {
  try {
    const response = await axios.get(`https://sportus-70b4ee2281cb.herokuapp.com/api/teams/${teamId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching players data:', error);
    throw error;
  }
};

export const fetchTeamPlayers = async (teamId) => {
  try {
    const response = await axios.get(`https://sportus-70b4ee2281cb.herokuapp.com/api/teams/${teamId}/players/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team players:', error);
    throw error;
  }
};
