const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:8000';

export const fetchAgents = async () => {
  try {
    const response = await fetch(`${baseUrl}/api/agents/`, {
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
