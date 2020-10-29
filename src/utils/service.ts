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
  console.log(context)

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
      { params: { subcatalog: ['Programming', '1C'] } },
      { params: { subcatalog: ['Programming', 'C%23'] } },
      { params: { subcatalog: ['Programming', 'C%2EC%2B%2B'] } },
      { params: { subcatalog: ['Programming', 'Java'] } },
      { params: { subcatalog: ['Programming', 'Javascript'] } },
      { params: { subcatalog: ['Programming', 'Microsoft.NET'] } },
      { params: { subcatalog: ['Programming', 'Node.js'] } },
      { params: { subcatalog: ['Programming', 'PHP'] } },
      { params: { subcatalog: ['Programming', 'Python'] } },
      { params: { subcatalog: ['Programming', 'Ruby'] } },
      { params: { subcatalog: ['Programming', 'Swift'] } },
      { params: { subcatalog: ['Programming', 'Webprogramming'] } },
      { params: { subcatalog: ['Programming', 'WebsiteDesignersandCMS'] } },
      { params: { subcatalog: ['Programming', 'OnlineStoresandE-Commerce'] } },
      { params: { subcatalog: ['Programming', 'GameDevelopment'] } },
      { params: { subcatalog: ['Programming', 'Developmentofchatbots'] } },
      { params: { subcatalog: ['Programming', 'Applicationprogramming'] } },
      { params: { subcatalog: ['Programming', 'HybridMobileApplications'] } },
      { params: { subcatalog: ['Programming', 'AndroidDevelopment'] } },
      { params: { subcatalog: ['Programming', 'DevelopmentforiOS%28iPhone%2FiPad%29'] } },
      { params: { subcatalog: ['Programming', 'SDatabases'] } },
      { params: { subcatalog: ['Programming', 'TestingandQA'] } },
      { params: { subcatalog: ['Programming', 'Systemprogramming'] } },

      // See the "paths" section below
    ],
    fallback: false, // See the "fallback" section below
  }
}
