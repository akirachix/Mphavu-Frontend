import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const roundedBarsPlugin = {
  id: 'roundedBars',
  afterDatasetsDraw(chart) {
    const { ctx, data, chartArea: { top, bottom }, scales: { x, y } } = chart;

    ctx.save();
    data.datasets.forEach((dataset, datasetIndex) => {
      const meta = chart.getDatasetMeta(datasetIndex);
      meta.data.forEach((bar) => {
        const { x: barX, y: barY, width, height } = bar;
        const radius = 15;

        if (height > 0) {
          ctx.beginPath();
          ctx.fillStyle = dataset.backgroundColor;

          ctx.moveTo(barX - width / 2, barY);
          ctx.lineTo(barX - width / 2, barY + height - radius);
          ctx.quadraticCurveTo(barX - width / 2, barY + height, barX - width / 2 + radius, barY + height);
          ctx.lineTo(barX + width / 2 - radius, barY + height);
          ctx.quadraticCurveTo(barX + width / 2, barY + height, barX + width / 2, barY + height - radius);
          ctx.lineTo(barX + width / 2, barY);
          ctx.closePath();
          ctx.fill();
        } else {
          ctx.fillStyle = dataset.backgroundColor;
          ctx.fillRect(barX - width / 2, barY, width, height);
        }
      });
    });
    ctx.restore();
  }
};

export function SignupBarChart() {
  const data = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Coach',
        data: [30, 40, 35, 45],
        backgroundColor: '#283891',
        borderRadius: 15,
      },
      {
        label: 'Agent',
        data: [2, 35, 30, 40],
        backgroundColor: '#E99700',
        borderRadius: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Sign-ups per Week' },
    },
  };

  return (
    <Bar 
      data={data} 
      options={options} 
      plugins={[roundedBarsPlugin]} 
    />
  );
}
