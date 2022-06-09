import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


import { data } from "./config"
import { GrapContent } from "./style";

const PieChart: React.FC = () => {
    return (
        <GrapContent>
            <p>Cadastros por rotas</p>
            <Pie data={data} />
        </GrapContent>
    )
}

export default PieChart

