
import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';


import axios from 'axios';

const BASE_URL = 'http://127.0.0.1:8000/api';

export const fetchTeams = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/teams/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching teams:', error);
    throw error;
  }
};

export const fetchTeamData = async (teamId) => {
  try {
    const response = await axios.get(`${BASE_URL}/teams/${teamId}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team data:', error);
    throw error;
  }
};

export const fetchTeamPlayers = async (teamId) => {
  try {
    const response = await axios.get(`${BASE_URL}/teams/${teamId}/players/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching team players:', error);
    throw error;
  }

};

};

