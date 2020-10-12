import React from 'react'
import { Button } from 'antd'

const Header = () => {
  const [lang, setLang] = React.useState<string>('uk')
  const [open, setOpen] = React.useState<boolean>(false)

  return (
    <div className="header">
      <Button type="primary">Primary Button</Button>
      <Button>Default Button</Button>
      <Button type="dashed">Dashed Button</Button>
      <br />
      <Button type="text">Text Button</Button>
      <Button type="link">Link Button</Button>
    </div>
  )
}

export default Header
