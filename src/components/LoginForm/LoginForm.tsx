import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// Style
import { Input, Space, Form, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// Types
import { LoginFormProps, LoginValues } from './Types'

const decodeFunc = (token: string): any => {
  const tokenSplit = token.split('.')[1]
  const decodeToken = JSON.parse(atob(tokenSplit))
  return decodeToken.sub
}

const LoginForm: React.FC<LoginFormProps> = ({ registrationHandler }): JSX.Element => {
  const [form] = Form.useForm()
  const router = useRouter()

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  }
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  }

  const onFinish = async (values: LoginValues): Promise<void> => {
    if (values.foreignComp === undefined) {
      values.foreignComp = false
    }
    const url = `${process.env.NEXT_PUBLIC_API}api/login`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(values),
    })
    const { token } = await response.json()
    const userId = decodeFunc(token)
    document.cookie = `jwt_token=${token}`
    document.cookie = `user_id=${userId}`
    router.push('/dashboard')
  }

  const handleRegistration = (): void => {
    registrationHandler()
  }

  return (
    <>
      <h1 className="login__title">Ви можете увійти</h1>
      <h4 className="login__subtitle">Раді бачити вас знову</h4>
      <Form
        {...formItemLayout}
        name="login"
        className="login__form"
        form={form}
        onFinish={onFinish}
      >
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
            name="password"
            rules={[{ required: true, message: 'Поле пароль є обовʼязковим' }]}
          >
            <Input.Password size="large" placeholder="Пароль" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Form.Item name="foreignComp" valuePropName="checked" noStyle>
              <Checkbox>Чужий комп&apos;ютер</Checkbox>
            </Form.Item>
            <Link href="/">
              <a className="login-form-forgot">Забули пароль?</a>
            </Link>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
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
