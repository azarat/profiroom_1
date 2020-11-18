import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { useState } from 'react'
const Secutity: React.FC = (): JSX.Element => {
  const [form] = useForm()
  const [line, setLine] = useState<boolean[]>(Array(5).fill(false))

  const handleFormChange = () => {
    form
      .validateFields(['password'])
      .then(() => setLine((prev) => prev.map(() => true)))
      .catch(({ errorFields, values }) => {
        const [field] = errorFields
        if (!values.password) {
          setLine((prev) => prev.map(() => false))
          return
        }
        setLine((prev) => [...prev.map((_, idx) => idx >= field.errors.length)])
      })
  }

  console.log(line)

  return (
    <div className="security">
      <div className="security__wrapper">
        <div className="security__password password">
          <div className="password__wrapper">
            <div className="password__inner">
              <h3 className="password__title">зміна пароля</h3>
              <Form form={form}>
                <div className="password__item">
                  <h5 className="password__item-title">Введіть старий пароль</h5>
                  <Form.Item name="old_password">
                    <Input type="password" className="password__input" />
                  </Form.Item>
                </div>

                <div className="password__item">
                  <h5 className="password__item-title">Введіть новий пароль</h5>
                  <Form.Item
                    name="password"
                    rules={[
                      { required: true, message: 'Введіть новий пароль' },
                      { min: 8, message: 'Пароль має складатись з мінімум 8 символів' },
                      { pattern: /[A-Z]{1,}/, message: 'Використовуйте великі літери A-Z' },
                      { pattern: /[a-z]{1,}/, message: 'Використовуйте літери a-z' },
                      { pattern: /[0-9]{1,}/, message: 'Використовуйте цифри' },
                      {
                        pattern: /[-!$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/,
                        message: 'Використовуйте символи',
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      className="password__input"
                      onChange={handleFormChange}
                    />
                  </Form.Item>
                </div>
                <div className="password__validation">
                  {line.map((val, i) => (
                    <span
                      key={i}
                      className={`${val ? 'password__validate' : 'password__unvalidate'}`}
                    ></span>
                  ))}
                </div>
                <div className="password__item">
                  <h5 className="password__item-title">Підтвердіть новий пароль</h5>

                  <Form.Item name="repeat_password">
                    <Input type="password" className="password__input" />
                  </Form.Item>
                </div>
                <Form.Item className="password__btn-wrapper">
                  <Button htmlType="submit" className="password__btn">
                    Зберегти зміни
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
        <div className="security__email email">
          <div className="email__wrapper">
            <div className="email__inner">
              <h3 className="email__title">зміна e-mail адреси</h3>
              <Form>
                <div className="email__item">
                  <h5 className="email__item-title">Ваш поточний e-mail</h5>
                  <Form.Item>
                    <Input type="email" className="email__input" />
                  </Form.Item>
                </div>
                <div className="email__item">
                  <h5 className="email__item-title">Ваш новий e-mail</h5>
                  <Form.Item>
                    <Input type="email" className="email__input" />
                  </Form.Item>
                </div>
                <div className="email__item">
                  <h5 className="email__item-title">Введіть поточний пароль</h5>
                  <Form.Item className="email__item">
                    <Input type="email" className="email__input" />
                  </Form.Item>
                </div>
                <Form.Item className="password__btn-wrapper">
                  <Button htmlType="submit" className="password__btn">
                    Зберегти зміни
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secutity
