import React from 'react'
//charts
import Highcharts, { Options } from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'
//types
import { UserFinanceGraphResponseTypes } from '../Types'

const Graphic: React.FC<UserFinanceGraphResponseTypes> = ({ graph }): JSX.Element => {
  const months = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ]

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
      type: 'column',
      inverted: false,
    },
    series: [
      {
        name: 'Дохід',
        type: 'column',
        data: graph.graph.map((i) => i.up) as any[],
      },
      {
        name: 'Недохід',
        type: 'column',
        data: graph.graph.map((i) => i.down) as any[],
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
      categories: months,

      //   labels: {},
    },
    credits: {
      enabled: false,
    },
  }

  return (
    <div className="finance__graphic">
      <h3 className="finance__graphic-title">мій дохід(uah)</h3>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  )
}

export default Graphic
