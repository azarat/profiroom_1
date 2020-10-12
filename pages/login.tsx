import React from 'react'
import { NextPage } from 'next'
// MainLayout
import MainLayout from '../layouts/MainLayout'

// Style
import { Input, Space, Form, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import Link from 'next/link'

const login: NextPage = (): JSX.Element => {
  return (
    <MainLayout>
      <h1 className="login__title">Ви можете увійти</h1>
      <h4 className="login__subtitle">Раді бачити вас знову</h4>
      <Form className="login__form">
        <Space direction="vertical">
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Будь-ласка введіть валідний E-mail', type: 'email' },
            ]}
          >
            <Input size="large" placeholder="E-mail" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item>
            <Input.Password size="large" placeholder="input password" prefix={<LockOutlined />} />
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
              <Link href="/">
                <a>Зареєструватись</a>
              </Link>
            </Space>
          </Form.Item>
        </Space>
      </Form>
    </MainLayout>
  )
}

export default login
