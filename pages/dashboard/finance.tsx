import React from 'react'
import { NextPage } from 'next'
import DashboardLayout from '../../layouts/DashboardLayout'
import { dashboardProps } from './index'
import FinanceContainer from '../../src/containers/HomeContainer/FinanceContainer'
import { ConfigProvider } from 'antd'
import ukUA from 'antd/lib/locale/uk_UA'

const Finance: NextPage<dashboardProps> = ({ jsonResponse, dashboardResponse }): JSX.Element => {
  return (
    <ConfigProvider locale={ukUA}>
      <DashboardLayout userData={jsonResponse} title="Home Page">
        <FinanceContainer dashboardResponse={dashboardResponse} />
      </DashboardLayout>{' '}
    </ConfigProvider>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'

export default Finance
