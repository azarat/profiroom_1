import React from 'react'
//charts
import Highcharts, { Options } from 'highcharts/highstock'
import PieChart from 'highcharts-react-official'
//types
import { PieChartProps } from './Types'

const PieChartCircle: React.FC<PieChartProps> = ({ pieData }): JSX.Element => {
  const options: Options = {
    chart: {
      type: 'pie',
      marginBottom: 70,
    },
    responsive: {
      rules: [{ condition: { maxWidth: 400 } }],
    },
    series: [
      {
        type: 'pie',
        name: 'Ваші замовлення',
        data: [
          {
            y: pieData && pieData[0],
            name: 'к-ть виконаних замовлень',
            color: '#4285f4',
          },
          {
            y: pieData && pieData[1],
            name: 'проекти не здані',
            color: '#ff9090',
          },
          {
            y: pieData && pieData[2],
            name: 'проекти в роботі',
            color: '#5ddfa9',
          },
        ],
        dataLabels: {
          enabled: false,
        },
      },
    ],

    title: {
      text: '',
    },
    subtitle: {
      text: pieData[0] + pieData[1] + pieData[2],
      floating: true,
      style: {
        fontSize: '14px',
        fontWeight: 'bold',
        color: '#000000',
      },
      y: 170,
    },

    exporting: {},

    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'true',
        showInLegend: true,
        innerSize: '60%',
        dataLabels: {
          enabled: false,
        },
      },
      series: {
        animation: false,
      },
    },

    yAxis: {
      title: {},
    },
    legend: {},
    credits: {
      enabled: false,
    },
  }

  return <PieChart highcharts={Highcharts} options={options} />
}
export default PieChartCircle
