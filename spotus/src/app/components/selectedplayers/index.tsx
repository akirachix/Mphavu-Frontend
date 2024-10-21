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

export function SelectedPlayersLineChart() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Selected Players',
        data: [5, 10, 20, 35],
        borderColor: 'rgba(33, 63, 191, 1)',
        backgroundColor: 'rgba(33, 63, 191, 0.8)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Number of Selected Players for Scouting' },
    },
  };

  return <Line data={data} options={options} />;
}
