import React from 'react'

type StatisticTypes = {
  purse: PurseTypes[]
}
type PurseTypes = {
  name: string
  id: number
  img: string
  amount: number
}
const Statistic: React.FC<StatisticTypes> = ({ purse }) => {
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
