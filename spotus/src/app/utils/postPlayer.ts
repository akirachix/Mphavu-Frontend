
import { ErrorResponse } from './types';

const BASE_URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/teams`;

type PostPlayerFunction = (teamId: string, data: FormData) => Promise<void>;

export const postPlayer: PostPlayerFunction = async (teamId, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${teamId}/players/`, {
      method: 'POST',
      body: data,
    });

    if (!response.ok) {
      const errorResponse: ErrorResponse = await response.json();
      throw new Error(errorResponse.error || 'Failed to create player');
    }

    // Optionally return response data or handle success
  } catch (error) {
    console.error('Error posting player:', error);
    throw error; // Re-throw the error for further handling
  }
};
