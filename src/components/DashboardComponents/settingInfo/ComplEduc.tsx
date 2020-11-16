import React, { useState, useMemo } from 'react'
import { NextPage } from 'next'
import { Form, Input } from 'antd'
import { IComplEducProps } from './Types'
import { DeleteFilled, EditFilled, PaperClipOutlined } from '@ant-design/icons'

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
                <select id="startMonth">
                  {months.map((month, ind) => {
                    return (
                      <option key={ind + 1} value={ind}>
                        {month}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="setting__select">
                <select id="startYear">
                  {years.map((year, ind) => {
                    return (
                      <option key={ind} value={year}>
                        {year}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className="setting__complement-form-info-yaers">
              <div className="setting__select">
                <label htmlFor="endMonth">
                  <p>Рік закінчення</p>
                </label>
                <select id="endMonth">
                  {months.map((month, ind) => {
                    return (
                      <option key={ind + 1} value={ind}>
                        {month}
                      </option>
                    )
                  })}
                </select>
              </div>
              <div className="setting__select">
                <select id="endYear">
                  {years.map((year, ind) => {
                    return (
                      <option key={ind} value={year}>
                        {year}
                      </option>
                    )
                  })}
                </select>
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
