import React from 'react'
import { NextPage } from 'next'
//layout
import DashboardLayout from '../../layouts/DashboardLayout'
//components
import FinanceContainer from '../../src/containers/FinanceContainer'
//ant
import { ConfigProvider } from 'antd'
import ukUA from 'antd/lib/locale/uk_UA'
//types
import { DashboardFinanceProps } from '../../src/components/DashboardFinance/Types'

const Finance: NextPage<DashboardFinanceProps> = ({
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
