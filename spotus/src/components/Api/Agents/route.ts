// import { NextApiRequest, NextApiResponse } from 'next';
// // import { Coach } from '../../utils/coaches';
// // import { Coach } from '../Utils/coaches';
// import { Coach } from '@/components/Utils/coaches';

// const dummyCoaches: Coach[] = [
//   { id: 1, firstName: 'Kelly', lastName: 'Auma', team: 'Kikwetu', players: 23, isActive: true },
//   { id: 2, firstName: 'James', lastName: 'Odhiambo', team: 'Shujaa', players: 32, isActive: true },
//   { id: 3, firstName: 'Eric', lastName: 'Atieno', team: 'Mphavu', players: 42, isActive: true },
//   { id: 4, firstName: 'Ken', lastName: 'Njoroge', team: 'Zoza', players: 50, isActive: true },
//   { id: 5, firstName: 'John', lastName: 'Kamau', team: 'Bata', players: 21, isActive: false },
//   { id: 6, firstName: 'Jacob', lastName: 'Muchemi', team: 'Ligi Ndogo', players: 27, isActive: true },
//   { id: 7, firstName: 'Martin', lastName: 'James', team: 'Kipaji', players: 20, isActive: true },
// ];

// export default function handler(req: NextApiRequest, res: NextApiResponse<Coach[]>) {
//   res.status(200).json(dummyCoaches);
// }



// import { NextApiRequest, NextApiResponse } from 'next';
// import { Coach } from '@/components/Utils/coaches';

// const dummyCoaches: Coach[] = [
//   { id: 1, firstName: 'Kelly', lastName: 'Auma', team: 'Kikwetu', players: 23, isActive: true },
//   { id: 2, firstName: 'James', lastName: 'Odhiambo', team: 'Shujaa', players: 32, isActive: true },
//   { id: 3, firstName: 'Eric', lastName: 'Atieno', team: 'Mphavu', players: 42, isActive: true },
//   { id: 4, firstName: 'Ken', lastName: 'Njoroge', team: 'Zoza', players: 50, isActive: true },
//   { id: 5, firstName: 'John', lastName: 'Kamau', team: 'Bata', players: 21, isActive: false },
//   { id: 6, firstName: 'Jacob', lastName: 'Muchemi', team: 'Ligi Ndogo', players: 27, isActive: true },
//   { id: 7, firstName: 'Martin', lastName: 'James', team: 'Kipaji', players: 20, isActive: true },
// ];

// export default function handler(req: NextApiRequest, res: NextApiResponse<Coach[]>) {
//   if (req.method === 'GET') {
//     res.status(200).json(dummyCoaches);
//   } else {
//     res.setHeader('Allow', ['GET']);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }


// src/pages/api/coaches.ts
// import { NextApiRequest, NextApiResponse } from 'next';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
//     if (!response.ok) {
//         return res.status(response.status).json({ message: 'Failed to fetch coaches' });
//     }
    
//     const data = await response.json();
//     const coaches = data.map((user: any, index: number) => ({
//         id: user.id,
//         firstName: user.name.split(' ')[0],
//         lastName: user.name.split(' ')[1] || '',
//         team: `Team ${index + 1}`, // Dummy team assignment
//         players: Math.floor(Math.random() * 50), // Random players count
//         isActive: true,
//     }));

//     res.status(200).json(coaches);
// }



import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    
    if (!response.ok) {
        return res.status(response.status).json({ message: 'Failed to fetch agents' }); // Updated error message
    }
    
    const data = await response.json();
    const agents = data.map((user: any, index: number) => ({ // Updated variable name
        id: user.id,
        firstName: user.name.split(' ')[0],
        lastName: user.name.split(' ')[1] || '',
        isActive: true,
    }));

    res.status(200).json(agents); // Updated response variable
}