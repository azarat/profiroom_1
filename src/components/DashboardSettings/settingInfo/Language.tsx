import React from 'react'

import { Form, Input, Select } from 'antd'
import { DeleteFilled } from '@ant-design/icons'
import { ILanguageProps } from './Types'

const { Option } = Select

const Language: React.FC<ILanguageProps> = ({ id, deleteComponent }: any): JSX.Element => {
  // function handleChange(value: any) {
  //     console.log(`selected ${value}`);
  //     }

  const langLevel = ['Початковий', 'Середній', 'Продвинутий', 'Вільно володію', 'Рідна']

  return (
    <>
      <div className="setting__language-item">
        <Form.Item name={`langName_${id}`} label="Мова" className="setting__main-item">
          <Input className="setting__main-field" pattern="^[a-zA-Zа-яА-ЯёЁЇїІіЄєҐґ' '-]{3,15}$" />
        </Form.Item>
      </div>
      <div className="setting__language-value">
        <div className="setting__language-level setting__select">
          <label htmlFor="langLevel">
            <p>Рівень володіння</p>
          </label>
          <Form.Item name={`langLevel_${id}`}>
            <Select
              id="langLevel"
              className="setting__language-level-select"
              defaultValue="Початковий"
              bordered={false}
            >
              {langLevel.map((item, i) => {
                return (
                  <Option key={i} value={i}>
                    {item}
                  </Option>
                )
              })}
            </Select>
          </Form.Item>
        </div>
        <div className="setting__button-delete">
          <div>
            <DeleteFilled onClick={deleteComponent} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Language
