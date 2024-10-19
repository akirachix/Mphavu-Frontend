

import { ErrorResponse, TeamResponse } from './types';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/teams`;

type PostTeamsFunction = (data: FormData) => Promise<TeamResponse>;

export const postTeams: PostTeamsFunction = async (data: FormData) => {
  try {
    const response = await fetch(BASE_URL, { 
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Failed to create team');
    }

    const result: TeamResponse = await response.json();
    return result; 
  } catch (error) {
    console.error('Error posting teams:', error);
    throw error; 
};













