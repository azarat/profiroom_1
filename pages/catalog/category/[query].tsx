import { NextPage } from 'next'
import React, { useState } from 'react'
import MainLayout from '../../../layouts/MainLayout'
import Link from 'next/link'

import { Switch, Input, Checkbox } from 'antd'
import { useRouter } from 'next/router'

const category: NextPage = (props): JSX.Element => {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const router = useRouter()
  console.log(router)
  const handleFilters = () => {
    setFilterOpen((prev) => !prev)
  }
  return (
    <MainLayout categories={props}>
      <div className="card">
        <div className="container">
          <div className="card__wrapper">
            <h2 className="card__title">1C</h2>
            <div className="card__mobile-filters" role="presentation" onClick={handleFilters}>
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
          <div
            className={`card__mobile-filter mobile-filter ${
              isFilterOpen && ' mobile-filter--open'
            }`}
          >
            <div
              className="mobile-filter__back"
              role="presentation"
              onClick={() => setFilterOpen(false)}
            >
              <p className="mobile-filter__top">Фільтр</p>
            </div>
            <div className="mobile-filter__budget">
              <p className="mobile-filter__title">Бюджет</p>
              <div className="mobile-filter__budget-options">
                <div className="mobile-filter__option">
                  <label htmlFor="min-price">Від</label>
                  <Input
                    className="mobile-filter__budget-input"
                    type="text"
                    placeholder="UAH"
                    id="min-price"
                  />
                </div>
                <div className="mobile-filter__option">
                  <label htmlFor="max-price">До</label>
                  <Input
                    className="mobile-filter__budget-input"
                    type="text"
                    placeholder="UAH"
                    id="max-price"
                  />
                </div>
              </div>
            </div>
            <div className="mobile-filter__deadlines">
              <p className="mobile-filter__title">Термін виконання</p>
              <div className="mobile-filter__deadline-options">
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">Не вибрано</span>
                  </Checkbox>
                </div>
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">Експрес за 24 години</span>
                  </Checkbox>
                </div>
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox"> До 3 днів</span>
                  </Checkbox>
                </div>
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">До 7 днів</span>
                  </Checkbox>
                </div>
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">До місяця</span>
                  </Checkbox>
                </div>
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">Будь-який час</span>
                  </Checkbox>
                </div>
              </div>
            </div>
            <div className="mobile-filter__service">
              <p className="mobile-filter__title">Сервіс включає</p>
              <div className="mobile-filter__deadline-options">
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">Додаткові правки</span>
                  </Checkbox>
                </div>
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">
                      Комерційне використання
                    </span>
                  </Checkbox>
                </div>
                <div className="mobile-filter__deadline-option">
                  <Checkbox>
                    <span className="mobile-filter__deadline-checkbox">Скорочені терміни</span>
                  </Checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getStaticProps } from '../../../src/utils/service'
export default category
