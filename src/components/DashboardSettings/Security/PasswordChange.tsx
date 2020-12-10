import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { Dispatch, SetStateAction, useState } from 'react'
import nextCookie from 'next-cookies'

type PasswordChangeProps = {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const PasswordChange: React.FC<PasswordChangeProps> = ({ setModalOpen }): JSX.Element => {
  const [form] = useForm()
  const [line, setLine] = useState<boolean[]>(Array(4).fill(false))

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
  const { jwt_token } = nextCookie('ctx')

  const handleNewPassword = async (): Promise<void> => {
    const oldPassword = form.getFieldValue('old_password')
    const newPassword = form.getFieldValue('password')
    const repeatPassword = form.getFieldValue('password')

    const url = `${process.env.NEXT_PUBLIC_API}api/password/updatePass`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${jwt_token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        oldPassword: oldPassword,
        passwords: {
          newPassword: newPassword,
          newPassword_confirmation: repeatPassword,
        },
      }),
    })
    const result = await response.json()
    if (result.message === 'succes') {
      setModalOpen(true)
    }
  }

  return (
    <div className="security__password password">
      <div className="password__wrapper">
        <div className="password__inner">
          <h3 className="password__title">зміна пароля</h3>
          <Form form={form} onFinish={() => handleNewPassword()}>
            <div className="password__item">
              <h5 className="password__item-title">Введіть старий пароль</h5>
              <Form.Item
                name="old_password"
                rules={[{ required: true, message: 'Введіть старий пароль' }]}
              >
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
                ]}
              >
                <Input type="password" className="password__input" onChange={handleFormChange} />
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
              <Form.Item
                name="repeat_password"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: 'Будь ласка підтвердіть Ваш пароль!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve()
                      }
                      return Promise.reject('Паролі не співпадають')
                    },
                  }),
                ]}
              >
                <Input type="password" className="password__input" />
              </Form.Item>
            </div>
            <div className="password__btn-wrapper">
              <Button htmlType="submit" className="password__btn">
                Зберегти зміни
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default PasswordChange
