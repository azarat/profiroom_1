import { createContext } from 'react'

interface IContext {
  lang: string
  setLang: (arg0: string) => void
  categories?: any
  login: boolean
  setLogin: (arg0: boolean) => void
}

export const MainContext = createContext<IContext>({
  lang: 'uk',
  setLang: (str) => {
    console.log(str)
  },
  login: false,
  setLogin: (boolean) => {
    console.log(boolean)
  },
})
