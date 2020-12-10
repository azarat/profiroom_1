import React, { useState } from 'react'
import { Switch } from 'antd'
import Link from 'next/link'
import { DealsCountsTypes } from '../../DashboardComponents/HomeTypes'

const StatusBlock: React.FC<DealsCountsTypes> = ({
  dealsCounts: { inProgressOffers, QueuedOffers },
}): JSX.Element => {
  const [isBusy, setIsBusy] = useState<boolean>(false)

  const statusToggle = (checked: boolean) => {
    setIsBusy(checked)
  }

  return (
    <div className="home__status-block-wrapper">
      <div className="home__freelancer-info freelancer-info">
        <h5 className="freelancer-info__title">Статус вашого профілю</h5>
        <div className="freelancer-info__status">
          <p className="freelancer-info__status-text">
            Cтатус доступності:
            <span
              className={`freelancer-info__current-status ${
                isBusy ? 'freelancer-info__current-status--busy' : ''
              }`}
            >
              {!isBusy ? 'вільний' : 'завантажений'}
            </span>
          </p>
          <p className="freelancer-info__status-text">
            Проектів в роботі: <strong>{inProgressOffers}</strong>
          </p>

          <p className="freelancer-info__status-text">
            Проектів в черзі: <strong>{QueuedOffers}</strong>
          </p>
        </div>
      </div>

      <div className="home__status-change status-change">
        <p className="status-change__title">Змінити статус можна тут</p>
        <div className="status-change__switch">
          <span className="status-change__switch-status">вільний</span>
          <Switch onChange={statusToggle} />
          <span className="status-change__switch-status">завантажений</span>
        </div>
        <Link href="">
          <a href="" className="status-change__profile-link">
            дивитися профіль
          </a>
        </Link>
      </div>
    </div>
  )
}

export default StatusBlock
