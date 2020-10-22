import { createContext } from 'react'

interface IContext {
  lang: string
  setLang: (arg0: string) => void
  categories?: any
}

export const MainContext = createContext<IContext>({
  lang: 'uk',
  setLang: (str) => {
    console.log(str)
  },
})
