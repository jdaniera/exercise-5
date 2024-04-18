import { Pie } from "react-chartjs-2"

import {
    Chart as ChartJS, 
    CategoryScale, 
    ArcElement, 
    Tooltip,
    Legend
} from 'chart.js';

import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            label: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"], 
            datasets: [
                {
                    label: "# of Votes",
                    data: [10, 6, 15, 20, 17, 5],
                    borderColor: [
                        'rgb(53, 162, 235)',
                        'rgb(89, 221, 65)',
                        'rgb(23, 180, 210)',
                        'rgb(123, 162, 190)',
                        'rgb(102, 54, 5)',
                        'rgb(32, 162, 24)',
                         ],
                    backgroundColor: [
                        'rgb(53, 162, 235, 0.4)',
                        'rgb(89, 221, 65, 0.4)',
                        'rgb(23, 180, 210, 0.4)',
                        'rgb(123, 162, 190, 0.4)',
                        'rgb(102, 54, 5, 0.4)',
                        'rgb(32, 162, 24, 0.4)',
                    ]
                }
            ]
            })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Daily Revenue'
                },
                maintainAspectRatio: false,
                responsive: false
            }
        })
    })


    return(
        <>
            <div>
                <Pie data={chartData} options={chartOptions} style={{width: "500px", height:"300px"}}/>
            </div>
        </>
    )
}