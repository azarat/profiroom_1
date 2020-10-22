import React from 'react'
import { NextPage } from 'next'
// Layout
import DashboardLayout from '../layouts/DashboardLayout'

const dashboard: NextPage = (): JSX.Element => {
  return <DashboardLayout>Hello</DashboardLayout>
}

export { authUser as getServerSideProps } from '../src/utils/auth'
export default dashboard
