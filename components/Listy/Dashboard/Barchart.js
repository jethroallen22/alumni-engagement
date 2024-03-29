import { useState, useEffect } from "react"; 
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);


export default function Barchart() {

    const [chartData, setChartData] = useState({
        datasets: [],
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sun"],
            datasets: [
                {
                    label: "Sales $",
                    data: [12324, 543, 3553, 33534, 1234, 5433, 53445],
                    borderColor: "rgb(53, 162, 235)",
                    backgroundColor: "rgb(53, 162, 235, 0.4)",
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: "top"
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                }
            },
            maintainAspectRation: false,
            responsive: true
        })
    }, []);

    return (
        <>
            <div className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 border rounded-lg bg-white">
                <Bar data={chartData} options={chartOptions} />
            </div>
        </>
    )
}