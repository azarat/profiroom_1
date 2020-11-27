import React from 'react'
import { NextPage } from 'next'

//layout
import MainLayout from '../../layouts/MainLayout'
//antd

//types
import { OfferTypes } from '../../src/components/OfferCard/Types'
//components
import OfferContainer from '../../src/containers/OfferContainer'

const Offer: NextPage<OfferTypes> = (props): JSX.Element => {
  const {
    offer: { userOffer },
  } = props

  return (
    <MainLayout categories={props}>
      <OfferContainer userOffer={userOffer} />
    </MainLayout>
  )
}

export { getOfferSideProps as getServerSideProps } from '../../src/utils/service'

export default Offer
