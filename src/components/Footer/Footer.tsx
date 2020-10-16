import React from 'react'
import Link from 'next/link'

const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <span className="footer__rights">© Profiroom, всі права захищені, 2019</span>
          <div className="footer__additional-pages">
            {/* TODO : Добавить ссылки в href */}
            <Link href="">
              <a className="footer__additional-pages-link">Публічний договір (ОФЕРТА)</a>
            </Link>
            <Link href="">
              <a className="footer__additional-pages-link">Політика конфіденційності</a>
            </Link>
          </div>
          <div className="footer__info-block">
            <h4 className="footer__title">Profiroom</h4>
            <div className="footer__info-contact-wrapper">
              <div className="footer__about">
                <p className="footer__about-text">Онлайн біржа фрілансерів для бізнесу</p>
                <p className="footer__about-text">ТОВ «ІНВЕСТ СОЛЮШИНС ФАКТОР»</p>
                <p className="footer__about-text">01011, м.Київ, ПЕЧЕРСЬКИЙ УЗВІЗ, будинок 19</p>
              </div>
              <div className="footer__contacts">
                <a href="mailto:team@profiroom.com" className="footer__contacts-link">
                  team@profiroom.com
                </a>
                <a href="tel:+38 068 5586142" className="footer__contacts-link">
                  +38 068 5586142
                </a>
              </div>
            </div>
          </div>
          <div className="footer__payment-cards">
            <div className="footer__payments-cards-wrapper">
              <img className="footer__bank-card" src="/assets/img/Visa.svg" alt="visa card" />
            </div>
            <div className="footer__payments-cards-wrapper">
              <img
                className="footer__bank-card"
                src="/assets/img/MasterCard.svg"
                alt="master card"
              />
            </div>
          </div>
          <div className="footer__categories">
            <p className="footer__categories-title">Категорії</p>
            <nav className="footer__nav">
              <ul className="footer__categories-list">
                <li className="footer__categories-list-item">
                  {/* TODO : Добавить ссылки в href */}
                  <Link href="">
                    <a className="footer__categories-list-link">Графіка і Дизайн </a>
                  </Link>
                </li>
                <li className="footer__categories-list-item">
                  <Link href="">
                    <a className="footer__categories-list-link">Розробка та Верстка </a>
                  </Link>
                </li>
                <li className="footer__categories-list-item">
                  <Link href="">
                    <a className="footer__categories-list-link">Робота з текстами </a>
                  </Link>
                </li>
                <li className="footer__categories-list-item">
                  <Link href="">
                    <a className="footer__categories-list-link">SЕО </a>
                  </Link>
                </li>
                <li className="footer__categories-list-item">
                  <Link href="">
                    <a className="footer__categories-list-link">Інтернет маркетинг </a>
                  </Link>
                </li>
                <li className="footer__categories-list-item">
                  <Link href="">
                    <a className="footer__categories-list-link">Відео та Анімація </a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
