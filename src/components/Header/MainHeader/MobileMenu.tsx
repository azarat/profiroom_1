import React, { useState } from 'react'
import Link from 'next/link'

// Types
import { MobileMenuProps } from './Types'

// Components
import { languageOptions } from './LangSelect'

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  closeMenu,
  updateLanguage,
}): JSX.Element => {
  const [isLangOpen, setLangOpen] = useState<boolean>(false)

  const handleClose = () => {
    closeMenu()
  }

  return (
    <div className={`mobile__menu-wrapper ${isOpen && 'active'}`}>
      <div className="mobile__menu">
        <div className="mobile__menu-login">
          {/* TODO : Добавить ссылки в href */}
          <Link href="/">
            <a className="mobile__menu-login-link">Увійти</a>
          </Link>
          <Link href="/">
            <a className="mobile__menu-register-link">Зареєструватись</a>
          </Link>
        </div>
        <div className="mobile__menu-catalog">
          <Link href="/">
            <a
              role="presentation"
              onClick={() => closeMenu()}
              className="mobile__menu-catalog-link"
            >
              Каталог
            </a>
          </Link>
        </div>
        <div className="mobile__menu-lang">
          <button
            className={`mobile__menu-lang-change ${isLangOpen && 'active-select'}`}
            onClick={() => setLangOpen(!isLangOpen)}
          >
            Змінити мову
          </button>
          <ul className={`mobile__menu-lang-list ${isLangOpen && 'active-lang'}`}>
            {languageOptions.map((lang, index) => (
              <li
                key={`${index}_${lang}`}
                role="presentation"
                onClick={() => {
                  updateLanguage(lang)
                  closeMenu()
                }}
              >
                {lang === 'uk' ? 'Українська' : lang === 'ru' ? 'Російська' : 'Англійська'}
              </li>
            ))}
          </ul>
        </div>
        <div role="presentation" onClick={handleClose} className="mobile__menu-close">
          {' '}
          &times;
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
