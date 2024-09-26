// import { Coach } from '../utils/coaches';
// import { Agent } from "http";

interface AgentsTableProps {
  coaches: Agent[];
}

const AgentsTable: React.FC<AgentsTableProps> = ({ agents }) => {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-green-500 text-white">
          <th className="p-2 text-left">Agent ID</th>
          <th className="p-2 text-left">First Name</th>
          <th className="p-2 text-left">Last Name</th>

        </tr>
      </thead>
      <tbody>
        {agents.map((agent, index) => (
          <tr key={agent.id} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
            <td className="p-2">{agent.id}</td>
            <td className="p-2">{agent.firstName}</td>
            <td className="p-2">{agent.lastName}</td>
            <td className="p-2">{agent.team}</td>
            <td className="p-2">{agent.players}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AgentsTable;