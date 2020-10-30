import React, { useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Components
import Service from '../../src/components/Services/Services'
// Layout
import MainLayout from '../../layouts/MainLayout'
// Antd
import { Switch, Input, Checkbox, Breadcrumb, Pagination, Radio } from 'antd'
import { subcatalogProps } from './Types'

//hook
import useOutsideClick from '../../src/hooks/useOutsideClick'

const optionsService = [
  { label: 'Комерційне використання', value: 'extraCommercial' },
  { label: 'Скорочені терміни', value: 'extraTerms' },
  { label: 'Додаткові правки', value: 'extraChanges' },
]

const subcatalog: NextPage<subcatalogProps> = (props): JSX.Element => {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)

  const [budgetVisible, setBudgetVisible] = useState<boolean>(false)
  const [termVisible, setTermVisible] = useState<boolean>(false)
  const [serviceVisible, setServiceVisible] = useState<boolean>(false)
  const [minPrice, setMinPrice] = useState<string>('')
  const [maxPrice, setMaxPrice] = useState<string>('')
  const [radioValue, setRadioValue] = useState(null)
  const [checkedList, setCheckedList] = useState<[]>([])

  const budgetRef = React.useRef<HTMLDivElement>(null)
  const termRef = React.useRef<HTMLDivElement>(null)
  const serviceRef = React.useRef<HTMLDivElement>(null)

  const { catalog } = props
  const router = useRouter()

  const groupChange = (checkedList: any) => {
    setCheckedList(checkedList)
  }

  useOutsideClick(budgetRef, () => {
    setBudgetVisible(false)
  })
  useOutsideClick(termRef, () => {
    setTermVisible(false)
  })
  useOutsideClick(serviceRef, () => {
    setServiceVisible(false)
  })

  const handleFilters = () => {
    setFilterOpen(true)
  }
  const clearBudgetFilter = () => {
    setMinPrice('')
    setMaxPrice('')
  }

  const onlineHandler = (checked: boolean) => {
    console.log(`online: ${checked}`)
  }

  const handlerPage = (page: number) => {
    console.log(page)
  }

  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
  }

  const radioStyleMobile = {
    display: 'block',
    width: '100%',
    border: '1px solid #f4f7fc',
    padding: '10px',
    color: ' #272525',
    fontSize: '16px',
  }

  const checkBoxStyle = {
    color: '#ffff',
  }

  return (
    <MainLayout categories={props}>
      <div className="services">
        <div className="container">
          <Breadcrumb className="services__breadcrumb">
            <Breadcrumb.Item>
              <Link href="/">
                <a className="services__breadcrumb-link">Головна</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/catalog">
                <a className="services__breadcrumb-link">Каталог</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={`/catalog/${router.query.subcatalog![0]}`}>
                <a className="services__breadcrumb-link">{router.query.subcatalog![0]}</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/catalog">
                <a className="services__breadcrumb-link">{router.query.subcatalog![1]}</a>
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="services__wrapper">
            <h2 className="services__title">1C</h2>
            <div className="services__mobile-filters" role="presentation" onClick={handleFilters}>
              <div className="services__mobile-filters-img-wrapper">
                <img src="/assets/img/show-filters.svg" alt="filters" />
              </div>
              <span className="services__filter-mobile">Фільтр</span>
            </div>
            <div className="services__result-filter-wrapper">
              <div className="services__results">
                <span className="services__total-results"> {catalog.total} знайдено</span>
                <div className="services__online-switch">
                  <Switch onChange={onlineHandler} />
                  <span className="services__now-online">Зараз онлайн</span>
                </div>
              </div>
              <div className="services__desktop-filters">
                {/*фильтр бюджета */}
                <div className="services__filter services__filter--budget" ref={budgetRef}>
                  <button
                    className="services__budget-filter-btn"
                    onClick={() => setBudgetVisible((prev) => !prev)}
                  >
                    Бюджет
                    <img
                      className={`${
                        budgetVisible
                          ? 'services__budget-filter-arrow--open'
                          : 'services__budget-filter-arrow'
                      }`}
                      src="/assets/img/arrow.png"
                      alt=""
                    />
                  </button>

                  <div
                    className={`services__budget-filter-options ${
                      budgetVisible && 'services__budget-filter-options--open'
                    }`}
                  >
                    <div className="services__budget-filter-option">
                      <label htmlFor="min-price">До</label>
                      <input
                        className="services__budget-filter-input"
                        type="text"
                        id="min-price"
                        placeholder="UAH"
                        value={minPrice}
                        onChange={(e) => setMinPrice(e.target.value)}
                      />
                    </div>
                    <div className="services__budget-filter-option">
                      <label htmlFor="min-price">Від</label>
                      <input
                        className="services__budget-filter-input"
                        id="max-price"
                        type="text"
                        placeholder="UAH"
                        value={maxPrice}
                        onChange={(e) => setMaxPrice(e.target.value)}
                      />
                    </div>
                    <div className="services__budget-filter-buttons budget-buttons">
                      <button
                        className="budget-buttons__close"
                        onClick={() => setBudgetVisible(false)}
                      >
                        Закрити
                      </button>
                      <button className="budget-buttons__clear" onClick={clearBudgetFilter}>
                        Очистити
                      </button>
                    </div>
                  </div>
                </div>
                {/*фильтры срока */}
                <div className="services__filter services__filter--term" ref={termRef}>
                  <button
                    className="services__budget-filter-btn"
                    onClick={() => setTermVisible((prev) => !prev)}
                  >
                    Термін виконання
                    <img
                      className={`${
                        termVisible
                          ? 'services__budget-filter-arrow--open'
                          : 'services__budget-filter-arrow'
                      }`}
                      src="/assets/img/arrow.png"
                      alt=""
                    />
                  </button>

                  <div
                    className={`services__term-filter-options ${
                      termVisible && 'services__term-filter-options--open'
                    }`}
                  >
                    <div className="services__term-filter-option">
                      <Radio.Group
                        value={radioValue}
                        onChange={(e) => setRadioValue(e.target.value)}
                      >
                        <Radio style={radioStyle} value={''}>
                          Не вибрано
                        </Radio>
                        <Radio style={radioStyle} value={1}>
                          Експресс за 24 години
                        </Radio>
                        <Radio style={radioStyle} value={3}>
                          До 3 днів
                        </Radio>
                        <Radio style={radioStyle} value={7}>
                          До 7 днів
                        </Radio>
                        <Radio style={radioStyle} value={30}>
                          До місяця
                        </Radio>
                        <Radio style={radioStyle} value={99}>
                          Будь який час
                        </Radio>
                      </Radio.Group>
                      <div className="service__term-filter-buttons term-buttons">
                        <button
                          className="term-buttons__btn-clear"
                          onClick={() => setRadioValue(null)}
                        >
                          Очистити
                        </button>
                        <button
                          className="term-buttons__btn-close"
                          onClick={() => setTermVisible(false)}
                        >
                          Закрити
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*фильтры сервиса */}
                <div className="services__filter services__filter--service" ref={serviceRef}>
                  <button
                    className="services__budget-filter-btn"
                    onClick={() => setServiceVisible((prev) => !prev)}
                  >
                    Сервіс включає
                    <img
                      className={`${
                        serviceVisible
                          ? 'services__budget-filter-arrow--open'
                          : 'services__budget-filter-arrow'
                      }`}
                      src="/assets/img/arrow.png"
                      alt=""
                    />
                  </button>

                  <div
                    className={`services__service-filter-options ${
                      serviceVisible && 'services__service-filter-options--open'
                    }`}
                  >
                    <div className="services__term-filter-option">
                      <Checkbox.Group
                        options={optionsService}
                        onChange={groupChange}
                        value={checkedList}
                      />
                      <div className="services__service-filter-btn service-buttons">
                        <button
                          className="service-buttons__btn-clear"
                          onClick={() => setCheckedList([])}
                        >
                          Очистити
                        </button>
                        <button
                          className="service-buttons__btn-close"
                          onClick={() => setServiceVisible(false)}
                        >
                          Закрити
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*Mobile filters */}
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
                      type="number"
                      placeholder="UAH"
                      id="min-price"
                    />
                  </div>
                  <div className="mobile-filter__option">
                    <label htmlFor="max-price">До</label>
                    <Input
                      className="mobile-filter__budget-input"
                      type="number"
                      placeholder="UAH"
                      id="max-price"
                    />
                  </div>
                </div>
                <div></div>
              </div>
              <div className="mobile-filter__deadlines mobile-filter__filter">
                <div className="mobile-filter__title-wrapper">
                  <p className="mobile-filter__title">Термін виконання</p>
                  <div className="mobile-filter__arrow"></div>
                </div>
                <div className="mobile-filter__deadline-options mobile-filter__options ">
                  <Radio.Group value={radioValue} onChange={(e) => setRadioValue(e.target.value)}>
                    <Radio style={radioStyleMobile} value={''}>
                      Не вибрано
                    </Radio>
                    <Radio style={radioStyleMobile} value={1}>
                      Експресс за 24 години
                    </Radio>
                    <Radio style={radioStyleMobile} value={3}>
                      До 3 днів
                    </Radio>
                    <Radio style={radioStyleMobile} value={7}>
                      До 7 днів
                    </Radio>
                    <Radio style={radioStyleMobile} value={30}>
                      До місяця
                    </Radio>
                    <Radio style={radioStyleMobile} value={99}>
                      Будь який час
                    </Radio>
                  </Radio.Group>
                  <button
                    className="services__btn-clear-mobile"
                    onClick={() => setRadioValue(null)}
                  >
                    Очистити
                  </button>
                </div>
              </div>
              <div className="mobile-filter__service mobile-filter__filter">
                <div className="mobile-filter__title-wrapper">
                  <p className="mobile-filter__title">Сервіс включає</p>
                  <div className="mobile-filter__arrow"></div>
                </div>
                <div className="mobile-filter__deadline-options mobile-filter__options ">
                  <Checkbox.Group
                    style={checkBoxStyle}
                    options={optionsService}
                    onChange={groupChange}
                    value={checkedList}
                  />
                  <button className="services__btn-clear-mobile" onClick={() => setCheckedList([])}>
                    Очистити
                  </button>
                </div>
              </div>
            </div>

            <div className="services__list">
              {catalog.data.map((service) => (
                <Service
                  key={service.id}
                  averageRating={service.averageRating}
                  comments_count={service.comments_count}
                  mainImage={service.mainImage}
                  minPrice={service.minPrice}
                  title={service.title}
                  user={service.user}
                  id={service.id}
                />
              ))}
            </div>
          </div>
          <div className="services__pagination">
            <Pagination
              size="small"
              total={catalog.total}
              pageSize={12}
              showSizeChanger={false}
              onChange={handlerPage}
            />
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getCategorySideProps as getServerSideProps } from '../../src/utils/service'

export default subcatalog
