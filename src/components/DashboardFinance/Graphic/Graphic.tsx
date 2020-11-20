import React from 'react'
import Highcharts, { Options } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
import { utimes } from 'fs/promises'

const Graphic = ({ history }) => {
  const options: Options = {
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
        data: history.map((item) => {
          if (item.trnsactonType === 'income') {
            return item.amount
          }
        }),
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
      categories: history.map((item) => {
        if (item.trnsactonType === 'income') {
          return new Date(item.isoDate).toLocaleDateString()
        }
      }),
      //   labels: {},
    },
    credits: {
      enabled: false,
    },
  }

  return <HighchartsReact highcharts={Highcharts} options={options} />
}

export default Graphic
