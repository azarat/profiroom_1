import React, { MouseEventHandler, useState } from 'react'
//types
import { LangSelectProps } from './Types'

const LangSelect: React.FC<LangSelectProps> = ({ language, updateLanguage }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  const handleLanguage: MouseEventHandler = (e) => {
    const target = e.target as HTMLParagraphElement
    updateLanguage(target.innerText)
  }

  return (
    <div tabIndex={0} role="button" className="header__language-box" onClick={() => setOpen(!open)}>
      <span className="header__current-lang">{language}</span>
      <img src="/assets/img/arrow-down.svg" alt="language selector" />
      {open && (
        <div className="header__popper-lang">
          <p role="presentation" onClick={handleLanguage}>
            RU
          </p>
          <p role="presentation" onClick={handleLanguage}>
            UK
          </p>
        </div>
      )}
    </div>
  )
}

export default LangSelect
