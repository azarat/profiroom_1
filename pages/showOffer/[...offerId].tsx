import React from 'react'
import MainLayout from '../../layouts/MainLayout'

const Offer = (props) => {
  console.log(props)

  return <MainLayout categories={props}>hello</MainLayout>
}

export { getOfferSideProps as getServerSideProps } from '../../src/utils/service'

export default Offer
