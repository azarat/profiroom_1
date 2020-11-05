import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const Offer = (props: any) => {
  return <MainLayout categories={props}>hello</MainLayout>
}

export { getOfferSideProps as getServerSideProps } from '../../src/utils/service'

export default Offer
