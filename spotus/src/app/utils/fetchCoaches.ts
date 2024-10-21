const baseUrl = '/api/coaches/';

export const fetchCoaches = async () => {
  try {
    const url = `${baseUrl}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch coaches');
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching coaches:', (error as Error).message);
    throw error;
  }
};
