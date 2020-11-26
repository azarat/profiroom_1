import React, { useState, useRef, useMemo, useCallback } from 'react'
//styles
import { Form, Input, Radio, DatePicker } from 'antd'
import { LeftOutlined, RightOutlined, PlusCircleOutlined, EditFilled } from '@ant-design/icons'
import moment from 'moment'

import Language from '../../src/components/DashboardSettings/settingInfo/Language'
import Education from '../../src/components/DashboardSettings/settingInfo/Education'
import ComplEduc from '../../src/components/DashboardSettings/settingInfo/ComplEduc'
import Security from '../../src/components/DashboardSettings/Security/Security'
import DashboardLayout from '../../layouts/DashboardLayout'
import { NextPage } from 'next'
import { SettingsProps } from '../../src/common/Types'

const { TextArea } = Input
const dateFormatList: Array<string> = ['DD/MM/YYYY']

const Settings: NextPage<SettingsProps> = ({ jsonResponse }): JSX.Element => {
  const [form] = Form.useForm()
  const [formLayout, setFormLayout] = useState<string>('horizontal')
  const [gender, setGender] = useState<string>('male')
  const [langArr, setLangArr] = useState<React.ReactNode[]>([]) //тут должен быть язык
  const [educationArr, setEducationArr] = useState<React.ReactNode[]>([])
  const [complEducArr, setComplEducArr] = useState<React.ReactNode[]>([])
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false)

  const tabMenu = useRef<HTMLDivElement>(null)

  const { user } = jsonResponse

  const scrollBtn = useCallback(
    (e) => {
      if (e.target.id == 'next') {
        const left: any = tabMenu.current?.scrollLeft
        tabMenu.current?.scrollTo({ behavior: 'smooth', left: left + 100 })
      } else if (e.target.id == 'prev') {
        const left: any = tabMenu.current?.scrollLeft
        tabMenu.current?.scrollTo({ behavior: 'smooth', left: left - 100 })
      }
    },
    [tabMenu.current]
  )

  const onChange = (e: any): void => {
    setGender(e.target.value)
  }

  const onFormLayoutChange = ({ layout }: any) => {
    setFormLayout(layout)
  }

  const formItemLayout = useMemo(() => {
    formLayout === 'horizontal'
      ? {
          labelCol: { span: 4 },
          wrapperCol: { span: 14 },
        }
      : null
  }, [formLayout])

  const deleteEducation = useCallback(
    (idx) => {
      setEducationArr((prev) => [...prev.filter((_, i) => i !== idx)])
    },
    [educationArr]
  )

  const deleteLanguage = useCallback(
    (idx) => {
      setLangArr((prev) => [...prev.filter((_, i) => i !== idx)])
    },
    [langArr]
  )

  const deleteComplEduc = useCallback(
    (idx) => {
      setComplEducArr((prev) => [...prev.filter((_, i) => i !== idx)])
    },
    [complEducArr]
  )

  return (
    <DashboardLayout
      className={`${isModalOpen ? 'settings-page settings-page--overflow' : 'settings-page'}`}
      userData={jsonResponse}
    >
      {isModalOpen && (
        <div className="security__password-success password-success">
          <div
            role="presentation"
            className="password-success__close-icon"
            onClick={() => setIsModelOpen(false)}
          ></div>
          <div className="password-success__icon-wrapper">
            <img src="/assets/img/done.svg" alt="done icon" />
          </div>
          <p className="password-success__text">зміни збережно успішно</p>
        </div>
      )}
      <div className={`${isModalOpen ? 'setting setting--blur' : 'setting'}`}>
        <section className="setting__header">
          <div>
            <h1 className="setting__header-title">Настройки</h1>
          </div>
          <div className="setting__tab">
            <div className="setting__tab-btns">
              <div
                role="presentation"
                className="setting__tab-button setting__tab-button-left"
                onClick={scrollBtn}
                id="prev"
              >
                <LeftOutlined />
              </div>
              <div
                role="presentation"
                className="setting__tab-button setting__tab-button-right"
                onClick={scrollBtn}
                id="next"
              >
                <RightOutlined />
              </div>
            </div>
            <div className="setting__tab-container">
              <div className="setting__tab-menu" ref={tabMenu}>
                <div className="setting__tab-menu-label setting__tab-menu-label_active ">
                  <div>Загальні</div>
                </div>
                <div className="setting__tab-menu-label">
                  <div>Сповіщення</div>
                </div>
                <div className="setting__tab-menu-label">
                  <div>Безпека</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Security email={user.email} setModalOpen={setIsModelOpen} />

        <section className="setting__main">
          <div className="setting__form setting__block">
            <div className="setting__main-title setting__block-title">ПРО СЕБЕ</div>
            <div className="setting__main-form  setting__block-info">
              <Form
                {...formItemLayout}
                //layout ={formLayout}
                form={form}
                initialValues={{ layout: formLayout }}
                onValuesChange={onFormLayoutChange}
                className="setting__main-form"
              >
                <div className="setting__userInfo">
                  <div className="setting__nameInfo">
                    <Form.Item
                      name="firstName"
                      label="Ім'я"
                      className="setting__main-item setting__firstname"
                    >
                      <Input className="setting__main-field" />
                    </Form.Item>

                    <Form.Item
                      name="surName"
                      label="Прізвище"
                      className="setting__main-item setting__surname"
                    >
                      <Input className="setting__main-field" />
                    </Form.Item>
                  </div>
                  <div className="setting__avatar">
                    <Form.Item name="avatar" label="" className="setting__main-item-avatar">
                      <p>Аватар</p>
                      <label htmlFor="avatarImg">
                        <div className="setting__main-field-img-block">
                          <img
                            className="setting__main-item-avatar-img"
                            src="https://profiroom.com/Backend/public/storage/avatar/noAva.jpg"
                            alt="avatar"
                          />
                          <div className="setting__main-item-avatar-edit">
                            <EditFilled />
                          </div>
                        </div>
                      </label>
                      <input
                        accept="image/png, image/jpeg"
                        type="file"
                        className="setting__main-form-item-avatar-input"
                        id="avatarImg"
                      />
                    </Form.Item>
                  </div>
                </div>
                <Form.Item
                  name="gender"
                  label="Стать"
                  className="setting__main-item setting__gender"
                >
                  <Radio.Group onChange={onChange} value={gender} className="setting__gender-value">
                    <Radio value={'male'}>Чоловіча</Radio>
                    <Radio value={'fimale'}>Жіноча</Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item name="birthday" label="Дата народження" className="setting__data">
                  <DatePicker
                    className="setting__datapicker"
                    defaultValue={moment('01/01/2015', dateFormatList[0])}
                    format={dateFormatList}
                    size="large"
                  />
                </Form.Item>
                <div className="setting__info-textarea">
                  <Form.Item
                    name="aboutYourself"
                    label="Розкажіть про себе"
                    className="setting__main-item"
                  >
                    <TextArea
                      className="setting__textarea"
                      showCount
                      maxLength={1200}
                      autoSize={{ minRows: 7 }}
                    />
                  </Form.Item>
                </div>
              </Form>
            </div>
          </div>
          <div className="setting__country setting__block">
            <div className="setting__main-title setting__block-title">МІСЦЕЗНАХОДЖЕННЯ ТА МОВИ</div>
            <div className="setting__country-container setting__block-info">
              <Form>
                <div className="setting__country-container-info">
                  <Form.Item name="country" label="Країна" className="setting__main-item">
                    <Input className="setting__main-field" />
                  </Form.Item>

                  <Form.Item name="city" label="Місто" className="setting__main-item">
                    <Input className="setting__main-field" />
                  </Form.Item>
                </div>

                <div className="setting__language">{langArr.map((i) => i)}</div>

                <div className="setting__language-button">
                  <button className="setting__button-add">
                    <PlusCircleOutlined />
                    <span
                      role="presentation"
                      onClick={() => {
                        setLangArr((arr) => [
                          ...arr,
                          <Language
                            key={arr.length}
                            deleteComponent={() => {
                              deleteLanguage(arr.length)
                            }}
                          />,
                        ])
                      }}
                      className="setting__button-add-label"
                    >
                      ДОДАТИ МОВУ
                    </span>
                  </button>
                </div>
              </Form>
            </div>
          </div>
          <div className="setting__education setting__block">
            <div className="setting__main-title setting__block-title">ВИЩА ОСВІТА</div>
            <div className="setting__form-education  setting__block-info">
              <div className="setting__education-form">{educationArr.map((i) => i)}</div>
              <div
                role="presentation"
                onClick={() => {
                  setEducationArr((arr) => [
                    ...arr,
                    <Education
                      key={arr.length}
                      deleteComponent={() => {
                        deleteEducation(arr.length)
                      }}
                    />,
                  ])
                }}
                className="setting__education-button"
              >
                <button className="setting__button-add">
                  <PlusCircleOutlined />
                  <span className="setting__button-add-label ">ДОДАТИ ОСВІТУ</span>
                </button>
              </div>
            </div>
          </div>
          <div className="setting__complement setting__block">
            <div className="setting__main-title setting__block-title">ДОДАТКОВА ОСВІТА</div>
            <div className="setting__complement-section   setting__block-info">
              <div className="setting__complement-form">{complEducArr.map((i) => i)}</div>
              <div className="setting__complement-add-button">
                <div
                  role="presentation"
                  onClick={() => {
                    setComplEducArr((arr) => [
                      ...arr,
                      <ComplEduc
                        key={arr.length}
                        deleteComponent={() => {
                          deleteComplEduc(arr.length)
                        }}
                      />,
                    ])
                  }}
                  className="setting__education-button"
                >
                  <div>
                    <button className="setting__button-add">
                      <PlusCircleOutlined />
                      <span className="setting__button-add-label">ДОДАТИ ОСВІТУ</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="setting__save">
            <button className="setting__save-btn">ЗБЕРЕГТИ ЗМІНИ</button>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'

export default Settings
