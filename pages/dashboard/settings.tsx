import React, { useState } from 'react'
//styles
import { Tabs } from 'antd'

import Security from '../../src/components/DashboardSettings/Security/Security'
import Notification from '../../src/components/DashboardSettings/Notification/Notification'
import BasicSettings from '../../src/components/DashboardSettings/settingInfo/BasicSettings'

import DashboardLayout from '../../layouts/DashboardLayout'
import { NextPage } from 'next'
import { SettingsProps } from '../../src/common/Types'

const { TabPane } = Tabs

const Settings: NextPage<SettingsProps> = ({ jsonResponse }): JSX.Element => {
  const [isModalOpen, setIsModelOpen] = useState<boolean>(false)

  const { user } = jsonResponse

  console.log(user)

  return (
    <DashboardLayout
      className={`${isModalOpen ? 'settings-page settings-page--overflow' : 'settings-page'}`}
      userData={jsonResponse}
    >
      {isModalOpen && (
        <div className="security__password-success password-success">
          <div
            role="presentation"
            className="password-success__close-icon"
            onClick={() => setIsModelOpen(false)}
          ></div>
          <div className="password-success__icon-wrapper">
            <img src="/assets/img/done.svg" alt="done icon" />
          </div>
          <p className="password-success__text">зміни збережно успішно</p>
        </div>
      )}
      <div className={`${isModalOpen ? 'setting setting--blur' : 'setting'}`}>
        <section className="setting__header">
          <div>
            <h1 className="setting__header-title">Настройки</h1>
          </div>
          <div className="setting__tab">
            <div className="setting__tab-container">
              <div className="setting__tab-menu">
                <Tabs tabPosition="top" defaultActiveKey="1">
                  <TabPane tab="Загальні" key="1">
                    <BasicSettings user={user} setModalOpen={setIsModelOpen} />
                  </TabPane>
                  <TabPane tab="Сповіщення" key="2">
                    <Notification />
                  </TabPane>
                  <TabPane tab="Безпека" key="3">
                    <Security email={user.email} setModalOpen={setIsModelOpen} />
                  </TabPane>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'

export default Settings
