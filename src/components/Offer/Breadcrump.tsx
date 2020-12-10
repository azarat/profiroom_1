import React from 'react'

const Breadcrump: React.FC = (): JSX.Element => {
  return (
    <nav className="offer__nav">
      <ul className="nav">
        <li className="nav__item">
          <a href="#portfolio" className="nav__link">
            Портфоліо
          </a>
        </li>
        <li className="nav__item">
          <a href="#compare" className="nav__link">
            Пакети і послуги
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            Опис
          </a>
        </li>
        <li className="nav__item">
          <a href="#rating" className="nav__link">
            Рейтинг
          </a>
        </li>
        <li className="nav__item">
          <a href="#comments" className="nav__link">
            Відгуки
          </a>
        </li>
        <li className="nav__item">
          <a href="#faq" className="nav__link">
            Питання та відповіді
          </a>
        </li>
        <li className="nav__item">
          <a href="#about-freelancer" className="nav__link">
            Про фрілансера
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Breadcrump
