import React from 'react'
import { UserOfferTypes } from '../OfferCard/Types'

const Compare: React.FC<UserOfferTypes> = ({ userOffer }): JSX.Element => {
  return (
    <div className="offer__compare compare" id="compare">
      <h4 className="compare__title"> Порівняйте і виберіть варіант пакету послуг </h4>
      <div className="compare__wrapper">
        <div className="compare__table-title">
          <div className="compare__table-cell"></div>
          <div className="compare__table-cell">Базовий</div>
        </div>
        <div className="compare__table-item">
          <div className="compare__item-cell">Назва послуги</div>
          <div className="compare__item-cell">{userOffer.basic.term}</div>
        </div>
        <div className="compare__table-item">
          <div className="compare__item-cell">Короткий опис</div>
          <div className="compare__item-cell">{userOffer.basic.description}</div>
        </div>
        <div className="compare__table-item">
          <div className="compare__item-cell ">Термін виконання</div>
          <div className="compare__item-cell compare__item-cell--center">
            {userOffer.basic.term}
          </div>
        </div>
        <div className="compare__table-item">
          <div className="compare__item-cell ">Кількість правок</div>
          <div className="compare__item-cell compare__item-cell--center">
            {userOffer.basic.changes}
          </div>
        </div>
        <div className="compare__table-item">
          <div className="compare__item-cell">Ціна</div>
          <div className="compare__item-cell compare__item-cell--center">
            {userOffer.basic.price}&#8372;
            <div className="compare__item-cell-btn">вибрати</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Compare
