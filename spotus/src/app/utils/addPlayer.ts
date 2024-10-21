// utils/addPlayer.ts

const url = '/api/AddPlayers'; // Adjust the URL to your actual API endpoint

export const addPlayer = async (playerData: FormData) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            body: playerData,
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    } catch (error) {
        throw new Error((error as Error).message);
    }
};
