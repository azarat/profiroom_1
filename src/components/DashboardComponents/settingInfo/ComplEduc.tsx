import React from 'react'
import { NextPage } from 'next'
import { Form, Input } from 'antd'
import { DeleteFilled, EditFilled, PaperClipOutlined } from '@ant-design/icons'

const ComplEduc: NextPage = (): JSX.Element => {
  return (
    <>
      <Form>
        <div className="setting__complement-form-university">
          <div className="setting__complement-form-university-name">
            <Form.Item name="univer" label="Навчальний заклад" className="setting__main-item">
              <Input name="univer" className="setting__main-field" />
            </Form.Item>
          </div>
          <div className="setting__button-editor setting__complement-btns">
            <div className="setting__button-edit setting__complement-edit">
              <EditFilled />
            </div>
            <div className="setting__button-delete setting__complement-delete">
              <DeleteFilled />
            </div>
          </div>
        </div>
        <div className="setting__complement-form-univer-info">
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
                  <option value="1">Січень</option>
                  <option value="2">Лютий</option>
                  <option value="3">Березень</option>
                  <option value="4">Квітень</option>
                  <option value="5">Травень</option>
                  <option value="6">Червень</option>
                  <option value="7">Липень</option>
                  <option value="8">Серпень</option>
                  <option value="9">Вересень</option>
                  <option value="10">Жовтень</option>
                  <option value="11">Листопад</option>
                  <option value="12">Грудень</option>
                </select>
              </div>
              <div className="setting__select">
                <select id="startYear"></select>
              </div>
            </div>

            <div className="setting__complement-form-info-yaers">
              <div className="setting__select">
                <label htmlFor="endMonth">
                  <p>Рік старту</p>
                </label>
                <select id="endMonth">
                  <option value="1">Січень</option>
                  <option value="2">Лютий</option>
                  <option value="3">Березень</option>
                  <option value="4">Квітень</option>
                  <option value="5">Травень</option>
                  <option value="6">Червень</option>
                  <option value="7">Липень</option>
                  <option value="8">Серпень</option>
                  <option value="9">Вересень</option>
                  <option value="10">Жовтень</option>
                  <option value="11">Листопад</option>
                  <option value="12">Грудень</option>
                </select>
              </div>
              <div className="setting__select">
                <select id="endYear"></select>
              </div>
            </div>
            <div></div>
          </div>

          <div className="setting__education-downloads">
            <div className="setting__education-downloads-input">
              <PaperClipOutlined />
              <label htmlFor="doc">Завантажити файл/фото диплома</label>
              <input id="doc" type="file"></input>
            </div>
            <p>Можливі формати файлів jpg, jpeg, png</p>
          </div>
        </div>
      </Form>
    </>
  )
}

export default ComplEduc
