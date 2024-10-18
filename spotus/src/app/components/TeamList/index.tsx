
// "use client";
// import { useState } from 'react';
// import Image from 'next/image';
// import Navbar from '../Navbar';
// import TeamsHeader from '../TeamsHeader';
// import TeamCreationForm from '../TeamCreationForm'; 
// // import useTeamsList from '../Hooks/teamsList'; 
// import useTeamsList from '@/app/Hooks/teamsList';

// const TeamCard = ({ name, logo, numPlayers }) => (
//   <div className="xl:ml-[10px] bg-white border border-black rounded-[30px] shadow-md flex flex-col items-center p-6 mt-4 h-[200px] w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
//     <div className="flex items-center mb-4">
//       <Image src={logo} alt={name} width={80} height={80} className="mr-4" />
//       <div>
//         <h3 className="font-bold text-black text-[24px]">{name}</h3>
//         <p className="text-black text-[24px]">No of Players: {numPlayers}</p>
//       </div>
//     </div>
//     <button className="bg-green-500 text-white px-4 py-2 rounded-xl w-full max-w-[150px]">
//       View Team
//     </button>
//   </div>
// );

// const TeamList = () => {
//   const { teams, loading, error } = useTeamsList();
//   const [isCreatingTeam, setIsCreatingTeam] = useState(false);
//   const [filteredTeams, setFilteredTeams] = useState(teams);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleBackToTeams = () => {
//     setIsCreatingTeam(false);
//   };

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredTeams(teams); // Reset to all teams if search is empty
//     } else {
//       const lowerCaseTerm = term.toLowerCase();
//       const filtered = teams.filter(team => 
//         team.name.toLowerCase().startsWith(lowerCaseTerm)
//       );
//       setFilteredTeams(filtered);
//     }
//   };

//   if (isCreatingTeam) {
//     return <TeamCreationForm onBack={handleBackToTeams} />;
//   }

//   if (loading) {
//     return <div>Loading teams...</div>;
//   }

//   if (error) {
//     return <div>Error fetching teams: {error.message}</div>;
//   }

//   if (!Array.isArray(teams)) {
//     return <div>No teams available.</div>;
//   }

//   return (
//     <div>
//       <Navbar onSelectSection={function (section: string): void {
//         throw new Error('Function not implemented.');
//       } } />
//       <TeamsHeader setIsCreatingTeam={setIsCreatingTeam} onSearch={handleSearch} />
//       <div className="max-h-[450px] overflow-y-auto mt-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
//           {filteredTeams.length > 0 ? (
//             filteredTeams.map((team, index) => (
//               <div className="flex justify-center mr-4" key={index}> {/* Added right margin here */}
//                 <TeamCard {...team} />
//               </div>
//             ))
//           ) : (
//             <main className="container mx-auto p-4 flex flex-col items-center ">
//               <h2 className="text-3xl md:text-4xl mt-6">Team Not Found</h2>
//             </main>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamList;





// "use client";
// import { SetStateAction, useState } from 'react';
// import Image from 'next/image';
// import Navbar from '../Navbar';
// import TeamsHeader from '../TeamsHeader';
// import TeamCreationForm from '../TeamCreationForm'; 
// // import useTeamsList from '../Hooks/teamsList'; 
// import useTeamsList from '@/app/Hooks/teamsList';

// const TeamCard = ({ name, logo, numPlayers }) => (
//   <div className="xl:ml-[10px] bg-white border border-black rounded-[30px] shadow-md flex flex-col items-center p-6 mt-4 h-[200px] w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
//     <div className="flex items-center mb-4">
//       <Image src={logo} alt={name} width={80} height={80} className="mr-4" />
//       <div>
//         <h3 className="font-bold text-black text-[24px]">{name}</h3>
//         <p className="text-black text-[24px]">No of Players: {numPlayers}</p>
//       </div>
//     </div>
//     <button className="bg-green-500 text-white px-4 py-2 rounded-xl w-full max-w-[150px]">
//       View Team
//     </button>
//   </div>
// );

