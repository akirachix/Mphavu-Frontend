
export const handleApiError = (error: { response: { data: { message: any; }; }; request: any; message: any; }) => {
    if (error.response) {
      console.error('API response error:', error.response.data);
      alert(`Error: ${error.response.data.message || 'An error occurred while processing your request.'}`);
    } else if (error.request) {
      console.error('No response from the server:', error.request);
      alert('Network error: Unable to reach the server. Please try again later.');
    } else {
      console.error('Error setting up the request:', error.message);
      alert(`Error: ${error.message}`);
    }
  };

  export const sanitizePlayerData = (player: { id: any; first_name: any; last_name: any; position: any; profile_picture: any; }) => ({
    id: player.id || 'Unknown',
    firstName: player.first_name || 'Unknown',
    lastName: player.last_name || 'Unknown',
    position: player.position || 'N/A',
    image: player.profile_picture || '/placeholder-image.jpg', // Use the correct key for the image
  });

  export const sanitizeTeamData = (team: { id: any; name: any; }) => ({
    id: team.id || 'Unknown',
    name: team.name || 'Unnamed Team',
  });

