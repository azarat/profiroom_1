import React, { useRef, useState } from 'react'
// Hooks
import useOutlineClick from '../../hooks/useOutsideClick'
//types
import { LangSelectProps } from './Types'

export const languageOptions = ['ru', 'uk', 'en']

const LangSelect: React.FC<LangSelectProps> = ({ language, updateLanguage }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)
  const langBoxRef = useRef<HTMLDivElement>(null)

  useOutlineClick(langBoxRef, () => {
    setOpen(false)
  })

  return (
    <div
      ref={langBoxRef}
      role="presentation"
      className="header__language-box"
      onClick={() => setOpen(!open)}
    >
      <span className="header__current-lang">{language}</span>
      <img src="/assets/img/arrow-down.svg" alt="language selector" />
      {open && (
        <div className="header__lang">
          {languageOptions.map((lang, index) => (
            <p
              key={`${index}_${lang}`}
              className="header__lang-select"
              role="presentation"
              onClick={() => {
                updateLanguage(lang)
              }}
            >
              {lang}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default LangSelect
