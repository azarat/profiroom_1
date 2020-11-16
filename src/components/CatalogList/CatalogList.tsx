import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { MainContext } from '../../context/MainContext'

//antd
import { LeftOutlined } from '@ant-design/icons'
import { CategoriesProps, subCategriesTypes } from '../Categories/Types'

const CatalogList: React.FC<CategoriesProps> = ({
  categories: {
    json: { category },
  },
}): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [isSubOpen, setSubOpen] = useState<boolean>(false)

  const { lang } = useContext(MainContext)

  const selectActiveIndex = (index: number) => {
    setActiveIndex(index), setSubOpen((prev) => !prev)
  }

  return (
    <div className="categorie-list">
      <div className="container">
        <div className="categorie-list__wrapper">
          {category.map(({ id, link, sub_categories, ...rest }, index: number) => (
            <div className="categorie-list__sub-categories-wrapper" key={id}>
              <div className="categorie-list__item item ">
                <h3
                  role="presentation"
                  onClick={() => selectActiveIndex(index)}
                  className="item__title-mobile"
                >
                  {rest[`name_${lang}`]}
                </h3>
                <h3 role="presentation" className="item__title">
                  {rest[`name_${lang}`]}
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
                  category[activeIndex].sub_categories.map(
                    ({ id, link: subCategoryLink, ...rest }) => (
                      <div key={id} className="categorie-list-sub-item sub-item">
                        <Link
                          href={`catalog/${encodeURIComponent(link)}/${encodeURIComponent(
                            subCategoryLink
                          )}`}
                        >
                          <a
                            role="presentation"
                            className="sub-item__name"
                            onClick={() => {
                              setSubOpen(false)
                            }}
                          >
                            {rest[`name_${lang}`]}
                          </a>
                        </Link>
                      </div>
                    )
                  )}
                <ul className="categorie-list__tablet">
                  {sub_categories.map(
                    ({ id, link: subCategoryLink, ...rest }: subCategriesTypes) => (
                      <li key={id} className="categorie-list__link">
                        <Link
                          href={`catalog/${encodeURIComponent(link)}/${encodeURIComponent(
                            subCategoryLink
                          )}`}
                        >
                          <a className="categorie-list__sub-name">{rest[`name_${lang}`]}</a>
                        </Link>
                      </li>
                    )
                  )}
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
