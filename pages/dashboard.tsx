import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
// Layout
import DashboardLayout from '../layouts/DashboardLayout'

import Home from '../src/components/DashboardComponents/Home'
import Projects from '../src/components/DashboardComponents/Projects'
import Services from '../src/components/DashboardComponents/Services'
import Finance from '../src/components/DashboardComponents/Finance'

import { JsonResponseType } from '../src/components/Header/DashboardHeader/Types'

type dashboardProps = {
  jsonResponse: JsonResponseType
}

const dashboard: NextPage<dashboardProps> = ({ jsonResponse }): JSX.Element => {
  const router = useRouter()
  return (
    <DashboardLayout userData={jsonResponse}>
      {router.asPath === '/dashboard/home' ? <Home /> : undefined}
      {router.asPath === '/dashboard/projects' ? <Projects /> : undefined}
      {router.asPath === '/dashboard/services' ? <Services /> : undefined}
      {router.asPath === '/dashboard/finance' ? <Finance /> : undefined}
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../src/utils/auth'
export default dashboard
