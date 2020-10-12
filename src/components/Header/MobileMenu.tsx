import React from 'react'
import Link from 'next/link'

// Types
import { MobileMenuProps } from './Types'

const MobileMenu: React.FC<MobileMenuProps> = (): JSX.Element => {
  return (
    <div className="mobile__menu">
      <div className="mobile__menu-login">
        <Link href="/">
          <a className="mobile__menu-login-link">Увійти</a>
        </Link>
        <Link href="/">
          <a className="mobile__menu-login-link">Увійти</a>
        </Link>
      </div>
      <div className="mobile__menu-catalog"></div>
      <div className="mobile__menu-lang"></div>
    </div>
  )
}

export default MobileMenu
