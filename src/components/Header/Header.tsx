import React from 'react'

const Header = () => {
  const [lang, setLang] = React.useState<string>('uk')
  const [open, setOpen] = React.useState<boolean>(false)

  return <div className="header">Hello</div>
}

export default Header
