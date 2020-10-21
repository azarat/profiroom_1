import React from 'react'
import MainLayout from '../layouts/MainLayout'

const Dashboard = (): JSX.Element => {
  return <MainLayout>DashBoard</MainLayout>
}
export { authUser as getServerSideProps } from '../src/utils/auth'
export default Dashboard
