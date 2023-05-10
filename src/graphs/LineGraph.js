import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'chartjs-adapter-date-fns';
import { CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title);

const LineGraph = ({ data, label, line, color }) => {
    const chartRef = useRef(null);
    let chartInstance = null;

    useEffect(() => {
        renderChart();
        return () => {
        if (chartInstance) {
            chartInstance.destroy();
        }
        };
    }, [data]);

    const renderChart = () => {
        const labels = data.map(obj => obj._time);
        const values = data.map(obj => obj.value);
        const ctx = chartRef.current.getContext('2d');

        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels,
                datasets: [
                {
                    label: label,
                    data: values,
                    fill: false,
                    borderColor: line,
                    backgroundColor: color,
                    tension: 0.1
                }
                ]
            },
            options: {
                scales: {
                    x: {
                        type: 'timeseries',
                        time: {
                            unit: 'minute'
                        },
                        ticks: {
                            source: 'auto'
                        },
                        scaleLabel: {
                            display: false,
                            labelString: "Time"
                        }
                    },
                    yAxes: {
                        beginAtZero: true,
                        scaleLabel: {
                            display: true,
                            labelString: label
                        }
                    }
                }
            }
        });
    };

    return (
        <div className='p-4 w-full h-full'>
        <canvas ref={chartRef} />
        </div>
    );
};

export default LineGraph;
