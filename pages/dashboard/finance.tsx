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
        <div style={{ height: '100%', width: '100%', overflowY: 'scroll', padding: '15px' }}>
          <FinanceContainer
            userFinanceGraphResponse={userFinanceGraphResponse}
            userFinanceResponse={userFinanceResponse}
          />
        </div>
      </DashboardLayout>
    </ConfigProvider>
  )
}

export { userFinance as getServerSideProps } from '../../src/utils/service'

export default Finance
