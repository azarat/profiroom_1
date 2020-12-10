import React from 'react'
import { NextPage } from 'next'
import DashboardLayout from '../../layouts/DashboardLayout'
import ContainerHome from '../../src/containers/HomeContainer'
import { JsonResponseType } from '../../src/components/Header/DashboardHeader/Types'
import { HomeTypes } from '../../src/components/DashboardComponents/HomeTypes'
export type dashboardProps = {
  jsonResponse: JsonResponseType
  dashboardResponse: HomeTypes
}

const Home: NextPage<dashboardProps> = ({ jsonResponse, dashboardResponse }): JSX.Element => {
  return (
    <DashboardLayout userData={jsonResponse} title="Home Page">
      <div style={{ height: '100%', width: '100%', overflowY: 'scroll', padding: '15px' }}>
        <ContainerHome jsonResponse={jsonResponse} dashboardResponse={dashboardResponse} />
      </div>
    </DashboardLayout>
  )
}

export { authUser as getServerSideProps } from '../../src/utils/auth'

export default Home
