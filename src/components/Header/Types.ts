export type MobileMenuProps = {
  isOpen: boolean
  closeMenu: () => void
  updateLanguage: (value: string) => void
}

export type LangSelectProps = {
  language: string
  updateLanguage: (value: string) => void
}
