

"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import TeamsHeader from '../TeamsHeader';
import TeamCreationForm from '../TeamCreationForm'; 
import useTeamsList from '@/app/Hooks/teamsList';
import PlayersTable from '../PlayersTable';

const placeholderImage = '/images/LigiNdogo.jpeg';

interface TeamCardProps {
  id: string;
  name: string;
  numPlayers: number;
  onView: (id: string, name: string) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ id, name, numPlayers, onView }) => (
  <div className="xl:ml-[10px] bg-white border border-black rounded-[30px] shadow-md flex flex-col items-center p-6 mt-4 h-[200px] w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[500px]">
    <div className="flex items-center mb-4">
      <Image src={placeholderImage} alt={name} width={80} height={80} className="mr-14" />
      <div>
        <h3 className="font-bold text-black text-[24px]">{name}</h3>
        <p className="text-black text-[24px]">No of Players: {numPlayers}</p>
      </div>
    </div>
    <button 
      onClick={() => onView(id, name)}
      className="bg-[#46BC14] text-white px-4 py-2 rounded-xl w-full max-w-[150px] ml-32"
    >
      View Team
    </button>
  </div>
);

const TeamList = () => {
  const { teams, players, loading, error, fetchPlayersForTeam } = useTeamsList();
  const [isCreatingTeam, setIsCreatingTeam] = useState(false);
  const [selectedTeamId, setSelectedTeamId] = useState<string | null>(null);
  const [selectedTeamName, setSelectedTeamName] = useState<string | null>(null);
  const [filteredTeams, setFilteredTeams] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (teams) {
      console.log("Fetched Teams:", teams);
      setFilteredTeams(teams);
    }
  }, [teams]);

  const handleBackToTeams = () => {
    setIsCreatingTeam(false);
    setSelectedTeamId(null);
    setSelectedTeamName(null);
  };

  const handleViewTeam = (id: string, name: string) => {
    setSelectedTeamId(id);
    setSelectedTeamName(name);
    fetchPlayersForTeam(id); // Fetch players for the selected team
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term === '') {
      setFilteredTeams(teams);
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

  if (selectedTeamId) {
    return <PlayersTable teamId={selectedTeamId} teamName={selectedTeamName} onBack={handleBackToTeams} players={players} />;
  }

  if (loading) {
    return <div>Loading teams...</div>;
  }

  if (error) {
    return <div>Error fetching teams: {error.message}</div>;
  }

  if (!Array.isArray(teams)) {
    return <div>No teams available.</div>;
  }

  return (
    <div>
      <Navbar />
      <TeamsHeader setIsCreatingTeam={setIsCreatingTeam} onSearch={handleSearch} />
      <div className="max-h-[450px] overflow-y-auto mt-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
          {filteredTeams.length > 0 ? (
            filteredTeams.map((team) => (
              <div className="flex justify-center mr-4" key={team.id}>
                <TeamCard 
                  id={team.id} 
                  name={team.name} 
                  numPlayers={team.numPlayers} 
                  onView={handleViewTeam}
                />
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
