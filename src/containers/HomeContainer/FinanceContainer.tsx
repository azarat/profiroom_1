import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import Carousel from '../../components/DashboardHome/CarouselHome/CarouselHome'

import React from 'react'
import Statistic from '../../components/DashboardHome/Statistic/Statistic'
import Wallets from '../../components/DashboardFinance/Wallets/Wallets'
import Calendar from '../../components/DashboardFinance/Calendar/Calendar'
import Graphic from '../../components/DashboardFinance/Graphic/Graphic'
import PaymentHistory from '../../components/DashboardFinance/PaymentHistory/PaymentHistory'

const FinanceContainer = ({
  userFinanceResponse: { history, purse },
  userFinanceGraphResponse,
}) => {
  console.log(history)

  const statistic = [
    {
      name: 'к-ть виконаних замовлень',
      amount: purse ? purse.deals_count : 0,
      img: '/assets/img/finance/deals_count.png',
      id: 1,
    },
    {
      name: 'к-ть всіх замовників',
      amount: purse ? purse.dealers_count : 0,
      img: '/assets/img/finance/dealers_count.png',
      id: 2,
    },
    {
      name: 'заморожені кошти',
      amount: purse ? purse.hold : 0,
      img: '/assets/img/finance/hold.png',
      id: 3,
    },
    {
      name: 'виведені кошти',
      amount: purse ? purse.withdrawn : 0,
      img: '/assets/img/finance/withdrawn.png',
      id: 4,
    },
    {
      name: 'стан рахунку',
      amount: purse ? purse.summ : 0,
      img: '/assets/img/finance/current.png',
      id: 5,
    },
  ]

  return (
    <div className="dashboar__finance finance">
      <Carousel
        buttonNext={<RightOutlined style={{ color: '#4285f4' }} />}
        buttonPrev={<LeftOutlined style={{ color: '#4285f4' }} />}
      >
        {statistic.map(({ name, img, amount, id }) => (
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
      </Carousel>
      <Statistic purse={statistic} />
      <Wallets />
      <Calendar />
      <Graphic history={history} />
      <PaymentHistory history={history} />
    </div>
  )
}

export default FinanceContainer
