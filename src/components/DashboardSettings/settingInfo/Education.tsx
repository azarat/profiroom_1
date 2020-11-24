import React, { useState, useMemo } from 'react'
import { Form, Input } from 'antd'
import { IEducationProps } from './Types'
import { DeleteFilled, EditFilled, PaperClipOutlined } from '@ant-design/icons'

const Education: React.FC<IEducationProps> = ({ deleteComponent }: any): JSX.Element => {
  const [showEduc, setShowEduc] = useState(false)

  const today = new Date()
  const years: Array<number> = []
  useMemo(() => {
    for (let i = 1960; i <= today.getFullYear(); i++) {
      years.push(i)
    }
  }, [])

  const scienceDegree = ['Бакалавр', 'Магістр', 'Аспірант', 'Кандидат наук', 'Доктор наук']

  return (
    <>
      <Form>
        <div className="setting__education-form-edit">
          <div className="setting__education-form-univer">
            <Form.Item name="university" label="Навчальний заклад" className="setting__main-item">
              <Input className="setting__main-field" />
            </Form.Item>
          </div>
          <div className="setting__button-editor setting__education-btns">
            <div
              role="presentation"
              onClick={() => setShowEduc((prev) => !prev)}
              className="setting__button-edit setting__education-button-edit"
            >
              <EditFilled />
            </div>
            <div className="setting__button-delete setting__education-button-delete">
              <DeleteFilled onClick={deleteComponent} />
            </div>
          </div>
        </div>
        <div
          className={`setting__education-form-univer-info ${
            showEduc ? 'setting__education-form-univer-info-hidden' : ''
          }`}
        >
          <div className="setting__education-specialty">
            <div className="setting__education-level setting__select">
              <label htmlFor="scienceDegree">
                <p>Наукова ступінь</p>
              </label>
              <select id="scienceDegree">
                {scienceDegree.map((level, i) => {
                  return (
                    <option key={i} value={level}>
                      {level}
                    </option>
                  )
                })}
              </select>
            </div>
            <div>
              <Form.Item name="specialty" label="Спеціальність" className="setting__main-item">
                <Input className="setting__main-field" />
              </Form.Item>
            </div>
          </div>
          <div className="setting__education-yaer">
            <div className="setting__select">
              <label htmlFor="startYear">
                <p>Рік старту</p>
              </label>
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
            <div className="setting__select">
              <label htmlFor="endYear">
                <p>Рік закінчення</p>
              </label>
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
          <div className="setting__education-downloads">
            <div className="setting__education-downloads-input">
              <PaperClipOutlined />
              <label htmlFor="doc">Завантажити файл/фото диплома</label>
              <input id="doc" type="file" accept=".png, .jpg, .jpeg"></input>
            </div>
            <div>
              <p className="setting__education-downloads-formats">
                Можливі формати файлів jpg, jpeg, png
              </p>
            </div>
          </div>
        </div>
      </Form>
    </>
  )
}

export default Education
