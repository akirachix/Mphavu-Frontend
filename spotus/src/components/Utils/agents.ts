// export interface Coach {
//     id: number;
//     firstName: string;
//     lastName: string;
//     team: string;
//     players: number;
//     isActive: boolean;
//   }
  
//   const BASE_URL = '/api/coaches'; // Change this to your actual API URL when ready
  
//   export const fetchCoaches = async (): Promise<Coach[]> => {
//     const response = await fetch(BASE_URL);
//     if (!response.ok) {
//       throw new Error('Failed to fetch coaches');
//     }
//     return response.json();
//   };



// const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// export const fetchCoaches = async (): Promise<Coach[]> => {
//     const response = await fetch(BASE_URL);
//     if (!response.ok) {
//         throw new Error('Failed to fetch coaches');
//     }
//     const data = await response.json();
//     return data.map((user: any, index: number) => ({
//         id: index + 1,
//         firstName: user.name.split(' ')[0],  // Splitting name to get first name
//         lastName: user.name.split(' ')[1] || '', // Handling cases with no last name
//         team: 'Team ' + (index + 1), // Assigning a dummy team
//         players: Math.floor(Math.random() * 50), // Random number of players
//         isActive: true, // Setting all as active for now
//     }));
// };



const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchAgents = async (): Promise<Agent[]> => { // Updated to fetchAgents
    const response = await fetch(BASE_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch agents'); // Updated error message
    }
    const data = await response.json();
    return data.map((user: any, index: number) => ({
        id: index + 1,
        firstName: user.name.split(' ')[0],  // Splitting name to get first name
        lastName: user.name.split(' ')[1] || '', // Handling cases with no last name
        isActive: true, // Setting all as active for now
    }));
};