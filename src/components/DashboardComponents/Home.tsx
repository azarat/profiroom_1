import React, { useState } from 'react'
import { NextPage } from 'next'
import Carousel from './CarouselHome/CarouselHome'
import statistic from './Statistic'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Switch } from 'antd'
import Link from 'next/link'
import PieChartCircle from './Charts/PieChart/PieChart'
import LineChart from './Charts/Line/LineChart'
import { achievesArray } from './Achieves/Achieves'
import { Progress } from 'antd'

const Home: NextPage = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<number>(1)

  return (
    <div className="dashboard__home home">
      <div className="home__wrapper">
        <div className="home__statistic">
          <div className="home__statistic--desktop">
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
          </div>

          <Carousel buttonNext={<RightOutlined />} buttonPrev={<LeftOutlined />}>
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
          <div className="home__status-block-wrapper">
            <div className="home__freelancer-info freelancer-info">
              <h5 className="freelancer-info__title">Статус вашого профілю</h5>
              <div className="freelancer-info__status">
                <p className="freelancer-info__status-text">
                  Cтатус доступності:
                  <span className="freelancer-info__current-status">вільний</span>
                </p>
                <p className="freelancer-info__status-text">
                  Проектів в роботі: <strong>0</strong>
                </p>

                <p className="freelancer-info__status-text">
                  Проектів в черзі: <strong>0</strong>
                </p>
              </div>
            </div>

            <div className="home__status-change status-change">
              <p className="status-change__title">Змінити статус можна тут</p>
              <div className="status-change__switch">
                <span className="status-change__switch-status">вільний</span>
                <Switch />
                <span className="status-change__switch-status">завантажений</span>
              </div>
              <Link href="">
                <a href="" className="status-change__profile-link">
                  дивитися профіль
                </a>
              </Link>
            </div>
          </div>
          <div className="home__offers-graphic offers-graphic">
            <h5 className="offers-graphic__title">Кількість замовлень за час</h5>
            <LineChart />
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
                <PieChartCircle />
              </div>
            </div>

            <div className={`tabs__item  ${activeTab === 2 ? 'tabs__item--active' : ''}`}>
              <div className="tabs__item-inner">
                <div className="home__profile-stats profile-stats">
                  <div className="profile-stats__profile-views-wrapper">
                    <div className="profile-stats__profile-views">
                      <div className="profile-stats__profile-avatar-wrapper">
                        <img
                          className="profile-stats__profile-avatar"
                          src="/assets/img/avatar.svg"
                          alt=""
                        />
                      </div>
                      <div className="profile-stats__profile-text-wrapper">
                        <p className="profile-stats__profile-text">Мій профіль</p>
                        <p className="profile-stats__profile-text-stat">1 перегляд(ів)</p>
                      </div>
                    </div>
                    <div className="profile-stats__offers-views">
                      <p className="profile-stats__offers-views-title">
                        Найбільш популярні послуги
                      </p>
                      <div className="profile-stats__popular-offers">
                        <div className="profile-stats__popular-offers-item">
                          <div className="profile-stats__offers-item-img-wraper">
                            <img
                              src="/assets/img/avatar.svg"
                              alt=""
                              className="profile-stats__offers-item-img"
                            />
                          </div>
                          <div>
                            <p className="profile-stats__offers-item-name">Обнимаю панд</p>
                            <p className="profile-stats__offers-item-view">3 просмотра</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__piechart-profile-wrapper">
          <div className="home__piechart-block piechart-block">
            <div className="piechart-block__wrapper">
              <h5 className="piechart-block__title">к-ть замовлень</h5>
              <PieChartCircle />
            </div>
          </div>
          <div className="home__profile-stats profile-stats">
            <h5 className="profile-stats__title">Показники профілю</h5>
            <div className="profile-stats__profile-views-wrapper">
              <div className="profile-stats__profile-views">
                <div className="profile-stats__profile-avatar-wrapper">
                  <img
                    className="profile-stats__profile-avatar"
                    src="/assets/img/avatar.svg"
                    alt=""
                  />
                </div>
                <div className="profile-stats__profile-text-wrapper">
                  <p className="profile-stats__profile-text">Мій профіль</p>
                  <p className="profile-stats__profile-text-stat">1 перегляд(ів)</p>
                </div>
              </div>
              <div className="profile-stats__offers-views">
                <p className="profile-stats__offers-views-title">Найбільш популярні послуги</p>
                <div className="profile-stats__popular-offers">
                  <div className="profile-stats__popular-offers-item">
                    <div className="profile-stats__offers-item-img-wraper">
                      <img
                        src="/assets/img/avatar.svg"
                        alt=""
                        className="profile-stats__offers-item-img"
                      />
                    </div>
                    <div>
                      <p className="profile-stats__offers-item-name">Обнимаю панд</p>
                      <p className="profile-stats__offers-item-view">3 просмотра</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                <p className="my-achieves__current-rank">Ви досягли рівня &quot;Стартовий&quot;</p>
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
                  <img src="/assets/img/achieves/beginer.png" alt="" className="my-achieves__img" />
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
                    Закриття першої угоди <span className="my-achieves__checkpoint-goal">Ціль</span>
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
  )
}

export default Home
