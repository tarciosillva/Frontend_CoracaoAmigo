import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import { data, options } from "./config"
import { GrapContent } from "./style";

const BarChart: React.FC = () => {
    return (
        <GrapContent>
            <p>Número de atendimentos/entregas por mês</p>
            <Bar options={options} data={data} />
        </GrapContent>
    )
}

export default BarChart

