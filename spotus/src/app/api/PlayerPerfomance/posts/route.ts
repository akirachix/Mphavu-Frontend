
const handleApiError = (error: Error, endpoint: string): Error => {
  console.error(`Error fetching data from ${endpoint}:`, error);
  if (error.message === 'Failed to fetch') {
    return new Error(`Network error: Unable to connect to ${endpoint}. Is the server running?`);
  }
  return error;
};

export const fetchVideoData = async (videoId: number) => {
  const endpoint = 'http://127.0.0.1:8000/api/videos/'; 
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw handleApiError(error as Error, endpoint);
  }
};


export const fetchPerformanceData = async () => {
  const endpoint = 'http://127.0.0.1:8000/api/performance/';
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    throw handleApiError(error as Error, endpoint);
  }
};
