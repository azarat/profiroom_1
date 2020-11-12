import React from 'react'
import Highcharts, { Options } from 'highcharts/highstock'
import PieChart from 'highcharts-react-official'

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
          // y: user.dealsCounts.EndedWorks,
          y: 5,
          name: 'к-ть виконаних замовлень',
          color: '#4285f4',
        },
        {
          // y: user.dealsCounts.QueuedOffers,
          y: 2,
          name: 'проекти не здані',
          color: '#ff9090',
        },
        {
          // y: user.dealsCounts.inProgressOffers,
          y: 3,
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
    text: '',
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

const PieChartCircle = () => {
  return <PieChart highcharts={Highcharts} options={options} />
}
export default PieChartCircle
