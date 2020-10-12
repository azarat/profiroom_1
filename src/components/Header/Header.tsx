import React from 'react'
<<<<<<< HEAD
import { Button } from 'antd'
=======

>>>>>>> 94e475d5ec69900698509b0ce2839999cade0096
const Header = () => {
  const [lang, setLang] = React.useState<string>('uk')
  const [open, setOpen] = React.useState<boolean>(false)

<<<<<<< HEAD
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
=======
  return <div className="header">Hello</div>
>>>>>>> 94e475d5ec69900698509b0ce2839999cade0096
}

export default Header
