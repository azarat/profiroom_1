import React from 'react'
//components
import { achievesArray } from '../../DashboardHome/achievesArray'
import { Progress } from 'antd'

const Achieves: React.FC = (): JSX.Element => {
  return (
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
            <p className="my-achieves__current-rank">Наступний рівень &quot;Початківець&quot;</p>
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
  )
}

export default Achieves
