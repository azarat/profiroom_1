import React, { MouseEvent } from 'react'
import { Form, Input } from 'antd'
import { DeleteFilled, EditFilled, PaperClipOutlined } from '@ant-design/icons'

const Education: React.FC = (): JSX.Element => {
  const boxStart = document.querySelector('#startYear'),
    boxEnd = document.querySelector('#endYear'),
    today = new Date()

  for (let i = 1960; i <= today.getFullYear(); i++) {
    const opt = document.createElement('option')
    opt.value = `${i}`
    opt.innerHTML = `${i}`
    boxStart?.appendChild(opt)
  }
  for (let i = 1960; i <= today.getFullYear(); i++) {
    const opt = document.createElement('option')
    opt.value = `${i}`
    opt.innerHTML = `${i}`
    boxEnd?.appendChild(opt)
  }

  //   const dropDownYearf = (e: MouseEvent<HTMLSelectElement>) => {
  //     const target = e.target as HTMLSelectElement,
  //       today = new Date()

  //     if (target.id == 'startYear') {
  //       const max = document.querySelector('#endYear')?.nodeValue || today.getFullYear(),
  //         box = document.querySelector(`#startYear`)

  //       for (let i = 1960; i <= max; i++) {
  //         const opt = document.createElement('option')
  //         opt.value = `${i}`
  //         opt.innerHTML = `${i}`
  //         box?.appendChild(opt)
  //       }
  //     } else if (target.id == 'endYear') {
  //       const min = document.querySelector('#startYear')?.nodeValue || 1960,
  //         max = today.getFullYear(),
  //         box = document.querySelector(`#endYear`)

  //       for (let i = min; i <= max; i++) {
  //         const opt = document.createElement('option')
  //         opt.value = `${i}`
  //         opt.innerHTML = `${i}`
  //         box?.appendChild(opt)
  //       }
  //     }
  //   }

  return (
    <>
      <Form>
        <div className="setting__education-form-univer">
          <Form.Item name="university" label="Навчальний заклад" className="setting__main-item">
            <Input className="setting__main-field" />
          </Form.Item>
        </div>
        <div className="setting__button-editor setting__education-btns">
          <div className="setting__button-edit setting__education-button-edit">
            <EditFilled />
          </div>
          <div className="setting__button-delete setting__education-button-delete">
            <DeleteFilled />
          </div>
        </div>
        <div className="setting__education-form-univer-info">
          <div className="setting__education-level setting__select">
            <label htmlFor="scienceDegree">
              <p>Наукова ступінь</p>
            </label>
            <select id="scienceDegree">
              <option value="Бакалавр">Бакалавр</option>
              <option value="Магістр">Магістр</option>
              <option value="Аспірант">Аспірант</option>
              <option value="Кандидат наук">Кандидат наук</option>
              <option value="Доктор наук">Доктор наук</option>
            </select>
          </div>
          <div>
            <Form.Item name="specialty" label="Спеціальність" className="setting__main-item">
              <Input className="setting__main-field" />
            </Form.Item>
          </div>
          <div className="setting__education-yaer">
            <div className="setting__select">
              <label htmlFor="startYear">
                <p>Рік старту</p>
              </label>
              <select id="startYear"></select>
            </div>
            <div className="setting__select">
              <label htmlFor="endYear">
                <p>Рік закінчення</p>
              </label>
              <select id="endYear"></select>
            </div>
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

export default Education
