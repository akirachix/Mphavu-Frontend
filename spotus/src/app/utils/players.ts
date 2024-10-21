export const handleApiError = (error) => {
  // Check if the error has a response from the server
  if (error.response) {
    // Server responded with a status outside the 2xx range
    console.error('API response error:', error.response.data);
    alert(`Error: ${error.response.data.message || 'An error occurred while processing your request.'}`);
  } else if (error.request) {
    // No response received from the server after the request was sent
    console.error('No response from the server:', error.request);
    alert('Network error: Unable to reach the server. Please try again later.');
  } else {
    // Error setting up the request
    console.error('Error setting up the request:', error.message);
    alert(`Error: ${error.message}`);
  }
};

// You could also add a utility to handle team or player data before using it in components
export const sanitizePlayerData = (player) => ({
  id: player.id || 'Unknown',
  firstName: player.firstName || 'Unknown',
  lastName: player.lastName || 'Unknown',
  position: player.position || 'N/A',
  image: player.image || '/placeholder-image.jpg',
});

export const sanitizeTeamData = (team) => ({
  id: team.id || 'Unknown',
  name: team.name || 'Unnamed Team',
});
