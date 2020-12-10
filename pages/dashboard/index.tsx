import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
// Layout
import DashboardLayout from '../../layouts/DashboardLayout'

import Projects from '../../src/components/DashboardComponents/Projects'

import Services from '../../src/components/DashboardComponents/Services'
import Finance from '../../src/components/DashboardComponents/Finance'

import { JsonResponseType } from '../../src/components/Header/DashboardHeader/Types'
import { HomeTypes } from '../../src/components/DashboardComponents/HomeTypes'

export type dashboardProps = {
  jsonResponse: JsonResponseType
  dashboardResponse: HomeTypes
}

const dashboard: NextPage<dashboardProps> = ({ jsonResponse }): JSX.Element => {
  const router = useRouter()
  return (
    <DashboardLayout userData={jsonResponse}>
      {router.asPath === '/dashboard/projects' ? <Projects /> : undefined}
      {router.asPath === '/dashboard/services' ? <Services /> : undefined}
      {router.asPath === '/dashboard/finance' ? <Finance /> : undefined}
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'
export default dashboard
