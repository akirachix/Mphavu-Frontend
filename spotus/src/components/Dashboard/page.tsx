import { ActiveUsersLineChart } from '../ActiveUsers';
import { SignupBarChart } from '../SignUps';
import { VideoUploadsBarChart } from '../VideoUploads';
import { SelectedPlayersLineChart } from '../SelectedPlayers';

export default function Dashboard() {
  return (
    <div className="grid grid-cols-2 gap-8 p-8">
      <div className="bg-white p-4 rounded shadow">
        <SignupBarChart />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <ActiveUsersLineChart />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <VideoUploadsBarChart />
      </div>
      <div className="bg-white p-4 rounded shadow">
        <SelectedPlayersLineChart />
      </div>
    </div>
  );
}
