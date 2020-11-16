import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Contexts
import { MainContext } from '../../context/MainContext'
//Antd
import { Popover } from 'antd'
// Types
import { CategoriesProps } from './Types'

const Categories: React.FC<CategoriesProps> = ({ categories }): JSX.Element => {
  const { lang } = useContext(MainContext)
  const {
    json: { category },
  } = categories

  const router = useRouter()

  const widthDevice =
    typeof window !== 'undefined' &&
    window.innerWidth > 767 &&
    window.innerHeight > 850 &&
    window.innerWidth < 1025

  return (
    <div className="categories">
      <div className="container">
        <div className="categories__wrapper">
          {/* TODO : Добавить ссылки в href */}
          {category.map(({ id, link, groups, sub_categories, ...rest }) => (
            <Link key={id} href={`/catalog/${link}`}>
              {router.pathname === '/catalog' || widthDevice ? (
                <a className="categories__link">{rest[`name_${lang}`]}</a>
              ) : (
                <Popover
                  arrowPointAtCenter
                  className="categories__popover"
                  key={id}
                  placement="bottom"
                  trigger="hover"
                  content={groups.map((group: string, index: number) => (
                    <div className="categories__item" key={index}>
                      <h4 className="categories__name">{group}</h4>
                      {sub_categories
                        .filter((sub) => sub.group === group)
                        .map(({ id, link: subFilteredLink, ...rest }) => {
                          return (
                            <Link
                              href={`/catalog/${encodeURIComponent(link)}/${encodeURIComponent(
                                subFilteredLink
                              )}`}
                              key={id}
                            >
                              <a className="categories__sub-link">{rest[`name_${lang}`]}</a>
                            </Link>
                          )
                        })}
                    </div>
                  ))}
                >
                  <a className="categories__link">{rest[`name_${lang}`]}</a>
                </Popover>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
