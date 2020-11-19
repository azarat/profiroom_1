import React, { useContext, useState } from 'react'
//antd
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
//components
import Carousel from '../../components/DashboardHome/CarouselHome/CarouselHome'
import PieChartCircle from '../../components/DashboardHome/Charts/PieChart/PieChart'
import LineChart from '../../components/DashboardHome/Charts/Line/LineChart'
import { dashboardProps } from '../../../pages/dashboard/index'
import StatusBlock from '../../components/DashboardHome/StatusBlock/StatusBlock'
import Statistic from '../../components/DashboardHome/Statistic/Statistic'
import ProfileStat from '../../components/DashboardHome/ProfileStat/ProfileStat'
import Comments from '../../components/DashboardHome/Comments/Comments'
import ArrowSVG from '../../../public/assets/img/arrow-down.svg'
//context
import { MainContext } from '../../context/MainContext'
import Achieves from '../../components/DashboardHome/Achieves/Achieves'

const HomeContainer: React.FC<dashboardProps> = ({ dashboardResponse }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const [dealsType, setDealsType] = useState(dashboardResponse.allDealsperMonths)
  const [activeBtnGraphic, setActiveBtnGraphic] = useState<string>('month')
  const [commentsType, setCommentsType] = useState('positive')

  const { isMenuOpen } = useContext(MainContext)

  const statistic = [
    {
      name: 'к-ть виконаних замовлень',
      amount: dashboardResponse.purse ? dashboardResponse.purse.deals_done_count : 0,
      img: '/assets/img/finance/deals_count.png',
      id: 1,
    },
    {
      name: 'к-ть всіх замовників',
      amount: dashboardResponse.purse ? dashboardResponse.purse.customers_count : 0,
      img: '/assets/img/finance/dealers_count.png',
      id: 2,
    },
    {
      name: 'заморожені кошти',
      amount: dashboardResponse.purse ? dashboardResponse.purse.hold : 0,
      img: '/assets/img/finance/hold.png',
      id: 3,
    },
    {
      name: 'виведені кошти',
      amount: dashboardResponse.purse ? dashboardResponse.purse.withdrawn : 0,
      img: '/assets/img/finance/withdrawn.png',
      id: 4,
    },
    {
      name: 'стан рахунку',
      amount: dashboardResponse.purse ? dashboardResponse.purse.summ : 0,
      img: '/assets/img/finance/current.png',
      id: 5,
    },
  ]

  return (
    <div className={`dashboard__home home ${isMenuOpen ? 'home--blur' : ''}`}>
      <div className="home__wrapper">
        <div className="home__statistic">
          <Statistic purse={statistic} />

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
        </div>
        <div className="home__status-graphic-wrapper">
          <StatusBlock dealsCounts={dashboardResponse.dealsCounts} />

          <div className="home__offers-graphic offers-graphic">
            <h5 className="offers-graphic__title">Кількість замовлень за час</h5>
            <LineChart data={dealsType} />
            <div className="offers-graphic__btn-wrapper">
              <button
                className={`offers-graphic__btn ${
                  activeBtnGraphic === 'month' ? 'offers-graphic__btn--active' : ''
                }`}
                onClick={() => {
                  setActiveBtnGraphic('month')
                  setDealsType(dashboardResponse.allDealsperMonths)
                }}
              >
                Місяць
              </button>
              <button
                className={`offers-graphic__btn ${
                  activeBtnGraphic === 'year' ? 'offers-graphic__btn--active' : ''
                }`}
                onClick={() => {
                  setActiveBtnGraphic('year')
                  setDealsType(dashboardResponse.allDealsPerYears)
                }}
              >
                Рік
              </button>
            </div>
          </div>

          <div className="home__piechart-status-tabs tabs">
            <div className="tabs__buttons-wrapper">
              <button
                className={`tabs__btn ${activeTab === 1 ? 'tabs__btn--active' : ''}`}
                onClick={() => setActiveTab(1)}
              >
                Показники
              </button>
              <button
                className={`tabs__btn ${activeTab === 2 ? 'tabs__btn--active' : ''}`}
                onClick={() => setActiveTab(2)}
              >
                К-ть замовлень
              </button>
            </div>

            <div className={`tabs__item  ${activeTab === 1 ? 'tabs__item--active' : ''}`}>
              <div className="tabs__item-inner">
                <PieChartCircle pieData={dashboardResponse.pieChart} />
              </div>
            </div>

            <div className={`tabs__item  ${activeTab === 2 ? 'tabs__item--active' : ''}`}>
              <div className="tabs__item-inner">
                <ProfileStat
                  avatar={dashboardResponse.avatar}
                  views={dashboardResponse.views}
                  offerViews={dashboardResponse.offerViews}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="home__comments comments">
          <div className="comments__title-wrapper">
            <h5 className="comments__title">
              Рейтинг і відгуки (
              {dashboardResponse.positiveCommentsFreelancer.length +
                dashboardResponse.negativeCommentsFreelancer.length}
              )
            </h5>
            <div className="comments__tabs--desktop">
              <div
                role="presentation"
                onClick={() => setCommentsType('positive')}
                className={`comments__btn ${
                  commentsType === 'positive' ? 'comments__btn--active' : ''
                }`}
              >
                позитивні ({dashboardResponse.positiveCommentsFreelancer.length})
                <div
                  className={`comments__arrow-wrapper   ${
                    commentsType === 'positive' ? 'comments__arrow-wrapper--active' : ''
                  }`}
                >
                  <ArrowSVG
                    className={`comments__arrow ${
                      commentsType === 'positive' ? 'comments__arrow--active' : ''
                    }`}
                  />
                </div>
              </div>
              <div
                role="presentation"
                onClick={() => setCommentsType('negative')}
                className={`comments__btn ${
                  commentsType === 'negative' ? 'comments__btn--active' : ''
                }`}
              >
                негативні ({dashboardResponse.negativeCommentsFreelancer.length})
                <div
                  className={`comments__arrow-wrapper   ${
                    commentsType === 'negative' ? 'comments__arrow-wrapper--active' : ''
                  }`}
                >
                  <ArrowSVG
                    className={`comments__arrow ${
                      commentsType === 'negative' ? 'comments__arrow--active' : ''
                    }`}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="comments__tabs">
            <div
              role="presentation"
              onClick={() => setCommentsType('positive')}
              className={`comments__btn ${
                commentsType === 'positive' ? 'comments__btn--active' : ''
              }`}
            >
              позитивні ({dashboardResponse.positiveCommentsFreelancer.length})
              <div
                className={`comments__arrow-wrapper   ${
                  commentsType === 'positive' ? 'comments__arrow-wrapper--active' : ''
                }`}
              >
                <ArrowSVG
                  className={`comments__arrow ${
                    commentsType === 'positive' ? 'comments__arrow--active' : ''
                  }`}
                />
              </div>
            </div>
            <div
              role="presentation"
              onClick={() => setCommentsType('negative')}
              className={`comments__btn ${
                commentsType === 'negative' ? 'comments__btn--active' : ''
              }`}
            >
              негативні ({dashboardResponse.negativeCommentsFreelancer.length})
              <div
                className={`comments__arrow-wrapper   ${
                  commentsType === 'negative' ? 'comments__arrow-wrapper--active' : ''
                }`}
              >
                <ArrowSVG
                  className={`comments__arrow ${
                    commentsType === 'negative' ? 'comments__arrow--active' : ''
                  }`}
                />
              </div>
            </div>
          </div>

          <Comments
            comments={
              commentsType === 'positive'
                ? dashboardResponse.positiveCommentsFreelancer
                : dashboardResponse.negativeCommentsFreelancer
            }
          />
        </div>
        <div className="home__piechart-profile-wrapper">
          <div className="home__piechart-block piechart-block">
            <div className="piechart-block__wrapper">
              <h5 className="piechart-block__title">к-ть замовлень</h5>
              <PieChartCircle pieData={dashboardResponse.pieChart} />
            </div>
          </div>
          <ProfileStat
            avatar={dashboardResponse.avatar}
            views={dashboardResponse.views}
            offerViews={dashboardResponse.offerViews}
          />
        </div>
        <Achieves />
      </div>
    </div>
  )
}

export { authUser as getServerSideProps } from '../../utils/auth'

export default HomeContainer
