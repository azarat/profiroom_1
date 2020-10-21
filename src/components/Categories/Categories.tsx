import React, { useContext } from 'react'
import Link from 'next/link'
// Contexts
import { CategoriesProps } from './Types'
//Antd
import { Popover } from 'antd'
// Types
import { MainContext } from '../../context/MainContext'
import { useRouter } from 'next/router'

const Categories: React.FC<CategoriesProps> = ({ categories }): JSX.Element => {
  const { lang } = useContext(MainContext)

  const {
    json: { category },
  } = categories

  const router = useRouter()
  return (
    <div className="categories">
      <div className="container">
        <div className="categories__wrapper">
          {/* TODO : Добавить ссылки в href */}
          {category.map((category) => (
            <Link key={category.id} href="">
              {router.pathname === '/catalog' ? (
                <a className="categories__link">{category[`name_${lang}`]}</a>
              ) : (
                <Popover
                  arrowPointAtCenter
                  className="categories__popover"
                  key={category.id}
                  placement="bottom"
                  trigger="hover"
                  content={category.groups.map((group: string, index: number) => (
                    <div className="categories__item" key={index}>
                      <h4 className="categories__name">{group}</h4>
                      {category.sub_categories
                        .filter((sub) => sub.group === group)
                        .map((subFiltered) => {
                          return (
                            <Link href="/" key={subFiltered.id}>
                              <a className="categories__sub-link">{subFiltered[`name_${lang}`]}</a>
                            </Link>
                          )
                        })}
                    </div>
                  ))}
                >
                  <a className="categories__link">{category[`name_${lang}`]}</a>
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
