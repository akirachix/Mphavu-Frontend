
// Utility function to format dates if needed
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

// Utility function to transform player data if necessary
export const transformPlayerData = (data) => {
  // Example transformation (if needed)
  return {
    ...data,
    fullName: `${data.firstName} ${data.lastName}`,
  };
};
