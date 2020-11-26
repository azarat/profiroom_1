import { createContext } from 'react'

interface IContext {
  lang: string
  isHistoryOpen: boolean
  setLang: (arg0: string) => void
  setMenuOpen: (arg0: boolean) => void
  setHistoryOpen: (arg0: boolean) => void
  categories?: any
  isMenuOpen: boolean
}

export const MainContext = createContext<IContext>({
  lang: 'uk',
  isMenuOpen: false,
  isHistoryOpen: false,
  setHistoryOpen: (boolean) => {
    console.log(boolean)
  },
  setMenuOpen: (boolean) => {
    console.log(boolean)
  },
  setLang: (str) => {
    console.log(str)
  },
})
