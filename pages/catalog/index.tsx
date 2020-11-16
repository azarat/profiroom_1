import React from 'react'
import { NextPage } from 'next'
// Layouts
import MainLayout from '../../layouts/MainLayout'
// Components
import CatalogList from '../../src/components/CatalogList/CatalogList'

const index: NextPage<{ json: any }> = (props): JSX.Element => {
  return (
    <MainLayout categories={props}>
      <CatalogList categories={props} />
    </MainLayout>
  )
}

export { getStaticProps } from '../../src/utils/service'

export default index
