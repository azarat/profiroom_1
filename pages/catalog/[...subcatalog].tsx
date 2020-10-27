import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
// Layout
import MainLayout from '../../layouts/MainLayout'
// Antd
import { Switch, Input, Checkbox, Dropdown } from 'antd'
import Service from '../../src/components/Services/Services'
const subcatalog: NextPage = (props): JSX.Element => {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)

  const { catalog } = props

  const handleFilters = () => {
    setFilterOpen((prev) => !prev)
  }

  return (
    <MainLayout categories={props}>
      <div className="services">
        <div className="container">
          <div className="services__wrapper">
            <h2 className="services__title">1C</h2>
            <div className="services__mobile-filters" role="presentation" onClick={handleFilters}>
              <div className="services__mobile-filters-img-wrapper">
                <img src="/assets/img/show-filters.svg" alt="filters" />
              </div>
              <span className="services__filter">Фільтр</span>
            </div>
            <div className="services__results">
              <span className="services__total-results"> {catalog.total}</span>
              <div className="services__online-switch">
                <Switch />
                <span className="services__now-online">Зараз онлайн</span>
              </div>
            </div>
            <div
              className={`services__mobile-filter mobile-filter ${
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
              <div role="presentation" className="mobile-filter__budget mobile-filter__filter">
                <div className="mobile-filter__title-wrapper">
                  <p className="mobile-filter__title">Бюджет</p>
                  <div className="mobile-filter__arrow"></div>
                </div>

                <div className="mobile-filter__budget-options mobile-filter__options">
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
              <div className="mobile-filter__deadlines mobile-filter__filter">
                <div className="mobile-filter__title-wrapper">
                  <p className="mobile-filter__title">Термін виконання</p>
                  <div className="mobile-filter__arrow"></div>
                </div>
                <div className="mobile-filter__deadline-options mobile-filter__options ">
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
              <div className="mobile-filter__service mobile-filter__filter">
                <div className="mobile-filter__title-wrapper">
                  <p className="mobile-filter__title">Сервіс включає</p>
                  <div className="mobile-filter__arrow"></div>
                </div>
                <div className="mobile-filter__deadline-options mobile-filter__options ">
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
            <div className="services__desktop-filters">
              <Dropdown
                trigger={['click']}
                overlay={
                  <div className="mobile-filter__budget-options mobile-filter__options">
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
                }
              >
                <a
                  role="presentation"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Бюджет
                </a>
              </Dropdown>
              <Dropdown
                trigger={['click']}
                overlay={
                  <div className="mobile-filter__deadline-options mobile-filter__options ">
                    <div className="mobile-filter__deadline-option">
                      <Checkbox>
                        <span className="mobile-filter__deadline-checkbox">Не вибрано</span>
                      </Checkbox>
                    </div>
                    <div className="mobile-filter__deadline-option">
                      <Checkbox>
                        <span className="mobile-filter__deadline-checkbox">
                          Експрес за 24 години
                        </span>
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
                }
              >
                <a
                  role="presentation"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Термін виконання
                </a>
              </Dropdown>
              <Dropdown
                trigger={['click']}
                overlay={
                  <div className="mobile-filter__deadline-options mobile-filter__options ">
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
                }
              >
                <a
                  role="presentation"
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  Сервіс включає
                </a>
              </Dropdown>
            </div>
            <div className="services__list">
              {catalog.data.map((service) => (
                <Service
                  key={service.id}
                  averageRating={service.averageRating}
                  comments_count={service.comment_count}
                  mainImage={service.mainImage}
                  minPrice={service.minPrice}
                  title={service.title}
                  user={service.user}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getCategorySideProps as getServerSideProps } from '../../src/utils/service'

export default subcatalog
