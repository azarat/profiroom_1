import React, { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Layout
import MainLayout from '../../layouts/MainLayout'
// Antd
import { Switch, Input, Checkbox, Dropdown, Breadcrumb, Menu, Pagination } from 'antd'
import Service from '../../src/components/Services/Services'

const optionsTerm = [
  { label: 'Не вибрано', value: '' },
  { label: 'Експрес за 24 години', value: '1' },
  { label: 'До 3 днів', value: '3' },
  { label: 'До 7 днів', value: '7' },
  { label: 'До місяця', value: '30' },
  { label: 'Будь-який час', value: '99' },
]

const optionsService = [
  { label: 'Комерційне використання', value: 'extraCommercial' },
  { label: 'Скорочені терміни', value: 'extraTerms' },
  { label: 'Додаткові правки', value: 'extraChanges' },
]

const subcatalog: NextPage = (props): JSX.Element => {
  const [isFilterOpen, setFilterOpen] = useState<boolean>(false)
  const [filterType, setFilterType] = useState<string>('')
  const [budgetVisible, setBudgetVisible] = useState<boolean>(false)

  const handleMenuClick = (e: any) => {
    if (e.key === '3') {
      setBudgetVisible(false)
    }
  }
  const handleVisibleChange = (flag: any) => {
    setBudgetVisible(flag)
  }

  const budgetMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        {' '}
        <div className="mobile-filter__option">
          <label htmlFor="min-price">Від</label>
          <Input
            className="mobile-filter__budget-input"
            type="text"
            placeholder="UAH"
            id="min-price"
          />
        </div>
      </Menu.Item>
      <Menu.Item key="2">
        {' '}
        <div className="mobile-filter__option">
          <label htmlFor="max-price">До</label>
          <Input
            className="mobile-filter__budget-input"
            type="text"
            placeholder="UAH"
            id="max-price"
          />
        </div>
      </Menu.Item>
    </Menu>
  )

  const { catalog } = props

  const handleFilters = () => {
    setFilterOpen((prev) => !prev)
  }

  const router = useRouter()

  const handleClick = (event: any) => {
    if (event.path) {
      if (event.path.includes(budgetRef.current)) {
        setFilterOpen((prev) => !prev)
        return setFilterType('budget')
      } else if (event.path.includes(termRef.current)) {
        setFilterOpen((prev) => !prev)
        return setFilterType('term')
      } else if (event.path.includes(serviceRef.current)) {
        setFilterOpen((prev) => !prev)
        return setFilterType('service')
      } else {
        setFilterType('')
      }
    }
  }

  const budgetRef = React.useRef<HTMLDivElement>(null)
  const termRef = React.useRef<HTMLDivElement>(null)
  const serviceRef = React.useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.addEventListener('click', handleClick)

    return () => {
      document.removeEventListener('click', handleClick)
    }
  }, [catalog])

  const onlineHandler = (checked: boolean) => {
    console.log(`online: ${checked}`)
  }

  const handlerPage = (page: number) => {
    console.log(page)
  }

  return (
    <MainLayout categories={props}>
      <div className="services">
        <div className="container">
          <Breadcrumb className="sub-catalog-page__breadcrumb">
            <Breadcrumb.Item>
              <Link href="/">
                <a className="sub-catalog-page__breadcrumb-link">Головна</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/catalog">
                <a className="sub-catalog-page__breadcrumb-link">Каталог</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href={`/catalog/${router.query.subcatalog![0]}`}>
                <a className="sub-catalog-page__breadcrumb-link">{router.query.subcatalog![0]}</a>
              </Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link href="/catalog">
                <a className="sub-catalog-page__breadcrumb-link">{router.query.subcatalog![1]}</a>
              </Link>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="services__wrapper">
            <h2 className="services__title">1C</h2>
            <div className="services__mobile-filters" role="presentation" onClick={handleFilters}>
              <div className="services__mobile-filters-img-wrapper">
                <img src="/assets/img/show-filters.svg" alt="filters" />
              </div>
              <span className="services__filter">Фільтр</span>
            </div>
            <div className="services__results">
              <span className="services__total-results"> {catalog.total} знайдено</span>
              <div className="services__online-switch">
                <Switch onChange={onlineHandler} />
                <span className="services__now-online">Зараз онлайн</span>
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
            {/* Desktop filters*/}
            <div className="services__desktop-filters">
              <Dropdown
                trigger={['click']}
                visible={budgetVisible}
                onVisibleChange={handleVisibleChange}
                overlay={budgetMenu}
              >
                <div role="presentation" onClick={handleClick} ref={budgetRef}>
                  <a
                    role="presentation"
                    className="ant-dropdown-link budget"
                    onClick={(e) => e.preventDefault()}
                  >
                    Бюджет
                    <span
                      className={`services__desktop-filters-arrow ${
                        filterType === 'budget' &&
                        isFilterOpen &&
                        'services__desktop-filters-arrow--open'
                      }`}
                    ></span>
                  </a>
                </div>
              </Dropdown>

              <Dropdown
                trigger={['click']}
                overlay={
                  <div className="mobile-filter__deadline-options mobile-filter__options ">
                    <Checkbox.Group
                      options={optionsTerm}
                      onChange={(checkedValues) => console.log(checkedValues)}
                    />
                  </div>
                }
              >
                <div role="presentation" onClick={handleClick} ref={termRef}>
                  <a
                    role="presentation"
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Термін виконання
                    <span
                      className={`services__desktop-filters-arrow ${
                        filterType === 'term' &&
                        isFilterOpen &&
                        'services__desktop-filters-arrow--open'
                      }`}
                    ></span>
                  </a>
                </div>
              </Dropdown>

              <Dropdown
                trigger={['click']}
                overlay={
                  <div className="mobile-filter__deadline-options mobile-filter__options ">
                    <Checkbox.Group
                      options={optionsService}
                      onChange={(checkedValues) => console.log(checkedValues)}
                    />
                  </div>
                }
              >
                <div role="presentation" onClick={handleClick} ref={serviceRef}>
                  <a
                    role="presentation"
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Сервіс включає
                    <span
                      className={`services__desktop-filters-arrow ${
                        filterType === 'service' &&
                        isFilterOpen &&
                        'services__desktop-filters-arrow--open'
                      }`}
                    ></span>
                  </a>
                </div>
              </Dropdown>
            </div>
            <div className="services__list">
              {catalog.data.map((service: any) => (
                <Service
                  key={service.id}
                  averageRating={service.averageRating}
                  comments_count={service.comments_count}
                  mainImage={service.mainImage}
                  minPrice={service.minPrice}
                  title={service.title}
                  user={service.user}
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
