import React from 'react'
import Link from 'next/link'
// Styles
import { Form, Input, Space, Button, Checkbox, notification } from 'antd'

// Icons
import { UserOutlined, MailOutlined, LockOutlined, UserAddOutlined } from '@ant-design/icons'

// Types
import { RegistrationFormProps, RegistrationValues } from './Types'

const RegistrationForm: React.FC<RegistrationFormProps> = ({
  registrationHandler,
}): JSX.Element => {
  const [form] = Form.useForm()

  const openNotificationSuccess = (): void => {
    const args = {
      message: 'Реєстрація успішна!',
      description: 'На вказану Вами пошту прийде лист з підтвердженням реєстрації.',
      duration: 5,
    }
    notification.open(args)
  }

  const openNotificationEmailError = (): void => {
    const args = {
      message: 'Виникла помилка!',
      description:
        'Вказана пошта вже зареєстрована на цьому сайті. Якщо ви забули пароль, відновіть його, та використовуйте для входу на сайт.',
      duration: 5,
    }
    notification.open(args)
  }

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

  const validatePassword = (rule: any, value: string, callback: any) => {
    const regExpPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    if (value && !value.match(regExpPass)) {
      callback('Пароль не валідний')
    } else {
      callback()
    }
  }

  const validateCheckBox = (rule: any, value: boolean, callback: any) => {
    if (!value) {
      callback('Це поле є обовʼязковим')
    } else {
      callback()
    }
  }

  const handleRegistration = (): void => {
    registrationHandler()
  }

  const onFinish = async (values: RegistrationValues): Promise<void> => {
    const url = `${process.env.NEXT_PUBLIC_API}api/register`
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(values),
    })
    const result = await response.json()
    if (result.email && result.email[0] === 'The email has already been taken.') {
      openNotificationEmailError()
    }
    if (result === 'ok') {
      openNotificationSuccess()
      handleRegistration()
    }
  }

  return (
    <>
      <h1 className="login__title">Реєстрація</h1>
      <h4 className="login__subtitle">
        Ласкаво просимо на кращу платформу для фрілансу Profiroom!
      </h4>
      <Form
        {...formItemLayout}
        className="registration__form"
        form={form}
        onFinish={onFinish}
        name="register"
        scrollToFirstError
      >
        <Space direction="vertical">
          <Form.Item
            label="Ваше ім`я"
            name="name"
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
            name="surname"
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
                min: 8,
                message: 'Пароль має бути не менше 8 символів',
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
            Пароль повинен складатися з не менш ніж 8 символів, містити цифри та латинські літери, у
            тому числі великі літери
          </p>

          <Form.Item
            label="Підтвердіть пароль"
            name="password_confirmation"
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
          <Form.Item
            {...tailFormItemLayout}
            name="agreed"
            rules={[
              {
                validator: validateCheckBox,
                message: 'Це поле є обовʼязковим',
              },
            ]}
            valuePropName="checked"
          >
            <Checkbox>
              Я згоден(-на) з {/* TODO: add link to offer politics */}
              <Link href="/">
                <a className="registration__offer">Політикою конфіденційності</a>
              </Link>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
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
