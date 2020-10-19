export type RegistrationFormProps = {
  registrationHandler: () => void
}

export type RegistrationValues = {
  agreed: boolean
  email: string
  name: string
  password: string
  password_confirmation: string
  surname: string
}
