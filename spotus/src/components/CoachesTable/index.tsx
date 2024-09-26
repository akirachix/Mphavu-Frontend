import { Coach } from '../utils/coaches';

interface CoachesTableProps {
  coaches: Coach[];
}

const CoachesTable: React.FC<CoachesTableProps> = ({ coaches }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-green-500 text-white">
          <th className="p-2 text-left">Coach ID</th>
          <th className="p-2 text-left">First Name</th>
          <th className="p-2 text-left">Last Name</th>
          <th className="p-2 text-left">Team</th>
          <th className="p-2 text-left">Players</th>
        </tr>
      </thead>
      <tbody>
        {coaches.map((coach, index) => (
          <tr key={coach.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="p-2">{coach.id}</td>
            <td className="p-2">{coach.firstName}</td>
            <td className="p-2">{coach.lastName}</td>
            <td className="p-2">{coach.team}</td>
            <td className="p-2">{coach.players}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CoachesTable;