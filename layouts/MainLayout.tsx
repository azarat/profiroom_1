import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../src/components/Header/MainHeader/Header'
import Footer from '../src/components/Footer/Footer'
import Categories from '../src/components/Categories/Categories'

type MainLayoutProps = {
  children: React.ReactNode
  title?: string
  categories?: any
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, categories }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{`${title ? `${title} | Profiroom` : 'Profiroom - фриланс биржа'}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Header />
      {router.pathname !== '/login' && router.pathname !== '/dashboard' ? (
        <Categories categories={categories} />
      ) : null}
      <main>{children}</main>
      {router.pathname !== '/login' ? <Footer /> : null}
    </>
  )
}

export default MainLayout
