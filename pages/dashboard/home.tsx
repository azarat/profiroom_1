import React from 'react'
import { NextPage } from 'next'
import DashboardLayout from '../../layouts/DashboardLayout'
import { dashboardProps } from './index'
import ContainerHome from '../../src/containers/HomeContainer/HomeContainer'

const Home: NextPage<dashboardProps> = ({ jsonResponse, dashboardResponse }): JSX.Element => {
  return (
    <DashboardLayout userData={jsonResponse} title="Home Page">
      <ContainerHome jsonResponse={jsonResponse} dashboardResponse={dashboardResponse} />
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'

export default Home
