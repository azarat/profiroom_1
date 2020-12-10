import React, { Dispatch, SetStateAction } from 'react'
import PasswordChange from './PasswordChange'
import EmailChange from './EmailChange'

type SecurityProps = {
  email: string
  setModalOpen: Dispatch<SetStateAction<boolean>>
}
const Security: React.FC<SecurityProps> = ({ email, setModalOpen }): JSX.Element => {
  return (
    <div className={'security'}>
      <div className="security__wrapper">
        <PasswordChange setModalOpen={setModalOpen} />
        <EmailChange email={email} setModalOpen={setModalOpen} />
      </div>
    </div>
  )
}

export default Security
