import React, { MouseEventHandler } from 'react'
import Link from 'next/link'
// Style
import { Input, Space, Form, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

// Types
import { LoginFormProps } from './Types'

const LoginForm: React.FC<LoginFormProps> = ({ registrationHandler }): JSX.Element => {
  const [form] = Form.useForm()

  const onFinish = (values: any): void => {
    console.log('received values :', values)
  }

  const handleRegistration = (): void => {
    registrationHandler()
  }

  return (
    <>
      <h1 className="login__title">Ви можете увійти</h1>
      <h4 className="login__subtitle">Раді бачити вас знову</h4>
      <Form name="login" className="login__form" form={form} onFinish={onFinish}>
        <Space direction="vertical">
          <Form.Item
            label="Ваш E-mail"
            name="email"
            rules={[
              { required: true, message: 'Поле E-mail є обовʼязковим!' },
              {
                type: 'email',
                message: 'Введений невірний E-mail!',
              },
            ]}
          >
            <Input size="large" placeholder="E-mail" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="Ваш пароль"
            name="login_password"
            rules={[{ required: true, message: 'Поле пароль є обовʼязковим' }]}
          >
            <Input.Password size="large" placeholder="Пароль" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Чужий комп'ютер</Checkbox>
            </Form.Item>
            <Link href="/">
              <a className="login-form-forgot">Забули пароль?</a>
            </Link>
          </Form.Item>
          <Form.Item>
            <Space direction="horizontal">
              <Button type="primary" htmlType="submit" className="login-form-button">
                Увійти
              </Button>
              або
              <Button onClick={handleRegistration} value="name" name="registration" type="link">
                Зареєструватись
              </Button>
            </Space>
          </Form.Item>
        </Space>
      </Form>
    </>
  )
}

export default LoginForm
