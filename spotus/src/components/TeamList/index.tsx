import Image from 'next/image';

const TeamCard = ({ name, players }) => (
  <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
    <Image src="/Images/spotus-loggo.png" alt={name} width={80} height={80} />
    <h3 className="mt-2 font-bold">{name}</h3>
    <p className="text-sm text-gray-600">No of Players: {players}</p>
    <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded-full">
      View Team
    </button>
  </div>
);

const TeamList = () => {
  const teams = Array(6).fill({ name: 'Ligi Ndogo', players: 12 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {teams.map((team, index) => (
        <TeamCard key={index} {...team} />
      ))}
    </div>
  );
};

export default TeamList;