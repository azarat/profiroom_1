import React, { useState } from 'react'
import { NextPage } from 'next'
import Carousel from '../../src/components/DashboardComponents/CarouselHome/CarouselHome'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import PieChartCircle from '../../src/components/DashboardComponents/Charts/PieChart/PieChart'
import LineChart from '../../src/components/DashboardComponents/Charts/Line/LineChart'
import { achievesArray } from '../../src/components/DashboardComponents/Achieves/Achieves'
import { Progress } from 'antd'
import DashboardLayout from '../../layouts/DashboardLayout'
import { dashboardProps } from './index'
import StatusBlock from '../../src/components/DashboardComponents/StatusBlock/StatusBlock'
import Statistic from '../../src/components/DashboardComponents/Statistic'
import ProfileStat from '../../src/components/DashboardComponents/ProfileStat/ProfileStat'
import Comments from '../../src/components/DashboardComponents/Comments/Comments'
import ArrowSVG from '../../public/assets/img/arrow-down.svg'

const Home: NextPage<dashboardProps> = ({ jsonResponse, dashboardResponse }): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1)
  const [dealsType, setDealsType] = useState(dashboardResponse.allDealsperMonths)
  const [activeBtnGraphic, setActiveBtnGraphic] = useState<string>('month')
  const [commentsType, setCommentsType] = useState('positive')

  console.log(dashboardResponse)

  const statistic = [
    {
      name: 'к-ть виконаних замовлень',
      amount: dashboardResponse.purse.deals_done_count,
      img: '/assets/img/finance/deals_count.png',
      id: 1,
    },
    {
      name: 'к-ть всіх замовників',
      amount: dashboardResponse.purse.customers_count,
      img: '/assets/img/finance/dealers_count.png',
      id: 2,
    },
    {
      name: 'заморожені кошти',
      amount: dashboardResponse.purse.hold,
      img: '/assets/img/finance/hold.png',
      id: 3,
    },
    {
      name: 'виведені кошти',
      amount: dashboardResponse.purse.withdrawn,
      img: '/assets/img/finance/withdrawn.png',
      id: 4,
    },
    {
      name: 'стан рахунку',
      amount: dashboardResponse.purse.summ,
      img: '/assets/img/finance/current.png',
      id: 5,
    },
  ]

  return (
    <DashboardLayout userData={jsonResponse}>
      <div className="dashboard__home home">
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
            <h5 className="comments__title">
              Рейтинг і відгуки (
              {dashboardResponse.positiveCommentsFreelancer.length +
                dashboardResponse.negativeCommentsFreelancer.length}
              )
            </h5>
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

          <div className="home__my-achieves my-achieves">
            <h4 className="my-achieves__title">Мої досягнення</h4>
            <p className="my-achieves__sub-title">Мій рівень професійності і тарифні плани</p>
            <div className="my-achieves__rank-list">
              {achievesArray.map((rank, index) => (
                <div className="my-achieves__rank-item" key={index}>
                  <div className="my-achieves__img-wrapper">
                    <img src={rank.img} alt="" className="my-achieves__img" />
                  </div>
                  <p className="my-achieves__rank">{rank.name}</p>
                </div>
              ))}
              <div className="my-achieves__progress">
                <Progress percent={20} showInfo={false} />
              </div>
            </div>
            <h6 className="my-achieves__next-lvl-title">Умови переходу на наступний рівень</h6>
            <div className="my-achieves__skill-level">
              <div className="my-achieves__skill-block">
                <div className="my-achieves__skill-block-title">
                  <div className="my-achieves__img-wrapper">
                    <img src="/assets/img/achieves/zero.png" alt="" className="my-achieves__img" />
                  </div>
                  <p className="my-achieves__current-rank">
                    Ви досягли рівня &quot;Стартовий&quot;
                  </p>
                </div>
                <div className="my-achieves__checkpoints-list">
                  <div className="my-achieves__checkpoint">
                    <div className="my-achieves__checkpoint-name">
                      Реєстрація <span className="my-achieves__checkpoint-goal">Ціль</span>
                    </div>
                    <div className="my-achieves__checkpoint-proggress">
                      <div className="my-achieves__status-done"></div>
                      <span>100%</span>

                      <div className="my-achieves__progress-line-wrapper">
                        <Progress percent={100} showInfo={false} strokeColor="#5ddfa9" />
                      </div>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="my-achieves__checkpoint">
                    <div className="my-achieves__checkpoint-name">
                      Підтвердження пошти <span className="my-achieves__checkpoint-goal">Ціль</span>
                    </div>
                    <div className="my-achieves__checkpoint-proggress">
                      <div className="my-achieves__status-done"></div>
                      <span>100%</span>

                      <div className="my-achieves__progress-line-wrapper">
                        <Progress percent={100} showInfo={false} strokeColor="#5ddfa9" />
                      </div>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="my-achieves__skill-block">
                <div className="my-achieves__skill-block-title">
                  <div className="my-achieves__img-wrapper">
                    <img
                      src="/assets/img/achieves/beginer.png"
                      alt=""
                      className="my-achieves__img"
                    />
                  </div>
                  <p className="my-achieves__current-rank">
                    Наступний рівень &quot;Початківець&quot;
                  </p>
                </div>
                <div className="my-achieves__checkpoints-list">
                  <div className="my-achieves__checkpoint">
                    <div className="my-achieves__checkpoint-name">
                      Заповнення профілю <span className="my-achieves__checkpoint-goal">Ціль</span>
                    </div>
                    <div className="my-achieves__checkpoint-proggress">
                      <div className="my-achieves__status-done my-achieves__status-no-done"></div>
                      <span>0%</span>

                      <div className="my-achieves__progress-line-wrapper">
                        <Progress percent={0} showInfo={false} strokeColor="#5ddfa9" />
                      </div>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="my-achieves__checkpoint">
                    <div className="my-achieves__checkpoint-name">
                      Створення першої послуги
                      <span className="my-achieves__checkpoint-goal">Ціль</span>
                    </div>
                    <div className="my-achieves__checkpoint-proggress">
                      <div className="my-achieves__status-done"></div>
                      <span>100%</span>

                      <div className="my-achieves__progress-line-wrapper">
                        <Progress percent={100} showInfo={false} strokeColor="#5ddfa9" />
                      </div>
                      <span>100%</span>
                    </div>
                  </div>
                  <div className="my-achieves__checkpoint">
                    <div className="my-achieves__checkpoint-name">
                      Закриття першої угоди
                      <span className="my-achieves__checkpoint-goal">Ціль</span>
                    </div>
                    <div className="my-achieves__checkpoint-proggress">
                      <div className="my-achieves__status-done my-achieves__status-no-done"></div>
                      <span>0%</span>

                      <div className="my-achieves__progress-line-wrapper">
                        <Progress percent={0} showInfo={false} strokeColor="#5ddfa9" />
                      </div>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'

export default Home
