import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { MainContext } from '../../context/MainContext'

//antd
import { LeftOutlined } from '@ant-design/icons'
// Types
type CatalogListProps = {
  categories: any
}

const CatalogList: React.FC<CatalogListProps> = ({ categories }): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isSubOpen, setSubOpen] = useState<boolean>(false)

  const { lang } = useContext(MainContext)

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
                  className="item__title-mobile"
                >
                  {singleCategory[`name_${lang}`]}
                </h3>
                <h3 role="presentation" className="item__title-desktop">
                  {singleCategory[`name_${lang}`]}
                </h3>
              </div>

              <div
                className={`categorie-list__sub-categories ${
                  isSubOpen && 'categorie-list__sub-categories--active'
                }`}
              >
                <button onClick={() => setSubOpen(false)} className="categorie-list__btn-close">
                  <LeftOutlined className="categorie-list__back" />
                </button>
                {isSubOpen &&
                  category[activeIndex].sub_categories.map((subCategory: any) => (
                    <div key={subCategory.id} className="categorie-list-sub-item sub-item">
                      <Link href={'/'}>
                        <a
                          role="presentation"
                          className="sub-item__name"
                          onClick={() => {
                            setSubOpen(false)
                          }}
                        >
                          {subCategory[`name_${lang}`]}
                        </a>
                      </Link>
                    </div>
                  ))}
                <ul className="categorie-list__tablet">
                  {singleCategory.sub_categories.map((subCategory: any) => (
                    <li key={subCategory.id} className="categorie-list__link">
                      <Link href={`catalog/${singleCategory.link}/${subCategory.link}`}>
                        <a className="categorie-list__sub-name">{subCategory[`name_${lang}`]}</a>
                      </Link>
                    </li>
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
