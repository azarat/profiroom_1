export type MobileMenuProps = {
  isOpen: boolean
  closeMenu: () => void
  updateLanguage: (value: string) => void
}

export type LangSelectProps = {
  language: string
  updateLanguage: (value: string) => void
}

export type UserDropDownProps = {
  isLogined: boolean
  handleExit: () => void
  userInfo: UserInfoTypes | any
}

type UserInfoTypes = {
  avatar: string
  id: number
  name: string
  rank_id: number
  rating: number
  role_id: number
  surname: string
}
