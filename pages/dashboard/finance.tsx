import React from 'react'
import { NextPage } from 'next'
import DashboardLayout from '../../layouts/DashboardLayout'
import FinanceContainer from '../../src/containers/HomeContainer/FinanceContainer'
import { ConfigProvider } from 'antd'
import ukUA from 'antd/lib/locale/uk_UA'

const Finance: NextPage = ({
  userFinanceResponse,
  jsonResponse,
  userFinanceGraphResponse,
}): JSX.Element => {
  return (
    <ConfigProvider locale={ukUA}>
      <DashboardLayout title="Finance Page" userData={jsonResponse}>
        <FinanceContainer
          userFinanceGraphResponse={userFinanceGraphResponse}
          userFinanceResponse={userFinanceResponse}
        />
      </DashboardLayout>
    </ConfigProvider>
  )
}

export { userFinance as getServerSideProps } from '../../src/utils/service'

export default Finance
