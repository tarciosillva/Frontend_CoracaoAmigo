
export const options = {
    indexAxis: 'x' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Número de atendimentos por mês',
      },
    },
  };

const labels = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto','Setembro','Outubro','Novembro','Dezembro'];

const attendecesOcurrency= [5,6,8,6]

export const data = {
    labels,
    datasets: [
        {
          label: 'Atendimentos',
          data: attendecesOcurrency,
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
      ],
};