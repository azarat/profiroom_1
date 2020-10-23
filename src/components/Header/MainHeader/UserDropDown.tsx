import Link from 'next/link'
import React, { useRef, useState } from 'react'
// Hooks
import useOutsideClick from '../../../hooks/useOutsideClick'
// Types
import { UserDropDownProps } from './Types'

const UserDropDown: React.FC<UserDropDownProps> = ({ isLogined }): JSX.Element => {
  const [dropDown, setDropDown] = useState<boolean>(false)
  const [notificationOpen, setNotificationOpen] = useState<boolean>(false)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)

  useOutsideClick(notificationRef, () => {
    setNotificationOpen(false)
  })

  useOutsideClick(dropDownRef, () => {
    setDropDown(false)
  })

  const UserMenu = (
    <div ref={dropDownRef} className="header__drop-down">
      <ul className="header__drop-down-list">
        <li className="header__drop-down-item">
          <Link href="/">
            <a className="header__drop-down-link"> Дашбоард</a>
          </Link>
        </li>
        <li className="header__drop-down-item">
          <Link href="/">
            <a className="header__drop-down-link"> Финансы</a>
          </Link>
        </li>
        <li className="header__drop-down-item">
          <Link href="/">
            <a className="header__drop-down-link"> Чат</a>
          </Link>
        </li>
        <li className="header__drop-down-item">
          <Link href="/">
            <a className="header__drop-down-link"> Проекты</a>
          </Link>
        </li>
        <li className="header__drop-down-item header__drop-down-item--border">
          <Link href="/">
            <a className="header__drop-down-link "> Мои услуги</a>
          </Link>
        </li>
        <li className="header__drop-down-item">
          <Link href="/">
            <a className="header__drop-down-link header__drop-down-link--action"> Настройки</a>
          </Link>
        </li>
        <li className="header__drop-down-item">
          <Link href="/">
            <a className="header__drop-down-link header__drop-down-link--action"> Выйти</a>
          </Link>
        </li>
      </ul>
    </div>
  )

  const handleDropDown = () => {
    setDropDown((prev) => !prev)
  }

  const handleNotification = () => {
    setNotificationOpen((prev) => !prev)
  }

  return (
    <>
      {isLogined && (
        <div className="header__user-panel">
          <div ref={notificationRef} className="header__user-notification-wrapper">
            <div
              className="header__user-notification-icon"
              role="presentation"
              onClick={handleNotification}
            >
              <img src="/assets/img/notification-icon.svg" alt="notification icon" />
            </div>
            <div
              className={`header__user-notification  ${
                notificationOpen && 'header__user-notification--open'
              }`}
            >
              <span className="header__user-notifications">Уведомлений нет</span>
            </div>
          </div>
          <span className="header__user-greetings" role="presentation" onClick={handleDropDown}>
            {/*TODO: Имя юзера*/}
            Привіт, username
          </span>
          <div className="header__user-avatar-wrapper" role="presentation" onClick={handleDropDown}>
            <img className="header__user-avatar" src="/assets/img/avatar.svg" alt="user avatar" />
          </div>
          {dropDown && UserMenu}
        </div>
      )}
    </>
  )
}

export default UserDropDown
