import React, { useState, useMemo } from 'react'
import { Form, Input, Select } from 'antd'
import { IEducationProps } from './Types'
import { DeleteFilled, EditFilled, PaperClipOutlined } from '@ant-design/icons'
import FormItem from 'antd/lib/form/FormItem'

const { Option } = Select

const Education: React.FC<IEducationProps> = ({ id, deleteComponent }: any): JSX.Element => {
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
      <div className="setting__education-form-edit">
        <div className="setting__education-form-univer">
          <Form.Item
            name={`institution_${id}`}
            label="Навчальний заклад"
            className="setting__main-item"
          >
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
            <Form.Item name={`academicDegree_${id}`}>
              <label htmlFor="academicDegree">
                <p>Наукова ступінь</p>
              </label>
              <Select
                id="cienceDegree"
                className="setting__language-level-select"
                defaultValue="Бакалавр"
                bordered={false}
              >
                {scienceDegree.map((level, i) => {
                  return (
                    <Option key={i} value={i}>
                      {level}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
          </div>
          <div>
            <Form.Item
              name={`specialty_${id}`}
              label="Спеціальність"
              className="setting__main-item"
            >
              <Input className="setting__main-field" />
            </Form.Item>
          </div>
        </div>
        <div className="setting__education-yaer">
          <div className="setting__select">
            <Form.Item name={`startEducation_${id}`}>
              <label htmlFor="startYear">
                <p>Рік старту</p>
              </label>
              <Select id="startYear" defaultValue="1960" bordered={false}>
                {years.map((year, ind) => {
                  return (
                    <Option key={ind} value={year}>
                      {year}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
          </div>
          <div className="setting__select">
            <Form.Item name={`finishEducation_${id}`}>
              <label htmlFor="endYear">
                <p>Рік закінчення</p>
              </label>
              <Select id="endYear" defaultValue="1960" bordered={false}>
                {years.map((year, ind) => {
                  return (
                    <Option key={ind} value={year}>
                      {year}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
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
    </>
  )
}

export default Education