// const TeamList = () => {
//   const { teams, loading, error } = useTeamsList();
//   const [isCreatingTeam, setIsCreatingTeam] = useState(false);
//   const [filteredTeams, setFilteredTeams] = useState(teams);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleBackToTeams = () => {
//     setIsCreatingTeam(false);
//   };

//   const handleSearch = (term: SetStateAction<string>) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredTeams(teams); // Reset to all teams if search is empty
//     } else {
//       const lowerCaseTerm = term.toLowerCase();
//       const filtered = teams.filter(team => 
//         team.name.toLowerCase().startsWith(lowerCaseTerm)
//       );
//       setFilteredTeams(filtered);
//     }
//   };

//   if (isCreatingTeam) {
//     return <TeamCreationForm onBack={handleBackToTeams} />;
//   }

//   if (loading) {
//     return <div>Loading teams...</div>;
//   }

//   if (error) {
//     return <div>Error fetching teams: {error.message}</div>;
//   }

//   if (!Array.isArray(teams)) {
//     return <div>No teams available.</div>;
//   }

//   return (
//     <div>
//       <Navbar onSelectSection={function (section: string): void {
//         throw new Error('Function not implemented.');
//       } } />
//       <TeamsHeader setIsCreatingTeam={setIsCreatingTeam} onSearch={handleSearch} />
//       <div className="max-h-[450px] overflow-y-auto mt-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
//           {filteredTeams.length > 0 ? (
//             filteredTeams.map((team, index) => (
//               <div className="flex justify-center mr-4" key={index}> {/* Added right margin here */}
//                 <TeamCard {...team} />
//               </div>
//             ))
//           ) : (
//             <main className="container mx-auto p-4 flex flex-col items-center ">
//               <h2 className="text-3xl md:text-4xl mt-6">Team Not Found</h2>
//             </main>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamList;




// "use client";
// import { SetStateAction, useState } from 'react';
// import Image from 'next/image';
// import Navbar from '../Navbar';
// import TeamsHeader from '../TeamsHeader';
// import TeamCreationForm from '../TeamCreationForm'; 
// import useTeamsList from '@/app/Hooks/teamsList';

// // Define the type for TeamCard props
// interface TeamCardProps {
//   name: string;
//   logo: string;
//   numPlayers: number;
// }

// const TeamCard: React.FC<TeamCardProps> = ({ name, logo, numPlayers }) => (
//   <div className="xl:ml-[10px] bg-white border border-black rounded-[30px] shadow-md flex flex-col items-center p-6 mt-4 h-[200px] w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
//     <div className="flex items-center mb-4">
//       <Image src={logo} alt={name} width={80} height={80} className="mr-4" />
//       <div>
//         <h3 className="font-bold text-black text-[24px]">{name}</h3>
//         <p className="text-black text-[24px]">No of Players: {numPlayers}</p>
//       </div>
//     </div>
//     <button className="bg-green-500 text-white px-4 py-2 rounded-xl w-full max-w-[150px]">
//       View Team
//     </button>
//   </div>
// );

