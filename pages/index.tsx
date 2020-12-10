import React from 'react'
import MainLayout from '../layouts/MainLayout'

import { NextPage } from 'next'
import LandingContainer from '../src/containers/LandingContainer'

const index: NextPage = (props): JSX.Element => {
  return (
    <MainLayout categories={props}>
      <LandingContainer />
    </MainLayout>
  )
}

export { getStaticProps } from '../src/utils/service'

export default index
