import React from 'react'

import { Form, Input } from 'antd'
import { DeleteFilled } from '@ant-design/icons'

const Language: React.FC = (): JSX.Element => {
  // function handleChange(value: any) {
  //     console.log(`selected ${value}`);
  //     }

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
            <option value="Початковий">Початковий</option>
            <option value="Середній">Середній</option>
            <option value="Продвинутий">Продвинутий</option>
            <option value="Вільно володію">Вільно володію</option>
            <option value="Рідна">Рідна</option>
          </select>
        </div>
        <div className="setting__button-delete">
          <DeleteFilled />
        </div>
      </div>
    </>
  )
}

export default Language
