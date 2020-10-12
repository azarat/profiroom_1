import React from 'react'
import Link from 'next/link'
// Components
import {
  AppBar,
  Slide,
  Toolbar,
  useScrollTrigger,
  Input,
  IconButton,
  FormControl,
  Select,
} from '@material-ui/core'
// Icons
import MenuIcon from '@material-ui/icons/Menu'
// Types
import { HideOnScrollProps } from './Types'

const HideOnScroll = ({ children, window }: HideOnScrollProps) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined })
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const Header: React.FC<HideOnScrollProps> = (props): JSX.Element => {
  const [lang, setLang] = React.useState<string>('uk')
  const [open, setOpen] = React.useState<boolean>(false)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setLang(event.target.value as string)
  }

  const handleOpen = () => {
    setOpen((prev) => !prev)
  }

  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color="inherit">
          <div className="container">
            <Toolbar className="header__toolbar">
              <IconButton
                onClick={handleOpen}
                className="header__menu"
                edge="start"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Link href="/">
                <a>
                  <img className="header__logo" src="/logo.svg" alt="Logotype" />
                </a>
              </Link>
              <nav className="header__nav">
                <ul className="header__navigation">
                  <li>
                    <Link href="/">
                      <a className="header__navigation-item">Головна</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <a className="header__navigation-item">Каталог</a>
                    </Link>
                  </li>
                </ul>
                <Input
                  className="header__input"
                  type="search"
                  placeholder="Пошук..."
                  margin="dense"
                  color="primary"
                />
              </nav>
              <FormControl className="header__lang">
                <Select native id="lang-input" value={lang} onChange={handleChange}>
                  <option value="uk">UK</option>
                  <option value="ru">RU</option>
                  <option value="eng">EN</option>
                </Select>
              </FormControl>
              <div className="header__login">
                <Link href="/">
                  <a className="header__login-link">Увійти</a>
                </Link>
                <Link href="/">
                  <a className="header__login-link">Зареєструватись</a>
                </Link>
              </div>
            </Toolbar>
          </div>
        </AppBar>
      </HideOnScroll>
    </>
  )
}

export default Header
