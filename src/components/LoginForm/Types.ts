export type LoginFormProps = {
  registrationHandler: () => void
}

export type LoginValues = {
  email: string
  foreignComp: boolean | undefined
  password: string
}
