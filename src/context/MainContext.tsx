import { createContext } from 'react'

interface IContext {
  lang: string
  setLang: (arg0: string) => void
  setMenuOpen: (arg0: boolean) => void
  categories?: any
  isMenuOpen: boolean
}

export const MainContext = createContext<IContext>({
  lang: 'uk',
  isMenuOpen: false,
  setMenuOpen: (boolean) => {
    console.log(boolean)
  },
  setLang: (str) => {
    console.log(str)
  },
})
