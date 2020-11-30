import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Components
import FormField from '../FormField/FormField'
// Style
import { Space, Form, Button, Checkbox } from 'antd'
// Types
import { LoginValues } from './Types'

import { decodeFunc } from '../../utils/decode'

const LoginForm: React.FC = (): JSX.Element => {
  const [form] = Form.useForm()
  const router = useRouter()

  const onFinish = async (values: LoginValues): Promise<void> => {
    if (values.foreignComp === undefined) {
      values.foreignComp = false
    }

    console.log(values)
    const url = `${process.env.NEXT_PUBLIC_API}api/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(values),
    })
    const { token } = await response.json()
    const userId = decodeFunc(token).sub
    document.cookie = `jwt_token=${token}`
    document.cookie = `user_id=${userId}`
    router.push('/dashboard')
  }

  return (
    <>
      <h1 className="login__title">Ви можете увійти</h1>
      <h4 className="login__subtitle">Раді бачити вас знову</h4>
      <Form noValidate name="login" className="login__form" form={form} onFinish={onFinish}>
        <Space direction="vertical">
          <FormField
            name="email"
            label="Ваш e-mail"
            type="email"
            id="emailField"
            rules={[
              { required: true, message: 'Поле E-mail є обовʼязковим!' },
              {
                type: 'email',
                message: 'Введений невірний E-mail!',
              },
            ]}
          />
          <FormField
            name="password"
            label="Ваш пароль"
            type="password"
            id="passwordField"
            rules={[{ required: true, message: 'Поле пароль є обовʼязковим' }]}
          />
          <div className="login__form-checkbox">
            <Form.Item name="foreignComp" valuePropName="checked" noStyle>
              <Checkbox>Чужий комп&apos;ютер</Checkbox>
            </Form.Item>
            <Link href="/">
              <a className="login-form-forgot">Забули пароль?</a>
            </Link>
          </div>
          <div className="login__form-wrapper-btn">
            <Button type="primary" htmlType="submit" className="login__form-button">
              Увійти
            </Button>
          </div>
        </Space>
      </Form>
    </>
  )
}

export default LoginForm
