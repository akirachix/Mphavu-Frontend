const baseUrl = '/api/agents/';

export const fetchAgents = async () => {
  try {
    const url = `${baseUrl}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch agents');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching agents:', (error as Error).message);
    throw error;
  }
};
