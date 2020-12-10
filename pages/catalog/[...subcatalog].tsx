import React, { useContext, useEffect, useState } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Components
import OfferCard from '../../src/components/OfferCard/OfferCard'
// Layout
import MainLayout from '../../layouts/MainLayout'
// Antd
import { Switch, Input, Checkbox, Breadcrumb, Pagination, Radio } from 'antd'
import { dataTypes, SubCatalogProps } from '../../src/components/CatalogList/Types'
import { MainContext } from '../../src/context/MainContext'

///options for term filter
const optionsService = [
  { label: 'Комерційне використання', value: 'extraCommercial' },
  { label: 'Скорочені терміни', value: 'extraTerms' },
  { label: 'Додаткові правки', value: 'extraChanges' },
]

const subcatalog: NextPage<SubCatalogProps> = ({ catalog, ...props }): JSX.Element => {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const [visibleFilter, setVisibleFilter] = useState<number>()

  const [minPrice, setMinPrice] = useState<string>('')
  const [maxPrice, setMaxPrice] = useState<string>('')
  const [radioValue, setRadioValue] = useState<string | null>(null)
  const [checkedList, setCheckedList] = useState<[]>([])

  const budgetRef = React.useRef<HTMLDivElement>(null)
  const termRef = React.useRef<HTMLDivElement>(null)
  const serviceRef = React.useRef<HTMLDivElement>(null)

  const [catalogList, setCatalogList] = useState<dataTypes[]>(catalog.data)
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState<boolean>(false)
  const { lang } = useContext(MainContext)
  const router = useRouter()

  useEffect(() => {
    setCatalogList((_) => catalog.data)
    setLoading(false)
  }, [catalog.data])

  useEffect(() => {
    const handleFilterClick = (e: any) => {
      const t = e.target as HTMLElement
      let isFilter = false
      for (let i: HTMLElement = t; i?.parentElement; i = i.parentElement) {
        if (i.classList.contains('filter-options')) isFilter = true
      }
      if (!(+!t.classList.contains('filter-btn') ^ +!isFilter)) setVisibleFilter(undefined)
    }
    document.addEventListener('click', handleFilterClick, { capture: false })
    return () => {
      document.removeEventListener('click', handleFilterClick)
    }
  }, [])

  ////Set query for service filter
  const groupChange = (checkedList: any) => {
    setCheckedList(checkedList)
    const extraCommercial = checkedList.includes('extraCommercial') ? true : ''
    const extraTerms = checkedList.includes('extraTerms') ? true : ''
    const extraChanges = checkedList.includes('extraChanges') ? true : ''
    router.push({
      pathname: router.pathname,
      query: { ...router.query, extraCommercial, extraChanges, extraTerms },
    })
  }
  ///Set query for term filter
  const radioValueChange = (e: any) => {
    const value = e.target.value
    setRadioValue(value)
    router.push({
      pathname: router.pathname,
      query: { ...router.query, maxTerm: e.target.value },
    })
  }
  ///Set query for min price filter
  const setMinimalPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minValue = e.currentTarget.value
    setMinPrice(minValue)
    router.push({
      pathname: router.pathname,
      query: { ...router.query, minPrice: minValue },
    })
  }
  ///Set query for max price filter

  const setMaximalPrice = (e: React.FormEvent<HTMLInputElement>) => {
    const maxValue = e.currentTarget.value
    setMaxPrice(maxValue)
    router.push({
      pathname: router.pathname,
      query: { ...router.query, maxPrice: maxValue },
    })
  }
  //clear budget filter
  const clearBudgetFilter = () => {
    setMinPrice('')
    setMaxPrice('')
    router.push({
      pathname: router.pathname,
      query: { ...router.query, maxPrice: '', minPrice: '' },
    })
  }
  // clear service filter
  const clearServicesFilter = () => {
    setCheckedList([])
    router.push({
      pathname: router.pathname,
      query: { ...router.query, extraCommercial: '', extraChanges: '', extraTerms: '', page: 1 },
    })
  }

  const handleFilters = () => {
    setFilterOpen(true)
  }

  ///todo fix
  const onlineHandler = (checked: boolean) => {
    router.push({
      pathname: router.pathname,
      query: { ...router.query, online: checked },
    })
  }

  const handlerPage = async (page: number) => {
    setPage(page)
    setLoading(true)
    document.body.scrollIntoView()

    router.push({
      pathname: router.pathname,
      query: { ...router.query, page },
    })
  }

  const handleLoadMore = async () => {
    setLoading(true)
    const url = 'http://test.profiroom.com/Backend/api/catalog'

    const extraCommercial = router.query.extraCommercial && router.query.extraCommercial
    const extraTerm = router.query.extraTerm && router.query.extraTerm
    const extraChanges = router.query.extraChanges && router.query.extraChanges
    const maxTerm = router.query.maxTerm && router.query.maxTerm
    const minPrice = router.query.minPrice && router.query.minPrice
    const maxPrice = router.query.maxPrice && router.query.maxPrice
    const online = router.query.online && router.query.online

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        category: catalog.category_en,
        subCategory: catalog.name_en,
        page: page + 1,
        extraCommercial,
        extraTerm,
        extraChanges,
        maxTerm,
        minPrice,
        maxPrice,
        online: online === 'true',
      }),
    })
    setPage((prev) => prev + 1)
    const data = await res.json()
    const newArr = catalogList.concat(data.data)
    setLoading(false)
    setCatalogList(newArr)
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
    //todo fix
    color: '#272525',
    fontSize: '16px',
  }

  return (
    <MainLayout categories={props}>
      <div className="services">
        <div className="container">
          <div className="services__wrapper">
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
                <Link href={`/catalog/${catalog.category_en}`}>
                  <a className="services__breadcrumb-link">{catalog[`category_${lang}`]}</a>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link href={`/catalog/${catalog.category_en}/${catalog.name_en}`}>
                  <a className="services__breadcrumb-link">{catalog[`name_${lang}`]}</a>
                </Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            {/*todo title */}
            {!loading ? (
              <h2 className="services__title">{catalog.name_ru}</h2>
            ) : (
              <h2 className="services__title">Завантаження</h2>
            )}
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
                <div
                  className="services__filter services__filter--budget"
                  id="budget"
                  ref={budgetRef}
                >
                  <button
                    className="services__budget-filter-btn filter-btn"
                    onClick={() => setVisibleFilter(0)}
                  >
                    Бюджет
                    <img
                      className={`${
                        visibleFilter == 0
                          ? 'services__budget-filter-arrow--open'
                          : 'services__budget-filter-arrow'
                      }`}
                      src="/assets/img/arrow.png"
                      alt=""
                    />
                  </button>

                  <div
                    className={`services__budget-filter-options filter-options service__filter ${
                      visibleFilter === 0 ? 'services__budget-filter-options--open' : ''
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
                        onChange={setMinimalPrice}
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
                        onChange={setMaximalPrice}
                      />
                    </div>
                    <div className="services__budget-filter-buttons budget-buttons">
                      <button className="budget-buttons__clear" onClick={clearBudgetFilter}>
                        Очистити
                      </button>
                      <button
                        className="budget-buttons__close"
                        onClick={() => setVisibleFilter(undefined)}
                      >
                        Закрити
                      </button>
                    </div>
                  </div>
                </div>
                {/*фильтры срока */}
                <div className="services__filter services__filter--term" id="term" ref={termRef}>
                  <button
                    className="services__budget-filter-btn filter-btn"
                    onClick={() => setVisibleFilter(1)}
                  >
                    Термін виконання
                    <img
                      className={`${
                        visibleFilter === 1
                          ? 'services__budget-filter-arrow--open'
                          : 'services__budget-filter-arrow'
                      }`}
                      src="/assets/img/arrow.png"
                      alt=""
                    />
                  </button>

                  <div
                    className={`services__term-filter-options filter-options service__filter ${
                      visibleFilter === 1 ? 'services__term-filter-options--open' : ''
                    }`}
                  >
                    <div className="services__term-filter-option">
                      <Radio.Group value={radioValue} onChange={radioValueChange}>
                        <Radio
                          style={radioStyle}
                          value={''}
                          onClick={() =>
                            router.push({
                              pathname: router.pathname,
                              query: { ...router.query, maxTerm: '' },
                            })
                          }
                        >
                          Не вибрано
                        </Radio>
                        <Radio
                          style={radioStyle}
                          value={1}
                          onClick={() =>
                            router.push({
                              pathname: router.pathname,
                              query: { ...router.query, maxTerm: '1' },
                            })
                          }
                        >
                          Експресс за 24 години
                        </Radio>
                        <Radio
                          style={radioStyle}
                          value={3}
                          onClick={() =>
                            router.push({
                              pathname: router.pathname,
                              query: { ...router.query, maxTerm: '3' },
                            })
                          }
                        >
                          До 3 днів
                        </Radio>
                        <Radio
                          style={radioStyle}
                          value={7}
                          onClick={() =>
                            router.push({
                              pathname: router.pathname,
                              query: { ...router.query, maxTerm: '7' },
                            })
                          }
                        >
                          До 7 днів
                        </Radio>
                        <Radio
                          style={radioStyle}
                          value={30}
                          onClick={() =>
                            router.push({
                              pathname: router.pathname,
                              query: { ...router.query, maxTerm: '30' },
                            })
                          }
                        >
                          До місяця
                        </Radio>
                        <Radio
                          style={radioStyle}
                          value={99}
                          onClick={() =>
                            router.push({
                              pathname: router.pathname,
                              query: { ...router.query, maxTerm: '99' },
                            })
                          }
                        >
                          Будь який час
                        </Radio>
                      </Radio.Group>
                      <div className="service__term-filter-buttons term-buttons">
                        <button
                          className="term-buttons__btn-clear"
                          onClick={() => {
                            setRadioValue(null)
                            router.push({
                              pathname: router.pathname,
                              query: { ...router.query, page: 1, maxTerm: '' },
                            })
                          }}
                        >
                          Очистити
                        </button>
                        <button
                          className="term-buttons__btn-close"
                          onClick={() => setVisibleFilter(undefined)}
                        >
                          Закрити
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*фильтры сервиса */}
                <div
                  className="services__filter services__filter--service"
                  id="service"
                  ref={serviceRef}
                >
                  <button
                    className="services__budget-filter-btn filter-btn"
                    onClick={() => setVisibleFilter(2)}
                  >
                    Сервіс включає
                    <img
                      className={`${
                        visibleFilter === 2
                          ? 'services__budget-filter-arrow--open'
                          : 'services__budget-filter-arrow'
                      }`}
                      src="/assets/img/arrow.png"
                      alt=""
                    />
                  </button>

                  <div
                    className={`services__service-filter-options filter-options service__filter ${
                      visibleFilter === 2 ? 'services__service-filter-options--open' : ''
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
                          onClick={clearServicesFilter}
                        >
                          Очистити
                        </button>
                        <button
                          className="service-buttons__btn-close"
                          onClick={() => setVisibleFilter(undefined)}
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
                  <div className="mobile-filter__option-wrapper">
                    <div className="mobile-filter__option">
                      <label htmlFor="min-price">Від</label>
                      <Input
                        className="mobile-filter__budget-input"
                        type="number"
                        placeholder="UAH"
                        id="min-price"
                        value={minPrice}
                        onChange={setMinimalPrice}
                      />
                    </div>
                    <div className="mobile-filter__option">
                      <label htmlFor="max-price">До</label>
                      <Input
                        className="mobile-filter__budget-input"
                        type="number"
                        placeholder="UAH"
                        id="max-price"
                        value={maxPrice}
                        onChange={setMaximalPrice}
                      />
                    </div>
                  </div>
                  <button className="services__btn-clear-mobile" onClick={clearBudgetFilter}>
                    Очистити
                  </button>
                </div>
              </div>
              <div className="mobile-filter__deadlines mobile-filter__filter">
                <div className="mobile-filter__title-wrapper">
                  <p className="mobile-filter__title">Термін виконання</p>
                  <div className="mobile-filter__arrow"></div>
                </div>
                <div className="mobile-filter__deadline-options mobile-filter__options ">
                  <Radio.Group value={radioValue} onChange={radioValueChange}>
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
                    onClick={() => {
                      setRadioValue(null)
                      router.push({
                        pathname: router.pathname,
                        query: { ...router.query, page: 1, maxTerm: '' },
                      })
                    }}
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
                    // style={checkBoxStyle}
                    options={optionsService}
                    onChange={groupChange}
                    value={checkedList}
                  />
                  <button className="services__btn-clear-mobile" onClick={clearServicesFilter}>
                    Очистити
                  </button>
                </div>
              </div>
            </div>

            <div className="services__list">
              {!loading &&
                catalogList.map(
                  ({ comments_count, mainImage, minPrice, title, user, id, averageRating }) => (
                    <OfferCard
                      key={id}
                      averageRating={averageRating}
                      comments_count={comments_count}
                      mainImage={mainImage}
                      minPrice={minPrice}
                      title={title}
                      user={user}
                      id={id}
                    />
                  )
                )}
            </div>
          </div>
          {catalog.last_page !== 1 && (
            <div className="services__pagination">
              <Pagination
                size="small"
                total={catalog.total}
                pageSize={12}
                showSizeChanger={false}
                onChange={handlerPage}
                defaultCurrent={1}
                current={router.query.page ? Number(router.query.page) : 1}
              />
            </div>
          )}
          {catalog.last_page !== 1 && (
            <div className="services__load-more-wrapper">
              <button
                disabled={page === catalog.last_page}
                className="services__load-more"
                onClick={() => handleLoadMore()}
              >
                {!loading ? 'Завантажити ще' : 'Завантаження...'}
              </button>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  )
}

export { getCategorySideProps as getServerSideProps } from '../../src/utils/service'

export default subcatalog
