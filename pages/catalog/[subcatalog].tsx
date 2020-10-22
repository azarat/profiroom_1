import React, { useContext, useEffect } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

// Types
import { jsonTypes } from '../../src/components/Categories/Types'
import { MainContext } from '../../src/context/MainContext'
import MainLayout from '../../layouts/MainLayout'

//Antd
import { Breadcrumb } from 'antd'

type subCatalogProps = {
  subcatalog: jsonTypes
  categories: jsonTypes[]
}

const subcatalog: NextPage<subCatalogProps> = ({ categories, subcatalog }): JSX.Element => {
  const { lang } = useContext(MainContext)
  console.log(lang)

  const { category } = subcatalog

  return (
    <MainLayout categories={categories}>
      <div className="sub-catalog-page">
        <div className="container">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link href="/">
                <a className="sub-catalog-page__breadcrumb">Головна</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/catalog">
                <a className="sub-catalog-page__breadcrumb">Каталог</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={`/catalog/${category[0].link}`}>
                <a className="sub-catalog-page__breadcrumb">{category[0][`name_${lang}`]}</a>
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <h2 className="sub-catalog-page__title">{category[0][`name_${lang}`]}</h2>
          <div className="sub-catalog-page__wrapper">
            <div className="sub-catalog-page__sidebar sidebar">
              <ul className="sidebar__list">
                {category[0].sub_categories.map((subCategory) => (
                  <li className="sidebar__item" key={subCategory.id}>
                    <Link href={`${category[0].link}/${subCategory.link}`}>
                      <a className="sidebar__link">{subCategory.name_uk}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sub-catalog-page__inner">
              {category[0].sub_categories.map((subCategory) => {
                return (
                  <div className="sub-catalog-page__item" key={subCategory.id}>
                    <Link href={`${category[0].link}/${subCategory.link}`}>
                      <a className="sub-catalog-page__link">
                        <div className="sub-catalog-page__img-wrapper">
                          <img
                            className="sub-catalog-page__img"
                            src={subCategory.img}
                            alt="subcatalog img"
                          />
                        </div>
                      </a>
                    </Link>
                    <h2 className="sub-catalog-page__sub-name">{subCategory[`name_${lang}`]}</h2>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export {
  getSubCatalogProps as getStaticProps,
  getSubCatalogPaths as getStaticPaths,
} from '../../src/utils/service'
export default subcatalog
