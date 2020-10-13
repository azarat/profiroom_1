import React from 'react'
import Link from 'next/link'
// Styles
import { Form, Input, Space, Button, Checkbox } from 'antd'

// Icons
import { UserOutlined, MailOutlined, LockOutlined, UserAddOutlined } from '@ant-design/icons'

// Types
import { RegistrationFormProps } from './Types'

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  registrationHandler,
}): JSX.Element => {
  const [form] = Form.useForm()

  const onFinish = (values: any): void => {
    console.log('Received values of form: ', values)
  }

  const validatePassword = (value: any, callback: any) => {
    const regExpPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    if (value && !value.match(regExpPass)) {
      callback('Пароль не валідний')
    } else {
      callback()
    }
  }

  const handleRegistration = (): void => {
    registrationHandler()
  }
  return (
    <>
      <h1 className="login__title">Реєстрація</h1>
      <h4 className="login__subtitle">
        Ласкаво просимо на кращу платформу для фрілансу Profiroom!
      </h4>
      <Form
        className="registration__form"
        form={form}
        onFinish={onFinish}
        name="register"
        scrollToFirstError
      >
        <Space direction="vertical">
          <Form.Item
            label="Ваше ім`я"
            name="firstName"
            rules={[
              {
                required: true,
                message: 'Введіть ваше ім`я!',
              },
              {
                min: 2,
                message: 'Ім`я має бути не менше двух символів',
              },
            ]}
          >
            <Input size="large" prefix={<UserOutlined />} />
          </Form.Item>
          <Form.Item
            label="Ваше прізвище"
            name="lastName"
            rules={[
              {
                required: true,
                message: 'Введіть ваше прізвище!',
              },
              {
                min: 2,
                message: 'Прізвище має бути не менше двух символів',
              },
            ]}
          >
            <Input size="large" prefix={<UserAddOutlined />} />
          </Form.Item>
          <Form.Item
            name="email"
            label="Ваш E-mail"
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
            <Input size="large" prefix={<MailOutlined />} />
          </Form.Item>
          <Form.Item
            label="Ваш пароль"
            name="password"
            rules={[
              {
                required: true,
                message: 'Будь-ласка введіть Ваш пароль!',
              },
              {
                min: 6,
                message: 'Пароль має бути не менше 6 символів',
              },
              {
                validator: validatePassword,
              },
            ]}
            hasFeedback
          >
            <Input.Password size="large" prefix={<LockOutlined />} />
          </Form.Item>
          <p className="registration__password-information">
            Пароль повинен складатися з не менш ніж 6 символів, містити цифри та латинські літери, у
            тому числі великі літери
          </p>

          <Form.Item
            label="Підтвердіть Ваш пароль"
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Будь ласка підтвердіть Ваш пароль!',
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('Паролі не співпадають')
                },
              }),
            ]}
          >
            <Input.Password size="large" prefix={<LockOutlined />} />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>
              Я згоден(-на) з{' '}
              <Link href="/">
                <a className="registration__offer">Політикою конфіденційності</a>
              </Link>
            </Checkbox>
          </Form.Item>
          <Form.Item>
            <Space direction="horizontal">
              <Button type="primary" htmlType="submit" className="login-form-button">
                Зареєструватись
              </Button>
              або
              <Button onClick={handleRegistration} name="login" type="link">
                Увійти
              </Button>
            </Space>
          </Form.Item>
        </Space>
      </Form>
    </>
  )
}

export default RegistrationForm
