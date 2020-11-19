import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import React, { Dispatch, SetStateAction } from 'react'
import nextCookie from 'next-cookies'

type EmailChangeProps = {
  email: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const EmailChange: React.FC<EmailChangeProps> = ({ email, setModalOpen }): JSX.Element => {
  const { jwt_token } = nextCookie('ctx')

  const [form] = useForm()

  const handleNewEmail = async (): Promise<void> => {
    const oldEmail = email
    const newEmail = form.getFieldValue('new-mail')
    const password = form.getFieldValue('new-pass')

    const url = `${process.env.NEXT_PUBLIC_API}api/updateUserEmail`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `bearer ${jwt_token}`,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        oldMail: oldEmail,
        newMail: newEmail,
        password: password,
      }),
    })
    const result = await response.json()
    if (result.message === 'succes') {
      setModalOpen(true)
    }
  }

  return (
    <div className="security__email email">
      <div className="email__wrapper">
        <div className="email__inner">
          <h3 className="email__title">зміна e-mail адреси</h3>
          <Form form={form} onFinish={() => handleNewEmail()}>
            <div className="email__item">
              <h5 className="email__item-title">Ваш поточний e-mail</h5>
              <Form.Item>
                <Input value={email} type="email" className="email__input" />
              </Form.Item>
            </div>
            <div className="email__item">
              <h5 className="email__item-title">Ваш новий e-mail</h5>
              <Form.Item
                name="new-mail"
                rules={[
                  {
                    type: 'email',
                    message: 'Введений невірний E-mail!',
                  },
                  {
                    required: true,
                    message: 'Поле E-mail є обов`язковим',
                  },
                ]}
              >
                <Input className="email__input" autoComplete="new-password" type="email" />
              </Form.Item>
            </div>
            <div className="email__item">
              <h5 className="email__item-title">Введіть поточний пароль</h5>
              <Form.Item name="new-pass">
                <Input className="email__input" autoComplete="new-password" type="password" />
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

export default EmailChange
