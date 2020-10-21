import React from 'react'
import { NextPage } from 'next'

import MainLayout from '../layouts/MainLayout'
import CatalogList from '../src/components/CatalogList/CatalogList'

const catalog: NextPage = (props): JSX.Element => {
  return (
    <MainLayout categories={props}>
      <CatalogList />
    </MainLayout>
  )
}

export { getStaticProps } from '../src/utils/service'

export default catalog
