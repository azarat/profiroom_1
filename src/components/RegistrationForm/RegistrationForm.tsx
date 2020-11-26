import React from 'react'
import Link from 'next/link'
// Styles
import { Form, Space, Button, Checkbox, notification } from 'antd'
import FormField from '../FormField/FormField'
// Types
import { RegistrationFormProps, RegistrationValues } from './Types'
import { RuleObject } from 'antd/lib/form'

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

  const handleRegistration = (): void => {
    registrationHandler()
  }

  const validatePassword = (_: RuleObject, value: string, callback: (arg0?: string) => void) => {
    const regExpPass = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
    if (value && !value.match(regExpPass)) {
      callback('Пароль не валідний')
    } else {
      callback()
    }
  }

  const validateCheckBox = (_: RuleObject, value: boolean, callback: (arg0?: string) => void) => {
    if (!value) {
      callback('Це поле є обовʼязковим')
    } else {
      callback()
    }
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
        className="registration__form"
        form={form}
        onFinish={onFinish}
        name="register"
        scrollToFirstError
      >
        <Space direction="vertical">
          <FormField
            label="Ваше ім`я"
            name="name"
            type="text"
            id="FirstNameField"
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
          />
          <FormField
            label="Ваше прізвище"
            name="surname"
            type="text"
            id="SurNameField"
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
          />
          <FormField
            id="EmailField"
            name="email"
            label="Ваш E-mail"
            type="email"
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
          />
          <FormField
            id="RegistrationPasswordField"
            type="password"
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
          />
          <p className="registration__password-information">
            Пароль повинен складатися з не менш ніж 8 символів, містити цифри та латинські літери, у
            тому числі великі літери
          </p>

          <FormField
            id="ConfirmPasswordRegistration"
            type="password"
            label="Підтвердіть пароль"
            name="password_confirmation"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Будь ласка підтвердіть Ваш пароль!',
              },
              ({ getFieldValue }: any) => ({
                validator(_: any, value: any) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject('Паролі не співпадають')
                },
              }),
            ]}
          ></FormField>
          <div className="login__form-checkbox">
            <Form.Item
              name="agreed"
              rules={[
                {
                  validator: validateCheckBox,
                  message: 'Це поле є обовʼязковим',
                },
              ]}
              valuePropName="checked"
            >
              <Checkbox className="registration__checkbox">
                Я згоден(-на) з {/* TODO: add link to offer politics */}
                <Link href="/">
                  <a className="registration__offer">Політикою конфіденційності</a>
                </Link>
              </Checkbox>
            </Form.Item>
          </div>
          <div className="login__form-wrapper-btn">
            <Button type="primary" htmlType="submit" className="login__form-button">
              Зареєструватись
            </Button>
          </div>
        </Space>
      </Form>
    </>
  )
}

export default RegistrationForm
