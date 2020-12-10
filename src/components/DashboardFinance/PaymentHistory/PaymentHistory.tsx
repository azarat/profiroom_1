import React from 'react'
//svg
import FullSize from '../../../../public/svg/full-size.svg'
//types
import { PaymenHistoryProps } from '../Types'

const PaymentHistory: React.FC<PaymenHistoryProps> = ({
  history,
  openHistory,
  isHistoryOpen,
}): JSX.Element => {
  console.log(isHistoryOpen)

  return (
    <div className={`finance__history history`}>
      <h3 className="history__title">
        історія платежів
        <div
          role="presentation"
          className="history__fullsize-icon"
          onClick={() => {
            document.body.scrollIntoView()
            openHistory(true)
          }}
        >
          <FullSize />
        </div>
      </h3>

      <div className="history__list">
        {history.map((item, index) => (
          <div className="history__list-item" key={index}>
            <div className="history__list-item-info">
              <p className="history__list-item-info-left">хто</p>
              <p className="history__list-item-info-right">
                {item.sender.name} {item.sender.surname}
              </p>
            </div>
            <div className="history__list-item-info">
              <p className="history__list-item-info-left">дата операції</p>
              <p className="history__list-item-info-right">
                {new Date(item.isoDate).toLocaleDateString()}
              </p>
            </div>
            <div className="history__list-item-info">
              <p className="history__list-item-info-left">Послуга</p>
              <p className="history__list-item-info-right">ТИП УСЛУГИ</p>
            </div>
            <div className="history__list-item-info">
              <p className="history__list-item-info-left">Сума</p>
              <p className="history__list-item-info-right">{item.amount} грн</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PaymentHistory
