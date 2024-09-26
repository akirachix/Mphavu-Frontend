import { SignupBarChart } from '../SignUps';
import { VideoUploadsBarChart } from '../VideoUploads';
import { ActiveUsersLineChart } from '../ActiveUsers';

export default function Dashboardss() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-orange-500 text-white rounded-lg shadow-lg p-4 text-center">
          No. of signups in a week
        </div>
        <div className="bg-green-500 text-white rounded-lg shadow-lg p-4 text-center">
          No. of Active Users
        </div>
        <div className="bg-blue-500 text-white rounded-lg shadow-lg p-4 text-center">
          No. of videos uploaded weekly
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded shadow-lg">
          <SignupBarChart />
        </div>

        <div className="bg-white p-4 rounded shadow-lg">
          <ActiveUsersLineChart />
        </div>

        <div className="bg-white p-4 rounded shadow-lg col-span-2">
          <VideoUploadsBarChart />
          <p className="mt-4 text-center text-sm">
            This bar chart displays the number of videos uploaded per week thus helping to understand the effectiveness of the video feature in the product.
          </p>
        </div>
      </div>
    </div>
  );
}
