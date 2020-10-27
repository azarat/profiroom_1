import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
} from 'next'

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
  console.log(context.params)
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
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      category: params[0],
      subCategory: params[1],
    }),
  })
  console.log(res)
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

export const getCategoryPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { subcatalog: 'Programming', catedory: '1C' } },
      { params: { subcatalog: 'Programming', catedory: 'C#' } },
      { params: { subcatalog: 'Programming', catedory: 'C%2EC%2B%2B' } },
      { params: { subcatalog: 'Programming', catedory: 'Java' } },
      { params: { subcatalog: 'Programming', catedory: 'Javascript' } },
      { params: { subcatalog: 'Programming', catedory: 'Microsoft.NET' } },
      { params: { subcatalog: 'Programming', catedory: 'Node.js' } },
      { params: { subcatalog: 'Programming', catedory: 'PHP' } },
      { params: { subcatalog: 'Programming', catedory: 'Python' } },
      { params: { subcatalog: 'Programming', catedory: 'Ruby' } },
      { params: { subcatalog: 'Programming', catedory: 'Swift' } },
      { params: { subcatalog: 'Programming', catedory: 'Webprogramming' } },
      { params: { subcatalog: 'Programming', catedory: 'WebsiteDesignersandCMS' } },
      { params: { subcatalog: 'Programming', catedory: 'OnlineStoresandE-Commerce' } },
      { params: { subcatalog: 'Programming', catedory: 'GameDevelopment' } },
      { params: { subcatalog: 'Programming', catedory: 'Developmentofchatbots' } },
      { params: { subcatalog: 'Programming', catedory: 'Applicationprogramming' } },
      { params: { subcatalog: 'Programming', catedory: 'HybridMobileApplications' } },
      { params: { subcatalog: 'Programming', catedory: 'AndroidDevelopment' } },
      { params: { subcatalog: 'Programming', catedory: 'DevelopmentforiOS%28iPhone%2FiPad%29' } },
      { params: { subcatalog: 'Programming', catedory: 'SDatabases' } },
      { params: { subcatalog: 'Programming', catedory: 'TestingandQA' } },
      { params: { subcatalog: 'Programming', catedory: 'Systemprogramming' } },

      // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  }
}
