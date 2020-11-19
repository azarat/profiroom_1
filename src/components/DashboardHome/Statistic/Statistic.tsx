import React from 'react'
import { StatisticProps } from './Types'

const Statistic: React.FC<StatisticProps> = ({ purse }): JSX.Element => {
  return (
    <div className="home__statistic--desktop">
      {purse.map(({ name, img, amount, id }) => (
        <div className="home__statistic-item" key={id}>
          <div className="home__statistic-img-wrapper">
            <img className="home__statistic-img" src={img} alt="" />
          </div>
          <div className="home__statistic-info">
            <p className="home__statistic-info-amount">
              <strong>{amount}</strong>
            </p>
            <p className="home__statistic-info-text">{name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Statistic
