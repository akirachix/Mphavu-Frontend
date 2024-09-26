// Utils/playersForm.ts
const BASE_URL = 'https://jsonplaceholder.typicode.com/posts'; // Dummy endpoint

export const postPlayerData = async (playerData: any) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playerData),
  });

  if (!response.ok) {
    throw new Error('Failed to add player');
  }

  const data = await response.json();
  return data;
};
