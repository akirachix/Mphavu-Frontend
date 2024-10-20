
const baseUrl = process.env.BASE_URL || 'https://sportus-70b4ee2281cb.herokuapp.com';

export const fetchStatistics = async (playerId: number) => {
  try {
    const response = await fetch(`${baseUrl}/api/players/${playerId}/performances/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
