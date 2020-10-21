import { NextPage } from 'next'
import React from 'react'
import MainLayout from '../layouts/MainLayout'
import Link from 'next/link'

import { Switch } from 'antd'

const card: NextPage = (props): JSX.Element => {
  return (
    <MainLayout categories={props}>
      <div className="card">
        <div className="container">
          <div className="card__wrapper">
            <h2 className="card__title">1C</h2>
            <div className="card__mobile-filters">
              <div className="card__mobile-filters-img-wrapper">
                <img src="/assets/img/show-filters.svg" alt="filters" />
              </div>
              <span className="card__filter"> Фільтр</span>
            </div>
            <div className="card__results">
              <span>16 знайдено</span>
              <div className="card__online-switch">
                <Switch />
                <span className="card__now-online">Зараз онлайн</span>
              </div>
            </div>
            <div className="card__list">
              <div className="card__item item">
                <div className="item__img-wrapper">
                  <img
                    className="item__img"
                    src="https://profiroom.com/Backend/public/storage/offerFiles/big/qiASz4t4enw3fCpaf25a1f4nDCSIXEDmq1DlpxTC.jpeg"
                    alt="img preview"
                  />
                </div>
                <div className="item__description">
                  <Link href="">
                    <a className="item__about">Test</a>
                  </Link>
                  <div className="item__bottom">
                    <div className="item__rating">
                      <div className="item__star-wrapper">
                        <img className="item__star" src="/assets/img/star.svg" alt="star" />
                        <span>0</span>
                      </div>
                      <span className="item__reviews">(0 відгуків)</span>
                    </div>
                    <div className="item__avatar-wrapper">
                      <Link href="/">
                        <a>
                          <img
                            className="item__avatar"
                            src="https://profiroom.com/Backend/public/storage/avatar/2.jpg"
                            alt="avatar"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="item__price-block">
                  <div className="item__price-wrapper">
                    <span className="item__price">
                      починаючи від <strong>&#8372; 2222</strong>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getStaticProps } from '../src/utils/service'
export default card
