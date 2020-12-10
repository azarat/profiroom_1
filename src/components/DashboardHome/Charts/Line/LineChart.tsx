import React from 'react'
//charts
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
//type
import { LineChartProps } from './Types'

const LineChart: React.FC<LineChartProps> = ({ data }): JSX.Element => {
  const options = {
    title: {
      text: '',
    },
    subtitle: {
      text: '',
    },
    exporting: {
      enabled: false,
    },
    chart: {
      type: 'line',
      inverted: false,
    },
    series: [
      {
        name: 'Дохід',
        data: data,
      },
    ],

    plotOptions: {
      series: {
        animation: false,
      },
    },

    yAxis: {
      title: {
        text: '',
      },
      labels: {},
    },
    legend: {
      enabled: false,
    },
    tooltip: {
      enabled: true,
    },
    lang: {},
    xAxis: {
      title: {},
      labels: {
        format: 'Месяц',
      },
    },
    credits: {
      enabled: false,
    },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default LineChart
