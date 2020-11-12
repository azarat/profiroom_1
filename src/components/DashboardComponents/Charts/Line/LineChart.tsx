import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

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
      data: [100, 200, 30, 100, 50, 30],
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

const LineChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default LineChart
