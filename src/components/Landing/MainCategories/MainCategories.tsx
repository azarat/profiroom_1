import React from 'react'
import { categories } from '../../../constants/landing'

const MainCategories: React.FC = (): JSX.Element => {
  return (
    <div className="main-categories">
      <div className="container">
        <div className="main-categories__wrapper">
          <h3 className="main-categories__subtitle">Категорії робіт</h3>
          <h2 className="main-categories__title">
            На біржі працюють фрілансери в наступних категоріях
          </h2>
          <div className="main-categories__card-container">
            {categories.map((el) => (
              <div className="main-categories__card" key={el.id}>
                <div className="main-categories__card-top">
                  <img src={el.image} alt="info-card" className="main-categories__card-image" />
                  <p className="main-categories__card-title">{el.title}</p>
                </div>
                <p className="main-categories__card-description">{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCategories
