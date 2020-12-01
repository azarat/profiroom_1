import React, { useState, useMemo, useCallback, Dispatch, SetStateAction } from 'react'
import nextCookie from 'next-cookies'

import { Form, Input, Radio, DatePicker } from 'antd'
import { PlusCircleOutlined, EditFilled } from '@ant-design/icons'
import moment from 'moment'

import Language from './Language'
import Education from './Education'
import ComplEduc from './ComplEduc'

const dateFormatList: Array<string> = ['YYYY/MM/DD']
const { TextArea } = Input

type BasicSettingsChangeProps = {
  user: any
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const BasicSettings: React.FC<BasicSettingsChangeProps> = ({ user, setModalOpen }): JSX.Element => {
  const [form] = Form.useForm()

  //const [formLayout, setFormLayout] = useState<string>('horizontal')
  const [gender, setGender] = useState<string>(`${user.gender}`)
  const [langArr, setLangArr] = useState<React.ReactNode[]>([]) //тут должен быть язык
  const [educationArr, setEducationArr] = useState<React.ReactNode[]>([])
  const [complEducArr, setComplEducArr] = useState<React.ReactNode[]>([])

  const { jwt_token } = nextCookie('ctx')

  const handleUpdateInfo = async (): Promise<void> => {
    const name = form.getFieldValue('name')
    const surname = form.getFieldValue('surname')
    const description = form.getFieldValue('description')
    const country = form.getFieldValue('country')
    const city = form.getFieldValue('city')
    const birthDay = form.getFieldValue('birthday')
    const formValues = form.getFieldsValue()
    console.log(formValues)
    const languages = Object.keys(formValues)
      .filter((key) => /^language_\d{1}/.test(key))
      .map((key) => ({
        langName: formValues[key],
        langLevel: formValues[`language_level_${key.split('_')[1]}`],
      }))
    console.log(languages)
    const body = {
      languages,
    }
    JSON.stringify(body)

    const url = `${process.env.NEXT_PUBLIC_API}api/updateUserSettings`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${jwt_token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: name,
        surname: surname,
        gender: gender,
        description: description,
        country: country,
        city: city,

        'birthDay.year': birthDay.getFullYear(),
        'birthDay.month': birthDay.getMonth(),
        'birthDay.day': birthDay.getDate(),
      }),
    })
    const result = await response.json()
    if (result.message === 'succes') {
      setModalOpen(true)
    }
  }

  const onChange = (e: any): void => {
    setGender(e.target.value)
  }

  // const formItemLayout = useMemo(() => {
  //   formLayout === 'horizontal'
  //     ? {
  //         labelCol: { span: 4 },
  //         wrapperCol: { span: 14 },
  //       }
  //     : null
  // }, [formLayout])

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
    <section className="setting__main">
      <div className="setting__form setting__block">
        <div className="setting__main-title setting__block-title">
          <h3>ПРО СЕБЕ</h3>
        </div>
        <div className="setting__main-form  setting__block-info">
          <Form
            onFinish={handleUpdateInfo}
            //{...formItemLayout}
            //layout ={formLayout}
            form={form}
            // initialValues={{ layout: formLayout }}
            // onValuesChange={onFormLayoutChange}
            className="setting__main-form"
          >
            <div className="setting__userInfo">
              <div className="setting__nameInfo">
                <Form.Item
                  name="name"
                  label="Ім'я"
                  className="setting__main-item setting__firstname"
                  rules={[
                    {
                      min: 2,
                      message: 'Ім`я має бути не менше двух символів',
                    },
                    {
                      required: true,
                      message: 'Введіть ваше ім`я!',
                    },
                    {
                      pattern: /^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ' '-]/,
                      message: 'Поле заповнене невірно. Спецсимволи і цифри заборонені.',
                    },
                  ]}
                >
                  <Input defaultValue={user.name} type="text" className="setting__main-field" />
                </Form.Item>

                <Form.Item
                  name="surname"
                  label="Прізвище"
                  className="setting__main-item setting__surname"
                  rules={[
                    {
                      min: 2,
                      message: 'Ім`я має бути не менше двух символів',
                    },
                    {
                      required: true,
                      message: 'Введіть ваше прізвище!',
                    },
                    {
                      pattern: /^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ' '-]/,
                      message: 'Поле заповнене невірно. Спецсимволи і цифри заборонені.',
                    },
                  ]}
                >
                  <Input defaultValue={user.surname} type="text" className="setting__main-field" />
                </Form.Item>
              </div>
              <div className="setting__avatar">
                <Form.Item name="avatar" className="setting__main-item-avatar">
                  <p>Аватар</p>
                  <label htmlFor="avatarImg">
                    <div className="setting__main-field-img-block">
                      <img
                        className="setting__main-item-avatar-img"
                        src={`${user.avatar}`}
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
            <Form.Item name="gender" label="Стать" className="setting__main-item setting__gender">
              <Radio.Group onChange={onChange} value={gender} className="setting__gender-value">
                <Radio value={'male'}>Чоловіча</Radio>
                <Radio value={'fimale'}>Жіноча</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item name="birthday" label="Дата народження" className="setting__data">
              <DatePicker
                className="setting__datapicker"
                defaultValue={moment(
                  user.birthday == ''
                    ? '1970/01/01'
                    : user.birthday.slice(0, 10).replace(/-/gi, '/'),
                  dateFormatList[0]
                )}
                format={dateFormatList}
                size="large"
              />
            </Form.Item>
            <div className="setting__info-textarea">
              <Form.Item
                name="description"
                label="Розкажіть про себе"
                className="setting__main-item"
              >
                <TextArea
                  defaultValue={user.description}
                  className="setting__textarea"
                  showCount
                  maxLength={1200}
                  autoSize={{ minRows: 7 }}
                />
              </Form.Item>
            </div>
            <button type="submit">SSSSSS</button>
          </Form>
        </div>
      </div>
      <div className="setting__country setting__block">
        <div className="setting__main-title setting__block-title">
          <h3>МІСЦЕЗНАХОДЖЕННЯ ТА МОВИ</h3>
        </div>
        <div className="setting__country-container setting__block-info">
          <Form onFinish={handleUpdateInfo} form={form}>
            <div className="setting__country-container-info">
              <Form.Item
                name="country"
                label="Країна"
                className="setting__main-item"
                rules={[
                  {
                    pattern: /^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ' '-]{3,255}$/,
                    message: 'Поле заповнене невірно. Спецсимволи і цифри заборонені.',
                  },
                ]}
              >
                <Input defaultValue={user.country} className="setting__main-field" />
              </Form.Item>

              <Form.Item
                name="city"
                label="Місто"
                className="setting__main-item"
                rules={[
                  {
                    pattern: /^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ' '-]{3,255}$/,
                    message: 'Поле заповнене невірно. Спецсимволи і цифри заборонені.',
                  },
                ]}
              >
                <Input defaultValue={user.city} className="setting__main-field" />
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
                        id={arr.length}
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
        <div className="setting__main-title setting__block-title">
          <h3>ВИЩА ОСВІТА</h3>
        </div>
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
        <div className="setting__main-title setting__block-title">
          <h3>ДОДАТКОВА ОСВІТА</h3>
        </div>
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
  )
}

export default BasicSettings
export { authUser as getServerSideProps } from '../../../utils/auth'