// const TeamList = () => {
//   const { teams, loading, error } = useTeamsList();
//   const [isCreatingTeam, setIsCreatingTeam] = useState(false);
//   const [filteredTeams, setFilteredTeams] = useState(teams);
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleBackToTeams = () => {
//     setIsCreatingTeam(false);
//   };

//   const handleSearch = (term: SetStateAction<string>) => {
//     setSearchTerm(term);
//     if (term === '') {
//       setFilteredTeams(teams); // Reset to all teams if search is empty
//     } else {
//       const lowerCaseTerm = term.toLowerCase();
//       const filtered = teams.filter(team => 
//         team.name.toLowerCase().startsWith(lowerCaseTerm)
//       );
//       setFilteredTeams(filtered);
//     }
//   };

//   if (isCreatingTeam) {
//     return <TeamCreationForm onBack={handleBackToTeams} />;
//   }

//   if (loading) {
//     return <div>Loading teams...</div>;
//   }

//   if (error) {
//     return <div>Error fetching teams: {error.message}</div>;
//   }

//   if (!Array.isArray(teams)) {
//     return <div>No teams available.</div>;
//   }

//   return (
//     <div>
//       <Navbar onSelectSection={function (section: string): void {
//         throw new Error('Function not implemented.');
//       } } />
//       <TeamsHeader setIsCreatingTeam={setIsCreatingTeam} onSearch={handleSearch} />
//       <div className="max-h-[450px] overflow-y-auto mt-4">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
//           {filteredTeams.length > 0 ? (
//             filteredTeams.map((team, index) => (
//               <div className="flex justify-center mr-4" key={index}>
//                 <TeamCard {...team} />
//               </div>
//             ))
//           ) : (
//             <main className="container mx-auto p-4 flex flex-col items-center ">
//               <h2 className="text-3xl md:text-4xl mt-6">Team Not Found</h2>
//             </main>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamList;



"use client";
import { SetStateAction, useState } from 'react';
import Image from 'next/image';
import Navbar from '../Navbar';
import TeamsHeader from '../TeamsHeader';
import TeamCreationForm from '../TeamCreationForm'; 
import useTeamsList from '@/app/Hooks/teamsList';

// Define the type for TeamCard props
interface TeamCardProps {
  name: string;
  logo: string;
  numPlayers: number;
}

// Define the type for the team object
interface Team {
  name: string;
  logo: string;
  numPlayers: number;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, logo, numPlayers }) => (
  <div className="xl:ml-[10px] bg-white border border-black rounded-[30px] shadow-md flex flex-col items-center p-6 mt-4 h-[200px] w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
    <div className="flex items-center mb-4">
      <Image src={logo} alt={name} width={80} height={80} className="mr-4" />
      <div>
        <h3 className="font-bold text-black text-[24px]">{name}</h3>
        <p className="text-black text-[24px]">No of Players: {numPlayers}</p>
      </div>
    </div>
    <button className="bg-green-500 text-white px-4 py-2 rounded-xl w-full max-w-[150px]">
      View Team
    </button>
  </div>
);

const TeamList = () => {
  const { teams, loading, error } = useTeamsList();
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>(teams);
  const [searchTerm, setSearchTerm] = useState('');

  const handleBackToTeams = () => {
    setIsCreatingTeam(false);
  };

  const handleSearch = (term: SetStateAction<string>) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredTeams(teams); // Reset to all teams if search is empty
    } else {
      const lowerCaseTerm = term.toLowerCase();
      const filtered = teams.filter(team => 
        team.name.toLowerCase().startsWith(lowerCaseTerm)
      );
      setFilteredTeams(filtered);
    }
  };

  if (isCreatingTeam) {
    return <TeamCreationForm onBack={handleBackToTeams} />;
  }

  if (loading) {
    return <div>Loading teams...</div>;
  }

  if (error) {
    return <div>Error fetching teams: {(error as Error).message}</div>; // Ensure error is of type Error
  }

  if (!Array.isArray(teams)) {
    return <div>No teams available.</div>;
  }

  return (
    <div>
      <Navbar onSelectSection={function (section: string): void {
        throw new Error('Function not implemented.');
      } } />
      <TeamsHeader setIsCreatingTeam={setIsCreatingTeam} onSearch={handleSearch} />
      <div className="max-h-[450px] overflow-y-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team, index) => (
              <div className="flex justify-center mr-4" key={index}>
                <TeamCard {...team} />
              </div>
            ))
          ) : (
            <main className="container mx-auto p-4 flex flex-col items-center ">
              <h2 className="text-3xl md:text-4xl mt-6">Team Not Found</h2>
            </main>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeamList;
