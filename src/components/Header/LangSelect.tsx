import React, { MouseEventHandler, useState } from 'react'
//types
import { LangSelectProps } from './Types'

const LangSelect: React.FC<LangSelectProps> = ({ language, updateLanguage }): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false)

  const handleLanguage: MouseEventHandler = (e) => {
    const target = e.target as HTMLParagraphElement
    updateLanguage(target.innerText.toLocaleLowerCase())
  }

  return (
    <div tabIndex={0} role="button" className="header__language-box" onClick={() => setOpen(!open)}>
      <span style={{ textTransform: 'uppercase' }} className="header__current-lang">
        {language}
      </span>
      <img src="/assets/img/arrow-down.svg" alt="language selector" />
      {open && (
        <div className="header__popper-lang">
          <p style={{ textTransform: 'uppercase' }} role="presentation" onClick={handleLanguage}>
            ru
          </p>
          <p style={{ textTransform: 'uppercase' }} role="presentation" onClick={handleLanguage}>
            uk
          </p>
        </div>
      )}
    </div>
  )
}

export default LangSelect
