import React from 'react'
import { NextPage } from 'next'
import DashboardLayout from '../../layouts/DashboardLayout'
import Home from '../../src/components/DashboardComponents/Home'
import { DashboardProps } from '../../src/common/Types'

const Dashboard: NextPage<DashboardProps> = ({ jsonResponse }): JSX.Element => {
  return (
    <DashboardLayout userData={jsonResponse}>
      <Home />
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'
export default Dashboard
