import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import { NextPage } from 'next'
import Link from 'next/link'

const Offer: NextPage = (props): JSX.Element => {
  return (
    <MainLayout categories={props}>
      <div className="offer">
        <div className="container">
          <div className="offer__wrapper">
            <h2 className="offer__title">1C Бугхалтерия</h2>
            <div className="offer__user-info">
              <Link href="/">
                <a className="offer__user-avatar-link">
                  <img className="offer__user-avatar" src="/assets/img/avatar.svg" alt="" />
                </a>
              </Link>
              <div className="offer__user-text">
                <Link href="/">
                  <a className="offer__user-name">Яна Петровская</a>
                </Link>
                <div className="offer__user-starr-wrapper">
                  {' '}
                  <span className="offer__user-star"></span>
                </div>

                <span className="offer__user-comments">(1 відгук)</span>
              </div>
              <div className="offer__message-wrapper">
                <Link href="/">
                  <a className="offer__message">
                    <img src="/assets/img/envelope.svg" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export { getOfferSideProps as getServerSideProps } from '../../src/utils/service'

export default Offer
