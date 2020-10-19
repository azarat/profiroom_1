import React from 'react'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import Categories from '../src/components/Categories/Categories'
import { MainContext } from '../src/context/MainContext'

type MainLayoutProps = {
  children: React.ReactNode
  title?: string
  categories: any
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title, categories }) => {
  const [lang, setLang] = React.useState('uk')
  return (
    <>
      <MainContext.Provider value={{ lang, setLang }}>
        <Head>
          <title>{`${title ? `${title} | Profiroom` : 'Profiroom - фриланс биржа'}`}</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <Header />
        <Categories categories={categories} />
        <main>{children}</main>
      </MainContext.Provider>
    </>
  )
}

export default MainLayout
