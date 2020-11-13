import React from 'react'

import { Form, Input } from 'antd'
import { DeleteFilled } from '@ant-design/icons'
import { ILanguageProps } from './Types'

const Language: React.FC<ILanguageProps> = ({ deleteComponent }: any): JSX.Element => {
  // function handleChange(value: any) {
  //     console.log(`selected ${value}`);
  //     }

  const langLevel = ['Початковий', 'Середній', 'Продвинутий', 'Вільно володію', 'Рідна']

  return (
    <>
      <div className="setting__language-item">
        <Form.Item name="language" label="Мова" className="setting__main-item">
          <Input className="setting__main-field" pattern="^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ' '-]{3,15}$" />
        </Form.Item>
      </div>
      <div className="setting__language-value">
        <div className="setting__language-level setting__select">
          <label htmlFor="langLevel">
            <p>Рівень володіння</p>
          </label>
          <select id="langLevel">
            {langLevel.map((item, i) => {
              return (
                <option key={i} value={i}>
                  {item}
                </option>
              )
            })}
          </select>
        </div>
        <div className="setting__button-delete">
          <DeleteFilled onClick={deleteComponent} />
        </div>
      </div>
    </>
  )
}

export default Language
