import React from 'react'
import { NextPage } from 'next'
// Layout
import DashboardLayout from '../layouts/DashboardLayout'

import { JsonResponseType } from '../src/components/Header/DashboardHeader/Types'

type dashboardProps = {
  jsonResponse: JsonResponseType
}

const dashboard: NextPage<dashboardProps> = ({ jsonResponse }): JSX.Element => {
  return <DashboardLayout userData={jsonResponse}>Hello</DashboardLayout>
}

export { authUser as getServerSideProps } from '../src/utils/auth'
export default dashboard
