import React, { useState } from 'react'
import { MainContext } from '../../context/MainContext'

import Link from 'next/link'

const CatalogList: React.FC = () => {
  const { categories } = React.useContext(MainContext)

  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isSubOpen, setSubOpen] = useState<boolean>(false)

  const selectActiveIndex = (index: number) => {
    setActiveIndex(index), setSubOpen((prev) => !prev)
  }

  const {
    json: { category },
  } = categories

  return (
    <div className="categorie-list">
      <div className="container">
        <div className="categorie-list__wrapper">
          {category.map((singleCategory: any, index: number) => (
            <div className="categorie-list__sub-categories-wrapper" key={singleCategory.id}>
              <div className="categorie-list__item item ">
                <h3
                  role="presentation"
                  onClick={() => selectActiveIndex(index)}
                  className="item__title"
                >
                  {singleCategory.name_uk}
                </h3>
              </div>

              <div
                className={`categorie-list__sub-categories ${
                  isSubOpen && 'categorie-list__sub-categories--active'
                }`}
              >
                <button onClick={() => setSubOpen(false)} className="categorie-list__btn-close">
                  <img src="/assets/img/back.svg" alt="" />
                </button>
                {isSubOpen &&
                  category[activeIndex].sub_categories.map((subCategory: any) => (
                    <div key={subCategory.id} className="categorie-list-sub-item sub-item">
                      <Link href="/">
                        <a
                          role="presentation"
                          className="sub-item__name"
                          onClick={() => {
                            setSubOpen(false)
                          }}
                        >
                          {subCategory.name_uk}
                        </a>
                      </Link>
                    </div>
                  ))}
                <ul className="categorie-list__tablet">
                  {singleCategory.sub_categories.map((subCategory: any) => (
                    <Link key={subCategory.id} href="/">
                      <li className="categorie-list__link">
                        <a className="categorie-list__sub-name">{subCategory.name_uk}</a>
                      </li>
                    </Link>
                  ))}{' '}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CatalogList
