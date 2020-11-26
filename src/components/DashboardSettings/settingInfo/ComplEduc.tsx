import React, { useState, useMemo } from 'react'
import { NextPage } from 'next'
import { Form, Input, Select } from 'antd'
import { IComplEducProps } from './Types'
import { DeleteFilled, EditFilled, PaperClipOutlined } from '@ant-design/icons'

const { Option } = Select

const ComplEduc: NextPage<IComplEducProps> = ({ deleteComponent }: any): JSX.Element => {
  const [showEduc, setShowEduc] = useState(false)

  const months = [
    'Січень',
    'Лютий',
    'Березень',
    'Квітень',
    'Травень',
    'Червень',
    'Липень',
    'Серпень',
    'Вересень',
    'Жовтень',
    'Листопад',
    'Грудень',
  ]

  const today = new Date()
  const years: Array<number> = []
  useMemo(() => {
    for (let i = 1960; i <= today.getFullYear(); i++) {
      years.push(i)
    }
  }, [])

  return (
    <>
      <Form>
        <div className="setting__complement-form-university">
          <div className="setting__complement-form-university-name">
            <Form.Item
              name="univer"
              label="Навчальний заклад"
              className="setting__main-item setting__complement-univer"
            >
              <Input name="univer" className="setting__main-field" />
            </Form.Item>
          </div>
          <div className="setting__button-editor setting__complement-btns">
            <div
              role="presentation"
              onClick={() => setShowEduc((prev) => !prev)}
              className="setting__button-edit setting__complement-edit"
            >
              <EditFilled />
            </div>
            <div className="setting__button-delete setting__complement-delete">
              <DeleteFilled onClick={deleteComponent} />
            </div>
          </div>
        </div>
        <div
          className={`setting__complement-form-univer-info ${
            showEduc ? 'setting__education-form-univer-info-hidden' : ''
          }`}
        >
          <div>
            <Form.Item name="courses" label="Назва курсів" className="setting__main-item">
              <Input name="courses" className="setting__main-field" />
            </Form.Item>
          </div>

          <div className="setting__complement-form-info">
            <div className="setting__complement-form-info-yaers">
              <div className="setting__select">
                <label htmlFor="startMonth">
                  <p>Рік старту</p>
                </label>
                <Select id="startMonth" defaultValue="Січень" bordered={false}>
                  {months.map((month, ind) => {
                    return (
                      <Option key={ind} value={ind}>
                        {month}
                      </Option>
                    )
                  })}
                </Select>
              </div>
              <div className="setting__select">
                <Select id="startYear" defaultValue="1960" bordered={false}>
                  {years.map((year, ind) => {
                    return (
                      <Option key={ind} value={year}>
                        {year}
                      </Option>
                    )
                  })}
                </Select>
              </div>
            </div>

            <div className="setting__complement-form-info-yaers">
              <div className="setting__select">
                <label htmlFor="endMonth">
                  <p>Рік закінчення</p>
                </label>
                <Select id="endMonth" defaultValue="Січень" bordered={false}>
                  {months.map((month, ind) => {
                    return (
                      <Option key={ind} value={ind}>
                        {month}
                      </Option>
                    )
                  })}
                </Select>
              </div>
              <div className="setting__select">
                <Select id="endtYear" defaultValue="1960" bordered={false}>
                  {years.map((year, ind) => {
                    return (
                      <Option key={ind} value={year}>
                        {year}
                      </Option>
                    )
                  })}
                </Select>
              </div>
            </div>
            <div></div>
          </div>

          <div className="setting__education-downloads">
            <div className="setting__education-downloads-input">
              <PaperClipOutlined />
              <label htmlFor="doc">Завантажити файл/фото диплома</label>
              <input id="doc" type="file" accept=".png, .jpg, .jpeg"></input>
            </div>
            <p>Можливі формати файлів jpg, jpeg, png</p>
          </div>
        </div>
      </Form>
    </>
  )
}

export default ComplEduc
