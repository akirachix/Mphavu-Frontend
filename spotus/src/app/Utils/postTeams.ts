

import { ErrorResponse, TeamResponse } from './types';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/teams`; // Correct endpoint

type PostTeamsFunction = (data: FormData) => Promise<TeamResponse>;

export const postTeams: PostTeamsFunction = async (data: FormData) => {
  try {
    const response = await fetch(BASE_URL, { // Use BASE_URL here
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.message || 'Failed to create team');
    }

    const result: TeamResponse = await response.json();
    return result; // Return the success response
  } catch (error) {
    console.error('Error posting teams:', error);
    throw error; // Re-throw the error for further handling
  }
};













