

// const baseUrl = process.env.BASE_URL || 'https://sportus-70b4ee2281cb.herokuapp.com';

// export const fetchStatistics = async (playerId: number) => {
//   try {
//     const response = await fetch(`${baseUrl}/api/players/${playerId}/performances/`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
//     }

//     return await response.json();
//   } catch (error) {
//     throw new Error((error as Error).message);
//   }
// };







// const baseUrl = process.env.BASE_URL || 'https://sportus-70b4ee2281cb.herokuapp.com';

// export const fetchStatistics = async (playerId: number) => {
//   try {
//     const response = await fetch(`${baseUrl}/api/players/${playerId}/performances/`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (!response.ok) {
//       const errorText = await response.text();
//       throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorText}`);
//     }

//     const data = await response.json();
//     console.log('API Response:', data); // Log API response
//     return data;
//   } catch (error) {
//     throw new Error((error as Error).message);
//   }
// };




const baseUrl = process.env.BASE_URL || 'https://sportus-70b4ee2281cb.herokuapp.com';

export async function sendInvite(email: string) {

const baseUrl = process.env.BASE_URL || 'https://sportus-70b4ee2281cb.herokuapp.com';

export const fetchStatistics = async (playerId: number) => {

  try {
    const response = await fetch(`${baseUrl}/api/players/${playerId}/performances/`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.detail || 'Failed to send invite');
    }

    return response.json();
  } catch (error) {
    console.error('Error sending invite:', error);
    throw error;
  }
}

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
