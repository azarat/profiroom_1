import React, { useState } from 'react'
import { Form, Input, Select } from 'antd'
const Wallets = () => {
  const [operation, setOperation] = useState<string | null>(null)
  const handleChange = (value: string) => {
    setOperation(value)
  }
  return (
    <div className="finance__wallets wallets">
      <div className="wallets__wrapper">
        <h3 className="wallets__title">введеня і виведення грошей</h3>
        <Form className="wallets__transactions">
          <Select
            placeholder="Оберіть операцію"
            className="wallets__transaction-select "
            onChange={handleChange}
            bordered={false}
            size="large"
          >
            <Select.Option value="Вивести гроші">Вивести гроші</Select.Option>
            <Select.Option value="Ввести гроші">Ввести гроші</Select.Option>
          </Select>
          {operation === 'Вивести гроші' && (
            <div className="wallets__withdraw">
              <p className="wallets__card-number">Введіть номер картки</p>
              <div className="wallets__input-wrapper">
                <Input className="wallets__input" />
              </div>
              <p className="wallets__card-text">напишіть суму</p>
              <div className="wallets__input-wrapper">
                <Input className="wallets__input" name="summ" type="number" />
                <label className="wallets__input-label" htmlFor="summ">
                  UAH
                </label>
              </div>
              <p className="wallets__card-text">ваш пароль</p>
              <div className="wallets__input-wrapper">
                <Input className="wallets__input" type="password" autoComplete="new-password" />
              </div>
              <button className="wallets__btn">підтвердити</button>
            </div>
          )}
          {operation === 'Ввести гроші' && (
            <div className="wallets__deposit">
              <div className="wallets__withdraw">
                <p className="wallets__card-number">Введіть номер картки</p>
                <div className="wallets__input-wrapper">
                  <Input className="wallets__input" />
                </div>
                <p className="wallets__card-text">напишіть суму</p>
                <div className="wallets__input-wrapper">
                  <Input className="wallets__input" name="summ" type="number" />
                  <label className="wallets__input-label" htmlFor="summ">
                    UAH
                  </label>
                </div>
                <button className="wallets__btn">підтвердити</button>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  )
}

export default Wallets
