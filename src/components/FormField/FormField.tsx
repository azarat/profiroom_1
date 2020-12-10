import React, { useState } from 'react'

import { Form } from 'antd'
// Types
import { FormFieldProps } from './Types'

const FormField: React.FC<FormFieldProps> = ({
  type,
  label,
  id,
  rules,
  name,
  dependencies,
}): JSX.Element => {
  const [activeLabel, setActiveLabel] = useState(false)
  const [valueInput, setValueInput] = useState('')

  console.log()

  const activeCls = `form-field__label ${activeLabel ? `form-field__label--is-active` : ''}`

  const handleTextChange = (text: string): void => {
    setValueInput(text)
    if (text !== '') {
      setActiveLabel(true)
    } else {
      setActiveLabel(false)
    }
  }

  return (
    <Form.Item dependencies={dependencies} name={name} rules={rules}>
      <div className="form-field">
        <input
          formNoValidate
          className="form-field__input"
          id={id}
          value={valueInput}
          onChange={(e) => handleTextChange(e.target.value)}
          type={type}
        />
        <label htmlFor={id} className={activeCls}>
          {label}
        </label>
      </div>
    </Form.Item>
  )
}

export default FormField
