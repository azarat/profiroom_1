import React from 'react'
import { Switch } from 'antd'

//types
import { SwitchProps } from './Types'

const SwitchComponent: React.FC<SwitchProps> = ({ isClient, selectRole }): JSX.Element => {
  return (
    <div className="dashboard-header__switch">
      {' '}
      <p
        className={`dashboard-header__switch-text ${
          isClient && 'dashboard-header__switch-text-disabled'
        }`}
      >
        Фрілансер
      </p>
      <Switch onClick={selectRole} />
      <p
        className={`dashboard-header__switch-text ${
          !isClient && 'dashboard-header__switch-text-disabled'
        }`}
      >
        Замовник
      </p>
    </div>
  )
}

export default SwitchComponent
