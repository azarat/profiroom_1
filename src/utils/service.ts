import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetServerSidePropsResult,
} from 'next'

import nextCookie from 'next-cookies'

export async function getStaticProps(): Promise<any> {
  const res = await fetch('http://test.profiroom.com/Backend/api/categories')
  const json = await res.json()
  return {
    props: {
      json,
    },
  }
}

export const getSubCatalogPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { subcatalog: 'Programming' } },
      { params: { subcatalog: 'Design-Art' } },
      { params: { subcatalog: 'Audio-Video' } },
      { params: { subcatalog: 'Marketing' } },
      { params: { subcatalog: 'WorkingwithTexts' } },
      // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  }
}

export const getSubCatalogProps: GetStaticProps = async (
  context: GetStaticPropsContext
): Promise<any> => {
  const url = `http://test.profiroom.com/Backend/api/subcategories?catedory=${
    context.params && context.params.subcatalog
  }`

  const res = await fetch(url)
  const subcatalog = await res.json()
  const { props: categories } = await getStaticProps()
  return {
    props: {
      subcatalog,
      categories,
    },
  }
}

export const getCategorySideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<any> => {
  const url = 'http://test.profiroom.com/Backend/api/catalog'

  const params = context && context.params && context.params.subcatalog
  const page = context.query.page || 1
  const extraCommercial = context.query.extraCommercial && context.query.extraCommercial
  const extraTerm = context.query.extraTerm && context.query.extraTerm
  const extraChanges = context.query.extraChanges && context.query.extraChanges
  const maxTerm = context.query.maxTerm && context.query.maxTerm
  const minPrice = context.query.minPrice && context.query.minPrice
  const maxPrice = context.query.maxPrice && context.query.maxPrice
  const online = context.query.online && context.query.online

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category: params![0],
      subCategory: params![1],
      extraCommercial,
      extraTerm,
      extraChanges,
      maxTerm,
      minPrice,
      maxPrice,
      page,
      online: online === 'true',
    }),
  })
  const catalog = await res.json()

  const categoriesRes = await fetch('http://test.profiroom.com/Backend/api/categories')
  const json = await categoriesRes.json()

  return {
    props: {
      catalog,
      json,
    },
  }
}

export const getOfferSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<any> => {
  const url = 'http://test.profiroom.com/Backend/api/showOffer'

  const params = context && context.params && context.params.offerId
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      offerId: params![0],
    }),
  })
  const offer = await res.json()
  const categoriesRes = await fetch('http://test.profiroom.com/Backend/api/categories')
  const json = await categoriesRes.json()

  return {
    props: {
      offer,
      json,
    },
  }
}

export const userFinance: GetServerSideProps = async (
  context: GetServerSidePropsContext
): Promise<GetServerSidePropsResult<any>> => {
  const { jwt_token } = nextCookie(context)

  const userFinanceUrl = `${process.env.NEXT_PUBLIC_API}api/userFinance`
  const userFinanceGraphUrl = `${process.env.NEXT_PUBLIC_API}api/userFinanceGraph`
  const url = `${process.env.NEXT_PUBLIC_API}api/user`

  try {
    const userFinance = await fetch(userFinanceUrl, {
      headers: {
        Authorization: `bearer ${jwt_token}`,
      },
    })
    const userFinanceGraph = await fetch(userFinanceGraphUrl, {
      method: 'POST',
      body: JSON.stringify({
        year: 2020,
      }),
      headers: {
        Authorization: `bearer ${jwt_token}`,
        'Content-Type': 'application/json',
      },
    })
    const response = await fetch(url, {
      mode: 'cors',
      credentials: 'include',
      headers: {
        Authorization: `bearer ${jwt_token}`,
      },
    })
    console.log('Allo: ', userFinanceGraph)
    const userFinanceResponse = await userFinance.json()
    const userFinanceGraphResponse = await userFinanceGraph.json()
    const jsonResponse = await response.json()
    console.log('Alyyylo: ', userFinanceGraphResponse)

    return {
      props: { userFinanceResponse, jsonResponse, userFinanceGraphResponse },
    }
  } catch (e) {
    console.error(e.message)
  }
  return { props: { message: 'undefined token' } }
}
