import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export function ActiveUsersLineChart() {
  const data = {
    labels: ['2024-08-01', '2024-08-02', '2024-08-03', '2024-08-04'],
    datasets: [
      {
        label: 'Coach',
        data: [30, 40, 35, 45],
        borderColor: 'rgba(255, 178, 47, 1)',
        fill: false,
      },
      {
        label: 'Agent',
        data: [20, 35, 30, 40],
        borderColor: 'rgba(33, 63, 191, 1)',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Number of Active Users' },
    },
  };

  return <Line data={data} options={options} />;
}
